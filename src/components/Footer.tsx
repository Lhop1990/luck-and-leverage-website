import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-rule mt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link
              href="/"
              className="inline-flex items-center min-h-[44px] font-heading uppercase tracking-tight text-xl font-bold hover:text-lime focus-visible:text-lime focus-visible:outline-none transition-colors"
            >
              Luck <span className="text-lime ml-1.5">&amp;</span>
              <span className="ml-1.5">Leverage</span>
            </Link>
            <p className="mt-4 text-sm text-ink/60 max-w-xs">
              Systems that win the best recruiters &amp; talent leaders quickly
              &amp; within budget.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/obsession-framework"
                  className="inline-flex items-center min-h-[44px] text-ink/80 hover:text-lime focus-visible:text-lime focus-visible:outline-none transition-colors"
                >
                  The Obsession Framework
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center min-h-[44px] text-ink/80 hover:text-lime focus-visible:text-lime focus-visible:outline-none transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center min-h-[44px] text-ink/80 hover:text-lime focus-visible:text-lime focus-visible:outline-none transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Start a conversation</p>
            <Link
              href="/contact"
              className="inline-flex items-center min-h-[44px] px-5 border border-lime text-lime text-xs uppercase tracking-wider hover:bg-lime hover:text-bg focus-visible:bg-lime focus-visible:text-bg focus-visible:outline-none transition-colors"
            >
              Book an introduction call
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-rule flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-ink/60">
          <p>© {new Date().getFullYear()} Luck &amp; Leverage. All rights reserved.</p>
          <p className="uppercase tracking-wider">Advisory · Search</p>
        </div>
      </div>
    </footer>
  );
}
