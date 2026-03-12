"use client";

import React, { useState } from "react";

type Lang = "jp" | "en";

export default function RealEstateRelocationPage() {
  const [lang, setLang] = useState<Lang>("jp");
  const isJP = lang === "jp";

  const title = isJP
    ? "ドバイ不動産・リロケーション支援"
    : "Dubai Real Estate & Relocation Support";
  const description = isJP
    ? "経営陣・キーパーソンのドバイ赴任に伴う住居選定、学校、生活インフラの整備まで、日本側と連携しながら安全かつスムーズなリロケーションを実現します。"
    : "We support the relocation of executives and key staff to Dubai, covering housing, schools, and practical infrastructure so your team can settle quickly and focus on the business.";

  const ctaLabel = isJP ? "リロケーション相談をする" : "Discuss Relocation Plan";

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
                {isJP ? "エリア・住居選定" : "Area & Housing Selection"}
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "ご家族構成・通勤動線・学校の候補を踏まえ、住宅エリアと物件タイプ（アパート / ヴィラなど）を具体的に絞り込みます。"
                  : "Based on family profile, commute, and school preferences, we shortlist appropriate neighborhoods and property types for you."}
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                {isJP ? "学校・生活インフラ" : "Schools & Daily Life"}
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "日本人学校・インターナショナルスクール、医療機関、銀行、運転免許など、生活立ち上げに必要なステップを整理します。"
                  : "We map options for schools, healthcare, banking, and driving licenses, structuring a clear step‑by‑step plan for settling in."}
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a86c]">
                {isJP ? "赴任前後サポート" : "Pre‑ & Post‑Move Support"}
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "内示から着任後90日程度まで、日本本社・ご本人・現地専門家の三者間での情報連携を設計し、不安要素を最小化します。"
                  : "From assignment confirmation through the first 90 days, we coordinate between HQ, assignees, and local specialists to reduce friction and risk."}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#f0ece5]">
          <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-12 py-14 sm:py-16 lg:py-20">
            <div className="flex flex-col items-center text-center gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "赴任・移転プロジェクト" : "Relocation Projects"}
              </p>
              <p className="text-base leading-[1.9] text-slate-600">
                {isJP
                  ? "赴任人数やタイムライン、ご家族の状況を共有いただければ、現実的なリロケーションプランとコストイメージをご提示します。"
                  : "Share headcount, timing, and family profile, and we will outline a realistic relocation plan and cost expectations."}
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

