"use client";

import React from "react";
import { useLang } from "../lang-context";
import { LangSwitch } from "../components/LangSwitch";
import { getMediaItemsForLang } from "./data";
import Link from "next/link";
import type { Lang } from "../i18n";

const content: Record<Lang, { title: string; description: string }> = {
  jp: {
    title: "支援先プロダクト・サービス",
    description:
      "当社がUAE展開を支援した企業のプロダクトやサービスをご紹介します。現在は紹介ページですが、今後は各詳細ページからECや販売代理店向けページへ接続できる構成を想定しています。",
  },
  en: {
    title: "Supported Products and Services",
    description:
      "A selection of products and services from companies we supported for UAE expansion. Today these pages serve as showcases, with a structure that can later connect each product to e-commerce or distributor-facing pages.",
  },
  ar: {
    title: "المنتجات والخدمات المدعومة",
    description:
      "مجموعة من المنتجات والخدمات لشركات دعمناها في التوسع في الإمارات. تعمل هذه الصفحات حالياً كعروض تعريفية، بهيكل يمكن لاحقاً ربط كل منتج بصفحات التجارة الإلكترونية أو صفحات الموزعين.",
  },
};

export default function MediaIndexPage() {
  const { lang, setLang } = useLang();
  const t = content[lang];
  const items = getMediaItemsForLang(lang);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="border-b border-[#f0ece5]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <a
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800 transition-colors hover:text-slate-900"
          >
            UAE Business Consulting
          </a>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </header>

      <main>
        <section className="border-b border-[#f0ece5] bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-20 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
                {t.title}
              </h1>
              <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
                {t.description}
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-16 sm:py-24 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-3">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/media/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70 transition-transform hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-slate-100 sm:h-44">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.sectorLabel}
                    </p>
                    <h2 className="mt-3 text-base font-semibold tracking-[-0.01em] text-slate-900">
                      {item.titleLabel}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-[1.8] text-slate-600">
                      {item.summaryLabel}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                      <span>{item.location}</span>
                      <span>
                        {item.stageLabel} ・ {item.year}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
