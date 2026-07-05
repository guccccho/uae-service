"use client";

import React from "react";
import type { Lang } from "../i18n";
import { pickLang } from "../i18n";
import {
  GOVERNMENT_SECTION,
  UAE_GOVERNMENT_PORTALS,
} from "../government-resources";

type Props = {
  lang: Lang;
};

export function GovernmentPortalsSection({ lang }: Props) {
  return (
    <section className="border-b border-[#f0e4e6] bg-slate-50/30">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-14 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
            {pickLang(GOVERNMENT_SECTION.title, lang)}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {pickLang(GOVERNMENT_SECTION.note, lang)}
          </p>
        </div>
        <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
          {UAE_GOVERNMENT_PORTALS.map((portal) => (
            <li key={portal.id}>
              <a
                href={portal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 text-sm text-slate-700 transition-colors hover:border-brand/40 hover:text-slate-900"
              >
                <span>{pickLang(portal.name, lang)}</span>
                <span className="text-slate-400" aria-hidden>
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-relaxed text-slate-400">
          {pickLang(GOVERNMENT_SECTION.policySource, lang)}{" "}
          <a
            href={GOVERNMENT_SECTION.policyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
          >
            vig.gmo.gov.ae
          </a>
        </p>
      </div>
    </section>
  );
}
