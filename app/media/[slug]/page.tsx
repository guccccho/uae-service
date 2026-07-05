"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import { useLang } from "../../lang-context";
import { LangSwitch } from "../../components/LangSwitch";
import { mediaItems } from "../data";
import Link from "next/link";
import type { Lang } from "../../i18n";

const content: Record<
  Lang,
  {
    breadcrumb: string;
    sections: { title: string; body: string }[];
    ctaEyebrow: string;
    ctaBody: string;
    ctaLabel: string;
  }
> = {
  jp: {
    breadcrumb: "相談企業のプロダクト",
    sections: [
      {
        title: "クライアント企業について",
        body: "企業名や公開可能な範囲の情報に基づき、業種・ビジネスモデル・UAEを含む拠点構成などの背景を整理します。ここでは、どのような戦略的意図を持ってUAEを選択したのかが伝わるように構成します。",
      },
      {
        title: "UAEを拠点としたビジネスモデル",
        body: "対象とする市場（GCC、中東全域、アフリカなど）と、拠点・パートナー・チャネルの設計について記載します。読者が自社のケースに引き寄せてイメージできるよう、物流・税務・人材などの観点も織り交ぜます。",
      },
      {
        title: "当社が支援した内容",
        body: "法人設立・ライセンス取得・ガバナンス設計・現地パートナー開拓など、当社が関与した範囲を時系列で整理します。検討フェーズからローンチ後のフォローまでを一連のストーリーとして伝えることで、支援イメージを具体化します。",
      },
      {
        title: "今後の展望",
        body: "今後のエリア展開や追加プロダクトの計画など、UAE拠点を活用した中長期の方向性について触れます。読者が「自社ならどうするか」を考えやすいような示唆につなげます。",
      },
    ],
    ctaEyebrow: "今後の導線拡張にも対応",
    ctaBody:
      "現在は公開可能な範囲での紹介ページですが、今後はこの詳細ページからECや販売代理店向けページへ接続できる形にも拡張可能です。貴社の展開方針に合わせた構成もご相談いただけます。",
    ctaLabel: "相談を予約する",
  },
  en: {
    breadcrumb: "Consulting Clients' Products",
    sections: [
      {
        title: "About the Client",
        body: "We provide context on the client's industry, business model, and footprint, focusing on why the UAE was selected as a strategic base and how it fits within their broader regional strategy.",
      },
      {
        title: "Business Model from a UAE Hub",
        body: "We describe which markets the client is serving from the UAE and how locations, partners, and channels were structured. This helps readers map the case to their own context, including logistics, tax, and talent considerations.",
      },
      {
        title: "How We Supported the Client",
        body: "We outline our involvement across company setup, licensing, governance, and local partnerships, describing the journey from initial assessment through launch and follow‑up support.",
      },
      {
        title: "Next Steps and Outlook",
        body: "We highlight the client's roadmap for further expansion or product development, using the UAE as a base, and share perspectives that may be relevant for readers considering similar moves.",
      },
    ],
    ctaEyebrow: "Built for Future Commerce Paths",
    ctaBody:
      "This page currently serves as a public-facing showcase, but it is structured so it can later connect to e-commerce or distributor-facing destinations. We can also discuss how a similar setup could support your own go-to-market model.",
    ctaLabel: "Schedule Consultation",
  },
  ar: {
    breadcrumb: "منتجات الشركات المستشارة",
    sections: [
      {
        title: "عن العميل",
        body: "نقدم سياقاً عن قطاع العميل ونموذج أعماله وانتشاره، مع التركيز على سبب اختيار الإمارات كقاعدة استراتيجية وكيف تتوافق مع استراتيجيته الإقليمية الأوسع.",
      },
      {
        title: "نموذج الأعمال من مركز في الإمارات",
        body: "نوضح الأسواق التي يخدمها العميل من الإمارات وكيف تم هيكلة المواقع والشركاء والقنوات. يساعد ذلك القراء على ربط الحالة بسياقهم، بما في ذلك اعتبارات اللوجستيات والضرائب والمواهب.",
      },
      {
        title: "كيف دعمنا العميل",
        body: "نحدد مشاركتنا في تأسيس الشركة والترخيص والحوكمة والشراكات المحلية، ونصف الرحلة من التقييم الأولي حتى الإطلاق والمتابعة.",
      },
      {
        title: "الخطوات التالية والآفاق",
        body: "نسلط الضوء على خارطة طريق العميل للتوسع الإضافي أو تطوير المنتجات باستخدام الإمارات كقاعدة، ونشارك وجهات نظر قد تكون ذات صلة للقراء الذين يفكرون في خطوات مماثلة.",
      },
    ],
    ctaEyebrow: "مصمم لمسارات تجارية مستقبلية",
    ctaBody:
      "تعمل هذه الصفحة حالياً كعرض تعريفي عام، لكنها مهيكلة بحيث يمكن لاحقاً الربط بوجهات التجارة الإلكترونية أو صفحات الموزعين. يمكننا أيضاً مناقشة كيف يمكن إعداد مماثل لدعم نموذج دخول السوق الخاص بكم.",
    ctaLabel: "حجز استشارة",
  },
};

export default function MediaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, setLang } = useLang();
  const t = content[lang];

  const item = mediaItems.find((m) => m.slug === slug);

  if (!item) {
    notFound();
  }

  const sectorLabel = item.sector[lang];
  const titleLabel = item.title[lang];
  const summaryLabel = item.summary[lang];
  const stageLabel = item.stage[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
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
              {t.breadcrumb}
            </span>
          </div>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </header>

      <main>
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
                    {item.location}
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1">
                    {stageLabel}
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1">
                    {item.year}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <div
                  className="h-56 w-full bg-cover bg-center sm:h-64 lg:h-72"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-12 py-20 sm:py-24 lg:py-28 space-y-16">
            {t.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-light tracking-[-0.03em] text-slate-900 sm:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#f0ece5]">
          <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-12 py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col items-center text-center gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
                {t.ctaEyebrow}
              </p>
              <p className="text-base leading-[1.9] text-slate-600">
                {t.ctaBody}
              </p>
              <a
                href="mailto:contact@hinodeya.ae"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
              >
                {t.ctaLabel}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
