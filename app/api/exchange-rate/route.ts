import { NextResponse } from "next/server";
import {
  fetchMonthlyAedJpyRate,
  formatRateDate,
} from "../../lib/exchange-rate";

export const revalidate = 86400;

export async function GET() {
  const { rate, date } = await fetchMonthlyAedJpyRate();

  return NextResponse.json({
    rate: Math.round(rate * 100) / 100,
    date,
    label: {
      jp: `${formatRateDate(date, "jp")}レート`,
      en: `Rate as of ${formatRateDate(date, "en")}`,
    },
  });
}
