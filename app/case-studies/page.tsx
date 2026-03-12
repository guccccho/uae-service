\"use client\";

import React from "react";
import { useLang } from "../lang-context";

export default function CaseStudiesPage() {
  const { lang, setLang } = useLang();
  const isJP = lang === "jp";

  const title = isJP ? "支援事例" : "Selected Case Studies";
  const description = isJP
    ? "業種や進出フェーズの異なる日本企業・グローバル企業に対して、UAEを拠点とした事業展開をどのように支援してきたかの一部をご紹介します。"
    : "A selection of engagements across industries and stages, illustrating how we support organizations leveraging the UAE as a regional base.";

  const ctaLabel = isJP ? "自社ケースを相談する" : "Discuss Your Case";

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

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {isJP ? "製造業" : "Manufacturing"}
              </p>
              <h2 className="mt-4 text-base font-semibold tracking-[-0.01em] text-slate-900">
                {isJP
                  ? "欧州・中東向けハブとしてのUAE拠点再構築"
                  : "Re‑designing UAE as a hub for EMEA"}
              </h2>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "既存の販売代理店スキームを見直し、フリーゾーン持株会社＋本土販売法人の2層構造を構築。税務・ロジに配慮した在庫配置とKPI設計により、マージンと可視性を改善しました。"
                  : "We re‑designed a fragmented distributor model into a free‑zone holding plus onshore sales entity, improving margin visibility and inventory control across EMEA."}
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {isJP ? "テクノロジー" : "Technology"}
              </p>
              <h2 className="mt-4 text-base font-semibold tracking-[-0.01em] text-slate-900">
                {isJP
                  ? "SaaSスタートアップのGCC展開モデル構築"
                  : "Building a GCC expansion model for SaaS"}
              </h2>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "ドバイでのリージョナルHQ設立とあわせ、パートナーリセラー・ダイレクトエンタープライズの二本立てチャネル戦略を設計。価格・契約テンプレートもローカライズしました。"
                  : "Alongside setting up a Dubai HQ, we structured a mixed direct‑and‑partner sales model and localized pricing and contracts for enterprise clients."}
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {isJP ? "商社・投資" : "Trading & Investment"}
              </p>
              <h2 className="mt-4 text-base font-semibold tracking-[-0.01em] text-slate-900">
                {isJP
                  ? "現地パートナーとのジョイントベンチャー構築"
                  : "Structuring a JV with regional partners"}
              </h2>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                {isJP
                  ? "オフテイク契約と投資スキームを組み合わせたジョイントベンチャーを設計。意思決定プロセス・配当ポリシー・Exitオプションを明文化し、ガバナンスリスクを低減しました。"
                  : "We combined offtake agreements with an equity JV, clarifying decision rights, dividend policy, and exit options to reduce governance and counterparty risk."}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#f0ece5]">
          <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-12 py-14 sm:py-16 lg:py-20">
            <div className="flex flex-col items-center text-center gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "貴社の場合は" : "Your Situation"}
              </p>
              <p className="text-base leading-[1.9] text-slate-600">
                {isJP
                  ? "ここに挙げた事例はあくまで一部です。貴社の状況・制約条件を共有いただければ、近い類型のケースを踏まえて具体的な示唆をお伝えできます。"
                  : "These examples are illustrative only. Share your constraints and objectives, and we can draw on relevant cases to provide concrete guidance."}
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

