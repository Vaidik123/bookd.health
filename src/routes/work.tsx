import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

import {
  AnimatedWords,
  Footer,
  Header,
  MeshOverlay,
  Rise,
} from '../components/site'

export const Route = createFileRoute('/work')({
  component: Work,
})

const STATS = [
  { value: '<2min', label: 'Lead response time after automation' },
  { value: '3–5×', label: 'Average ROI within 60–90 days' },
  { value: '50+', label: 'Pages of franchise operational documentation' },
  {
    value: '↓CAC',
    label: 'Significant cost-per-acquisition reduction via Meta & Google',
  },
]

const PROOF = [
  {
    tag: 'Brand Documentation',
    title: 'GameDay Franchise Handbook',
    body: 'Complete 50+ page operational handbook covering brand guidelines, marketing playbooks, and growth systems for franchise owners. Built to onboard every new location with a consistent, proven system.',
    stat: '50+ pages',
    statLabel: 'Full franchise operational playbook',
  },
  {
    tag: 'Sales Collateral',
    title: 'Service One-Pagers',
    body: 'High-converting sales collateral for MedSpa services, designed for both digital and print distribution. Each one-pager built to close consultations faster and reduce the sales cycle.',
    stat: 'Digital + Print',
    statLabel: 'Multi-format distribution across all franchise locations',
  },
  {
    tag: 'Automation',
    title: 'CRM Automation System',
    body: 'Built a complete GoHighLevel workflow system that captures leads, sends instant follow-ups, and books appointments automatically. Lead response time dropped from hours to under 2 minutes across all locations.',
    stat: '<2 min',
    statLabel: 'Lead response time after full automation deployment',
  },
  {
    tag: 'Performance Marketing',
    title: 'Performance Ad Campaigns',
    body: 'Meta & Google campaigns that generated high-quality leads for medical franchise locations with a significant reduction in cost-per-acquisition. Retargeting sequences layered on top to capture every unconverted prospect.',
    stat: '↓ CAC',
    statLabel: 'Significant cost-per-acquisition reduction via paid channels',
  },
]

const RESULT_STATS = [
  { value: '<2min', label: 'Lead response time via CRM automations' },
  { value: '3–5×', label: 'ROI delivered within 60–90 days' },
  { value: '7–14d', label: 'Average time to first campaign live' },
  { value: '0', label: 'Long-term contracts. Cancel anytime.' },
]

const PROCESS = [
  {
    num: '01',
    when: 'Week 1',
    title: 'Funnel Audit',
    body: 'We audit your existing funnel, CRM, ad accounts, and content. We identify exactly where leads are dropping off and build a prioritized roadmap to fix it, fast.',
  },
  {
    num: '02',
    when: 'Week 1–2',
    title: 'System Build',
    body: 'CRM workflows, automations, and campaign structures go live. Within 5–7 days for automations, 7–14 days for full ad campaigns. No 3-month agency onboarding.',
  },
  {
    num: '03',
    when: 'Ongoing',
    title: 'Optimize + Scale',
    body: "Weekly reporting, continuous A/B testing, and monthly strategy calls. We reallocate budget where it's working, no rigid contracts, no wasted spend.",
  },
]

function Work() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Header active="Work" />

        {/* Hero */}
        <section className="flex flex-col items-center pt-16 text-center md:pt-24">
          <h1
            className="max-w-[900px] font-medium"
            style={{ lineHeight: 1.05, letterSpacing: '-0.035em' }}
          >
            <span className="block text-[38px] sm:text-[52px] md:text-[76px]">
              <AnimatedWords text="Real work." delayStart={0.6} stagger={0.06} />{' '}
              <AnimatedWords
                text="Real results."
                className="gradient-text"
                delayStart={0.85}
                stagger={0.06}
              />
            </span>
          </h1>
          <motion.p
            className="mt-7 max-w-[640px] text-lg text-muted-foreground"
            style={{ lineHeight: 1.5 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
          >
            We don{'’'}t just talk strategy. Here{'’'}s what we{'’'}ve actually
            built for medical franchises, documented, measured, and repeatable.
          </motion.p>
        </section>
      </div>

      {/* Experience — dark mesh card */}
      <section className="mx-4 mt-16 md:mt-24">
        <Rise className="mesh-showcase overflow-hidden rounded-[28px] p-6 md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <span
                className="inline-block rounded-full px-4 py-1.5 text-[13px] font-semibold text-foreground"
                style={{ background: 'oklch(0.88 0.18 95)' }}
              >
                Our Experience
              </span>
              <h2
                className="mt-6 text-[30px] font-medium tracking-tight text-white sm:text-[36px] md:text-[48px]"
                style={{ lineHeight: 1.1 }}
              >
                <AnimatedWords
                  inView
                  text="Built for GameDay Community."
                  stagger={0.05}
                />
                <br />
                <AnimatedWords
                  inView
                  text="Now built for you."
                  className="gradient-text"
                  delayStart={0.2}
                  stagger={0.05}
                />
              </h2>
              <p
                className="mt-6 max-w-[560px] text-[15px] text-white/75"
                style={{ lineHeight: 1.6 }}
              >
                We built the complete growth infrastructure for GameDay
                Community, a network of medical franchises spanning MedSpa,
                wellness, and health services. From zero to fully automated lead
                generation, CRM workflows, and multi-location scaling systems.
              </p>
              <p className="mt-4 text-[15px] font-medium text-white">
                We{'’'}ve done it before. Now we do it for you.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <Rise
                  key={s.value}
                  delay={0.1 * i}
                  className="rounded-[18px] p-5"
                  style={{ background: '#1E1D19' }}
                >
                  <span
                    className="text-[32px] font-medium tracking-tight"
                    style={{ color: 'oklch(0.88 0.18 95)' }}
                  >
                    {s.value}
                  </span>
                  <p className="mt-2 text-[13px] text-white/60" style={{ lineHeight: 1.5 }}>
                    {s.label}
                  </p>
                </Rise>
              ))}
            </div>
          </div>
        </Rise>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Proof of work */}
        <section className="pt-24 md:pt-32">
          <Rise className="text-center">
            <h2
              className="text-[32px] font-medium tracking-tight sm:text-[40px] md:text-[52px]"
              style={{ lineHeight: 1.1 }}
            >
              <AnimatedWords inView text="Proof of" stagger={0.05} />{' '}
              <AnimatedWords
                inView
                text="work."
                className="gradient-text"
                delayStart={0.15}
                stagger={0.05}
              />
            </h2>
          </Rise>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {PROOF.map((p, i) => (
              <Rise
                key={p.title}
                delay={0.08 * i}
                className="group relative flex flex-col overflow-hidden rounded-[22px] border border-border bg-white p-7 transition-transform duration-300 hover:-translate-y-1 md:p-8"
              >
                <MeshOverlay />
                <span className="relative z-10 self-start rounded-full bg-muted px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground">
                  {p.tag}
                </span>
                <h3 className="relative z-10 mt-5 text-[22px] font-medium tracking-tight transition-colors duration-300 group-hover:text-white group-active:text-white">
                  {p.title}
                </h3>
                <p
                  className="relative z-10 mt-3 text-[15px] text-muted-foreground transition-colors duration-300 group-hover:text-white/80 group-active:text-white/80"
                  style={{ lineHeight: 1.6 }}
                >
                  {p.body}
                </p>
                <div className="relative z-10 mt-auto flex items-center gap-4 pt-7">
                  <span
                    className="rounded-lg px-3.5 py-2 text-[15px] font-semibold"
                    style={{ background: 'oklch(0.88 0.18 95)' }}
                  >
                    {p.stat}
                  </span>
                  <span className="text-[13px] text-muted-foreground transition-colors duration-300 group-hover:text-white/80 group-active:text-white/80">
                    {p.statLabel}
                  </span>
                </div>
              </Rise>
            ))}
          </div>
        </section>

        {/* Results band */}
        <section className="pt-24 md:pt-28">
          <Rise className="mesh-static grid gap-5 overflow-hidden rounded-[22px] p-8 sm:grid-cols-2 md:grid-cols-4 md:p-10">
            {RESULT_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <span className="text-[36px] font-medium tracking-tight text-white">
                  {s.value}
                </span>
                <p
                  className="mt-2 text-[13px] text-white/70"
                  style={{ lineHeight: 1.5 }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </Rise>
        </section>

        {/* How we work */}
        <section className="pt-24 md:pt-32">
          <Rise className="mx-auto max-w-[700px] text-center">
            <h2
              className="text-[32px] font-medium tracking-tight sm:text-[40px] md:text-[52px]"
              style={{ lineHeight: 1.1 }}
            >
              <AnimatedWords inView text="How we" stagger={0.05} />{' '}
              <AnimatedWords
                inView
                text="work."
                className="gradient-text"
                delayStart={0.15}
                stagger={0.05}
              />
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[15px] text-muted-foreground">
              Every engagement follows the same proven process, from audit to
              live system in weeks, not months.
            </p>
          </Rise>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {PROCESS.map((step, i) => (
              <Rise
                key={step.num}
                delay={0.1 * i}
                className="group relative overflow-hidden rounded-[22px] border border-border bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <MeshOverlay />
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold"
                    style={{ background: 'oklch(0.88 0.18 95)' }}
                  >
                    {step.num}
                  </span>
                  <span className="text-[13px] font-medium text-muted-foreground transition-colors duration-300 group-hover:text-white/80 group-active:text-white/80">
                    {step.when}
                  </span>
                </div>
                <h3 className="relative z-10 mt-5 text-[20px] font-medium tracking-tight transition-colors duration-300 group-hover:text-white group-active:text-white">
                  {step.title}
                </h3>
                <p
                  className="relative z-10 mt-3 text-[15px] text-muted-foreground transition-colors duration-300 group-hover:text-white/80 group-active:text-white/80"
                  style={{ lineHeight: 1.6 }}
                >
                  {step.body}
                </p>
              </Rise>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
