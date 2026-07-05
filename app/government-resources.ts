import type { LangCopy } from "./i18n";

export type GovernmentPortal = {
  id: string;
  name: LangCopy;
  href: string;
};

/** Text-only links to official UAE government portals (logos not used per federal visual identity policy). */
export const UAE_GOVERNMENT_PORTALS: GovernmentPortal[] = [
  {
    id: "uae",
    name: {
      jp: "UAE公式ポータル（u.ae）",
      en: "UAE Government Portal (u.ae)",
      ar: "البوابة الحكومية الرسمية (u.ae)",
    },
    href: "https://u.ae/en",
  },
  {
    id: "moe",
    name: {
      jp: "UAE経済省（Ministry of Economy）",
      en: "UAE Ministry of Economy",
      ar: "وزارة الاقتصاد الإماراتية",
    },
    href: "https://www.moec.gov.ae/en",
  },
  {
    id: "icp",
    name: {
      jp: "連邦身分・入出国管理局（ICP）",
      en: "Federal Authority for Identity & Citizenship (ICP)",
      ar: "الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ",
    },
    href: "https://icp.gov.ae/en/",
  },
  {
    id: "gdrfa",
    name: {
      jp: "ドバイ居住・外国人局（GDRFA Dubai）",
      en: "GDRFA Dubai",
      ar: "إدارة الجنسية والإقامة وأمن المنافذ – دبي",
    },
    href: "https://www.gdrfad.gov.ae/en",
  },
];

export const GOVERNMENT_SECTION: {
  title: LangCopy;
  note: LangCopy;
  policySource: LangCopy;
  policyUrl: string;
} = {
  title: {
    jp: "UAE政府公式ポータル",
    en: "Official UAE Government Portals",
    ar: "البوابات الحكومية الرسمية في الإمارات",
  },
  note: {
    jp: "設立・ビザ・規制情報の参照先として、政府公式サイトへのリンクを掲載しています。",
    en: "Reference links to official government sites for setup, visa, and regulatory information.",
    ar: "روابط مرجعية للمواقع الحكومية الرسمية بخصوص التأسيس والتأشيرات والأنظمة.",
  },
  policySource: {
    jp: "※ 連邦政府のビジュアルアイデンティティ規定により、国章・省庁ロゴ・国旗は民間サイトでの掲載が禁止されています（UAE Government Media Office）。",
    en: "Note: Federal visual identity guidelines prohibit displaying the national emblem, ministry logos, or flag on private commercial websites (UAE Government Media Office).",
    ar: "ملاحظة: تحظر إرشادات الهوية البصرية الاتحادية عرض الشعار الوطني أو شعارات الوزارات أو العلم على المواقع التجارية الخاصة (مكتب الإمارات الإعلامي الحكومي).",
  },
  policyUrl: "https://vig.gmo.gov.ae/en/guideline/the-uae-flag",
};
