"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLang } from "../lang-context";
import {
  FREE_ZONE_CONFIGS,
  FREE_ZONE_LABELS,
  calculateZoneCost,
  getDefaultSelections,
  rankZonesByCost,
  type FreeZone,
  type Relocation,
  type SimulatorSelections,
} from "./data";

const GOLD = "#C8A46A";
const FALLBACK_AED_JPY = 40;

type ExchangeRateData = {
  rate: number;
  date: string;
  label: { jp: string; en: string };
};

const TEXT = {
  jp: {
    freeZoneTitle: "フリーゾーンを選択",
    freeZoneDescription:
      "フリーゾーンによってライセンス費用、オフィス条件、ビザ費用が異なります。",
    conditionsTitle: "前提条件を選択してください",
    sourceNote: "料金は各フリーゾーン公式情報（2024〜2026年）に基づく概算です。",
    labels: {
      companyType: "法人形態",
      visas: "ビザ人数",
      office: "オフィスタイプ",
      business: "ビジネスタイプ",
      relocation: "リロケーションサポート",
    },
    resultTitle: "推定設立費用",
    breakdown: {
      license: "ライセンス / パッケージ",
      registration: "登録・定款費用",
      establishment: "エスタブリッシュメントカード",
      visas: "ビザ関連費用",
      office: "オフィス追加費用",
      relocation: "リロケーションサポート",
      total: "推定合計コスト",
    },
    recommendationTitle: "おすすめフリーゾーン",
    recommendationBody:
      "選択された条件に基づくコスト試算にもとづき、\n以下のフリーゾーンがコスト面で有利です。",
    recommendationNote:
      "※同条件での合計が最も低いフリーゾーン（上位）を表示しています。",
    ctaButton: "この条件で無料相談する",
    contact: {
      title: "無料相談フォーム",
      body: "シミュレーション結果を前提に、条件整理・必要書類・進出スケジュールの目安をご案内します。",
      submit: "送信（メールを起動）",
      note: "※送信ボタンを押すとメールアプリが起動します（フォーム送信の保存は行いません）。",
      fields: {
        name: "お名前",
        email: "メールアドレス",
        message: "ご相談内容（任意）",
      },
    },
    relocation: { yes: "必要", no: "不要" },
  },
  en: {
    freeZoneTitle: "Select a Free Zone",
    freeZoneDescription:
      "Costs vary by free zone, including license fees, office requirements, and visa-related expenses.",
    conditionsTitle: "Select your setup assumptions",
    sourceNote: "Estimates based on each free zone's official pricing (2024–2026).",
    labels: {
      companyType: "Legal entity type",
      visas: "Visa quota",
      office: "Office type",
      business: "Business activity",
      relocation: "Relocation support",
    },
    resultTitle: "Estimated setup cost",
    breakdown: {
      license: "Licence / package",
      registration: "Registration & MOA",
      establishment: "Establishment card",
      visas: "Visa-related",
      office: "Office upgrade",
      relocation: "Relocation support",
      total: "Estimated total",
    },
    recommendationTitle: "Recommended free zones",
    recommendationBody:
      "Based on your selections, the following free zones are typically more cost-efficient under the same assumptions.",
    recommendationNote:
      "Note: We show the top options with the lowest total under the same assumptions.",
    ctaButton: "Book a free consultation",
    contact: {
      title: "Free consultation",
      body: "Using your simulation result as a baseline, we can help clarify requirements, documents, and a high-level timeline.",
      submit: "Send (opens email)",
      note: "Submitting opens your email client. We do not store form submissions on this website.",
      fields: {
        name: "Name",
        email: "Email",
        message: "Message (optional)",
      },
    },
    relocation: { yes: "Yes", no: "No" },
  },
} as const;

function formatAED(value: number) {
  return value.toLocaleString("en-US");
}

function formatJPY(value: number) {
  return value.toLocaleString("ja-JP");
}

function PillButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs font-medium tracking-[0.12em] transition-colors ${
        active
          ? "text-white"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
      }`}
      style={active ? { backgroundColor: GOLD, borderColor: GOLD } : undefined}
    >
      {children}
    </button>
  );
}

function OptionDescription({
  description,
}: {
  description: { jp: string; en: string };
}) {
  const { lang } = useLang();
  return (
    <p className="mt-2 text-xs leading-relaxed text-slate-500">
      {description[lang]}
    </p>
  );
}

export default function SimulatorPage() {
  const { lang, setLang } = useLang();
  const t = TEXT[lang];
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [freeZone, setFreeZone] = useState<FreeZone>("dmcc");
  const [selections, setSelections] = useState<SimulatorSelections>(() =>
    getDefaultSelections("dmcc"),
  );
  const [exchangeRate, setExchangeRate] = useState<ExchangeRateData | null>(
    null,
  );

  const zoneConfig = FREE_ZONE_CONFIGS[freeZone];

  useEffect(() => {
    let cancelled = false;

    fetch("/api/exchange-rate")
      .then((res) => res.json())
      .then((data: ExchangeRateData) => {
        if (!cancelled && typeof data.rate === "number") {
          setExchangeRate(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setExchangeRate({
            rate: FALLBACK_AED_JPY,
            date: new Date().toISOString().slice(0, 10),
            label: {
              jp: "レート取得不可（参考値）",
              en: "Rate unavailable (fallback)",
            },
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    setSelections(getDefaultSelections(freeZone));
  }, [freeZone]);

  const updateSelection = <K extends keyof SimulatorSelections>(
    key: K,
    value: SimulatorSelections[K],
  ) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  const breakdown = useMemo(
    () => calculateZoneCost(freeZone, selections),
    [freeZone, selections],
  );

  const cheapestZones = useMemo(
    () => rankZonesByCost(selections).slice(0, 2).map((r) => r.zone),
    [selections],
  );

  const selectedLicenseType = zoneConfig.licenseTypes.find(
    (l) => l.id === selections.companyType,
  );
  const selectedVisa = zoneConfig.visaPackages.find(
    (v) => v.id === selections.visas,
  );
  const selectedOffice = zoneConfig.officeTypes.find(
    (o) => o.id === selections.office,
  );
  const selectedBusiness = zoneConfig.businessActivities.find(
    (b) => b.id === selections.business,
  );

  const aedToJpy = exchangeRate?.rate ?? FALLBACK_AED_JPY;
  const totalJPY = Math.round(breakdown.total * aedToJpy);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="border-b border-[#f0ece5] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <a
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800 transition-colors hover:text-slate-900"
          >
            HINODEYA UAE Consulting
          </a>
          <div className="flex items-center gap-5">
            <p className="hidden text-xs font-medium tracking-[0.18em] text-slate-500 sm:block">
              1 AED = {aedToJpy.toFixed(2)} JPY
              {exchangeRate && (
                <span className="ml-1 text-slate-400">
                  ({exchangeRate.label[lang]})
                </span>
              )}
            </p>
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
        </div>
      </header>

      <section className="border-b border-[#f0ece5] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-18 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
              {lang === "jp"
                ? "ドバイ会社設立コストシミュレーター"
                : "Dubai Company Setup Cost Simulator"}
            </h1>
            <p className="mt-4 text-base leading-[1.9] text-slate-600 sm:text-lg">
              {t.freeZoneDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {t.freeZoneTitle}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  {zoneConfig.overview[lang]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(Object.keys(FREE_ZONE_LABELS) as FreeZone[]).map((z) => (
                    <PillButton
                      key={z}
                      active={freeZone === z}
                      onClick={() => setFreeZone(z)}
                    >
                      {FREE_ZONE_LABELS[z]}
                    </PillButton>
                  ))}
                </div>
                <p className="mt-3 text-[11px] text-slate-400">
                  {lang === "jp" ? "出典: " : "Source: "}
                  <a
                    href={zoneConfig.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-2 hover:underline"
                  >
                    {zoneConfig.sourceLabel[lang]}
                  </a>
                </p>
              </div>

              <h2 className="mt-10 text-sm font-semibold tracking-[0.16em] text-slate-900 uppercase">
                {t.conditionsTitle}
              </h2>

              <div className="mt-8 space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {t.labels.companyType}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {zoneConfig.licenseTypes.map((option) => (
                      <PillButton
                        key={option.id}
                        active={selections.companyType === option.id}
                        onClick={() =>
                          updateSelection("companyType", option.id)
                        }
                      >
                        {option.label[lang]}
                      </PillButton>
                    ))}
                  </div>
                  {selectedLicenseType && (
                    <OptionDescription description={selectedLicenseType.description} />
                  )}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {t.labels.visas}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {zoneConfig.visaPackages.map((option) => (
                      <PillButton
                        key={option.id}
                        active={selections.visas === option.id}
                        onClick={() => updateSelection("visas", option.id)}
                      >
                        {option.label[lang]}
                      </PillButton>
                    ))}
                  </div>
                  {selectedVisa && (
                    <OptionDescription description={selectedVisa.description} />
                  )}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {t.labels.office}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {zoneConfig.officeTypes.map((option) => (
                      <PillButton
                        key={option.id}
                        active={selections.office === option.id}
                        onClick={() => updateSelection("office", option.id)}
                      >
                        {option.label[lang]}
                      </PillButton>
                    ))}
                  </div>
                  {selectedOffice && (
                    <OptionDescription description={selectedOffice.description} />
                  )}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {t.labels.business}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {zoneConfig.businessActivities.map((option) => (
                      <PillButton
                        key={option.id}
                        active={selections.business === option.id}
                        onClick={() => updateSelection("business", option.id)}
                      >
                        {option.label[lang]}
                      </PillButton>
                    ))}
                  </div>
                  {selectedBusiness && (
                    <OptionDescription description={selectedBusiness.description} />
                  )}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {t.labels.relocation}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(["no", "yes"] as Relocation[]).map((k) => (
                      <PillButton
                        key={k}
                        active={selections.relocation === k}
                        onClick={() => updateSelection("relocation", k)}
                      >
                        {t.relocation[k]}
                      </PillButton>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-8 text-[11px] leading-relaxed text-slate-400">
                {t.sourceNote}
              </p>
            </div>

            <aside className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70 sm:p-8 lg:sticky lg:top-6">
              <h2 className="text-sm font-semibold tracking-[0.16em] text-slate-900 uppercase">
                {t.resultTitle}
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                {FREE_ZONE_LABELS[freeZone]} — {zoneConfig.overview[lang]}
              </p>

              <div className="mt-6 space-y-4 text-sm">
                {[
                  { label: t.breakdown.license, value: breakdown.license },
                  { label: t.breakdown.registration, value: breakdown.registration },
                  { label: t.breakdown.establishment, value: breakdown.establishment },
                  { label: t.breakdown.visas, value: breakdown.visas },
                  { label: t.breakdown.office, value: breakdown.office },
                  { label: t.breakdown.relocation, value: breakdown.relocationCost },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="text-slate-600">{row.label}</span>
                    <span className="font-medium text-slate-900">
                      {formatAED(Math.round(row.value))} AED
                    </span>
                  </div>
                ))}

                <div className="mt-4 border-t border-dashed border-slate-200 pt-4">
                  <div className="flex items-start justify-between">
                    <span className="font-semibold text-slate-800">
                      {t.breakdown.total}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-semibold tracking-[-0.01em] text-slate-900">
                        {formatAED(Math.round(breakdown.total))} AED
                      </div>
                      <div className="text-xs text-slate-500">
                        {lang === "jp"
                          ? `約 ${formatJPY(totalJPY)} 円`
                          : `≈ ${formatJPY(totalJPY)} JPY`}
                      </div>
                      {exchangeRate && (
                        <div className="mt-1 text-[10px] text-slate-400">
                          1 AED = {aedToJpy.toFixed(2)} JPY · {exchangeRate.label[lang]}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50/60 p-5 ring-1 ring-slate-100/70">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: GOLD }}
                >
                  {t.recommendationTitle}
                </p>
                <p className="mt-3 whitespace-pre-line text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {t.recommendationBody}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cheapestZones.map((z) => (
                    <span
                      key={z}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-[0.14em] text-slate-800"
                    >
                      {FREE_ZONE_LABELS[z]}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
                  {t.recommendationNote}
                </p>
              </div>

              <button
                type="button"
                onClick={scrollToContact}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition hover:opacity-95"
                style={{ backgroundColor: GOLD }}
              >
                {t.ctaButton}
              </button>
            </aside>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="border-t border-[#f0ece5] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-100/70 sm:p-12">
            <p
              className="text-xs font-medium uppercase tracking-[0.35em]"
              style={{ color: GOLD }}
            >
              CONTACT
            </p>
            <h2 className="mt-4 text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base">
              {t.contact.body}
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:contact@hinodeya.ae";
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {t.contact.fields.name}
                  </span>
                  <input
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-slate-300"
                    placeholder={t.contact.fields.name}
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {t.contact.fields.email}
                  </span>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-slate-300"
                    placeholder="contact@hinodeya.ae"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {t.contact.fields.message}
                </span>
                <textarea
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-slate-300"
                  rows={5}
                  placeholder={t.contact.fields.message}
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition hover:opacity-95"
                style={{ backgroundColor: GOLD }}
              >
                {t.contact.submit}
              </button>
              <p className="text-xs leading-relaxed text-slate-500">
                {t.contact.note}
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
