"use client";

import React from "react";
import { useLang } from "../lang-context";
import { LangSwitch } from "../components/LangSwitch";
import type { Lang } from "../i18n";
import { TRUSTED_PARTNERS } from "../trusted-partners";
import { GovernmentPortalsSection } from "../components/GovernmentPortalsSection";

const content: Record<
  Lang,
  {
    title: string;
    description: string;
    partnersTitle: string;
    cards: { title: string; body: string }[];
    ctaEyebrow: string;
    ctaBody: string;
    ctaLabel: string;
  }
> = {
  jp: {
    title: "ローカルパートナー・専門家ネットワーク",
    description:
      "現地の法律事務所、税務・会計、不動産、人材、リロケーションなど、UAEでの事業運営に不可欠な専門家・パートナーと連携し、ワンストップでのプロジェクト推進を支援します。",
    partnersTitle: "提携パートナー",
    cards: [
      {
        title: "法律・規制",
        body: "現地法律事務所・カンパニーサービスプロバイダーと連携し、ライセンス、契約、規制対応に関する実務を支援します。",
      },
      {
        title: "税務・ストラクチャー",
        body: "国際税務ファームと連携し、コーポレート税・移転価格・グループ内取引を踏まえたストラクチャーの検討をサポートします。",
      },
      {
        title: "不動産・人材",
        body: "不動産エージェント、人材紹介会社、リロケーション専門会社などと協働し、住居・オフィス・採用まで一気通貫での支援が可能です。",
      },
    ],
    ctaEyebrow: "ワンストップサポート",
    ctaBody:
      "既にお付き合いのあるパートナーとの棲み分けも含め、どの領域を当社・当社ネットワークでサポートすべきかご一緒に設計します。",
    ctaLabel: "パートナー活用を相談する",
  },
  en: {
    title: "Local Partner Network",
    description:
      "We work with a curated network of legal, tax, real estate, HR, and relocation specialists to deliver integrated support for your UAE operations.",
    partnersTitle: "Strategic Partners",
    cards: [
      {
        title: "Legal & Regulatory",
        body: "We collaborate with local law firms and corporate service providers on licensing, contracts, and regulatory matters.",
      },
      {
        title: "Tax & Structuring",
        body: "Together with international tax advisors, we assess structures from a corporate tax and transfer pricing perspective.",
      },
      {
        title: "Real Estate & Talent",
        body: "Through real estate, recruitment, and relocation partners, we provide end‑to‑end support across housing, office, and hiring.",
      },
    ],
    ctaEyebrow: "One‑Stop Support",
    ctaBody:
      "We help you decide which parts should be covered by your existing advisors and where our network can fill gaps.",
    ctaLabel: "Discuss Partner Engagement",
  },
  ar: {
    title: "شبكة الشركاء والخبراء المحليين",
    description:
      "نتعاون مع شبكة منتقاة من المتخصصين في القانون والضرائب والعقارات والموارد البشرية وإعادة التوطين لتقديم دعم متكامل لعملياتكم في الإمارات.",
    partnersTitle: "الشركاء الاستراتيجيون",
    cards: [
      {
        title: "القانون والتنظيم",
        body: "نتعاون مع مكاتب المحاماة المحلية ومقدمي خدمات الشركات في الترخيص والعقود والمسائل التنظيمية.",
      },
      {
        title: "الضرائب والهيكلة",
        body: "بالتعاون مع مستشاري الضرائب الدوليين، نقيّم الهياكل من منظور ضريبة الشركات وتسعير التحويل.",
      },
      {
        title: "العقارات والمواهب",
        body: "عبر شركاء العقارات والتوظيف وإعادة التوطين، نقدم دعماً شاملاً يشمل السكن والمكاتب والتوظيف.",
      },
    ],
    ctaEyebrow: "دعم شامل من نقطة واحدة",
    ctaBody:
      "نساعدكم على تحديد الأجزاء التي يجب أن يغطيها مستشاروكم الحاليون والمجالات التي يمكن لشبكتنا سد الفجوات فيها.",
    ctaLabel: "مناقشة التعاون مع الشركاء",
  },
};

export default function PartnersPage() {
  const { lang, setLang } = useLang();
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="border-b border-[#f0ece5]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800">
            UAE Business Consulting
          </div>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
              {t.title}
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
              {t.description}
            </p>
          </div>

          <div className="mt-20">
            <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              {t.partnersTitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {TRUSTED_PARTNERS.map((partner) => (
                <a
                  key={partner.id}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-14 min-w-[170px] items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/80 px-6 py-4 transition-colors hover:border-[#c9a86c]/50 hover:bg-white sm:min-w-[190px]"
                  aria-label={partner.name}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={partner.logoClassName}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {t.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/70"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                  {card.title}
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <GovernmentPortalsSection lang={lang} />

        <section className="border-t border-[#f0ece5]">
          <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-12 py-14 sm:py-16 lg:py-20">
            <div className="flex flex-col items-center text-center gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {t.ctaEyebrow}
              </p>
              <p className="text-base leading-[1.9] text-slate-600">
                {t.ctaBody}
              </p>
              <a
                href="mailto:contact@hinodeya.ae"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
              >
                {t.ctaLabel}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
