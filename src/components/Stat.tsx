/*
  Figures carry the argument in this brand: set large in Chakra Petch
  with a small Inter caption underneath.
*/

export function Stat({
  number,
  label,
  tone = "light",
}: {
  number: string;
  label: string;
  tone?: "light" | "inverse";
}) {
  const inverse = tone === "inverse";

  return (
    <div
      className={`flex flex-col gap-3 border-t pt-6 ${
        inverse ? "border-white/18" : "border-charcoal/14"
      }`}
    >
      <div
        className={`font-heading text-5xl md:text-6xl leading-[1.02] tracking-display tabular-nums ${
          inverse ? "text-white" : "text-charcoal-800"
        }`}
      >
        {number}
      </div>
      <p
        className={`text-sm leading-snug max-w-[22ch] ${
          inverse ? "text-white/80" : "text-charcoal-700"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
