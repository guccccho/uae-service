"use client";

import React from "react";
import { LangSwitch } from "./components/LangSwitch";
import { pickLang } from "./i18n";
import { useLang } from "./lang-context";
import { mediaItems } from "./media/data";
import { TRUSTED_PARTNERS } from "./trusted-partners";
import { GovernmentPortalsSection } from "./components/GovernmentPortalsSection";
import { MediaCardPreview } from "./components/MediaCardPreview";

const content = {
  jp: {
    logo: "HINODEYA",
    logoSub: "UAE Business Consulting",
    hero: {
      title: "UAE進出を、戦略から実行まで",
      subtitleLine1: "法人進出から個人の移住・投資まで、",
      subtitleLine2: "決済・不動産・ビザまで、日本からUAEへの道のりをトータルで支援します。",
      primaryCta: "相談を予約する",
      secondaryCta: "サービスを見る",
      simulatorCta: "コストシミュレーターを見る",
    },
    trusted: {
      title: "提携パートナー / 実績",
    },
    expertise: {
      title: "サービス内容",
      subtitle: "法人の進出支援から、個人の決済・不動産・移住まで、UAEでのビジネスと生活を一括サポートします。",
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
    individual: {
      eyebrow: "個人のお客様へ",
      title: "法人だけでなく、個人のUAE生活・投資もサポート",
      subtitle:
        "B2Bの企業支援に加え、決済ソリューション、不動産購入、ゴールデンビザ・移住など、個人のお客様のご相談にも対応しています。",
      cards: [
        {
          code: "PY",
          title: "決済・金融ソリューション",
          body: "UAE口座開設、国際送金、決済インフラの選定など、個人・事業の資金管理をサポートします。",
        },
        {
          code: "RE",
          title: "不動産購入・投資",
          body: "ドバイ・ラスアルハイマでの住宅購入、賃貸、投資物件の選定から契約・登記まで伴走します。",
        },
        {
          code: "LV",
          title: "移住・ビザ・生活設計",
          body: "ゴールデンビザ、居住ビザ、学校・医療・生活インフラまで、UAEでの新しい生活の立ち上げを支援します。",
        },
      ],
      cta: "個人向けのご相談はこちら",
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
        {
          q: "個人でも相談できますか？",
          a: "はい。法人設立やB2Bの商業展開に加え、決済ソリューション、不動産購入、ゴールデンビザ・移住といった個人向けのご相談にも対応しております。お一人でのご検討から、ご家族での移住まで柔軟にサポートします。",
        },
      ],
    },
    cta: {
      label: "コンサルティングのご相談",
      heading: "UAEでのビジネスや生活を検討されていますか？",
      body: "法人進出・個人の移住・不動産投資など、ご状況とゴールを共有いただければ、最適なプランとステップをご提案します。",
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
      subtitleLine1: "From corporate expansion to personal relocation and investment,",
      subtitleLine2: "we support your journey to the UAE — payments, property, visas, and more.",
      primaryCta: "Book Consultation",
      secondaryCta: "View Services",
      simulatorCta: "Open Cost Simulator",
    },
    trusted: {
      title: "Trusted by",
    },
    expertise: {
      title: "Our Expertise",
      subtitle: "From corporate market entry to personal payments, property, and relocation — we support business and life in the UAE.",
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
    individual: {
      eyebrow: "For Individuals",
      title: "Beyond B2B — personal UAE support too",
      subtitle:
        "Alongside corporate advisory, we help individuals with payment solutions, property purchase, Golden Visa, and relocation planning.",
      cards: [
        {
          code: "PY",
          title: "Payments & Financial Solutions",
          body: "UAE bank account opening, cross-border transfers, and payment infrastructure for personal and business use.",
        },
        {
          code: "RE",
          title: "Property Purchase & Investment",
          body: "Residential and investment property in Dubai and Ras Al Khaimah — from shortlisting to contract and registration.",
        },
        {
          code: "LV",
          title: "Relocation, Visa & Lifestyle",
          body: "Golden Visa, residence permits, schools, healthcare, and daily infrastructure for your new life in the UAE.",
        },
      ],
      cta: "Consult for personal support",
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
        {
          q: "Can individuals consult with you as well?",
          a: "Yes. In addition to company setup and B2B commercial expansion, we support individuals with payment solutions, property purchase, Golden Visa, and relocation — whether you are exploring alone or moving with your family.",
        },
      ],
    },
    cta: {
      label: "Next step",
      heading: "Exploring business or life in the UAE?",
      body: "Share your goals — corporate expansion, personal relocation, or property investment — and we will outline the right plan and steps.",
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
      subtitleLine1: "من توسع الشركات إلى الانتقال والاستثمار الشخصي،",
      subtitleLine2: "ندعم رحلتكم إلى الإمارات — المدفوعات والعقارات والتأشيرات وأكثر.",
      primaryCta: "حجز استشارة",
      secondaryCta: "عرض الخدمات",
      simulatorCta: "فتح محاكي التكاليف",
    },
    trusted: {
      title: "شركاؤنا وثقة عملائنا",
    },
    expertise: {
      title: "خبراتنا",
      subtitle: "من دخول الشركات إلى المدفوعات الشخصية والعقارات وإعادة التوطين — ندعم الأعمال والحياة في الإمارات.",
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
    individual: {
      eyebrow: "للأفراد",
      title: "ليس للشركات فقط — دعم شخصي في الإمارات أيضاً",
      subtitle:
        "إلى جانب استشارات الشركات، نساعد الأفراد في حلول الدفع وشراء العقارات والتأشيرة الذهبية وخطط إعادة التوطين.",
      cards: [
        {
          code: "PY",
          title: "حلول الدفع والخدمات المالية",
          body: "فتح حسابات مصرفية في الإمارات والتحويلات الدولية وبنية المدفوعات للاستخدام الشخصي والتجاري.",
        },
        {
          code: "RE",
          title: "شراء العقارات والاستثمار",
          body: "عقارات سكنية واستثمارية في دبي ورأس الخيمة — من الاختيار إلى العقد والتسجيل.",
        },
        {
          code: "LV",
          title: "إعادة التوطين والتأشيرة ونمط الحياة",
          body: "التأشيرة الذهبية وتصاريح الإقامة والمدارس والرعاية الصحية والبنية التحتية لحياتكم الجديدة في الإمارات.",
        },
      ],
      cta: "استشارة للأفراد",
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
        {
          q: "هل يمكن للأفراد الاستشارة أيضاً؟",
          a: "نعم. إلى جانب تأسيس الشركات والتوسع التجاري B2B، ندعم الأفراد في حلول الدفع وشراء العقارات والتأشيرة الذهبية وإعادة التوطين — سواء كنتم تستكشفون بمفردكم أو تنتقلون مع عائلاتكم.",
        },
      ],
    },
    cta: {
      label: "الخطوة التالية",
      heading: "هل تفكرون في الأعمال أو الحياة في الإمارات؟",
      body: "شاركونا أهدافكم — توسع الشركات أو الانتقال الشخصي أو الاستثمار العقاري — وسنحدد الخطة والخطوات المناسبة.",
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
    homepageUrl: item.homepageUrl,
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

        {/* Individual support */}
        <section className="border-b border-[#f0ece5] bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {t.individual.eyebrow}
              </p>
              <h2 className="mt-6 text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl">
                {t.individual.title}
              </h2>
              <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
                {t.individual.subtitle}
              </p>
            </div>
            <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-10">
              {t.individual.cards.map((card) => (
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
            <div className="mt-12 flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
              >
                {t.individual.cta}
              </a>
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
                    ? "相談企業のプロダクト"
                    : isAr
                      ? "منتجات الشركات المستشارة"
                      : "Consulting Clients' Products"}
                </p>
                <h2 className="mt-6 text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl">
                  {isJP
                    ? "チームHINODEYAがつなぐ、ビジネスマッチング"
                    : isAr
                      ? "مطابقة الأعمال عبر فريق HINODEYA"
                      : "Business Matching through Team HINODEYA"}
                </h2>
                <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
                  {isJP
                    ? "ご相談いただいた企業をチームHINODEYAとしてまとめ、それぞれのプロダクトと強みが活きるビジネスマッチングの機会を創出します。UAE進出企業同士、そして現地パートナーとの接点づくりをサポートします。"
                    : isAr
                      ? "نجمع الشركات التي استشارتنا تحت فريق HINODEYA، ونخلق فرص مطابقة أعمال عالية القيمة تبرز فيها منتجات ونقاط قوة كل شركة. ندعم التواصل بين الداخلين إلى الإمارات ومع الشركاء المحليين."
                      : "We bring together companies that have consulted with us as Team HINODEYA, creating high-value business matching opportunities where each product and strength can shine. We support connections among UAE entrants and with local partners."}
                </p>
              </div>

              <div className="mx-auto mt-10 max-w-3xl">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-10 text-center shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:px-12 sm:py-12">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c9a86c]">
                    {isJP
                      ? "Team HINODEYA"
                      : isAr
                        ? "فريق HINODEYA"
                        : "Team HINODEYA"}
                  </p>
                  <p className="mt-4 text-base leading-[1.9] text-slate-200 sm:text-lg">
                    {isJP
                      ? "あなたのビジネスも、チームHINODEYAの一員として新たなパートナーと出会えます。"
                      : isAr
                        ? "يمكن لأعمالك أيضاً أن تلتقي بشركاء جدد كعضو في فريق HINODEYA."
                        : "Your business can also meet new partners as a member of Team HINODEYA."}
                  </p>
                  <a
                    href="/contact"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-12 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(201,168,108,0.35)] transition-all hover:bg-[#d4b87a] hover:shadow-[0_22px_55px_rgba(201,168,108,0.45)]"
                  >
                    {isJP
                      ? "チームHINODEYAでビジネスマッチングに参加する"
                      : isAr
                        ? "انضم إلى فريق HINODEYA للمطابقة"
                        : "Join Team HINODEYA for Business Matching"}
                  </a>
                </div>
              </div>

              <div className="mt-14 grid gap-10 lg:grid-cols-3">
                {mediaTeasers.map((item) => (
                  <a
                    key={item.slug}
                    href={`/media/${item.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70 transition-transform hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
                  >
                    <MediaCardPreview
                      imageUrl={item.imageUrl}
                      homepageUrl={item.homepageUrl}
                      alt={item.titleLabel}
                    />
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

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/media"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                >
                  {isJP
                    ? "相談企業のプロダクトを見る"
                    : isAr
                      ? "استكشف منتجات الشركات المستشارة"
                      : "Explore Consulting Clients' Products"}
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
