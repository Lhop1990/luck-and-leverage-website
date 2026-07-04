import Image from "next/image";
import { Button } from "@/components/Button";
import { Section, DottedRule } from "@/components/Section";
import { Stat } from "@/components/Stat";

// Client logos rendered as uniform white silhouettes on the black banner.
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

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 pt-14 sm:pt-20 md:pt-28 pb-20 md:pb-32">
          <p className="eyebrow mb-6 md:mb-8 fade-up">Advisory · Search</p>
          <h1 className="fade-up font-heading text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-balance leading-[0.92] md:leading-[0.9]">
            Most firms want{" "}
            <span className="text-lime">great recruiters.</span>
            <br />
            Few are obsessive enough to{" "}
            <span className="text-lime">win them.</span>
          </h1>

          <div className="mt-12 md:mt-16 max-w-2xl">
            <p className="text-base md:text-lg text-ink/80 leading-relaxed">
              Successfully attract, close and retain the best recruiters and
              talent leaders.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Button href="/contact" variant="primary" className="w-full sm:w-auto">
                Book a call
              </Button>
              <Button href="/obsession-framework" variant="outline" className="w-full sm:w-auto">
                See the framework
              </Button>
            </div>
          </div>
        </div>
        <DottedRule />
      </section>

      {/* WHO WE HELP */}
      <Section eyebrow="Who we help">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-balance">
              We help companies build{" "}
              <span className="text-lime">
                the best recruiting, executive search and talent teams
              </span>{" "}
              in America.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-xs uppercase tracking-wider text-ink/60 mb-5">
              Our clients include
            </p>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex gap-3"><span className="text-lime">●</span> Recruitment firms hiring specialist IC recruiters</li>
              <li className="flex gap-3"><span className="text-lime">●</span> Executive search firms hiring Partners, Principals, and Consultants</li>
              <li className="flex gap-3"><span className="text-lime">●</span> VC-backed CEOs hiring Heads of Talent</li>
              <li className="flex gap-3"><span className="text-lime">●</span> Head of Talent building IC and Executive Recruiting Teams</li>
            </ul>
          </div>
        </div>

      </Section>

      {/* TRUSTED BY BANNER — full bleed */}
      <section aria-label="Trusted by" className="border-y border-rule bg-bg overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 py-8 md:py-10">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-lime mb-5 md:mb-6">
            Trusted by
          </p>
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
                  className="h-5 sm:h-6 md:h-7 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300"
                />
              ) : (
                <span
                  key={c.name}
                  className="font-heading uppercase tracking-wide text-xl sm:text-2xl md:text-3xl text-ink/55 hover:text-ink/90 transition-colors duration-300"
                >
                  {c.name}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <Section eyebrow="The problem">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-balance">
              The hard part isn&apos;t finding great recruiters.{" "}
              <span className="text-lime">
                It&apos;s getting the right ones to move.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-4 space-y-6 text-base md:text-lg leading-relaxed text-ink/85">
            <p>
              Your offer, outreach, process, and follow-through will be{" "}
              <span className="text-lime">
                judged by people who know exactly what to look for.
              </span>
            </p>
            <p>
              Most firms waste months interviewing the wrong people and end up
              with sub-par, expensive hires because they were not obsessive
              enough about the process.
            </p>
            <p>
              A great recruiter can generate $1m a year. A Head of Talent
              shapes every hire that follows.{" "}
              <span className="text-lime">
                The cost of getting it wrong, or taking too long, is obvious.
              </span>
            </p>
            <p className="font-heading uppercase tracking-tight text-2xl md:text-3xl text-ink pt-4 border-l-2 border-lime pl-6">
              Finding them on LinkedIn is easy.
              <br />
              Hiring them is not.
            </p>
          </div>
        </div>
      </Section>

      <DottedRule />

      {/* OBSESSION FRAMEWORK PREVIEW */}
      <Section eyebrow="The Obsession Framework">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-balance">
              Nine points where recruiter hiring is{" "}
              <span className="text-lime">won or lost.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink/80 leading-relaxed max-w-prose">
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
              {obsessionPoints.map((point, i) => {
                const first = point.charAt(0);
                const rest = point.slice(1);
                return (
                  <li
                    key={point}
                    className="flex items-baseline gap-5 sm:gap-7 py-4 border-b border-rule first:border-t first:border-rule"
                  >
                    <span className="font-heading text-ink/50 text-sm tabular-nums w-7 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading uppercase tracking-tight text-xl md:text-2xl lg:text-3xl leading-none">
                      <span className="text-lime">{first}</span>
                      <span className="text-ink/90">{rest}</span>
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Section>

      <DottedRule />

      {/* HOW WE HELP */}
      <Section eyebrow="How we help">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16">
          Two ways to work with us.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Advisory */}
          <article className="border border-rule p-8 md:p-10 flex flex-col hover:border-lime transition-colors">
            <p className="eyebrow mb-6">Advisory</p>
            <h3 className="font-heading text-3xl md:text-4xl mb-6">
              For firms that need to{" "}
              <span className="text-lime">hire top recruiters consistently.</span>
            </h3>
            <div className="space-y-4 text-sm md:text-base text-ink/80 leading-relaxed">
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
            <p className="text-xs uppercase tracking-wider text-ink/60 mt-8 mb-3">
              Best when
            </p>
            <ul className="space-y-2 text-sm text-ink/80 mb-8">
              {advisoryWhen.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="text-lime mt-1.5 w-3 h-px bg-lime shrink-0" />
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
          <article className="border border-rule p-8 md:p-10 flex flex-col hover:border-lime transition-colors">
            <p className="eyebrow mb-6">Search</p>
            <h3 className="font-heading text-3xl md:text-4xl mb-6">
              For firms that need a{" "}
              <span className="text-lime">key strategic, urgent or confidential hire.</span>
            </h3>
            <div className="space-y-4 text-sm md:text-base text-ink/80 leading-relaxed">
              <p>
                We run the search end-to-end, from the first market
                conversation through to offer, acceptance, and post-acceptance
                management.
              </p>
              <p>
                Every search is personally run through the Obsession Framework
                by the founders and backed by a{" "}
                <span className="text-lime">six-month guarantee</span>.
              </p>
            </div>
            <p className="text-xs uppercase tracking-wider text-ink/60 mt-8 mb-3">
              Best when
            </p>
            <ul className="space-y-2 text-sm text-ink/80 mb-8">
              {searchWhen.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="text-lime mt-1.5 w-3 h-px bg-lime shrink-0" />
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

      <DottedRule />

      {/* WHY US — STATS */}
      <Section eyebrow="Why us">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-balance max-w-4xl">
          <span className="text-lime">
            30+ years combined experience hiring recruiters.
          </span>{" "}
          Hundreds of successful placements. We&apos;ve seen enough failed
          processes to know where things go wrong.
        </h2>
        <p className="text-ink/70 text-base md:text-lg mb-16 max-w-2xl">
          We personally run every project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {stats.map((s) => (
            <Stat key={s.label} number={s.number} label={s.label} />
          ))}
        </div>
      </Section>

      <DottedRule />

      {/* WHO WE ARE */}
      <Section eyebrow="Who we are">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <article>
            <div className="flex items-center gap-4 md:gap-5 mb-8">
              <Image
                src="/founders/jack.png"
                alt="Jack Saxton, Co-Founder of Luck & Leverage"
                width={88}
                height={88}
                className="w-20 h-20 md:w-22 md:h-22 rounded-full object-cover bg-rule grayscale ring-1 ring-rule"
              />
              <div className="min-w-0">
                <h3 className="font-heading text-3xl md:text-4xl text-lime leading-none mb-1.5">
                  Jack Saxton
                </h3>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/65">
                  Co-Founder
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm md:text-base text-ink/80 leading-relaxed">
              <p>
                Jack helps search and recruitment businesses build the internal
                talent systems they need to scale.
              </p>
              <p>
                He started and built the first R2R business in America and has
                trained and managed teams responsible for more than{" "}
                <span className="text-ink">300 successful industry placements</span>.
              </p>
              <p>
                As the first hire at a venture capital group that grew
                organically from <span className="text-ink">$0 to $50m</span> in
                revenue in five years, Jack led venture origination and
                group-wide talent strategy. He has also spoken on this topic at
                the Hunt Scanlon Private Equity Conference in New York.
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
                className="w-20 h-20 md:w-22 md:h-22 rounded-full object-cover bg-rule grayscale ring-1 ring-rule"
              />
              <div className="min-w-0">
                <h3 className="font-heading text-3xl md:text-4xl text-lime leading-none mb-1.5">
                  Ollie Medwin
                </h3>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/65">
                  Co-Founder
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm md:text-base text-ink/80 leading-relaxed">
              <p>
                Ollie helps search and recruitment businesses build scalable
                talent acquisition, training, and growth systems.
              </p>
              <p>
                He has led global talent acquisition across Technology, AI,
                Data, and Product at Bain &amp; Company, scaling teams across
                eight cities and closing over{" "}
                <span className="text-ink">100 strategic roles in under 18 months</span>.
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

      <DottedRule />

      {/* CLOSING CTA */}
      <Section>
        <div className="max-w-4xl">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-balance leading-[0.95]">
            Most firms hiring recruiters are solving the{" "}
            <span className="text-lime">wrong problem.</span>
          </h2>
          <div className="mt-8 space-y-2 font-heading uppercase tracking-tight text-2xl md:text-3xl text-ink/85">
            <p>They think it is sourcing.</p>
            <p>It is usually something further upstream.</p>
          </div>
          <p className="mt-10 text-base md:text-lg text-ink/80 max-w-2xl">
            Obsession is what it takes to get every part of that right.
          </p>
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
