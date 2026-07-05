"use client";

import React from "react";
import { useLang } from "../lang-context";
import { LangSwitch } from "../components/LangSwitch";
import type { Lang } from "../i18n";

const content: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    description: string;
    cards: { title: string; body: string }[];
    cta: string;
    disclaimer: string;
  }
> = {
  jp: {
    eyebrow: "コストシミュレーション",
    title: "ドバイ法人設立コストの目安を把握する",
    description:
      "フリーゾーンの種類、法人形態、必要なビザ人数やオフィスの規模によって、UAEでの会社設立コストは大きく変わります。このシミュレーターでは、代表的な条件を選択するだけで、ライセンス・ビザ・オフィス・リロケーションを含めた概算コストを把握できます。",
    cards: [
      {
        title: "前提条件を選ぶ",
        body: "フリーゾーン／メインランド、ビザ人数、オフィスタイプ、ビジネスタイプなど、想定する条件を選択します。",
      },
      {
        title: "コストを把握する",
        body: "ライセンス、登録費用、ビザ、オフィス、リロケーションの各項目ごとのコストと、合計額（AED／円）を確認できます。",
      },
      {
        title: "次の一歩を整理する",
        body: "シミュレーション結果をもとに、具体的なフリーゾーンの検討や、設立スケジュール・必要書類のイメージづくりに役立てていただけます。",
      },
    ],
    cta: "シミュレーターを開く",
    disclaimer:
      "※ここで算出される数値はあくまで概算であり、実際の見積もりとは異なる場合があります。",
  },
  en: {
    eyebrow: "Cost Simulation",
    title: "Understand the Cost of Setting Up in Dubai",
    description:
      "Depending on the free zone, entity type, number of visas, and office size, company setup costs in the UAE can vary significantly. Our simulator helps you quickly estimate license, visa, office, and relocation costs based on a few simple assumptions.",
    cards: [
      {
        title: "Set Assumptions",
        body: "Select whether you plan for a free zone or mainland entity, how many visas you need, office type, and business profile.",
      },
      {
        title: "See Cost Breakdown",
        body: "Review an itemized breakdown for license, registration, visa, office, and relocation, plus the estimated total in AED and JPY.",
      },
      {
        title: "Clarify Next Steps",
        body: "Use the result as a starting point for comparing free zones and shaping a realistic timeline and document list for your expansion.",
      },
    ],
    cta: "Open Simulator",
    disclaimer:
      "The figures shown are indicative only and may differ from a formal quotation.",
  },
  ar: {
    eyebrow: "محاكاة التكاليف",
    title: "تقدير تكاليف تأسيس الشركة في دبي",
    description:
      "تختلف تكاليف تأسيس الشركة في الإمارات بشكل كبير حسب المنطقة الحرة ونوع الكيان وعدد التأشيرات المطلوبة وحجم المكتب. يتيح لك المحاكي تقدير تكاليف الترخيص والتأشيرات والمكتب وإعادة التوطين بسرعة بناءً على افتراضات بسيطة.",
    cards: [
      {
        title: "تحديد الافتراضات",
        body: "اختر ما إذا كنت تخطط لكيان في منطقة حرة أو في البر الرئيسي، وعدد التأشيرات المطلوبة، ونوع المكتب، وملف النشاط التجاري.",
      },
      {
        title: "عرض تفصيل التكاليف",
        body: "اطلع على تفصيل التكاليف لكل بند: الترخيص والتسجيل والتأشيرات والمكتب وإعادة التوطين، بالإضافة إلى الإجمالي التقديري بالدرهم والين.",
      },
      {
        title: "ترتيب الخطوات التالية",
        body: "استخدم النتيجة كنقطة انطلاق لمقارنة المناطق الحرة ووضع جدول زمني واقعي وقائمة بالمستندات المطلوبة لتوسعكم.",
      },
    ],
    cta: "فتح المحاكي",
    disclaimer:
      "الأرقام المعروضة تقديرية فقط وقد تختلف عن عرض السعر الرسمي.",
  },
};

export default function SimulationIntroPage() {
  const { lang, setLang } = useLang();
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="border-b border-[#f0e4e6]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800">
            UAE Business Consulting
          </div>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </header>

      <main>
        <section className="border-b border-[#f0e4e6] bg-slate-50/40">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 py-20 sm:py-28 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                {t.eyebrow}
              </p>
              <h1 className="mt-4 text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl">
                {t.title}
              </h1>
              <p className="mt-6 text-sm leading-[1.9] text-slate-600 sm:text-base">
                {t.description}
              </p>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {t.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="/simulator"
                className="inline-flex items-center justify-center rounded-full bg-brand px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-brand-hover"
              >
                {t.cta}
              </a>
              <p className="text-xs leading-relaxed text-slate-500">
                {t.disclaimer}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
