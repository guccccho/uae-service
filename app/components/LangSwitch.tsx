"use client";

import React from "react";
import { LANGS, type Lang } from "../i18n";

const GOLD = "#c9a86c";

type Props = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  className?: string;
};

export function LangSwitch({ lang, setLang, className = "" }: Props) {
  return (
    <div
      className={`flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] ${className}`}
    >
      {LANGS.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && <span className="text-slate-400">/</span>}
          <button
            type="button"
            onClick={() => setLang(item.id)}
            className={`rounded-full px-3 py-1 transition-colors ${
              lang === item.id
                ? "text-white"
                : "text-slate-500 hover:text-slate-800"
            }`}
            style={lang === item.id ? { backgroundColor: GOLD } : undefined}
            aria-pressed={lang === item.id}
          >
            {item.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
