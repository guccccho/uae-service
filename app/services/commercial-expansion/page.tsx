"use client";

import React from "react";
import { useLang } from "../../lang-context";
import { LangSwitch } from "../../components/LangSwitch";
import { contactMailto } from "../../lib/contact-email";
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
    title: "UAE・GCC商業展開支援",
    description:
      "販売チャネル構築、価格戦略、現地パートナーとのアライアンス設計を通じて、UAEおよびGCCでの収益化を実現するための実務支援を提供します。",
    cards: [
      {
        title: "チャネル・価格戦略",
        body: "直接販売・代理店・ディストリビューターなどのチャネル構成と、UAE特有の税・物流コストを踏まえた価格戦略を設計します。",
      },
      {
        title: "パートナー・ディール設計",
        body: "有力商社・ディストリビューター候補のロングリスト作成から、契約スキーム・インセンティブ設計、パイロット案件まで伴走します。",
      },
      {
        title: "KPI・オペレーション設計",
        body: "案件パイプライン管理、在庫・クレジットリスク、現地チームのKPI設計など、持続的に運用できるオペレーティングモデルを定義します。",
      },
    ],
    ctaEyebrow: "収益化に向けて",
    ctaBody:
      "既に法人をお持ちの企業様も、ゼロベースで検討中の企業様も、現在の状況と目指す姿を共有いただければ、現実的な商業展開ロードマップを描きます。",
    ctaLabel: "商業展開の相談をする",
  },
  en: {
    title: "UAE & GCC Commercial Expansion",
    description:
      "We design sales channels, pricing, and local alliances so your UAE and GCC expansion translates into sustainable revenues, not just a registered entity.",
    cards: [
      {
        title: "Channels & Pricing",
        body: "We structure direct, distributor, and partner channels and build pricing that reflects UAE‑specific tax, logistics, and commercial norms.",
      },
      {
        title: "Partners & Deal Design",
        body: "From longlisting distributors and trading houses to structuring contracts, incentives, and pilot deals, we support you through execution.",
      },
      {
        title: "KPI & Operating Model",
        body: "We define KPIs, pipeline and risk management, and the operating model linking your UAE entity with Japan and regional teams.",
      },
    ],
    ctaEyebrow: "From Entity to Revenue",
    ctaBody:
      "Whether you already have a UAE entity or are starting from scratch, we convert your goals into a pragmatic commercial roadmap.",
    ctaLabel: "Discuss Expansion Plan",
  },
  ar: {
    title: "دعم التوسع التجاري في الإمارات ودول مجلس التعاون",
    description:
      "نصمم قنوات البيع والتسعير والتحالفات المحلية لتحويل توسعكم في الإمارات ودول مجلس التعاون إلى إيرادات مستدامة، وليس مجرد كيان مسجل.",
    cards: [
      {
        title: "القنوات والتسعير",
        body: "نهيكل قنوات البيع المباشر والموزعين والشركاء ونبني استراتيجية تسعير تعكس الضرائب واللوجستيات والمعايير التجارية الخاصة بالإمارات.",
      },
      {
        title: "الشركاء وتصميم الصفقات",
        body: "من إعداد قائمة طويلة بالموزعين وشركات التجارة إلى هيكلة العقود والحوافز والصفقات التجريبية، نرافقكم حتى التنفيذ.",
      },
      {
        title: "مؤشرات الأداء ونموذج التشغيل",
        body: "نحدد مؤشرات الأداء وإدارة خط الأنابيب والمخاطر ونموذج التشغيل الذي يربط كيانكم في الإمارات بفرق اليابان والمنطقة.",
      },
    ],
    ctaEyebrow: "من الكيان إلى الإيرادات",
    ctaBody:
      "سواء كان لديكم كيان في الإمارات بالفعل أو تبدأون من الصفر، نحول أهدافكم إلى خارطة طريق تجارية عملية.",
    ctaLabel: "مناقشة خطة التوسع",
  },
};

export default function CommercialExpansionPage() {
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
                className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/70"
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
                href={contactMailto()}
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
