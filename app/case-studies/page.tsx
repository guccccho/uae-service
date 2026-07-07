"use client";

import React from "react";
import { useLang } from "../lang-context";
import { LangSwitch } from "../components/LangSwitch";
import { contactMailto } from "../lib/contact-email";
import type { Lang } from "../i18n";

const content: Record<
  Lang,
  {
    title: string;
    description: string;
    cases: { sector: string; title: string; body: string }[];
    ctaEyebrow: string;
    ctaBody: string;
    ctaLabel: string;
  }
> = {
  jp: {
    title: "支援事例",
    description:
      "業種や進出フェーズの異なる日本企業・グローバル企業に対して、UAEを拠点とした事業展開をどのように支援してきたかの一部をご紹介します。",
    cases: [
      {
        sector: "製造業",
        title: "欧州・中東向けハブとしてのUAE拠点再構築",
        body: "既存の販売代理店スキームを見直し、フリーゾーン持株会社＋本土販売法人の2層構造を構築。税務・ロジに配慮した在庫配置とKPI設計により、マージンと可視性を改善しました。",
      },
      {
        sector: "テクノロジー",
        title: "SaaSスタートアップのGCC展開モデル構築",
        body: "ドバイでのリージョナルHQ設立とあわせ、パートナーリセラー・ダイレクトエンタープライズの二本立てチャネル戦略を設計。価格・契約テンプレートもローカライズしました。",
      },
      {
        sector: "商社・投資",
        title: "現地パートナーとのジョイントベンチャー構築",
        body: "オフテイク契約と投資スキームを組み合わせたジョイントベンチャーを設計。意思決定プロセス・配当ポリシー・Exitオプションを明文化し、ガバナンスリスクを低減しました。",
      },
    ],
    ctaEyebrow: "貴社の場合は",
    ctaBody:
      "ここに挙げた事例はあくまで一部です。貴社の状況・制約条件を共有いただければ、近い類型のケースを踏まえて具体的な示唆をお伝えできます。",
    ctaLabel: "自社ケースを相談する",
  },
  en: {
    title: "Selected Case Studies",
    description:
      "A selection of engagements across industries and stages, illustrating how we support organizations leveraging the UAE as a regional base.",
    cases: [
      {
        sector: "Manufacturing",
        title: "Re‑designing UAE as a hub for EMEA",
        body: "We re‑designed a fragmented distributor model into a free‑zone holding plus onshore sales entity, improving margin visibility and inventory control across EMEA.",
      },
      {
        sector: "Technology",
        title: "Building a GCC expansion model for SaaS",
        body: "Alongside setting up a Dubai HQ, we structured a mixed direct‑and‑partner sales model and localized pricing and contracts for enterprise clients.",
      },
      {
        sector: "Trading & Investment",
        title: "Structuring a JV with regional partners",
        body: "We combined offtake agreements with an equity JV, clarifying decision rights, dividend policy, and exit options to reduce governance and counterparty risk.",
      },
    ],
    ctaEyebrow: "Your Situation",
    ctaBody:
      "These examples are illustrative only. Share your constraints and objectives, and we can draw on relevant cases to provide concrete guidance.",
    ctaLabel: "Discuss Your Case",
  },
  ar: {
    title: "دراسات حالة مختارة",
    description:
      "مجموعة من المشاركات عبر الصناعات والمراحل، توضح كيف ندعم المؤسسات التي تستفيد من الإمارات كقاعدة إقليمية.",
    cases: [
      {
        sector: "التصنيع",
        title: "إعادة تصميم الإمارات كمركز لأوروبا والشرق الأوسط وأفريقيا",
        body: "أعدنا تصميم نموذج موزعين مجزأ إلى شركة قابضة في منطقة حرة وكيان مبيعات في البر الرئيسي، مما حسّن وضوح الهوامش والتحكم في المخزون عبر المنطقة.",
      },
      {
        sector: "التكنولوجيا",
        title: "بناء نموذج توسع في دول مجلس التعاون لشركة SaaS",
        body: "إلى جانب إنشاء مقر إقليمي في دبي، هيكلنا نموذج مبيعات مختلطاً مباشراً وعبر الشركاء ووطّنا التسعير والعقود لعملاء المؤسسات.",
      },
      {
        sector: "التجارة والاستثمار",
        title: "هيكلة مشروع مشترك مع شركاء إقليميين",
        body: "جمعنا بين اتفاقيات الاستلام والمشروع المشترك في رأس المال، ووضحنا حقوق اتخاذ القرار وسياسة التوزيعات وخيارات الخروج لتقليل مخاطر الحوكمة والطرف المقابل.",
      },
    ],
    ctaEyebrow: "وضعكم",
    ctaBody:
      "هذه الأمثلة توضيحية فقط. شاركونا قيودكم وأهدافكم، ويمكننا الاستفادة من حالات ذات صلة لتقديم إرشادات ملموسة.",
    ctaLabel: "مناقشة حالتكم",
  },
};

export default function CaseStudiesPage() {
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

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {t.cases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.sector}
                </p>
                <h2 className="mt-4 text-base font-semibold tracking-[-0.01em] text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                  {item.body}
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
