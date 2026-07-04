export function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-t border-rule pt-6">
      <div className="font-heading text-5xl md:text-6xl lg:text-7xl text-lime leading-none tracking-tight tabular-nums">
        {number}
      </div>
      <p className="text-xs md:text-sm uppercase tracking-wider text-ink/70 max-w-[28ch]">
        {label}
      </p>
    </div>
  );
}
