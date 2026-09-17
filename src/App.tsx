import { useEffect, useRef, useState } from 'react'
import { Mail, ExternalLink, ArrowUpRight } from 'lucide-react'
import ThemeToggle from './components/ThemeToggle'

// lucide-react doesn't ship brand icons.
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.37 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  )
}

const EMAIL = 'connect@crotich.com'
const LINKEDIN = 'https://www.linkedin.com/in/crotich/'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
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

const SKILLS = [
  'Database Analysis',
  'Loyalty Marketing',
  'Market Research',
  'Customer Data Analytics',
  'CVM & Campaign Management',
  'Business Intelligence Dashboards (Looker, Tableau)',
  'SOP & Process Design',
]

const CERTIFICATIONS = [
  'Business Analysis Foundations',
  'What Is Business Analysis?',
  'Corporate Finance Foundations',
  'Excel: PivotTables for Beginners',
  'Getting Started with Microsoft Excel',
]

function num(i: number) {
  return String(i + 1).padStart(2, '0')
}

function SectionEyebrow({ index, label }: { index: number; label: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span className="font-mono text-xs text-accent">{num(index)}</span>
      <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">{label}</h2>
    </div>
  )
}

/** Sticky left index rail — the "ledger" of the page. Collapses to a top bar on mobile. */
function IndexRail({ active }: { active: string }) {
  return (
    <aside className="border-b border-canvas-border px-4 py-4 sm:sticky sm:top-0 sm:h-screen sm:w-[220px] sm:shrink-0 sm:border-b-0 sm:border-r sm:px-6 sm:py-10">
      <div className="flex items-center justify-between sm:block">
        <a href="#top" className="font-display text-lg font-medium text-ink">
          C. Rotich
        </a>
        <div className="sm:hidden">
          <ThemeToggle />
        </div>
      </div>

      <nav className="mt-0 flex flex-wrap gap-x-5 gap-y-2 sm:mt-10 sm:flex-col sm:gap-2">
        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`flex items-baseline gap-2 text-xs transition-colors sm:text-[13px] ${
              active === s.id ? 'font-medium text-ink' : 'text-ink-muted hover:text-ink'
            }`}
          >
            <span className="font-mono text-accent">{num(i)}</span>
            {s.label}
          </a>
        ))}
      </nav>

      <div className="mt-10 hidden text-[11px] uppercase tracking-wide text-ink-muted sm:block">
        Nairobi, Kenya
      </div>
      <div className="mt-6 hidden sm:block">
        <ThemeToggle />
      </div>
    </aside>
  )
}

export default function App() {
  const [active, setActive] = useState('about')
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    for (const s of SECTIONS) {
      const el = sectionsRef.current[s.id]
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  const register = (id: string) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el
  }

  return (
    <div id="top" className="min-h-screen bg-canvas sm:flex">
      <IndexRail active={active} />

      <main className="mx-auto max-w-2xl px-4 py-14 sm:mx-0 sm:px-14 sm:py-20">
        {/* Hero */}
        <section className="animate-fadein">
          <p className="text-xs uppercase tracking-wide text-ink-muted">Loyalty &amp; Insights</p>
          <h1 className="mt-3 max-w-md font-display text-3xl font-medium leading-[1.15] text-ink sm:text-[2.6rem]">
            Data into strategies that keep customers coming back.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-muted">
            Loyalty &amp; Insights Manager with five-plus years turning customer data into strategies that
            drive retention, revenue, and long-term brand relationships across East Africa. Also a
            part-time poet.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-[13px] font-medium text-canvas transition-opacity hover:opacity-85"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={2} />
              Email me
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" ref={register('about')} className="mt-20">
          <SectionEyebrow index={0} label="About" />
          <div className="max-w-md space-y-4 text-[14.5px] leading-relaxed text-ink-muted">
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

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">Top skills</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink">
                {SKILLS.map((skill) => (
                  <li key={skill} className="border-b border-canvas-border/70 pb-1.5">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">Certifications</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert} className="border-b border-canvas-border/70 pb-1.5">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" ref={register('experience')} className="mt-20">
          <SectionEyebrow index={1} label="Experience" />
          <div>
            {EXPERIENCE.map((entry) => (
              <div key={entry.company} className="border-t border-canvas-border py-6 first:border-t-0 first:pt-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-medium text-ink">{entry.company}</h3>
                  <span className="font-mono text-[11px] text-ink-faint">{entry.location}</span>
                </div>
                <div className="mt-2.5 space-y-1.5">
                  {entry.roles.map((role) => (
                    <div key={role.title} className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-sm font-medium text-ink">{role.title}</span>
                      <span className="font-mono text-[11px] text-ink-faint">{role.period}</span>
                    </div>
                  ))}
                </div>
                <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-ink-muted">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" ref={register('projects')} className="mt-20">
          <SectionEyebrow index={2} label="Projects" />
          <a href="https://nse-tracker.crotich.com/" target="_blank" rel="noopener noreferrer" className="group block border-t border-canvas-border py-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-medium text-ink">NSE Market Intelligence</h3>
                <p className="mt-1.5 max-w-md text-sm text-ink-muted">
                  A live market-intelligence tracker for the Nairobi Securities Exchange — automated price
                  scraping, a quantitative signal-scoring engine, and a newsletter system, built end-to-end
                  including the data pipeline, backend, and frontend.
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-faint transition-colors group-hover:text-accent" strokeWidth={2} />
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-accent">
              nse-tracker.crotich.com <ExternalLink className="h-3 w-3" strokeWidth={2} />
            </div>
          </a>
        </section>

        {/* Education */}
        <section id="education" ref={register('education')} className="mt-20">
          <SectionEyebrow index={3} label="Education" />
          <div>
            {EDUCATION.map((ed) => (
              <div key={ed.school} className="flex flex-wrap items-baseline justify-between gap-2 border-t border-canvas-border py-3.5 first:border-t-0 first:pt-0">
                <div>
                  <div className="text-sm font-medium text-ink">{ed.school}</div>
                  <div className="text-xs text-ink-muted">{ed.credential}</div>
                </div>
                <span className="font-mono text-[11px] text-ink-faint">{ed.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" ref={register('contact')} className="mt-20 border-t border-canvas-border pt-10">
          <SectionEyebrow index={4} label="Let's talk" />
          <p className="max-w-md text-[14.5px] leading-relaxed text-ink-muted">
            Open to conversations on loyalty strategy, customer analytics, or anything data-and-CX shaped.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-[13px] font-medium text-canvas transition-opacity hover:opacity-85"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={2} />
              {EMAIL}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              linkedin.com/in/crotich
            </a>
          </div>
        </section>

        <footer className="mt-20 border-t border-canvas-border pt-6 pb-4 text-xs text-ink-faint">
          © {new Date().getFullYear()} Collins Rotich
        </footer>
      </main>
    </div>
  )
}
