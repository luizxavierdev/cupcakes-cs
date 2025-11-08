"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createAccountAddress } from "@/gateways/account-address.gateway";
import { CookiesKeys } from "@/types/cookies-keys.enum";

import { AxiosError } from "axios";
import { z } from "zod";

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
    .regex(/^\d+$/, { message: "ZIP code must contain only numbers" })
    .length(8, { message: "ZIP code must be 8 digits long" }),
  address: z
    .string()
    .min(3, { message: "Address must be at least 3 characters long" })
    .max(255, { message: "Address must be at most 255 characters long" }),
  number: z.number(),
  complement: z.string().optional(),
  neighborhood: z
    .string()
    .min(1, { message: "Neighborhood must be at least 1 character long" })
    .max(255, { message: "Neighborhood must be at most 255 characters long" }),
  city: z
    .string()
    .min(3, { message: "City must be at least 3 characters long" })
    .max(255, { message: "City must be at most 255 characters long" }),
  state: z.string().length(2, { message: "State must be 2 letters long" }),
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
        request:
          "It looks like you haven't logged in yet, go back to the account menu and do so.",
      },
    };

  try {
    await createAccountAddress({
      ...result.data,
      accountId: Number(accountCookie.value),
    });
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        errors: { request: err.response?.data?.message || err.message },
      };
    }
    if (err instanceof Error) {
      return {
        errors: { request: err.message },
      };
    }
    return { errors: { request: "Unexpected error" } };
  }
  redirect(`/account/${accountCookie.value}`);
}
