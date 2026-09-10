import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

/*
  Buttons are Chakra Petch Medium, uppercase, 0.08em tracking, square
  corners (the identity is mitred at 45°, not rounded).

  States, per the guidelines:
  hover  — green lightens to green-400; charcoal lightens to charcoal-700;
           outline gains a charcoal fill
  press  — colour darkens and the element shifts down 1px
           (no scale-down, no shadow bloom)
  focus  — 2px green outline at 2px offset, inherited from globals.css
*/

type Variant = "primary" | "secondary" | "outline" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-3 rounded-none font-heading font-medium uppercase tracking-nav " +
  "transition-colors duration-[140ms] ease-[var(--ease-standard)] active:translate-y-px " +
  "disabled:opacity-40 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  sm: "min-h-9 px-4 text-[11px]",
  md: "min-h-11 px-6 text-xs",
  lg: "min-h-13 px-8 text-[13px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-green-500 text-charcoal-800 border border-transparent hover:bg-green-400 active:bg-green-600",
  secondary:
    "bg-charcoal-800 text-white border border-transparent hover:bg-charcoal-700 active:bg-charcoal-900",
  outline:
    "bg-transparent text-charcoal-800 border border-charcoal-800 hover:bg-charcoal-800 hover:text-white",
  // On charcoal bands.
  inverse:
    "bg-transparent text-white border border-white/55 hover:bg-white hover:text-charcoal-800",
  ghost:
    "px-0 min-h-0 border-0 border-b border-charcoal/14 text-charcoal-800 hover:text-green-700 hover:border-green-500",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  /** The trailing arrow reads as geometric, not decorative. */
  trailing?: boolean;
  children: ReactNode;
  className?: string;
} & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">)
  | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
);

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    trailing = true,
    children,
    className = "",
    ...rest
  } = props;

  const cls = `${base} ${variant === "ghost" ? "" : sizes[size]} ${variants[variant]} ${className}`;

  const body = (
    <>
      {children}
      {trailing && (
        <span aria-hidden className="font-heading">
          &#8594;
        </span>
      )}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={cls} {...linkRest}>
        {body}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {body}
    </button>
  );
}
