"use client";

import React, { useState } from "react";

type Lang = "jp" | "en";

export default function FreeZonesPage() {
  const [lang, setLang] = useState<Lang>("jp");
  const isJP = lang === "jp";

  const title = isJP ? "UAEフリーゾーン比較" : "UAE Free Zone Comparison";
  const description = isJP
    ? "UAE進出ではフリーゾーンの選択が重要です。DMCCやRAKEZを中心に主要フリーゾーンを比較します。"
    : "Choosing the right free zone is critical for entering the UAE. This page compares key jurisdictions, with a focus on DMCC and RAKEZ.";

  const ctaSimulator = isJP ? "コストシミュレーター" : "Cost Simulator";
  const ctaConsult = isJP ? "無料相談" : "Book Consultation";

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
        {/* 1. Hero */}
        <section className="border-b border-[#f0ece5] bg-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-light tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Comparison Table */}
        <section className="border-b border-[#f0ece5] bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "主要フリーゾーン比較" : "Key Free Zone Comparison"}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {isJP
                  ? "DMCCとRAKEZを中心に、その他の代表的なフリーゾーンとの違いを俯瞰します。"
                  : "A snapshot comparison of DMCC and RAKEZ alongside other representative free zones."}
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/80">
              <div className="min-w-full divide-y divide-slate-100 text-sm">
                <div className="grid grid-cols-5 bg-slate-50/60 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:px-6">
                  <div>{isJP ? "フリーゾーン" : "Free Zone"}</div>
                  <div>{isJP ? "ブランド性" : "Brand Prestige"}</div>
                  <div>{isJP ? "コスト効率" : "Cost Efficiency"}</div>
                  <div>{isJP ? "柔軟性" : "Flexibility"}</div>
                  <div>{isJP ? "主なビジネスタイプ" : "Typical Business Type"}</div>
                </div>

                {[
                  {
                    name: "DMCC",
                    prestige: "★★★★★",
                    cost: "★★☆☆☆",
                    flex: "★★★★☆",
                    biz: isJP
                      ? "コンサルティング、投資、国際取引"
                      : "Consulting, investment, international trade",
                    highlight: true,
                  },
                  {
                    name: "RAKEZ",
                    prestige: "★★★☆☆",
                    cost: "★★★★★",
                    flex: "★★★☆☆",
                    biz: isJP
                      ? "トレーディング、スタートアップ、製造"
                      : "Trading, startups, manufacturing",
                    highlight: true,
                  },
                  {
                    name: "IFZA",
                    prestige: "★★★☆☆",
                    cost: "★★★★★",
                    flex: "★★★★☆",
                    biz: isJP ? "中小企業、リモート設立" : "SMEs, remote‑friendly setups",
                  },
                  {
                    name: "Meydan",
                    prestige: "★★★☆☆",
                    cost: "★★★★☆",
                    flex: "★★★★☆",
                    biz: isJP ? "小規模サービス業" : "Smaller service businesses",
                  },
                  {
                    name: "SPC",
                    prestige: "★★★☆☆",
                    cost: "★★★★★",
                    flex: "★★★☆☆",
                    biz: isJP ? "ホールディング、IP管理" : "Holding, IP management",
                  },
                ].map((row) => (
                  <div
                    key={row.name}
                    className={`grid grid-cols-5 items-center px-4 py-4 sm:px-6 ${
                      row.highlight
                        ? "bg-[#fffdf7]"
                        : "bg-white"
                    }`}
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-800">
                      {row.name}
                    </div>
                    <div className="text-xs text-slate-800">{row.prestige}</div>
                    <div className="text-xs text-slate-800">{row.cost}</div>
                    <div className="text-xs text-slate-800">{row.flex}</div>
                    <div className="text-xs text-slate-600">{row.biz}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. DMCC Section */}
        <section className="border-b border-[#f0ece5] bg-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-20 sm:py-24 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                  DMCC
                </p>
                <h2 className="mt-4 text-2xl font-light tracking-[-0.04em] text-slate-900 sm:text-3xl">
                  {isJP
                    ? "ブランド性と国際的な信用を重視する企業向け"
                    : "For prestige‑focused, internationally oriented companies"}
                </h2>
                <p className="mt-5 text-sm leading-[1.9] text-slate-600 sm:text-base">
                  {isJP
                    ? "DMCCはドバイを代表するフリーゾーンの一つであり、国際的な知名度とブランド力を持つハブです。サービス業・コンサルティング・投資・国際取引など、「対外的な印象」や「信頼性」が重要なビジネスに適しています。"
                    : "DMCC is one of Dubai’s flagship free zones with strong international recognition and brand value. It suits service businesses, consulting, investment, and international trade where external perception and credibility matter."}
                </p>
                <ul className="mt-6 space-y-2 text-sm leading-relaxed text-slate-700">
                  <li>
                    {isJP
                      ? "・強い国際的レピュテーションとブランド力"
                      : "• Strong international reputation and brand presence"}
                  </li>
                  <li>
                    {isJP
                      ? "・プレミアムポジショニングと洗練されたビジネス環境"
                      : "• Premium positioning and a sophisticated business environment"}
                  </li>
                  <li>
                    {isJP
                      ? "・グローバル企業・金融機関とのネットワーク"
                      : "• Extensive network of global companies and financial institutions"}
                  </li>
                  <li>
                    {isJP
                      ? "・コンサルティング、投資、国際トレードに特に適した選択肢"
                      : "• Especially suitable for consulting, investment, and international trading platforms"}
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/80">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {isJP ? "こんな企業におすすめ" : "Best suited for"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {isJP
                    ? "海外投資家・金融機関・上場企業との取引が多く、「どこで登記しているか」が信頼性に直結するビジネス。"
                    : "Businesses dealing frequently with international investors, financial institutions, or listed companies, where the place of incorporation directly influences perceived credibility."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. RAKEZ Section */}
        <section className="border-b border-[#f0ece5] bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-20 sm:py-24 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                  RAKEZ
                </p>
                <h2 className="mt-4 text-2xl font-light tracking-[-0.04em] text-slate-900 sm:text-3xl">
                  {isJP
                    ? "コスト効率と実務性を重視する企業向け"
                    : "For cost‑efficient, practical setups"}
                </h2>
                <p className="mt-5 text-sm leading-[1.9] text-slate-600 sm:text-base">
                  {isJP
                    ? "RAKEZは比較的リーズナブルなコストと柔軟な施設オプションを備えたフリーゾーンで、トレーディング、スタートアップ、製造・ライトインダストリーなど、実務性とコストバランスを重視するビジネスに向いています。"
                    : "RAKEZ offers comparatively economical cost structures and flexible facility options. It is well‑suited for trading, startups, and manufacturing or light industry where practicality and cost control are key."}
                </p>
                <ul className="mt-6 space-y-2 text-sm leading-relaxed text-slate-700">
                  <li>
                    {isJP
                      ? "・初期費用・維持コストを抑えやすい価格帯"
                      : "• Competitive initial and ongoing cost levels"}
                  </li>
                  <li>
                    {isJP
                      ? "・倉庫・工場・オフィスなど柔軟な施設タイプ"
                      : "• Flexible facilities including warehouses, industrial units, and offices"}
                  </li>
                  <li>
                    {isJP
                      ? "・トレーディング、スタートアップ、製造・加工ビジネスとの相性が良い"
                      : "• Strong fit for trading, startups, and manufacturing or processing businesses"}
                  </li>
                  <li>
                    {isJP
                      ? "・「まずはリーンに始めたい」企業に適した実務的な環境"
                      : "• Practical environment for companies that want to start lean while keeping options open"}
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/80">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {isJP ? "こんな企業におすすめ" : "Best suited for"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {isJP
                    ? "コスト効率と現場オペレーションのしやすさを優先しつつ、UAEに実務拠点を持ちたい企業。"
                    : "Companies prioritizing cost efficiency and operational practicality, while still securing a functional base in the UAE."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Recommendation Section */}
        <section className="border-b border-[#f0ece5] bg-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "どのフリーゾーンを選ぶべきか？" : "Which Free Zone Should You Choose?"}
              </p>
              <h2 className="mt-4 text-2xl font-light tracking-[-0.04em] text-slate-900 sm:text-3xl">
                {isJP
                  ? "ブランド重視か、コスト効率重視かで最適解が変わります。"
                  : "The right answer depends on whether you prioritize brand or cost efficiency."}
              </h2>
              <p className="mt-5 text-sm leading-[1.9] text-slate-600 sm:text-base">
                {isJP
                  ? "ブランド性・対外的信頼性・国際的な印象を重視する場合はDMCC、コスト効率・実務性・リーンな立ち上げを重視する場合はRAKEZが有力な選択肢となります。"
                  : "If you emphasize brand prestige, external credibility, and international perception, DMCC is often the better fit. If you emphasize cost efficiency, practicality, and a lean setup, RAKEZ is typically more suitable."}
              </p>
              <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base">
                {isJP
                  ? "その他のフリーゾーン（IFZA、Meydan、SPCなど）も、事業規模や目的によって有力な選択肢となり得ます。貴社の条件に合わせて、複数案を並べて検討することをおすすめします。"
                  : "Other free zones such as IFZA, Meydan, and SPC can also be compelling depending on your scale and objectives. We recommend reviewing a few shortlisted options side by side against your actual use cases."}
              </p>
            </div>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="flex flex-col items-center text-center gap-6">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "次のステップ" : "Next Step"}
              </p>
              <p className="max-w-3xl text-base leading-[1.9] text-slate-600 sm:text-lg">
                {isJP
                  ? "シミュレーターでおおよそのコスト感を掴んだ上で、具体的な事業内容や優先事項を踏まえた無料相談に進んでいただく流れがおすすめです。"
                  : "We recommend first using the simulator to understand rough cost levels, then moving to a consultation to align on your business details and priorities."}
              </p>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/simulator"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {ctaSimulator}
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
                >
                  {ctaConsult}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
