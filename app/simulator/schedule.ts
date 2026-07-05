import type { LangCopy } from "../i18n";
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
    phase: { jp: "出国前", en: "Before travel", ar: "قبل السفر" },
    title: {
      jp: "日本出国の1週間前まで",
      en: "Up to 1 week before leaving Japan",

      ar: "حتى أسبوع قبل مغادرة اليابان",
    },
    body: {
      jp: "顔写真の準備、会社名などの事前申請書類の整理・提出を行います。",
      en: "Prepare passport photos and submit pre-application documents including the planned company name.",

      ar: "تحضير صور جواز السفر وتقديم مستندات ما قبل التقديم بما في ذلك اسم الشركة المخطط.",
    },
  },
  {
    id: "d1",
    phase: { jp: "1日目", en: "Day 1", ar: "اليوم 1" },
    title: {
      jp: "メディカルチェック・EID登録",
      en: "Medical check & Emirates ID registration",
      ar: "الفحص الطبي وتسجيل هوية الإمارات",
    },
    body: {
      jp: "医療機関でのメディカルチェックと、Emirates IDの指紋・顔写真登録を行います。",
      en: "Medical examination at an approved centre, plus Emirates ID fingerprint and photo registration.",

      ar: "الفحص الطبي في مركز معتمد، بالإضافة إلى تسجيل البصمات والصورة لهوية الإمارات.",
    },
  },
  {
    id: "d2",
    phase: { jp: "2日目", en: "Day 2", ar: "اليوم 2" },
    title: { jp: "予備日", en: "Buffer day", ar: "يوم احتياطي" },
    body: {
      jp: "EID登録の遅延や追加書類対応、行政処理のバッファに充てる予備日です。",
      en: "Reserved for EID registration delays, extra documents, or other administrative hold-ups.",

      ar: "محجوز لتأخيرات تسجيل الهوية أو المستندات الإضافية أو التأخيرات الإدارية.",
    },
    optional: true,
  },
  {
    id: "d3",
    phase: { jp: "3日目", en: "Day 3", ar: "اليوم 3" },
    title: { jp: "自由時間", en: "Free time", ar: "وقت حر" },
    body: {
      jp: "賃貸物件・商業施設の下見、現地打ち合わせなどに活用できます。※",
      en: "Use for rental viewings, commercial site visits, or local meetings. ※",

      ar: "لمعاينة الإيجارات أو زيارات المواقع التجارية أو الاجتماعات المحلية. ※",
    },
    optional: true,
  },
  {
    id: "d4",
    phase: { jp: "4日目", en: "Day 4", ar: "اليوم 4" },
    title: { jp: "自由時間", en: "Free time", ar: "وقت حر" },
    body: {
      jp: "引き続き自由時間。アテンドオプション利用時は不動産視察を集中できます。※",
      en: "Continued free time. With the attend option, focus on property tours. ※",

      ar: "وقت حر مستمر. مع خيار المرافقة، ركز على جولات العقارات. ※",
    },
    optional: true,
  },
  {
    id: "d5",
    phase: { jp: "5日目", en: "Day 5", ar: "اليوم 5" },
    title: { jp: "ビザ有効化・口座開設", en: "Visa activation & banking", ar: "تفعيل التأشيرة والخدمات المصرفية" },
    body: {
      jp: "ビザの有効化（ステータス変更）を行い、条件が整えば法人口座開設も可能です。",
      en: "Visa activation (status change); corporate bank account opening when requirements are met.",

      ar: "تفعيل التأشيرة (تغيير الحالة)؛ فتح حساب بنكي للشركة عند استيفاء المتطلبات.",
    },
    highlight: true,
  },
  {
    id: "done",
    phase: { jp: "完了", en: "Complete", ar: "مكتمل" },
    title: { jp: "ビザ受領・出国", en: "Visa issued & departure", ar: "إصدار التأشيرة والمغادرة" },
    body: {
      jp: "ビザを受け取り次第、UAEからの出国が可能です。",
      en: "You may depart the UAE once the residence visa is issued.",

      ar: "يمكنك مغادرة الإمارات بمجرد إصدار تأشيرة الإقامة.",
    },
    highlight: true,
  },
];

const VIP_STEPS: ScheduleStep[] = [
  STANDARD_STEPS[0],
  STANDARD_STEPS[1],
  STANDARD_STEPS[2],
  {
    id: "d3vip",
    phase: { jp: "3日目", en: "Day 3", ar: "اليوم 3" },
    title: { jp: "ビザ有効化", en: "Visa activation", ar: "تفعيل التأشيرة" },
    body: {
      jp: "VIP優先処理により、営業日3日目を目安にビザの有効化（ステータス変更）を行います。",
      en: "With VIP priority processing, visa activation (status change) is targeted by business day 3.",

      ar: "مع المعالجة الأولوية VIP، يُستهدف تفعيل التأشيرة (تغيير الحالة) بحلول اليوم الثالث من أيام العمل.",
    },
    highlight: true,
  },
  STANDARD_STEPS[4],
  {
    id: "d5vip",
    phase: { jp: "5日目", en: "Day 5", ar: "اليوم 5" },
    title: { jp: "口座開設・まとめ", en: "Banking & wrap-up", ar: "الخدمات المصرفية والختام" },
    body: {
      jp: "条件が整えば法人口座開設を進め、視察内容の整理と次のステップを確認します。",
      en: "Proceed with corporate bank account opening when ready; review site visits and next steps.",

      ar: "المضي في فتح الحساب البنكي للشركة عند الجاهزية؛ مراجعة الزيارات والخطوات التالية.",
    },
    highlight: true,
  },
  STANDARD_STEPS[6],
];

export const ATTEND_PROGRAM_STEPS: ScheduleStep[] = [
  STANDARD_STEPS[1],
  STANDARD_STEPS[2],
  {
    id: "a3",
    phase: { jp: "3日目", en: "Day 3", ar: "اليوم 3" },
    title: {
      jp: "不動産・商業施設視察",
      en: "Property & commercial site visits",
      ar: "معاينة العقارات والمواقع التجارية",
    },
    body: {
      jp: "HINODEYAスタッフが同行し、賃貸物件・居住エリア・商業テナント等の現地視察を行います。",
      en: "HINODEYA staff accompany you for rental, residential area, and commercial space viewings.",

      ar: "يرافقكم فريق HINODEYA في معاينة الإيجارات ومناطق السكن والمساحات التجارية.",
    },
  },
  {
    id: "a4",
    phase: { jp: "4日目", en: "Day 4", ar: "اليوم 4" },
    title: {
      jp: "不動産・商業施設視察（続き）",
      en: "Continued property & site visits",
      ar: "متابعة معاينة العقارات والمواقع",
    },
    body: {
      jp: "前日の続きとして視察を継続。フリーゾーン訪問や現地パートナーとの打ち合わせも可能です。",
      en: "Continue viewings from the previous day; free zone visits or local partner meetings as needed.",

      ar: "متابعة المعاينات من اليوم السابق؛ زيارات المناطق الحرة أو اجتماعات الشركاء المحليين حسب الحاجة.",
    },
  },
  STANDARD_STEPS[5],
];

export const ATTEND_PROGRAM_TITLE: LangCopy = {
  jp: "5日間アテンドプログラム",
  en: "5-day attend program",
  ar: "برنامج المرافقة لمدة 5 أيام",
};

export function getAcquisitionSchedule(visaSpeed: VisaSpeed): AcquisitionSchedule {
  return {
    title: {
      jp: "取得までの日程",
      en: "Schedule until completion",

      ar: "الجدول حتى الإكمال",
    },
    subtitle: {
      jp: "UAE入国後の一般的な流れ（営業日ベースの目安）",
      en: "Typical in-country flow after arrival (business-day estimate)",

      ar: "التدفق النموذجي داخل الدولة بعد الوصول (تقدير بأيام العمل)",
    },
    footnote: {
      jp: "※ 健康面・与信面に問題がなければ、自由時間の日程どおり進行可能です。",
      en: "※ If there are no health or credit issues, the schedule can proceed as shown.",

      ar: "※ إذا لم تكن هناك مشاكل صحية أو ائتمانية، يمكن أن يسير الجدول كما هو موضح.",
    },
    attendNote: {
      jp: "自由時間の間に賃貸物件や現地不動産を見学したい場合、5日間のアテンドオプションを追加できます。",
      en: "If you would like rental or property viewings during free time, a 5-day local attend option is available.",

      ar: "إذا رغبت في معاينة الإيجارات أو العقارات خلال الوقت الحر، يتوفر خيار مرافقة محلية لمدة 5 أيام.",
    },
    attendOption: {
      jp: "5日間アテンド（不動産視察付き）",
      en: "5-day attend option (with property viewings)",

      ar: "خيار مرافقة 5 أيام (مع معاينة العقارات)",
    },
    steps: visaSpeed === "vip" ? VIP_STEPS : STANDARD_STEPS,
  };
}
