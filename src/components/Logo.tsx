/*
  Wordmark, set in the brand display face.

  The legal name is "Luck & Leverage"; the logotype renders it as
  LUCK + LEVERAGE with the plus mark, so the "+" is used here and "&"
  is reserved for prose (brand guidelines, Spelling and vocabulary).

  NOTE: the proprietary logo MARK is not yet in the repo. The guidelines
  are explicit that the mark must never be redrawn, so it is deliberately
  omitted rather than approximated. Drop the official artwork into
  public/brand/ and render it alongside this wordmark to complete the
  lockup — this component is the only place that needs to change.
*/

type Props = {
  /** "stacked" matches the two-line lockup in the brand deck. */
  variant?: "inline" | "stacked";
  tone?: "dark" | "light";
  className?: string;
};

export function Logo({
  variant = "inline",
  tone = "dark",
  className = "",
}: Props) {
  const ink = tone === "dark" ? "text-charcoal-800" : "text-white";

  return (
    <span
      className={`font-heading font-semibold uppercase leading-none tracking-[-0.01em] ${ink} ${className}`}
    >
      {variant === "stacked" ? (
        <span className="flex flex-col gap-[0.12em]">
          <span>
            Luck <span className="text-green-500">+</span>
          </span>
          <span>Leverage</span>
        </span>
      ) : (
        <span>
          Luck <span className="text-green-500">+</span> Leverage
        </span>
      )}
    </span>
  );
}
