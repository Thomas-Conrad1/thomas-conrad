import { createFileRoute } from "@tanstack/react-router";
import photo from src="/assets/Vetro_Gaming_Silver_Creator_Award";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thomas Conrad — Digital Marketing Portfolio" },
      {
        name: "description",
        content:
          "Digital marketer driving results across paid media, email, and social: 16 ROAS on Amazon DSP, 18M+ campaign views, $700K+ in ecommerce sales driven.",
      },
      { property: "og:title", content: "Thomas Conrad — Digital Marketing Portfolio" },
      {
        property: "og:description",
        content: "Case studies and experience across paid media, email, social, and creator growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "thomasconrad100@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/thomas-c-conrad";

const stats = [
  { value: "16", label: "Amazon DSP ROAS" },
  { value: "18M+", label: "Campaign views" },
  { value: "$700K+", label: "Ecommerce sales driven" },
  { value: "73M+", label: "Content views" },
];

const cases = [
  {
    tag: "Paid Media · Sales Factory",
    title: "Programmatic Amazon DSP",
    metric: "16",
    metricLabel: "ROAS",
    challenge: "A client needed profitable reach on Amazon beyond search ads.",
    approach: "Led a programmatic DSP campaign, optimizing audiences, placements, and bids from ongoing performance data.",
    result: "Achieved a return on ad spend of 16.",
    tags: ["Amazon DSP", "Optimization"],
  },
  {
    tag: "Social · Sales Factory",
    title: "Student Ambassador Program",
    metric: "18M+",
    metricLabel: "Views",
    challenge: "Raise awareness for a client's new program expansion with a student audience.",
    approach: "Launched an ambassador program, producing 57 social assets across TikTok, Meta, and LinkedIn while managing a 5-figure budget and client reporting.",
    result: "18M+ views across three platforms.",
    tags: ["TikTok", "Meta", "LinkedIn"],
  },
  {
    tag: "Founder · Vetro Gaming",
    title: "Building a Creator Brand",
    metric: "$700K+",
    metricLabel: "Ecommerce sales",
    challenge: "Grow a digital brand from zero and turn attention into revenue.",
    approach: "Ran content strategy, email, affiliate channels, and 17 brand deals with 7 global brands, leading a small contractor team.",
    result: "200K followers, 73M+ views, 7,300+ email subscribers, and a YouTube Silver Play Button — with $700K+ in ecommerce sales driven collectively across Vetro Gaming and other brands.",
    tags: ["Content", "Email", "Partnerships"],
  },
];

const experience = [
  {
    company: "Sales Factory",
    place: "Arlington, VA",
    period: "Aug 2024 — Present",
    roles: "Digital Marketing Specialist · Digital Support Specialist · AI & Digital Intern",
    points: [
      "Manage client email lists totaling 67K subscribers, from design to A/B testing and analysis",
      "Led an Amazon DSP campaign to a ROAS of 16",
      "Launched a student ambassador program generating 18M+ views",
      "Set up click IDs and supported the site structure and launch of a new website for CHANNELLOCK®",
      "Run SEO audits and manage the agency's own content calendar",
    ],
  },
  {
    company: "Vetro Gaming",
    place: "Winston-Salem, NC",
    period: "May 2020 — Present",
    roles: "Founder",
    points: [
      "$700K+ in ecommerce sales driven collectively for Vetro Gaming and other brands, through direct and affiliate channels",
      "200K social followers and 73M+ views across channels",
      "Grew an email list from 0 to 7,300+ subscribers",
      "17 brand deals with 7 global brands; guest speaker and investor pitches",
    ],
  },
  {
    company: "Newell Brands",
    place: "Atlanta, GA",
    period: "Jan 2022 — Mar 2023",
    roles: "Brand Strategy Analyst",
    points: [
      "Media mix analyses for 7 CPG brands across paid search, display, influencer, and PPC",
      "Built price elasticity tools and dashboards in Excel and Power BI",
      "Helped form a cross-functional media mix committee",
    ],
  },
];

const skills = [
  "Google Ads", "Google Analytics", "Meta Ads Manager", "TikTok Ads Manager", "LinkedIn Ads Manager",
  "Amazon DSP", "HubSpot", "Sprout Social", "Shopify", "WordPress", "Power BI", "Tableau", "Excel", "Figma", "Canva",
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">
        <a href="#top" className="text-xl font-semibold uppercase tracking-tighter">Thomas Conrad</a>
        <div className="flex gap-6 text-xs font-medium uppercase tracking-widest md:gap-8 md:text-sm">
          <a href="#work" className="transition-colors hover:text-accent">Work</a>
          <a href="#experience" className="transition-colors hover:text-accent">Experience</a>
          <a href="#toolkit" className="transition-colors hover:text-accent">Toolkit</a>
          <a href="#contact" className="transition-colors hover:text-accent">Contact</a>
        </div>
      </nav>

      <header id="top" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-6 inline-block rounded-full border border-primary/20 px-3 py-1 text-[10px] uppercase tracking-widest text-primary">
            Digital Marketing · Paid Media · Content Strategy
          </div>
          <h1 className="mb-8 font-serif text-6xl leading-[0.9] lg:text-8xl">
            Driving <span className="block italic text-primary">real results</span> through data and storytelling.
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-foreground/70 md:text-xl">
            I'm a digital marketer who has run paid media, email, and social campaigns for agency clients — and built my own
            creator brand to 200K followers while driving $700K+ in ecommerce sales across brands. Now looking for a
            Digital Marketing Manager role.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="bg-primary px-8 py-4 font-medium text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground">
              View Case Studies
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <img
            src={photo.url}
            alt="Thomas Conrad holding the YouTube Silver Play Button awarded to Vetro Gaming"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        </div>
      </header>

      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-14 px-6 md:grid-cols-4 md:px-8">
          {stats.map((s) => (
            <div key={s.label} className="space-y-2">
              <div className="font-serif text-5xl">{s.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="mb-16">
          <h2 className="mb-4 font-serif text-5xl">Case Studies</h2>
          <p className="text-foreground/60">Selected work from agency campaigns to my own brand.</p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <article key={c.title} className="flex flex-col">
              <div className={`mb-6 flex aspect-video flex-col justify-between rounded-lg p-6 ${i % 2 ? "bg-primary text-primary-foreground" : "bg-accent/20 text-primary"}`}>
                <span className="text-[10px] uppercase tracking-[0.15em] opacity-70">{c.tag}</span>
                <div className="flex items-end gap-3">
                  <span className="font-serif text-7xl leading-none">{c.metric}</span>
                  <span className="pb-2 text-xs uppercase tracking-widest opacity-70">{c.metricLabel}</span>
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">{c.title}</h3>
              <dl className="mb-5 space-y-3 text-sm">
                {[["Challenge", c.challenge], ["Approach", c.approach], ["Result", c.result]].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[10px] uppercase tracking-widest text-accent">{k}</dt>
                    <dd className="text-foreground/70">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-auto flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="bg-foreground/5 px-2 py-1 text-[9px] uppercase tracking-tighter">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <h2 className="mb-16 font-serif text-5xl">Experience</h2>
          <div className="space-y-14">
            {experience.map((e) => (
              <div key={e.company} className="grid grid-cols-1 gap-6 border-b border-border pb-14 last:border-0 md:grid-cols-12">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-3xl">{e.company}</h3>
                  <p className="mt-1 text-sm text-foreground/60">{e.place}</p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-primary">{e.period}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="mb-4 font-medium">{e.roles}</p>
                  <ul className="space-y-2 text-foreground/70">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="toolkit" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
          <div className="mb-16 md:mb-20">
            <h2 className="font-serif text-5xl tracking-tight md:text-6xl">
              Toolkit & <span className="text-accent">Credentials</span>
            </h2>
            <div className="mt-8 h-px w-full bg-primary-foreground/20" />
          </div>

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-8">
              <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Toolkit</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                <ul className="space-y-3 text-sm font-light leading-relaxed text-primary-foreground/85 md:text-base">
                  {skills.slice(0, Math.ceil(skills.length / 2)).map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <ul className="space-y-3 text-sm font-light leading-relaxed text-primary-foreground/85 md:text-base">
                  {skills.slice(Math.ceil(skills.length / 2)).map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8 border-t border-primary-foreground/15 pt-10 lg:border-t-0 lg:pt-0">
              <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Certifications</h3>
              <ul className="space-y-5 font-serif text-xl italic leading-snug md:text-2xl">
                <li>Google Analytics</li>
                <li>Google Ads</li>
                <li>HubSpot Content & Inbound</li>
              </ul>
            </div>

            <div className="space-y-8 border-t border-primary-foreground/15 pt-10 lg:border-t-0 lg:pt-0">
              <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Education</h3>
              <div className="space-y-8">
                <div>
                  <p className="font-serif text-xl leading-snug md:text-2xl">Master of Digital Marketing</p>
                  <p className="mt-2 text-sm font-light text-primary-foreground/80">4.0 GPA &bull; Wake Forest University</p>
                </div>
                <div>
                  <p className="font-serif text-xl leading-snug md:text-2xl">B.A. Psychology</p>
                  <p className="mt-2 text-sm font-light text-primary-foreground/80">Wake Forest University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-foreground py-20 text-background/60">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h4 className="mb-8 font-serif text-2xl text-background">Let's Connect</h4>
              <p className="mb-8">Open to Digital Marketing Manager roles where creativity and ROI go hand in hand.</p>
              <a href={`mailto:${EMAIL}`} className="font-serif text-2xl text-background underline decoration-accent underline-offset-8 transition-colors hover:text-accent md:text-3xl">
                {EMAIL}
              </a>
            </div>
            <div className="flex flex-col items-start justify-end md:items-end">
              <div className="flex gap-6 text-sm uppercase tracking-widest">
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a>
                <a href="#work" className="hover:text-accent">Work</a>
                <a href="#experience" className="hover:text-accent">Experience</a>
              </div>
            </div>
          </div>
          <div className="mt-20 border-t border-background/5 pt-8 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Thomas Conrad
          </div>
        </div>
      </footer>
    </div>
  );
}
