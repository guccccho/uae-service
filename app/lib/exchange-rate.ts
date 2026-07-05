const CURRENCY_API_PRIMARY =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/currencies/aed.json";
const CURRENCY_API_FALLBACK =
  "https://{date}.currency-api.pages.dev/v1/currencies/aed.json";

export type ExchangeRateResult = {
  rate: number;
  date: string;
};

export function getFirstOfMonthDate(reference = new Date()): string {
  const year = reference.getUTCFullYear();
  const month = String(reference.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}-01`;
}

function addDays(isoDate: string, days: number): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

async function fetchRateForDate(date: string): Promise<number | null> {
  const urls = [
    CURRENCY_API_PRIMARY.replace("{date}", date),
    CURRENCY_API_FALLBACK.replace("{date}", date),
  ];

  for (const url of urls) {
    try {
      const response = await fetch(url, { next: { revalidate: 86400 } });
      if (!response.ok) continue;
      const data = (await response.json()) as { aed?: { jpy?: number } };
      const rate = data.aed?.jpy;
      if (typeof rate === "number" && rate > 0) return rate;
    } catch {
      // try next URL
    }
  }

  return null;
}

async function fetchLatestRate(): Promise<number | null> {
  return fetchRateForDate("latest");
}

/** Returns AED→JPY using the 1st of the current month, with nearby-date fallbacks. */
export async function fetchMonthlyAedJpyRate(
  reference = new Date(),
): Promise<ExchangeRateResult> {
  const firstOfMonth = getFirstOfMonthDate(reference);

  for (let offset = 0; offset <= 4; offset++) {
    const candidate = addDays(firstOfMonth, offset);
    const rate = await fetchRateForDate(candidate);
    if (rate !== null) {
      return { rate, date: firstOfMonth };
    }
  }

  const prevMonth = new Date(
    Date.UTC(reference.getUTCFullYear(), reference.getUTCMonth() - 1, 1),
  );
  const prevFirst = getFirstOfMonthDate(prevMonth);
  const prevRate = await fetchRateForDate(prevFirst);
  if (prevRate !== null) {
    return { rate: prevRate, date: prevFirst };
  }

  const latest = await fetchLatestRate();
  if (latest !== null) {
    return { rate: latest, date: firstOfMonth };
  }

  return { rate: 40, date: firstOfMonth };
}

import type { Lang } from "../i18n";

export function formatRateDate(date: string, lang: Lang): string {
  const [year, month, day] = date.split("-").map(Number);
  if (lang === "jp") {
    return `${year}年${month}月${day}日`;
  }
  if (lang === "ar") {
    return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("ar-AE", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  }
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
