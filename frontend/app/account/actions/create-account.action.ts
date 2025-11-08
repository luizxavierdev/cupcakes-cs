"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getTranslations } from "@/config/translations";
import { createAccount } from "@/gateways/account.gateway";
import { CookiesKeys } from "@/types/cookies-keys.enum";

import { z } from "zod";

const t = getTranslations("pt"); // Server action - usa português por padrão

type State = {
  errors?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    request?: string;
  };
};

const schema = z.object({
  email: z.string().email({ message: t.errors.invalidEmail }),
  firstName: z
    .string()
    .min(1, { message: t.errors.nameRequired })
    .regex(/^([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s])+$/, {
      message: t.errors.nameOnlyLetters,
    })
    .min(3, { message: t.errors.nameMinLength })
    .max(32, { message: t.errors.nameMaxLength }),
  lastName: z
    .string()
    .min(1, { message: t.errors.lastNameRequired })
    .regex(/^([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s])+$/, {
      message: t.errors.lastNameOnlyLetters,
    })
    .min(3, { message: t.errors.lastNameMinLength })
    .max(32, { message: t.errors.lastNameMaxLength }),
  phone: z
    .string()
    .min(1, { message: t.errors.phoneRequired })
    .regex(/^\d+$/, { message: t.errors.phoneOnlyDigits })
    .length(11, {
      message: t.errors.phoneLength,
    }),
});

export async function createAccountAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const result = schema.safeParse({
    email: formData.get("email"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
  });

  if (!result.success) {
    return {
      errors: {
        email: result.error.format().email?._errors[0],
        firstName: result.error.format().firstName?._errors[0],
        lastName: result.error.format().lastName?._errors[0],
        phone: result.error.format().phone?._errors[0],
      },
    };
  }

  let accountId = 0;
  try {
    const account = await createAccount(result.data);
    accountId = account.id;
    cookies().set(CookiesKeys.accountId, `${account.id}`, { secure: true });
  } catch (err) {
    if (err instanceof Error) {
      // Melhorar mensagens de erro específicas
      const errorMessage = err.message.toLowerCase();
      if (errorMessage.includes("email") || errorMessage.includes("já existe") || errorMessage.includes("already exists")) {
        return {
          errors: { request: t.errors.emailAlreadyExists },
        };
      }
      return {
        errors: { request: t.errors.createAccountFailed },
      };
    }
    return { errors: { request: t.errors.requestFailed } };
  }

  redirect(`/account${accountId ? `/${accountId}` : ""}`);
}
