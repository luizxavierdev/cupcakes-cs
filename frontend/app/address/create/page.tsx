"use client";
import { useState } from "react";

import { Input } from "@nextui-org/input";
import { Checkbox, Select, SelectItem } from "@nextui-org/react";

import { Button } from "@/components/atom/button";
import { useTranslations } from "@/hooks/use-translations";
import { STATE_UF } from "@/utils/state-uf.contant";

import { createAccountAddressAction } from "../actions/create-account-address.action";

import { useFormState, useFormStatus } from "react-dom";

export default function Page() {
  const [state, formAction] = useFormState(createAccountAddressAction, {});
  const { pending } = useFormStatus();
  const t = useTranslations();
  const [form, setForm] = useState({
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const [loadingCompletion, setLoadingCompletion] = useState(false);

  const isLoading = pending || loadingCompletion;

  const handleCepAutocompletation = async (cep: string) => {
    try {
      setLoadingCompletion(true);
      const res = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
      const data = await res.json();
      setForm((state) => ({
        ...state,
        address: data.street ?? "",
        neighborhood: data.neighborhood ?? "",
        city: data.city ?? "",
        state: data.state ?? "",
      }));
    } catch (err) {
    } finally {
      setLoadingCompletion(false);
    }
  };
  return (
    <div className="grow flex flex-col justify-center items-stretch min-h-[50vh] w-screen sm:w-96 px-8">
      <form
        className="flex flex-col justify-center items-stretch gap-4"
        action={formAction}
      >
        <h2>{t.titles.enterAddress}</h2>
        <Input
          type="text"
          name="zipcode"
          variant="bordered"
          label={t.forms.zipcode}
          isRequired
          isDisabled={isLoading}
          errorMessage={state.errors?.zipcode}
          value={form.zipcode}
          onChange={(e) => {
            const value = e.target.value.replaceAll(/\D/g, "").slice(0, 8);
            if (value.length === 8) {
              handleCepAutocompletation(value);
            }
            setForm((state) => ({
              ...state,
              zipcode: value,
            }));
          }}
        />
        <Input
          type="text"
          name="address"
          variant="bordered"
          label={t.forms.address}
          isRequired
          isDisabled={isLoading}
          errorMessage={state.errors?.address}
          value={form.address}
          onChange={(e) => {
            setForm((state) => ({
              ...state,
              address: e.target.value,
            }));
          }}
        />
        <section className="flex flex-row gap-2">
          <Input
            className="grow-0 w-fit"
            type="text"
            name="number"
            variant="bordered"
            label={t.forms.number}
            isRequired
            isDisabled={isLoading}
            errorMessage={state.errors?.number}
            value={form.number}
            onChange={(e) => {
              setForm((state) => ({
                ...state,
                number: e.target.value.replaceAll(/\D/g, ""),
              }));
            }}
          />
          <Input
            className="grow"
            type="text"
            name="complement"
            variant="bordered"
            label={t.forms.complement}
            isDisabled={isLoading}
            errorMessage={state.errors?.complement}
            value={form.complement}
            onChange={(e) => {
              setForm((state) => ({
                ...state,
                complement: e.target.value,
              }));
            }}
          />
        </section>
        <Input
          type="text"
          name="neighborhood"
          variant="bordered"
          label={t.forms.neighborhood}
          isRequired
          isDisabled={isLoading}
          errorMessage={state.errors?.neighborhood}
          value={form.neighborhood}
          onChange={(e) => {
            setForm((state) => ({
              ...state,
              neighborhood: e.target.value,
            }));
          }}
        />
        <section className="grow flex flex-row gap-2">
          <Input
            className="grow"
            type="text"
            name="city"
            variant="bordered"
            label={t.forms.city}
            isRequired
            isDisabled={isLoading}
            errorMessage={state.errors?.city}
            value={form.city}
            onChange={(e) => {
              setForm((state) => ({
                ...state,
                city: e.target.value,
              }));
            }}
          />
          <Select
            className="w-32"
            name="state"
            variant="bordered"
            label={t.forms.state}
            isDisabled={isLoading}
            selectedKeys={[form.state]}
            onChange={(e) => {
              setForm((state) => ({
                ...state,
                state: e.target.value,
              }));
            }}
          >
            {STATE_UF.map((uf) => (
              <SelectItem key={uf} value={uf}>
                {uf}
              </SelectItem>
            ))}
          </Select>
        </section>
        <Checkbox className="self-center" name="favorite" value="true" defaultSelected>
          {t.forms.saveAsMain}
        </Checkbox>
        {state.errors?.request && (
          <div className="text-center text-danger text-sm p-2 bg-danger-50 dark:bg-danger-900/20 rounded-lg">
            {state.errors?.request}
          </div>
        )}
        <Button type="submit" fullWidth isLoading={isLoading}>
          {t.buttons.create}
        </Button>
      </form>
    </div>
  );
}
