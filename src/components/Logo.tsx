import Image from "next/image";

/*
  The logo lockup: the mark, then the wordmark stacked on two lines.

  The mark is brand artwork and is never redrawn, recoloured or given
  effects (guidelines p.12) — the three supplied colourways live in
  public/brand/. The wordmark is set in the brand display face, and the
  legal name "Luck & Leverage" renders as LUCK + LEVERAGE in the
  logotype, so the plus is used here and "&" is reserved for prose.
*/

type Props = {
  tone?: "dark" | "light";
  /** "stacked" is the brand lockup; "mark" drops the wordmark. */
  variant?: "stacked" | "mark";
  className?: string;
};

export function Logo({
  tone = "dark",
  variant = "stacked",
  className = "",
}: Props) {
  const ink = tone === "dark" ? "text-charcoal-800" : "text-white";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/brand/mark-green.png"
        alt=""
        aria-hidden
        width={461}
        height={512}
        priority
        className="h-9 w-auto"
      />
      {variant === "stacked" && (
        <span
          className={`font-heading font-bold uppercase text-[0.95rem] leading-[1.05] tracking-[-0.01em] ${ink}`}
        >
          <span className="block">Luck +</span>
          <span className="block">Leverage</span>
        </span>
      )}
    </span>
  );
}
