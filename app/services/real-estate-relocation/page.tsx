"use client";

import React from "react";
import { useLang } from "../../lang-context";
import { LangSwitch } from "../../components/LangSwitch";
import type { Lang } from "../../i18n";

const content: Record<
  Lang,
  {
    title: string;
    description: string;
    cards: { title: string; body: string }[];
    ctaEyebrow: string;
    ctaBody: string;
    ctaLabel: string;
  }
> = {
  jp: {
    title: "ドバイ不動産・リロケーション支援",
    description:
      "経営陣・キーパーソンの赴任に加え、個人の住宅購入・投資物件の取得、ご家族での移住まで。住居選定、学校、生活インフラの整備を、日本側と連携しながらサポートします。",
    cards: [
      {
        title: "エリア・住居選定",
        body: "ご家族構成・通勤動線・学校の候補を踏まえ、住宅エリアと物件タイプ（アパート / ヴィラなど）を具体的に絞り込みます。",
      },
      {
        title: "学校・生活インフラ",
        body: "日本人学校・インターナショナルスクール、医療機関、銀行、運転免許など、生活立ち上げに必要なステップを整理します。",
      },
      {
        title: "赴任前後サポート",
        body: "内示から着任後90日程度まで、日本本社・ご本人・現地専門家の三者間での情報連携を設計し、不安要素を最小化します。",
      },
    ],
    ctaEyebrow: "赴任・移転プロジェクト",
    ctaBody:
      "赴任人数やタイムライン、ご家族の状況を共有いただければ、現実的なリロケーションプランとコストイメージをご提示します。",
    ctaLabel: "リロケーション相談をする",
  },
  en: {
    title: "Dubai Real Estate & Relocation Support",
    description:
      "Beyond executive relocations, we support individual homebuyers and investors — housing selection, schools, and daily infrastructure, coordinated with your team in Japan.",
    cards: [
      {
        title: "Area & Housing Selection",
        body: "Based on family profile, commute, and school preferences, we shortlist appropriate neighborhoods and property types for you.",
      },
      {
        title: "Schools & Daily Life",
        body: "We map options for schools, healthcare, banking, and driving licenses, structuring a clear step‑by‑step plan for settling in.",
      },
      {
        title: "Pre‑ & Post‑Move Support",
        body: "From assignment confirmation through the first 90 days, we coordinate between HQ, assignees, and local specialists to reduce friction and risk.",
      },
    ],
    ctaEyebrow: "Relocation Projects",
    ctaBody:
      "Share headcount, timing, and family profile, and we will outline a realistic relocation plan and cost expectations.",
    ctaLabel: "Discuss Relocation Plan",
  },
  ar: {
    title: "دعم العقارات وإعادة التوطين في دبي",
    description:
      "إلى جانب انتقال المديرين التنفيذيين، ندعم مشتري العقارات والمستثمرين الأفراد — اختيار السكن والمدارس والبنية التحتية اليومية، بالتنسيق مع فريقكم في اليابان.",
    cards: [
      {
        title: "اختيار المنطقة والسكن",
        body: "بناءً على ملف العائلة والتنقل وتفضيلات المدارس، نختصر قائمة الأحياء وأنواع العقارات المناسبة لكم.",
      },
      {
        title: "المدارس والحياة اليومية",
        body: "نرسم خيارات المدارس والرعاية الصحية والخدمات المصرفية ورخص القيادة، ونضع خطة واضحة خطوة بخطوة للاستقرار.",
      },
      {
        title: "الدعم قبل وبعد الانتقال",
        body: "من تأكيد التعيين وحتى الأيام التسعين الأولى، ننسق بين المقر الرئيسي والمنتدبين والمتخصصين المحليين لتقليل الاحتكاك والمخاطر.",
      },
    ],
    ctaEyebrow: "مشاريع إعادة التوطين",
    ctaBody:
      "شاركونا عدد المنتدبين والجدول الزمني وملف العائلة، وسنقدم خطة إعادة توطين واقعية وتوقعات التكلفة.",
    ctaLabel: "مناقشة خطة إعادة التوطين",
  },
};

export default function RealEstateRelocationPage() {
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
