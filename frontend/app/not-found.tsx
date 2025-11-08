"use client";

import Link from "next/link";

import { Button } from "@/components/atom/button";
import { useTranslations } from "@/hooks/use-translations";

export default function NotFound() {
  const t = useTranslations();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 text-center">
      <div className="text-6xl mb-4">🍰</div>
      <h1 className="text-4xl font-bold">{t.errorPages.notFound.title}</h1>
      <p className="text-lg text-default-500 max-w-md">
        {t.errorPages.notFound.message}
      </p>
      <Link href="/">
        <Button extraClassNames="mt-4">
          {t.errorPages.notFound.backHome}
        </Button>
      </Link>
    </div>
  );
}

