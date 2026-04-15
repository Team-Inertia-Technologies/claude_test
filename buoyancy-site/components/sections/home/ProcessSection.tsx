import Link from 'next/link'
import { SectionEyebrow } from '@/components/ui'

const STEPS = [
  {
    number: '01',
    title: 'Enquiry & Brief',
    description:
      'Initial consultation, scope definition, and project feasibility review. We listen before we draw.',
  },
  {
    number: '02',
    title: 'Concept Design',
    description:
      'General arrangement, preliminary hydrostatics, design options, and early-stage cost modelling.',
  },
  {
    number: '03',
    title: 'Detailed Engineering',
    description:
      '3D modelling, structural analysis, piping design, outfitting, and production-ready drawings.',
  },
  {
    number: '04',
    title: 'Class Submission',
    description:
      'Document package submission to class society, comment management, and approval tracking.',
  },
  {
    number: '05',
    title: 'Final Delivery',
    description:
      'Complete approved drawing register, as-built documentation, and formal project handover.',
  },
  {
    number: '06',
    title: 'Post-Delivery Support',
    description:
      'Technical query management, survey attendance, life-cycle advisory, and class renewal support.',
  },
]

export function ProcessSection() {
  return (
    <section className="bg-steel py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header ─────────────────────────────────────────────── */}
        <SectionEyebrow label="How We Work" className="mb-5" />
        <h2
          className="font-playfair font-semibold text-dark leading-[1.1] mb-16 max-w-lg"
          style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
        >
          Six Stages,<br />Zero Shortcuts
        </h2>

        {/* ── Connector diagram ─────────────────────────────────── */}
        <div className="relative">

          {/* Horizontal connector line — desktop only ────────── */}
          <div
            className="hidden lg:block absolute top-7 left-[calc(1/12*100%+28px)]
                       right-[calc(1/12*100%+28px)] h-px bg-mid"
            aria-hidden
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {STEPS.map((step, i) => (
              <div key={step.number} className="flex flex-col items-start lg:items-center">

                {/* Number node ─────────────────────────────── */}
                <div className="relative z-10 mb-5">
                  <div
                    className="w-14 h-14 rounded-full bg-white border-2 border-mid
                               flex items-center justify-center shadow-sm"
                  >
                    <span className="font-mono text-sm font-medium text-teal">
                      {step.number}
                    </span>
                  </div>
                  {/* Gold dot on first step */}
                  {i === 0 && (
                    <span
                      className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full
                                 shadow-sm"
                      aria-hidden
                    />
                  )}
                </div>

                {/* Copy ─────────────────────────────────────── */}
                <div className="lg:text-center">
                  <h3 className="font-playfair text-base font-semibold text-dark
                                 leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline footer note ────────────────────────────────── */}
        <div className="mt-14 pt-8 border-t border-mid flex flex-col sm:flex-row
                        sm:items-center justify-between gap-5">
          <p className="font-inter text-sm text-muted">
            <span className="font-medium text-dark">Typical project duration:</span>{' '}
            3–18 months depending on vessel complexity and class society.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-inter text-sm
                       font-medium text-teal shrink-0 hover:gap-3 transition-all"
          >
            Discuss your project
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
              <path
                d="M2 7.5h11M9 3l4 4.5-4 4.5"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
