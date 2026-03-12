\"use client\";

import React from "react";
import { useLang } from "../lang-context";

export default function ServicesPage() {
  const { lang, setLang } = useLang();
  const isJP = lang === "jp";

  const title = isJP
    ? "コンサルティングサービス一覧"
    : "Advisory Services Overview";
  const description = isJP
    ? "UAE進出の検討段階から、法人設立、拠点展開、現地パートナーシップ構築まで。日本企業の状況に合わせて、必要なサービスだけを組み合わせてご提案します。"
    : "From initial UAE market assessment to company setup, local presence, and strategic partnerships, we assemble only the services your organization truly needs at each stage.";

  const ctaLabel = isJP ? "無料相談を予約する" : "Schedule Consultation";

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header */}
      <header className="border-b border-[#f0ece5]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800">
            UAE Business Consulting
          </div>
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em]">
            <button
              type="button"
              onClick={() => setLang("jp")}
              className={`rounded-full px-3 py-1 transition-colors ${
                lang === "jp"
                  ? "bg-[#c9a86c] text-white"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              JP
            </button>
            <span className="text-slate-400">/</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 transition-colors ${
                lang === "en"
                  ? "bg-[#c9a86c] text-white"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Main content */}
        <section className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
              {description}
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.04)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                {isJP ? "戦略・市場分析" : "Strategy & Market"}
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "マクロ環境・競合・規制を含む市場調査、進出シナリオの設計、社内意思決定に必要なインプットを整理します。"
                  : "We provide structured market analysis, regulatory insight, and entry scenarios tailored to your internal decision-making process."}
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.04)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                {isJP ? "法人設立・ガバナンス" : "Setup & Governance"}
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "本土・フリーゾーンの比較検討から、法人設立、ライセンス取得、グループ全体でのガバナンス設計までカバーします。"
                  : "We compare mainland and free zones, coordinate setup and licensing, and align governance with your global structure."}
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.04)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                {isJP ? "商業展開・パートナー" : "Commercial & Partners"}
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "販売・調達・アライアンスなど、現地パートナーとの関係構築と収益モデル設計を支援します。"
                  : "We support commercial rollout, partner selection, and revenue model design with trusted local counterparts."}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#f0ece5]">
          <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-12 py-14 sm:py-16 lg:py-20">
            <div className="flex flex-col items-center text-center gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "次のステップ" : "Next Step"}
              </p>
              <p className="text-base leading-[1.9] text-slate-600">
                {isJP
                  ? "貴社の検討段階・想定タイムラインを共有いただければ、最適なサービスの組み合わせをご提案いたします。"
                  : "Share your current stage and target timeline, and we will propose a focused combination of services for you."}
              </p>
              <a
                href="mailto:contact@example.com"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

