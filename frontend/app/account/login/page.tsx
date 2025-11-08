"use client";
import { Input } from "@nextui-org/input";

import { Button } from "@/components/atom/button";
import { LinkWithLoading } from "@/components/atom/LinkWithLoading";
import { useTranslations } from "@/hooks/use-translations";

import { findAccountByMailAction } from "../actions/find-account-by-mail.action";

import { useFormState, useFormStatus } from "react-dom";

export default function AccountPage() {
  const [state, formAction] = useFormState(findAccountByMailAction, {});
  const { pending } = useFormStatus();
  const t = useTranslations();
  
  return (
    <div className="grow flex flex-col justify-center items-center min-h-[50vh] w-screen sm:w-96 px-8">
      <form
        className="flex flex-col justify-center items-center space-y-4"
        action={formAction}
      >
        <h2>{t.titles.searchEmail}</h2>
        {!pending && state.errorMessage && (
          <div className="text-center text-danger text-sm p-2 bg-danger-50 dark:bg-danger-900/20 rounded-lg w-4/5">
            {state.errorMessage}
          </div>
        )}
        <Input
          type="email"
          name="mail"
          variant="bordered"
          label={t.forms.email}
          isDisabled={pending}
        />
        <Button type="submit" extraClassNames="w-4/5" isLoading={pending}>
          {t.buttons.search}
        </Button>
      </form>
      <LinkWithLoading className="m-2" href="/account/create">
        {t.buttons.createAccount}
      </LinkWithLoading>
    </div>
  );
}
