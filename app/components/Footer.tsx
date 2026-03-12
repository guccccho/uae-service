"use client";

import React from "react";
import { useLang } from "../lang-context";

export function SiteFooter() {
  const { lang } = useLang();
  const isJP = lang === "jp";

  return (
    <footer className="border-t border-[#f0ece5] bg-white/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-start sm:justify-between sm:px-10 lg:px-12 sm:py-12">
        <div className="space-y-3 text-center sm:text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800">
            UAE Business Consulting
          </div>
          <p className="text-slate-600">
            {isJP
              ? "UAE進出に関する戦略立案から法人設立、現地パートナーシップ構築まで、日本企業の拠点づくりを一貫して支援します。"
              : "From strategy to setup and partnerships, we support organizations using the UAE as a regional base for growth."}
          </p>
          <div className="text-slate-400">
            <span>Dubai / Abu Dhabi</span>
            <span className="mx-2">・</span>
            <a
              href="mailto:contact@example.com"
              className="underline-offset-4 hover:text-slate-600 hover:underline"
            >
              contact@example.com
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-6 text-xs text-slate-500 sm:flex-row sm:justify-end sm:text-right">
          <div className="space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              {isJP ? "ナビゲーション" : "Navigation"}
            </div>
            <div className="flex flex-col gap-1.5">
              <a
                href="/services"
                className="transition-colors hover:text-slate-800"
              >
                {isJP ? "サービス一覧" : "Services"}
              </a>
              <a
                href="/case-studies"
                className="transition-colors hover:text-slate-800"
              >
                {isJP ? "支援事例" : "Case Studies"}
              </a>
              <a
                href="/media"
                className="transition-colors hover:text-slate-800"
              >
                {isJP ? "登記企業のプロダクト" : "Client Products & Media"}
              </a>
              <a
                href="/contact"
                className="transition-colors hover:text-slate-800"
              >
                {isJP ? "お問い合わせ" : "Contact"}
              </a>
            </div>
          </div>

          <div className="text-[11px] text-slate-400">
            <div>© {new Date().getFullYear()} UAE Business Consulting</div>
            <div className="mt-1">
              {isJP
                ? "本ページの内容は一般的な情報提供を目的としたものであり、個別の法的・税務アドバイスではありません。"
                : "This website provides general information only and does not constitute specific legal or tax advice."}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

