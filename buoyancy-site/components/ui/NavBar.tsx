'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'About',          href: '/about' },
  { label: 'Services',       href: '/services' },
  { label: 'Projects',       href: '/projects' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Insights',       href: '/insights' },
  { label: 'Contact',        href: '/contact' },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solidBg  = scrolled || menuOpen
  const textColor = solidBg ? 'text-body'       : 'text-white/80'
  const hoverColor = solidBg ? 'hover:text-teal' : 'hover:text-white'
  const logoColor  = solidBg ? 'text-navy'        : 'text-white'

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        solidBg
          ? 'bg-white shadow-[0_2px_16px_rgba(11,37,69,0.08)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-18">

        {/* ── Logo ─────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          {/* Wordmark */}
          <span className={`font-playfair text-xl font-semibold tracking-tight transition-colors ${logoColor}`}>
            Buoyancy
          </span>
          {/* Gold rule — always visible */}
          <span className="block w-px h-5 bg-gold opacity-70" aria-hidden />
          <span className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${solidBg ? 'text-muted' : 'text-white/60'}`}>
            Consultants
          </span>
        </Link>

        {/* ── Desktop nav ──────────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`font-inter text-sm font-medium transition-colors ${textColor} ${hoverColor}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ── CTA + hamburger ──────────────────────────────── */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 bg-gold text-white font-inter text-sm font-medium rounded-sm transition-opacity hover:opacity-90"
          >
            Start a Project
            <ArrowRight />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -mr-2 rounded"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-px transition-all duration-200 ${solidBg ? 'bg-dark' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
            />
            <span
              className={`block w-5 h-px mt-1 transition-all duration-200 ${solidBg ? 'bg-dark' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-px mt-1 transition-all duration-200 ${solidBg ? 'bg-dark' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ────────────────────────────────────── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        } bg-white border-t border-mid`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-inter text-sm font-medium text-body hover:text-teal py-2.5 border-b border-steel last:border-0 transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gold text-white font-inter text-sm font-medium rounded-sm"
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  )
}

/* ── Inline icon ─────────────────────────────────────────────── */
function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
