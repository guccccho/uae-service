"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { useLang } from "../lang-context";
import { LangSwitch } from "../components/LangSwitch";
import type { Lang } from "../i18n";

const content: Record<
  Lang,
  {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    overviewTitle: string;
    overviewItems: string[];
    whoTitle: string;
    whoItems: string[];
    scheduleTitle: string;
    day1Title: string;
    day1Items: string[];
    day2Title: string;
    day2Items: string[];
    day3Title: string;
    day3Items: string[];
    pricingTitle: string;
    pricingCards: { title: string; price: string }[];
    pricingLabels: string[];
    recommendedBadge: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaText: string;
    contactButton: string;
    simulatorButton: string;
  }
> = {
  jp: {
    badge: "DUBAI BUSINESS TOUR",
    title: "UAE進出のためのドバイ視察プログラム",
    description:
      "法人設立、不動産、商業物件、現地パートナー候補まで、\nUAE進出に必要な要素を短期間で確認できる視察プログラムです。",
    primaryCta: "無料相談を予約",
    secondaryCta: "コストシミュレーターを見る",
    overviewTitle: "このプログラムでできること",
    overviewItems: [
      "フリーゾーン比較（DMCC / RAKEZ）",
      "法人設立プロセスの説明",
      "不動産エリア視察",
      "飲食 / 商業テナント視察",
      "現地企業やJV候補の紹介",
    ],
    whoTitle: "このような方におすすめ",
    whoItems: [
      "UAE進出を検討している経営者",
      "法人設立＋移住を考えている方",
      "飲食・小売出店を検討している方",
      "JVや現地パートナーを探している方",
    ],
    scheduleTitle: "視察プログラム例",
    day1Title: "Day 1",
    day1Items: ["フリーゾーン比較", "DMCC / RAKEZ説明", "進出戦略相談"],
    day2Title: "Day 2",
    day2Items: ["不動産視察", "居住エリア", "商業物件"],
    day3Title: "Day 3",
    day3Items: ["銀行口座説明", "現地企業ミーティング", "JV相談"],
    pricingTitle: "Pricing",
    pricingCards: [
      { title: "オンライン事前相談", price: "¥50,000〜" },
      { title: "現地同行プログラム", price: "¥500,000〜" },
      { title: "プレミアム視察", price: "¥800,000〜¥1,200,000" },
    ],
    pricingLabels: ["PLAN 1", "RECOMMENDED", "PREMIUM"],
    recommendedBadge: "おすすめ",
    ctaEyebrow: "無料相談",
    ctaTitle: "UAE進出について相談する",
    ctaText:
      "法人設立、不動産、出店、JVなど\nUAE進出の可能性を整理するための\n視察プログラムをご提案します。",
    contactButton: "視察について相談",
    simulatorButton: "Try Cost Simulator",
  },
  en: {
    badge: "DUBAI BUSINESS TOUR",
    title: "Dubai Business Exploration Program",
    description:
      "A curated program to explore UAE company formation, real estate,\ncommercial spaces, and potential business partners.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Open Cost Simulator",
    overviewTitle: "What this program covers",
    overviewItems: [
      "Free zone comparison (DMCC / RAKEZ)",
      "Company formation process overview",
      "Real estate area visits",
      "Commercial space tour for F&B / retail",
      "Introductions to local companies and JV candidates",
    ],
    whoTitle: "Who this is for",
    whoItems: [
      "Business owners considering UAE expansion",
      "Clients evaluating company setup + relocation",
      "F&B / retail operators exploring store locations",
      "Companies seeking JV or local partners",
    ],
    scheduleTitle: "Sample schedule",
    day1Title: "Day 1",
    day1Items: ["Free zone comparison", "DMCC / RAKEZ overview", "Entry strategy consultation"],
    day2Title: "Day 2",
    day2Items: ["Real estate visits", "Residential areas", "Commercial spaces"],
    day3Title: "Day 3",
    day3Items: ["Banking overview", "Local company meetings", "JV discussion"],
    pricingTitle: "Pricing",
    pricingCards: [
      { title: "Online Strategic Session", price: "From ¥50,000" },
      { title: "On-site Advisory Program", price: "From ¥500,000" },
      { title: "Premium Exploration", price: "¥800,000–¥1,200,000" },
    ],
    pricingLabels: ["PLAN 1", "RECOMMENDED", "PREMIUM"],
    recommendedBadge: "Recommended",
    ctaEyebrow: "Consultation",
    ctaTitle: "Discuss Your UAE Entry",
    ctaText:
      "We propose an exploration program to help you clarify next steps,\ncovering company formation, real estate, commercial expansion, and JV options.",
    contactButton: "Discuss the Tour",
    simulatorButton: "Try Cost Simulator",
  },
  ar: {
    badge: "جولة الأعمال في دبي",
    title: "برنامج استكشاف الأعمال في دبي لدخول الإمارات",
    description:
      "برنامج منظم لاستكشاف تأسيس الشركات والعقارات والمساحات التجارية\nوشركاء الأعمال المحتملين في الإمارات خلال فترة قصيرة.",
    primaryCta: "حجز استشارة مجانية",
    secondaryCta: "فتح محاكي التكاليف",
    overviewTitle: "ما يغطيه هذا البرنامج",
    overviewItems: [
      "مقارنة المناطق الحرة (DMCC / RAKEZ)",
      "نظرة عامة على عملية تأسيس الشركات",
      "زيارات مناطق عقارية",
      "جولة في مساحات تجارية للمطاعم والتجزئة",
      "تعريف بشركات محلية ومرشحين للمشاريع المشتركة",
    ],
    whoTitle: "لمن هذا البرنامج",
    whoItems: [
      "أصحاب الأعمال الذين يفكرون في التوسع في الإمارات",
      "من يقيّمون تأسيس الشركة مع إعادة التوطين",
      "مشغلو المطاعم والتجزئة الذين يستكشفون مواقع المتاجر",
      "الشركات الباحثة عن شركاء محليين أو مشاريع مشتركة",
    ],
    scheduleTitle: "جدول نموذجي",
    day1Title: "اليوم 1",
    day1Items: ["مقارنة المناطق الحرة", "نظرة عامة على DMCC / RAKEZ", "استشارة استراتيجية الدخول"],
    day2Title: "اليوم 2",
    day2Items: ["زيارات عقارية", "مناطق سكنية", "مساحات تجارية"],
    day3Title: "اليوم 3",
    day3Items: ["نظرة عامة على الخدمات المصرفية", "اجتماعات مع شركات محلية", "مناقشة المشاريع المشتركة"],
    pricingTitle: "الأسعار",
    pricingCards: [
      { title: "جلسة استراتيجية عبر الإنترنت", price: "من ¥50,000" },
      { title: "برنامج استشاري ميداني", price: "من ¥500,000" },
      { title: "استكشاف متميز", price: "¥800,000–¥1,200,000" },
    ],
    pricingLabels: ["الخطة 1", "موصى به", "متميز"],
    recommendedBadge: "موصى به",
    ctaEyebrow: "استشارة",
    ctaTitle: "ناقش دخولكم إلى الإمارات",
    ctaText:
      "نقترح برنامج استكشاف لمساعدتكم على توضيح الخطوات التالية،\nيشمل تأسيس الشركات والعقارات والتوسع التجاري وخيارات المشاريع المشتركة.",
    contactButton: "مناقشة الجولة",
    simulatorButton: "تجربة محاكي التكاليف",
  },
};

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-medium md:text-3xl">{children}</h2>;
}

export default function DubaiBusinessTourPage() {
  const { lang, setLang } = useLang();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="border-b border-[#f0e4e6] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800">
            UAE Business Consulting
          </p>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </header>

      <section className="border-b border-[#f0e4e6] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-brand">
              {t.badge}
            </p>
            <h1 className="mt-6 text-4xl font-light leading-tight tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 whitespace-pre-line text-base leading-[1.9] text-slate-600 sm:text-lg">
              {t.description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:contact@hinodeya.ae"
                className="inline-flex items-center justify-center rounded-full bg-brand px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-brand-hover"
              >
                {t.primaryCta}
              </a>
              <Link
                href="/simulator"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:bg-slate-50"
              >
                {t.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#f0e4e6] bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70">
              <SectionTitle>{t.overviewTitle}</SectionTitle>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                {t.overviewItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70">
              <SectionTitle>{t.whoTitle}</SectionTitle>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                {t.whoItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#f0e4e6] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
              {t.scheduleTitle}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: t.day1Title, items: t.day1Items },
              { title: t.day2Title, items: t.day2Items },
              { title: t.day3Title, items: t.day3Items },
            ].map((day) => (
              <div
                key={day.title}
                className="rounded-2xl bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70"
              >
                <h3 className="text-xl font-medium text-slate-900">
                  {day.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  {day.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#f0e4e6] bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
              {t.pricingTitle}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.pricingCards.map((card, idx) => (
              <div
                key={card.title}
                className={`relative rounded-2xl p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ${
                  idx === 1
                    ? "bg-white ring-2 ring-brand/80"
                    : "bg-white/90 ring-1 ring-slate-100/70"
                }`}
              >
                {idx === 1 && (
                  <span className="absolute -top-3 right-6 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                    {t.recommendedBadge}
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                  {t.pricingLabels[idx]}
                </p>
                <h3 className="mt-4 text-lg font-medium text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-4 text-3xl font-light tracking-[-0.02em] text-slate-900">
                  {card.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="rounded-2xl bg-white p-8 text-center shadow-[0_22px_60px_rgba(15,23,42,0.10)] ring-1 ring-slate-100/70 sm:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-brand">
              {t.ctaEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-5xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-6 whitespace-pre-line text-base leading-[1.9] text-slate-600 sm:text-lg">
              {t.ctaText}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:contact@hinodeya.ae"
                className="inline-flex items-center justify-center rounded-full bg-brand px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-brand-hover"
              >
                {t.contactButton}
              </a>
              <Link
                href="/simulator"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:bg-slate-50"
              >
                {t.simulatorButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
