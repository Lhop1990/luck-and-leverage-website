import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
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
      <section className="bg-ivory-100">
        <Container className="pt-12 sm:pt-16 md:pt-24 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow mb-8">Contact</p>
              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-balance">
                Let&apos;s talk about your{" "}
                <span className="emph">next hire.</span>
              </h1>
              <p className="mt-10 max-w-2xl text-lg text-charcoal-700 leading-relaxed">
                Tell us a little about you and what you are trying to solve.
                One of the founders will reply within one business day.
              </p>
            </div>

            <aside className="lg:col-span-4 pl-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-charcoal/14 pt-8 lg:pt-0">
              <p className="eyebrow mb-6">Talk directly to</p>
              <ul className="flex flex-col gap-5">
                <li>
                  <p className="font-heading uppercase text-2xl md:text-3xl text-charcoal-800 leading-tight">
                    Jack Saxton
                  </p>
                  <p className="eyebrow mt-1">Co-Founder · Advisory</p>
                </li>
                <li>
                  <p className="font-heading uppercase text-2xl md:text-3xl text-charcoal-800 leading-tight">
                    Ollie Medwin
                  </p>
                  <p className="eyebrow mt-1">Co-Founder · Search</p>
                </li>
              </ul>
              <p className="mt-6 text-sm text-charcoal-500 leading-relaxed">
                Prefer email? Reach us directly at{" "}
                <a
                  href="mailto:jack@luckandleverage.com"
                  className="text-green-700 border-b border-charcoal/14 hover:border-green-500 transition-colors"
                >
                  jack@luckandleverage.com
                </a>
                . Every conversation is personally run by the founders.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <Section tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-10">
            <div>
              <p className="eyebrow mb-4">Advisory</p>
              <p className="text-base leading-relaxed">
                For firms hiring recruiters repeatedly who want the process to
                work without the founder carrying every hire.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">Search</p>
              <p className="text-base leading-relaxed">
                For urgent or senior hires that need the heavy lift handled
                properly. Personally run by the founders. Six-month guarantee.
              </p>
            </div>
            <div className="pt-6 border-t border-charcoal/14">
              <p className="eyebrow mb-4">What happens next</p>
              <ol className="flex flex-col gap-3 text-sm">
                <li className="flex gap-3">
                  <span className="font-heading text-green-700 tabular-nums">01</span>
                  <span>We read your message the day it arrives.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-heading text-green-700 tabular-nums">02</span>
                  <span>
                    One of the founders replies with availability and a short
                    pre-call note.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-heading text-green-700 tabular-nums">03</span>
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
