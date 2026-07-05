import type { LangCopy } from "./data";
import type { VisaSpeed } from "./data";

export type ScheduleStep = {
  id: string;
  phase: LangCopy;
  title: LangCopy;
  body: LangCopy;
  optional?: boolean;
  highlight?: boolean;
};

export type AcquisitionSchedule = {
  title: LangCopy;
  subtitle: LangCopy;
  footnote: LangCopy;
  attendNote: LangCopy;
  attendOption: LangCopy;
  steps: ScheduleStep[];
};

const STANDARD_STEPS: ScheduleStep[] = [
  {
    id: "pre",
    phase: { jp: "出国前", en: "Before travel" },
    title: {
      jp: "日本出国の1週間前まで",
      en: "Up to 1 week before leaving Japan",
    },
    body: {
      jp: "顔写真の準備、会社名などの事前申請書類の整理・提出を行います。",
      en: "Prepare passport photos and submit pre-application documents including the planned company name.",
    },
  },
  {
    id: "d1",
    phase: { jp: "1日目", en: "Day 1" },
    title: { jp: "メディカルテスト・指紋登録", en: "Medical test & biometrics" },
    body: {
      jp: "医療機関にてメディカルテストと指紋登録（Emirates ID）を実施します。",
      en: "Medical examination and fingerprint registration (Emirates ID) at an approved centre.",
    },
  },
  {
    id: "d2",
    phase: { jp: "2日目", en: "Day 2" },
    title: { jp: "予備日", en: "Buffer day" },
    body: {
      jp: "行政処理の遅延や追加書類対応に備えた予備日です。",
      en: "Reserved for administrative delays or additional document requests.",
    },
    optional: true,
  },
  {
    id: "d3",
    phase: { jp: "3日目", en: "Day 3" },
    title: { jp: "自由時間", en: "Free time" },
    body: {
      jp: "賃貸物件・商業施設の下見、現地打ち合わせなどに活用できます。※",
      en: "Use for rental viewings, commercial site visits, or local meetings. ※",
    },
    optional: true,
  },
  {
    id: "d4",
    phase: { jp: "4日目", en: "Day 4" },
    title: { jp: "自由時間", en: "Free time" },
    body: {
      jp: "引き続き自由時間。アテンドオプション利用時は不動産視察を集中できます。※",
      en: "Continued free time. With the attend option, focus on property tours. ※",
    },
    optional: true,
  },
  {
    id: "d5",
    phase: { jp: "5日目", en: "Day 5" },
    title: { jp: "ビザ有効化・口座開設", en: "Visa activation & banking" },
    body: {
      jp: "ビザの有効化（ステータス変更）を行い、条件が整えば法人口座開設も可能です。",
      en: "Visa activation (status change); corporate bank account opening when requirements are met.",
    },
    highlight: true,
  },
  {
    id: "done",
    phase: { jp: "完了", en: "Complete" },
    title: { jp: "ビザ受領・出国", en: "Visa issued & departure" },
    body: {
      jp: "ビザを受け取り次第、UAEからの出国が可能です。",
      en: "You may depart the UAE once the residence visa is issued.",
    },
    highlight: true,
  },
];

const VIP_STEPS: ScheduleStep[] = [
  STANDARD_STEPS[0],
  STANDARD_STEPS[1],
  {
    id: "d2vip",
    phase: { jp: "2日目", en: "Day 2" },
    title: { jp: "自由時間", en: "Free time" },
    body: {
      jp: "VIP優先処理により、早い段階で自由時間を確保できる場合があります。※",
      en: "With VIP priority processing, free time may be available earlier. ※",
    },
    optional: true,
  },
  {
    id: "d3vip",
    phase: { jp: "3日目", en: "Day 3" },
    title: { jp: "ビザ有効化・口座開設", en: "Visa activation & banking" },
    body: {
      jp: "営業日3日目を目安にビザ有効化。条件が整えば口座開設も可能です。",
      en: "Target visa activation by business day 3; bank account opening when ready.",
    },
    highlight: true,
  },
  STANDARD_STEPS[6],
];

export function getAcquisitionSchedule(visaSpeed: VisaSpeed): AcquisitionSchedule {
  return {
    title: {
      jp: "取得までの日程",
      en: "Schedule until completion",
    },
    subtitle: {
      jp: "UAE入国後の一般的な流れ（営業日ベースの目安）",
      en: "Typical in-country flow after arrival (business-day estimate)",
    },
    footnote: {
      jp: "※ 健康面・与信面に問題がなければ、自由時間の日程どおり進行可能です。",
      en: "※ If there are no health or credit issues, the schedule can proceed as shown.",
    },
    attendNote: {
      jp: "自由時間の間に賃貸物件や現地不動産を見学したい場合、5日間のアテンドオプションを追加できます。",
      en: "If you would like rental or property viewings during free time, a 5-day local attend option is available.",
    },
    attendOption: {
      jp: "5日間アテンド（不動産視察付き）",
      en: "5-day attend option (with property viewings)",
    },
    steps: visaSpeed === "vip" ? VIP_STEPS : STANDARD_STEPS,
  };
}
