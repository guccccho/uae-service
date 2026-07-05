import React from "react";

type Props = {
  imageUrl: string;
  homepageUrl?: string;
  alt: string;
  className?: string;
  showChrome?: boolean;
};

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function MediaCardPreview({
  imageUrl,
  homepageUrl,
  alt,
  className = "",
  showChrome = true,
}: Props) {
  const embedded = Boolean(homepageUrl && showChrome);

  return (
    <div
      className={`overflow-hidden bg-slate-100 ${embedded ? "ring-1 ring-inset ring-slate-200/60" : ""} ${className}`}
    >
      {embedded && (
        <div className="flex items-center gap-1.5 border-b border-slate-200/80 bg-gradient-to-b from-slate-50 to-slate-100/90 px-3 py-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#febc2e]" aria-hidden />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#28c840]" aria-hidden />
          <span className="ml-1.5 min-w-0 flex-1 truncate rounded-md bg-white/80 px-2 py-0.5 text-center text-[10px] text-slate-500">
            {hostname(homepageUrl!)}
          </span>
        </div>
      )}
      <div className="relative aspect-[1280/520] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={alt}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {embedded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-900/10 to-transparent" />
        )}
      </div>
    </div>
  );
}
