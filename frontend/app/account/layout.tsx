"use client";

import { ReactNode } from "react";

import { title } from "@/components/primitives";
import { useTranslations } from "@/hooks/use-translations";


export default function Layout({ children }: { children: ReactNode }) {
  const t = useTranslations();

  return (
    <section className="grow flex flex-col justify-around items-center space-y-4">
      <h1 className={title()}>{t.nav.account}</h1>
      {children}
    </section>
  );
}
