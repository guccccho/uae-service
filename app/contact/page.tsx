"use client";

import React from "react";
import { useLang } from "../lang-context";
import { LangSwitch } from "../components/LangSwitch";
import type { Lang } from "../i18n";

const content: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    detail: string;
    ctaLabel: string;
  }
> = {
  jp: {
    eyebrow: "Contact",
    title: "お問い合わせ",
    subtitle:
      "UAE進出・法人設立・商業展開に関するご相談は、下記メールアドレスよりお気軽にご連絡ください。",
    detail:
      "貴社名、担当者名、概要（現状の検討状況・想定タイムライン・ご関心のトピックなど）を数行で構いませんのでお書き添えください。",
    ctaLabel: "メールを送る",
  },
  en: {
    eyebrow: "Contact",
    title: "Contact",
    subtitle:
      "For inquiries regarding UAE market entry, company setup, or commercial expansion, please contact us via email.",
    detail:
      "Include your company, contact details, and a brief description of your situation, timing, and topics of interest.",
    ctaLabel: "Email Us",
  },
  ar: {
    eyebrow: "اتصل بنا",
    title: "اتصل بنا",
    subtitle:
      "للاستفسارات المتعلقة بدخول سوق الإمارات أو تأسيس الشركات أو التوسع التجاري، يرجى التواصل معنا عبر البريد الإلكتروني.",
    detail:
      "يرجى تضمين اسم شركتك وبيانات الاتصال ووصفاً موجزاً لوضعكم والجدول الزمني المتوقع ومجالات الاهتمام.",
    ctaLabel: "أرسل بريداً إلكترونياً",
  },
};

export default function ContactPage() {
  const { lang, setLang } = useLang();
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="border-b border-[#f0ece5]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800">
            UAE Business Consulting
          </div>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </header>

      <main>
        <section className="flex items-center justify-center px-6 sm:px-10 lg:px-12 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
              {t.eyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
              {t.title}
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
              {t.subtitle}
            </p>
            <p className="mt-4 text-sm leading-[1.8] text-slate-500">
              {t.detail}
            </p>

            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href="mailto:contact@hinodeya.ae"
                className="inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-12 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
              >
                {t.ctaLabel}
              </a>
              <p className="text-sm text-slate-500">contact@hinodeya.ae</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
