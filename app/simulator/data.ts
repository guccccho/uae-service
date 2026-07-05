import {
  getActivityLicenseAdj,
  getAllowedZones,
  getRecommendationReason,
  getSubActivity,
  type ZoneRecommendation,
} from "./activities";

export type FreeZone = "dmcc" | "ifza" | "meydan" | "rakez" | "spc";

export type LangCopy = { jp: string; en: string };

export type LicenseTypeOption = {
  id: string;
  label: LangCopy;
  description: LangCopy;
  licenseAdj: number;
  registrationAdj: number;
};

export type VisaPackageOption = {
  id: string;
  label: LangCopy;
  description: LangCopy;
  visaCount: number;
  licensePackageFee: number;
  visaProcessingEach: number;
  /** SME-style bundles that already include establishment card in licensePackageFee */
  includesEstablishment?: boolean;
  /** E-channel, medical, Emirates ID, and other government steps billed outside headline package price */
  governmentExtras?: number;
};

export type OfficeOption = {
  id: string;
  label: LangCopy;
  description: LangCopy;
  annualFee: number;
  visaQuota: number;
};

export type BusinessActivityOption = {
  id: string;
  label: LangCopy;
  description: LangCopy;
  licenseAdj: number;
};

export type FreeZoneConfig = {
  id: FreeZone;
  name: string;
  sourceUrl: string;
  sourceLabel: LangCopy;
  overview: LangCopy;
  licenseTypes: LicenseTypeOption[];
  visaPackages: VisaPackageOption[];
  officeTypes: OfficeOption[];
  businessActivities: BusinessActivityOption[];
  establishmentCard: number;
  registrationFee: number;
};

/** Prices in AED. Sourced from each free zone's official site or published price list (2024–2026). */
export const FREE_ZONE_CONFIGS: Record<FreeZone, FreeZoneConfig> = {
  dmcc: {
    id: "dmcc",
    name: "DMCC",
    sourceUrl: "https://dmcc.ae/business/business-setup-packages",
    sourceLabel: {
      jp: "DMCC 公式パッケージページ",
      en: "DMCC official setup packages",
    },
    overview: {
      jp: "JLT拠点。ライセンス・エスタブリッシュメントカード・フレキシデスクがセットのパッケージが基本です。",
      en: "JLT-based zone. Packages typically bundle licence, establishment card, and flexi-desk.",
    },
    registrationFee: 9020,
    establishmentCard: 1825,
    licenseTypes: [
      {
        id: "fze",
        label: { jp: "FZE（単独株主）", en: "FZE (sole shareholder)" },
        description: {
          jp: "1名の株主のみ。個人事業に近い法人形態。",
          en: "Single-shareholder free zone establishment.",
        },
        licenseAdj: 0,
        registrationAdj: 0,
      },
      {
        id: "fz_llc",
        label: { jp: "FZ-LLC（複数株主）", en: "FZ-LLC (multiple shareholders)" },
        description: {
          jp: "2名以上の株主。定款（MOA）費用が追加されます。",
          en: "Two or more shareholders. MOA drafting fee applies.",
        },
        licenseAdj: 0,
        registrationAdj: 2020,
      },
      {
        id: "branch",
        label: { jp: "支店（Branch）", en: "Branch" },
        description: {
          jp: "海外またはUAE既存法人の支店。親会社書類の認証が必要です。",
          en: "Branch of a UAE or foreign parent. Parent-company documents required.",
        },
        licenseAdj: 3000,
        registrationAdj: 1500,
      },
    ],
    visaPackages: [
      {
        id: "0",
        label: { jp: "ビザ枠なし", en: "No visa quota" },
        description: {
          jp: "ライセンスのみ（年間約 AED 20,285）。ビザ申請は別途。",
          en: "Licence only (~AED 20,285/yr). Visas priced separately.",
        },
        visaCount: 0,
        licensePackageFee: 20285,
        visaProcessingEach: 0,
      },
      {
        id: "1",
        label: { jp: "1名（Jump Start）", en: "1 visa (Jump Start)" },
        description: {
          jp: "公式Jump Start: ライセンス＋ECカード＋2年ビザ1名＋フレキシデスク（3枠）約 AED 43,780",
          en: "Official Jump Start: licence + card + 1×2-yr visa + flexi-desk (3 quota) ~AED 43,780",
        },
        visaCount: 1,
        licensePackageFee: 43780,
        visaProcessingEach: 0,
      },
      {
        id: "2_3",
        label: { jp: "2〜3名", en: "2–3 visas" },
        description: {
          jp: "スタンダードフレキシデスク（最大3ビザ枠）。パッケージ原価約 AED 56,748。",
          en: "Standard flexi-desk (up to 3 visa quota). Package list price ~AED 56,748.",
        },
        visaCount: 3,
        licensePackageFee: 56748,
        visaProcessingEach: 2237,
      },
      {
        id: "5_plus",
        label: { jp: "5名以上", en: "5+ visas" },
        description: {
          jp: "プライベートオフィスまたは大型スペースが必要。個別見積もり前提。",
          en: "Private office or larger facility required. Custom quote recommended.",
        },
        visaCount: 5,
        licensePackageFee: 75000,
        visaProcessingEach: 2973,
      },
    ],
    officeTypes: [
      {
        id: "flex",
        label: { jp: "フレキシデスク / コワーキング", en: "Flexi-desk / co-working" },
        description: {
          jp: "Jump Startに含まれる標準枠。追加費用なし（パッケージ内）。",
          en: "Standard quota included in Jump Start packages.",
        },
        annualFee: 0,
        visaQuota: 3,
      },
      {
        id: "small",
        label: { jp: "サービスオフィス（小）", en: "Serviced office (small)" },
        description: {
          jp: "専用の小規模オフィス。年間約 AED 16,000〜19,000。",
          en: "Dedicated small serviced office. ~AED 16,000–19,000/yr.",
        },
        annualFee: 17000,
        visaQuota: 4,
      },
      {
        id: "full",
        label: { jp: "プライベートオフィス", en: "Private office" },
        description: {
          jp: "独立したオフィスユニット。ビザ枠拡大が可能。",
          en: "Private office unit with higher visa allocation.",
        },
        annualFee: 32000,
        visaQuota: 8,
      },
    ],
    businessActivities: [
      {
        id: "consulting",
        label: { jp: "サービス / コンサルティング", en: "Service / consulting" },
        description: {
          jp: "DMCCサービスライセンス。年間 AED 15,000〜20,000帯。",
          en: "DMCC service licence band AED 15,000–20,000/yr.",
        },
        licenseAdj: 0,
      },
      {
        id: "trading",
        label: { jp: "トレーディング", en: "Trading" },
        description: {
          jp: "商業ライセンス。年間 AED 20,000〜25,000帯。",
          en: "Commercial licence band AED 20,000–25,000/yr.",
        },
        licenseAdj: 5000,
      },
      {
        id: "it",
        label: { jp: "IT / テクノロジー", en: "IT / technology" },
        description: {
          jp: "IT関連アクティビティ。サービスライセンス枠。",
          en: "IT activities under service licence category.",
        },
        licenseAdj: 2000,
      },
      {
        id: "startup",
        label: { jp: "スタートアップ（一般）", en: "General startup" },
        description: {
          jp: "Jump Start / Prime パッケージ向け。",
          en: "Suited for Jump Start / Prime packages.",
        },
        licenseAdj: 0,
      },
    ],
  },

  ifza: {
    id: "ifza",
    name: "IFZA",
    sourceUrl: "https://ifza.com",
    sourceLabel: {
      jp: "IFZA 公式サイト / 公開プライスリスト",
      en: "IFZA official site / published price list",
    },
    overview: {
      jp: "Dubai Silicon Oasis。ビザ枠ごとにパッケージ料金が明確に設定されています。",
      en: "Dubai Silicon Oasis. Clear package pricing by visa quota.",
    },
    registrationFee: 0,
    establishmentCard: 2000,
    licenseTypes: [
      {
        id: "fze",
        label: { jp: "FZE（単独株主）", en: "FZE (sole shareholder)" },
        description: {
          jp: "1名株主の有限責任会社。",
          en: "Single-shareholder LLC.",
        },
        licenseAdj: 0,
        registrationAdj: 0,
      },
      {
        id: "fz_llc",
        label: { jp: "FZ-LLC（複数株主）", en: "FZ-LLC (multiple shareholders)" },
        description: {
          jp: "2名以上の株主。料金体系はFZEと同一パッケージ。",
          en: "Multiple shareholders. Same package pricing as FZE.",
        },
        licenseAdj: 0,
        registrationAdj: 0,
      },
    ],
    visaPackages: [
      {
        id: "0",
        label: { jp: "ビザ枠なし", en: "Zero visa" },
        description: {
          jp: "公式 Zero Visa License: AED 12,900/年（VAT込）",
          en: "Official Zero Visa License: AED 12,900/yr (incl. VAT)",
        },
        visaCount: 0,
        licensePackageFee: 12900,
        visaProcessingEach: 0,
      },
      {
        id: "1",
        label: { jp: "1名", en: "1 visa" },
        description: {
          jp: "公式 1 Visa License: AED 14,900/年。1名分の居住ビザ枠付き。",
          en: "Official 1 Visa License: AED 14,900/yr with 1 residency quota.",
        },
        visaCount: 1,
        licensePackageFee: 14900,
        visaProcessingEach: 3750,
      },
      {
        id: "2_3",
        label: { jp: "2〜3名", en: "2–3 visas" },
        description: {
          jp: "2 Visa: AED 16,900 / 3 Visa: AED 18,900（公式プライスリスト）",
          en: "2 visas AED 16,900 / 3 visas AED 18,900 (official price list)",
        },
        visaCount: 3,
        licensePackageFee: 18900,
        visaProcessingEach: 3750,
      },
      {
        id: "5_plus",
        label: { jp: "4名以上", en: "4+ visas" },
        description: {
          jp: "4 Visa License: AED 20,900/年。追加枠は個別見積もり。",
          en: "4 Visa License: AED 20,900/yr. Higher quotas on request.",
        },
        visaCount: 4,
        licensePackageFee: 20900,
        visaProcessingEach: 3750,
      },
    ],
    officeTypes: [
      {
        id: "flex",
        label: { jp: "バーチャル / フレキシデスク", en: "Virtual / flexi-desk" },
        description: {
          jp: "登録住所付き。フレキシデスク追加は約 AED 5,760/年。",
          en: "Registered address included. Flexi-desk add-on ~AED 5,760/yr.",
        },
        annualFee: 5760,
        visaQuota: 1,
      },
      {
        id: "small",
        label: { jp: "共有オフィス / エグゼクティブ", en: "Shared / executive office" },
        description: {
          jp: "専用スペース。年間 AED 7,000〜15,000帯。",
          en: "Dedicated workspace. ~AED 7,000–15,000/yr.",
        },
        annualFee: 12000,
        visaQuota: 3,
      },
      {
        id: "full",
        label: { jp: "プライベートオフィス", en: "Private office" },
        description: {
          jp: "独立オフィス。年間 AED 15,000〜40,000。ビザ枠拡大可。",
          en: "Private office AED 15,000–40,000/yr with higher visa quota.",
        },
        annualFee: 28000,
        visaQuota: 6,
      },
    ],
    businessActivities: [
      {
        id: "consulting",
        label: { jp: "プロフェッショナル / コンサル", en: "Professional / consulting" },
        description: {
          jp: "Professional (Service & Consultancy) License。",
          en: "Professional (service & consultancy) licence.",
        },
        licenseAdj: 0,
      },
      {
        id: "trading",
        label: { jp: "コマーシャル（商業）", en: "Commercial (trading)" },
        description: {
          jp: "Commercial (Trading) License。",
          en: "Commercial (trading) licence.",
        },
        licenseAdj: 0,
      },
      {
        id: "it",
        label: { jp: "IT / デジタル", en: "IT / digital" },
        description: {
          jp: "プロフェッショナルライセンス枠で登録可能。",
          en: "Registered under professional licence category.",
        },
        licenseAdj: 0,
      },
      {
        id: "startup",
        label: { jp: "スタートアップ", en: "Startup" },
        description: {
          jp: "0〜1ビザのエントリーパッケージが一般的。",
          en: "Entry packages with 0–1 visa are typical.",
        },
        licenseAdj: 0,
      },
    ],
  },

  meydan: {
    id: "meydan",
    name: "Meydan",
    sourceUrl: "https://www.meydanfz.ae/blog/meydan-free-zone-company-setup-cost-breakdown",
    sourceLabel: {
      jp: "Meydan FZ 公式コスト解説",
      en: "Meydan FZ official cost breakdown",
    },
    overview: {
      jp: "ドバイ中心部。全ライセンスにフレキシデスクが含まれ、ビザ枠は別途追加できます。",
      en: "Central Dubai. Flexi-desk included with every licence; visa slots added separately.",
    },
    registrationFee: 0,
    establishmentCard: 2000,
    licenseTypes: [
      {
        id: "fze",
        label: { jp: "FZE（単独株主）", en: "FZE (sole shareholder)" },
        description: {
          jp: "1名株主のLLCフリーゾーン法人。",
          en: "Single-shareholder LLC free zone entity.",
        },
        licenseAdj: 0,
        registrationAdj: 0,
      },
      {
        id: "fz_llc",
        label: { jp: "FZ-LLC（複数株主）", en: "FZ-LLC (multiple shareholders)" },
        description: {
          jp: "複数株主構成。最大6ビザ枠まで拡張可能。",
          en: "Multiple shareholders. Up to 6 visa allocations possible.",
        },
        licenseAdj: 0,
        registrationAdj: 0,
      },
    ],
    visaPackages: [
      {
        id: "0",
        label: { jp: "ビザ枠なし", en: "Zero visa" },
        description: {
          jp: "公式: AED 12,500/年（3アクティビティ＋フレキシデスク込み）",
          en: "Official: AED 12,500/yr (3 activities + flexi-desk included)",
        },
        visaCount: 0,
        licensePackageFee: 12500,
        visaProcessingEach: 0,
      },
      {
        id: "1",
        label: { jp: "1名", en: "1 visa" },
        description: {
          jp: "1ビザパッケージ: AED 14,370/年。投資家ビザ処理約 AED 4,000。",
          en: "1-visa package AED 14,370/yr. Investor visa processing ~AED 4,000.",
        },
        visaCount: 1,
        licensePackageFee: 14370,
        visaProcessingEach: 4000,
      },
      {
        id: "2_3",
        label: { jp: "2〜3名", en: "2–3 visas" },
        description: {
          jp: "3ビザパッケージ: AED 18,070/年。ビザ枠追加は AED 1,850/枠。",
          en: "3-visa package AED 18,070/yr. Extra allocation AED 1,850/slot.",
        },
        visaCount: 3,
        licensePackageFee: 18070,
        visaProcessingEach: 4000,
      },
      {
        id: "5_plus",
        label: { jp: "4〜6名", en: "4–6 visas" },
        description: {
          jp: "プレミアムパッケージ: AED 25,000+/年。専用デスク推奨。",
          en: "Premium package AED 25,000+/yr. Dedicated desk recommended.",
        },
        visaCount: 5,
        licensePackageFee: 25000,
        visaProcessingEach: 4000,
      },
    ],
    officeTypes: [
      {
        id: "flex",
        label: { jp: "フレキシデスク（標準）", en: "Flexi-desk (included)" },
        description: {
          jp: "全ライセンスに含まれる。追加費用なし。",
          en: "Included with every licence at no extra cost.",
        },
        annualFee: 0,
        visaQuota: 2,
      },
      {
        id: "small",
        label: { jp: "共有オフィス", en: "Shared office" },
        description: {
          jp: "公式: AED 15,000/年。ビザ枠拡大に有効。",
          en: "Official: AED 15,000/yr. Supports higher visa quota.",
        },
        annualFee: 15000,
        visaQuota: 4,
      },
      {
        id: "full",
        label: { jp: "専用オフィス", en: "Dedicated office" },
        description: {
          jp: "公式: AED 30,000/年。Business Centre内の独立ユニット。",
          en: "Official: AED 30,000/yr. Dedicated unit at Business Centre.",
        },
        annualFee: 30000,
        visaQuota: 6,
      },
    ],
    businessActivities: [
      {
        id: "consulting",
        label: { jp: "コンサルティング / サービス", en: "Consulting / services" },
        description: {
          jp: "最大3アクティビティグループを1ライセンスに統合可能。",
          en: "Up to 3 activity groups on one licence.",
        },
        licenseAdj: 0,
      },
      {
        id: "trading",
        label: { jp: "トレーディング", en: "Trading" },
        description: {
          jp: "商業活動。追加承認が必要な場合あり。",
          en: "Commercial trading. Pre-approval may apply.",
        },
        licenseAdj: 1500,
      },
      {
        id: "it",
        label: { jp: "IT / テック", en: "IT / tech" },
        description: {
          jp: "サービスライセンス枠。",
          en: "Service licence category.",
        },
        licenseAdj: 0,
      },
      {
        id: "ecommerce",
        label: { jp: "Eコマース", en: "E-commerce" },
        description: {
          jp: "E-Commerce Package: 約 AED 13,000/年から。",
          en: "E-commerce package from ~AED 13,000/yr.",
        },
        licenseAdj: 500,
      },
    ],
  },

  rakez: {
    id: "rakez",
    name: "RAKEZ",
    sourceUrl: "https://rakez.com",
    sourceLabel: {
      jp: "RAKEZ 公式サイト",
      en: "RAKEZ official site",
    },
    overview: {
      jp: "ラス・アル・ハイマ。Biz Starter（ビザなし）から SME オールインクルーシブまで選択肢が豊富です。",
      en: "Ras Al Khaimah. From Biz Starter (no visa) to SME all-inclusive bundles.",
    },
    registrationFee: 0,
    establishmentCard: 1300,
    licenseTypes: [
      {
        id: "fze",
        label: { jp: "FZE（単独株主）", en: "FZE (sole shareholder)" },
        description: {
          jp: "個人または法人1名での設立。",
          en: "Single shareholder (individual or corporate).",
        },
        licenseAdj: 0,
        registrationAdj: 0,
      },
      {
        id: "fz_llc",
        label: { jp: "FZ-LLC（複数株主）", en: "FZ-LLC (multiple shareholders)" },
        description: {
          jp: "複数株主の有限責任会社。",
          en: "Multi-shareholder limited liability company.",
        },
        licenseAdj: 0,
        registrationAdj: 0,
      },
      {
        id: "branch",
        label: { jp: "支店（Branch）", en: "Branch" },
        description: {
          jp: "親会社の支店。商業・サービス・工業ライセンスで選択可能。",
          en: "Branch of parent company. Commercial, service, or industrial licence.",
        },
        licenseAdj: 2000,
        registrationAdj: 1000,
      },
    ],
    visaPackages: [
      {
        id: "0",
        label: { jp: "ビザ枠なし（Biz Starter）", en: "No visa (Biz Starter)" },
        description: {
          jp: "公式 Biz Starter: AED 6,000/年（フレキシデスク付き）",
          en: "Official Biz Starter: AED 6,000/yr with flexi-desk",
        },
        visaCount: 0,
        licensePackageFee: 6000,
        visaProcessingEach: 0,
      },
      {
        id: "1",
        label: { jp: "1名（SMEオールイン）", en: "1 visa (SME all-in)" },
        description: {
          jp: "公式パッケージ AED 14,320/年（ライセンス・EC・ビザ・保険込み）＋ E-channel等で初年度実費は約 AED 17,000",
          en: "Official package AED 14,320/yr (licence, EC, visa, insurance) + E-channel etc.; first-year direct cost ~AED 17,000",
        },
        visaCount: 1,
        licensePackageFee: 14320,
        visaProcessingEach: 0,
        includesEstablishment: true,
        governmentExtras: 2680,
      },
      {
        id: "2_3",
        label: { jp: "2名", en: "2 visas" },
        description: {
          jp: "SME 2 Visas: AED 18,640/年（オールインクルーシブ）。追加枠は AED 4,000/名。",
          en: "SME 2 visas: AED 18,640/yr all-inclusive. Extra quota AED 4,000 each.",
        },
        visaCount: 2,
        licensePackageFee: 18640,
        visaProcessingEach: 0,
        includesEstablishment: true,
        governmentExtras: 2680,
      },
      {
        id: "5_plus",
        label: { jp: "4名", en: "4 visas" },
        description: {
          jp: "SME 4 Visas: AED 27,280/年（オールインクルーシブ）。",
          en: "SME 4 visas: AED 27,280/yr all-inclusive.",
        },
        visaCount: 4,
        licensePackageFee: 27280,
        visaProcessingEach: 0,
        includesEstablishment: true,
        governmentExtras: 2680,
      },
    ],
    officeTypes: [
      {
        id: "flex",
        label: { jp: "フレキシデスク", en: "Flexi-desk" },
        description: {
          jp: "Biz Starter / SME パッケージに含まれる。",
          en: "Included in Biz Starter and SME packages.",
        },
        annualFee: 0,
        visaQuota: 2,
      },
      {
        id: "small",
        label: { jp: "サービスオフィス", en: "Serviced office" },
        description: {
          jp: "専用デスク・小規模オフィス。年間 AED 8,000〜16,000帯。",
          en: "Dedicated desk / small office ~AED 8,000–16,000/yr.",
        },
        annualFee: 12000,
        visaQuota: 4,
      },
      {
        id: "full",
        label: { jp: "プライベートオフィス / 倉庫", en: "Private office / warehouse" },
        description: {
          jp: "大規模チーム・軽工業向け。個別見積もり。",
          en: "For larger teams or light industrial. Custom pricing.",
        },
        annualFee: 22000,
        visaQuota: 6,
      },
    ],
    businessActivities: [
      {
        id: "consulting",
        label: { jp: "サービス / コンサル", en: "Service / consulting" },
        description: {
          jp: "サービスライセンス。最もコスト効率が高いカテゴリ。",
          en: "Service licence. Most cost-efficient category.",
        },
        licenseAdj: 0,
      },
      {
        id: "trading",
        label: { jp: "商業（トレーディング）", en: "Commercial (trading)" },
        description: {
          jp: "商業ライセンス。",
          en: "Commercial trading licence.",
        },
        licenseAdj: 1000,
      },
      {
        id: "it",
        label: { jp: "Eコマース / IT", en: "E-commerce / IT" },
        description: {
          jp: "Eコマースライセンスも選択可能。",
          en: "E-commerce licence also available.",
        },
        licenseAdj: 500,
      },
      {
        id: "industrial",
        label: { jp: "工業 / 軽製造", en: "Industrial / light manufacturing" },
        description: {
          jp: "工業ライセンス。倉庫・ファクトリーオプションあり。",
          en: "Industrial licence with warehouse/factory options.",
        },
        licenseAdj: 3000,
      },
    ],
  },

  spc: {
    id: "spc",
    name: "SPC",
    sourceUrl: "https://www.sharjahpublishingcity.ae",
    sourceLabel: {
      jp: "Sharjah Publishing City Free Zone 公式",
      en: "Sharjah Publishing City Free Zone official",
    },
    overview: {
      jp: "シャルジャ。出版・Eコマース・メディア向けに低コストで、コワーキングがライセンスに含まれます。",
      en: "Sharjah. Low-cost zone for publishing, e-commerce, and media with co-working included.",
    },
    registrationFee: 0,
    establishmentCard: 640,
    licenseTypes: [
      {
        id: "fze",
        label: { jp: "FZE（単独株主）", en: "FZE (sole shareholder)" },
        description: {
          jp: "1名株主のLLC。",
          en: "Single-shareholder LLC.",
        },
        licenseAdj: 0,
        registrationAdj: 0,
      },
      {
        id: "fzc",
        label: { jp: "FZC（複数株主）", en: "FZC (multiple shareholders)" },
        description: {
          jp: "SPC公式: Free Zone Company（複数株主）。",
          en: "Official SPC Free Zone Company (multiple shareholders).",
        },
        licenseAdj: 0,
        registrationAdj: 0,
      },
      {
        id: "branch",
        label: { jp: "支店（Branch）", en: "Branch" },
        description: {
          jp: "UAEまたは海外親会社の支店。",
          en: "Branch of UAE or foreign parent company.",
        },
        licenseAdj: 1500,
        registrationAdj: 500,
      },
    ],
    visaPackages: [
      {
        id: "0",
        label: { jp: "ビザ枠なし", en: "Zero visa" },
        description: {
          jp: "E-Commerce License + コワーキング: AED 5,750/年",
          en: "E-commerce licence + co-working: AED 5,750/yr",
        },
        visaCount: 0,
        licensePackageFee: 5750,
        visaProcessingEach: 0,
      },
      {
        id: "1",
        label: { jp: "1名", en: "1 visa" },
        description: {
          jp: "1ビザパッケージ: AED 13,165/年（オールイン）",
          en: "1-visa all-in package: AED 13,165/yr",
        },
        visaCount: 1,
        licensePackageFee: 13165,
        visaProcessingEach: 0,
      },
      {
        id: "2_3",
        label: { jp: "2〜3名", en: "2–3 visas" },
        description: {
          jp: "2 Visas: AED 17,660 / 3 Visas: AED 22,155",
          en: "2 visas AED 17,660 / 3 visas AED 22,155",
        },
        visaCount: 3,
        licensePackageFee: 22155,
        visaProcessingEach: 1600,
      },
      {
        id: "5_plus",
        label: { jp: "5〜6名", en: "5–6 visas" },
        description: {
          jp: "5 Visas: AED 31,145 / 6 Visas: AED 35,640",
          en: "5 visas AED 31,145 / 6 visas AED 35,640",
        },
        visaCount: 5,
        licensePackageFee: 31145,
        visaProcessingEach: 1600,
      },
    ],
    officeTypes: [
      {
        id: "flex",
        label: { jp: "コワーキング（標準）", en: "Co-working (standard)" },
        description: {
          jp: "0ビザパッケージに含まれる。追加費用なし。",
          en: "Included in zero-visa packages.",
        },
        annualFee: 0,
        visaQuota: 2,
      },
      {
        id: "small",
        label: { jp: "コワーキング（アップグレード）", en: "Co-working (upgraded)" },
        description: {
          jp: "拡張コワーキング。ビザ枠拡大に対応。",
          en: "Upgraded co-working with higher visa quota.",
        },
        annualFee: 5000,
        visaQuota: 6,
      },
      {
        id: "full",
        label: { jp: "専用オフィス（20㎡〜）", en: "Dedicated office (20 sqm+)" },
        description: {
          jp: "専用オフィス: 約 AED 19,600/年〜。",
          en: "Dedicated office from ~AED 19,600/yr.",
        },
        annualFee: 19600,
        visaQuota: 10,
      },
    ],
    businessActivities: [
      {
        id: "publishing",
        label: { jp: "出版 / Eパブリッシング", en: "Publishing / e-publishing" },
        description: {
          jp: "E-Publishing License: AED 4,999/年から。",
          en: "E-publishing licence from AED 4,999/yr.",
        },
        licenseAdj: -750,
      },
      {
        id: "ecommerce",
        label: { jp: "Eコマース", en: "E-commerce" },
        description: {
          jp: "Publishing/E-Commerce License: AED 5,750/年。",
          en: "Publishing/e-commerce licence AED 5,750/yr.",
        },
        licenseAdj: 0,
      },
      {
        id: "consulting",
        label: { jp: "一般ビジネス / コンサル", en: "General business / consulting" },
        description: {
          jp: "Standard License: AED 6,875/年。",
          en: "Standard licence AED 6,875/yr.",
        },
        licenseAdj: 1125,
      },
      {
        id: "media",
        label: { jp: "メディア / クリエイティブ", en: "Media / creative" },
        description: {
          jp: "メディア・制作関連アクティビティ。",
          en: "Media and creative production activities.",
        },
        licenseAdj: 0,
      },
    ],
  },
};

export const FREE_ZONE_LABELS: Record<FreeZone, string> = {
  dmcc: "DMCC",
  ifza: "IFZA",
  meydan: "Meydan",
  rakez: "RAKEZ",
  spc: "SPC",
};

export const RELOCATION_COST = { yes: 9000, no: 0 } as const;
export const BANK_ACCOUNT_OPENING_COST = 5000;
export const VISA_VIP_OPTION_COST = 5000;

/** HINODEYA professional service fee (excl. government pass-through). Mid-market vs typical AED 3,000–8,000 setup consulting. */
export const HINODEYA_SERVICE_BASE: Record<FreeZone, number> = {
  rakez: 4200,
  spc: 4500,
  ifza: 5500,
  meydan: 5800,
  dmcc: 7500,
};

export const HINODEYA_SERVICE_ADDONS = {
  regulatedActivity: 1500,
  branchEntity: 700,
  visaCoordinationPerPerson: 350,
  visaCoordinationMax: 1050,
} as const;

export const HINODEYA_SERVICE_NOTE: LangCopy = {
  jp: "進出戦略整理、書類作成、当局手続き代行、日本語サポートを含むHINODEYAのサービス料です（政府料金は別途）。",
  en: "HINODEYA service fee covering strategy, documentation, government liaison, and Japanese-language support (government fees are separate).",
};

/** RAKEZ SME packages list AED 14,320 but E-channel (AED 2,200) is billed separately per official FAQ. */
export const RAKEZ_PRICING_NOTE: LangCopy = {
  jp: "※ SMEパッケージ（AED 14,320）はライセンス・エスタブリッシュメントカード・ビザ・保険を含みます。E-channel登録（AED 2,200）などが別途かかり、ご自身で設立した場合の初年度実費は AED 17,000 前後が一般的です。E-channel保証金（AED 5,050・返金可）は見積もりに含みません。",
  en: "SME package (AED 14,320) includes licence, establishment card, visa, and insurance. E-channel registration (AED 2,200) and similar steps are billed separately; self-setup first-year direct costs are typically around AED 17,000. Refundable E-channel deposit (AED 5,050) is not included.",
};

export type Relocation = "yes" | "no";
export type VisaSpeed = "standard" | "vip";
export type BankAccountOption = "yes" | "no";

export const VISA_SPEED_CONFIG = {
  standard: {
    businessDays: 6,
    extraCost: 0,
    label: {
      jp: "通常（営業日6日）",
      en: "Standard (6 business days)",
    },
    description: {
      jp: "標準的なビザ処理スケジュール。追加費用なし。",
      en: "Standard visa processing timeline. No additional fee.",
    },
  },
  vip: {
    businessDays: 3,
    extraCost: VISA_VIP_OPTION_COST,
    label: {
      jp: "VIP（営業日3日）",
      en: "VIP (3 business days)",
    },
    description: {
      jp: "優先処理オプション。追加 AED 5,000。",
      en: "Priority processing option. Additional AED 5,000.",
    },
  },
} as const;

export const BANK_ACCOUNT_CONFIG = {
  yes: {
    cost: BANK_ACCOUNT_OPENING_COST,
    label: { jp: "口座開設サポートあり", en: "Bank account opening support" },
    description: {
      jp: "法人口座開設のサポート付き。追加 AED 5,000。",
      en: "Corporate bank account opening support. Additional AED 5,000.",
    },
  },
  no: {
    cost: 0,
    label: { jp: "なし", en: "Not included" },
    description: {
      jp: "口座開設サポートは含みません。",
      en: "Bank account opening support not included.",
    },
  },
} as const;

export type SimulatorSelections = {
  majorActivity: string;
  subActivity: string;
  companyType: string;
  visas: string;
  office: string;
  relocation: Relocation;
  visaSpeed: VisaSpeed;
  bankAccount: BankAccountOption;
};

export type CostBreakdown = {
  license: number;
  registration: number;
  visas: number;
  office: number;
  establishment: number;
  governmentExtras: number;
  relocationCost: number;
  visaSpeedCost: number;
  bankAccountCost: number;
  hinodeyaServiceFee: number;
  /** Zone and government fees before HINODEYA service fee */
  directCost: number;
  visaProcessingDays: number;
  total: number;
};

export function getDefaultSelections(
  zone: FreeZone,
  majorActivity = "consulting",
  subActivity = "management_consulting",
): SimulatorSelections {
  const config = FREE_ZONE_CONFIGS[zone];
  return {
    majorActivity,
    subActivity,
    companyType: config.licenseTypes[0].id,
    visas: config.visaPackages[0].id,
    office: config.officeTypes[0].id,
    relocation: "no",
    visaSpeed: "standard",
    bankAccount: "no",
  };
}

export function hasVisaQuota(
  zoneId: FreeZone,
  visaSelectionId: string,
): boolean {
  const pkg = FREE_ZONE_CONFIGS[zoneId].visaPackages.find(
    (v) => v.id === visaSelectionId,
  );
  return (pkg?.visaCount ?? 0) > 0;
}

export function calculateHinodeyaServiceFee(
  zoneId: FreeZone,
  selections: SimulatorSelections,
): number {
  const sub = getSubActivity(selections.majorActivity, selections.subActivity);
  const visaPkg = FREE_ZONE_CONFIGS[zoneId].visaPackages.find(
    (v) => v.id === selections.visas,
  );

  let fee = HINODEYA_SERVICE_BASE[zoneId];

  if (sub?.regulated) {
    fee += HINODEYA_SERVICE_ADDONS.regulatedActivity;
  }
  if (selections.companyType === "branch") {
    fee += HINODEYA_SERVICE_ADDONS.branchEntity;
  }
  if (visaPkg && visaPkg.visaCount > 0) {
    fee += Math.min(
      visaPkg.visaCount * HINODEYA_SERVICE_ADDONS.visaCoordinationPerPerson,
      HINODEYA_SERVICE_ADDONS.visaCoordinationMax,
    );
  }

  return fee;
}

export function calculateZoneCost(
  zoneId: FreeZone,
  selections: SimulatorSelections,
): CostBreakdown {
  const zone = FREE_ZONE_CONFIGS[zoneId];
  const licenseType =
    zone.licenseTypes.find((l) => l.id === selections.companyType) ??
    zone.licenseTypes[0];
  const visaPkg =
    zone.visaPackages.find((v) => v.id === selections.visas) ??
    zone.visaPackages[0];
  const office =
    zone.officeTypes.find((o) => o.id === selections.office) ??
    zone.officeTypes[0];

  const activityAdj = getActivityLicenseAdj(
    selections.majorActivity,
    selections.subActivity,
    zoneId,
  );

  const license =
    visaPkg.licensePackageFee + licenseType.licenseAdj + activityAdj;
  const registration = zone.registrationFee + licenseType.registrationAdj;

  const billableVisas =
    visaPkg.visaCount > 0 && visaPkg.visaProcessingEach > 0
      ? visaPkg.visaCount
      : 0;
  const visas = billableVisas * visaPkg.visaProcessingEach;

  const officeFee =
    office.id === zone.officeTypes[0].id ? 0 : office.annualFee;

  const establishment =
    visaPkg.includesEstablishment || visaPkg.visaCount === 0
      ? 0
      : zone.establishmentCard;
  const governmentExtras = visaPkg.governmentExtras ?? 0;
  const relocationCost = RELOCATION_COST[selections.relocation];

  const visaQuotaActive = visaPkg.visaCount > 0;
  const visaSpeedCost =
    visaQuotaActive && selections.visaSpeed === "vip"
      ? VISA_SPEED_CONFIG.vip.extraCost
      : 0;
  const visaProcessingDays = visaQuotaActive
    ? VISA_SPEED_CONFIG[selections.visaSpeed].businessDays
    : 0;
  const bankAccountCost = BANK_ACCOUNT_CONFIG[selections.bankAccount].cost;
  const hinodeyaServiceFee = calculateHinodeyaServiceFee(zoneId, selections);

  const directCost =
    license +
    registration +
    visas +
    officeFee +
    establishment +
    governmentExtras +
    relocationCost +
    visaSpeedCost +
    bankAccountCost;

  const total = directCost + hinodeyaServiceFee;

  return {
    license,
    registration,
    visas,
    office: officeFee,
    establishment,
    governmentExtras,
    relocationCost,
    visaSpeedCost,
    bankAccountCost,
    hinodeyaServiceFee,
    directCost,
    visaProcessingDays,
    total,
  };
}

export function rankZonesByActivity(
  selections: SimulatorSelections,
): ZoneRecommendation[] {
  const sub = getSubActivity(selections.majorActivity, selections.subActivity);
  const allowed = getAllowedZones(selections.majorActivity, selections.subActivity);

  const ranked = allowed
    .map((zone) => ({
      zone,
      total: calculateZoneCost(zone, selections).total,
      recIndex: sub?.recommendedZones.indexOf(zone) ?? 99,
    }))
    .sort((a, b) => a.recIndex - b.recIndex || a.total - b.total);

  return ranked.map((item, index) => ({
    zone: item.zone,
    total: item.total,
    rank: index + 1,
    isRecommended: index < 2,
    reason:
      sub != null
        ? getRecommendationReason(item.zone, sub, item.total, "jp")
        : { jp: "", en: "" },
  }));
}

/** @deprecated Use rankZonesByActivity for activity-aware ranking */
export function rankZonesByCost(
  selections: SimulatorSelections,
): { zone: FreeZone; total: number }[] {
  const allowed = getAllowedZones(selections.majorActivity, selections.subActivity);
  return allowed
    .map((zone) => ({
      zone,
      total: calculateZoneCost(zone, selections).total,
    }))
    .sort((a, b) => a.total - b.total);
}
