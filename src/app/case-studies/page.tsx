import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section, DottedRule } from "@/components/Section";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real executive search engagements run by Luck & Leverage — the brief, the process, and the result. How leading recruitment and search firms built their teams.",
};

export default function CaseStudies() {
  return (
    <>
      {/* HERO */}
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-24 pb-10 md:pb-16">
          <p className="eyebrow mb-6 md:mb-8">Case studies</p>
          <h1 className="font-heading text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl text-balance leading-[0.92] md:leading-[0.9]">
            How the best firms{" "}
            <span className="text-lime">build their teams.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-base md:text-lg text-ink/80 leading-relaxed">
            A look behind recent executive search engagements — the brief, the
            process we ran, and the result. Real clients, real outcomes.
          </p>
        </div>
        <DottedRule />
      </section>

      {/* CASE STUDY CARDS */}
      <Section>
        <div className="grid grid-cols-1 gap-0">
          {caseStudies.map((study, i) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 md:py-16 border-t border-rule first:border-t-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
            >
              <div className="lg:col-span-4">
                <p className="eyebrow mb-4">
                  Case {String(i + 1).padStart(2, "0")}
                </p>
                {study.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={study.logo}
                    alt={study.client}
                    className="h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <p className="font-heading text-3xl md:text-4xl">{study.client}</p>
                )}
                <p className="mt-5 text-xs uppercase tracking-wider text-ink/55">
                  {study.category}
                </p>
              </div>

              <div className="lg:col-span-8">
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-balance leading-tight group-hover:text-lime transition-colors">
                  {study.title}
                </h2>
                <p className="mt-5 text-sm md:text-base text-ink/80 leading-relaxed max-w-2xl">
                  {study.summary}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
                  {study.metrics.map((m) => (
                    <div key={m.value}>
                      <div className="font-heading text-2xl md:text-3xl text-lime tabular-nums leading-none">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-lime">
                  Read case study
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <DottedRule />

      {/* CTA */}
      <Section>
        <div className="max-w-4xl">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-balance">
            Want a process like this run on{" "}
            <span className="text-lime">your next hire?</span>
          </h2>
          <div className="mt-10">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Book an introduction call
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
