import Link from 'next/link'
import { ServiceCard, SectionEyebrow } from '@/components/ui'
import type { ReactNode } from 'react'

/* ── Service data ─────────────────────────────────────────────── */
const SERVICES: {
  title: string
  description: string
  href: string
  icon: ReactNode
}[] = [
  {
    title: 'Ship Design',
    description:
      'Full-cycle naval architecture — new builds, conversions, and modifications from general arrangement through class-approved drawing package.',
    href: '/services/ship-design',
    icon: <ShipIcon />,
  },
  {
    title: 'Offshore Engineering',
    description:
      'Platform, FPSO, and subsea structural design. Mooring analysis, topsides integration, and stability studies to class and flag requirements.',
    href: '/services/offshore-engineering',
    icon: <OffshoreIcon />,
  },
  {
    title: 'Detailed Engineering & CAD',
    description:
      'Production-ready 3D modelling, structural detailing, piping design, and drawing register generation using AVEVA, NAPA, and Rhino.',
    href: '/services/detailed-engineering',
    icon: <CadIcon />,
  },
  {
    title: 'Retrofit & Conversion',
    description:
      'Laser-scan-based as-built surveys, feasibility studies, structural modifications, and class approval management for life-extension projects.',
    href: '/services/retrofit-conversion',
    icon: <RetrofitIcon />,
  },
  {
    title: 'Project Management',
    description:
      'Embedded technical project management from design through yard delivery — live model sharing, punch-list coordination, and owner's representation.',
    href: '/services/project-management',
    icon: <PmIcon />,
  },
  {
    title: 'Green Solutions',
    description:
      'EEDI/EEXI compliance strategies, alternative-fuel readiness studies, CII optimisation plans, and SDG-aligned sustainability reporting.',
    href: '/services/green-solutions',
    icon: <GreenIcon />,
  },
]

export function ServicesSection() {
  return (
    <section className="bg-steel py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header ────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionEyebrow label="What We Do" className="mb-4" />
            <h2
              className="font-playfair font-semibold text-dark leading-[1.1] max-w-lg"
              style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
            >
              Six Engineering<br />Capabilities
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-inter text-sm font-medium
                       text-teal shrink-0 self-start md:self-auto hover:gap-3 transition-all"
          >
            All services
            <ChevronRight />
          </Link>
        </div>

        {/* 3 × 2 card grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.href} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Inline service icons (24 px viewBox) ─────────────────────── */
function ShipIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M2 14l1.5-5h13L18 14M4 9V6h12v3"
        stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M10 6V3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M2 17s2-1 4-1 4 2 4 2 2-1 4-1 4 1 4 1"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
      />
    </svg>
  )
}

function OffshoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M4 16V8h12v8M7 8V5h6v3M10 5V2"
        stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M2 16h16M7 12h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function CadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M3 7h14M7 3v14"
        stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 1.5"
      />
      <path
        d="M11 10l2 2M13 10l-2 2"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
      />
    </svg>
  )
}

function RetrofitIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M4 10a6 6 0 0 1 10.2-4.3"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
      />
      <path
        d="M16 10a6 6 0 0 1-10.2 4.3"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
      />
      <path
        d="M14 4l2 2-2 2M6 16l-2-2 2-2"
        stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

function PmIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="3" y="3" width="14" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M7 10l2 2 4-4"
        stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M7 6h6M7 14h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

function GreenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M4 16c0-5 3-9 8-11 0 5-3 9-8 11z"
        stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M10 16c0-3 2-7 6-9-1 4-3 7-6 9z"
        stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M10 11v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <path
        d="M2 7.5h11M9 3l4 4.5-4 4.5"
        stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}
