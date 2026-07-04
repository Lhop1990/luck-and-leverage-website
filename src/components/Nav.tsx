"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/obsession-framework", label: "The Obsession Framework" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur border-b border-rule"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="inline-flex items-center min-h-[44px] font-heading uppercase tracking-tight text-base md:text-lg font-bold hover:text-lime focus-visible:text-lime focus-visible:outline-none transition-colors"
            aria-label="Luck & Leverage home"
          >
            Luck <span className="text-lime mx-1.5">&amp;</span> Leverage
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center min-h-[44px] px-3 text-xs uppercase tracking-wider text-ink/80 hover:text-lime focus-visible:text-lime focus-visible:outline-none transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center min-h-[44px] px-5 ml-4 border border-lime text-lime text-xs uppercase tracking-wider hover:bg-lime hover:text-bg focus-visible:bg-lime focus-visible:text-bg focus-visible:outline-none transition-colors"
            >
              Book a call
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink hover:text-lime focus-visible:text-lime focus-visible:outline-none transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden pb-6 border-t border-rule">
            <nav aria-label="Primary mobile" className="flex flex-col pt-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center min-h-[48px] text-sm uppercase tracking-wider text-ink/90 hover:text-lime focus-visible:text-lime focus-visible:outline-none border-b border-rule"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center min-h-[48px] px-5 border border-lime text-lime text-xs uppercase tracking-wider hover:bg-lime hover:text-bg focus-visible:bg-lime focus-visible:text-bg focus-visible:outline-none transition-colors"
              >
                Book a call
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
