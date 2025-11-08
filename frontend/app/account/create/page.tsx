"use client";
import { Input } from "@nextui-org/input";

import { Button } from "@/components/atom/button";
import { useTranslations } from "@/hooks/use-translations";

import { createAccountAction } from "../actions/create-account.action";

import { useFormState, useFormStatus } from "react-dom";

export default function AccountPage() {
  const [state, formAction] = useFormState(createAccountAction, {});
  const { pending } = useFormStatus();
  const t = useTranslations();

  return (
    <div className="grow flex flex-col justify-center items-stretch min-h-[50vh] w-screen sm:w-96 px-8">
      <form
        className="flex flex-col justify-center items-center space-y-4"
        action={formAction}
      >
        <h2>{t.titles.enterDetails}</h2>
        <Input
          type="email"
          name="email"
          variant="bordered"
          label={t.forms.email}
          isRequired
          errorMessage={state.errors?.email}
          isDisabled={pending}
        />
        <Input
          type="text"
          name="firstName"
          variant="bordered"
          label={t.forms.name}
          isRequired
          errorMessage={state.errors?.firstName}
          isDisabled={pending}
        />
        <Input
          type="text"
          name="lastName"
          variant="bordered"
          label={t.forms.lastName}
          isRequired
          errorMessage={state.errors?.lastName}
          isDisabled={pending}
        />
        <Input
          type="tel"
          name="phone"
          variant="bordered"
          label={t.forms.phone}
          isRequired
          errorMessage={state.errors?.phone}
          isDisabled={pending}
        />

        {state.errors?.request && (
          <div className="text-center text-danger text-sm p-2 bg-danger-50 dark:bg-danger-900/20 rounded-lg w-4/5">
            {state.errors?.request}
          </div>
        )}

        <Button type="submit" extraClassNames="w-4/5" isLoading={pending}>
          {t.buttons.create}
        </Button>
      </form>
    </div>
  );
}
