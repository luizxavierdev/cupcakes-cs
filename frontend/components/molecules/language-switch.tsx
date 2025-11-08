"use client";

import { FC } from "react";

import { useLanguage, Language } from "@/contexts/language-context";
import { useTranslations } from "@/hooks/use-translations";

import clsx from "clsx";

export interface LanguageSwitchProps {
  className?: string;
}

export const LanguageSwitch: FC<LanguageSwitchProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  const onChange = () => {
    const newLang: Language = language === "pt" ? "en" : "pt";
    setLanguage(newLang);
  };

  return (
    <button
      onClick={onChange}
      className={clsx(
        "px-2 py-1 rounded-md transition-opacity hover:opacity-80 cursor-pointer text-default-500 hover:text-default-700",
        className
      )}
      aria-label={language === "pt" ? t.other.language.switchToEn : t.other.language.switchToPt}
      title={language === "pt" ? t.other.language.switchToEn : t.other.language.switchToPt}
    >
      <span className="text-sm font-medium">
        {language === "pt" ? "PT" : "EN"}
      </span>
    </button>
  );
};

