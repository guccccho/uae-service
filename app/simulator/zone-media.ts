import type { LangCopy } from "../i18n";

export type ZoneMediaImage = {
  url: string;
  caption: LangCopy;
  sourceUrl: string;
};

export type ZoneMediaEmbed = {
  type: "vimeo" | "matterport";
  embedUrl: string;
  title: LangCopy;
  posterUrl?: string;
  sourceUrl: string;
};

export type ZoneMediaConfig = {
  logo: string;
  logoAlt: string;
  homepageUrl: string;
  facilitiesUrl: string;
  facilitiesLabel: LangCopy;
  overview: LangCopy;
  images: ZoneMediaImage[];
  video?: ZoneMediaEmbed;
  virtualTour?: ZoneMediaEmbed;
};

/** Official logos, photos, and embeds sourced from each zone's website. */
export const ZONE_MEDIA: Record<"dmcc" | "rakez", ZoneMediaConfig> = {
  dmcc: {
    logo: "/dmcc-logo.svg",
    logoAlt: "DMCC",
    homepageUrl: "https://dmcc.ae",
    facilitiesUrl: "https://landing.dmcc.ae/dmcc-premium-offices",
    facilitiesLabel: {
      jp: "DMCCプレミアムオフィス（公式）",
      en: "DMCC premium offices (official)",

      ar: "مكاتب DMCC المتميزة (رسمي)",
    },
    overview: {
      jp: "JLT拠点。世界最大級のコモディティ・ビジネスハブ。フレキシデスクからプレミアムオフィスまで選択肢が豊富です。",
      en: "JLT-based global commodities and business hub with flexi-desk to premium office solutions.",

      ar: "مركز عالمي للسلع والأعمال في JLT مع حلول من المكتب المرن إلى المكتب المتميز.",
    },
    images: [
      {
        url: "https://landing.dmcc.ae/hs-fs/hubfs/DMCC%20Premium%20Offices%202024/Cluster%20G/Cluster%20G-1.jpg?width=1200&height=628&name=Cluster%20G-1.jpg",
        caption: {
          jp: "JLT Cluster G — コワーキング・共有オフィス",
          en: "JLT Cluster G — coworking & shared office",

          ar: "JLT Cluster G — مساحة عمل مشتركة ومكتب مشترك",
        },
        sourceUrl: "https://landing.dmcc.ae/dmcc-premium-offices",
      },
      {
        url: "https://landing.dmcc.ae/hs-fs/hubfs/DMCC%20Premium%20Offices%202024/Almas%20Tower%20Premium%20Offices-1.jpg?width=1200&height=628&name=Almas%20Tower%20Premium%20Offices-1.jpg",
        caption: {
          jp: "Almas Tower — プレミアムオフィス",
          en: "Almas Tower — premium offices",

          ar: "برج الماس — مكاتب متميزة",
        },
        sourceUrl: "https://landing.dmcc.ae/dmcc-premium-offices",
      },
      {
        url: "https://dmcc.ae/hs-fs/hubfs/o2-Website%202023%20Assets/o2-Website%202023-Design%20Assets/members/property-portfolio/img-jlt-uptown-tower-dmcc.webp?width=1050&height=575&name=img-jlt-uptown-tower-dmcc.webp",
        caption: {
          jp: "Uptown Tower — JLTのランドマーク",
          en: "Uptown Tower — JLT landmark",

          ar: "برج أبتاون — معلم JLT",
        },
        sourceUrl: "https://dmcc.ae",
      },
    ],
    video: {
      type: "vimeo",
      embedUrl: "https://player.vimeo.com/video/1069451609?title=0&byline=0&portrait=0",
      title: {
        jp: "DMCCプレミアムオフィス紹介動画",
        en: "DMCC premium offices overview",

        ar: "نظرة عامة على مكاتب DMCC المتميزة",
      },
      sourceUrl: "https://landing.dmcc.ae/dmcc-premium-offices",
    },
  },
  rakez: {
    logo: "/rakez-logo.svg",
    logoAlt: "RAKEZ",
    homepageUrl: "https://rakez.com",
    facilitiesUrl: "https://rakez.com/en/about-us/facilities",
    facilitiesLabel: {
      jp: "RAKEZファシリティ（公式）",
      en: "RAKEZ facilities (official)",

      ar: "مرافق RAKEZ (رسمي)",
    },
    overview: {
      jp: "ラス・アル・ハイマ。Compassコワーキングから倉庫・工業用地まで、コスト効率の高いオフィスソリューションが揃います。",
      en: "Ras Al Khaimah hub with cost-efficient offices from Compass coworking to warehouses and industrial land.",

      ar: "مركز رأس الخيمة بمكاتب فعالة التكلفة من Compass للعمل المشترك إلى المستودعات والأراضي الصناعية.",
    },
    images: [
      {
        url: "https://rakez.com/Portals/0/UploadFile/coworking/Compass-Coworking-English.png",
        caption: {
          jp: "Compass Coworking Centre",
          en: "Compass Coworking Centre",

          ar: "مركز Compass للعمل المشترك",
        },
        sourceUrl: "https://rakez.com/en/virtual-tour",
      },
      {
        url: "https://rakez.com/Portals/0/Images/virtual-tour/compass-co-working-thumbnail.png",
        caption: {
          jp: "Compassコワーキング — バーチャルツアー",
          en: "Compass coworking — virtual tour preview",

          ar: "Compass للعمل المشترك — معاينة الجولة الافتراضية",
        },
        sourceUrl: "https://rakez.com/en/virtual-tour",
      },
      {
        url: "https://rakez.com/Upload/HomePageBannerImage/warehouse-space-2025-tab.jpg",
        caption: {
          jp: "カスタマイズ可能な倉庫・オフィススペース",
          en: "Customisable warehouse & office space",

          ar: "مساحة مستودع ومكتب قابلة للتخصيص",
        },
        sourceUrl: "https://rakez.com/en/about-us/facilities",
      },
    ],
    virtualTour: {
      type: "matterport",
      embedUrl: "https://my.matterport.com/show/?m=dcRnMWXMVwn",
      posterUrl:
        "https://rakez.com/Portals/0/Images/virtual-tour/compass-co-working-thumbnail.png",
      title: {
        jp: "Compass Coworking Centre — 360°バーチャルツアー",
        en: "Compass Coworking Centre — 360° virtual tour",

        ar: "مركز Compass للعمل المشترك — جولة افتراضية 360°",
      },
      sourceUrl: "https://rakez.com/en/virtual-tour",
    },
  },
};

export const ZONE_MEDIA_ATTRIBUTION: LangCopy = {
  jp: "画像・動画の出典: 各フリーゾーン公式サイト",
  en: "Images and video sourced from each free zone's official website",

  ar: "الصور والفيديو من المواقع الرسمية لكل منطقة حرة",
};
