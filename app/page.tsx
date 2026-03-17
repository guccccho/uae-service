"use client";

import React from "react";
import { useLang } from "./lang-context";

const content = {
  jp: {
    logo: "UAE Business Consulting",
    hero: {
      title: "UAE進出を、戦略から実行まで",
      subtitleLine1: "法人設立、パートナーシップ構築、市場参入戦略まで、",
      subtitleLine2: "日本企業のUAE進出をトータルで支援します。",
      primaryCta: "相談を予約する",
      secondaryCta: "サービスを見る",
      simulatorCta: "コストシミュレーターを見る",
    },
    trusted: {
      title: "提携パートナー / 実績",
      logos: ["DMCC", "Abu Dhabi Global Market", "UAE Free Zones", "International Partners"],
    },
    expertise: {
      title: "サービス内容",
      subtitle: "UAE進出を支える、実務と戦略の両面からのアドバイザリー。",
      cards: [
        {
          code: "ME",
          title: "市場参入戦略",
          body: "UAE市場へのアクセス設計、成長戦略、現地競合分析を含む市場参入プランを策定します。",
        },
        {
          code: "CS",
          title: "コーポレート設立",
          body: "法人設立、ライセンス取得、規制対応など、各フリーゾーン・本土管轄での設立プロセスを支援します。",
        },
        {
          code: "SP",
          title: "戦略的パートナーシップ",
          body: "信頼できる現地パートナーの選定から協業スキーム設計まで、長期的な関係構築を支援します。",
        },
      ],
    },
    why: {
      title: "UAEが選ばれる理由",
      subtitle: "日本企業の成長を加速させるグローバル拠点としてのUAE。",
      cards: [
        {
          title: "グローバル金融ハブ",
          body: "国際金融機関と投資家が集積し、資本調達とM&Aに有利なエコシステムが整っています。",
        },
        {
          title: "中東市場へのゲートウェイ",
          body: "GCC・中東・アフリカ市場へのハブとして、物流・人材・インフラが高度に整備されています。",
        },
        {
          title: "税効率の高い環境",
          body: "フリーゾーンや特別制度を通じて、法人税や持株会社構造の最適化が可能です。",
        },
      ],
    },
    cases: {
      title: "事例紹介",
      subtitle: "業界別の具体的な支援事例。",
      cards: [
        {
          tag: "製造業",
          title: "日本製造業企業 ― UAE市場参入戦略",
          body: "現地需要分析から拠点選定、販売パートナー開拓まで、一貫した市場参入戦略を設計。",
        },
        {
          tag: "テクノロジー",
          title: "テクノロジースタートアップ ― 地域展開支援",
          body: "ドバイを起点としたGCC展開モデルの構築、ライセンス取得、金融機関との連携を支援。",
        },
        {
          tag: "商社",
          title: "総合商社 ― 戦略的パートナーシップ開発",
          body: "現地有力企業とのジョイントベンチャー組成、ガバナンス設計、商流構築を支援。",
        },
      ],
    },
    faq: {
      title: "よくあるご質問",
      items: [
        {
          q: "ドバイでの法人設立やゴールデンビザ取得のメリット、税制優遇の仕組みを教えて。",
          a: "ドバイ（UAE）は、ビジネス環境の自由度や魅力的な税制、世界トップクラスの治安の良さから、世界中の経営者・投資家から注目されています。まず法人設立については、約50のフリーゾーンを中心に外資100％での設立が可能で、メインランドでも多くの業種で100％外資が認められています。設立手続きは通常2〜4週間程度とスピーディーで、中東・アフリカ・欧州を含む広い市場へのハブとして優れたインフラを備えています。\n\nゴールデンビザは、投資家や起業家、熟練専門人材向けの長期居住プログラムで、5年または10年の居住権が付与され、条件を満たす限り更新可能です。通常ビザと異なり、長期の海外滞在でも居住資格を失わず、自己スポンサーで現地スポンサー不要、家族や家事労働者の帯同も柔軟です。さらにEsaad Privilege Cardなどを通じて、教育・医療・飲食・不動産などで優待を受けられます。\n\n税制面では、個人所得に対する税金（所得税・住民税・キャピタルゲイン税・相続税・贈与税など）は一切かかりません。法人税は2023年に9％が導入されましたが、年間課税所得が37万5,000ディルハム（約1,500万円）以下であれば対象外で、フリーゾーン企業は一定条件を満たしUAE国内取引が限定的であれば課税対象外とみなされます（申告義務はあり）。さらに日UAE間の租税条約により二重課税を防ぐ仕組みも整っており、「生活の質」と「ビジネスの成長・自由度」を高いレベルで両立できる環境と言えます。",
        },
        {
          q: "どのタイミングで相談するのが最適ですか？",
          a: "具体的な進出時期が決まっていない段階でも問題ありません。情報収集フェーズからご相談いただくことで、エリア選定や社内稟議に必要な材料を早めに整理することができます。",
        },
        {
          q: "どのような規模・業種の企業が対象ですか？",
          a: "日本の中堅〜大企業を中心に、製造業、商社、テクノロジー企業など、BtoBビジネスを展開されている企業様からのご相談が多いです。その他の業種についても、お気軽にご相談ください。",
        },
      ],
    },
    cta: {
      label: "コンサルティングのご相談",
      heading: "UAE進出を検討されていますか？",
      body: "貴社のビジネスゴールとタイムラインを共有いただければ、最適な進出プランとステップをご提案します。",
      button: "無料相談を予約する",
    },
    footer: {
      name: "UAE Business Consulting",
      location: "IFZA Business Park, Dubai Silicon Oasis, Dubai, United Arab Emirates",
      email: "contact@omogroup.com",
    },
  },
  en: {
    logo: "UAE Business Consulting",
    hero: {
      title: "Strategic UAE Market Entry",
      subtitleLine1: "End-to-end advisory for companies expanding into the UAE,",
      subtitleLine2: "from strategy and partnerships to execution on the ground.",
      primaryCta: "Book Consultation",
      secondaryCta: "View Services",
      simulatorCta: "Open Cost Simulator",
    },
    trusted: {
      title: "Trusted by",
      logos: ["DMCC", "Abu Dhabi Global Market", "UAE Free Zones", "International Partners"],
    },
    expertise: {
      title: "Our Expertise",
      subtitle: "Advisory spanning strategy, setup, and partnerships for the UAE.",
      cards: [
        {
          code: "ME",
          title: "Market Entry Strategy",
          body: "Structuring UAE market access, growth strategy, and competitive positioning.",
        },
        {
          code: "CS",
          title: "Corporate Setup",
          body: "Company formation, licensing, and regulatory advisory across UAE jurisdictions.",
        },
        {
          code: "SP",
          title: "Strategic Partnerships",
          body: "Connecting Japanese companies with trusted regional partners and investors.",
        },
      ],
    },
    why: {
      title: "Why UAE",
      subtitle: "A strategic base for regional and global growth.",
      cards: [
        {
          title: "Global financial hub",
          body: "Home to leading financial institutions and investors, with deep access to capital.",
        },
        {
          title: "Gateway to Middle East markets",
          body: "A stable, globally connected hub for serving GCC and wider MENA markets.",
        },
        {
          title: "Tax-efficient business environment",
          body: "Free zones and special regimes offering zero or low corporate tax structures.",
        },
      ],
    },
    cases: {
      title: "Case Studies",
      subtitle: "Selected engagements with Japanese and global clients.",
      cards: [
        {
          tag: "Manufacturing",
          title: "Japanese Manufacturing Company – UAE Market Entry Strategy",
          body: "Designed a phased UAE market entry plan including free zone selection and local partner strategy.",
        },
        {
          tag: "Technology",
          title: "Technology Startup – Regional Expansion Support",
          body: "Supported licensing, HQ setup in Dubai, and commercial partnerships across the Gulf.",
        },
        {
          tag: "Trading",
          title: "Trading Company – Strategic Partnership Development",
          body: "Structured joint ventures with regional distributors and long-term offtake partners.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What does the initial consultation look like?",
          a: "We typically start with a 30–45 minute online discussion to understand your business, timing, and objectives. Based on that, we outline potential entry scenarios and clarify what information you would need internally.",
        },
        {
          q: "When is the right timing to speak with you?",
          a: "It is perfectly fine to speak with us while you are still exploring options. Engaging early helps you compare jurisdictions, anticipate regulatory points, and prepare internal decision-making.",
        },
        {
          q: "What types of companies do you usually work with?",
          a: "We primarily work with mid-sized and large Japanese and global companies in manufacturing, trading, and technology. If you are unsure whether your case fits, feel free to reach out and we can discuss it.",
        },
      ],
    },
    cta: {
      label: "Next step",
      heading: "Ready to expand into the UAE?",
      body: "Share your objectives and timelines, and we will prepare a focused perspective on how the UAE can support your regional strategy.",
      button: "Schedule Consultation",
    },
    footer: {
      name: "UAE Business Consulting",
      location: "IFZA Business Park, Dubai Silicon Oasis, Dubai, United Arab Emirates",
      email: "contact@omogroup.com",
    },
  },
} as const;

export default function Home() {
  const { lang, setLang } = useLang();
  const t = content[lang];
  const isJP = lang === "jp";

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header */}
      <header className="border-b border-[#f0ece5]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800">
              {t.logo}
            </div>
            <a
              href="/media"
              className="text-[11px] font-semibold tracking-[0.18em] text-slate-500 transition-colors hover:text-slate-800"
            >
              {lang === "jp" ? "登記企業のプロダクト" : "Client Products & Media"}
            </a>
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
        <section className="relative border-b border-[#f0ece5] overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/fuji.avif')",
              }}
            />
            <div className="absolute inset-0 bg-slate-900/30" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col justify-between px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28 min-h-[70vh] sm:min-h-[80vh]">
            <div className="max-w-xl text-white">
              <h1
                className="text-4xl font-light leading-[1.15] tracking-[0.08em] sm:text-5xl lg:text-6xl"
                style={
                  isJP
                    ? {
                        fontFamily:
                          '"Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", "Noto Serif JP", serif',
                      }
                    : undefined
                }
              >
                {isJP ? (
                  <>
                    届け世界へ
                    <br />
                    日本の誇り
                  </>
                ) : (
                  <>
                    Taking Japan&apos;s
                    <br />
                    excellence to the world
                  </>
                )}
              </h1>
              <p className="mt-8 text-sm leading-[2] text-slate-100/90 sm:text-base">
                {isJP ? (
                  <>
                    私たちOMO GROUPは、
                    <br />
                    日本が誇る伝統と品質を世界へ届けるために
                    <br />
                    誕生しました。
                  </>
                ) : (
                  <>
                    OMO GROUP exists to bring Japan&apos;s craftsmanship and
                    quality to customers around the world.
                    <br />
                    From brands rooted in tradition to new innovations, we
                    connect Japan and the global market.
                  </>
                )}
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="/simulator"
                className="inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
              >
                {t.hero.simulatorCta}
              </a>
              <div className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-xs font-medium tracking-[0.16em] text-slate-700 shadow-sm backdrop-blur">
                <span className="mr-3 text-slate-500">
                  {isJP ? "言語" : "Language"}
                </span>
                <select
                  value={lang}
                  onChange={(e) =>
                    setLang(e.target.value === "jp" ? "jp" : "en")
                  }
                  className="bg-transparent text-xs font-semibold tracking-[0.16em] text-slate-900 outline-none"
                >
                  <option value="jp">JA</option>
                  <option value="en">EN</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by */}
        <section className="border-b border-[#f0ece5]">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-14 sm:py-16 lg:py-20">
            <div className="flex flex-col gap-8">
              <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                {t.trusted.title}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14">
                {t.trusted.logos.map((name) => (
                  <div
                    key={name}
                    className="rounded-full border border-slate-100 bg-slate-50/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 transition-colors hover:border-[#c9a86c]/50 hover:text-slate-700"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section id="services" className="border-b border-[#f0ece5]">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {t.expertise.title}
              </p>
              <h2 className="mt-6 text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl">
                {t.expertise.subtitle}
              </h2>
            </div>
            <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-10">
              {t.expertise.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70"
                >
                  <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a86c]/10 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a86c]">
                    {card.code}
                  </div>
                  <h3 className="text-lg font-medium tracking-[-0.01em] text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why UAE */}
        <section className="border-b border-[#f0ece5]">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {t.why.title}
              </p>
              <h2 className="mt-6 text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl">
                {t.why.subtitle}
              </h2>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {t.why.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/70"
                >
                  <h3 className="text-sm font-semibold tracking-[0.08em] text-slate-900 uppercase">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="border-b border-[#f0ece5]">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {t.cases.title}
              </p>
              <h2 className="mt-6 text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl">
                {t.cases.subtitle}
              </h2>
            </div>
            <div className="mt-16 grid gap-10 lg:grid-cols-3">
              {t.cases.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl bg-white/90 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {card.tag}
                  </p>
                  <h3 className="mt-4 text-base font-semibold tracking-[-0.01em] text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-[#f0ece5] bg-slate-50/40">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {t.faq.title}
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {t.faq.items.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl bg-white/90 p-6 sm:p-7 shadow-[0_18px_45px_rgba(15,23,42,0.04)] ring-1 ring-slate-100/70 text-left"
                >
                  <h3 className="text-sm font-semibold tracking-[-0.01em] text-slate-900">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.9] text-slate-600">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 py-24 sm:py-32 lg:py-40">
            <div className="flex flex-col items-center text-center gap-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {t.cta.label}
              </p>
              <h2 className="max-w-3xl text-3xl font-light tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-5xl">
                {t.cta.heading}
              </h2>
              <p className="max-w-2xl text-base leading-[1.9] text-slate-600 sm:text-lg">
                {t.cta.body}
              </p>
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-12 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
              >
                {t.cta.button}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
