"use client";

import React, { useMemo, useRef, useState } from "react";

type FreeZone = "dmcc" | "ifza" | "meydan" | "rakez" | "spc";
type CompanyType = "freeZone" | "mainland" | "branch";
type VisaOption = "1" | "2_3" | "5_plus";
type OfficeType = "flex" | "small" | "full";
type BusinessType = "consulting" | "trading" | "it" | "restaurant" | "startup";
type Relocation = "yes" | "no";

const AED_TO_JPY = 40;
const GOLD = "#C8A46A";

const TEXT = {
  freeZoneTitle: "フリーゾーンを選択",
  freeZoneDescription:
    "フリーゾーンによってライセンス費用、オフィス条件、ビザ費用が異なります。",
  conditionsTitle: "前提条件を選択してください",
  labels: {
    companyType: "法人形態",
    visas: "ビザ人数",
    office: "オフィスタイプ",
    business: "ビジネスタイプ",
    relocation: "リロケーションサポート",
  },
  resultTitle: "推定設立費用",
  breakdown: {
    license: "ライセンス費用",
    registration: "レジストレーション費用",
    visas: "ビザ関連費用",
    office: "オフィス費用",
    relocation: "リロケーションサポート",
    total: "推定合計コスト",
  },
  recommendationTitle: "おすすめフリーゾーン",
  recommendationBody:
    "選択された条件に基づくコスト試算にもとづき、\n以下のフリーゾーンがコスト面で有利です。",
  ctaButton: "この条件で無料相談する",
  contact: {
    title: "無料相談フォーム",
    body:
      "シミュレーション結果を前提に、条件整理・必要書類・進出スケジュールの目安をご案内します。",
    submit: "送信（メールを起動）",
    note: "※送信ボタンを押すとメールアプリが起動します（フォーム送信の保存は行いません）。",
  },
} as const;

const LABELS = {
  freeZones: {
    dmcc: "DMCC",
    ifza: "IFZA",
    meydan: "Meydan",
    rakez: "RAKEZ",
    spc: "SPC",
  },
  companyType: {
    freeZone: "フリーゾーンカンパニー",
    mainland: "メインランド",
    branch: "支店（ブランチ）",
  },
  visas: {
    "1": "1名",
    "2_3": "2〜3名",
    "5_plus": "5名以上",
  },
  office: {
    flex: "フレキシデスク",
    small: "小規模オフィス",
    full: "プライベートオフィス",
  },
  business: {
    consulting: "コンサルティング",
    trading: "トレーディング",
    it: "IT / テック",
    restaurant: "レストラン",
    startup: "スタートアップ",
  },
  relocation: {
    yes: "必要",
    no: "不要",
  },
} as const;

const COSTS = {
  dmcc: { license: 20000, registration: 9000, office: 20000, visa: 6000 },
  ifza: { license: 12000, registration: 0, office: 8000, visa: 4500 },
  meydan: { license: 15000, registration: 0, office: 10000, visa: 5000 },
  rakez: { license: 11000, registration: 0, office: 6000, visa: 4000 },
  spc: { license: 10500, registration: 0, office: 5500, visa: 4000 },
} as const satisfies Record<
  FreeZone,
  { license: number; registration: number; office: number; visa: number }
>;

const COMPANY_TYPE_ADJ: Record<CompanyType, number> = {
  freeZone: 0,
  mainland: 5000,
  branch: 3000,
};

const VISA_MULTIPLIER: Record<VisaOption, number> = {
  "1": 1,
  "2_3": 2.5,
  "5_plus": 5,
};

const OFFICE_MULTIPLIER: Record<OfficeType, number> = {
  flex: 1,
  small: 1.6,
  full: 2.6,
};

const BUSINESS_ADJ: Record<BusinessType, number> = {
  consulting: 0,
  trading: 4000,
  it: 3000,
  restaurant: 7000,
  startup: 2000,
};

const RELOCATION_COST: Record<Relocation, number> = { yes: 9000, no: 0 };

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

export default function SimulatorPage() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [freeZone, setFreeZone] = useState<FreeZone>("dmcc");
  const [companyType, setCompanyType] = useState<CompanyType>("freeZone");
  const [visas, setVisas] = useState<VisaOption>("1");
  const [officeType, setOfficeType] = useState<OfficeType>("flex");
  const [businessType, setBusinessType] = useState<BusinessType>("consulting");
  const [relocation, setRelocation] = useState<Relocation>("no");

  const calcForZone = (zone: FreeZone) => {
    const base = COSTS[zone];
    const license =
      base.license + COMPANY_TYPE_ADJ[companyType] + BUSINESS_ADJ[businessType];
    const registration = base.registration;
    const visa = base.visa * VISA_MULTIPLIER[visas];
    const office = base.office * OFFICE_MULTIPLIER[officeType];
    const relocationCost = RELOCATION_COST[relocation];
    const total = license + registration + visa + office + relocationCost;
    return { license, registration, visa, office, relocationCost, total };
  };

  const breakdown = useMemo(() => calcForZone(freeZone), [
    freeZone,
    companyType,
    visas,
    officeType,
    businessType,
    relocation,
  ]);

  const cheapestZones = useMemo(() => {
    const zones: FreeZone[] = ["dmcc", "ifza", "meydan", "rakez", "spc"];
    const ranked = zones
      .map((z) => ({ zone: z, total: calcForZone(z).total }))
      .sort((a, b) => a.total - b.total);
    return ranked.slice(0, 2).map((r) => r.zone);
  }, [companyType, visas, officeType, businessType, relocation]);

  const totalJPY = Math.round(breakdown.total * AED_TO_JPY);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="border-b border-[#f0ece5] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800">
            UAE Consulting
          </p>
          <p className="text-xs font-medium tracking-[0.18em] text-slate-500">
            1 AED = {AED_TO_JPY} JPY
          </p>
        </div>
      </header>

      <section className="border-b border-[#f0ece5] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-18 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
              Dubai Company Setup Cost Simulator
            </h1>
            <p className="mt-4 text-base leading-[1.9] text-slate-600 sm:text-lg">
              {TEXT.freeZoneDescription}
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
                  {TEXT.freeZoneTitle}
                </p>
                <p className="mt-2 text-xs text-slate-500">{TEXT.freeZoneDescription}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(Object.keys(LABELS.freeZones) as FreeZone[]).map((z) => (
                    <PillButton key={z} active={freeZone === z} onClick={() => setFreeZone(z)}>
                      {LABELS.freeZones[z]}
                    </PillButton>
                  ))}
                </div>
              </div>

              <h2 className="mt-10 text-sm font-semibold tracking-[0.16em] text-slate-900 uppercase">
                {TEXT.conditionsTitle}
              </h2>

              <div className="mt-8 space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {TEXT.labels.companyType}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(Object.keys(LABELS.companyType) as CompanyType[]).map((k) => (
                      <PillButton key={k} active={companyType === k} onClick={() => setCompanyType(k)}>
                        {LABELS.companyType[k]}
                      </PillButton>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {TEXT.labels.visas}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(Object.keys(LABELS.visas) as VisaOption[]).map((k) => (
                      <PillButton key={k} active={visas === k} onClick={() => setVisas(k)}>
                        {LABELS.visas[k]}
                      </PillButton>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {TEXT.labels.office}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(Object.keys(LABELS.office) as OfficeType[]).map((k) => (
                      <PillButton key={k} active={officeType === k} onClick={() => setOfficeType(k)}>
                        {LABELS.office[k]}
                      </PillButton>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {TEXT.labels.business}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(Object.keys(LABELS.business) as BusinessType[]).map((k) => (
                      <PillButton key={k} active={businessType === k} onClick={() => setBusinessType(k)}>
                        {LABELS.business[k]}
                      </PillButton>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {TEXT.labels.relocation}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(Object.keys(LABELS.relocation) as Relocation[]).map((k) => (
                      <PillButton key={k} active={relocation === k} onClick={() => setRelocation(k)}>
                        {LABELS.relocation[k]}
                      </PillButton>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70 sm:p-8 lg:sticky lg:top-6">
              <h2 className="text-sm font-semibold tracking-[0.16em] text-slate-900 uppercase">
                {TEXT.resultTitle}
              </h2>

              <div className="mt-6 space-y-4 text-sm">
                {[
                  { label: TEXT.breakdown.license, value: breakdown.license },
                  { label: TEXT.breakdown.registration, value: breakdown.registration },
                  { label: TEXT.breakdown.visas, value: breakdown.visa },
                  { label: TEXT.breakdown.office, value: breakdown.office },
                  { label: TEXT.breakdown.relocation, value: breakdown.relocationCost },
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
                    <span className="font-semibold text-slate-800">{TEXT.breakdown.total}</span>
                    <div className="text-right">
                      <div className="text-2xl font-semibold tracking-[-0.01em] text-slate-900">
                        {formatAED(Math.round(breakdown.total))} AED
                      </div>
                      <div className="text-xs text-slate-500">約 {formatJPY(totalJPY)} 円</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50/60 p-5 ring-1 ring-slate-100/70">
                <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: GOLD }}>
                  {TEXT.recommendationTitle}
                </p>
                <p className="mt-3 whitespace-pre-line text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {TEXT.recommendationBody}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cheapestZones.map((z) => (
                    <span
                      key={z}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-[0.14em] text-slate-800"
                    >
                      {LABELS.freeZones[z]}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
                  ※同条件での合計が最も低いフリーゾーン（上位）を表示しています。
                </p>
              </div>

              <button
                type="button"
                onClick={scrollToContact}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition hover:opacity-95"
                style={{ backgroundColor: GOLD }}
              >
                {TEXT.ctaButton}
              </button>
            </aside>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="border-t border-[#f0ece5] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-100/70 sm:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.35em]" style={{ color: GOLD }}>
              CONTACT
            </p>
            <h2 className="mt-4 text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl">
              {TEXT.contact.title}
            </h2>
            <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base">
              {TEXT.contact.body}
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:contact@example.com";
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Name
                  </span>
                  <input
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-slate-300"
                    placeholder="お名前"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Email
                  </span>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-slate-300"
                    placeholder="email@example.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Message
                </span>
                <textarea
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-slate-300"
                  rows={5}
                  placeholder="ご相談内容（任意）"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition hover:opacity-95"
                style={{ backgroundColor: GOLD }}
              >
                {TEXT.contact.submit}
              </button>
              <p className="text-xs leading-relaxed text-slate-500">{TEXT.contact.note}</p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
