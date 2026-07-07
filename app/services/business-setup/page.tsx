"use client";

import React from "react";
import { useLang } from "../../lang-context";
import { LangSwitch } from "../../components/LangSwitch";
import { contactMailto } from "../../lib/contact-email";
import type { Lang } from "../../i18n";

const content: Record<
  Lang,
  {
    heroTitle: string;
    heroDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
    overviewEyebrow: string;
    overviewBody: string;
    services: { title: string; body: string }[];
    freeZonesEyebrow: string;
    freeZonesIntro: string;
    dmccDesc: string;
    rakezDesc: string;
    processEyebrow: string;
    processSteps: string[];
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
    ctaPrimaryBottom: string;
  }
> = {
  jp: {
    heroTitle: "UAE法人設立・市場参入サポート",
    heroDescription:
      "当社は、日本企業・経営者・投資家のためのUAE市場参入パートナーです。フリーゾーン設立、銀行口座、ビザ、パートナー紹介まで一貫して支援します。",
    ctaPrimary: "無料相談する",
    ctaSecondary: "コスト診断を試す",
    overviewEyebrow: "サービス概要",
    overviewBody:
      "UAE法人設立だけでなく、その後の口座開設・ビザ・実務運用までを一体で設計し、日本側の社内稟議にも載せやすい形で整理します。",
    services: [
      {
        title: "会社設立サポート",
        body: "フリーゾーン・メインランドを含めたスキーム設計と、実際の法人設立・ライセンス取得プロセスを一括でサポートします。",
      },
      {
        title: "銀行口座開設サポート",
        body: "UAEの銀行の特徴や審査傾向を踏まえ、候補行の選定、必要書類の整理、面談準備をサポートします。",
      },
      {
        title: "ビザ・移住サポート",
        body: "経営陣・キーパーソンのビザ取得、帯同家族のリロケーション、不動産・学校情報などを、信頼できるパートナーと連携して支援します。",
      },
      {
        title: "現地パートナー紹介",
        body: "販売代理店、ディストリビューター、共同出資パートナー候補など、信頼できる現地ネットワークとの接点づくりを支援します。",
      },
    ],
    freeZonesEyebrow: "主なご提案フリーゾーン",
    freeZonesIntro:
      "当社では、事業内容や戦略に応じて複数のフリーゾーンをご提案していますが、\n特に以下の2つのフリーゾーンを中心にご提案するケースが多くなっています。",
    dmccDesc:
      "ブランド性、国際的信頼性、対外的な印象を重視する企業に適しています。",
    rakezDesc:
      "コスト効率、実務性、柔軟な立ち上げを重視する企業に適しています。",
    processEyebrow: "UAE進出の流れ",
    processSteps: [
      "初回相談",
      "フリーゾーン選定",
      "法人設立手続き",
      "ビザ・銀行口座",
      "UAEでの事業開始",
    ],
    ctaEyebrow: "UAE進出について相談する",
    ctaTitle:
      "事業内容やご予算に応じて、最適なフリーゾーンや進出方法をご提案します。",
    ctaBody:
      "まずはラフなイメージレベルでも構いません。想定している事業内容・売上規模・タイムラインを共有いただければ、現実的な選択肢を整理いたします。",
    ctaPrimaryBottom: "無料相談を予約",
  },
  en: {
    heroTitle: "UAE Company Formation & Market Entry Support",
    heroDescription:
      "We support Japanese companies, entrepreneurs, and investors entering the UAE market, from company formation to banking and strategic partnerships.",
    ctaPrimary: "Book Free Consultation",
    ctaSecondary: "Try the Cost Simulator",
    overviewEyebrow: "Service Overview",
    overviewBody:
      "We do more than register a company. We design a complete entry path that aligns incorporation, banking, visas, and day‑to‑day operations with your internal approval process.",
    services: [
      {
        title: "Company Formation Support",
        body: "We design an appropriate structure across free zones or mainland and coordinate the full incorporation and licensing process.",
      },
      {
        title: "Corporate Bank Account Assistance",
        body: "We help you select suitable banks, prepare documentation, and navigate onboarding and KYC expectations in the UAE.",
      },
      {
        title: "Visa & Relocation Support",
        body: "Together with trusted partners, we coordinate visas, relocation, housing, and schooling options for executives and their families.",
      },
      {
        title: "Local Partner & JV Introduction",
        body: "We open doors to distributors, strategic partners, and potential JV counterparts through a curated local network.",
      },
    ],
    freeZonesEyebrow: "Preferred Free Zones",
    freeZonesIntro:
      "While several UAE free zones may be suitable depending on the business model,\nwe frequently recommend the following two options.",
    dmccDesc:
      "Ideal for companies that prioritize prestige, credibility, and international positioning.",
    rakezDesc:
      "Well suited for businesses focusing on cost efficiency and practical setup.",
    processEyebrow: "Market Entry Process",
    processSteps: [
      "Initial Discussion",
      "Free Zone Selection",
      "Company Formation",
      "Visas & Banking",
      "Go‑Live in the UAE",
    ],
    ctaEyebrow: "Discuss Your UAE Entry",
    ctaTitle:
      "We recommend the right free zone and entry structure based on your business model and budget.",
    ctaBody:
      "You do not need a finalized plan. Share your rough ideas, revenue expectations, and timing, and we will help clarify realistic options.",
    ctaPrimaryBottom: "Book Free Consultation",
  },
  ar: {
    heroTitle: "دعم تأسيس الشركات ودخول السوق في الإمارات",
    heroDescription:
      "ندعم الشركات اليابانية ورواد الأعمال والمستثمرين في دخول سوق الإمارات، من تأسيس الشركات إلى الخدمات المصرفية والشراكات الاستراتيجية.",
    ctaPrimary: "حجز استشارة مجانية",
    ctaSecondary: "تجربة محاكي التكاليف",
    overviewEyebrow: "نظرة عامة على الخدمة",
    overviewBody:
      "لا نقتصر على تسجيل الشركة فحسب، بل نصمم مساراً متكاملاً للدخول يشمل التأسيس والخدمات المصرفية والتأشيرات والعمليات اليومية بما يتوافق مع عملية الموافقات الداخلية لديكم.",
    services: [
      {
        title: "دعم تأسيس الشركات",
        body: "نصمم هيكلاً مناسباً عبر المناطق الحرة أو البر الرئيسي وننسق عملية التأسيس والترخيص بالكامل.",
      },
      {
        title: "مساعدة فتح الحساب المصرفي",
        body: "نساعدكم في اختيار البنوك المناسبة وإعداد المستندات والتعامل مع متطلبات الانضمام والتحقق من الهوية في الإمارات.",
      },
      {
        title: "دعم التأشيرات وإعادة التوطين",
        body: "بالتعاون مع شركاء موثوقين، ننسق التأشيرات وإعادة التوطين والسكن وخيارات المدارس للمديرين التنفيذيين وعائلاتهم.",
      },
      {
        title: "تعريف الشركاء المحليين والمشاريع المشتركة",
        body: "نفتح الأبواب أمام الموزعين والشركاء الاستراتيجيين ومرشحي المشاريع المشتركة عبر شبكة محلية منتقاة.",
      },
    ],
    freeZonesEyebrow: "المناطق الحرة المفضلة",
    freeZonesIntro:
      "بينما قد تكون عدة مناطق حرة في الإمارات مناسبة حسب نموذج العمل،\nنوصي غالباً بالخيارين التاليين.",
    dmccDesc:
      "مثالية للشركات التي تولي أولوية للمكانة والمصداقية والتموضع الدولي.",
    rakezDesc:
      "مناسبة جداً للأعمال التي تركز على كفاءة التكاليف والتأسيس العملي.",
    processEyebrow: "مسار دخول السوق",
    processSteps: [
      "المناقشة الأولية",
      "اختيار المنطقة الحرة",
      "تأسيس الشركة",
      "التأشيرات والخدمات المصرفية",
      "الانطلاق في الإمارات",
    ],
    ctaEyebrow: "ناقش دخولكم إلى الإمارات",
    ctaTitle:
      "نوصي بالمنطقة الحرة وهيكل الدخول المناسبين بناءً على نموذج عملكم وميزانيتكم.",
    ctaBody:
      "لا حاجة لخطة نهائية. شاركونا أفكاركم الأولية وتوقعات الإيرادات والجدول الزمني، وسنساعدكم على توضيح الخيارات الواقعية.",
    ctaPrimaryBottom: "حجز استشارة مجانية",
  },
};

export default function BusinessSetupPage() {
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
                {t.heroTitle}
              </h1>
              <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
                {t.heroDescription}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={contactMailto()}
                  className="inline-flex items-center justify-center rounded-full bg-brand px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-brand-hover"
                >
                  {t.ctaPrimary}
                </a>
                <a
                  href="/simulator"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#f0e4e6] bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                {t.overviewEyebrow}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.overviewBody}
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.services.map((svc) => (
                <div
                  key={svc.title}
                  className="rounded-2xl bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    {svc.title}
                  </p>
                  <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                    {svc.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#f0e4e6] bg-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                {t.freeZonesEyebrow}
              </p>
              <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base whitespace-pre-line">
                {t.freeZonesIntro}
              </p>

              <div className="mt-8 space-y-4 text-sm leading-[1.9] text-slate-700">
                <div>
                  <p className="font-semibold">• DMCC</p>
                  <p className="mt-1">{t.dmccDesc}</p>
                </div>
                <div>
                  <p className="font-semibold">• RAKEZ</p>
                  <p className="mt-1">{t.rakezDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#f0e4e6] bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                {t.processEyebrow}
              </p>
            </div>
            <ol className="mt-12 grid gap-6 sm:grid-cols-5">
              {t.processSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex flex-col items-start rounded-2xl bg-white/90 p-4 text-sm leading-relaxed text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.05)] ring-1 ring-slate-100/70"
                >
                  <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 py-24 sm:py-28 lg:py-32">
            <div className="flex flex-col items-center text-center gap-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand">
                {t.ctaEyebrow}
              </p>
              <h2 className="max-w-3xl text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl lg:text-4xl">
                {t.ctaTitle}
              </h2>
              <p className="max-w-2xl text-base leading-[1.9] text-slate-600 sm:text-lg">
                {t.ctaBody}
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={contactMailto()}
                  className="inline-flex items-center justify-center rounded-full bg-brand px-12 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-brand-hover"
                >
                  {t.ctaPrimaryBottom}
                </a>
                <a
                  href="/simulator"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
