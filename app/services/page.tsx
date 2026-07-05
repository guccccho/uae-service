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
    individualEyebrow: string;
    individualTitle: string;
    individualCards: { title: string; body: string }[];
    ctaEyebrow: string;
    ctaBody: string;
    ctaLabel: string;
  }
> = {
  jp: {
    title: "コンサルティングサービス一覧",
    description:
      "法人のUAE進出から、個人の決済・不動産購入・移住まで。企業・個人それぞれの状況に合わせて、必要なサービスだけを組み合わせてご提案します。",
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
    individualEyebrow: "個人のお客様へ",
    individualTitle: "決済・不動産・移住など個人支援",
    individualCards: [
      {
        title: "決済・金融ソリューション",
        body: "UAE口座開設、国際送金、決済インフラの選定など、個人・小規模事業の資金管理をサポートします。",
      },
      {
        title: "不動産購入・投資",
        body: "住宅購入、賃貸、投資物件の選定から契約・登記まで、ドバイ・ラスアルハイマで伴走します。",
      },
      {
        title: "移住・ビザ・生活設計",
        body: "ゴールデンビザ、居住ビザ、学校・医療・生活インフラまで、UAEでの新生活の立ち上げを支援します。",
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
      "From corporate UAE market entry to personal payments, property purchase, and relocation — we assemble only the services you need at each stage.",
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
    individualEyebrow: "For Individuals",
    individualTitle: "Personal support — payments, property & relocation",
    individualCards: [
      {
        title: "Payments & Financial Solutions",
        body: "UAE bank accounts, cross-border transfers, and payment infrastructure for personal and small-business use.",
      },
      {
        title: "Property Purchase & Investment",
        body: "Residential and investment property in Dubai and Ras Al Khaimah — from shortlisting to contract and registration.",
      },
      {
        title: "Relocation, Visa & Lifestyle",
        body: "Golden Visa, residence permits, schools, healthcare, and daily infrastructure for your new life in the UAE.",
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
      "من دخول الشركات إلى الإمارات إلى المدفوعات الشخصية وشراء العقارات وإعادة التوطين — نجمع فقط الخدمات التي تحتاجونها في كل مرحلة.",
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
    individualEyebrow: "للأفراد",
    individualTitle: "دعم شخصي — مدفوعات وعقارات وإعادة توطين",
    individualCards: [
      {
        title: "حلول الدفع والخدمات المالية",
        body: "حسابات مصرفية في الإمارات وتحويلات دولية وبنية مدفوعات للاستخدام الشخصي والأعمال الصغيرة.",
      },
      {
        title: "شراء العقارات والاستثمار",
        body: "عقارات سكنية واستثمارية في دبي ورأس الخيمة — من الاختيار إلى العقد والتسجيل.",
      },
      {
        title: "إعادة التوطين والتأشيرة ونمط الحياة",
        body: "التأشيرة الذهبية وتصاريح الإقامة والمدارس والرعاية الصحية والبنية التحتية لحياتكم الجديدة.",
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
      <header className="border-b border-[#f0e4e6]">
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {card.title}
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 border-t border-[#f0e4e6] pt-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                {t.individualEyebrow}
              </p>
              <h2 className="mt-6 text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl">
                {t.individualTitle}
              </h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {t.individualCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl bg-slate-50/60 p-7 ring-1 ring-slate-100/70"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#f0e4e6]">
          <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-12 py-14 sm:py-16 lg:py-20">
            <div className="flex flex-col items-center text-center gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                {t.ctaEyebrow}
              </p>
              <p className="text-base leading-[1.9] text-slate-600">
                {t.ctaBody}
              </p>
              <a
                href="mailto:contact@hinodeya.ae"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-brand-hover"
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
