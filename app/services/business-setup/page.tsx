"use client";

import React, { useState } from "react";

type Lang = "jp" | "en";

export default function BusinessSetupPage() {
  const [lang, setLang] = useState<Lang>("jp");
  const isJP = lang === "jp";

  const heroTitle = isJP
    ? "UAE法人設立・市場参入サポート"
    : "UAE Company Formation & Market Entry Support";

  const heroDescription = isJP
    ? "当社は、日本企業・経営者・投資家のためのUAE市場参入パートナーです。フリーゾーン設立、銀行口座、ビザ、パートナー紹介まで一貫して支援します。"
    : "We support Japanese companies, entrepreneurs, and investors entering the UAE market, from company formation to banking and strategic partnerships.";

  const ctaPrimary = isJP ? "無料相談する" : "Book Free Consultation";
  const ctaSecondary = isJP ? "コスト診断を試す" : "Try the Cost Simulator";

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
                isJP ? "bg-[#c9a86c] text-white" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              JP
            </button>
            <span className="text-slate-400">/</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 transition-colors ${
                !isJP ? "bg-[#c9a86c] text-white" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-[#f0ece5] bg-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-light tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-6xl">
                {heroTitle}
              </h1>
              <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
                {heroDescription}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
                >
                  {ctaPrimary}
                </a>
                <a
                  href="/simulator"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service overview */}
        <section className="border-b border-[#f0ece5] bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "サービス概要" : "Service Overview"}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {isJP
                  ? "UAE法人設立だけでなく、その後の口座開設・ビザ・実務運用までを一体で設計し、日本側の社内稟議にも載せやすい形で整理します。"
                  : "We do more than register a company. We design a complete entry path that aligns incorporation, banking, visas, and day‑to‑day operations with your internal approval process."}
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                  {isJP ? "会社設立サポート" : "Company Formation Support"}
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                  {isJP
                    ? "フリーゾーン・メインランドを含めたスキーム設計と、実際の法人設立・ライセンス取得プロセスを一括でサポートします。"
                    : "We design an appropriate structure across free zones or mainland and coordinate the full incorporation and licensing process."}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                  {isJP ? "銀行口座開設サポート" : "Corporate Bank Account Assistance"}
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                  {isJP
                    ? "UAEの銀行の特徴や審査傾向を踏まえ、候補行の選定、必要書類の整理、面談準備をサポートします。"
                    : "We help you select suitable banks, prepare documentation, and navigate onboarding and KYC expectations in the UAE."}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                  {isJP ? "ビザ・移住サポート" : "Visa & Relocation Support"}
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                  {isJP
                    ? "経営陣・キーパーソンのビザ取得、帯同家族のリロケーション、不動産・学校情報などを、信頼できるパートナーと連携して支援します。"
                    : "Together with trusted partners, we coordinate visas, relocation, housing, and schooling options for executives and their families."}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                  {isJP ? "現地パートナー紹介" : "Local Partner & JV Introduction"}
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                  {isJP
                    ? "販売代理店、ディストリビューター、共同出資パートナー候補など、信頼できる現地ネットワークとの接点づくりを支援します。"
                    : "We open doors to distributors, strategic partners, and potential JV counterparts through a curated local network."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Preferred Free Zones */}
        <section className="border-b border-[#f0ece5] bg-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "主なご提案フリーゾーン" : "Preferred Free Zones"}
              </p>
              <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base whitespace-pre-line">
                {isJP
                  ? "当社では、事業内容や戦略に応じて複数のフリーゾーンをご提案していますが、\n特に以下の2つのフリーゾーンを中心にご提案するケースが多くなっています。"
                  : "While several UAE free zones may be suitable depending on the business model,\nwe frequently recommend the following two options."}
              </p>

              <div className="mt-8 space-y-4 text-sm leading-[1.9] text-slate-700">
                <div>
                  <p className="font-semibold">• DMCC</p>
                  <p className="mt-1">
                    {isJP
                      ? "ブランド性、国際的信頼性、対外的な印象を重視する企業に適しています。"
                      : "Ideal for companies that prioritize prestige, credibility, and international positioning."}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">• RAKEZ</p>
                  <p className="mt-1">
                    {isJP
                      ? "コスト効率、実務性、柔軟な立ち上げを重視する企業に適しています。"
                      : "Well suited for businesses focusing on cost efficiency and practical setup."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-[#f0ece5] bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "UAE進出の流れ" : "Market Entry Process"}
              </p>
            </div>
            <ol className="mt-12 grid gap-6 sm:grid-cols-5">
              {[
                isJP ? "初回相談" : "Initial Discussion",
                isJP ? "フリーゾーン選定" : "Free Zone Selection",
                isJP ? "法人設立手続き" : "Company Formation",
                isJP ? "ビザ・銀行口座" : "Visas & Banking",
                isJP ? "UAEでの事業開始" : "Go‑Live in the UAE",
              ].map((step, index) => (
                <li
                  key={step}
                  className="flex flex-col items-start rounded-2xl bg-white/90 p-4 text-sm leading-relaxed text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/70"
                >
                  <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#c9a86c]/10 text-xs font-semibold text-[#c9a86c]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="flex flex-col items-center text-center gap-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "UAE進出について相談する" : "Discuss Your UAE Entry"}
              </p>
              <h2 className="max-w-3xl text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl lg:text-4xl">
                {isJP
                  ? "事業内容やご予算に応じて、最適なフリーゾーンや進出方法をご提案します。"
                  : "We recommend the right free zone and entry structure based on your business model and budget."}
              </h2>
              <p className="max-w-2xl text-base leading-[1.9] text-slate-600 sm:text-lg">
                {isJP
                  ? "まずはラフなイメージレベルでも構いません。想定している事業内容・売上規模・タイムラインを共有いただければ、現実的な選択肢を整理いたします。"
                  : "You do not need a finalized plan. Share your rough ideas, revenue expectations, and timing, and we will help clarify realistic options."}
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-12 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
                >
                  {isJP ? "無料相談を予約" : "Book Free Consultation"}
                </a>
                <a
                  href="/simulator"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
