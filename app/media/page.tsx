"use client";

import React from "react";
import { useLang } from "../lang-context";
import { LangSwitch } from "../components/LangSwitch";
import { getMediaItemsForLang } from "./data";
import Link from "next/link";
import { MediaCardPreview } from "../components/MediaCardPreview";
import type { Lang } from "../i18n";

const content: Record<
  Lang,
  {
    title: string;
    description: string;
    matchingEyebrow: string;
    matchingBody: string;
    matchingCta: string;
    productsCta: string;
  }
> = {
  jp: {
    title: "相談企業のプロダクト",
    description:
      "ご相談いただいた企業のプロダクト・サービスをご紹介します。チームHINODEYAとしてまとめ、それぞれの強みが活きるビジネスマッチングの機会を創出しています。",
    matchingEyebrow: "Team HINODEYA",
    matchingBody:
      "あなたのビジネスも、チームHINODEYAの一員として新たなパートナーと出会えます。",
    matchingCta: "チームHINODEYAでビジネスマッチングに参加する",
    productsCta: "プロダクト一覧を見る",
  },
  en: {
    title: "Consulting Clients' Products",
    description:
      "Products and services from companies that have consulted with us. As Team HINODEYA, we create business matching opportunities where each company's strengths can shine.",
    matchingEyebrow: "Team HINODEYA",
    matchingBody:
      "Your business can also meet new partners as a member of Team HINODEYA.",
    matchingCta: "Join Team HINODEYA for Business Matching",
    productsCta: "Browse all products",
  },
  ar: {
    title: "منتجات الشركات المستشارة",
    description:
      "منتجات وخدمات الشركات التي استشارتنا. كفريق HINODEYA، نخلق فرص مطابقة أعمال تبرز فيها نقاط قوة كل شركة.",
    matchingEyebrow: "فريق HINODEYA",
    matchingBody:
      "يمكن لأعمالك أيضاً أن تلتقي بشركاء جدد كعضو في فريق HINODEYA.",
    matchingCta: "انضم إلى فريق HINODEYA للمطابقة",
    productsCta: "تصفح جميع المنتجات",
  },
};

export default function MediaIndexPage() {
  const { lang, setLang } = useLang();
  const t = content[lang];
  const items = getMediaItemsForLang(lang);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="border-b border-[#f0e4e6]">
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
        <section className="border-b border-[#f0e4e6] bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-20 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
                {t.title}
              </h1>
              <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
                {t.description}
              </p>
              <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-brand px-8 py-10 shadow-[0_24px_60px_rgba(188,0,45,0.22)] sm:px-12 sm:py-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                  {t.matchingEyebrow}
                </p>
                <p className="mt-4 text-base leading-[1.9] text-slate-200 sm:text-lg">
                  {t.matchingBody}
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-12 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(188,0,45,0.35)] transition-all hover:bg-brand-hover hover:shadow-[0_22px_55px_rgba(188,0,45,0.45)]"
                >
                  {t.matchingCta}
                </Link>
              </div>
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
                  <MediaCardPreview
                    imageUrl={item.imageUrl}
                    homepageUrl={item.homepageUrl}
                    alt={item.titleLabel}
                  />
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

            <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand px-12 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-brand-hover"
              >
                {t.matchingCta}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
