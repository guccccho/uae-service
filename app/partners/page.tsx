"use client";

import React, { useState } from "react";

type Lang = "jp" | "en";

export default function PartnersPage() {
  const [lang, setLang] = useState<Lang>("jp");
  const isJP = lang === "jp";

  const title = isJP
    ? "ローカルパートナー・専門家ネットワーク"
    : "Local Partner Network";
  const description = isJP
    ? "現地の法律事務所、税務・会計、不動産、人材、リロケーションなど、UAEでの事業運営に不可欠な専門家・パートナーと連携し、ワンストップでのプロジェクト推進を支援します。"
    : "We work with a curated network of legal, tax, real estate, HR, and relocation specialists to deliver integrated support for your UAE operations.";

  const ctaLabel = isJP ? "パートナー活用を相談する" : "Discuss Partner Engagement";

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
                {isJP ? "法律・規制" : "Legal & Regulatory"}
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "現地法律事務所・カンパニーサービスプロバイダーと連携し、ライセンス、契約、規制対応に関する実務を支援します。"
                  : "We collaborate with local law firms and corporate service providers on licensing, contracts, and regulatory matters."}
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                {isJP ? "税務・ストラクチャー" : "Tax & Structuring"}
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "国際税務ファームと連携し、コーポレート税・移転価格・グループ内取引を踏まえたストラクチャーの検討をサポートします。"
                  : "Together with international tax advisors, we assess structures from a corporate tax and transfer pricing perspective."}
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                {isJP ? "不動産・人材" : "Real Estate & Talent"}
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "不動産エージェント、人材紹介会社、リロケーション専門会社などと協働し、住居・オフィス・採用まで一気通貫での支援が可能です。"
                  : "Through real estate, recruitment, and relocation partners, we provide end‑to‑end support across housing, office, and hiring."}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#f0ece5]">
          <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-12 py-14 sm:py-16 lg:py-20">
            <div className="flex flex-col items-center text-center gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "ワンストップサポート" : "One‑Stop Support"}
              </p>
              <p className="text-base leading-[1.9] text-slate-600">
                {isJP
                  ? "既にお付き合いのあるパートナーとの棲み分けも含め、どの領域を当社・当社ネットワークでサポートすべきかご一緒に設計します。"
                  : "We help you decide which parts should be covered by your existing advisors and where our network can fill gaps."}
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

