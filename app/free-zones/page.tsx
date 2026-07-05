"use client";

import React from "react";
import { useLang } from "../lang-context";
import { LangSwitch } from "../components/LangSwitch";
import { contactMailto } from "../lib/contact-email";
import type { Lang } from "../i18n";

type TableRow = {
  name: string;
  prestige: string;
  cost: string;
  flex: string;
  biz: string;
  highlight?: boolean;
};

const content: Record<
  Lang,
  {
    title: string;
    description: string;
    ctaSimulator: string;
    ctaConsult: string;
    tableEyebrow: string;
    tableIntro: string;
    tableHeaders: { zone: string; prestige: string; cost: string; flex: string; biz: string };
    tableRows: TableRow[];
    dmccTitle: string;
    dmccBody: string;
    dmccBullets: string[];
    dmccBestForLabel: string;
    dmccBestFor: string;
    rakezTitle: string;
    rakezBody: string;
    rakezBullets: string[];
    rakezBestForLabel: string;
    rakezBestFor: string;
    recommendEyebrow: string;
    recommendTitle: string;
    recommendBody1: string;
    recommendBody2: string;
    ctaEyebrow: string;
    ctaBody: string;
  }
> = {
  jp: {
    title: "UAEフリーゾーン比較",
    description:
      "UAE進出ではフリーゾーンの選択が重要です。DMCCやRAKEZを中心に主要フリーゾーンを比較します。",
    ctaSimulator: "コストシミュレーター",
    ctaConsult: "無料相談",
    tableEyebrow: "主要フリーゾーン比較",
    tableIntro:
      "DMCCとRAKEZを中心に、その他の代表的なフリーゾーンとの違いを俯瞰します。",
    tableHeaders: {
      zone: "フリーゾーン",
      prestige: "ブランド性",
      cost: "コスト効率",
      flex: "柔軟性",
      biz: "主なビジネスタイプ",
    },
    tableRows: [
      {
        name: "DMCC",
        prestige: "★★★★★",
        cost: "★★☆☆☆",
        flex: "★★★★☆",
        biz: "コンサルティング、投資、国際取引",
        highlight: true,
      },
      {
        name: "RAKEZ",
        prestige: "★★★☆☆",
        cost: "★★★★★",
        flex: "★★★☆☆",
        biz: "トレーディング、スタートアップ、製造",
        highlight: true,
      },
      {
        name: "IFZA",
        prestige: "★★★☆☆",
        cost: "★★★★★",
        flex: "★★★★☆",
        biz: "中小企業、リモート設立",
      },
      {
        name: "Meydan",
        prestige: "★★★☆☆",
        cost: "★★★★☆",
        flex: "★★★★☆",
        biz: "小規模サービス業",
      },
      {
        name: "SPC",
        prestige: "★★★☆☆",
        cost: "★★★★★",
        flex: "★★★☆☆",
        biz: "ホールディング、IP管理",
      },
    ],
    dmccTitle: "ブランド性と国際的な信用を重視する企業向け",
    dmccBody:
      "DMCCはドバイを代表するフリーゾーンの一つであり、国際的な知名度とブランド力を持つハブです。サービス業・コンサルティング・投資・国際取引など、「対外的な印象」や「信頼性」が重要なビジネスに適しています。",
    dmccBullets: [
      "・強い国際的レピュテーションとブランド力",
      "・プレミアムポジショニングと洗練されたビジネス環境",
      "・グローバル企業・金融機関とのネットワーク",
      "・コンサルティング、投資、国際トレードに特に適した選択肢",
    ],
    dmccBestForLabel: "こんな企業におすすめ",
    dmccBestFor:
      "海外投資家・金融機関・上場企業との取引が多く、「どこで登記しているか」が信頼性に直結するビジネス。",
    rakezTitle: "コスト効率と実務性を重視する企業向け",
    rakezBody:
      "RAKEZは比較的リーズナブルなコストと柔軟な施設オプションを備えたフリーゾーンで、トレーディング、スタートアップ、製造・ライトインダストリーなど、実務性とコストバランスを重視するビジネスに向いています。",
    rakezBullets: [
      "・初期費用・維持コストを抑えやすい価格帯",
      "・倉庫・工場・オフィスなど柔軟な施設タイプ",
      "・トレーディング、スタートアップ、製造・加工ビジネスとの相性が良い",
      "・「まずはリーンに始めたい」企業に適した実務的な環境",
    ],
    rakezBestForLabel: "こんな企業におすすめ",
    rakezBestFor:
      "コスト効率と現場オペレーションのしやすさを優先しつつ、UAEに実務拠点を持ちたい企業。",
    recommendEyebrow: "どのフリーゾーンを選ぶべきか？",
    recommendTitle: "ブランド重視か、コスト効率重視かで最適解が変わります。",
    recommendBody1:
      "ブランド性・対外的信頼性・国際的な印象を重視する場合はDMCC、コスト効率・実務性・リーンな立ち上げを重視する場合はRAKEZが有力な選択肢となります。",
    recommendBody2:
      "その他のフリーゾーン（IFZA、Meydan、SPCなど）も、事業規模や目的によって有力な選択肢となり得ます。貴社の条件に合わせて、複数案を並べて検討することをおすすめします。",
    ctaEyebrow: "次のステップ",
    ctaBody:
      "シミュレーターでおおよそのコスト感を掴んだ上で、具体的な事業内容や優先事項を踏まえた無料相談に進んでいただく流れがおすすめです。",
  },
  en: {
    title: "UAE Free Zone Comparison",
    description:
      "Choosing the right free zone is critical for entering the UAE. This page compares key jurisdictions, with a focus on DMCC and RAKEZ.",
    ctaSimulator: "Cost Simulator",
    ctaConsult: "Book Consultation",
    tableEyebrow: "Key Free Zone Comparison",
    tableIntro:
      "A snapshot comparison of DMCC and RAKEZ alongside other representative free zones.",
    tableHeaders: {
      zone: "Free Zone",
      prestige: "Brand Prestige",
      cost: "Cost Efficiency",
      flex: "Flexibility",
      biz: "Typical Business Type",
    },
    tableRows: [
      {
        name: "DMCC",
        prestige: "★★★★★",
        cost: "★★☆☆☆",
        flex: "★★★★☆",
        biz: "Consulting, investment, international trade",
        highlight: true,
      },
      {
        name: "RAKEZ",
        prestige: "★★★☆☆",
        cost: "★★★★★",
        flex: "★★★☆☆",
        biz: "Trading, startups, manufacturing",
        highlight: true,
      },
      {
        name: "IFZA",
        prestige: "★★★☆☆",
        cost: "★★★★★",
        flex: "★★★★☆",
        biz: "SMEs, remote‑friendly setups",
      },
      {
        name: "Meydan",
        prestige: "★★★☆☆",
        cost: "★★★★☆",
        flex: "★★★★☆",
        biz: "Smaller service businesses",
      },
      {
        name: "SPC",
        prestige: "★★★☆☆",
        cost: "★★★★★",
        flex: "★★★☆☆",
        biz: "Holding, IP management",
      },
    ],
    dmccTitle: "For prestige‑focused, internationally oriented companies",
    dmccBody:
      "DMCC is one of Dubai's flagship free zones with strong international recognition and brand value. It suits service businesses, consulting, investment, and international trade where external perception and credibility matter.",
    dmccBullets: [
      "• Strong international reputation and brand presence",
      "• Premium positioning and a sophisticated business environment",
      "• Extensive network of global companies and financial institutions",
      "• Especially suitable for consulting, investment, and international trading platforms",
    ],
    dmccBestForLabel: "Best suited for",
    dmccBestFor:
      "Businesses dealing frequently with international investors, financial institutions, or listed companies, where the place of incorporation directly influences perceived credibility.",
    rakezTitle: "For cost‑efficient, practical setups",
    rakezBody:
      "RAKEZ offers comparatively economical cost structures and flexible facility options. It is well‑suited for trading, startups, and manufacturing or light industry where practicality and cost control are key.",
    rakezBullets: [
      "• Competitive initial and ongoing cost levels",
      "• Flexible facilities including warehouses, industrial units, and offices",
      "• Strong fit for trading, startups, and manufacturing or processing businesses",
      "• Practical environment for companies that want to start lean while keeping options open",
    ],
    rakezBestForLabel: "Best suited for",
    rakezBestFor:
      "Companies prioritizing cost efficiency and operational practicality, while still securing a functional base in the UAE.",
    recommendEyebrow: "Which Free Zone Should You Choose?",
    recommendTitle:
      "The right answer depends on whether you prioritize brand or cost efficiency.",
    recommendBody1:
      "If you emphasize brand prestige, external credibility, and international perception, DMCC is often the better fit. If you emphasize cost efficiency, practicality, and a lean setup, RAKEZ is typically more suitable.",
    recommendBody2:
      "Other free zones such as IFZA, Meydan, and SPC can also be compelling depending on your scale and objectives. We recommend reviewing a few shortlisted options side by side against your actual use cases.",
    ctaEyebrow: "Next Step",
    ctaBody:
      "We recommend first using the simulator to understand rough cost levels, then moving to a consultation to align on your business details and priorities.",
  },
  ar: {
    title: "مقارنة المناطق الحرة في الإمارات",
    description:
      "اختيار المنطقة الحرة المناسبة أمر حاسم لدخول سوق الإمارات. تقارن هذه الصفحة الولايات القضائية الرئيسية مع التركيز على DMCC وRAKEZ.",
    ctaSimulator: "محاكي التكاليف",
    ctaConsult: "حجز استشارة",
    tableEyebrow: "مقارنة المناطق الحرة الرئيسية",
    tableIntro:
      "نظرة مقارنة سريعة لـ DMCC وRAKEZ إلى جانب مناطق حرة تمثيلية أخرى.",
    tableHeaders: {
      zone: "المنطقة الحرة",
      prestige: "المكانة التجارية",
      cost: "كفاءة التكلفة",
      flex: "المرونة",
      biz: "نوع النشاط النموذجي",
    },
    tableRows: [
      {
        name: "DMCC",
        prestige: "★★★★★",
        cost: "★★☆☆☆",
        flex: "★★★★☆",
        biz: "الاستشارات والاستثمار والتجارة الدولية",
        highlight: true,
      },
      {
        name: "RAKEZ",
        prestige: "★★★☆☆",
        cost: "★★★★★",
        flex: "★★★☆☆",
        biz: "التجارة والشركات الناشئة والتصنيع",
        highlight: true,
      },
      {
        name: "IFZA",
        prestige: "★★★☆☆",
        cost: "★★★★★",
        flex: "★★★★☆",
        biz: "الشركات الصغيرة والمتوسطة، التأسيس عن بُعد",
      },
      {
        name: "Meydan",
        prestige: "★★★☆☆",
        cost: "★★★★☆",
        flex: "★★★★☆",
        biz: "خدمات الأعمال الصغيرة",
      },
      {
        name: "SPC",
        prestige: "★★★☆☆",
        cost: "★★★★★",
        flex: "★★★☆☆",
        biz: "الشركات القابضة وإدارة الملكية الفكرية",
      },
    ],
    dmccTitle: "للشركات التي تركز على المكانة والتوجه الدولي",
    dmccBody:
      "تُعد DMCC إحدى المناطق الحرة الرائدة في دبي باعتراف دولي وقيمة تجارية قوية. تناسب أعمال الخدمات والاستشارات والاستثمار والتجارة الدولية حيث تكون الانطباع الخارجي والمصداقية مهمة.",
    dmccBullets: [
      "• سمعة دولية قوية وحضور تجاري متميز",
      "• تموضع متميز وبيئة أعمال متطورة",
      "• شبكة واسعة من الشركات العالمية والمؤسسات المالية",
      "• خيار مناسب بشكل خاص للاستشارات والاستثمار والتجارة الدولية",
    ],
    dmccBestForLabel: "الأنسب لـ",
    dmccBestFor:
      "الأعمال التي تتعامل بكثافة مع مستثمرين دوليين أو مؤسسات مالية أو شركات مدرجة، حيث يؤثر مكان التأسيس مباشرة على المصداقية المتصورة.",
    rakezTitle: "للتأسيس العملي بكفاءة تكلفة",
    rakezBody:
      "تقدم RAKEZ هياكل تكلفة اقتصادية نسبياً وخيارات مرافق مرنة. مناسبة جداً للتجارة والشركات الناشئة والتصنيع أو الصناعة الخفيفة حيث تكون العملية وضبط التكاليف أولوية.",
    rakezBullets: [
      "• مستويات تكلفة أولية وتشغيلية تنافسية",
      "• مرافق مرنة تشمل المستودعات والوحدات الصناعية والمكاتب",
      "• توافق قوي مع التجارة والشركات الناشئة وأعمال التصنيع والمعالجة",
      "• بيئة عملية للشركات التي تريد البدء بشكل مرن مع إبقاء الخيارات مفتوحة",
    ],
    rakezBestForLabel: "الأنسب لـ",
    rakezBestFor:
      "الشركات التي تولي أولوية لكفاءة التكلفة والعملية التشغيلية مع تأمين قاعدة عملية في الإمارات.",
    recommendEyebrow: "أي منطقة حرة يجب اختيارها؟",
    recommendTitle:
      "الإجابة الصحيحة تعتمد على ما إذا كنتم تولون أولوية للمكانة أو كفاءة التكلفة.",
    recommendBody1:
      "إذا ركزتم على المكانة التجارية والمصداقية الخارجية والانطباع الدولي، فغالباً ما تكون DMCC الخيار الأفضل. وإذا ركزتم على كفاءة التكلفة والعملية والتأسيس المرن، فعادة ما تكون RAKEZ أكثر ملاءمة.",
    recommendBody2:
      "قد تكون مناطق حرة أخرى مثل IFZA وMeydan وSPC جذابة أيضاً حسب حجمكم وأهدافكم. نوصي بمراجعة عدة خيارات مختصرة جنباً إلى جنب مقابل حالات الاستخدام الفعلية.",
    ctaEyebrow: "الخطوة التالية",
    ctaBody:
      "نوصي أولاً باستخدام المحاكي لفهم مستويات التكلفة التقريبية، ثم الانتقال إلى استشارة للتوافق على تفاصيل نشاطكم وأولوياتكم.",
  },
};

export default function FreeZonesPage() {
  const { lang, setLang } = useLang();
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="border-b border-[#f0e4e6]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800">
            UAE Business Consulting
          </div>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </header>

      <main>
        <section className="border-b border-[#f0e4e6] bg-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-light tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-6xl">
                {t.title}
              </h1>
              <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
                {t.description}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#f0e4e6] bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                {t.tableEyebrow}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.tableIntro}
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/80">
              <div className="min-w-full divide-y divide-slate-100 text-sm">
                <div className="grid grid-cols-5 bg-slate-50/60 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:px-6">
                  <div>{t.tableHeaders.zone}</div>
                  <div>{t.tableHeaders.prestige}</div>
                  <div>{t.tableHeaders.cost}</div>
                  <div>{t.tableHeaders.flex}</div>
                  <div>{t.tableHeaders.biz}</div>
                </div>

                {t.tableRows.map((row) => (
                  <div
                    key={row.name}
                    className={`grid grid-cols-5 items-center px-4 py-4 sm:px-6 ${
                      row.highlight ? "bg-[#fffdf7]" : "bg-white"
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

        <section className="border-b border-[#f0e4e6] bg-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-20 sm:py-24 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                  DMCC
                </p>
                <h2 className="mt-4 text-2xl font-light tracking-[-0.04em] text-slate-900 sm:text-3xl">
                  {t.dmccTitle}
                </h2>
                <p className="mt-5 text-sm leading-[1.9] text-slate-600 sm:text-base">
                  {t.dmccBody}
                </p>
                <ul className="mt-6 space-y-2 text-sm leading-relaxed text-slate-700">
                  {t.dmccBullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/80">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {t.dmccBestForLabel}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {t.dmccBestFor}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#f0e4e6] bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-20 sm:py-24 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                  RAKEZ
                </p>
                <h2 className="mt-4 text-2xl font-light tracking-[-0.04em] text-slate-900 sm:text-3xl">
                  {t.rakezTitle}
                </h2>
                <p className="mt-5 text-sm leading-[1.9] text-slate-600 sm:text-base">
                  {t.rakezBody}
                </p>
                <ul className="mt-6 space-y-2 text-sm leading-relaxed text-slate-700">
                  {t.rakezBullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/80">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {t.rakezBestForLabel}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {t.rakezBestFor}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#f0e4e6] bg-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                {t.recommendEyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-light tracking-[-0.04em] text-slate-900 sm:text-3xl">
                {t.recommendTitle}
              </h2>
              <p className="mt-5 text-sm leading-[1.9] text-slate-600 sm:text-base">
                {t.recommendBody1}
              </p>
              <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base">
                {t.recommendBody2}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="flex flex-col items-center text-center gap-6">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                {t.ctaEyebrow}
              </p>
              <p className="max-w-3xl text-base leading-[1.9] text-slate-600 sm:text-lg">
                {t.ctaBody}
              </p>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/simulator"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {t.ctaSimulator}
                </a>
                <a
                  href={contactMailto()}
                  className="inline-flex items-center justify-center rounded-full bg-brand px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-brand-hover"
                >
                  {t.ctaConsult}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
