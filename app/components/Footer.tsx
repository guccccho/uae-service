"use client";

import React from "react";
import { useLang } from "../lang-context";
import { pickLang, type LangCopy } from "../i18n";

const footerCopy = {
  tagline: {
    jp: "UAE進出に関する戦略立案から法人設立、現地パートナーシップ構築まで、日本企業の拠点づくりを一貫して支援します。",
    en: "From strategy to setup and partnerships, we support organizations using the UAE as a regional base for growth.",
    ar: "من الاستراتيجية إلى التأسيس والشراكات، ندعم المؤسسات التي تستخدم الإمارات كقاعدة إقليمية للنمو.",
  },
  navigation: {
    jp: "ナビゲーション",
    en: "Navigation",
    ar: "التنقل",
  },
  services: {
    jp: "サービス一覧",
    en: "Services",
    ar: "الخدمات",
  },
  caseStudies: {
    jp: "支援事例",
    en: "Case Studies",
    ar: "دراسات الحالة",
  },
  media: {
    jp: "登記企業のプロダクト",
    en: "Client Products & Media",
    ar: "منتجات العملاء والإعلام",
  },
  contact: {
    jp: "お問い合わせ",
    en: "Contact",
    ar: "اتصل بنا",
  },
  disclaimer: {
    jp: "本ページの内容は一般的な情報提供を目的としたものであり、個別の法的・税務アドバイスではありません。",
    en: "This website provides general information only and does not constitute specific legal or tax advice.",
    ar: "يوفر هذا الموقع معلومات عامة فقط ولا يُعد استشارة قانونية أو ضريبية محددة.",
  },
} satisfies Record<string, LangCopy>;

export function SiteFooter() {
  const { lang } = useLang();
  const align = lang === "ar" ? "text-right" : "text-left";
  const centerOnMobile = lang === "ar" ? "text-center sm:text-right" : "text-center sm:text-left";

  return (
    <footer className="border-t border-[#f0ece5] bg-white/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-start sm:justify-between sm:px-10 lg:px-12 sm:py-12">
        <div className={`space-y-3 ${centerOnMobile}`}>
          <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800">
            HINODEYA
          </div>
          <p className="text-slate-600">{pickLang(footerCopy.tagline, lang)}</p>
          <div className="text-slate-400 space-y-1">
            <div>
              IFZA Business Park
              <br />
              Dubai Silicon Oasis
              <br />
              Dubai, United Arab Emirates
            </div>
            <div>
              <a
                href="mailto:contact@hinodeya.ae"
                className="underline-offset-4 hover:text-slate-600 hover:underline"
              >
                contact@hinodeya.ae
              </a>
            </div>
          </div>
        </div>

        <div className={`flex flex-1 flex-col items-center gap-6 text-xs text-slate-500 sm:flex-row sm:justify-end ${lang === "ar" ? "sm:text-right" : "sm:text-right"}`}>
          <div className={`space-y-2 ${align}`}>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              {pickLang(footerCopy.navigation, lang)}
            </div>
            <div className="flex flex-col gap-1.5">
              <a href="/services" className="transition-colors hover:text-slate-800">
                {pickLang(footerCopy.services, lang)}
              </a>
              <a href="/case-studies" className="transition-colors hover:text-slate-800">
                {pickLang(footerCopy.caseStudies, lang)}
              </a>
              <a href="/media" className="transition-colors hover:text-slate-800">
                {pickLang(footerCopy.media, lang)}
              </a>
              <a href="/contact" className="transition-colors hover:text-slate-800">
                {pickLang(footerCopy.contact, lang)}
              </a>
            </div>
          </div>

          <div className={`text-[11px] text-slate-400 ${align}`}>
            <div>© {new Date().getFullYear()} HINODEYA</div>
            <div className="mt-1">{pickLang(footerCopy.disclaimer, lang)}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
