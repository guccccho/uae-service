"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLang } from "../lang-context";
import { LangSwitch } from "../components/LangSwitch";
import { pickLang, type Lang, type LangCopy } from "../i18n";
import {
  COUNTRY_OPTIONS,
  MAJOR_ACTIVITIES,
  SHAREHOLDER_OPTIONS,
  TIMELINE_OPTIONS,
  getAllowedZones,
  getMajorActivity,
  getSubActivity,
  HINODEYA_SIMULATOR_ZONES,
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
  HINODEYA_SERVICE_NOTE,
  RAKEZ_PRICING_NOTE,
  type BankAccountOption,
  type FreeZone,
  type Relocation,
  type SimulatorSelections,
  type VisaSpeed,
} from "./data";
import { VisaAcquisitionSchedule } from "./ScheduleTimeline";
import ZoneShowcase, { ZoneLogo } from "./ZoneShowcase";

const BRAND = "#bc002d";
const FALLBACK_AED_JPY = 40;

type ExchangeRateData = {
  rate: number;
  date: string;
  label: LangCopy;
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
      "HINODEYAがサポートするDMCC・RAKEZの2ゾーンから、ライセンスアクティビティと設立条件に最適な方を自動で提案します。",
    customerTitle: "お客様情報",
    customerNote: "シミュレーション結果とあわせて無料相談に活用できます。",
    activityTitle: "ライセンスアクティビティ",
    majorActivity: "大業種",
    subActivity: "中業種（ライセンスアクティビティ）",
    freeZoneTitle: "フリーゾーン（DMCC / RAKEZ）",
    freeZoneFiltered: "HINODEYA対応ゾーン。アクティビティに応じて最適なゾーンが自動選択されます。",
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
      governmentExtras: "政府・移民局手続き（E-channel等）",
      directCost: "フリーゾーン・政府費用（小計）",
      visas: "ビザ関連費用",
      office: "オフィス追加費用",
      relocation: "リロケーションサポート",
      visaVip: "ビザVIP優先処理",
      bankAccount: "口座開設サポート",
      hinodeyaService: "サービス料",
      total: "推定合計コスト",
    },
    visaTimeline: "ビザ取得目安",
    businessDays: "営業日",
    recommendationTitle: "推奨フリーゾーン（DMCC / RAKEZ）",
    recommendationBody:
      "選択したアクティビティと設立条件に基づき、DMCCまたはRAKEZのうち最適なゾーンを推奨します。",
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
      "HINODEYA supports DMCC and RAKEZ. We automatically recommend the best fit for your licence activity and setup profile.",
    customerTitle: "Your profile",
    customerNote: "Used together with the simulation for your free consultation.",
    activityTitle: "Licence activity",
    majorActivity: "Major sector",
    subActivity: "Sub-sector (licence activity)",
    freeZoneTitle: "Free zone (DMCC / RAKEZ)",
    freeZoneFiltered: "HINODEYA-supported zones. The best match is auto-selected from your activity.",
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
      governmentExtras: "Government / immigration (E-channel etc.)",
      directCost: "Zone & government subtotal",
      visas: "Visa-related",
      office: "Office upgrade",
      relocation: "Relocation support",
      visaVip: "Visa VIP priority",
      bankAccount: "Bank account support",
      hinodeyaService: "Service fee",
      total: "Estimated total",
    },
    visaTimeline: "Visa processing estimate",
    businessDays: "business days",
    recommendationTitle: "Recommended free zone (DMCC / RAKEZ)",
    recommendationBody:
      "Based on your activity and setup assumptions, we recommend either DMCC or RAKEZ as the best fit.",
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
  ar: {
    freeZoneDescription:
      "يدعم HINODEYA منطقتي DMCC وRAKEZ. نوصي تلقائياً بالخيار الأنسب لنشاط الترخيص وملف التأسيس.",
    customerTitle: "ملفك الشخصي",
    customerNote: "يُستخدم مع نتيجة المحاكاة في استشارتك المجانية.",
    activityTitle: "نشاط الترخيص",
    majorActivity: "القطاع الرئيسي",
    subActivity: "القطاع الفرعي (نشاط الترخيص)",
    freeZoneTitle: "المنطقة الحرة (DMCC / RAKEZ)",
    freeZoneFiltered: "مناطق مدعومة من HINODEYA. يُختار الأنسب تلقائياً حسب النشاط.",
    freeZoneUnavailable: "غير مؤهل لهذا النشاط",
    conditionsTitle: "افتراضات التأسيس",
    sourceNote: "تقديرات مبنية على التسعير الرسمي لكل منطقة حرة (2024–2026).",
    labels: {
      companyType: "نوع الكيان القانوني",
      visas: "حصة التأشيرات",
      office: "نوع المكتب",
      relocation: "دعم الانتقال",
      visaSpeed: "سرعة معالجة التأشيرة",
      bankAccount: "دعم فتح الحساب البنكي",
      companyName: "اسم الشركة (مخطط)",
      contactName: "اسم جهة الاتصال",
      email: "البريد الإلكتروني",
      country: "بلد المنشأ",
      timeline: "التوقيت المخطط للتأسيس",
      shareholders: "المساهمون (مخطط)",
    },
    resultTitle: "تكلفة التأسيس المقدرة",
    breakdown: {
      license: "الترخيص / الحزمة",
      registration: "التسجيل وعقد التأسيس",
      establishment: "بطاقة التأسيس",
      governmentExtras: "الحكومة / الهجرة (E-channel وغيرها)",
      directCost: "المجموع الفرعي للمنطقة والحكومة",
      visas: "متعلق بالتأشيرات",
      office: "ترقية المكتب",
      relocation: "دعم الانتقال",
      visaVip: "أولوية VIP للتأشيرة",
      bankAccount: "دعم فتح الحساب البنكي",
      hinodeyaService: "رسوم الخدمة",
      total: "الإجمالي المقدر",
    },
    visaTimeline: "تقدير معالجة التأشيرة",
    businessDays: "أيام عمل",
    recommendationTitle: "المنطقة الحرة الموصى بها (DMCC / RAKEZ)",
    recommendationBody:
      "بناءً على نشاطك وافتراضات التأسيس، نوصي بـ DMCC أو RAKEZ كالأنسب.",
    recommendationNote:
      "ملاحظة: الأنشطة الخاضعة للتنظيم (المالية، العملات الرقمية، إلخ) قد تتطلب موافقات إضافية من الجهات التنظيمية بخلاف ترخيص المنطقة الحرة.",
    ctaButton: "احجز استشارة مجانية",
    contact: {
      title: "استشارة مجانية",
      body: "باستخدام نتيجة المحاكاة كأساس، نساعدك في توضيح المتطلبات والمستندات والجدول الزمني العام.",
      submit: "إرسال (يفتح البريد)",
      note: "الإرسال يفتح تطبيق البريد. لا نحفظ إرسالات النموذج على هذا الموقع.",
      fields: { message: "الرسالة (اختياري)" },
    },
    relocation: { yes: "نعم", no: "لا" },
  },
} as const;

const PAGE_TITLE: LangCopy = {
  jp: "ドバイ会社設立コストシミュレーター",
  en: "Dubai Company Setup Cost Simulator",
  ar: "محاكي تكلفة تأسيس شركة في دبي",
};

const SOURCE_PREFIX: LangCopy = {
  jp: "出典: ",
  en: "Source: ",
  ar: "المصدر: ",
};

const TOP_BADGE: LangCopy = {
  jp: "推奨",
  en: "TOP",
  ar: "الأفضل",
};

const JPY_APPROX: Record<Lang, (n: string) => string> = {
  jp: (n) => `約 ${n} 円`,
  en: (n) => `≈ ${n} JPY`,
  ar: (n) => `≈ ${n} ين ياباني`,
};

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
      style={active && !disabled ? { backgroundColor: BRAND, borderColor: BRAND } : undefined}
    >
      {children}
    </button>
  );
}

function OptionDescription({ description }: { description: LangCopy }) {
  const { lang } = useLang();
  return (
    <p className="mt-2 text-xs leading-relaxed text-slate-500">
      {pickLang(description, lang)}
    </p>
  );
}

function buildMailto(
  customer: CustomerProfile,
  selections: SimulatorSelections,
  freeZone: FreeZone,
  breakdown: ReturnType<typeof calculateZoneCost>,
  aedToJpy: number,
  lang: Lang,
  localAttend: boolean,
) {
  const major = getMajorActivity(selections.majorActivity);
  const sub = getSubActivity(selections.majorActivity, selections.subActivity);
  const subjectByLang: Record<Lang, string> = {
    jp: `【HINODEYA】設立シミュレーション相談 — ${customer.companyName || customer.contactName || "新規"}`,
    en: `[HINODEYA] Setup simulation enquiry — ${customer.companyName || customer.contactName || "New"}`,
    ar: `[HINODEYA] استفسار محاكاة التأسيس — ${customer.companyName || customer.contactName || "جديد"}`,
  };
  const subject = subjectByLang[lang];

  const L: Record<Lang, Record<string, string>> = {
    jp: {
      profile: "■ お客様情報",
      company: "会社名",
      contact: "担当者",
      email: "メール",
      country: "所在国",
      activity: "■ ライセンスアクティビティ",
      major: "大業種",
      sub: "中業種",
      result: "■ シミュレーション結果",
      zone: "フリーゾーン",
      total: "推定合計",
      direct: "フリーゾーン・政府費用",
      service: "サービス料",
      visa: "ビザ取得目安",
      days: "営業日",
      bank: "口座開設サポート",
      attend: "5日間アテンド（不動産視察）",
      attendYes: "希望あり",
    },
    en: {
      profile: "■ Profile",
      company: "Company",
      contact: "Contact",
      email: "Email",
      country: "Country",
      activity: "■ Licence activity",
      major: "Major",
      sub: "Sub-sector",
      result: "■ Simulation result",
      zone: "Free zone",
      total: "Estimated total",
      direct: "Zone & government subtotal",
      service: "Service fee",
      visa: "Visa timeline",
      days: "business days",
      bank: "Bank account support",
      attend: "5-day attend (property viewings)",
      attendYes: "Requested",
    },
    ar: {
      profile: "■ الملف الشخصي",
      company: "الشركة",
      contact: "جهة الاتصال",
      email: "البريد الإلكتروني",
      country: "البلد",
      activity: "■ نشاط الترخيص",
      major: "القطاع الرئيسي",
      sub: "القطاع الفرعي",
      result: "■ نتيجة المحاكاة",
      zone: "المنطقة الحرة",
      total: "الإجمالي المقدر",
      direct: "المجموع الفرعي للمنطقة والحكومة",
      service: "رسوم الخدمة",
      visa: "جدول التأشيرة",
      days: "أيام عمل",
      bank: "دعم فتح الحساب البنكي",
      attend: "مرافقة 5 أيام (معاينة عقارات)",
      attendYes: "مطلوب",
    },
  };
  const l = L[lang];
  const countryOpt = COUNTRY_OPTIONS.find((c) => c.id === customer.country);

  const body = [
    l.profile,
    `${l.company}: ${customer.companyName || "—"}`,
    `${l.contact}: ${customer.contactName || "—"}`,
    `${l.email}: ${customer.email || "—"}`,
    `${l.country}: ${countryOpt ? pickLang(countryOpt.label, lang) : customer.country}`,
    "",
    l.activity,
    `${l.major}: ${major ? pickLang(major.label, lang) : ""}`,
    `${l.sub}: ${sub ? pickLang(sub.label, lang) : ""}`,
    "",
    l.result,
    `${l.zone}: ${FREE_ZONE_LABELS[freeZone]}`,
    `${l.total}: ${formatAED(Math.round(breakdown.total))} AED (≈ ${formatJPY(Math.round(breakdown.total * aedToJpy))} JPY)`,
    `${l.direct}: ${formatAED(Math.round(breakdown.directCost))} AED`,
    `${l.service}: ${formatAED(Math.round(breakdown.hinodeyaServiceFee))} AED`,
    breakdown.visaProcessingDays > 0
      ? `${l.visa}: ${breakdown.visaProcessingDays} ${l.days}${selections.visaSpeed === "vip" ? " (VIP)" : ""}`
      : "",
    selections.bankAccount === "yes"
      ? `${l.bank}: +${formatAED(BANK_ACCOUNT_CONFIG.yes.cost)} AED`
      : "",
    localAttend ? `${l.attend}: ${l.attendYes}` : "",
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
  const [freeZone, setFreeZone] = useState<FreeZone>("rakez");
  const [selections, setSelections] = useState<SimulatorSelections>(() =>
    getDefaultSelections("rakez"),
  );
  const [exchangeRate, setExchangeRate] = useState<ExchangeRateData | null>(null);
  const [contactMessage, setContactMessage] = useState("");
  const [localAttend, setLocalAttend] = useState(false);

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
            label: { jp: "レート取得不可（参考値）", en: "Rate unavailable (fallback)", ar: "السعر غير متاح (قيمة مرجعية)" },
          });
        }
      });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const top = rankZonesByActivity(selections)[0]?.zone;
    if (top) setFreeZone(top);
  }, [selections.majorActivity, selections.subActivity]);

  useEffect(() => {
    if (!allowedZones.includes(freeZone)) {
      const top = rankZonesByActivity(selections)[0]?.zone ?? allowedZones[0];
      if (top) setFreeZone(top);
    }
  }, [allowedZones, freeZone, selections]);

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
    () => rankZonesByActivity(selections),
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
      <header className="border-b border-[#f0e4e6] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <a href="/" className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-800 hover:text-slate-900">
            HINODEYA UAE Consulting
          </a>
          <div className="flex items-center gap-5">
            <p className="hidden text-xs font-medium tracking-[0.18em] text-slate-500 sm:block">
              1 AED = {aedToJpy.toFixed(2)} JPY
              {exchangeRate && (
                <span className="ml-1 text-slate-400">({pickLang(exchangeRate.label, lang)})</span>
              )}
            </p>
            <LangSwitch lang={lang} setLang={setLang} />
          </div>
        </div>
      </header>

      <section className="border-b border-[#f0e4e6] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-light tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
              {pickLang(PAGE_TITLE, lang)}
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
                        <option key={c.id} value={c.id}>{pickLang(c.label, lang)}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.labels.timeline}</span>
                    <select className={inputClass} value={customer.timeline} onChange={(e) => setCustomer((p) => ({ ...p, timeline: e.target.value as CustomerProfile["timeline"] }))}>
                      {TIMELINE_OPTIONS.map((o) => (
                        <option key={o.id} value={o.id}>{pickLang(o.label, lang)}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.labels.shareholders}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SHAREHOLDER_OPTIONS.map((o) => (
                      <PillButton key={o.id} active={customer.shareholderCount === o.id} onClick={() => setCustomer((p) => ({ ...p, shareholderCount: o.id }))}>
                        {pickLang(o.label, lang)}
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
                          {pickLang(m.label, lang)}
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
                          {pickLang(s.label, lang)}
                        </PillButton>
                      ))}
                    </div>
                    {subActivity && <OptionDescription description={subActivity.description} />}
                    {subActivity?.regulated && subActivity.regulatoryNote && (
                      <p className="mt-2 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800 ring-1 ring-amber-100">
                        {pickLang(subActivity.regulatoryNote, lang)}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/70 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.freeZoneTitle}</p>
                <p className="mt-2 text-xs text-slate-500">{t.freeZoneFiltered}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {HINODEYA_SIMULATOR_ZONES.map((z) => {
                    const eligible = allowedZones.includes(z);
                    return (
                      <PillButton key={z} active={freeZone === z} disabled={!eligible} onClick={() => eligible && setFreeZone(z)}>
                        <span className="inline-flex items-center gap-2">
                          <ZoneLogo zone={z} className="h-4 w-auto max-w-[72px] object-contain opacity-90" />
                          {FREE_ZONE_LABELS[z]}
                        </span>
                      </PillButton>
                    );
                  })}
                </div>
                {(freeZone === "dmcc" || freeZone === "rakez") && (
                  <ZoneShowcase zone={freeZone} lang={lang} />
                )}
                {!allowedZones.includes(freeZone) && (
                  <p className="mt-2 text-xs text-amber-700">{t.freeZoneUnavailable}</p>
                )}
                <p className="mt-3 text-[11px] text-slate-400">
                  {pickLang(SOURCE_PREFIX, lang)}
                  <a href={zoneConfig.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
                    {pickLang(zoneConfig.sourceLabel, lang)}
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
                            {pickLang(option.label, lang)}
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
                            {pickLang(VISA_SPEED_CONFIG[k].label, lang)}
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
                          {pickLang(BANK_ACCOUNT_CONFIG[k].label, lang)}
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
                {FREE_ZONE_LABELS[freeZone]} · {subActivity ? pickLang(subActivity.label, lang) : ""}
              </p>
              {(freeZone === "dmcc" || freeZone === "rakez") && (
                <div className="mt-4 flex justify-center">
                  <ZoneLogo zone={freeZone} className="h-7 w-auto max-w-[160px] object-contain opacity-90" />
                </div>
              )}
              <div className="mt-6 space-y-4 text-sm">
                {[
                  { label: t.breakdown.license, value: breakdown.license },
                  ...(breakdown.registration > 0
                    ? [{ label: t.breakdown.registration, value: breakdown.registration }]
                    : []),
                  ...(breakdown.establishment > 0
                    ? [{ label: t.breakdown.establishment, value: breakdown.establishment }]
                    : []),
                  ...(breakdown.governmentExtras > 0
                    ? [{ label: t.breakdown.governmentExtras, value: breakdown.governmentExtras }]
                    : []),
                  ...(breakdown.visas > 0
                    ? [{ label: t.breakdown.visas, value: breakdown.visas }]
                    : []),
                  ...(breakdown.visaSpeedCost > 0
                    ? [{ label: t.breakdown.visaVip, value: breakdown.visaSpeedCost }]
                    : []),
                  ...(breakdown.office > 0
                    ? [{ label: t.breakdown.office, value: breakdown.office }]
                    : []),
                  ...(breakdown.relocationCost > 0
                    ? [{ label: t.breakdown.relocation, value: breakdown.relocationCost }]
                    : []),
                  ...(breakdown.bankAccountCost > 0
                    ? [{ label: t.breakdown.bankAccount, value: breakdown.bankAccountCost }]
                    : []),
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="text-slate-600">{row.label}</span>
                    <span className="font-medium text-slate-900">{formatAED(Math.round(row.value))} AED</span>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
                  <span className="font-medium text-slate-700">{t.breakdown.directCost}</span>
                  <span className="font-semibold text-slate-900">{formatAED(Math.round(breakdown.directCost))} AED</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">{t.breakdown.hinodeyaService}</span>
                  <span className="font-medium text-slate-900">{formatAED(Math.round(breakdown.hinodeyaServiceFee))} AED</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-400">
                  {pickLang(HINODEYA_SERVICE_NOTE, lang)}
                </p>
                {freeZone === "rakez" && visaQuotaActive && (
                  <p className="text-[11px] leading-relaxed text-amber-700/90">{pickLang(RAKEZ_PRICING_NOTE, lang)}</p>
                )}
                {breakdown.visaProcessingDays > 0 && (
                  <div className="rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-600 ring-1 ring-slate-100">
                    <span className="font-medium text-slate-800">{t.visaTimeline}: </span>
                    {breakdown.visaProcessingDays} {t.businessDays}
                    {selections.visaSpeed === "vip" ? " (VIP)" : ""}
                  </div>
                )}

                {visaQuotaActive && (
                  <VisaAcquisitionSchedule
                    visaSpeed={selections.visaSpeed}
                    showAttendOption
                    attendSelected={localAttend}
                    onAttendChange={setLocalAttend}
                  />
                )}

                <div className="mt-4 border-t border-dashed border-slate-200 pt-4">
                  <div className="flex items-start justify-between">
                    <span className="font-semibold text-slate-800">{t.breakdown.total}</span>
                    <div className="text-right">
                      <div className="text-2xl font-semibold tracking-[-0.01em] text-slate-900">
                        {formatAED(Math.round(breakdown.total))} AED
                      </div>
                      <div className="text-xs text-slate-500">
                        {JPY_APPROX[lang](formatJPY(totalJPY))}
                      </div>
                      {exchangeRate && (
                        <div className="mt-1 text-[10px] text-slate-400">
                          1 AED = {aedToJpy.toFixed(2)} JPY · {pickLang(exchangeRate.label, lang)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50/60 p-5 ring-1 ring-slate-100/70">
                <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND }}>{t.recommendationTitle}</p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">{t.recommendationBody}</p>
                <div className="mt-4 space-y-3">
                  {optimizedZones.map((rec) => (
                    <button
                      key={rec.zone}
                      type="button"
                      onClick={() => setFreeZone(rec.zone)}
                      className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                        freeZone === rec.zone ? "border-brand bg-white" : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          {(rec.zone === "dmcc" || rec.zone === "rakez") && (
                            <ZoneLogo zone={rec.zone} className="h-5 w-auto max-w-[80px] shrink-0 object-contain" />
                          )}
                          <p className="text-xs font-semibold tracking-[0.14em] text-slate-900">
                            {FREE_ZONE_LABELS[rec.zone]}
                            {rec.rank === 1 && (
                              <span className="ml-2 rounded-full bg-brand/15 px-2 py-0.5 text-[9px] font-semibold tracking-[0.12em] text-brand-hover">
                                {pickLang(TOP_BADGE, lang)}
                              </span>
                            )}
                          </p>
                        </div>
                        <p className="mt-1 text-[11px] text-slate-500">{pickLang(rec.reason, lang)}</p>
                      </div>
                      <p className="shrink-0 text-xs font-medium text-slate-700">{formatAED(Math.round(rec.total))} AED</p>
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-slate-500">{t.recommendationNote}</p>
              </div>

              <button
                type="button"
                onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition hover:opacity-95"
                style={{ backgroundColor: BRAND }}
              >
                {t.ctaButton}
              </button>
            </aside>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="border-t border-[#f0e4e6] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-100/70 sm:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.35em]" style={{ color: BRAND }}>CONTACT</p>
            <h2 className="mt-4 text-2xl font-light tracking-[-0.03em] text-slate-900 sm:text-3xl">{t.contact.title}</h2>
            <p className="mt-4 text-sm leading-[1.9] text-slate-600 sm:text-base">{t.contact.body}</p>
            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = buildMailto(customer, selections, freeZone, breakdown, aedToJpy, lang, localAttend);
              }}
            >
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.contact.fields.message}</span>
                <textarea className={inputClass} rows={5} value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} />
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition hover:opacity-95" style={{ backgroundColor: BRAND }}>
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
