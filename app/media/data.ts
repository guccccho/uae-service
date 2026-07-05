import type { Lang } from "../i18n";
import type { LangCopy } from "../i18n";

type LocalizedField = LangCopy;

export type MediaItem = {
  slug: string;
  sector: LocalizedField;
  title: LocalizedField;
  summary: LocalizedField;
  location: string;
  stage: LocalizedField;
  year: string;
  imageUrl: string;
};

export const mediaItems: MediaItem[] = [
  {
    slug: "manufacturing-predictive-maintenance-saas",
    sector: {
      jp: "製造業 / SaaS",
      en: "Manufacturing / SaaS",
      ar: "التصنيع / SaaS",
    },
    title: {
      jp: "設備保全SaaS「Factory Insight」",
      en: "Factory Insight – Predictive Maintenance SaaS",
      ar: "Factory Insight – خدمة SaaS للصيانة التنبؤية",
    },
    summary: {
      jp: "UAE拠点から中東各国の工場向けに提供する、設備予知保全のためのクラウドサービス。日本本社の技術と現地での常駐サポートを組み合わせて展開。",
      en: "A predictive maintenance SaaS delivered from the UAE to factories across the Middle East, combining Japanese engineering with on‑the‑ground support.",
      ar: "خدمة SaaS للصيانة التنبؤية تُقدَّم من الإمارات إلى المصانع في أنحاء الشرق الأوسط، تجمع بين الهندسة اليابانية والدعم الميداني.",
    },
    location: "Dubai Free Zone",
    stage: {
      jp: "成長期",
      en: "Growth",
      ar: "مرحلة النمو",
    },
    year: "2025",
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "b2b-crossborder-ecommerce-platform",
    sector: {
      jp: "EC / プラットフォーム",
      en: "E‑commerce / Platform",
      ar: "التجارة الإلكترونية / المنصات",
    },
    title: {
      jp: "中東向けBtoB越境ECプラットフォーム",
      en: "B2B Cross‑border E‑commerce Platform",
      ar: "منصة تجارة إلكترونية عابرة للحدود بين الشركات",
    },
    summary: {
      jp: "日本・アジアのメーカーとGCC域内の卸事業者をつなぐBtoB向け越境EC。UAE法人を通じて在庫・決済・物流を一元管理。",
      en: "A B2B cross‑border platform connecting Asian manufacturers with GCC wholesalers, centralizing inventory, payments, and logistics via a UAE entity.",
      ar: "منصة عابرة للحدود بين الشركات تربط المصنّعين الآسيويين بموزعي الجملة في دول مجلس التعاون، مع إدارة مركزية للمخزون والمدفوعات واللوجستيات عبر كيان في الإمارات.",
    },
    location: "Dubai / Riyadh",
    stage: {
      jp: "ローンチ直後",
      en: "Post‑launch",
      ar: "ما بعد الإطلاق",
    },
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "fintech-remittance-solution",
    sector: {
      jp: "Fintech",
      en: "Fintech",
      ar: "التكنولوجيا المالية",
    },
    title: {
      jp: "事業者向け送金・決済ソリューション",
      en: "Remittance & Payments Solution for Businesses",
      ar: "حلول التحويلات والمدفوعات للشركات",
    },
    summary: {
      jp: "UAEをハブに、アジア・中東・アフリカ間のBtoB決済を効率化するフィンテックサービス。規制対応とライセンス取得を含めて支援。",
      en: "A fintech platform streamlining B2B payments between Asia, the Middle East, and Africa from a UAE hub, supported through licensing and regulatory advisory.",
      ar: "منصة تكنولوجيا مالية تبسّط المدفوعات بين الشركات في آسيا والشرق الأوسط وأفريقيا من مركز في الإمارات، بدعم في الترخيص والامتثال التنظيمي.",
    },
    location: "Abu Dhabi",
    stage: {
      jp: "実証実験中",
      en: "Pilot",
      ar: "تجريبي",
    },
    year: "2025",
    imageUrl:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
  },
];

export function getMediaItemsForLang(lang: Lang) {
  return mediaItems.map((item) => ({
    ...item,
    sectorLabel: item.sector[lang],
    titleLabel: item.title[lang],
    summaryLabel: item.summary[lang],
    stageLabel: item.stage[lang],
  }));
}
