"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import { useLang } from "../../lang-context";
import { mediaItems } from "../data";
import Link from "next/link";

export default function MediaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, setLang } = useLang();
  const isJP = lang === "jp";

  const item = mediaItems.find((m) => m.slug === slug);

  if (!item) {
    notFound();
  }

  const sectorLabel = item!.sector[lang];
  const titleLabel = item!.title[lang];
  const summaryLabel = item!.summary[lang];
  const stageLabel = item!.stage[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header */}
      <header className="border-b border-[#f0ece5]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800 hover:text-slate-900"
            >
              UAE Business Consulting
            </Link>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:inline">
              {isJP ? "メディア" : "Media"}
            </span>
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
        {/* Hero */}
        <section className="border-b border-[#f0ece5]">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-16 sm:py-24 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {sectorLabel}
                </p>
                <h1 className="mt-4 text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
                  {titleLabel}
                </h1>
                <p className="mt-5 text-base leading-[1.9] text-slate-600 sm:text-lg">
                  {summaryLabel}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-500">
                  <span className="rounded-full border border-slate-200 px-3 py-1">
                    {item!.location}
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1">
                    {stageLabel}
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1">
                    {item!.year}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <div
                  className="h-56 w-full bg-cover bg-center sm:h-64 lg:h-72"
                  style={{ backgroundImage: `url(${item!.imageUrl})` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section>
          <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-12 py-20 sm:py-24 lg:py-28 space-y-16">
            <div>
              <h2 className="text-xl font-light tracking-[-0.03em] text-slate-900 sm:text-2xl">
                {isJP ? "クライアント企業について" : "About the Client"}
              </h2>
              <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base">
                {isJP
                  ? "企業名や公開可能な範囲の情報に基づき、業種・ビジネスモデル・UAEを含む拠点構成などの背景を整理します。ここでは、どのような戦略的意図を持ってUAEを選択したのかが伝わるように構成します。"
                  : "We provide context on the client’s industry, business model, and footprint, focusing on why the UAE was selected as a strategic base and how it fits within their broader regional strategy."}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-[-0.03em] text-slate-900 sm:text-2xl">
                {isJP
                  ? "UAEを拠点としたビジネスモデル"
                  : "Business Model from a UAE Hub"}
              </h2>
              <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base">
                {isJP
                  ? "対象とする市場（GCC、中東全域、アフリカなど）と、拠点・パートナー・チャネルの設計について記載します。読者が自社のケースに引き寄せてイメージできるよう、物流・税務・人材などの観点も織り交ぜます。"
                  : "We describe which markets the client is serving from the UAE and how locations, partners, and channels were structured. This helps readers map the case to their own context, including logistics, tax, and talent considerations."}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-[-0.03em] text-slate-900 sm:text-2xl">
                {isJP
                  ? "当社が支援した内容"
                  : "How We Supported the Client"}
              </h2>
              <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base">
                {isJP
                  ? "法人設立・ライセンス取得・ガバナンス設計・現地パートナー開拓など、当社が関与した範囲を時系列で整理します。検討フェーズからローンチ後のフォローまでを一連のストーリーとして伝えることで、支援イメージを具体化します。"
                  : "We outline our involvement across company setup, licensing, governance, and local partnerships, describing the journey from initial assessment through launch and follow‑up support."}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-[-0.03em] text-slate-900 sm:text-2xl">
                {isJP ? "今後の展望" : "Next Steps and Outlook"}
              </h2>
              <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base">
                {isJP
                  ? "今後のエリア展開や追加プロダクトの計画など、UAE拠点を活用した中長期の方向性について触れます。読者が「自社ならどうするか」を考えやすいような示唆につなげます。"
                  : "We highlight the client’s roadmap for further expansion or product development, using the UAE as a base, and share perspectives that may be relevant for readers considering similar moves."}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#f0ece5]">
          <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-12 py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col items-center text-center gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "同様のケースをご検討の方へ" : "Considering a Similar Move?"}
              </p>
              <p className="text-base leading-[1.9] text-slate-600">
                {isJP
                  ? "ここでご紹介した内容は、公開可能な範囲に限定したものです。貴社の状況や検討タイミングを共有いただければ、近い類型のケースを踏まえて、もう少し具体的な示唆をお伝えできます。"
                  : "This overview is limited to what we can share publicly. If you share your situation and timing, we can draw on relevant cases and provide more specific guidance."}
              </p>
              <a
                href="mailto:contact@example.com"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
              >
                {isJP ? "相談を予約する" : "Schedule Consultation"}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

