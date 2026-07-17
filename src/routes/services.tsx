import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

import {
  AnimatedWords,
  ChevronDown,
  Footer,
  Header,
  MeshOverlay,
  Rise,
} from '../components/site'

export const Route = createFileRoute('/services')({
  component: Services,
})

const SERVICES = [
  {
    num: '01',
    title: 'AI Sales & Leads Automation',
    body: 'Turn your CRM into a 24/7 booking machine. We build the workflows that capture every lead, respond instantly, and route prospects to the right person, so your team closes, not chases.',
    outcome: 'More booked calls. Faster response times. Zero lead leakage.',
    includes: [
      'GoHighLevel (GHL) Setup & Configuration',
      'Email & SMS Automation Campaigns',
      'GHL Workflows & Sequences',
      'Sales & SDR Automations',
      'Lead Routing & Instant Follow-Ups',
      'CRM Integrations & Data Sync',
    ],
  },
  {
    num: '02',
    title: 'Performance Marketing',
    body: 'Paid campaigns engineered for medical franchises, built around patient intent, geography, and service line. Every dollar is tracked back to a booked appointment.',
    outcome: 'Lower CAC. Higher ROAS. Predictable lead flow.',
    includes: [
      'Meta Ads (Facebook & Instagram)',
      'Google Search & Display Ads',
      'Funnel & Conversion Optimization',
      'Location-Based Campaign Scaling',
      'Retargeting Systems',
      'Weekly Reporting & Optimization',
    ],
  },
  {
    num: '03',
    title: 'Content & Ad Creatives',
    body: 'Thumb-stopping creative engineered for conversions, not just engagement. We produce UGC-style ads, video edits, and static assets built specifically for medical franchise audiences.',
    outcome: 'High-performing creatives for paid and organic distribution.',
    includes: [
      'UGC Ads (Creator Sourcing & Management)',
      'Video & Creative Editing',
      'Static Ads & Visual Assets',
      'Content Repurposing',
      'Social Media Content & Scheduling',
    ],
  },
  {
    num: '04',
    title: 'Website & SEO',
    body: 'Conversion-optimized sites backed by SEO that brings inbound demand on autopilot. We handle everything from local franchise SEO to technical audits and content strategy across all your locations.',
    outcome:
      'More organic traffic. Better conversion rates. Compounding demand.',
    includes: [
      'Website Design & Development',
      'SEO Strategy & Optimization',
      'Local & Franchise SEO',
      'Technical SEO & Content Optimization',
      'SEO Automations & Reporting',
    ],
  },
  {
    num: '05',
    title: 'Graphic Design & Branding',
    body: 'Cohesive visual systems that build trust at every patient touchpoint, from digital ads to printed clinic collateral. Your brand, consistent across every location.',
    outcome: 'A consistent, professional brand across every touchpoint.',
    includes: [
      'Brand Identity & Creative Assets',
      'Franchise Handbooks & One-Pagers',
      'Flyers & Print Materials',
      'Instagram Posts & Carousels',
      'Pricing Sheets & Sales Collateral',
    ],
  },
]

const FAQS = [
  {
    q: 'What industries do you work with?',
    a: 'We specialize in medical franchises, MedSpa, wellness clinics, health services, and similar verticals. Our systems are built specifically for appointment-based businesses that need predictable lead flow and automated follow-ups.',
  },
  {
    q: 'Do I need GoHighLevel already?',
    a: "No. We can set up your CRM from scratch or optimize your existing system. If you don't have GoHighLevel, we'll handle the entire setup and migration process.",
  },
  {
    q: 'How fast can you launch a campaign?',
    a: 'Most clients see their first campaign live within 7–14 days. CRM automations can be deployed even faster, often within 5–7 days depending on complexity.',
  },
  {
    q: 'Do you do strategy or only execution?',
    a: 'Both. Every engagement starts with strategy, we audit your funnel, identify gaps, and build a roadmap. Then we execute, test, and optimize continuously.',
  },
  {
    q: 'Is there a long-term contract?',
    a: "No. We work month-to-month. We earn your business every 30 days by delivering results. If you're not happy, you can cancel anytime.",
  },
  {
    q: "What's the average ROI clients see?",
    a: 'Most medical franchise clients see 3–5× ROI within 60–90 days through a combination of lower CAC, higher conversion rates, and automated follow-up systems.',
  },
]

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[17px] font-medium">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-muted-foreground"
        >
          <ChevronDown />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p
          className="pb-5 pr-8 text-[15px] text-muted-foreground"
          style={{ lineHeight: 1.6 }}
        >
          {a}
        </p>
      </motion.div>
    </div>
  )
}

function Services() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Header active="Services" />

        {/* Hero */}
        <section className="flex flex-col items-center pt-16 text-center md:pt-24">
          <h1
            className="max-w-[900px] font-medium"
            style={{ lineHeight: 1.05, letterSpacing: '-0.035em' }}
          >
            <span className="block text-[38px] sm:text-[52px] md:text-[76px]">
              <AnimatedWords text="Five services." delayStart={0.6} stagger={0.06} />
            </span>
            <span className="block text-[38px] sm:text-[52px] md:text-[76px]">
              <AnimatedWords
                text="One growth system."
                className="text-foreground/25"
                delayStart={0.85}
                stagger={0.06}
              />
            </span>
          </h1>
          <motion.p
            className="mt-7 max-w-[620px] text-lg text-muted-foreground"
            style={{ lineHeight: 1.5 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
          >
            Every service we run feeds into a single outcome: booked
            appointments for your medical franchise, on autopilot.
          </motion.p>
        </section>

        {/* Services list */}
        <section className="mt-20 space-y-5 md:mt-28">
          {SERVICES.map((s, i) => (
            <Rise
              key={s.num}
              delay={0.05 * i}
              className="group relative grid gap-8 overflow-hidden rounded-[22px] border border-border bg-white p-7 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[1fr_1fr] md:p-10"
            >
              <MeshOverlay />
              <div className="relative z-10">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold"
                  style={{ background: 'oklch(0.88 0.18 95)' }}
                >
                  {s.num}
                </span>
                <h2 className="mt-5 text-[26px] font-medium tracking-tight transition-colors duration-300 group-hover:text-white md:text-[30px]">
                  {s.title}
                </h2>
                <p
                  className="mt-4 text-[15px] text-muted-foreground transition-colors duration-300 group-hover:text-white/80"
                  style={{ lineHeight: 1.6 }}
                >
                  {s.body}
                </p>
                <p className="mt-4 text-[15px] font-medium transition-colors duration-300 group-hover:text-white">
                  {s.outcome}
                </p>
              </div>
              <div className="relative z-10 rounded-[16px] bg-muted p-6">
                <span className="text-sm font-medium text-muted-foreground">
                  Includes
                </span>
                <ul className="mt-4 space-y-3">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span
                        className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px]"
                        style={{ background: '#FFD209' }}
                      >
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Rise>
          ))}
        </section>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <section className="mx-auto max-w-[820px] pt-24 md:pt-32">
          <Rise className="text-center">
            <h2
              className="text-[32px] font-medium tracking-tight sm:text-[40px] md:text-[52px]"
              style={{ lineHeight: 1.1 }}
            >
              <AnimatedWords inView text="Questions?" stagger={0.05} />{' '}
              <AnimatedWords
                inView
                text="We've got answers."
                className="text-foreground/25"
                delayStart={0.15}
                stagger={0.05}
              />
            </h2>
          </Rise>
          <Rise className="mt-12" delay={0.15}>
            {FAQS.map((f) => (
              <Faq key={f.q} q={f.q} a={f.a} />
            ))}
          </Rise>
        </section>
      </div>

      <Footer />
    </div>
  )
}
