import Link from 'next/link'
import { BlueprintGrid, SectionEyebrow, SDGCard } from '@/components/ui'
import type { SDGNumber } from '@/components/ui'

const SDG_ITEMS: SDGNumber[] = [12, 13, 14, 17]

export function SustainabilitySection() {
  return (
    <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
      <BlueprintGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <SectionEyebrow label="Sustainability" theme="dark" className="mb-4" />
            <h2
              className="font-playfair font-semibold text-white leading-[1.1] max-w-lg"
              style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
            >
              Engineering Aligned<br />with Global Goals
            </h2>
          </div>
          <Link
            href="/sustainability"
            className="inline-flex items-center gap-2 font-inter text-sm
                       font-medium text-teal shrink-0 self-start hover:gap-3 transition-all"
          >
            Sustainability report
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
              <path
                d="M2 7.5h11M9 3l4 4.5-4 4.5"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <p className="font-inter text-white/65 max-w-2xl leading-relaxed mb-12
                      text-[1.0625rem]">
          Every vessel we design is evaluated for its environmental footprint. Our engineering
          practice is aligned with four United Nations Sustainable Development Goals — not as
          a marketing position, but as a design constraint embedded in every project brief.
        </p>

        {/* 4 SDG cards ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SDG_ITEMS.map((sdg) => (
            <SDGCard key={sdg} sdg={sdg} />
          ))}
        </div>
      </div>
    </section>
  )
}
