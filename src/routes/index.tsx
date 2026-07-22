import { useEffect, useRef, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'

import {
  AnimatedWords,
  CAL_URL,
  EASE,
  Footer,
  Header,
  MeshOverlay,
  Rise,
  Star,
} from '../components/site'
import browserMockup from '../assets/browser-mockup.png'
import nurseVideo from '../assets/nurse-video.mp4'
import avatars from '../assets/avatars.svg'
import programmingArrow from '../assets/programming-arrow.svg'
import upsideLogo from '../assets/upside-logo.svg'
import nutanixMark from '../assets/nutanix-mark.svg'

export const Route = createFileRoute('/')({
  component: Home,
})

/* ---------------- AnimatedDottedFrame ---------------- */

function AnimatedDottedFrame({
  className = '',
  style,
  startDelay = 0,
}: {
  className?: string
  style?: React.CSSProperties
  startDelay?: number
}) {
  const pathRef = useRef<SVGPathElement>(null)
  const [points, setPoints] = useState<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const total = path.getTotalLength()
    const pts: Array<{ x: number; y: number }> = []
    for (let d = 2; d <= total; d += 4) {
      const p = path.getPointAtLength(d)
      pts.push({ x: p.x, y: p.y })
    }
    setPoints(pts)
  }, [])

  return (
    <svg
      className={className}
      style={style}
      width="141"
      height="107"
      viewBox="0 0 141 107"
      fill="none"
      aria-hidden
    >
      <path
        ref={pathRef}
        d="M140.75 3.75H5.75C2.98857 3.75 0.75 5.98858 0.75 8.75V95.75C0.75 98.5114 2.98858 100.75 5.75 100.75H40"
      />
      <g>
        {points.map((p, i) => (
          <circle
            key={i}
            className="dot-pop"
            cx={p.x}
            cy={p.y}
            r="1.25"
            fill="#fff"
            style={{ animationDelay: `${startDelay + i * 40}ms` }}
          />
        ))}
      </g>
    </svg>
  )
}

function AiBadge() {
  return (
    <svg width="14" height="12" viewBox="0 0 12 10" fill="none">
      <path
        d="M5.71198 0L9.56198 9.982H7.686L6.734 7.336H2.786L1.806 9.982H0L3.85 0H5.71198ZM6.272 6.02L4.788 1.82L3.234 6.02H6.272ZM11.998 0.014V9.982H10.234V0.014H11.998Z"
        opacity="0.85"
        fill="currentColor"
      />
    </svg>
  )
}

/* ---------------- Data (copy from bookd.health) ---------------- */

const KEY_FEATURES = [
  { label: 'AI Sales & Lead Automation', active: true },
  { label: 'Performance Marketing', active: false },
  { label: 'Content & Ad Creatives', active: false },
  { label: 'Website & SEO', active: false },
  { label: 'Graphic Design & Branding', active: false },
]

const SERVICES = [
  {
    title: 'AI Sales & Leads Automation',
    body: 'We build and automate your entire sales operations stack, CRM setup, lead routing, follow-up sequences, and pipeline reporting, so your team focuses on closing, not chasing.',
  },
  {
    title: 'Performance Marketing',
    body: 'Paid search and paid social campaigns engineered for medical franchises, targeted by geography, service line, and patient intent to drive booked appointments.',
  },
  {
    title: 'Content & Ad Creatives',
    body: 'High-converting ad creatives, landing pages, and content built specifically for medical franchise audiences, designed to capture attention and convert.',
  },
]

const WHY_US = [
  {
    title: 'Up for a challenge',
    body: 'We thrive in saturated markets where most agencies give up. More competition means more opportunity to outperform.',
  },
  {
    title: 'Data-driven ad campaigns',
    body: 'Every dollar tracked back to a booked appointment. No vanity metrics, no guesswork, just measurable ROI.',
  },
  {
    title: 'Global partnerships',
    body: "Meta Business Partner with access to platform-level insights and early tools that independent agencies don't get.",
  },
  {
    title: 'Client-first approach',
    body: 'Month-to-month. No lock-in. We earn your business every 30 days by delivering results you can see.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Their CRM automations and ad campaigns gave us predictable, scalable lead flow across all our locations. Real results, real fast.',
    author: 'Chic La Vie',
  },
  {
    quote:
      'Bookd built our entire growth system from scratch. Lead response went from hours to under 2 minutes, our booking rate jumped immediately.',
    author: 'GameDay Community',
  },
  {
    quote:
      'The AI follow-ups alone paid for the engagement. Leads that used to go cold now book themselves onto our calendar overnight.',
    author: 'GamesDay MensHealth',
  },
  {
    quote:
      'Our cost per acquisition dropped within the first 60 days, and every campaign is tracked back to an actual booked consultation.',
    author: 'Bodycraft',
  },
  {
    quote:
      'They rebuilt our funnel end to end. Predictable appointment volume every single week — no more feast-or-famine months.',
    author: 'Premiere TRT',
  },
]

const PLANS = [
  {
    name: 'Basic',
    price: '$500',
    points: '30 points / month',
    body: 'Best for early-stage brands and focused execution on 1–2 services.',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$800',
    points: '75 points / month',
    was: '$1,000',
    off: '20% off',
    body: 'Ideal for growing brands that need consistent marketing and automation support. Limited slots.',
    popular: true,
  },
  {
    name: 'Platinum',
    price: '$1,500',
    points: '120 points / month',
    body: 'Built for scale. Full-funnel execution across ads, CRM, content, and design.',
    popular: false,
  },
]

/* ---------------- Page ---------------- */

function TestimonialRotator() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % TESTIMONIALS.length),
      4500,
    )
    return () => clearInterval(t)
  }, [])

  const t = TESTIMONIALS[idx]

  return (
    <div className="mt-10">
      <div className="relative min-h-[220px] overflow-hidden sm:min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -26 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <blockquote
              className="text-[17px] font-medium"
              style={{ lineHeight: 1.5 }}
            >
              “{t.quote}”
            </blockquote>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[14px] font-semibold text-white/70">
                {t.author}
              </span>
              <div className="flex items-center gap-1">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star half />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-5 flex items-center gap-1.5">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            aria-label={`Testimonial ${i + 1}`}
            onClick={() => setIdx(i)}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: i === idx ? 24 : 10,
              background:
                i === idx ? 'oklch(0.88 0.18 95)' : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function Home() {
  const [litFeature, setLitFeature] = useState(0)
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  // iOS blocks autoplay in Low Power Mode and shows a play glyph;
  // retry on load and again on the first touch/click.
  useEffect(() => {
    const v = heroVideoRef.current
    if (!v) return
    const tryPlay = () => {
      if (v.paused) v.play().catch(() => {})
    }
    tryPlay()
    document.addEventListener('touchstart', tryPlay, {
      once: true,
      passive: true,
    })
    document.addEventListener('click', tryPlay, { once: true })
    return () => {
      document.removeEventListener('touchstart', tryPlay)
      document.removeEventListener('click', tryPlay)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Header active="Home" />

        {/* ---------- Hero ---------- */}
        <section className="flex flex-col items-center pt-16 text-center md:pt-24">
          <motion.div
            className="inline-flex items-center"
            style={{
              padding: '4px 11px 4px 4px',
              gap: 10,
              borderRadius: 8,
              background: 'rgba(192,192,192,0.17)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
          >
            <span
              className="flex items-center justify-center bg-white text-foreground"
              style={{ width: 28, height: 22, borderRadius: 5 }}
            >
              <AiBadge />
            </span>
            <span className="text-sm">
              Lead capture, automation &amp; booked appointments
            </span>
          </motion.div>

          <h1
            className="mt-6 max-w-[1100px] font-medium"
            style={{ lineHeight: 1.05, letterSpacing: '-0.035em' }}
          >
            <span className="block text-[40px] sm:text-[56px] md:text-[84px]">
              <AnimatedWords
                text="AI that converts patients"
                delayStart={0.9}
                stagger={0.05}
              />
            </span>
            <span className="block text-[40px] sm:text-[56px] md:text-[84px]">
              <AnimatedWords text="for your" delayStart={1.05} stagger={0.05} />{' '}
              <motion.video
                ref={heroVideoRef}
                src={nurseVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="inline-block h-[56px] w-[56px] rounded-full object-cover align-middle sm:h-[80px] sm:w-[80px] md:h-[104px] md:w-[104px]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: 'backOut', delay: 1.2 }}
              />{' '}
              <AnimatedWords
                text="medical practice"
                className="text-foreground/25"
                delayStart={1.15}
                stagger={0.05}
              />
            </span>
          </h1>

          <motion.p
            className="mt-8 max-w-[760px] text-lg text-muted-foreground"
            style={{ lineHeight: 1.5 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.35 }}
          >
            From lead capture to booked appointments, automated, optimized, and
            built to scale.
            <br />
            Renowned brands trust us for transparent, growth-centric solutions.
          </motion.p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <motion.a
              href="/work"
              className="rounded-full border border-border bg-white px-6 py-3 text-[15px] font-medium shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors hover:bg-muted"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: 'backOut', delay: 1.55 }}
            >
              See our work
            </motion.a>
            <motion.a
              href={CAL_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mesh-showcase overflow-hidden rounded-full px-6 py-3 text-[15px] font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: 'backOut', delay: 1.65 }}
              whileHover={{ scale: 1.02 }}
            >
              Book a Call
            </motion.a>
          </div>
        </section>
      </div>

      {/* ---------- Showcase card ---------- */}
      <motion.section
        className="mesh-showcase mx-4 mt-16 overflow-hidden rounded-[28px] p-5 md:p-7"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: EASE, delay: 0.05 }}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {/* Left inner card */}
          <motion.div
            className="relative flex min-h-[360px] flex-col rounded-[22px] p-6 md:p-7"
            style={{ background: '#1E1D19', color: '#fff' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <motion.span
              className="flex items-center justify-center text-xs font-medium"
              style={{
                width: 36,
                height: 22,
                borderRadius: 6,
                background: '#FFFFFF',
                color: '#111114',
              }}
              initial={{ scale: 2.4, opacity: 0.2 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
            >
              Pro
            </motion.span>

            <h2
              className="mt-5 text-[28px] font-medium tracking-tight text-white"
              style={{ lineHeight: 1.15 }}
            >
              <span className="block">
                <AnimatedWords inView text="The Complete Growth" delayStart={0.4} />
              </span>
              <span className="block">
                <AnimatedWords
                  inView
                  text="Stack for Medical Franchises"
                  delayStart={0.55}
                />
              </span>
            </h2>

            <p
              className="mt-auto pt-6 text-base font-normal"
              style={{ color: 'rgba(255,255,255,0.36)', lineHeight: '19px' }}
            >
              From lead capture to booked appointments,
              <br />
              We run your growth with automation.
            </p>

            {/* Floating browser mockup */}
            <div className="absolute bottom-0 right-0 hidden w-[330px] md:block">
              <img
                src={browserMockup}
                alt="Bookd dashboard"
                loading="lazy"
                className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              />
              <span
                className="absolute box-content h-2 w-2 rounded-full bg-white"
                style={{
                  top: 40,
                  left: 1,
                  border: '2px solid rgba(255,255,255,0.12)',
                }}
              />
              <AnimatedDottedFrame
                className="absolute"
                style={{ left: '-135.75px', top: '43.25px' }}
                startDelay={1400}
              />
            </div>

            {/* Key Features popover */}
            <motion.div
              className="absolute z-10 hidden flex-col md:flex"
              style={{
                bottom: -24,
                right: 214,
                width: 210,
                height: 222,
                borderRadius: '13.654px',
                border: '1px solid rgba(255,255,255,0.34)',
                background:
                  'linear-gradient(164deg, rgba(255,255,255,0.04) 14.62%, rgba(255,255,255,0.40) 85.2%)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                padding: 12,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            >
              <div className="mb-2 flex items-center gap-2">
                <img src={programmingArrow} alt="" width={14} height={14} />
                <span className="text-[13px] font-medium text-white">
                  Our Services
                </span>
              </div>
              <div
                className="relative mb-2 h-px"
                style={{
                  marginLeft: -12,
                  marginRight: -12,
                  background: 'rgba(255,255,255,0.19)',
                }}
              >
                <span
                  className="absolute box-content h-2 w-2 rounded-full bg-white"
                  style={{
                    left: -4,
                    top: -4,
                    border: '2px solid rgba(255,255,255,0.12)',
                  }}
                />
              </div>
              <div className="space-y-1">
                {KEY_FEATURES.map((f, fi) => {
                  const lit = fi === litFeature
                  return (
                    <motion.div
                      key={f.label}
                      className="flex cursor-pointer items-center gap-2"
                      onMouseEnter={() => setLitFeature(fi)}
                      onClick={() => setLitFeature(fi)}
                      whileHover={{ scale: 1.03, x: 2 }}
                      transition={{ duration: 0.18 }}
                      animate={{
                        backgroundColor: lit
                          ? 'rgba(244,244,244,1)'
                          : 'rgba(244,244,244,0)',
                        color: lit ? '#111114' : 'rgba(255,255,255,0.9)',
                      }}
                      style={{ padding: '6px 4px', borderRadius: '4.312px' }}
                    >
                      {lit ? (
                        <motion.span
                          className="flex h-3 w-3 shrink-0 items-center justify-center"
                          initial={{ scale: 0.4 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2, ease: 'backOut' }}
                          style={{
                            background: '#FFD209',
                            borderRadius: '1.006px',
                          }}
                        >
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="4"
                            strokeLinecap="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </motion.span>
                      ) : (
                        <span className="h-3 w-3 shrink-0 rounded-[3px] bg-white/15" />
                      )}
                      <span className="text-xs font-medium">{f.label}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right inner card — testimonial */}
          <motion.div
            className="relative min-h-[360px] rounded-[22px] bg-white p-6 md:p-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={avatars}
                  alt="Customer avatars"
                  width={96}
                  height={44}
                  className="h-11 w-auto"
                />
                <span className="text-[15px] font-medium text-foreground">
                  What our customers say
                </span>
              </div>
              <div className="flex flex-col" style={{ gap: '4.34px' }}>
                <span
                  style={{
                    width: '4.343px',
                    height: '32.569px',
                    borderRadius: '5.428px',
                    background: '#131318',
                  }}
                />
                <span
                  style={{
                    width: '4.343px',
                    height: '16.285px',
                    borderRadius: '5.428px',
                    background: '#DCDCDC',
                  }}
                />
              </div>
            </div>

            <blockquote
              className="mt-12 max-w-[440px] text-[22px] font-medium tracking-tight"
              style={{ lineHeight: 1.3 }}
            >
              <AnimatedWords
                inView
                text="Bookd built our entire growth system from scratch."
                className="text-foreground"
                delayStart={0.4}
              />{' '}
              <AnimatedWords
                inView
                text="Lead response went from hours to under 2 minutes, our booking rate jumped immediately."
                className="text-muted-foreground"
                delayStart={0.55}
                stagger={0.04}
              />
            </blockquote>

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="text-[15px] font-semibold text-foreground">
                GameDay Community
              </span>
              <div className="flex items-center gap-1">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star half />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trusted-by row */}
        <div className="mt-7 flex flex-col items-start justify-between gap-6 px-1 md:flex-row md:items-center">
          <p
            className="max-w-md text-[13px] text-white/75"
            style={{ lineHeight: 1.5 }}
          >
            Trusted by medical franchises who don{'’'}t just follow trends,
            <br />
            but define how the industry moves forward.
          </p>
          <div
            className="w-full overflow-hidden md:max-w-[60%]"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0, #000 80px, #000 calc(100% - 80px), transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0, #000 80px, #000 calc(100% - 80px), transparent 100%)',
            }}
          >
            <div className="animate-marquee flex w-max items-center gap-10">
              {[0, 1].map((group) => (
                <div
                  key={group}
                  className="flex items-center gap-10 pr-10 text-white"
                >
                  <img src={upsideLogo} alt="Upside" className="h-6" />
                  <span className="flex items-center gap-2">
                    <img src={nutanixMark} alt="" className="h-5 w-5" />
                    <span className="whitespace-nowrap text-[15px] font-semibold tracking-[0.18em]">
                      NUTANIX
                    </span>
                  </span>
                  <span className="whitespace-nowrap text-[15px] font-semibold tracking-wide">
                    GamesDay MensHealth
                  </span>
                  <span className="whitespace-nowrap text-[15px] font-semibold tracking-[0.12em]">
                    BODYCRAFT
                  </span>
                  <span className="whitespace-nowrap text-[15px] font-semibold italic tracking-wide">
                    Premiere TRT
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* ---------- Services ---------- */}
        <section className="pt-24 md:pt-32">
          <Rise className="mx-auto max-w-[800px] text-center">
            <h2
              className="text-[32px] font-medium tracking-tight sm:text-[40px] md:text-[56px]"
              style={{ lineHeight: 1.1 }}
            >
              <AnimatedWords
                inView
                text="Everything you need to grow"
                stagger={0.05}
              />
              <br />
              <AnimatedWords
                inView
                text="in one place"
                className="text-foreground/25"
                delayStart={0.2}
                stagger={0.05}
              />
            </h2>
          </Rise>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Rise
                key={s.title}
                delay={i * 0.12}
                className="group relative flex flex-col overflow-hidden rounded-[22px] border border-border bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <MeshOverlay />
                <span
                  className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold"
                  style={{ background: 'oklch(0.88 0.18 95)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="relative z-10 mt-5 text-[20px] font-medium tracking-tight transition-colors duration-300 group-hover:text-white group-active:text-white">
                  {s.title}
                </h3>
                <p
                  className="relative z-10 mt-3 text-[15px] text-muted-foreground transition-colors duration-300 group-hover:text-white/80 group-active:text-white/80"
                  style={{ lineHeight: 1.55 }}
                >
                  {s.body}
                </p>
              </Rise>
            ))}
          </div>

          <Rise className="mt-8 text-center" delay={0.2}>
            <a
              href="/services"
              className="inline-block rounded-full border border-border bg-white px-6 py-3 text-[15px] font-medium shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors hover:bg-muted"
            >
              More about our services
            </a>
          </Rise>
        </section>

        {/* ---------- Why us ---------- */}
        <section className="pt-24 md:pt-32">
          <div className="grid gap-5 md:grid-cols-[1fr_1.4fr]">
            <Rise
              className="flex flex-col justify-between rounded-[22px] p-8 text-white md:p-10"
              style={{ background: '#1E1D19' }}
            >
              <h2
                className="text-[36px] font-medium tracking-tight md:text-[44px]"
                style={{ lineHeight: 1.1 }}
              >
                <AnimatedWords inView text="Trusted by" stagger={0.05} />
                <br />
                <AnimatedWords
                  inView
                  text="Medical Franchises"
                  className="text-white/40"
                  delayStart={0.15}
                  stagger={0.05}
                />
              </h2>
              <TestimonialRotator />
            </Rise>
            <div className="grid gap-5 sm:grid-cols-2">
              {WHY_US.map((w, i) => (
                <Rise
                  key={w.title}
                  delay={i * 0.1}
                  className="group relative overflow-hidden rounded-[22px] border border-border bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
                >
                  <MeshOverlay />
                  <span
                    className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold"
                    style={{ background: 'oklch(0.88 0.18 95)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="relative z-10 mt-5 text-[18px] font-medium tracking-tight transition-colors duration-300 group-hover:text-white group-active:text-white">
                    {w.title}
                  </h3>
                  <p
                    className="relative z-10 mt-2 text-[15px] text-muted-foreground transition-colors duration-300 group-hover:text-white/80 group-active:text-white/80"
                    style={{ lineHeight: 1.55 }}
                  >
                    {w.body}
                  </p>
                </Rise>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Pricing ---------- */}
        <section id="pricing" className="pt-24 md:pt-32">
          <Rise className="mx-auto max-w-[760px] text-center">
            <h2
              className="text-[32px] font-medium tracking-tight sm:text-[40px] md:text-[56px]"
              style={{ lineHeight: 1.1 }}
            >
              <AnimatedWords
                inView
                text="Pay for What You Use."
                stagger={0.05}
              />
              <br />
              <AnimatedWords
                inView
                text="Scale When Ready."
                className="text-foreground/25"
                delayStart={0.2}
                stagger={0.05}
              />
            </h2>
            <p className="mx-auto mt-6 max-w-[560px] text-[16px] text-muted-foreground">
              Our point-based system gives you complete flexibility. Allocate
              across services as your needs change, no rigid contracts, no
              hidden fees.
            </p>
          </Rise>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {PLANS.map((p, i) => (
              <Rise
                key={p.name}
                delay={i * 0.12}
                className={
                  p.popular
                    ? 'relative flex flex-col rounded-[22px] p-7 text-white'
                    : 'relative flex flex-col rounded-[22px] border border-border bg-white p-7'
                }
                style={p.popular ? { background: '#1E1D19' } : undefined}
              >
                {p.popular && (
                  <span
                    className="absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-semibold text-foreground"
                    style={{ background: 'oklch(0.88 0.18 95)' }}
                  >
                    Most Popular
                  </span>
                )}
                <span
                  className={
                    p.popular
                      ? 'text-sm font-medium text-white/60'
                      : 'text-sm font-medium text-muted-foreground'
                  }
                >
                  {p.name}
                </span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-[44px] font-medium tracking-tight">
                    {p.price}
                  </span>
                  <span
                    className={
                      p.popular
                        ? 'text-sm text-white/50'
                        : 'text-sm text-muted-foreground'
                    }
                  >
                    /month
                  </span>
                </div>
                <p
                  className={
                    p.popular
                      ? 'mt-1 text-sm font-medium text-white/80'
                      : 'mt-1 text-sm font-medium text-foreground'
                  }
                >
                  {p.points}
                  {p.was && (
                    <>
                      {' '}
                      ·{' '}
                      <span
                        className={
                          p.popular ? 'text-white/40 line-through' : 'line-through'
                        }
                      >
                        {p.was}
                      </span>{' '}
                      <span style={{ color: 'oklch(0.88 0.18 95)' }}>
                        {p.off}
                      </span>
                    </>
                  )}
                </p>
                <p
                  className={
                    p.popular
                      ? 'mt-4 text-[15px] text-white/60'
                      : 'mt-4 text-[15px] text-muted-foreground'
                  }
                  style={{ lineHeight: 1.55 }}
                >
                  {p.body}
                </p>
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={
                    p.popular
                      ? 'mesh-showcase mt-8 overflow-hidden rounded-full px-6 py-3 text-center text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.02]'
                      : 'group/btn relative mt-8 overflow-hidden rounded-full border border-border bg-white px-6 py-3 text-center text-[15px] font-medium'
                  }
                >
                  {!p.popular && (
                    <span
                      aria-hidden
                      className="mesh-showcase pointer-events-none inset-0 rounded-[inherit] opacity-0 transition-opacity duration-400 group-hover/btn:opacity-100 group-active/btn:opacity-100"
                      style={{ position: 'absolute' }}
                    />
                  )}
                  <span
                    className={
                      p.popular
                        ? 'relative z-10'
                        : 'relative z-10 transition-colors duration-300 group-hover/btn:text-white group-active/btn:text-white'
                    }
                  >
                    Book a Call
                  </span>
                </a>
              </Rise>
            ))}
          </div>

          <Rise className="mt-8 text-center" delay={0.2}>
            <p className="text-[15px] text-muted-foreground">
              Need complex workflows, multi-location support, or custom
              features?{' '}
              <a
                href={CAL_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-foreground underline underline-offset-4"
              >
                Book a custom strategy call →
              </a>
            </p>
          </Rise>
        </section>

        {/* ---------- CTA ---------- */}
        <section id="contact" className="pt-24 md:pt-32">
          <Rise className="mesh-showcase overflow-hidden rounded-[28px] px-6 py-16 text-center md:py-24">
            <h2
              className="text-[32px] font-medium tracking-tight text-white sm:text-[40px] md:text-[56px]"
              style={{ lineHeight: 1.1 }}
            >
              <AnimatedWords inView text="Ready to Scale?" stagger={0.06} />
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[16px] text-white/75">
              Get a free growth audit and see exactly where your franchise is
              leaving appointments on the table.
            </p>
            <div className="mt-9 flex items-center justify-center gap-3">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full px-7 py-3.5 text-[15px] font-semibold text-foreground"
                style={{ background: 'oklch(0.88 0.18 95)' }}
              >
                Book a Strategy Call
              </a>
              <a
                href="/services"
                className="rounded-full border border-white/30 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
              >
                Discover more
              </a>
            </div>
          </Rise>
        </section>
      </div>

      <Footer />
    </div>
  )
}
