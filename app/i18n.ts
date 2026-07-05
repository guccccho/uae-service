export type Lang = "jp" | "en" | "ar";

export const LANGS: { id: Lang; label: string }[] = [
  { id: "jp", label: "JP" },
  { id: "en", label: "EN" },
  { id: "ar", label: "AR" },
];

export type LangCopy = {
  jp: string;
  en: string;
  ar: string;
};

/** Pick localized string; falls back en → jp if ar/jp missing. */
export function pickLang(
  copy: Partial<LangCopy> & { en: string },
  lang: Lang,
): string {
  return copy[lang] ?? copy.en ?? copy.jp ?? "";
}

export function isRtl(lang: Lang): boolean {
  return lang === "ar";
}

export const htmlLang: Record<Lang, string> = {
  jp: "ja",
  en: "en",
  ar: "ar",
};
