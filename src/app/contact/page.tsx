import type { Metadata } from "next";
import { Section, DottedRule } from "@/components/Section";
import { ContactForm } from "./ContactForm";
import { ServiceEnum, type Service } from "@/lib/leadSchema";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak to Jack and Ollie about Advisory or Search. Every conversation is personally run by the founders.",
};

type Props = {
  searchParams: Promise<{ service?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const parsed = ServiceEnum.safeParse(params.service);
  const defaultService: Service | undefined = parsed.success
    ? parsed.data
    : undefined;

  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-24 pb-10 md:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow mb-8">Contact</p>
              <h1 className="font-heading text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl text-balance leading-[0.92] md:leading-[0.9]">
                Let&apos;s talk about your{" "}
                <span className="text-lime">next hire.</span>
              </h1>
              <p className="mt-10 max-w-2xl text-base md:text-lg text-ink/80 leading-relaxed">
                Tell us a little about you and what you are trying to solve.
                One of the founders will reply within one business day.
              </p>
            </div>

            <aside className="lg:col-span-4 border-rule pl-0 lg:pl-8 border-t lg:border-t-0 lg:border-l pt-8 lg:pt-0">
              <p className="eyebrow mb-6">Talk directly to</p>
              <ul className="space-y-5">
                <li>
                  <p className="font-heading text-2xl md:text-3xl text-ink leading-tight">
                    Jack Saxton
                  </p>
                  <p className="text-xs uppercase tracking-wider text-lime mt-1">
                    Co-Founder · Advisory
                  </p>
                </li>
                <li>
                  <p className="font-heading text-2xl md:text-3xl text-ink leading-tight">
                    Ollie Medwin
                  </p>
                  <p className="text-xs uppercase tracking-wider text-lime mt-1">
                    Co-Founder · Search
                  </p>
                </li>
              </ul>
              <p className="mt-6 text-xs text-ink/50">
                Prefer email? Reach us directly at{" "}
                <a
                  href="mailto:jack@luckandleverage.com"
                  className="text-lime underline-offset-4 hover:underline"
                >
                  jack@luckandleverage.com
                </a>
                . Every conversation is personally run by the founders.
              </p>
            </aside>
          </div>
        </div>
        <DottedRule />
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            <div>
              <p className="eyebrow mb-4">Advisory</p>
              <p className="text-sm md:text-base text-ink/80 leading-relaxed">
                For firms hiring recruiters repeatedly who want the process to
                work without the founder carrying every hire.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">Search</p>
              <p className="text-sm md:text-base text-ink/80 leading-relaxed">
                For urgent or senior hires that need the heavy lift handled
                properly. Personally run by the founders. Six-month guarantee.
              </p>
            </div>
            <div className="pt-6 border-t border-rule">
              <p className="eyebrow mb-4">What happens next</p>
              <ol className="space-y-3 text-sm text-ink/80">
                <li className="flex gap-3">
                  <span className="text-lime tabular-nums">01</span>
                  <span>We read your message the day it arrives.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime tabular-nums">02</span>
                  <span>
                    One of the founders replies with availability and a short
                    pre-call note.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime tabular-nums">03</span>
                  <span>
                    First call is 30 minutes. No deck, no pitch — we want to
                    understand the problem.
                  </span>
                </li>
              </ol>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <ContactForm defaultService={defaultService} />
          </div>
        </div>
      </Section>
    </>
  );
}
