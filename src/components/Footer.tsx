import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Rule } from "@/components/Section";

/* The footer is the site's dark anchor — charcoal at its deepest step. */

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white/62 on-dark">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <Link
              href="/"
              className="inline-flex items-center min-h-11 text-xl hover:opacity-70 transition-opacity"
            >
              <Logo variant="stacked" tone="light" />
            </Link>
            <p className="mt-6 text-sm max-w-[34ch]">
              Systems that win the best recruiters &amp; talent leaders quickly
              &amp; within budget.
            </p>
          </div>

          <div>
            <p className="eyebrow eyebrow-inverse mb-4">Explore</p>
            <ul className="flex flex-col">
              <li>
                <Link
                  href="/obsession-framework"
                  className="inline-flex items-center min-h-11 font-heading text-xs uppercase tracking-nav hover:text-green-500 transition-colors"
                >
                  The Obsession Framework
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center min-h-11 font-heading text-xs uppercase tracking-nav hover:text-green-500 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center min-h-11 font-heading text-xs uppercase tracking-nav hover:text-green-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow eyebrow-inverse mb-4">Start a conversation</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-11 px-6 bg-green-500 text-charcoal-800 font-heading font-medium text-xs uppercase tracking-nav hover:bg-green-400 active:bg-green-600 transition-colors"
            >
              Book an introduction call
            </Link>
          </div>
        </div>

        <Rule tone="inverse" className="mt-12 mb-6" />

        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs uppercase tracking-label">
          <p>© {new Date().getFullYear()} Luck &amp; Leverage. All rights reserved.</p>
          <p>Advisory · Search</p>
        </div>
      </div>
    </footer>
  );
}
