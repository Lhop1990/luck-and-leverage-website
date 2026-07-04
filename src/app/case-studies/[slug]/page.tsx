import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Section, DottedRule } from "@/components/Section";
import { caseStudies, getCaseStudy, type Block } from "@/lib/caseStudies";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study" };
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: { title: study.title, description: study.summary, type: "article" },
  };
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) =>
        block.type === "p" ? (
          <p key={i} className="text-base md:text-lg text-ink/85 leading-relaxed">
            {block.text}
          </p>
        ) : (
          <div key={i}>
            {block.label && (
              <p className="text-[10px] uppercase tracking-wider text-ink/50 mb-3">
                {block.label}
              </p>
            )}
            <ul className="space-y-2.5">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base md:text-lg text-ink/85 leading-relaxed"
                >
                  <span className="text-lime mt-2.5 w-3 h-px bg-lime shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ),
      )}
    </div>
  );
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      {/* HERO */}
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 pt-10 sm:pt-14 md:pt-20 pb-10 md:pb-16">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-ink/60 hover:text-lime focus-visible:text-lime focus-visible:outline-none transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            All case studies
          </Link>

          <div className="mt-8 md:mt-10 flex items-center gap-5">
            {study.logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={study.logo}
                alt={study.client}
                className="h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-80"
              />
            )}
            <p className="text-xs uppercase tracking-wider text-ink/55">
              {study.category}
            </p>
          </div>

          <h1 className="mt-6 font-heading text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[0.95]">
            {study.title}
          </h1>

          <div className="mt-10 max-w-3xl space-y-5">
            {study.intro.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-ink/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Headline metrics */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            {study.metrics.map((m) => (
              <div key={m.value} className="flex flex-col gap-3 border-t border-rule pt-6">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-lime leading-none tracking-tight tabular-nums">
                  {m.value}
                </div>
                <p className="text-xs md:text-sm uppercase tracking-wider text-ink/70 max-w-[30ch]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <DottedRule />
      </section>

      {/* BEFORE / AFTER */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="eyebrow mb-6">Before</p>
            <ul className="space-y-4">
              {study.before.map((item) => (
                <li key={item} className="flex gap-3 text-base md:text-lg text-ink/70 leading-relaxed">
                  <span className="text-ink/40 mt-2.5 w-3 h-px bg-ink/40 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:border-l lg:border-rule lg:pl-16">
            <p className="eyebrow mb-6">After</p>
            <p className="text-base md:text-lg text-ink/85 leading-relaxed mb-6">
              {study.afterLead}
            </p>
            <ul className="space-y-4">
              {study.after.map((item) => (
                <li key={item} className="flex gap-3 text-base md:text-lg text-ink leading-relaxed">
                  <span className="text-lime mt-2.5 w-3 h-px bg-lime shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <DottedRule />

      {/* PROCESS */}
      <Section eyebrow="The process">
        <div className="grid grid-cols-1 gap-0">
          {study.process.map((step, i) => (
            <div
              key={step.heading}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 md:py-14 border-t border-rule first:border-t-0"
            >
              <div className="lg:col-span-4">
                <div className="font-heading text-4xl md:text-5xl text-lime/90 tabular-nums leading-none mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl">
                  {step.heading}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <Blocks blocks={step.blocks} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FUNNEL */}
      {study.funnel && (
        <section aria-label="The search in numbers" className="border-y border-rule">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 py-12 md:py-16">
            <p className="eyebrow mb-8 md:mb-10">The search in numbers</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {study.funnel.map((m) => (
                <div key={m.label}>
                  <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-lime leading-none tabular-nums">
                    {m.value}
                  </div>
                  <p className="mt-3 text-xs md:text-sm uppercase tracking-wider text-ink/70">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONCLUSION */}
      <Section eyebrow="The outcome">
        <div className="max-w-3xl space-y-6">
          {study.conclusion.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-heading uppercase tracking-tight text-2xl md:text-3xl lg:text-4xl text-balance leading-[1.05]"
                  : "text-base md:text-lg text-ink/80 leading-relaxed"
              }
            >
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* TESTIMONIAL */}
      {study.testimonial && (
        <>
          <DottedRule />
          <Section eyebrow="What the client said">
            <div className="max-w-4xl relative">
              <div
                aria-hidden
                className="font-heading text-9xl md:text-[12rem] text-lime/15 leading-none absolute -top-8 -left-2 select-none pointer-events-none"
              >
                &ldquo;
              </div>
              <blockquote className="relative text-xl md:text-2xl lg:text-3xl leading-[1.4] text-balance text-ink/90">
                {study.testimonial.quote}
              </blockquote>
              <p className="mt-8 text-xs uppercase tracking-wider text-lime">
                {study.testimonial.author}
              </p>
            </div>
          </Section>
        </>
      )}

      <DottedRule />

      {/* CTA */}
      <Section>
        <div className="max-w-4xl">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-balance">
            Want a process like this run on{" "}
            <span className="text-lime">your next hire?</span>
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Book an introduction call
            </Button>
            <Button href="/case-studies" variant="outline" className="w-full sm:w-auto">
              See more case studies
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
