"use client";

import { useLang } from "../lang-context";
import { getAcquisitionSchedule } from "./schedule";
import type { VisaSpeed } from "./data";

const GOLD = "#C8A46A";

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
        style={{ color: GOLD }}
      >
        {schedule.title[lang]}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-slate-500">
        {schedule.subtitle[lang]}
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
              style={step.highlight ? { backgroundColor: GOLD } : undefined}
            >
              {index + 1}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                {step.phase[lang]}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                {step.title[lang]}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                {step.body[lang]}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
        {schedule.footnote[lang]}
      </p>

      {showAttendOption && (
        <div className="mt-5 rounded-xl border border-dashed border-slate-200 bg-white p-4">
          <p className="text-xs leading-relaxed text-slate-600">
            {schedule.attendNote[lang]}
          </p>
          <label className="mt-3 flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={attendSelected}
              onChange={(e) => onAttendChange(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-[#c9a86c] focus:ring-[#c9a86c]"
            />
            <span className="text-xs text-slate-700">
              <span className="font-medium">{schedule.attendOption[lang]}</span>
              <span className="mt-1 block text-slate-500">
                {lang === "jp"
                  ? "詳細・料金は無料相談時にご案内します。"
                  : "Details and pricing provided during your free consultation."}
              </span>
            </span>
          </label>
          <a
            href="/dubai-business-tour"
            className="mt-3 inline-block text-[11px] font-medium text-slate-600 underline-offset-2 hover:text-slate-900 hover:underline"
          >
            {lang === "jp"
              ? "ドバイ視察プログラムを見る →"
              : "View Dubai business tour program →"}
          </a>
        </div>
      )}
    </div>
  );
}
