import React from "react";

type Variant = "hero" | "section" | "mark";

type Props = {
  variant?: Variant;
  className?: string;
};

export function HinomaruMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border border-brand/15 bg-white shadow-[0_2px_12px_rgba(188,0,45,0.08)] ${className}`}
      aria-hidden
    >
      <span className="rounded-full bg-brand" style={{ width: "52%", height: "52%" }} />
    </span>
  );
}

export function HinomaruMotif({ variant = "section", className = "" }: Props) {
  if (variant === "mark") {
    return <HinomaruMark className={className} />;
  }

  if (variant === "hero") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
        <div className="absolute -right-16 top-8 h-56 w-56 rounded-full bg-brand/[0.12] blur-2xl sm:-right-8 sm:top-12 sm:h-72 sm:w-72" />
        <div className="absolute right-6 top-16 flex h-28 w-28 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm sm:right-16 sm:top-20 sm:h-36 sm:w-36">
          <span className="h-[58%] w-[58%] rounded-full bg-brand/85 shadow-[0_8px_32px_rgba(188,0,45,0.35)]" />
        </div>
      </div>
    );
  }

  return (
    <div className={`pointer-events-none absolute overflow-hidden ${className}`} aria-hidden>
      <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-brand/[0.05]" />
      <div className="absolute right-0 top-1/2 flex h-24 w-24 -translate-y-1/2 items-center justify-center rounded-full border border-brand/10 bg-brand/[0.04]">
        <span className="h-[55%] w-[55%] rounded-full bg-brand/[0.18]" />
      </div>
    </div>
  );
}
