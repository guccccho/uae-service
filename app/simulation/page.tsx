"use client";

import React from "react";
import { useLang } from "../lang-context";

export default function SimulationIntroPage() {
  const { lang } = useLang();
  const isJP = lang === "jp";

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <main>
        <section className="border-b border-[#f0ece5] bg-slate-50/40">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 py-20 sm:py-28 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "コストシミュレーション" : "Cost Simulation"}
              </p>
              <h1 className="mt-4 text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl">
                {isJP
                  ? "ドバイ法人設立コストの目安を把握する"
                  : "Understand the Cost of Setting Up in Dubai"}
              </h1>
              <p className="mt-6 text-sm leading-[1.9] text-slate-600 sm:text-base">
                {isJP
                  ? "フリーゾーンの種類、法人形態、必要なビザ人数やオフィスの規模によって、UAEでの会社設立コストは大きく変わります。このシミュレーターでは、代表的な条件を選択するだけで、ライセンス・ビザ・オフィス・リロケーションを含めた概算コストを把握できます。"
                  : "Depending on the free zone, entity type, number of visas, and office size, company setup costs in the UAE can vary significantly. Our simulator helps you quickly estimate license, visa, office, and relocation costs based on a few simple assumptions."}
              </p>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a86c]">
                  {isJP ? "前提条件を選ぶ" : "Set Assumptions"}
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                  {isJP
                    ? "フリーゾーン／メインランド、ビザ人数、オフィスタイプ、ビジネスタイプなど、想定する条件を選択します。"
                    : "Select whether you plan for a free zone or mainland entity, how many visas you need, office type, and business profile."}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a86c]">
                  {isJP ? "コストを把握する" : "See Cost Breakdown"}
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                  {isJP
                    ? "ライセンス、登録費用、ビザ、オフィス、リロケーションの各項目ごとのコストと、合計額（AED／円）を確認できます。"
                    : "Review an itemized breakdown for license, registration, visa, office, and relocation, plus the estimated total in AED and JPY."}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a86c]">
                  {isJP ? "次の一歩を整理する" : "Clarify Next Steps"}
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                  {isJP
                    ? "シミュレーション結果をもとに、具体的なフリーゾーンの検討や、設立スケジュール・必要書類のイメージづくりに役立てていただけます。"
                    : "Use the result as a starting point for comparing free zones and shaping a realistic timeline and document list for your expansion."}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="/simulator"
                className="inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
              >
                {isJP ? "シミュレーターを開く" : "Open Simulator"}
              </a>
              <p className="text-xs leading-relaxed text-slate-500">
                {isJP
                  ? "※ここで算出される数値はあくまで概算であり、実際の見積もりとは異なる場合があります。"
                  : "The figures shown are indicative only and may differ from a formal quotation."}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

