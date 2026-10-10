import Image from "next/image";
import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Section";
import { Stat } from "@/components/Stat";

// Client logos rendered as uniform charcoal silhouettes on the ivory banner.
// `src` omitted → rendered as a styled text wordmark (interim, pending a logo
// file we can use — e.g. Upstart, whose site blocks asset access).
const trustedBy: { name: string; src?: string; w?: number; h?: number }[] = [
  { name: "PER", src: "/logos/per.png", w: 90, h: 42 },
  { name: "Coastal Recruiting", src: "/logos/coastal.png", w: 209, h: 50 },
  { name: "Greco Advisors", src: "/logos/greco.png", w: 285, h: 64 },
  { name: "Brunel", src: "/logos/brunel.png", w: 600, h: 158 },
  { name: "Titan", src: "/logos/titan.svg", w: 114, h: 26 },
  { name: "Upstart" },
  { name: "Quantum Talent", src: "/logos/quantum.svg", w: 126, h: 24 },
];

const obsessionPoints = [
  "Opportunity",
  "Brand",
  "Search Strategy",
  "Engagement",
  "Sourcing",
  "Selection",
  "Interview Process",
  "Offer Construction",
  "Nurture",
];

const advisoryWhen = [
  "You are hiring recruiters repeatedly",
  "Strong candidates are not engaging",
  "Hiring managers are wasting time",
  "New hires are not ramping fast enough",
  "Too much depends on instinct",
  "You need the process to work without you carrying every hire",
];

const searchWhen = [
  "The hire is urgent or senior",
  "The obvious market is not strong enough",
  "Leadership time is limited",
  "Budget is tight",
  "Confidentiality matters",
  "You need the heavy lift handled properly",
];

const stats = [
  { number: "300+", label: "Recruiter and executive search placements in America" },
  { number: "10+", label: "Businesses launched in America" },
  { number: "4", label: "M&A transactions, with $20m+ enterprise value created" },
  { number: "$0→$50m", label: "Organic growth in a previous recruitment business as part of the senior leadership team" },
  { number: "90%", label: "Referral-led client base" },
  { number: "6 Month", label: "Guarantee on every search" },
];

/* A short green rule, used where another brand would reach for a bullet. */
function Dash({ tone = "light" }: { tone?: "light" | "inverse" }) {
  return (
    <span
      aria-hidden
      className={`mt-3 w-3 h-px shrink-0 ${tone === "inverse" ? "bg-green-500" : "bg-green-600"}`}
    />
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ivory-100">
        <Container className="pt-14 sm:pt-20 md:pt-28 pb-20 md:pb-30">
          <p className="eyebrow mb-6 md:mb-8 fade-up">Advisory · Search</p>
          {/* Hard line break plus a ~20ch measure keeps each line near-equal,
              per the headline rules in the brand guidelines. */}
          <h1 className="fade-up text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] max-w-[20ch]">
            Most firms want <span className="emph">great recruiters.</span>
            <br />
            Few are obsessive enough to <span className="emph">win them.</span>
          </h1>

          <div className="mt-12 md:mt-16 max-w-2xl">
            <p className="text-lg leading-relaxed text-charcoal-700">
              Successfully attract, close and retain the best recruiters and
              talent leaders.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Book a call
              </Button>
              <Button href="/obsession-framework" variant="outline" size="lg" className="w-full sm:w-auto">
                See the framework
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO WE HELP */}
      <Section eyebrow="Who we help" index={1} tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              We help companies build{" "}
              <span className="emph">
                the best recruiting, executive search and talent teams
              </span>{" "}
              in America.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="eyebrow mb-5">Our clients include</p>
            <ul className="flex flex-col gap-3 text-base">
              <li className="flex gap-3"><Dash /> <span>Recruitment firms hiring specialist IC recruiters</span></li>
              <li className="flex gap-3"><Dash /> <span>Executive search firms hiring Partners, Principals, and Consultants</span></li>
              <li className="flex gap-3"><Dash /> <span>VC-backed CEOs hiring Heads of Talent</span></li>
              <li className="flex gap-3"><Dash /> <span>Head of Talent building IC and Executive Recruiting Teams</span></li>
            </ul>
          </div>
        </div>
      </Section>

      {/* TRUSTED BY BANNER — full bleed */}
      <section aria-label="Trusted by" className="bg-ivory-200 overflow-hidden">
        <Container className="py-10 md:py-12">
          <p className="eyebrow mb-5 md:mb-6">Trusted by</p>
          <div className="flex flex-wrap items-center gap-x-8 sm:gap-x-10 md:gap-x-14 gap-y-5 md:gap-y-6">
            {trustedBy.map((c) =>
              c.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={c.name}
                  src={c.src}
                  alt={c.name}
                  width={c.w}
                  height={c.h}
                  loading="lazy"
                  className="h-5 sm:h-6 md:h-7 w-auto object-contain brightness-0 opacity-55 hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <span
                  key={c.name}
                  className="font-heading uppercase tracking-tight text-xl sm:text-2xl md:text-3xl text-charcoal-800/55 hover:text-charcoal-800 transition-colors duration-300"
                >
                  {c.name}
                </span>
              ),
            )}
          </div>
        </Container>
      </section>

      {/* THE PROBLEM */}
      <Section eyebrow="The problem" index={2} tone="dark">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance text-white">
              The hard part isn&apos;t finding great recruiters.{" "}
              <span className="emph">
                It&apos;s getting the right ones to move.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-4 flex flex-col gap-6 text-lg leading-relaxed text-white/80">
            <p>
              Your offer, outreach, process, and follow-through will be judged
              by people who know exactly what to look for.
            </p>
            <p>
              Most firms waste months interviewing the wrong people and end up
              with sub-par, expensive hires because they were not obsessive
              enough about the process.
            </p>
            <p>
              A great recruiter can generate $1m a year. A Head of Talent
              shapes every hire that follows. The cost of getting it wrong, or
              taking too long, is obvious.
            </p>
            <p className="font-heading uppercase tracking-tight text-2xl md:text-3xl text-white pt-2 border-l-[3px] border-green-500 pl-6 leading-[1.1]">
              Finding them on LinkedIn is easy.
              <br />
              Hiring them is not.
            </p>
          </div>
        </div>
      </Section>

      {/* OBSESSION FRAMEWORK PREVIEW */}
      <Section eyebrow="The Obsession Framework" index={3} tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
              Nine points where recruiter hiring is{" "}
              <span className="emph">won or lost.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed measure-body">
              It highlights nine points that decide whether the right
              candidates listen, engage, hesitate, or walk away.
            </p>
            {/* Second paragraph removed — replacement copy pending from founders. */}
            <div className="mt-8">
              <Button href="/obsession-framework" variant="outline">
                Read the full framework
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <ol className="flex flex-col">
              {obsessionPoints.map((point, i) => (
                <li
                  key={point}
                  className="flex items-baseline gap-5 sm:gap-7 py-4 border-b border-charcoal/14 first:border-t first:border-charcoal/14"
                >
                  <span className="font-heading text-sm text-green-700 tabular-nums w-7 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading uppercase tracking-tight text-xl md:text-2xl leading-none text-charcoal-800">
                    {point}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* HOW WE HELP */}
      <Section eyebrow="How we help" index={4} tone="light">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16">
          Two ways to work with us.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Advisory */}
          <article className="bg-white border border-charcoal/14 p-8 md:p-10 flex flex-col transition-colors duration-[140ms] hover:border-charcoal-800">
            <p className="eyebrow mb-6">Advisory</p>
            <h3 className="text-2xl md:text-3xl mb-6">
              For firms that need to{" "}
              <span className="emph">hire top recruiters consistently.</span>
            </h3>
            <div className="flex flex-col gap-4 text-base leading-relaxed">
              <p>
                Most recruiter hiring problems are not one-off bad luck. They
                are the same mistakes repeating across every hire.
              </p>
              <p>
                We find what is stopping the right candidates from engaging,
                progressing, accepting, or succeeding once they join. Then we
                fix the system around it.
              </p>
            </div>
            <p className="eyebrow mt-8 mb-3">Best when</p>
            <ul className="flex flex-col gap-2 text-sm mb-8">
              {advisoryWhen.map((line) => (
                <li key={line} className="flex gap-3">
                  <Dash />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-2">
              <Button href="/contact?service=advisory" variant="outline">
                Enquire now
              </Button>
            </div>
          </article>

          {/* Search */}
          <article className="bg-white border border-charcoal/14 p-8 md:p-10 flex flex-col transition-colors duration-[140ms] hover:border-charcoal-800">
            <p className="eyebrow mb-6">Search</p>
            <h3 className="text-2xl md:text-3xl mb-6">
              For firms that need a{" "}
              <span className="emph">key strategic, urgent or confidential hire.</span>
            </h3>
            <div className="flex flex-col gap-4 text-base leading-relaxed">
              <p>
                We run the search end-to-end, from the first market
                conversation through to offer, acceptance, and post-acceptance
                management.
              </p>
              <p>
                Every search is personally run through the Obsession Framework
                by the founders and backed by a six-month guarantee.
              </p>
            </div>
            <p className="eyebrow mt-8 mb-3">Best when</p>
            <ul className="flex flex-col gap-2 text-sm mb-8">
              {searchWhen.map((line) => (
                <li key={line} className="flex gap-3">
                  <Dash />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-2">
              <Button href="/contact?service=search" variant="outline">
                Book an intake call
              </Button>
            </div>
          </article>
        </div>
      </Section>

      {/* WHY US — STATS */}
      <Section eyebrow="Why us" index={5} tone="dark">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance max-w-4xl text-white">
          <span className="emph">
            30+ years combined experience hiring recruiters.
          </span>{" "}
          Hundreds of successful placements. We&apos;ve seen enough failed
          processes to know where things go wrong.
        </h2>
        <p className="text-white/70 text-lg mb-16 max-w-2xl">
          We personally run every project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {stats.map((s) => (
            <Stat key={s.label} number={s.number} label={s.label} tone="inverse" />
          ))}
        </div>
      </Section>

      {/* WHO WE ARE */}
      <Section eyebrow="Who we are" index={6} tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <article>
            <div className="flex items-center gap-4 md:gap-5 mb-8">
              <Image
                src="/founders/jack.png"
                alt="Jack Saxton, Co-Founder of Luck & Leverage"
                width={88}
                height={88}
                className="w-20 h-20 md:w-22 md:h-22 object-cover bg-ivory-200 grayscale border border-charcoal/14"
              />
              <div className="min-w-0">
                <h3 className="text-2xl md:text-3xl leading-none mb-1.5">
                  Jack Saxton
                </h3>
                <p className="eyebrow">Co-Founder</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-base leading-relaxed">
              <p>
                Jack helps search and recruitment businesses build the internal
                talent systems they need to scale.
              </p>
              <p>
                He started and built the first R2R business in America and has
                trained and managed teams responsible for more than{" "}
                <strong>300 successful industry placements</strong>.
              </p>
              <p>
                As the first hire at a venture capital group that grew
                organically from <strong>$0 to $50m</strong> in revenue in five
                years, Jack led venture origination and group-wide talent
                strategy. He has also spoken on this topic at the Hunt Scanlon
                Private Equity Conference in New York.
              </p>
            </div>
          </article>

          <article>
            <div className="flex items-center gap-4 md:gap-5 mb-8">
              <Image
                src="/founders/ollie.png"
                alt="Ollie Medwin, Co-Founder of Luck & Leverage"
                width={88}
                height={88}
                className="w-20 h-20 md:w-22 md:h-22 object-cover bg-ivory-200 grayscale border border-charcoal/14"
              />
              <div className="min-w-0">
                <h3 className="text-2xl md:text-3xl leading-none mb-1.5">
                  Ollie Medwin
                </h3>
                <p className="eyebrow">Co-Founder</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-base leading-relaxed">
              <p>
                Ollie helps search and recruitment businesses build scalable
                talent acquisition, training, and growth systems.
              </p>
              <p>
                He has led global talent acquisition across Technology, AI,
                Data, and Product at Bain &amp; Company, scaling teams across
                eight cities and closing over{" "}
                <strong>100 strategic roles in under 18 months</strong>.
              </p>
              <p>
                Earlier, Ollie built and led technology recruitment teams
                across financial services, cloud, data, and AI — including
                scaling Eximius Group&apos;s Technology practice into over a
                million dollar revenue division.
              </p>
            </div>
          </article>
        </div>
      </Section>

      {/* CLOSING CTA */}
      <Section tone="light">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance">
            Most firms hiring recruiters are solving the{" "}
            <span className="emph">wrong problem.</span>
          </h2>
          <div className="mt-8 flex flex-col gap-2 font-heading uppercase tracking-tight text-2xl md:text-3xl text-charcoal-800 leading-[1.1]">
            <p>They think it is sourcing.</p>
            <p>It is usually something further upstream.</p>
          </div>
          <p className="mt-10 text-lg text-charcoal-700 max-w-2xl">
            Obsession is what it takes to get every part of that right.
          </p>
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
