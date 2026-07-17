import { useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion, useInView } from 'framer-motion'

import mainLogo from '../assets/bookd-logo.svg'

export const EASE = [0.25, 1, 0.5, 1] as const

export const LINKEDIN_URL = 'https://www.linkedin.com/company/bookd-health'

export const CAL_URL = 'https://cal.com/vaidikm/30min?overlayCalendar=true'

/* ---------------- AnimatedWords ---------------- */

export function AnimatedWords({
  text,
  className = '',
  delayStart = 0,
  stagger = 0.06,
  inView = false,
}: {
  text: string
  className?: string
  delayStart?: number
  stagger?: number
  inView?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const shouldAnimate = inView ? isInView : true
  const words = text.split(' ')

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: '0.2em', marginBottom: '-0.2em' }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={shouldAnimate ? { y: '0%', opacity: 1 } : undefined}
            transition={{
              duration: 0.6,
              ease: EASE,
              delay: delayStart + i * stagger,
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/* ---------------- Rise (whileInView fade-up block) ---------------- */

export function Rise({
  children,
  className = '',
  delay = 0,
  style,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  style?: React.CSSProperties
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/* ---------------- MeshOverlay (gradient hover for cards) ----------------
   Add className="group relative overflow-hidden" to the card and drop this
   inside; pair text with group-hover:text-white / white-70 classes. */

export function MeshOverlay() {
  return (
    <div
      aria-hidden
      className="mesh-showcase pointer-events-none inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{ position: 'absolute' }}
    />
  )
}

/* ---------------- Icons ---------------- */

export function ChevronDown() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export function Star({ half = false }: { half?: boolean }) {
  const d =
    'M12 2.5l2.95 6.2 6.8.78-5.05 4.66 1.4 6.66L12 17.6l-6.1 3.2 1.4-6.66L2.25 9.48l6.8-.78L12 2.5z'
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="star">
      {half ? (
        <>
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="rgba(0,0,0,0.15)" />
            </linearGradient>
          </defs>
          <path d={d} fill="url(#half-star)" />
        </>
      ) : (
        <path d={d} fill="currentColor" />
      )}
    </svg>
  )
}

/* ---------------- Header ---------------- */

const WORDMARK = 'Bookd'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Pricing', to: '/#pricing' },
]

export function Header({ active }: { active: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="relative flex items-center justify-between pt-6 md:pt-8">
      <Link to="/" className="flex items-center" style={{ gap: '9.23px' }}>
        <motion.img
          src={mainLogo}
          alt="Bookd logo"
          width={38}
          height={38}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'backOut' }}
        />
        <span
          className="flex items-center font-semibold text-black"
          style={{ fontSize: 28, lineHeight: 1 }}
        >
          {WORDMARK.split('').map((letter, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden"
              style={{ lineHeight: 1.1 }}
            >
              <motion.span
                className="inline-block"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: 0.5 + i * 0.06,
                }}
              >
                {letter}
              </motion.span>
            </span>
          ))}
        </span>
      </Link>

      <nav className="hidden items-center gap-9 md:flex">
        {NAV_LINKS.map((link, i) => (
          <motion.span
            key={link.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 + i * 0.08 }}
          >
            <a
              href={link.to}
              className={
                link.label === active
                  ? 'flex items-center gap-1 text-[15px] font-medium text-foreground underline decoration-[1.5px] underline-offset-[6px]'
                  : 'flex items-center gap-1 text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground'
              }
            >
              {link.label}
            </a>
          </motion.span>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <motion.a
          href={CAL_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="hidden rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors hover:bg-muted md:block"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'backOut', delay: 1.3 }}
        >
          Book a Call
        </motion.a>

        {/* Mobile hamburger */}
        <motion.button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white md:hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'backOut', delay: 0.8 }}
        >
          <div className="flex w-[18px] flex-col gap-[5px]">
            <motion.span
              className="h-[2px] rounded-full bg-foreground"
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="h-[2px] rounded-full bg-foreground"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="h-[2px] rounded-full bg-foreground"
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="absolute left-0 right-0 top-full z-50 mt-3 overflow-hidden rounded-[20px] border border-border bg-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.12)] md:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.to}
                onClick={() => setMenuOpen(false)}
                className={
                  link.label === active
                    ? 'block rounded-xl bg-muted px-4 py-3.5 text-[16px] font-semibold text-foreground'
                    : 'block rounded-xl px-4 py-3.5 text-[16px] font-medium text-muted-foreground'
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href={CAL_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mesh-showcase mt-2 block overflow-hidden rounded-xl px-4 py-3.5 text-center text-[16px] font-semibold text-white"
            >
              Book a Call
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ---------------- Sticky mobile CTA ---------------- */

export function MobileCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 p-3 md:hidden"
      style={{
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        background:
          'linear-gradient(to top, rgba(255,255,255,0.96) 60%, rgba(255,255,255,0))',
      }}
    >
      <a
        href={CAL_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="mesh-showcase block overflow-hidden rounded-full px-6 py-4 text-center text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
      >
        Book a Call — Free Growth Audit
      </a>
    </div>
  )
}

/* ---------------- Footer ---------------- */

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border pb-24 md:pb-0">
      <MobileCta />
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Link to="/" className="flex items-center" style={{ gap: '9.23px' }}>
            <img src={mainLogo} alt="Bookd logo" width={30} height={30} />
            <span className="text-[22px] font-semibold text-black">Bookd</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CAL_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Book a Call
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-[13px] text-muted-foreground">
            © 2026 Bookd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="/privacy-policy"
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
