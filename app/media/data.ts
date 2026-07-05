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
  websiteUrl?: string;
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
  {
    slug: "shan-loong-logistics-energy",
    sector: {
      jp: "物流 / エネルギー",
      en: "Logistics / Energy",
      ar: "اللوجستيات / الطاقة",
    },
    title: {
      jp: "山隆運通（SLC）— 物流・燃料ネットワーク",
      en: "Shan-Loong Transportation (SLC) – Logistics & Fuel Network",
      ar: "Shan-Loong Transportation (SLC) – شبكة اللوجستيات والوقود",
    },
    summary: {
      jp: "1976年創業、台湾証券取引所上場（2616）の物流・燃料総合グループ。76ヶ所のガソリンスターション網と輸送・物流事業を展開し、台湾・中国・ベトナムに拠点。中東・GCC向けの事業展開をチームHINODEYAとともに推進。",
      en: "Founded in 1976 and listed on the Taiwan Stock Exchange (2616), SLC spans transport, logistics, and a network of 76 fuel stations across Taiwan, with subsidiaries in Mainland China and Vietnam. Exploring GCC expansion with Team HINODEYA.",
      ar: "تأسست عام 1976 ومُدرجة في بورصة تايوان (2616). تمتد SLC عبر النقل واللوجستيات وشبكة من 76 محطة وقود في تايوان، مع فروع في الصين والفيتنام. تستكشف التوسع في دول مجلس التعاون مع فريق HINODEYA.",
    },
    location: "Kaohsiung, Taiwan",
    stage: {
      jp: "展開準備",
      en: "Expansion planning",
      ar: "تخطيط التوسع",
    },
    year: "2025",
    imageUrl:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
    websiteUrl: "https://w3.slc.com.tw/en/page/about",
  },
  {
    slug: "okasan-livic-infrastructure",
    sector: {
      jp: "土木資材 / インフラ",
      en: "Civil Engineering / Infrastructure",
      ar: "الهندسة المدنية / البنية التحتية",
    },
    title: {
      jp: "岡三リビック — 土木資材・維持補修ソリューション",
      en: "Okasan Livic – Civil Materials & Infrastructure Solutions",
      ar: "Okasan Livic – مواد مدنية وحلول البنية التحتية",
    },
    summary: {
      jp: "「日本の土台を新しく」を掲げ、摩擦低減材「フリクションカッター®」、補強土壁、景観デザインなど土木・インフラ向けの工法・資材を開発。UAE・中東のインフラ整備・維持補修市場への展開を支援。",
      en: "Under the vision of renewing Japan's foundations, Okasan Livic develops civil engineering methods and materials including Friction Cutter®, reinforced soil walls, and landscape solutions — with Team HINODEYA supporting entry into UAE and Middle East infrastructure markets.",
      ar: "تحت رؤية تجديد أسس اليابان، تطور Okasan Livic طرقاً ومواد هندسة مدنية تشمل Friction Cutter® وجدران التربة المعززة وحلول المناظر الطبيعية — بدعم فريق HINODEYA لدخول أسواق البنية التحتية في الإمارات والشرق الأوسط.",
    },
    location: "Japan",
    stage: {
      jp: "成長期",
      en: "Growth",
      ar: "مرحلة النمو",
    },
    year: "2025",
    imageUrl: "/okasanlivic-ogp.png",
    websiteUrl: "https://www.okasanlivic.co.jp",
  },
  {
    slug: "optiqb-ai-3d-display",
    sector: {
      jp: "AI / ディスプレイテック",
      en: "AI / Display Technology",
      ar: "الذكاء الاصطناعي / تقنية العرض",
    },
    title: {
      jp: "光影立方（Optiqb）— 裸視3D・Edge AIソリューション",
      en: "Optiqb – Naked-Eye 3D & Edge AI Solutions",
      ar: "Optiqb – حلول العرض ثلاثي الأبعاد بدون نظارات والذكاء الاصطناعي الطرفي",
    },
    summary: {
      jp: "台湾発のハイテク新創。Edge AIで2D映像をリアルタイムに裸視3Dへ変換するエンジンとスマート光学保護フィルムを開発。電信・コンテンツ・小売向けにSDKライセンスも展開し、中東・GCC市場への進出をチームHINODEYAと推進。",
      en: "A Taiwan-based deep-tech startup developing an Edge AI engine that converts 2D video to naked-eye 3D in real time, paired with smart optical screen protectors and SDK licensing for telcos and content platforms — exploring GCC expansion with Team HINODEYA.",
      ar: "شركة ناشئة تايوانية متخصصة في محرك Edge AI يحوّل الفيديو ثنائي الأبعاد إلى عرض ثلاثي الأبعاد بدون نظارات في الوقت الفعلي، مع واقيات شاشة بصرية ذكية وتراخيص SDK لمشغلي الاتصالات ومنصات المحتوى — تستكشف التوسع في دول مجلس التعاون مع فريق HINODEYA.",
    },
    location: "Taipei, Taiwan",
    stage: {
      jp: "グローバル展開",
      en: "Global rollout",
      ar: "الإطلاق العالمي",
    },
    year: "2025",
    imageUrl: "/optiqb-hero.webp",
    websiteUrl: "https://optiqb.com",
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
