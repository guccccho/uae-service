"use client";

import React from "react";
import type { FreeZone } from "./data";
import type { HinodeyaSimulatorZone } from "./activities";
import { pickLang, type Lang, type LangCopy } from "../i18n";
import {
  ZONE_MEDIA,
  ZONE_MEDIA_ATTRIBUTION,
  type ZoneMediaConfig,
} from "./zone-media";

const BRAND = "#bc002d";

const OFFICIAL_SITE: LangCopy = {
  jp: "公式サイト →",
  en: "Official site →",
  ar: "الموقع الرسمي →",
};

const VIEW_OFFICIAL: LangCopy = {
  jp: "公式ページで見る",
  en: "View on official site",
  ar: "عرض على الموقع الرسمي",
};

type Props = {
  zone: FreeZone;
  lang: Lang;
  compact?: boolean;
};

function MediaEmbed({
  embed,
  lang,
}: {
  embed: NonNullable<ZoneMediaConfig["video"] | ZoneMediaConfig["virtualTour"]>;
  lang: Lang;
}) {
  const title = pickLang(embed.title, lang);
  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-slate-200/80">
      <p className="bg-slate-50 px-4 py-2 text-[11px] font-medium text-slate-600">
        {title}
      </p>
      <div className="relative aspect-video w-full bg-slate-900">
        <iframe
          src={embed.embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture; xr-spatial-tracking"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="px-4 py-2 text-[10px] text-slate-400">
        <a
          href={embed.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          {pickLang(VIEW_OFFICIAL, lang)}
        </a>
      </p>
    </div>
  );
}

const ZONE_LOGO_CLASS: Record<HinodeyaSimulatorZone, string> = {
  dmcc: "h-7 w-auto max-w-[140px] object-contain",
  rakez: "h-8 w-auto max-w-[220px] object-contain",
};

export function ZoneLogo({
  zone,
  className,
}: {
  zone: HinodeyaSimulatorZone;
  className?: string;
}) {
  const media = ZONE_MEDIA[zone];
  return (
    <img
      src={media.logo}
      alt={media.logoAlt}
      className={className ?? ZONE_LOGO_CLASS[zone]}
    />
  );
}

export default function ZoneShowcase({ zone, lang, compact = false }: Props) {
  if (zone !== "dmcc" && zone !== "rakez") return null;

  const media = ZONE_MEDIA[zone];
  const embed = media.video ?? media.virtualTour;

  if (compact) {
    return (
      <div className="flex items-center gap-3">
        <ZoneLogo
          zone={zone}
          className={
            zone === "rakez"
              ? "h-7 w-auto max-w-[160px] object-contain"
              : "h-6 w-auto max-w-[100px] object-contain"
          }
        />
        <p className="text-[11px] leading-relaxed text-slate-500">{pickLang(media.overview, lang)}</p>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-5 rounded-xl border border-slate-100 bg-slate-50/50 p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <ZoneLogo zone={zone} />
          <p className="text-xs leading-relaxed text-slate-600">{pickLang(media.overview, lang)}</p>
        </div>
        <a
          href={media.homepageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-[11px] font-medium underline-offset-2 hover:underline"
          style={{ color: BRAND }}
        >
          {pickLang(OFFICIAL_SITE, lang)}
        </a>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {media.images.map((image) => (
          <a
            key={image.url}
            href={image.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-lg bg-white ring-1 ring-slate-200/80 transition hover:ring-brand/40"
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={image.url}
                alt={pickLang(image.caption, lang)}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <p className="px-3 py-2 text-[10px] leading-relaxed text-slate-600">
              {pickLang(image.caption, lang)}
            </p>
          </a>
        ))}
      </div>

      {embed && <MediaEmbed embed={embed} lang={lang} />}

      <p className="text-[10px] text-slate-400">
        {pickLang(ZONE_MEDIA_ATTRIBUTION, lang)} ·{" "}
        <a
          href={media.facilitiesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          {pickLang(media.facilitiesLabel, lang)}
        </a>
      </p>
    </div>
  );
}
