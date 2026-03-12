"use client";

import React, { useState } from "react";

type Lang = "jp" | "en";

export default function CommercialExpansionPage() {
  const [lang, setLang] = useState<Lang>("jp");
  const isJP = lang === "jp";

  const title = isJP
    ? "UAE・GCC商業展開支援"
    : "UAE & GCC Commercial Expansion";
  const description = isJP
    ? "販売チャネル構築、価格戦略、現地パートナーとのアライアンス設計を通じて、UAEおよびGCCでの収益化を実現するための実務支援を提供します。"
    : "We design sales channels, pricing, and local alliances so your UAE and GCC expansion translates into sustainable revenues, not just a registered entity.";

  const ctaLabel = isJP ? "商業展開の相談をする" : "Discuss Expansion Plan";

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
            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                {isJP ? "チャネル・価格戦略" : "Channels & Pricing"}
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "直接販売・代理店・ディストリビューターなどのチャネル構成と、UAE特有の税・物流コストを踏まえた価格戦略を設計します。"
                  : "We structure direct, distributor, and partner channels and build pricing that reflects UAE‑specific tax, logistics, and commercial norms."}
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                {isJP ? "パートナー・ディール設計" : "Partners & Deal Design"}
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "有力商社・ディストリビューター候補のロングリスト作成から、契約スキーム・インセンティブ設計、パイロット案件まで伴走します。"
                  : "From longlisting distributors and trading houses to structuring contracts, incentives, and pilot deals, we support you through execution."}
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                {isJP ? "KPI・オペレーション設計" : "KPI & Operating Model"}
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "案件パイプライン管理、在庫・クレジットリスク、現地チームのKPI設計など、持続的に運用できるオペレーティングモデルを定義します。"
                  : "We define KPIs, pipeline and risk management, and the operating model linking your UAE entity with Japan and regional teams."}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#f0ece5]">
          <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-12 py-14 sm:py-16 lg:py-20">
            <div className="flex flex-col items-center text-center gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "収益化に向けて" : "From Entity to Revenue"}
              </p>
              <p className="text-base leading-[1.9] text-slate-600">
                {isJP
                  ? "既に法人をお持ちの企業様も、ゼロベースで検討中の企業様も、現在の状況と目指す姿を共有いただければ、現実的な商業展開ロードマップを描きます。"
                  : "Whether you already have a UAE entity or are starting from scratch, we convert your goals into a pragmatic commercial roadmap."}
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

