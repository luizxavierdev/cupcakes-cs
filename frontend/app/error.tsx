"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/atom/button";
import { useTranslations } from "@/hooks/use-translations";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const t = useTranslations();
  
  useEffect(() => {
    // Log do erro para monitoramento
    // Error logging can be handled by an error monitoring service
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 text-center">
      <div className="text-6xl mb-4">⚠️</div>
      <h1 className="text-4xl font-bold">{t.errorPages.serverError.title}</h1>
      <p className="text-lg text-default-500 max-w-md">
        {t.errorPages.serverError.message}
      </p>
      <div className="flex gap-4 mt-4">
        <Button onClick={reset} extraClassNames="">
          {t.errorPages.serverError.tryAgain}
        </Button>
        <Button
          extraClassNames=""
          onClick={() => router.push("/")}
        >
          {t.errorPages.serverError.backHome}
        </Button>
      </div>
    </div>
  );
}

