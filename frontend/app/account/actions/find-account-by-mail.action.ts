"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getTranslations } from "@/config/translations";
import { findAccountByMail } from "@/gateways/account.gateway";
import { CookiesKeys } from "@/types/cookies-keys.enum";

import { z } from "zod";

const t = getTranslations("pt"); // Server action - usa português por padrão

type State = {
  errorMessage?: string;
};

const schema = z.string().email({ message: t.errors.invalidEmail });

export async function findAccountByMailAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const result = schema.safeParse(formData.get("mail"));
  if (!result.success)
    return { errorMessage: result.error.format()._errors[0] };

  try {
    const account = await findAccountByMail(result.data);
    if (account) {
      cookies().set(CookiesKeys.accountId, `${account.id}`, { secure: true });
      redirect(`/account/${account.id}`);
    }
    return { errorMessage: t.errors.emailNotFound };
  } catch (err) {
    return { errorMessage: t.errors.loginFailed };
  }
}
