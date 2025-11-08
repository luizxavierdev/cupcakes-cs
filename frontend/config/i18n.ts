// Sistema de internacionalização simples
export type Language = "pt" | "en";

let currentLanguage: Language = "pt";

export function setLanguage(lang: Language) {
  currentLanguage = lang;
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lang);
  }
}

export function getLanguage(): Language {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("language") as Language;
    if (saved === "pt" || saved === "en") {
      return saved;
    }
  }
  return currentLanguage;
}

