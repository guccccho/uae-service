"use client";

import { useLang } from "../lang-context";
import { pickLang, type LangCopy } from "../i18n";
import { getAcquisitionSchedule } from "./schedule";
import type { VisaSpeed } from "./data";

const BRAND = "#bc002d";

const ATTEND_DETAIL: LangCopy = {
  jp: "現地同行プログラム ¥500,000〜（詳細は視察プログラムページをご覧ください）",
  en: "On-site advisory program from ¥500,000 (see the tour program page for details).",
  ar: "برنامج استشاري ميداني من ¥500,000 (راجع صفحة برنامج الجولة للتفاصيل).",
};

const TOUR_LINK: LangCopy = {
  jp: "ドバイ視察プログラムを見る →",
  en: "View Dubai business tour program →",
  ar: "عرض برنامج جولة الأعمال في دبي →",
};

export function VisaAcquisitionSchedule({
  visaSpeed,
  showAttendOption,
  attendSelected,
  onAttendChange,
}: {
  visaSpeed: VisaSpeed;
  showAttendOption: boolean;
  attendSelected: boolean;
  onAttendChange: (value: boolean) => void;
}) {
  const { lang } = useLang();
  const schedule = getAcquisitionSchedule(visaSpeed);

  return (
    <div className="mt-8 rounded-2xl bg-slate-50/60 p-5 ring-1 ring-slate-100/70">
      <p
        className="text-xs font-semibold uppercase tracking-[0.16em]"
        style={{ color: BRAND }}
      >
        {pickLang(schedule.title, lang)}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-slate-500">
        {pickLang(schedule.subtitle, lang)}
      </p>

      <ol className="mt-5 space-y-0">
        {schedule.steps.map((step, index) => (
          <li key={step.id} className="relative flex gap-4 pb-6 last:pb-0">
            {index < schedule.steps.length - 1 && (
              <span
                className="absolute left-[11px] top-6 h-[calc(100%-12px)] w-px bg-slate-200"
                aria-hidden
              />
            )}
            <div
              className={`relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                step.highlight
                  ? "text-white"
                  : step.optional
                    ? "border border-slate-300 bg-white text-slate-500"
                    : "border border-slate-200 bg-white text-slate-700"
              }`}
              style={step.highlight ? { backgroundColor: BRAND } : undefined}
            >
              {index + 1}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                {pickLang(step.phase, lang)}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                {pickLang(step.title, lang)}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                {pickLang(step.body, lang)}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
        {pickLang(schedule.footnote, lang)}
      </p>

      {showAttendOption && (
        <div className="mt-5 rounded-xl border border-dashed border-slate-200 bg-white p-4">
          <p className="text-xs leading-relaxed text-slate-600">
            {pickLang(schedule.attendNote, lang)}
          </p>
          <label className="mt-3 flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={attendSelected}
              onChange={(e) => onAttendChange(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand"
            />
            <span className="text-xs text-slate-700">
              <span className="font-medium">{pickLang(schedule.attendOption, lang)}</span>
              <span className="mt-1 block text-slate-500">
                {pickLang(ATTEND_DETAIL, lang)}
              </span>
            </span>
          </label>
          <a
            href="/dubai-business-tour"
            className="mt-3 inline-block text-[11px] font-medium text-slate-600 underline-offset-2 hover:text-slate-900 hover:underline"
          >
            {pickLang(TOUR_LINK, lang)}
          </a>
        </div>
      )}
    </div>
  );
}
