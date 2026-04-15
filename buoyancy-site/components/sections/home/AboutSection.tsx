import Link from 'next/link'
import { SectionEyebrow } from '@/components/ui'

const VALUES = [
  {
    mono: 'Class-First',
    title: 'Engineering Rigour',
    desc: '97% first-submission class approval across all projects.',
  },
  {
    mono: 'Global',
    title: 'Four Markets',
    desc: 'Active delivery in India, Middle East, Europe, and Southeast Asia.',
  },
  {
    mono: 'IMO 2050',
    title: 'Green by Design',
    desc: 'Every project evaluated for carbon and regulatory readiness.',
  },
  {
    mono: 'Client-Embedded',
    title: 'Integrated Teams',
    desc: 'We operate as your in-house engineering department.',
  },
]

export function AboutSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10
                   grid grid-cols-1 lg:grid-cols-[1fr_400px]
                   gap-16 lg:gap-24 items-start"
      >

        {/* ── Left: copy ──────────────────────────────────────── */}
        <div>
          <SectionEyebrow label="About Buoyancy Consultants" className="mb-5" />

          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-dark
                         leading-[1.1] mb-6">
            Engineers Who've<br />Stood on the&nbsp;Deck
          </h2>

          <p className="font-inter text-body text-[1.0625rem] leading-relaxed mb-4 max-w-xl">
            Founded in 2013, Buoyancy Consultants has grown from a naval architecture boutique
            into a full-service marine engineering practice. We've built our reputation one hull
            at a time — delivering technically rigorous, commercially pragmatic solutions to
            shipyards, operators, and owners.
          </p>
          <p className="font-inter text-body leading-relaxed mb-10 max-w-xl">
            Our team carries an average of 15+ years of shipyard and sea-going experience to
            every project. That credibility is reflected in our 97% class approval rate and a
            portfolio spanning 200+ vessels across every major segment.
          </p>

          {/* 2 × 2 value grid ─────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="p-5 bg-steel rounded-sm border border-mid
                           hover:border-teal/30 transition-colors"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-teal block mb-2">
                  {v.mono}
                </span>
                <h3 className="font-playfair text-[15px] font-semibold text-dark mb-1.5">
                  {v.title}
                </h3>
                <p className="font-inter text-sm text-body leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-inter text-sm font-medium
                       text-teal hover:gap-3 transition-all"
          >
            Our full story
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
              <path
                d="M2 7.5h11M9 3l4 4.5-4 4.5"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* ── Right: image + floating cards ───────────────────── */}
        <div className="relative mt-6 lg:mt-0">

          {/* 200+ badge — top-left */}
          <div
            className="absolute -top-5 -left-5 z-20 w-[72px] h-[72px] rounded-full bg-teal
                       shadow-xl flex flex-col items-center justify-center"
          >
            <span className="font-playfair text-[22px] font-bold text-white leading-none">200+</span>
            <span className="font-mono text-[7px] uppercase tracking-wide text-white/70 mt-0.5">
              Projects
            </span>
          </div>

          {/* Portrait image placeholder ─────────────────────── */}
          <div
            className="aspect-[3/4] bg-steel border border-mid rounded-sm
                       flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-teal/5" />
            <span
              className="font-mono text-[10px] text-muted uppercase tracking-widest
                         text-center px-6 leading-relaxed relative z-10"
            >
              Team / shipyard photography<br />client to supply
            </span>
          </div>

          {/* Floating accent card — founding year + markets ──── */}
          <div
            className="absolute -bottom-6 -right-4 lg:-right-6 z-20 bg-navy
                       text-white p-6 rounded-sm shadow-2xl w-[176px]"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-teal block mb-2">
              Est.
            </span>
            <span className="font-playfair text-[3.25rem] font-bold text-gold leading-none block mb-3">
              2013
            </span>
            <div className="w-8 h-px bg-white/20 mb-3" />
            <p className="font-inter text-xs text-white/65 leading-snug">
              Operating across<br />
              <span className="text-white font-medium">4 global markets</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
