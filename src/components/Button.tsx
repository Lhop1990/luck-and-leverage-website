import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-xs uppercase tracking-wider font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-bg hover:bg-ink hover:text-lime",
  outline:
    "border border-lime text-lime hover:bg-lime hover:text-bg",
  ghost:
    "text-ink hover:text-lime",
};

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">)
  | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
);

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "", ...rest } = props;
  const cls = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={cls} {...linkRest}>
        {children}
        <Arrow />
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
      <Arrow />
    </button>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
