import { ReactNode } from "react";

/*
  Layout primitives.

  Balance is the rule: alternate light and dark full-bleed bands, never
  two identical bands in a row. Section rhythm is 7.5rem desktop /
  4rem mobile; the grid maxes out at 1320px with a 2rem gutter.
*/

type Tone = "light" | "white" | "sunken" | "dark";

const tones: Record<Tone, string> = {
  light: "bg-ivory-100",
  white: "bg-white",
  sunken: "bg-ivory-200",
  dark: "bg-charcoal-800 text-white/70 on-dark",
};

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1320px] px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
  eyebrow,
  index,
  tone = "light",
  fullBleed,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  /** Zero-padded section counter, e.g. 1 renders as "01". */
  index?: number;
  tone?: Tone;
  fullBleed?: boolean;
}) {
  const inner = (
    <>
      {eyebrow && (
        <SectionLabel index={index} tone={tone === "dark" ? "inverse" : "light"}>
          {eyebrow}
        </SectionLabel>
      )}
      <div className={eyebrow ? "mt-8 md:mt-10" : ""}>{children}</div>
    </>
  );

  return (
    <section id={id} className={`py-16 md:py-30 ${tones[tone]} ${className}`}>
      {fullBleed ? inner : <Container>{inner}</Container>}
    </section>
  );
}

/* Where another brand would use an icon, Luck & Leverage uses an
   uppercase label or a number. */
export function SectionLabel({
  children,
  index,
  tone = "light",
  rule = true,
}: {
  children: ReactNode;
  index?: number;
  tone?: "light" | "inverse";
  rule?: boolean;
}) {
  const inverse = tone === "inverse";

  return (
    <div className="flex items-center gap-4">
      {index != null && (
        <span
          className={`font-heading text-sm tracking-nav tabular-nums ${
            inverse ? "text-green-500" : "text-green-700"
          }`}
        >
          {String(index).padStart(2, "0")}
        </span>
      )}
      <span className={`eyebrow ${inverse ? "eyebrow-inverse" : ""}`}>
        {children}
      </span>
      {rule && (
        <i
          aria-hidden
          className={`flex-1 h-px ${inverse ? "bg-white/18" : "bg-charcoal/14"}`}
        />
      )}
    </div>
  );
}

/* 1px hairline for dividers. A 3px green rule marks an active or
   featured item — see `heavy`. */
export function Rule({
  className = "",
  tone = "light",
  heavy = false,
}: {
  className?: string;
  tone?: "light" | "inverse";
  heavy?: boolean;
}) {
  const color = heavy
    ? "bg-green-500"
    : tone === "inverse"
      ? "bg-white/18"
      : "bg-charcoal/14";

  return (
    <div className={`${heavy ? "h-[3px]" : "h-px"} ${color} ${className}`} aria-hidden />
  );
}
