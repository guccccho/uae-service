import type { Lang } from "../lang-context";

export type MediaItem = {
  slug: string;
  sector: {
    jp: string;
    en: string;
  };
  title: {
    jp: string;
    en: string;
  };
  summary: {
    jp: string;
    en: string;
  };
  location: string;
  stage: {
    jp: string;
    en: string;
  };
  year: string;
  imageUrl: string;
};

export const mediaItems: MediaItem[] = [
  {
    slug: "manufacturing-predictive-maintenance-saas",
    sector: { jp: "製造業 / SaaS", en: "Manufacturing / SaaS" },
    title: {
      jp: "設備保全SaaS「Factory Insight」",
      en: "Factory Insight – Predictive Maintenance SaaS",
    },
    summary: {
      jp: "UAE拠点から中東各国の工場向けに提供する、設備予知保全のためのクラウドサービス。日本本社の技術と現地での常駐サポートを組み合わせて展開。",
      en: "A predictive maintenance SaaS delivered from the UAE to factories across the Middle East, combining Japanese engineering with on‑the‑ground support.",
    },
    location: "Dubai Free Zone",
    stage: {
      jp: "成長期",
      en: "Growth",
    },
    year: "2025",
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "b2b-crossborder-ecommerce-platform",
    sector: { jp: "EC / プラットフォーム", en: "E‑commerce / Platform" },
    title: {
      jp: "中東向けBtoB越境ECプラットフォーム",
      en: "B2B Cross‑border E‑commerce Platform",
    },
    summary: {
      jp: "日本・アジアのメーカーとGCC域内の卸事業者をつなぐBtoB向け越境EC。UAE法人を通じて在庫・決済・物流を一元管理。",
      en: "A B2B cross‑border platform connecting Asian manufacturers with GCC wholesalers, centralizing inventory, payments, and logistics via a UAE entity.",
    },
    location: "Dubai / Riyadh",
    stage: {
      jp: "ローンチ直後",
      en: "Post‑launch",
    },
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "fintech-remittance-solution",
    sector: { jp: "Fintech", en: "Fintech" },
    title: {
      jp: "事業者向け送金・決済ソリューション",
      en: "Remittance & Payments Solution for Businesses",
    },
    summary: {
      jp: "UAEをハブに、アジア・中東・アフリカ間のBtoB決済を効率化するフィンテックサービス。規制対応とライセンス取得を含めて支援。",
      en: "A fintech platform streamlining B2B payments between Asia, the Middle East, and Africa from a UAE hub, supported through licensing and regulatory advisory.",
    },
    location: "Abu Dhabi",
    stage: {
      jp: "実証実験中",
      en: "Pilot",
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

