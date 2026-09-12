import { Mail, ExternalLink, ArrowUpRight } from 'lucide-react'
import ThemeToggle from './components/ThemeToggle'

// lucide-react doesn't ship brand icons — same inline mark used on
// nse-tracker.crotich.com, kept pixel-for-pixel identical for consistency.
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.37 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  )
}

const EMAIL = 'rotich.collins96@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/crotich/'

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

interface ExperienceRole {
  title: string
  period: string
}

interface ExperienceEntry {
  company: string
  location: string
  roles: ExperienceRole[]
  bullets: string[]
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Goodlife Pharmacy Africa',
    location: 'Nairobi County, Kenya',
    roles: [{ title: 'Loyalty and Consumer Insights Manager (Kenya & Uganda)', period: 'May 2026 – Present' }],
    bullets: [
      'Developing loyalty strategy and owning campaign leadership',
      'Managing customer data and analytics',
      'Conducting ongoing customer and market research and developing actionable insights',
      'Cross-functional collaboration and execution',
      'Managing customer experience and revenue impact',
    ],
  },
  {
    company: 'Dukaribu',
    location: 'Nairobi County, Kenya',
    roles: [{ title: 'Data & Operations Lead', period: 'January 2025 – May 2026' }],
    bullets: [
      'Structured how business needs were translated into practical workflows and reporting processes',
      'Tracked and organised data flows across campaigns, lead capture, follow-up, and conversion',
      'Built and maintained reporting and performance-tracking frameworks using internal tools',
      'Developed dashboards to monitor campaign outcomes, lead flow, and operational performance',
      'Worked hands-on with teams to implement, test, and refine scalable workflows',
    ],
  },
  {
    company: 'True Denim Collection',
    location: 'Nairobi County, Kenya',
    roles: [{ title: 'Operations Manager', period: 'July 2024 – December 2024' }],
    bullets: [
      'Led cross-functional teams across production, marketing, sales, dispatch, and delivery',
      'Managed budgets, cash allocation, and operational payments',
      'Coordinated production cycles: material sourcing, tailoring, laundry, logistics, inventory flow',
      'Prepared visual summaries of production, campaign, and sales performance for team alignment',
    ],
  },
  {
    company: 'Copia Global',
    location: 'Nairobi County, Kenya',
    roles: [
      { title: 'Snr. Reporting Analyst | Finance & Operations Consultant', period: 'Jun 2024 – Jul 2024' },
      { title: 'Snr. CX Reporting Analyst', period: 'Feb 2024 – Jun 2024' },
      { title: 'Customer Experience (CX) Reporting Analyst', period: 'Feb 2022 – Feb 2024' },
      { title: 'Customer Care Associate / Helpdesk', period: 'Apr 2021 – Feb 2022' },
    ],
    bullets: [
      'Led organisation-wide CX and Voice of the Customer (VOC) analytics, supporting decisions across customer care, finance, and operations',
      'Built and maintained enterprise dashboards in Looker and Tableau tracking CX KPIs, agent productivity, and operational performance',
      'Managed and mentored a reporting team responsible for dashboards, performance tracking, and reporting standards',
      'Led customer care data integration into Tableau, then the migration from Tableau to Looker',
      'Automated productivity reporting and designed Google Sheets calculators for streamlined analysis',
      'Documented SOPs and reporting guidelines to support continuity and knowledge transfer',
    ],
  },
]

const EDUCATION = [
  { school: 'Kenyatta University', credential: 'MBA, Strategic Management', period: 'Sep 2024 – Dec 2026' },
  {
    school: 'United States International University – Africa',
    credential: 'BSc, International Business Administration',
    period: 'Sep 2017 – Sep 2020',
  },
  { school: 'The Kenya Institute of Management', credential: 'Diploma, Project Management', period: 'Sep 2015 – Sep 2017' },
  { school: 'Strathmore School', credential: 'High School Diploma', period: '2010 – 2014' },
]

const SKILLS = ['Database Analysis', 'Loyalty Marketing', 'Market Research', 'Customer Data Analytics', 'CVM & Campaign Management', 'Business Intelligence Dashboards (Looker, Tableau)', 'SOP & Process Design']

const CERTIFICATIONS = [
  'Business Analysis Foundations',
  'What Is Business Analysis?',
  'Corporate Finance Foundations',
  'Excel: PivotTables for Beginners',
  'Getting Started with Microsoft Excel',
]

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</div>
      <h2 className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <header className="sticky top-0 z-20 border-b border-canvas-border bg-canvas/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="font-display text-[15px] font-semibold tracking-tight text-ink">
            Collins Rotich
          </a>
          <nav className="flex items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hidden text-sm text-ink-muted transition-colors hover:text-ink sm:inline"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        {/* Hero */}
        <section className="animate-fadein">
          <p className="text-sm font-medium text-ink-muted">Nairobi County, Kenya</p>
          <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            Loyalty strategy, campaign management, and customer data analytics.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            Loyalty &amp; Insights Manager with five-plus years turning customer data into strategies that
            drive retention, revenue, and long-term brand relationships across East Africa. Also a part-time
            poet.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" strokeWidth={2} />
              Email me
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-canvas-border px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-20">
          <SectionHeading eyebrow="About" title="What I do" />
          <div className="space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            <p>
              I specialise in building loyalty programmes and translating complex customer data into
              strategies that drive retention, revenue, and long-term brand relationships. I've led CVM
              planning and customer segmentation at scale, built automated reporting pipelines, and
              supported cross-functional teams with the insights they need to make confident decisions.
            </p>
            <p>
              My work has spanned loyalty strategy, market research, campaign management, and business
              intelligence, with a consistent focus on making data useful — not just accurate. Alongside my
              insights work, I've developed a strong grounding in marketing strategy and operations,
              coordinating across teams, managing vendor relationships, and contributing to business
              decisions at a level beyond pure analytics.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Top Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-canvas-border bg-canvas-panel px-3 py-1 text-xs text-ink-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Certifications</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-20">
          <SectionHeading eyebrow="Career" title="Experience" />
          <div className="space-y-10">
            {EXPERIENCE.map((entry) => (
              <div key={entry.company} className="rounded-lg border border-canvas-border bg-canvas-panel p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">{entry.company}</h3>
                  <span className="text-xs text-ink-faint">{entry.location}</span>
                </div>
                <div className="mt-3 space-y-2.5">
                  {entry.roles.map((role) => (
                    <div key={role.title} className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-sm font-medium text-accent">{role.title}</span>
                      <span className="text-xs text-ink-faint">{role.period}</span>
                    </div>
                  ))}
                </div>
                <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-ink-muted">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-20">
          <SectionHeading eyebrow="Side project" title="Projects" />
          <a
            href="https://nse-tracker.crotich.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-canvas-border bg-canvas-panel p-5 transition-colors hover:border-accent/50"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">NSE Market Intelligence</h3>
                <p className="mt-1 text-sm text-ink-muted">
                  A live market-intelligence tracker for the Nairobi Securities Exchange — automated price
                  scraping, a quantitative signal-scoring engine, and a newsletter system, built end-to-end
                  including the data pipeline, backend, and frontend.
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-faint transition-colors group-hover:text-accent" strokeWidth={2} />
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
              nse-tracker.crotich.com <ExternalLink className="h-3 w-3" strokeWidth={2} />
            </div>
          </a>
        </section>

        {/* Education */}
        <section className="mt-20">
          <SectionHeading eyebrow="Background" title="Education" />
          <div className="space-y-4">
            {EDUCATION.map((ed) => (
              <div key={ed.school} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-canvas-border/60 pb-3 last:border-0">
                <div>
                  <div className="text-sm font-medium text-ink">{ed.school}</div>
                  <div className="text-xs text-ink-muted">{ed.credential}</div>
                </div>
                <span className="text-xs text-ink-faint">{ed.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-20 rounded-lg border border-canvas-border bg-canvas-panel p-6 text-center">
          <h2 className="font-display text-2xl font-semibold text-ink">Let's talk</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted">
            Open to conversations on loyalty strategy, customer analytics, or anything data-and-CX shaped.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" strokeWidth={2} />
              {EMAIL}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-canvas-border px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              linkedin.com/in/crotich
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-canvas-border">
        <div className="mx-auto max-w-4xl px-4 py-8 text-center text-xs text-ink-faint sm:px-6">
          © {new Date().getFullYear()} Collins Rotich
        </div>
      </footer>
    </div>
  )
}
