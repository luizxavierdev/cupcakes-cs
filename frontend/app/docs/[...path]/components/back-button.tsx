"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/atom/button";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      extraClassNames=""
      onClick={() => router.back()}
    >
      Voltar
    </Button>
  );
}

