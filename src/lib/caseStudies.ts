// Case study content, modelled as data so adding a new study = adding an object.
// Rendered by /case-studies (index) and /case-studies/[slug] (detail).

export type Metric = { value: string; label: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; label?: string; items: string[] };

export type ProcessStep = { heading: string; blocks: Block[] };

export type Testimonial = { quote: string; author: string };

export type CaseStudy = {
  slug: string;
  client: string;
  logo?: string;
  category: string;
  title: string;
  /** One-line outcome used on the index card. */
  summary: string;
  intro: string[];
  metrics: Metric[];
  before: string[];
  afterLead: string;
  after: string[];
  process: ProcessStep[];
  /** Optional "search in numbers" funnel strip. */
  funnel?: Metric[];
  conclusion: string[];
  testimonial?: Testimonial;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "coastal",
    client: "Coastal",
    logo: "/logos/coastal.png",
    category: "Executive search build · San Francisco & New York",
    title: "How Coastal launched a VC executive search practice in 60 days",
    summary:
      "Turned a founder-led side function into a dedicated retained search practice — a senior partner hired and multiple VP/C-level searches running in 60 days.",
    intro: [
      "Coastal had already built a strong reputation as an early-stage tech search firm supporting Seed to Series C companies across San Francisco and New York — well known for engineering and GTM recruiting, with deep relationships across founders and venture capital networks.",
      "As demand for executive hiring increased, Coastal saw an opportunity to evolve from a founder-led recruiting business into a true executive search partner for venture-backed companies.",
    ],
    metrics: [
      { value: "60 days", label: "From standing start to a launched executive search practice" },
      { value: "241", label: "Profiles approached across the target market" },
      { value: "9", label: "Shortlisted candidates for the partner-level hire" },
    ],
    before: [
      "Executive searches were mostly handled by the founders alongside the rest of the business.",
      "There was no dedicated executive search lead or partner-level owner.",
      "VC partners regularly asked Coastal for executive search support, but there was no formal service offering around it.",
      "On senior searches, the firm was often up against established executive search firms.",
      "There was a clear opportunity to turn Coastal's network and IC recruiting reputation into a dedicated retained search business.",
    ],
    afterLead:
      "The new executive search function gave Coastal a more scalable way to support founders and VC partners. Outcomes included:",
    after: [
      "A new senior partner joined to lead the executive search practice.",
      "Coastal began running multiple VP and C-level searches at the same time across premium VC portfolios.",
      "The firm started winning searches against established players.",
      "A repeatable search process was created covering sourcing, interviews, stakeholder management and offer construction.",
      "Executive search became a defined part of the business instead of a founder-led side function.",
      "Coastal strengthened its position with founders and VCs as a partner that could support both IC and executive hiring.",
    ],
    process: [
      {
        heading: "Building the search function",
        blocks: [
          {
            type: "p",
            text: "We worked closely with Coastal to define a new executive search offering focused on VP and C-level hiring for venture-backed startups.",
          },
          {
            type: "list",
            label: "This covered",
            items: [
              "Talent pool engagement",
              "Executive search delivery",
              "Interview process management",
              "Offer construction",
              "Long-term practice growth",
            ],
          },
          {
            type: "p",
            text: "The business needed someone who could both run searches and help build the function properly over time.",
          },
        ],
      },
      {
        heading: "Talent pool engagement",
        blocks: [
          {
            type: "list",
            label: "A targeted search was run across",
            items: [
              "Venture-backed tech recruiters",
              "Executive search firms",
              "Senior recruiters with executive engineering leadership hiring experience",
            ],
          },
          {
            type: "p",
            text: "The process included direct outreach, referrals, back-channel referencing and structured qualification.",
          },
          {
            type: "p",
            text: "The focus was on finding people who could run retained searches, work closely with founders and operate in fast-moving startup environments.",
          },
        ],
      },
      {
        heading: "Interview process",
        blocks: [
          {
            type: "p",
            text: "Coastal built a more structured interview process for executive hiring.",
          },
          {
            type: "list",
            label: "This included",
            items: [
              "Defined interview stages",
              "Clear scorecards",
              "Founder calibration sessions",
              "Fast scheduling and decision-making",
            ],
          },
          {
            type: "list",
            label: "Candidates were assessed on",
            items: [
              "Executive search experience",
              "Ability to win and deliver searches",
              "Stakeholder management",
              "Hands-on execution",
              "Fit for a remote, high-output environment",
            ],
          },
        ],
      },
      {
        heading: "Offer construction",
        blocks: [
          {
            type: "p",
            text: "The final part of the process was building a strong partner-level offer.",
          },
          {
            type: "list",
            label: "This included",
            items: [
              "Compensation tied to practice growth",
              "Long-term equity upside",
              "A clear path to building a team and growing the function",
            ],
          },
          {
            type: "p",
            text: "The positioning focused less on titles and base salary and more on ownership, autonomy and the chance to build something meaningful inside a growing business.",
          },
        ],
      },
    ],
    funnel: [
      { value: "241", label: "Profiles approached" },
      { value: "63", label: "Responses" },
      { value: "35", label: "Qualified conversations" },
      { value: "9", label: "Shortlisted" },
    ],
    conclusion: [
      "Coastal launched a dedicated executive search offering without changing what already made the business work.",
      "By putting structure around talent engagement, interviews and offer construction, the team built a repeatable executive search offer that could compete with established firms while still moving at startup speed.",
      "What started as an opportunistic part of the business became a defined service offering, a new growth channel and a stronger long-term partner proposition for founders and investors.",
    ],
  },
  {
    slug: "greco-advisors",
    client: "Greco Advisors",
    logo: "/logos/greco.png",
    category: "Executive search · New York (US launch)",
    title:
      "How Greco Advisors secured a $3m+ search leader in 100 days to launch its US business",
    summary:
      "Placed a passive, multi-million-dollar biller from a prestigious firm to launch Greco's New York practice — within budget, offer accepted in 100 days.",
    intro: [
      "Greco Advisors had already built a strong PE and portfolio operations search business across Europe. As US demand increased, the next step was building in New York.",
      "The challenge was finding someone capable of leading that build from the ground up — a senior operator with retained-search credibility, a strong PE network and a track record at the very top end of the market.",
      "The bar was very high. Greco wasn't looking for available talent; they were looking for people already billing at serious levels inside established firms.",
    ],
    metrics: [
      { value: "$3m+", label: "Annual revenue generated by the appointed leader" },
      { value: "100 days", label: "From search kickoff to an accepted offer" },
      { value: "$1m+", label: "Billers accessed across the New York PE search market" },
    ],
    before: [
      "Greco had strong momentum in Europe but no dedicated US leadership on the ground.",
      "The business needed someone who could build a PE value-creation / portfolio operations search practice in New York.",
      "The target profile was extremely narrow: retained-search background, PE exposure, entrepreneurial mindset and proven top-end billing performance.",
      "The benchmark was search leaders already producing at elite levels — most of them highly compensated, deeply embedded in their firms and not actively considering a move.",
      "Greco needed fast access to a market that is normally slow, considered and relationship-driven.",
    ],
    afterLead:
      "Greco successfully hired a senior executive search leader to launch and scale its US business — and gained a clear blueprint for future growth in North America. Key outcomes included:",
    after: [
      "Appointed a proven executive search leader from a prestigious firm, with a track record of generating more than $3m annually and previous P&L ownership.",
      "Completed the hire within 100 days despite targeting a highly constrained, predominantly passive talent pool.",
      "Gained access to a curated group of elite New York PE search operators, including multiple leaders generating $1m+ in annual billings.",
      "Validated the ideal profile to build Greco's North American business — combining PE search expertise, practice-building capability and entrepreneurial leadership.",
      "Established a repeatable compensation and equity framework for attracting senior US talent in a highly competitive market.",
      "Built a pipeline and roadmap for future US hires, giving Greco a foundation for scaling beyond the initial leadership appointment.",
    ],
    process: [
      {
        heading: "Search strategy",
        blocks: [
          {
            type: "list",
            label: "The search focused on a small group of high-performing PE search operators across",
            items: [
              "Specialist PE boutiques",
              "Retained-search firms",
              "Portfolio operations search teams",
            ],
          },
          {
            type: "p",
            text: "The focus was not volume but identifying people with practice-building capability and top-end commercial performance.",
          },
        ],
      },
      {
        heading: "Engagement & sourcing",
        blocks: [
          {
            type: "p",
            text: "We used direct outreach from partners, network-led introductions and back-channel referencing to access candidates who were unlikely to engage through a traditional process — including senior billers already generating multi-million-dollar revenues inside established firms.",
          },
          {
            type: "p",
            text: "Speed of engagement mattered. Greco moved quickly from market mapping into live conversations with top talent.",
          },
        ],
      },
      {
        heading: "Selection & calibration",
        blocks: [
          {
            type: "list",
            label: "We worked closely with Greco to compare candidates across",
            items: [
              "Billing track record",
              "PE search depth",
              "Retained-search experience",
              "Leadership capability",
              "Long-term fit for the US build",
            ],
          },
          {
            type: "p",
            text: "The process stayed tight and highly selective throughout, letting the leadership team evaluate what “top of market” actually looked like in real terms.",
          },
        ],
      },
      {
        heading: "Offer construction",
        blocks: [
          {
            type: "list",
            label: "Alongside the search, we advised on",
            items: [
              "Compensation structure",
              "Year 1 guarantees",
              "Revenue participation",
              "Equity positioning",
            ],
          },
          {
            type: "p",
            text: "This helped Greco position competitively against larger firms already competing for the same talent.",
          },
        ],
      },
    ],
    conclusion: [
      "Greco needed fast access to a very small group of recruiters operating at the top end of the PE search market.",
      "The process focused on quality, speed and tight calibration from the start — getting Greco into conversations with talent already performing at the level they could build a business around.",
      "The result was the successful placement of a passive, multi-million-dollar revenue generator from a prestigious executive search firm — a former P&L owner, based in New York. The hire was made within budget, with the offer accepted within 100 days of starting the search.",
    ],
    testimonial: {
      quote:
        "Following a tender process, Greco engaged Luck and Leverage on a retained search for a leader for our US business. Timelines were tight, and the bar was high — targeting experienced, high-performing executive search leaders in the Private Equity space in New York. Luck and Leverage brought clarity early on, helping define the role, align on key trade-offs, and position the opportunity effectively in the market. This led to conversations with multiple relevant, high-quality candidates, all of whom came in engaged and well-briefed on the opportunity. They were particularly valuable in the later stages, advising on candidate positioning and offer structure, ultimately helping convert a strong candidate into a successful hire.",
      author: "Johnnie Greenwood, Co-founder, Greco Advisors",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}
