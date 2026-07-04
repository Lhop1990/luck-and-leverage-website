import { Button } from "@/components/Button";
import { Section, DottedRule } from "@/components/Section";
import type { Metadata } from "next";

// NOTE: This page is intentionally NOT linked from the main nav.
// It is reachable only via direct URL or campaign links (e.g. LinkedIn outreach).
// Treat as a private landing page until L&L decides to make it public.

export const metadata: Metadata = {
  title: "For Recruiters · Talent",
  description:
    "For IC recruiters, search professionals, recruitment leaders, and Heads of Talent considering their next move.",
  robots: { index: false, follow: false },
};

export default function TalentPage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-24 pb-10 md:pb-16">
          <p className="eyebrow mb-6 md:mb-8">For Recruiters &amp; Heads of Talent</p>
          <h1 className="font-heading text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl text-balance leading-[0.92] md:leading-[0.9]">
            You only move once or twice <br className="hidden md:block" />
            in a decade. <span className="text-lime">Make it count.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-base md:text-lg text-ink/80 leading-relaxed">
            We work with the most thoughtful recruitment firms, executive
            search firms, and VC-backed companies in America. If a real move is
            on the table for you, we want to know what you actually want — not
            just what is on the spec.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Start a confidential conversation
            </Button>
          </div>
        </div>
        <DottedRule />
      </section>

      <Section eyebrow="What we hear most">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              h: "I am not actively looking.",
              p: "Most of the people we place were not looking when we called. The point is not whether you are looking. The point is whether the right thing has crossed your desk.",
            },
            {
              h: "The market is noisy.",
              p: "Every recruiter you have ever met is now in your inbox. We do not run sequences. If you hear from us, we have a specific reason to think it is worth a conversation.",
            },
            {
              h: "I want to know what is actually out there.",
              p: "We will tell you. If we do not have the right thing today, we will say so. If we do, you will get the full picture — comp, scope, ramp, ceiling, risks.",
            },
          ].map((b) => (
            <div key={b.h} className="border-t border-rule pt-6">
              <h3 className="font-heading text-2xl md:text-3xl text-lime mb-4">
                {b.h}
              </h3>
              <p className="text-sm md:text-base text-ink/80 leading-relaxed">
                {b.p}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <DottedRule />

      <Section eyebrow="How we work with you">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Confidential, always.
            </h2>
            <p className="text-base md:text-lg text-ink/85 leading-relaxed">
              Nothing leaves our conversation without your sign-off. We do not
              broadcast profiles, we do not send blind CVs, and we do not name
              you to clients until you are ready.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Honest, even when it is not what you want to hear.
            </h2>
            <p className="text-base md:text-lg text-ink/85 leading-relaxed">
              If a role is wrong for you, we will say so. If the comp is below
              your number, we will say so. The point is to do this once and do
              it right, not to get you into the first thing that fits.
            </p>
          </div>
        </div>
      </Section>

      <DottedRule />

      <Section>
        <div className="max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-balance">
            Ready to have a <span className="text-lime">real conversation?</span>
          </h2>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Start the conversation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
