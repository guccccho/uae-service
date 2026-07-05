export type FreeZone = "dmcc" | "ifza" | "meydan" | "rakez" | "spc";
export type LangCopy = { jp: string; en: string };

export type SubActivity = {
  id: string;
  label: LangCopy;
  description: LangCopy;
  /** Zones that can issue this activity */
  allowedZones: FreeZone[];
  /** Preferred order for optimization (first = best fit) */
  recommendedZones: FreeZone[];
  licenseAdj: Partial<Record<FreeZone, number>>;
  regulated?: boolean;
  regulatoryNote?: LangCopy;
};

export type MajorActivity = {
  id: string;
  label: LangCopy;
  description: LangCopy;
  subActivities: SubActivity[];
};

const ALL_ZONES: FreeZone[] = ["dmcc", "ifza", "meydan", "rakez", "spc"];
const DUBAI_ZONES: FreeZone[] = ["dmcc", "ifza", "meydan"];
const BUDGET_ZONES: FreeZone[] = ["rakez", "spc", "ifza", "meydan"];

/** HINODEYAがサポートするシミュレーター対象フリーゾーン */
export const HINODEYA_SIMULATOR_ZONES: FreeZone[] = ["dmcc", "rakez"];

export const MAJOR_ACTIVITIES: MajorActivity[] = [
  {
    id: "financial",
    label: { jp: "金融・フィンテック", en: "Financial & fintech" },
    description: {
      jp: "規制対象か非規制かで選べるフリーゾーンが大きく変わります。",
      en: "Eligible free zones depend heavily on whether the activity is regulated.",
    },
    subActivities: [
      {
        id: "crypto_vasp",
        label: { jp: "暗号資産・VASP", en: "Crypto / VASP" },
        description: {
          jp: "仮想資産関連。VARA/DIFC等の追加規制が必要なケースが多いです。",
          en: "Virtual asset activities often require VARA/DIFC permissions in addition.",
        },
        allowedZones: ["dmcc"],
        recommendedZones: ["dmcc"],
        licenseAdj: { dmcc: 15000 },
        regulated: true,
        regulatoryNote: {
          jp: "DMCC Crypto Centreが選択肢の一つですが、実際の営業にはVARAまたはDIFC/ADGMの認可確認が必須です。",
          en: "DMCC Crypto Centre is one route, but VARA or DIFC/ADGM authorisation must be confirmed before operating.",
        },
      },
      {
        id: "asset_management",
        label: { jp: "資産運用・ファンド", en: "Asset management / funds" },
        description: {
          jp: "投資運用・ファンド設立。金融サービスライセンスが必要です。",
          en: "Investment management and fund structures require financial services licensing.",
        },
        allowedZones: ["dmcc"],
        recommendedZones: ["dmcc"],
        licenseAdj: { dmcc: 20000 },
        regulated: true,
        regulatoryNote: {
          jp: "本格的な金融サービスはDIFC（DFSA）やADGM（FSRA）が一般的です。DMCCは関連バックオフィス・商流設計向け。",
          en: "Full financial services are typically in DIFC (DFSA) or ADGM (FSRA). DMCC suits related back-office structures.",
        },
      },
      {
        id: "payment_services",
        label: { jp: "決済・送金サービス", en: "Payments / remittance" },
        description: {
          jp: "決済代行・送金。CBUAEやFSRA/DFSAの規制対象になりやすい領域です。",
          en: "Payment and remittance models are often regulated by CBUAE, FSRA, or DFSA.",
        },
        allowedZones: ["dmcc"],
        recommendedZones: ["dmcc"],
        licenseAdj: { dmcc: 12000 },
        regulated: true,
        regulatoryNote: {
          jp: "フリーゾーン法人のみでは不十分な場合があります。メインランドまたはDIFC/ADGMの検討が必要です。",
          en: "A free-zone entity alone may be insufficient; mainland or DIFC/ADGM may be required.",
        },
      },
      {
        id: "fintech_software",
        label: { jp: "フィンテック・ソフトウェア（非規制）", en: "Fintech software (non-regulated)" },
        description: {
          jp: "顧客資金を扱わないB2B SaaS、RegTech、KYCツールなど。",
          en: "B2B SaaS, RegTech, KYC tools without client-money handling.",
        },
        allowedZones: ["dmcc", "ifza", "meydan", "rakez"],
        recommendedZones: ["meydan", "ifza", "dmcc", "rakez"],
        licenseAdj: { dmcc: 3000, ifza: 0, meydan: 0, rakez: 500 },
      },
      {
        id: "financial_consulting",
        label: { jp: "金融コンサルティング（非規制）", en: "Financial consulting (non-regulated)" },
        description: {
          jp: "戦略・業務改善など、規制対象外のコンサルティング。",
          en: "Strategy and advisory work outside the regulated perimeter.",
        },
        allowedZones: ALL_ZONES,
        recommendedZones: ["ifza", "meydan", "dmcc", "rakez", "spc"],
        licenseAdj: {},
      },
    ],
  },
  {
    id: "trading",
    label: { jp: "商業・トレーディング", en: "Trading & commerce" },
    description: {
      jp: "一般商社からコモディティまで、商流設計に応じてゾーンを選びます。",
      en: "From general trading to commodities — zone choice follows your supply chain.",
    },
    subActivities: [
      {
        id: "general_trading",
        label: { jp: "一般トレーディング", en: "General trading" },
        description: {
          jp: "複数カテゴリの輸出入・卸。全ゾーンで選択可能。",
          en: "Import/export and wholesale across multiple categories.",
        },
        allowedZones: ALL_ZONES,
        recommendedZones: ["ifza", "rakez", "meydan", "spc", "dmcc"],
        licenseAdj: { ifza: 0, rakez: 1000, spc: 0 },
      },
      {
        id: "commodities",
        label: { jp: "コモディティ・貴金属", en: "Commodities & precious metals" },
        description: {
          jp: "金・ダイヤ・エネルギー等。DMCCの専門エコシステムが最適。",
          en: "Gold, diamonds, energy — DMCC's commodity ecosystem is the strongest fit.",
        },
        allowedZones: ["dmcc", "ifza", "rakez"],
        recommendedZones: ["dmcc", "ifza", "rakez"],
        licenseAdj: { dmcc: 8000, ifza: 2000, rakez: 1500 },
      },
      {
        id: "food_consumer",
        label: { jp: "食品・消費財", en: "Food & consumer goods" },
        description: {
          jp: "食品・日用品の流通。コスト重視ならRAKEZ/IFZA。",
          en: "FMCG distribution. RAKEZ/IFZA for cost efficiency.",
        },
        allowedZones: ALL_ZONES,
        recommendedZones: ["rakez", "ifza", "meydan", "spc", "dmcc"],
        licenseAdj: { rakez: 500, spc: 500 },
      },
    ],
  },
  {
    id: "consulting",
    label: { jp: "コンサルティング・専門サービス", en: "Consulting & professional services" },
    description: {
      jp: "最もゾーン選択の自由度が高いカテゴリです。",
      en: "The broadest category with the most free-zone flexibility.",
    },
    subActivities: [
      {
        id: "management_consulting",
        label: { jp: "経営・戦略コンサル", en: "Management / strategy consulting" },
        description: {
          jp: "BtoBコンサルティング全般。",
          en: "General B2B consulting.",
        },
        allowedZones: ALL_ZONES,
        recommendedZones: ["ifza", "meydan", "rakez", "dmcc", "spc"],
        licenseAdj: {},
      },
      {
        id: "legal_accounting",
        label: { jp: "法務・会計・税務", en: "Legal / accounting / tax" },
        description: {
          jp: "専門職サービス。一部アクティビティは追加承認が必要です。",
          en: "Professional services; some activities need extra approvals.",
        },
        allowedZones: ["dmcc", "ifza", "meydan", "rakez"],
        recommendedZones: ["dmcc", "ifza", "meydan", "rakez"],
        licenseAdj: { dmcc: 2000 },
      },
      {
        id: "hr_recruitment",
        label: { jp: "人材・リクルート", en: "HR / recruitment" },
        description: {
          jp: "人材紹介・HRコンサル。",
          en: "Recruitment and HR advisory.",
        },
        allowedZones: ALL_ZONES,
        recommendedZones: ["ifza", "meydan", "rakez", "dmcc", "spc"],
        licenseAdj: {},
      },
    ],
  },
  {
    id: "technology",
    label: { jp: "IT・テクノロジー", en: "IT & technology" },
    description: {
      jp: "SaaSやITコンサルはMeydan/IFZAがコスト効率、DMCCは信頼性重視向け。",
      en: "Meydan/IFZA for cost-efficient SaaS; DMCC for credibility-focused tech.",
    },
    subActivities: [
      {
        id: "software_saas",
        label: { jp: "ソフトウェア / SaaS", en: "Software / SaaS" },
        description: {
          jp: "B2B/B2Cソフトウェア開発・提供。",
          en: "B2B/B2C software products.",
        },
        allowedZones: ALL_ZONES,
        recommendedZones: ["meydan", "ifza", "rakez", "dmcc", "spc"],
        licenseAdj: { meydan: 0, ifza: 0, rakez: 0 },
      },
      {
        id: "it_consulting",
        label: { jp: "ITコンサル・システム開発", en: "IT consulting / systems" },
        description: {
          jp: "受託開発・ITアドバイザリー。",
          en: "Custom development and IT advisory.",
        },
        allowedZones: ALL_ZONES,
        recommendedZones: ["ifza", "meydan", "rakez", "dmcc", "spc"],
        licenseAdj: {},
      },
      {
        id: "ai_data",
        label: { jp: "AI・データ分析", en: "AI / data analytics" },
        description: {
          jp: "AI/ML、データ基盤、分析サービス。",
          en: "AI/ML, data infrastructure, analytics services.",
        },
        allowedZones: ["dmcc", "ifza", "meydan", "rakez"],
        recommendedZones: ["meydan", "ifza", "dmcc", "rakez"],
        licenseAdj: { dmcc: 2000 },
      },
    ],
  },
  {
    id: "ecommerce",
    label: { jp: "Eコマース・小売", en: "E-commerce & retail" },
    description: {
      jp: "オンライン販売・越境EC。SPC/Meydan/IFZAが得意領域です。",
      en: "Online sales and cross-border e-commerce — SPC, Meydan, and IFZA excel here.",
    },
    subActivities: [
      {
        id: "ecommerce_retail",
        label: { jp: "EC・オンライン小売", en: "E-commerce / online retail" },
        description: {
          jp: "自社EC・D2Cモデル。",
          en: "Owned e-commerce and D2C models.",
        },
        allowedZones: ALL_ZONES,
        recommendedZones: ["spc", "meydan", "ifza", "rakez", "dmcc"],
        licenseAdj: { spc: 0, meydan: 500 },
      },
      {
        id: "marketplace",
        label: { jp: "マーケットプレイス・プラットフォーム", en: "Marketplace / platform" },
        description: {
          jp: "複数事業者をつなぐプラットフォーム型ビジネス。",
          en: "Multi-vendor marketplace platforms.",
        },
        allowedZones: ["ifza", "meydan", "spc", "dmcc", "rakez"],
        recommendedZones: ["meydan", "ifza", "spc", "dmcc", "rakez"],
        licenseAdj: { meydan: 500, ifza: 1000 },
      },
    ],
  },
  {
    id: "media",
    label: { jp: "メディア・出版・クリエイティブ", en: "Media, publishing & creative" },
    description: {
      jp: "出版・デジタルメディアはSPCが最もコスト効率が高いです。",
      en: "Publishing and digital media — SPC offers the best cost efficiency.",
    },
    subActivities: [
      {
        id: "publishing",
        label: { jp: "出版・Eパブリッシング", en: "Publishing / e-publishing" },
        description: {
          jp: "書籍・電子出版。SPCの専門ライセンスが最適。",
          en: "Books and digital publishing — SPC's specialist licence fits best.",
        },
        allowedZones: ["spc", "ifza", "meydan"],
        recommendedZones: ["spc", "meydan", "ifza"],
        licenseAdj: { spc: -750, meydan: 500 },
      },
      {
        id: "digital_media",
        label: { jp: "デジタルメディア・コンテンツ", en: "Digital media / content" },
        description: {
          jp: "動画・コンテンツ制作・配信。",
          en: "Video, content production, and distribution.",
        },
        allowedZones: ["spc", "meydan", "ifza", "dmcc"],
        recommendedZones: ["spc", "meydan", "ifza", "dmcc"],
        licenseAdj: { spc: 0 },
      },
      {
        id: "advertising",
        label: { jp: "広告・マーケティング", en: "Advertising / marketing" },
        description: {
          jp: "広告代理・デジタルマーケ支援。",
          en: "Agency and digital marketing services.",
        },
        allowedZones: ALL_ZONES,
        recommendedZones: ["spc", "meydan", "ifza", "dmcc", "rakez"],
        licenseAdj: {},
      },
    ],
  },
  {
    id: "manufacturing",
    label: { jp: "製造・工業・物流", en: "Manufacturing, industrial & logistics" },
    description: {
      jp: "工場・倉庫が必要な場合はRAKEZが第一候補です。",
      en: "RAKEZ is the primary choice when factory or warehouse space is needed.",
    },
    subActivities: [
      {
        id: "light_manufacturing",
        label: { jp: "軽工業・組立", en: "Light manufacturing / assembly" },
        description: {
          jp: "組立・軽加工。RAKEZの工業パークが適合。",
          en: "Assembly and light processing — RAKEZ industrial parks fit well.",
        },
        allowedZones: ["rakez", "dmcc"],
        recommendedZones: ["rakez", "dmcc"],
        licenseAdj: { rakez: 3000, dmcc: 5000 },
      },
      {
        id: "warehouse_logistics",
        label: { jp: "倉庫・物流・再輸出", en: "Warehouse / logistics / re-export" },
        description: {
          jp: "倉庫・物流拠点。RAKEZ/JAFZA系の設計が一般的（JAFZAは本シミュレーター対象外）。",
          en: "Warehouse and logistics — RAKEZ is the best fit among listed zones.",
        },
        allowedZones: ["rakez", "dmcc"],
        recommendedZones: ["rakez", "dmcc"],
        licenseAdj: { rakez: 4000, dmcc: 6000 },
      },
    ],
  },
  {
    id: "real_estate",
    label: { jp: "不動産", en: "Real estate" },
    description: {
      jp: "仲介・管理・開発支援。ドバイ拠点のIFZA/Meydan/DMCCが選択肢。",
      en: "Brokerage, management, and development support — Dubai zones lead.",
    },
    subActivities: [
      {
        id: "real_estate_brokerage",
        label: { jp: "不動産仲介", en: "Real estate brokerage" },
        description: {
          jp: "売買・賃貸仲介。RERA登録等の追加要件あり。",
          en: "Sales and leasing brokerage; RERA registration may apply.",
        },
        allowedZones: DUBAI_ZONES,
        recommendedZones: ["ifza", "meydan", "dmcc"],
        licenseAdj: { ifza: 1500, meydan: 1500, dmcc: 3000 },
      },
      {
        id: "property_management",
        label: { jp: "プロパティマネジメント", en: "Property management" },
        description: {
          jp: "建物管理・運営代行。",
          en: "Building management and operations.",
        },
        allowedZones: DUBAI_ZONES,
        recommendedZones: ["ifza", "meydan", "dmcc"],
        licenseAdj: { ifza: 1000, meydan: 1000 },
      },
    ],
  },
  {
    id: "education",
    label: { jp: "教育・研修", en: "Education & training" },
    description: {
      jp: "研修・教育事業。RAKEZ/IFZAがコスト効率良好。",
      en: "Training and education — RAKEZ and IFZA are cost-efficient.",
    },
    subActivities: [
      {
        id: "corporate_training",
        label: { jp: "企業研修・セミナー", en: "Corporate training / seminars" },
        description: {
          jp: "BtoB研修・ワークショップ。",
          en: "B2B training and workshops.",
        },
        allowedZones: ["rakez", "ifza", "meydan", "dmcc"],
        recommendedZones: ["rakez", "ifza", "meydan", "dmcc"],
        licenseAdj: { rakez: 1000 },
      },
      {
        id: "academic_institution",
        label: { jp: "教育機関・スクール", en: "Academic institution / school" },
        description: {
          jp: "学校・学院設立。追加の教育省承認が必要な場合あり。",
          en: "Schools and academies; KHDA or MOE approvals may apply.",
        },
        allowedZones: ["rakez", "ifza", "meydan"],
        recommendedZones: ["rakez", "ifza", "meydan"],
        licenseAdj: { rakez: 2500, ifza: 2000 },
        regulated: true,
        regulatoryNote: {
          jp: "教育系はフリーゾーンライセンスに加え、教育当局の承認が必要になることがあります。",
          en: "Education activities may require education-authority approval beyond the free-zone licence.",
        },
      },
    ],
  },
  {
    id: "hospitality",
    label: { jp: "飲食・ホスピタリティ", en: "F&B & hospitality" },
    description: {
      jp: "レストラン等はメインランド要件が出やすい領域です。",
      en: "Restaurants often trigger mainland licensing requirements.",
    },
    subActivities: [
      {
        id: "restaurant_cafe",
        label: { jp: "レストラン・カフェ", en: "Restaurant / café" },
        description: {
          jp: "実店舗飲食。メインランド+現地パートナーが必要なケースが多い。",
          en: "Physical F&B — mainland licensing is often required.",
        },
        allowedZones: ["meydan", "ifza"],
        recommendedZones: ["meydan", "ifza"],
        licenseAdj: { meydan: 7000, ifza: 6000 },
        regulated: true,
        regulatoryNote: {
          jp: "フリーゾーン法人のみでは実店舗運営ができない場合があります。メインランド設立も併せて検討してください。",
          en: "A free-zone entity alone may not permit outlet operations; mainland setup may be needed.",
        },
      },
      {
        id: "catering_events",
        label: { jp: "ケータリング・イベント", en: "Catering / events" },
        description: {
          jp: "イベントケータリング・食品サービス。",
          en: "Event catering and food services.",
        },
        allowedZones: ["meydan", "ifza", "rakez"],
        recommendedZones: ["meydan", "ifza", "rakez"],
        licenseAdj: { meydan: 4000, ifza: 3500 },
      },
    ],
  },
];

export type CustomerProfile = {
  companyName: string;
  contactName: string;
  email: string;
  country: string;
  timeline: "asap" | "1_3m" | "3_6m" | "exploring";
  shareholderCount: "1" | "2_3" | "4_plus";
};

export const TIMELINE_OPTIONS: {
  id: CustomerProfile["timeline"];
  label: LangCopy;
}[] = [
  {
    id: "asap",
    label: { jp: "できるだけ早く", en: "As soon as possible" },
  },
  {
    id: "1_3m",
    label: { jp: "1〜3ヶ月以内", en: "Within 1–3 months" },
  },
  {
    id: "3_6m",
    label: { jp: "3〜6ヶ月以内", en: "Within 3–6 months" },
  },
  {
    id: "exploring",
    label: { jp: "情報収集中", en: "Still exploring" },
  },
];

export const SHAREHOLDER_OPTIONS: {
  id: CustomerProfile["shareholderCount"];
  label: LangCopy;
}[] = [
  { id: "1", label: { jp: "1名", en: "1" } },
  { id: "2_3", label: { jp: "2〜3名", en: "2–3" } },
  { id: "4_plus", label: { jp: "4名以上", en: "4+" } },
];

export const COUNTRY_OPTIONS: { id: string; label: LangCopy }[] = [
  { id: "jp", label: { jp: "日本", en: "Japan" } },
  { id: "ae", label: { jp: "UAE", en: "UAE" } },
  { id: "sg", label: { jp: "シンガポール", en: "Singapore" } },
  { id: "uk", label: { jp: "イギリス", en: "United Kingdom" } },
  { id: "us", label: { jp: "アメリカ", en: "United States" } },
  { id: "other", label: { jp: "その他", en: "Other" } },
];

export function getMajorActivity(id: string): MajorActivity | undefined {
  return MAJOR_ACTIVITIES.find((m) => m.id === id);
}

export function getSubActivity(
  majorId: string,
  subId: string,
): SubActivity | undefined {
  return getMajorActivity(majorId)?.subActivities.find((s) => s.id === subId);
}

export function getActivityLicenseAdj(
  majorId: string,
  subId: string,
  zone: FreeZone,
): number {
  return getSubActivity(majorId, subId)?.licenseAdj[zone] ?? 0;
}

export function getAllowedZones(majorId: string, subId: string): FreeZone[] {
  const activityZones =
    getSubActivity(majorId, subId)?.allowedZones ?? ALL_ZONES;
  const filtered = HINODEYA_SIMULATOR_ZONES.filter((z) =>
    activityZones.includes(z),
  );
  return filtered.length > 0 ? filtered : [...HINODEYA_SIMULATOR_ZONES];
}

/** DMCC / RAKEZ の推奨順（アクティビティ適合性ベース） */
export function getHinodeyaZonePriority(
  majorId: string,
  subId: string,
): FreeZone[] {
  const sub = getSubActivity(majorId, subId);
  const allowed = getAllowedZones(majorId, subId);
  if (allowed.length <= 1) return allowed;

  if (!sub) return [...HINODEYA_SIMULATOR_ZONES];

  if (sub.regulated) {
    return HINODEYA_SIMULATOR_ZONES.filter((z) => allowed.includes(z));
  }

  const fromRec = sub.recommendedZones.filter((z) => allowed.includes(z));
  if (fromRec.length > 0) {
    const order = [...fromRec];
    for (const z of allowed) {
      if (!order.includes(z)) order.push(z);
    }
    return order;
  }

  const budgetOrigins = ["rakez", "spc", "ifza", "meydan"];
  if (budgetOrigins.includes(sub.recommendedZones[0])) {
    return (["rakez", "dmcc"] as const).filter((z) => allowed.includes(z));
  }
  return (["dmcc", "rakez"] as const).filter((z) => allowed.includes(z));
}

export type ZoneRecommendation = {
  zone: FreeZone;
  total: number;
  rank: number;
  isRecommended: boolean;
  reason: LangCopy;
};

export function getRecommendationReason(
  zone: FreeZone,
  sub: SubActivity,
  total: number,
  lang: "jp" | "en",
): LangCopy {
  const isPrimary = sub.recommendedZones[0] === zone;
  const isAllowed = sub.allowedZones.includes(zone);

  if (!isAllowed) {
    return {
      jp: "このアクティビティには対応していません",
      en: "Not eligible for this activity",
    };
  }
  if (sub.allowedZones.length === 1) {
    return {
      jp: `「${sub.label.jp}」は${zone.toUpperCase()}が最適`,
      en: `${sub.label.en} is best suited to ${zone.toUpperCase()}`,
    };
  }
  if (isPrimary) {
    return zone === "rakez"
      ? {
          jp: "コスト効率と設立スピードのバランスが最良",
          en: "Best balance of cost efficiency and setup speed",
        }
      : {
          jp: "信頼性・ブランド力とアクティビティ適合性が最良",
          en: "Best balance of credibility and activity fit",
        };
  }
  if (zone === "rakez") {
    return {
      jp: "初年度コストを抑えたい場合の候補",
      en: "Cost-efficient option for first-year setup",
    };
  }
  if (zone === "dmcc") {
    return {
      jp: "金融・コモディティ・ブランド重視の候補",
      en: "Strong option for finance, commodities, and brand credibility",
    };
  }
  return {
    jp: "条件を満たす候補",
    en: "Eligible candidate",
  };
}
