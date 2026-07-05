"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLang } from "../lang-context";
import {
  COUNTRY_OPTIONS,
  MAJOR_ACTIVITIES,
  SHAREHOLDER_OPTIONS,
  TIMELINE_OPTIONS,
  getAllowedZones,
  getMajorActivity,
  getSubActivity,
  type CustomerProfile,
} from "./activities";
import {
  BANK_ACCOUNT_CONFIG,
  FREE_ZONE_CONFIGS,
  FREE_ZONE_LABELS,
  VISA_SPEED_CONFIG,
  calculateZoneCost,
  getDefaultSelections,
  hasVisaQuota,
  rankZonesByActivity,
  type BankAccountOption,
  type FreeZone,
  type Relocation,
  type SimulatorSelections,
  type VisaSpeed,
} from "./data";

const GOLD = "#C8A46A";
const FALLBACK_AED_JPY = 40;

type ExchangeRateData = {
  rate: number;
  date: string;
  label: { jp: string; en: string };
};

const EMPTY_CUSTOMER: CustomerProfile = {
  companyName: "",
  contactName: "",
  email: "",
  country: "jp",
  timeline: "exploring",
  shareholderCount: "1",
};

const TEXT = {
  jp: {
    freeZoneDescription:
      "ライセンスアクティビティと顧客条件から、設立に適したフリーゾーンを最適化します。",
    customerTitle: "お客様情報",
    customerNote: "シミュレーション結果とあわせて無料相談に活用できます。",
    activityTitle: "ライセンスアクティビティ",
    majorActivity: "大業種",
    subActivity: "中業種（ライセンスアクティビティ）",
    freeZoneTitle: "フリーゾーン",
    freeZoneFiltered: "選択中のアクティビティで設立可能なゾーンのみ表示しています。",
    freeZoneUnavailable: "このアクティビティには非対応",
    conditionsTitle: "設立条件",
    sourceNote: "料金は各フリーゾーン公式情報（2024〜2026年）に基づく概算です。",
    labels: {
      companyType: "法人形態",
      visas: "ビザ人数",
      office: "オフィスタイプ",
      relocation: "リロケーションサポート",
      visaSpeed: "ビザ取得スピード",
      bankAccount: "口座開設サポート",
      companyName: "会社名（予定）",
      contactName: "ご担当者名",
      email: "メールアドレス",
      country: "本社所在国",
      timeline: "設立予定時期",
      shareholders: "株主人数（予定）",
    },
    resultTitle: "推定設立費用",
    breakdown: {
      license: "ライセンス / パッケージ",
      registration: "登録・定款費用",
      establishment: "エスタブリッシュメントカード",
      visas: "ビザ関連費用",
      office: "オフィス追加費用",
      relocation: "リロケーションサポート",
      visaVip: "ビザVIP優先処理",
      bankAccount: "口座開設サポート",
      total: "推定合計コスト",
    },
    visaTimeline: "ビザ取得目安",
    businessDays: "営業日",
    recommendationTitle: "最適なフリーゾーン",
    recommendationBody:
      "選択したライセンスアクティビティと設立条件に基づき、適合性とコストのバランスから推奨します。",
    recommendationNote:
      "※金融・暗号資産など規制対象アクティビティは、フリーゾーン選定に加え追加の規制当局認可が必要です。",
    ctaButton: "この条件で無料相談する",
    contact: {
      title: "無料相談フォーム",
      body: "シミュレーション結果を前提に、条件整理・必要書類・進出スケジュールの目安をご案内します。",
      submit: "送信（メールを起動）",
      note: "※送信ボタンを押すとメールアプリが起動します（フォーム送信の保存は行いません）。",
      fields: { message: "ご相談内容（任意）" },
    },
    relocation: { yes: "必要", no: "不要" },
  },
  en: {
    freeZoneDescription:
      "We optimise the free zone based on your licence activity and setup profile.",
    customerTitle: "Your profile",
    customerNote: "Used together with the simulation for your free consultation.",
    activityTitle: "Licence activity",
    majorActivity: "Major sector",
    subActivity: "Sub-sector (licence activity)",
    freeZoneTitle: "Free zone",
    freeZoneFiltered: "Showing only zones eligible for the selected activity.",
    freeZoneUnavailable: "Not eligible for this activity",
    conditionsTitle: "Setup assumptions",
    sourceNote: "Estimates based on each free zone's official pricing (2024–2026).",
    labels: {
      companyType: "Legal entity type",
      visas: "Visa quota",
      office: "Office type",
      relocation: "Relocation support",
      visaSpeed: "Visa processing speed",
      bankAccount: "Bank account support",
      companyName: "Company name (planned)",
      contactName: "Contact name",
      email: "Email",
      country: "Country of origin",
      timeline: "Planned setup timing",
      shareholders: "Shareholders (planned)",
    },
    resultTitle: "Estimated setup cost",
    breakdown: {
      license: "Licence / package",
      registration: "Registration & MOA",
      establishment: "Establishment card",
      visas: "Visa-related",
      office: "Office upgrade",
      relocation: "Relocation support",
      visaVip: "Visa VIP priority",
      bankAccount: "Bank account support",
      total: "Estimated total",
    },
    visaTimeline: "Visa processing estimate",
    businessDays: "business days",
    recommendationTitle: "Optimal free zones",
    recommendationBody:
      "Recommended based on activity eligibility and cost under your selected assumptions.",
    recommendationNote:
      "Note: Regulated activities (finance, crypto, etc.) may require additional regulator approvals beyond free-zone licensing.",
    ctaButton: "Book a free consultation",
    contact: {
      title: "Free consultation",
      body: "Using your simulation result as a baseline, we can help clarify requirements, documents, and a high-level timeline.",
      submit: "Send (opens email)",
      note: "Submitting opens your email client. We do not store form submissions on this website.",
      fields: { message: "Message (optional)" },
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
  disabled,
  children,
  onClick,
}: {
  active: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs font-medium tracking-[0.12em] transition-colors ${
        disabled
          ? "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300"
          : active
            ? "text-white"
            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
      }`}
      style={active && !disabled ? { backgroundColor: GOLD, borderColor: GOLD } : undefined}
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

function buildMailto(
  customer: CustomerProfile,
  selections: SimulatorSelections,
  freeZone: FreeZone,
  breakdown: ReturnType<typeof calculateZoneCost>,
  aedToJpy: number,
  lang: "jp" | "en",
) {
  const major = getMajorActivity(selections.majorActivity);
  const sub = getSubActivity(selections.majorActivity, selections.subActivity);
  const subject =
    lang === "jp"
      ? `【HINODEYA】設立シミュレーション相談 — ${customer.companyName || customer.contactName || "新規"}`
      : `[HINODEYA] Setup simulation enquiry — ${customer.companyName || customer.contactName || "New"}`;

  const body = [
    lang === "jp" ? "■ お客様情報" : "■ Profile",
    `${lang === "jp" ? "会社名" : "Company"}: ${customer.companyName || "—"}`,
    `${lang === "jp" ? "担当者" : "Contact"}: ${customer.contactName || "—"}`,
    `${lang === "jp" ? "メール" : "Email"}: ${customer.email || "—"}`,
    `${lang === "jp" ? "所在国" : "Country"}: ${COUNTRY_OPTIONS.find((c) => c.id === customer.country)?.label[lang] ?? customer.country}`,
    "",
    lang === "jp" ? "■ ライセンスアクティビティ" : "■ Licence activity",
    `${lang === "jp" ? "大業種" : "Major"}: ${major?.label[lang] ?? ""}`,
    `${lang === "jp" ? "中業種" : "Sub-sector"}: ${sub?.label[lang] ?? ""}`,
    "",
    lang === "jp" ? "■ シミュレーション結果" : "■ Simulation result",
    `${lang === "jp" ? "フリーゾーン" : "Free zone"}: ${FREE_ZONE_LABELS[freeZone]}`,
    `${lang === "jp" ? "推定合計" : "Estimated total"}: ${formatAED(Math.round(breakdown.total))} AED (≈ ${formatJPY(Math.round(breakdown.total * aedToJpy))} JPY)`,
    breakdown.visaProcessingDays > 0
      ? `${lang === "jp" ? "ビザ取得目安" : "Visa timeline"}: ${breakdown.visaProcessingDays} ${lang === "jp" ? "営業日" : "business days"}${selections.visaSpeed === "vip" ? " (VIP)" : ""}`
      : "",
    selections.bankAccount === "yes"
      ? `${lang === "jp" ? "口座開設サポート" : "Bank account support"}: +${formatAED(BANK_ACCOUNT_CONFIG.yes.cost)} AED`
      : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:contact@hinodeya.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function SimulatorPage() {
  const { lang, setLang } = useLang();
  const t = TEXT[lang];
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [customer, setCustomer] = useState<CustomerProfile>(EMPTY_CUSTOMER);
  const [freeZone, setFreeZone] = useState<FreeZone>("ifza");
  const [selections, setSelections] = useState<SimulatorSelections>(() =>
    getDefaultSelections("ifza"),
  );
  const [exchangeRate, setExchangeRate] = useState<ExchangeRateData | null>(null);
  const [contactMessage, setContactMessage] = useState("");

  const majorActivity = getMajorActivity(selections.majorActivity);
  const subActivity = getSubActivity(
    selections.majorActivity,
    selections.subActivity,
  );
  const allowedZones = useMemo(
    () => getAllowedZones(selections.majorActivity, selections.subActivity),
    [selections.majorActivity, selections.subActivity],
  );
  const zoneConfig = FREE_ZONE_CONFIGS[freeZone];

  useEffect(() => {
    let cancelled = false;
    fetch("/api/exchange-rate")
      .then((res) => res.json())
      .then((data: ExchangeRateData) => {
        if (!cancelled && typeof data.rate === "number") setExchangeRate(data);
      })
      .catch(() => {
        if (!cancelled) {
          setExchangeRate({
            rate: FALLBACK_AED_JPY,
            date: new Date().toISOString().slice(0, 10),
            label: { jp: "レート取得不可（参考値）", en: "Rate unavailable (fallback)" },
          });
        }
      });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!allowedZones.includes(freeZone)) {
      const next = subActivity?.recommendedZones.find((z) =>
        allowedZones.includes(z),
      ) ?? allowedZones[0];
      setFreeZone(next);
    }
  }, [allowedZones, freeZone, subActivity]);

  useEffect(() => {
    setSelections((prev) => getDefaultSelections(freeZone, prev.majorActivity, prev.subActivity));
  }, [freeZone]);

  useEffect(() => {
    setSelections((p) => {
      if (customer.shareholderCount === "1") {
        const hasFze = zoneConfig.licenseTypes.some((l) => l.id === "fze");
        if (hasFze && p.companyType !== "fze") {
          return { ...p, companyType: "fze" };
        }
      } else {
        const llc = zoneConfig.licenseTypes.find(
          (l) => l.id === "fz_llc" || l.id === "fzc",
        );
        if (llc && p.companyType === "fze") {
          return { ...p, companyType: llc.id };
        }
      }
      return p;
    });
  }, [customer.shareholderCount, zoneConfig.licenseTypes]);

  const updateSelection = <K extends keyof SimulatorSelections>(
    key: K,
    value: SimulatorSelections[K],
  ) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  const handleMajorChange = (majorId: string) => {
    const major = getMajorActivity(majorId);
    const firstSub = major?.subActivities[0]?.id ?? "management_consulting";
    setSelections((prev) => ({
      ...prev,
      majorActivity: majorId,
      subActivity: firstSub,
    }));
  };

  const breakdown = useMemo(
    () => calculateZoneCost(freeZone, selections),
    [freeZone, selections],
  );

  const visaQuotaActive = hasVisaQuota(freeZone, selections.visas);

  useEffect(() => {
    if (!visaQuotaActive && selections.visaSpeed !== "standard") {
      setSelections((p) => ({ ...p, visaSpeed: "standard" }));
    }
  }, [visaQuotaActive, selections.visaSpeed]);

  const optimizedZones = useMemo(
    () => rankZonesByActivity(selections).slice(0, 3),
    [selections],
  );

  const selectedLicenseType = zoneConfig.licenseTypes.find(
    (l) => l.id === selections.companyType,
  );
  const selectedVisa = zoneConfig.visaPackages.find((v) => v.id === selections.visas);
  const selectedOffice = zoneConfig.officeTypes.find((o) => o.id === selections.office);

  const aedToJpy = exchangeRate?.rate ?? FALLBACK_AED_JPY;
  const totalJPY = Math.round(breakdown.total * aedToJpy);

  const inputClass =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-slate-300";

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="border-b border-[#f0ece5] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <a href="/" className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800 hover:text-slate-900">
            HINODEYA UAE Consulting
          </a>
          <div className="flex items-center gap-5">
            <p className="hidden text-xs font-medium tracking-[0.18em] text-slate-500 sm:block">
              1 AED = {aedToJpy.toFixed(2)} JPY
              {exchangeRate && (
                <span className="ml-1 text-slate-400">({exchangeRate.label[lang]})</span>
              )}
            </p>
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em]">
              {(["jp", "en"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    lang === l ? "bg-[#c9a86c] text-white" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-[#f0ece5] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
              {lang === "jp" ? "ドバイ会社設立コストシミュレーター" : "Dubai Company Setup Cost Simulator"}
            </h1>
            <p className="mt-4 text-base leading-[1.9] text-slate-600 sm:text-lg">{t.freeZoneDescription}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.customerTitle}</p>
                <p className="mt-2 text-xs text-slate-500">{t.customerNote}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.labels.companyName}</span>
                    <input className={inputClass} value={customer.companyName} onChange={(e) => setCustomer((p) => ({ ...p, companyName: e.target.value }))} />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.labels.contactName}</span>
                    <input className={inputClass} value={customer.contactName} onChange={(e) => setCustomer((p) => ({ ...p, contactName: e.target.value }))} />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.labels.email}</span>
                    <input type="email" className={inputClass} value={customer.email} onChange={(e) => setCustomer((p) => ({ ...p, email: e.target.value }))} placeholder="contact@hinodeya.ae" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.labels.country}</span>
                    <select className={inputClass} value={customer.country} onChange={(e) => setCustomer((p) => ({ ...p, country: e.target.value }))}>
                      {COUNTRY_OPTIONS.map((c) => (
                        <option key={c.id} value={c.id}>{c.label[lang]}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.labels.timeline}</span>
                    <select className={inputClass} value={customer.timeline} onChange={(e) => setCustomer((p) => ({ ...p, timeline: e.target.value as CustomerProfile["timeline"] }))}>
                      {TIMELINE_OPTIONS.map((o) => (
                        <option key={o.id} value={o.id}>{o.label[lang]}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.labels.shareholders}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SHAREHOLDER_OPTIONS.map((o) => (
                      <PillButton key={o.id} active={customer.shareholderCount === o.id} onClick={() => setCustomer((p) => ({ ...p, shareholderCount: o.id }))}>
                        {o.label[lang]}
                      </PillButton>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.activityTitle}</p>
                <div className="mt-6 space-y-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.majorActivity}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {MAJOR_ACTIVITIES.map((m) => (
                        <PillButton key={m.id} active={selections.majorActivity === m.id} onClick={() => handleMajorChange(m.id)}>
                          {m.label[lang]}
                        </PillButton>
                      ))}
                    </div>
                    {majorActivity && <OptionDescription description={majorActivity.description} />}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.subActivity}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {majorActivity?.subActivities.map((s) => (
                        <PillButton key={s.id} active={selections.subActivity === s.id} onClick={() => updateSelection("subActivity", s.id)}>
                          {s.label[lang]}
                        </PillButton>
                      ))}
                    </div>
                    {subActivity && <OptionDescription description={subActivity.description} />}
                    {subActivity?.regulated && subActivity.regulatoryNote && (
                      <p className="mt-2 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800 ring-1 ring-amber-100">
                        {subActivity.regulatoryNote[lang]}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.freeZoneTitle}</p>
                <p className="mt-2 text-xs text-slate-500">{t.freeZoneFiltered}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(Object.keys(FREE_ZONE_LABELS) as FreeZone[]).map((z) => {
                    const eligible = allowedZones.includes(z);
                    return (
                      <PillButton key={z} active={freeZone === z} disabled={!eligible} onClick={() => eligible && setFreeZone(z)}>
                        {FREE_ZONE_LABELS[z]}
                      </PillButton>
                    );
                  })}
                </div>
                {!allowedZones.includes(freeZone) && (
                  <p className="mt-2 text-xs text-amber-700">{t.freeZoneUnavailable}</p>
                )}
                <p className="mt-3 text-[11px] text-slate-400">
                  {lang === "jp" ? "出典: " : "Source: "}
                  <a href={zoneConfig.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
                    {zoneConfig.sourceLabel[lang]}
                  </a>
                </p>

                <h2 className="mt-10 text-sm font-semibold tracking-[0.16em] text-slate-900 uppercase">{t.conditionsTitle}</h2>
                <div className="mt-8 space-y-8">
                  {[
                    { key: "companyType" as const, label: t.labels.companyType, options: zoneConfig.licenseTypes, selected: selectedLicenseType },
                    { key: "visas" as const, label: t.labels.visas, options: zoneConfig.visaPackages, selected: selectedVisa },
                    { key: "office" as const, label: t.labels.office, options: zoneConfig.officeTypes, selected: selectedOffice },
                  ].map((group) => (
                    <div key={group.key}>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{group.label}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.options.map((option) => (
                          <PillButton key={option.id} active={selections[group.key] === option.id} onClick={() => updateSelection(group.key, option.id)}>
                            {option.label[lang]}
                          </PillButton>
                        ))}
                      </div>
                      {group.selected && <OptionDescription description={group.selected.description} />}
                    </div>
                  ))}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.labels.relocation}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(["no", "yes"] as Relocation[]).map((k) => (
                        <PillButton key={k} active={selections.relocation === k} onClick={() => updateSelection("relocation", k)}>
                          {t.relocation[k]}
                        </PillButton>
                      ))}
                    </div>
                  </div>

                  {visaQuotaActive && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.labels.visaSpeed}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {(["standard", "vip"] as VisaSpeed[]).map((k) => (
                          <PillButton key={k} active={selections.visaSpeed === k} onClick={() => updateSelection("visaSpeed", k)}>
                            {VISA_SPEED_CONFIG[k].label[lang]}
                          </PillButton>
                        ))}
                      </div>
                      <OptionDescription description={VISA_SPEED_CONFIG[selections.visaSpeed].description} />
                    </div>
                  )}

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.labels.bankAccount}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(["no", "yes"] as BankAccountOption[]).map((k) => (
                        <PillButton key={k} active={selections.bankAccount === k} onClick={() => updateSelection("bankAccount", k)}>
                          {BANK_ACCOUNT_CONFIG[k].label[lang]}
                        </PillButton>
                      ))}
                    </div>
                    <OptionDescription description={BANK_ACCOUNT_CONFIG[selections.bankAccount].description} />
                  </div>
                </div>
                <p className="mt-8 text-[11px] leading-relaxed text-slate-400">{t.sourceNote}</p>
              </div>
            </div>

            <aside className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70 sm:p-8 lg:sticky lg:top-6">
              <h2 className="text-sm font-semibold tracking-[0.16em] text-slate-900 uppercase">{t.resultTitle}</h2>
              <p className="mt-2 text-xs text-slate-500">
                {FREE_ZONE_LABELS[freeZone]} · {subActivity?.label[lang]}
              </p>
              <div className="mt-6 space-y-4 text-sm">
                {[
                  { label: t.breakdown.license, value: breakdown.license },
                  { label: t.breakdown.registration, value: breakdown.registration },
                  { label: t.breakdown.establishment, value: breakdown.establishment },
                  { label: t.breakdown.visas, value: breakdown.visas },
                  ...(breakdown.visaSpeedCost > 0
                    ? [{ label: t.breakdown.visaVip, value: breakdown.visaSpeedCost }]
                    : []),
                  { label: t.breakdown.office, value: breakdown.office },
                  { label: t.breakdown.relocation, value: breakdown.relocationCost },
                  ...(breakdown.bankAccountCost > 0
                    ? [{ label: t.breakdown.bankAccount, value: breakdown.bankAccountCost }]
                    : []),
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="text-slate-600">{row.label}</span>
                    <span className="font-medium text-slate-900">{formatAED(Math.round(row.value))} AED</span>
                  </div>
                ))}
                {breakdown.visaProcessingDays > 0 && (
                  <div className="rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-600 ring-1 ring-slate-100">
                    <span className="font-medium text-slate-800">{t.visaTimeline}: </span>
                    {breakdown.visaProcessingDays} {t.businessDays}
                    {selections.visaSpeed === "vip" ? " (VIP)" : ""}
                  </div>
                )}
                <div className="mt-4 border-t border-dashed border-slate-200 pt-4">
                  <div className="flex items-start justify-between">
                    <span className="font-semibold text-slate-800">{t.breakdown.total}</span>
                    <div className="text-right">
                      <div className="text-2xl font-semibold tracking-[-0.01em] text-slate-900">
                        {formatAED(Math.round(breakdown.total))} AED
                      </div>
                      <div className="text-xs text-slate-500">
                        {lang === "jp" ? `約 ${formatJPY(totalJPY)} 円` : `≈ ${formatJPY(totalJPY)} JPY`}
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
                <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: GOLD }}>{t.recommendationTitle}</p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">{t.recommendationBody}</p>
                <div className="mt-4 space-y-3">
                  {optimizedZones.map((rec) => (
                    <button
                      key={rec.zone}
                      type="button"
                      onClick={() => setFreeZone(rec.zone)}
                      className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-colors ${
                        freeZone === rec.zone ? "border-[#c9a86c] bg-white" : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div>
                        <p className="text-xs font-semibold tracking-[0.14em] text-slate-900">{FREE_ZONE_LABELS[rec.zone]}</p>
                        <p className="mt-1 text-[11px] text-slate-500">{rec.reason[lang]}</p>
                      </div>
                      <p className="text-xs font-medium text-slate-700">{formatAED(Math.round(rec.total))} AED</p>
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-slate-500">{t.recommendationNote}</p>
              </div>

              <button
                type="button"
                onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
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
            <p className="text-xs font-medium uppercase tracking-[0.35em]" style={{ color: GOLD }}>CONTACT</p>
            <h2 className="mt-4 text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl">{t.contact.title}</h2>
            <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base">{t.contact.body}</p>
            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = buildMailto(customer, selections, freeZone, breakdown, aedToJpy, lang);
              }}
            >
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.contact.fields.message}</span>
                <textarea className={inputClass} rows={5} value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} />
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition hover:opacity-95" style={{ backgroundColor: GOLD }}>
                {t.contact.submit}
              </button>
              <p className="text-xs leading-relaxed text-slate-500">{t.contact.note}</p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
