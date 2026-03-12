"use client";

import React, { useState } from "react";

type Lang = "jp" | "en";

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>("jp");
  const isJP = lang === "jp";

  const title = isJP ? "お問い合わせ" : "Contact";
  const subtitle = isJP
    ? "UAE進出・法人設立・商業展開に関するご相談は、下記メールアドレスよりお気軽にご連絡ください。"
    : "For inquiries regarding UAE market entry, company setup, or commercial expansion, please contact us via email.";
  const detail = isJP
    ? "貴社名、担当者名、概要（現状の検討状況・想定タイムライン・ご関心のトピックなど）を数行で構いませんのでお書き添えください。"
    : "Include your company, contact details, and a brief description of your situation, timing, and topics of interest.";

  const ctaLabel = isJP ? "メールを送る" : "Email Us";

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
        <section className="flex items-center justify-center px-6 sm:px-10 lg:px-12 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a86c]">
              {isJP ? "Contact" : "Contact"}
            </p>
            <h1 className="mt-4 text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-slate-600 sm:text-lg">
              {subtitle}
            </p>
            <p className="mt-4 text-sm leading-[1.8] text-slate-500">
              {detail}
            </p>

            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center justify-center rounded-full bg-[#c9a86c] px-12 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#b89455]"
              >
                {ctaLabel}
              </a>
              <p className="text-sm text-slate-500">contact@example.com</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

