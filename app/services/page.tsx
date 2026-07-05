"use client";

import React from "react";
import { useLang } from "../lang-context";
import { LangSwitch } from "../components/LangSwitch";
import type { Lang } from "../i18n";

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
    title: "コンサルティングサービス一覧",
    description:
      "UAE進出の検討段階から、法人設立、拠点展開、現地パートナーシップ構築まで。日本企業の状況に合わせて、必要なサービスだけを組み合わせてご提案します。",
    cards: [
      {
        title: "戦略・市場分析",
        body: "マクロ環境・競合・規制を含む市場調査、進出シナリオの設計、社内意思決定に必要なインプットを整理します。",
      },
      {
        title: "法人設立・ガバナンス",
        body: "本土・フリーゾーンの比較検討から、法人設立、ライセンス取得、グループ全体でのガバナンス設計までカバーします。",
      },
      {
        title: "商業展開・パートナー",
        body: "販売・調達・アライアンスなど、現地パートナーとの関係構築と収益モデル設計を支援します。",
      },
    ],
    ctaEyebrow: "次のステップ",
    ctaBody:
      "貴社の検討段階・想定タイムラインを共有いただければ、最適なサービスの組み合わせをご提案いたします。",
    ctaLabel: "無料相談を予約する",
  },
  en: {
    title: "Advisory Services Overview",
    description:
      "From initial UAE market assessment to company setup, local presence, and strategic partnerships, we assemble only the services your organization truly needs at each stage.",
    cards: [
      {
        title: "Strategy & Market",
        body: "We provide structured market analysis, regulatory insight, and entry scenarios tailored to your internal decision-making process.",
      },
      {
        title: "Setup & Governance",
        body: "We compare mainland and free zones, coordinate setup and licensing, and align governance with your global structure.",
      },
      {
        title: "Commercial & Partners",
        body: "We support commercial rollout, partner selection, and revenue model design with trusted local counterparts.",
      },
    ],
    ctaEyebrow: "Next Step",
    ctaBody:
      "Share your current stage and target timeline, and we will propose a focused combination of services for you.",
    ctaLabel: "Schedule Consultation",
  },
  ar: {
    title: "نظرة عامة على خدمات الاستشارات",
    description:
      "من تقييم السوق الأولي في الإمارات إلى تأسيس الشركات والتواجد المحلي والشراكات الاستراتيجية، نجمع فقط الخدمات التي تحتاجها مؤسستكم في كل مرحلة.",
    cards: [
      {
        title: "الاستراتيجية وتحليل السوق",
        body: "نقدم تحليلاً منظماً للسوق ورؤى تنظيمية وسيناريوهات دخول مصممة وفق عملية اتخاذ القرار الداخلية لديكم.",
      },
      {
        title: "التأسيس والحوكمة",
        body: "نقارن بين البر الرئيسي والمناطق الحرة، وننسق التأسيس والترخيص، ونوائم الحوكمة مع هيكلكم العالمي.",
      },
      {
        title: "التوسع التجاري والشركاء",
        body: "ندعم الإطلاق التجاري واختيار الشركاء وتصميم نموذج الإيرادات مع نظرائنا المحليين الموثوقين.",
      },
    ],
    ctaEyebrow: "الخطوة التالية",
    ctaBody:
      "شاركونا مرحلتكم الحالية والجدول الزمني المستهدف، وسنقترح مجموعة مركزة من الخدمات المناسبة لكم.",
    ctaLabel: "حجز استشارة مجانية",
  },
};

export default function ServicesPage() {
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
                className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.04)] ring-1 ring-slate-100/70"
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
