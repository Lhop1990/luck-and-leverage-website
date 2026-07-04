import { Button } from "@/components/Button";
import { Section, DottedRule } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Obsession Framework",
  description:
    "Nine points where recruiter hiring is won or lost. Opportunity, Brand, Search Strategy, Engagement, Sourcing, Selection, Interview Process, Offer Construction, Nurture.",
};

const framework = [
  {
    name: "Opportunity",
    short: "Is the role actually a move worth making?",
    body: "Compensation, equity, ramp, scope, ceiling. We pressure-test the opportunity against what the best candidates already have.",
  },
  {
    name: "Brand",
    short: "What does the market already believe about you?",
    body: "Recruiters Google before they reply. Glassdoor, LinkedIn pages, founder activity, and recent hires all decide whether the first conversation happens.",
  },
  {
    name: "Search Strategy",
    short: "Are we hunting in the right pools?",
    body: "Who has done this before, who is doing this now, who is about to outgrow their current seat. Strategy beats volume every time.",
  },
  {
    name: "Engagement",
    short: "Why would the right person reply?",
    body: "Outreach that reads like a copy-paste from a sequence will be ignored by the people you actually want. Tone, specificity, and timing matter.",
  },
  {
    name: "Sourcing",
    short: "Are we surfacing the full market, not just the easy market?",
    body: "The strongest candidates are not the most visible ones. Disciplined sourcing finds the operators who would never browse a job board.",
  },
  {
    name: "Selection",
    short: "Are we measuring what actually predicts success?",
    body: "Most interview loops measure interview ability. We design selection around the work itself — performance, judgment, and the ability to ramp fast.",
  },
  {
    name: "Interview Process",
    short: "Does the process build conviction, or burn it?",
    body: "Top candidates lose interest fast. Pace, structure, and who they meet shape whether they leave the process more committed or less.",
  },
  {
    name: "Offer Construction",
    short: "Is the offer built to be accepted?",
    body: "Number, structure, story. Offers fail when they are presented like negotiations rather than the conclusion of one.",
  },
  {
    name: "Nurture",
    short: "What happens between acceptance and day one?",
    body: "Counter-offers, cold feet, and competing processes peak after the yes. The best firms run a process after the process — and it shows in their start rates.",
  },
];

export default function ObsessionFramework() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-24 pb-10 md:pb-16">
          <p className="eyebrow mb-6 md:mb-8">Our framework</p>
          <h1 className="font-heading text-[2.75rem] sm:text-7xl md:text-8xl lg:text-9xl text-balance leading-[0.9]">
            The <span className="text-lime">Obsession</span> Framework
          </h1>
          <p className="mt-8 md:mt-10 font-heading uppercase tracking-tight text-xl sm:text-2xl md:text-3xl text-ink/85 max-w-3xl text-balance">
            Nine points where recruiter hiring is{" "}
            <span className="text-lime">won or lost.</span>
          </p>
          {/* Intro paragraph removed — replacement copy pending from founders. */}
        </div>
        <DottedRule />
      </section>

      {/* THE NINE POINTS */}
      <Section eyebrow="The nine points">
        <div className="grid grid-cols-1 gap-0">
          {framework.map((step, i) => (
            <div
              key={step.name}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-12 md:py-16 border-t border-rule first:border-t-0"
            >
              <div className="lg:col-span-2">
                <div className="font-heading text-5xl md:text-6xl text-lime tabular-nums leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="lg:col-span-4">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">
                  {step.name}
                </h2>
                <p className="mt-4 text-sm uppercase tracking-wider text-ink/60">
                  {step.short}
                </p>
              </div>
              <div className="lg:col-span-6">
                <p className="text-base md:text-lg text-ink/85 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <DottedRule />

      {/* CTA */}
      <Section>
        <div className="max-w-4xl">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-balance">
            Want to run this on your next hire?
          </h2>
          <p className="mt-6 text-base md:text-lg text-ink/80 max-w-2xl">
            Whether you need advice about how to grow your recruiting team, or
            need us to run a search end-to-end, every project is personally run
            through the framework by the founders.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <Button href="/contact?service=advisory" variant="primary" className="w-full sm:w-auto">
              Talk to us about Advisory
            </Button>
            <Button href="/contact?service=search" variant="outline" className="w-full sm:w-auto">
              Book a Search intake
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
