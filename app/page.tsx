"use client";

import React from "react";
import { LangSwitch } from "./components/LangSwitch";
import { pickLang } from "./i18n";
import { useLang } from "./lang-context";
import { mediaItems } from "./media/data";
import { TRUSTED_PARTNERS } from "./trusted-partners";
import { GovernmentPortalsSection } from "./components/GovernmentPortalsSection";

const content = {
  jp: {
    logo: "HINODEYA",
    logoSub: "UAE Business Consulting",
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
    },
    expertise: {
      title: "サービス内容",
      subtitle: "UAEでの設立・移住・不動産・事業展開を一括サポートします。",
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
          a: "ひとり社長から中堅、大企業まで様々な業種に対応しております。",
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
      email: "contact@hinodeya.ae",
    },
  },
  en: {
    logo: "HINODEYA",
    logoSub: "UAE Business Consulting",
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
          a: "We support a wide range of industries — from sole founders and owner-managers to mid-sized and large enterprises.",
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
      email: "contact@hinodeya.ae",
    },
  },
  ar: {
    logo: "HINODEYA",
    logoSub: "استشارات الأعمال في الإمارات",
    hero: {
      title: "دخول استراتيجي إلى سوق الإمارات",
      subtitleLine1: "استشارات شاملة للشركات الراغبة في التوسع في الإمارات،",
      subtitleLine2: "من الاستراتيجية والشراكات إلى التنفيذ على أرض الواقع.",
      primaryCta: "حجز استشارة",
      secondaryCta: "عرض الخدمات",
      simulatorCta: "فتح محاكي التكاليف",
    },
    trusted: {
      title: "شركاؤنا وثقة عملائنا",
    },
    expertise: {
      title: "خبراتنا",
      subtitle: "استشارات متكاملة تشمل الاستراتيجية والتأسيس والشراكات في الإمارات.",
      cards: [
        {
          code: "ME",
          title: "استراتيجية دخول السوق",
          body: "تصميم الوصول إلى سوق الإمارات، واستراتيجيات النمو، والتموضع التنافسي.",
        },
        {
          code: "CS",
          title: "تأسيس الشركات",
          body: "تأسيس الشركات والتراخيص والاستشارات التنظيمية عبر مختلف الولايات القضائية في الإمارات.",
        },
        {
          code: "SP",
          title: "الشراكات الاستراتيجية",
          body: "ربط الشركات اليابانية بشركاء ومستثمرين إقليميين موثوقين.",
        },
      ],
    },
    why: {
      title: "لماذا الإمارات",
      subtitle: "قاعدة استراتيجية للنمو الإقليمي والعالمي.",
      cards: [
        {
          title: "مركز مالي عالمي",
          body: "موطن للمؤسسات المالية والمستثمرين الرائدين، مع وصول واسع إلى رأس المال.",
        },
        {
          title: "بوابة لأسواق الشرق الأوسط",
          body: "مركز مستقر ومتصل عالمياً لخدمة أسواق دول مجلس التعاون الخليجي ومنطقة الشرق الأوسط وشمال أفريقيا.",
        },
        {
          title: "بيئة أعمال مواتية ضريبياً",
          body: "مناطق حرة وأنظمة خاصة توفر هياكل ضريبية صفرية أو منخفضة على الشركات.",
        },
      ],
    },
    cases: {
      title: "دراسات حالة",
      subtitle: "مشاريع مختارة مع عملاء يابانيين وعالميين.",
      cards: [
        {
          tag: "التصنيع",
          title: "شركة تصنيع يابانية – استراتيجية دخول سوق الإمارات",
          body: "تصميم خطة مرحلية لدخول سوق الإمارات تشمل اختيار المنطقة الحرة واستراتيجية الشريك المحلي.",
        },
        {
          tag: "التكنولوجيا",
          title: "شركة ناشئة تقنية – دعم التوسع الإقليمي",
          body: "دعم التراخيص وتأسيس المقر في دبي والشراكات التجارية عبر دول الخليج.",
        },
        {
          tag: "التجارة",
          title: "شركة تجارية – تطوير الشراكات الاستراتيجية",
          body: "هيكلة مشاريع مشتركة مع موزعين إقليميين وشركاء شراء طويل الأجل.",
        },
      ],
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          q: "كيف تبدو الاستشارة الأولية؟",
          a: "نبدأ عادةً بمناقشة عبر الإنترنت لمدة 30–45 دقيقة لفهم نشاطكم والجدول الزمني والأهداف. بناءً على ذلك، نحدد سيناريوهات الدخول المحتملة ونوضح المعلومات التي تحتاجونها داخلياً.",
        },
        {
          q: "ما الوقت المناسب للتواصل معكم؟",
          a: "لا بأس بالتواصل معنا أثناء استكشاف الخيارات. التواصل المبكر يساعدكم على مقارنة الولايات القضائية وتوقع النقاط التنظيمية وإعداد القرارات الداخلية.",
        },
        {
          q: "ما أنواع الشركات التي تعملون معها عادةً؟",
          a: "ندعم مجموعة واسعة من القطاعات — من المؤسسين الفرديين ومديري الشركات إلى الشركات المتوسطة والكبيرة.",
        },
      ],
    },
    cta: {
      label: "الخطوة التالية",
      heading: "هل أنتم مستعدون للتوسع في الإمارات؟",
      body: "شاركونا أهدافكم والجدول الزمني، وسنقدّم رؤية مركّزة حول كيف يمكن للإمارات دعم استراتيجيتكم الإقليمية.",
      button: "جدولة استشارة",
    },
    footer: {
      name: "UAE Business Consulting",
      location: "IFZA Business Park, Dubai Silicon Oasis, Dubai, United Arab Emirates",
      email: "contact@hinodeya.ae",
    },
  },
} as const;

export default function Home() {
  const { lang, setLang } = useLang();
  const t = content[lang];
  const isJP = lang === "jp";
  const isAr = lang === "ar";
  const mediaTeasers = mediaItems.slice(0, 3).map((item) => ({
    slug: item.slug,
    sectorLabel: pickLang(item.sector, lang),
    titleLabel: pickLang(item.title, lang),
    summaryLabel: pickLang(item.summary, lang),
    imageUrl: item.imageUrl,
  }));

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header */}
      <header className="border-b border-[#f0ece5]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="leading-none">
              <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-900">
                {t.logo}
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-400">
                {t.logoSub}
              </div>
            </div>
          </div>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative border-b border-[#f0ece5] overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/fuji-hero-topdown.png')",
                backgroundPosition: "center center",
                filter: "saturate(1.08) contrast(1.06) brightness(0.92)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/35 via-slate-900/25 to-slate-900/45" />
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
                    : isAr
                      ? {
                          fontFamily:
                            '"Noto Naskh Arabic", "Geeza Pro", "Traditional Arabic", serif',
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
                ) : isAr ? (
                  <>
                    نُوصِل تميّز اليابان
                    <br />
                    إلى العالم
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
                    私たちHINODEYAは、
                    <br />
                    日本が誇る伝統と品質を世界へ届けるために
                    <br />
                    誕生しました。
                  </>
                ) : isAr ? (
                  <>
                    وُلدت HINODEYA لتقديم الحرفية والجودة اليابانية إلى
                    العملاء حول العالم.
                    <br />
                    من العلامات التجارية الراسخة في التقاليد إلى الابتكارات
                    الجديدة، نربط اليابان والسوق العالمي.
                  </>
                ) : (
                  <>
                    HINODEYA exists to bring Japan&apos;s craftsmanship and
                    quality to customers around the world.
                    <br />
                    From brands rooted in tradition to new innovations, we
                    connect Japan and the global market.
                  </>
                )}
              </p>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-xs font-medium tracking-[0.16em] text-slate-700 shadow-sm backdrop-blur">
                <span className="mr-3 text-slate-500">
                  {isJP ? "言語" : isAr ? "اللغة" : "Language"}
                </span>
                <select
                  value={lang}
                  onChange={(e) => {
                    const next = e.target.value;
                    if (next === "jp" || next === "en" || next === "ar") {
                      setLang(next);
                    }
                  }}
                  className="bg-transparent text-xs font-semibold tracking-[0.16em] text-slate-900 outline-none"
                >
                  <option value="jp">JA</option>
                  <option value="en">EN</option>
                  <option value="ar">AR</option>
                </select>
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

        {/* Simulator teaser */}
        <section className="border-b border-[#f0ece5] bg-slate-50/40">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:text-left lg:px-12">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {isJP ? "コストの目安" : isAr ? "تقدير التكاليف" : "Cost Baseline"}
              </p>
              <p className="mt-3 text-sm leading-[1.9] text-slate-600 sm:text-base">
                {isJP
                  ? "具体的なご相談の前に、フリーゾーンや法人形態ごとの設立コスト感を知りたい方向けの簡易シミュレーターです。あくまで概算の目安としてご活用ください。"
                  : isAr
                    ? "إذا رغبتم في الحصول على فكرة تقريبية عن تكاليف التأسيس عبر المناطق الحرة وأنواع الكيانات قبل التواصل معنا، يمكنكم استخدام محاكينا البسيط كمرجع أولي."
                    : "If you would like a rough sense of setup costs across different free zones and entity types before speaking with us, you can use our simple simulator as an initial benchmark."}
              </p>
            </div>
            <a
              href="/simulator"
              className="inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
            >
              {t.hero.simulatorCta}
            </a>
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
            <div className="mt-20">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                  {isJP
                    ? "支援先プロダクト"
                    : isAr
                      ? "المنتجات المدعومة"
                      : "Supported Products"}
                </p>
                <h2 className="mt-6 text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl">
                  {isJP
                    ? "UAE展開を支援したプロダクト・サービス"
                    : isAr
                      ? "منتجات وخدمات دعمنا توسعها في الإمارات"
                      : "Products and services we supported for UAE expansion"}
                </h2>
                <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
                  {isJP
                    ? "支援先企業がUAEを拠点に展開する代表的なプロダクトをご紹介します。将来的には各詳細ページからECや販売代理店向けの導線へ広げられる構成を想定しています。"
                    : isAr
                      ? "مجموعة مختارة من المنتجات التي أطلقتها شركات دعمناها في الإمارات. صُمّم الهيكل بحيث يمكن لكل صفحة تفصيلية لاحقاً الربط بوجهات التجارة الإلكترونية أو الموزعين."
                      : "A selection of products launched by companies we supported in the UAE. The structure is designed so each detail page can later connect to e-commerce or distributor-facing destinations."}
                </p>
              </div>

              <div className="mt-14 grid gap-10 lg:grid-cols-3">
                {mediaTeasers.map((item) => (
                  <a
                    key={item.slug}
                    href={`/media/${item.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70 transition-transform hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
                  >
                    <div className="relative h-40 w-full overflow-hidden bg-slate-100 sm:h-44">
                      <div
                        className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {item.sectorLabel}
                      </p>
                      <h3 className="mt-3 text-base font-semibold tracking-[-0.01em] text-slate-900">
                        {item.titleLabel}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-[1.8] text-slate-600">
                        {item.summaryLabel}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <a
                  href="/media"
                  className="inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
                >
                  {isJP ? "もっと見る" : isAr ? "عرض المزيد" : "View more"}
                </a>
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
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                {TRUSTED_PARTNERS.map((partner) => (
                  <a
                    key={partner.id}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-14 min-w-[170px] items-center justify-center rounded-full border border-slate-100 bg-slate-50/80 px-5 py-3 transition-colors hover:border-[#c9a86c]/50 hover:bg-white sm:min-w-[190px] sm:px-6"
                    aria-label={partner.name}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={partner.logoClassName}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <GovernmentPortalsSection lang={lang} />

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
                  <h3 className="flex gap-1.5 text-sm font-semibold tracking-[-0.01em] text-slate-900">
                    <span className="shrink-0 text-[#c9a86c]">Q.</span>
                    <span>{item.q}</span>
                  </h3>
                  <p className="mt-3 flex gap-1.5 text-sm leading-[1.9] text-slate-600">
                    <span className="shrink-0 font-semibold text-[#c9a86c]">A.</span>
                    <span>{item.a}</span>
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
                href="mailto:contact@hinodeya.ae"
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
