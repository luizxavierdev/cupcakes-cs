"use client";

import { useEffect, useState } from "react";
import { useLanguageSafe } from "@/contexts/language-context";
import { translations } from "@/config/translations";
import type { Language } from "@/contexts/language-context";

// Hook para usar traduções (para client components)
export function useTranslations() {
  const context = useLanguageSafe();
  const [language, setLanguage] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!context && typeof window !== "undefined") {
      // Fallback: lê do localStorage diretamente quando contexto não está disponível
      const saved = localStorage.getItem("language") as Language;
      if (saved === "pt" || saved === "en") {
        setLanguage(saved);
      }
    }
  }, [context]);

  const finalLanguage = context?.language || (mounted ? language : "pt");
  return translations[finalLanguage];
}

