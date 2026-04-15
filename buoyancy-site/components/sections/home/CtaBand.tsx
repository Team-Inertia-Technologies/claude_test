import Link from 'next/link'
import { BlueprintGrid, SectionEyebrow } from '@/components/ui'

export function CtaBand() {
  return (
    <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
      <BlueprintGrid />

      {/* Gold grid overlay ──────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right,  rgba(201,160,53,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(201,160,53,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <SectionEyebrow label="Ready to Begin" theme="dark" className="justify-center mb-5" />

        <h2
          className="font-playfair font-bold text-white leading-[1.06] mb-6"
          style={{ fontSize: 'clamp(2rem,4vw,3.25rem)' }}
        >
          Let's Build Something<br />
          <em className="not-italic text-gold">That Lasts</em>
        </h2>

        <p className="font-inter text-white/65 text-[1.0625rem] leading-relaxed
                      mb-10 max-w-xl mx-auto">
          Whether you're specifying a new vessel, planning a conversion, or navigating
          a class approval — Buoyancy Consultants is ready to be your engineering partner.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gold text-white
                       font-inter text-sm font-semibold rounded-sm hover:opacity-90
                       transition-opacity"
          >
            Start a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-white/25
                       text-white font-inter text-sm font-medium rounded-sm
                       hover:border-white/50 hover:bg-white/5 transition-all"
          >
            Download Brochure
          </Link>
        </div>
      </div>
    </section>
  )
}
