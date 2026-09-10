import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Section";
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
      <section className="bg-ivory-100">
        <Container className="pt-12 sm:pt-16 md:pt-24 pb-16 md:pb-24">
          <p className="eyebrow mb-6 md:mb-8">Case studies</p>
          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-balance">
            How the best firms{" "}
            <span className="emph">build their teams.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-charcoal-700 leading-relaxed">
            A look behind recent executive search engagements — the brief, the
            process we ran, and the result. Real clients, real outcomes.
          </p>
        </Container>
      </section>

      {/* CASE STUDY CARDS */}
      <Section tone="white">
        <div className="grid grid-cols-1 gap-0">
          {caseStudies.map((study, i) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 md:py-16 border-t border-charcoal/14 first:border-t-0"
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
                    className="h-7 md:h-8 w-auto object-contain brightness-0 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <p className="font-heading uppercase text-3xl md:text-4xl text-charcoal-800">{study.client}</p>
                )}
                <p className="eyebrow mt-5">{study.category}</p>
              </div>

              <div className="lg:col-span-8">
                <h2 className="text-2xl md:text-3xl text-balance leading-[1.1] transition-colors group-hover:text-green-700">
                  {study.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed max-w-2xl">
                  {study.summary}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
                  {study.metrics.map((m) => (
                    <div key={m.value}>
                      <div className="font-heading text-2xl md:text-3xl text-charcoal-800 tabular-nums leading-none">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                <span className="mt-8 inline-flex items-center gap-2 font-heading text-xs uppercase tracking-nav text-green-700">
                  Read case study
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    &#8594;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="light">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
            Want a process like this run on{" "}
            <span className="emph">your next hire?</span>
          </h2>
          <div className="mt-10">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              Book an introduction call
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
