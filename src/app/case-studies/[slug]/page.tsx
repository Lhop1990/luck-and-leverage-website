import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Section";
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
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) =>
        block.type === "p" ? (
          <p key={i} className="text-lg leading-relaxed measure-body">
            {block.text}
          </p>
        ) : (
          <div key={i}>
            {block.label && <p className="eyebrow mb-3">{block.label}</p>}
            <ul className="flex flex-col gap-2.5">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-lg leading-relaxed">
                  <span aria-hidden className="mt-3.5 w-3 h-px bg-green-600 shrink-0" />
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
      <section className="bg-ivory-100">
        <Container className="pt-10 sm:pt-14 md:pt-20 pb-16 md:pb-24">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-nav text-charcoal-500 hover:text-green-700 transition-colors"
          >
            <span aria-hidden>&#8592;</span>
            All case studies
          </Link>

          <div className="mt-8 md:mt-10 flex items-center gap-5">
            {study.logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={study.logo}
                alt={study.client}
                className="h-7 md:h-8 w-auto object-contain brightness-0 opacity-70"
              />
            )}
            <p className="eyebrow">{study.category}</p>
          </div>

          <h1 className="mt-6 text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] text-balance">
            {study.title}
          </h1>

          <div className="mt-10 max-w-3xl flex flex-col gap-5">
            {study.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-charcoal-700">
                {p}
              </p>
            ))}
          </div>

          {/* Headline metrics */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            {study.metrics.map((m) => (
              <div key={m.value} className="flex flex-col gap-3 border-t border-charcoal/14 pt-6">
                <div className="font-heading text-4xl md:text-5xl text-charcoal-800 leading-none tracking-display tabular-nums">
                  {m.value}
                </div>
                <p className="text-sm leading-snug text-charcoal-700 max-w-[30ch]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* BEFORE / AFTER */}
      <Section tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="eyebrow mb-6">Before</p>
            <ul className="flex flex-col gap-4">
              {study.before.map((item) => (
                <li key={item} className="flex gap-3 text-lg leading-relaxed text-charcoal-500">
                  <span aria-hidden className="mt-3.5 w-3 h-px bg-charcoal-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:border-l lg:border-charcoal/14 lg:pl-16">
            <p className="eyebrow mb-6">After</p>
            <p className="text-lg leading-relaxed mb-6">{study.afterLead}</p>
            <ul className="flex flex-col gap-4">
              {study.after.map((item) => (
                <li key={item} className="flex gap-3 text-lg leading-relaxed text-charcoal-800">
                  <span aria-hidden className="mt-3.5 w-3 h-px bg-green-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section eyebrow="The process" index={1} tone="light">
        <div className="grid grid-cols-1 gap-0">
          {study.process.map((step, i) => (
            <div
              key={step.heading}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 md:py-14 border-t border-charcoal/14 first:border-t-0"
            >
              <div className="lg:col-span-4">
                <div className="font-heading text-4xl md:text-5xl text-green-700 tabular-nums leading-none mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="text-2xl md:text-3xl">{step.heading}</h2>
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
        <section aria-label="The search in numbers" className="bg-charcoal-800 on-dark">
          <Container className="py-16 md:py-20">
            <p className="eyebrow eyebrow-inverse mb-8 md:mb-10">The search in numbers</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {study.funnel.map((m) => (
                <div key={m.label}>
                  <div className="font-heading text-4xl md:text-5xl text-white leading-none tabular-nums">
                    {m.value}
                  </div>
                  <p className="mt-3 text-sm leading-snug text-white/70">{m.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CONCLUSION */}
      <Section eyebrow="The outcome" index={2} tone="white">
        <div className="max-w-3xl flex flex-col gap-6">
          {study.conclusion.map((p, i) =>
            i === 0 ? (
              <p
                key={i}
                className="font-heading uppercase tracking-tight text-2xl md:text-3xl text-balance leading-[1.1] text-charcoal-800"
              >
                {p}
              </p>
            ) : (
              <p key={i} className="text-lg leading-relaxed text-charcoal-700">
                {p}
              </p>
            ),
          )}
        </div>
      </Section>

      {/* TESTIMONIAL */}
      {study.testimonial && (
        <Section eyebrow="What the client said" tone="sunken">
          {/* Client testimonials run long, so they are set as body copy in
              Inter rather than the uppercase display face — the brand
              reserves Chakra Petch pull quotes for short lines. The 3px
              green rule marks the block as featured. */}
          <figure className="max-w-4xl border-l-[3px] border-green-500 pl-6 md:pl-8">
            <blockquote className="text-lg md:text-xl leading-relaxed text-charcoal-800">
              &ldquo;{study.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 eyebrow">
              {study.testimonial.author}
            </figcaption>
          </figure>
        </Section>
      )}

      {/* CTA */}
      <Section tone="light">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
            Want a process like this run on{" "}
            <span className="emph">your next hire?</span>
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              Book an introduction call
            </Button>
            <Button href="/case-studies" variant="outline" size="lg" className="w-full sm:w-auto">
              See more case studies
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
