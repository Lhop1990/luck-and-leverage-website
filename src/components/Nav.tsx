"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

/*
  The header is fixed and transparent over the hero, resolving to a
  blurred ivory panel on scroll. Nothing else on the site is sticky.
  The logo sits top-left, primary CTA top-right.
*/

const links = [
  { href: "/obsession-framework", label: "The Obsession Framework" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-[220ms] ease-[var(--ease-standard)] ${
        scrolled
          ? "bg-ivory-100/92 backdrop-blur-[14px] backdrop-saturate-[1.2] border-b border-charcoal/14"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="inline-flex items-center min-h-11 text-base md:text-lg hover:opacity-70 transition-opacity"
            aria-label="Luck and Leverage — home"
          >
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex items-center min-h-11 font-heading text-xs uppercase tracking-nav transition-colors duration-[140ms] hover:text-green-700 ${
                    active ? "text-green-700" : "text-charcoal-800"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="inline-flex items-center min-h-11 px-6 bg-green-500 text-charcoal-800 font-heading font-medium text-xs uppercase tracking-nav transition-colors duration-[140ms] hover:bg-green-400 active:bg-green-600 active:translate-y-px"
            >
              Book a call
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-charcoal-800 hover:text-green-700 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden>
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden pb-6 border-t border-charcoal/14">
            <nav aria-label="Primary mobile" className="flex flex-col pt-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center min-h-12 font-heading text-sm uppercase tracking-nav text-charcoal-800 hover:text-green-700 border-b border-charcoal/14 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center justify-center min-h-12 px-5 bg-green-500 text-charcoal-800 font-heading font-medium text-xs uppercase tracking-nav hover:bg-green-400 transition-colors"
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
