"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getTranslations } from "@/config/translations";
import { createAccountAddress } from "@/gateways/account-address.gateway";
import { CookiesKeys } from "@/types/cookies-keys.enum";

import { AxiosError } from "axios";
import { z } from "zod";

const t = getTranslations("pt"); // Server action - usa português por padrão

type State = {
  errors?: {
    zipcode?: string;
    address?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    favorite?: string;
    request?: string;
  };
};

const schema = z.object({
  zipcode: z
    .string()
    .min(1, { message: t.errors.zipcodeRequired })
    .regex(/^\d+$/, { message: t.errors.zipcodeInvalid })
    .length(8, { message: t.errors.zipcodeInvalid }),
  address: z
    .string()
    .min(1, { message: t.errors.addressRequired })
    .min(3, { message: t.errors.addressMinLength })
    .max(255, { message: t.errors.addressMaxLength }),
  number: z.number({ message: t.errors.numberRequired }),
  complement: z.string().optional(),
  neighborhood: z
    .string()
    .min(1, { message: t.errors.neighborhoodRequired })
    .max(255, { message: t.errors.neighborhoodMaxLength }),
  city: z
    .string()
    .min(1, { message: t.errors.cityRequired })
    .min(3, { message: t.errors.cityMinLength })
    .max(255, { message: t.errors.cityMaxLength }),
  state: z.string().length(2, { message: t.errors.stateLength }),
  favorite: z.boolean(),
});


export async function createAccountAddressAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const result = schema.safeParse({
    zipcode: formData.get("zipcode"),
    address: formData.get("address"),
    number: Number(formData.get("number")),
    complement: formData.get("complement"),
    neighborhood: formData.get("neighborhood"),
    city: formData.get("city"),
    state: formData.get("state"),
    favorite: Boolean(formData.get("favorite")),
  });

  if (!result.success) {
    return {
      errors: {
        zipcode: result.error.format().zipcode?._errors[0],
        address: result.error.format().address?._errors[0],
        number: result.error.format().number?._errors[0],
        complement: result.error.format().complement?._errors[0],
        neighborhood: result.error.format().neighborhood?._errors[0],
        city: result.error.format().city?._errors[0],
        state: result.error.format().state?._errors[0],
        favorite: result.error.format().favorite?._errors[0],
      },
    };
  }

  const accountCookie = cookies().get(CookiesKeys.accountId);
  if (!accountCookie)
    return {
      errors: {
        request: "Você precisa estar logado para cadastrar um endereço. Faça login e tente novamente.",
      },
    };

  try {
    await createAccountAddress({
      ...result.data,
      accountId: Number(accountCookie.value),
    });
  } catch (err) {
    if (err instanceof AxiosError) {
      const errorMsg = err.response?.data?.message || err.message;
      // Melhorar mensagens de erro da API
      if (errorMsg.toLowerCase().includes("not found") || errorMsg.toLowerCase().includes("não encontrado")) {
        return {
          errors: { request: t.errors.notFound },
        };
      }
      return {
        errors: { request: t.errors.createAddressFailed },
      };
    }
    if (err instanceof Error) {
      return {
        errors: { request: t.errors.createAddressFailed },
      };
    }
    return { errors: { request: t.errors.genericError } };
  }
  redirect(`/account/${accountCookie.value}`);
}
