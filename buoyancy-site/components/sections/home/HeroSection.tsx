import Link from 'next/link'
import { BlueprintGrid, SectionEyebrow, StatCounter } from '@/components/ui'

const STATS = [
  { value: 11,  suffix: '+', label: 'Years in Practice'   },
  { value: 200, suffix: '+', label: 'Projects Delivered'  },
  { value: 97,  suffix: '%', label: 'Class Approval Rate' },
  { value: 4,   suffix: '',  label: 'Global Markets'      },
] as const

export function HeroSection() {
  return (
    <section className="relative bg-navy min-h-screen flex flex-col overflow-hidden">
      <BlueprintGrid />

      {/* Ghost watermark ─────────────────────────────────────── */}
      <span
        className="absolute right-[-1%] top-1/2 -translate-y-1/2 font-playfair font-bold text-white
                   select-none pointer-events-none leading-none whitespace-nowrap"
        style={{ opacity: 0.018, fontSize: 'clamp(72px,17vw,210px)' }}
        aria-hidden
      >
        ENGINEERS
      </span>

      {/* ── Main split content ─────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 pt-28 pb-16
                        grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: copy ──────────────────────────────────────── */}
          <div>
            <SectionEyebrow
              label="Marine Engineering & Naval Architecture"
              theme="dark"
              className="mb-7"
            />

            <h1
              className="font-playfair font-bold text-white leading-[1.06] mb-6"
              style={{ fontSize: 'clamp(2.25rem,4.5vw,3.75rem)' }}
            >
              Precision&nbsp;Engineered<br />
              <em className="not-italic text-gold">for Every Sea</em>
            </h1>

            <p className="font-inter text-white/70 text-[1.0625rem] leading-relaxed mb-9 max-w-[490px]">
              Full-cycle naval architecture and marine engineering — from concept through
              class approval. Trusted by shipyards, owners, and operators across four
              global markets.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3 bg-gold text-white
                           font-inter text-sm font-semibold rounded-sm hover:opacity-90
                           transition-opacity"
              >
                Start a Project
                <ArrowRight />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-7 py-3 border border-white/25
                           text-white font-inter text-sm font-medium rounded-sm
                           hover:border-white/50 hover:bg-white/5 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right: vessel image placeholder ────────────────── */}
          <div className="relative hidden lg:block">
            <div
              className="aspect-[4/3] rounded-sm border border-white/10 bg-white/[0.03]
                         relative overflow-hidden flex items-center justify-center"
            >
              {/* Blueprint vessel silhouette */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 480 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                style={{ opacity: 0.12 }}
              >
                <path
                  d="M 48 260 Q 96 255 144 235 L 400 200 L 440 220 L 440 270 L 48 270 Z"
                  stroke="#14818A" strokeWidth="1.2"
                />
                <path
                  d="M 144 235 L 144 155 L 230 130 L 290 148 L 336 148 L 336 200"
                  stroke="#14818A" strokeWidth="1.2"
                />
                <path d="M 230 130 L 230 72 L 256 72 L 256 130" stroke="#14818A" strokeWidth="1" />
                <path d="M 243 72 L 243 36" stroke="#14818A" strokeWidth="0.8" />
                <line x1="220" y1="36" x2="310" y2="36" stroke="#14818A" strokeWidth="0.6" strokeDasharray="4 3" />
                <circle cx="110" cy="265" r="22" stroke="#14818A" strokeWidth="1" />
                <circle cx="370" cy="265" r="22" stroke="#14818A" strokeWidth="1" />
                <line x1="48" y1="270" x2="440" y2="270" stroke="#14818A" strokeWidth="0.8" />
                {/* Waterline dashes */}
                <line x1="48" y1="280" x2="440" y2="280" stroke="#14818A" strokeWidth="0.5" strokeDasharray="6 4" />
              </svg>

              <div className="relative z-10 text-center">
                <div className="w-10 h-px bg-teal mx-auto mb-3" />
                <span
                  className="font-mono text-[9px] text-white/30 uppercase
                             tracking-[0.2em] leading-loose block"
                >
                  Vessel photography<br />client to supply
                </span>
                <div className="w-10 h-px bg-teal mx-auto mt-3" />
              </div>
            </div>

            {/* Floating 97% badge ─────────────────────────── */}
            <div className="absolute -bottom-5 -left-5 bg-gold px-5 py-4 rounded-sm shadow-2xl">
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/75 block">
                Class Approval
              </span>
              <span className="font-playfair text-[2rem] font-bold text-white leading-tight">
                97%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stat strip — anchored bottom ───────────────────────── */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={[
                  'py-2',
                  i > 0 ? 'border-l border-white/10 pl-6' : '',
                  i < STATS.length - 1 ? 'pr-6' : '',
                ].join(' ')}
              >
                <StatCounter
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  accent={s.label.includes('Approval') ? 'teal' : 'gold'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

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
