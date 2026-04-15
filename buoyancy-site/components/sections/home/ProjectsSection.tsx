'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SectionEyebrow } from '@/components/ui'

/* ── Types & data ─────────────────────────────────────────────── */
type Category = 'All' | 'Ship Design' | 'Offshore' | 'Retrofit' | 'Green'

const FILTERS: Category[] = ['All', 'Ship Design', 'Offshore', 'Retrofit', 'Green']

interface Project {
  id: string
  title: string
  category: Exclude<Category, 'All'>
  tag: string
  specs: string[]
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    id: 'container-feeder-1800',
    title: '1,800 TEU Container Feeder',
    category: 'Ship Design',
    tag: 'New Build',
    specs: ['LOA: 164 m', 'Class: IRS', 'Delivered 2023'],
    featured: true,
  },
  {
    id: 'dp2-psv',
    title: 'DP2 Platform Supply Vessel',
    category: 'Offshore',
    tag: 'Offshore',
    specs: ['76 m OAL', 'Class: DNV'],
  },
  {
    id: 'fpso-topsides',
    title: 'FPSO Topsides Integration',
    category: 'Offshore',
    tag: 'Offshore',
    specs: ['Detailed Engineering', 'AVEVA PDMS'],
  },
  {
    id: 'research-vessel',
    title: 'Research Vessel Retrofit',
    category: 'Retrofit',
    tag: 'Retrofit',
    specs: ['LOA: 72 m', 'MARPOL Annex VI'],
  },
  {
    id: 'lng-bulk-carrier',
    title: 'LNG-Ready Bulk Carrier',
    category: 'Ship Design',
    tag: 'Green',
    specs: ['82,000 DWT', 'EEDI Phase 3'],
  },
  {
    id: 'offshore-wind-sov',
    title: 'Offshore Wind SOV',
    category: 'Ship Design',
    tag: 'Green',
    specs: ['85 m', 'Walk-to-Work'],
  },
]

/* ── Section ──────────────────────────────────────────────────── */
export function ProjectsSection() {
  const [active, setActive] = useState<Category>('All')

  const filtered =
    active === 'All'
      ? PROJECTS
      : PROJECTS.filter(
          (p) =>
            p.category === active ||
            (active === 'Green' && p.tag === 'Green'),
        )

  const [featured, ...rest] = filtered

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <SectionEyebrow label="Selected Projects" className="mb-4" />
            <h2
              className="font-playfair font-semibold text-dark leading-[1.1]"
              style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
            >
              A Record of<br />Delivered Work
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-inter text-sm font-medium
                       text-teal shrink-0 self-start hover:gap-3 transition-all"
          >
            All projects
            <ChevronRight />
          </Link>
        </div>

        {/* Filter tabs ─────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={[
                'px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest rounded-sm',
                'border transition-all duration-150',
                active === f
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-muted border-mid hover:border-navy/30 hover:text-dark',
              ].join(' ')}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Bento mosaic grid ───────────────────────────────────── */}
        {featured ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Featured — col-span-2 × row-span-2 */}
            <FeaturedCard project={featured} />

            {/* Side cards — col 3, rows 1 & 2 */}
            {rest.slice(0, 2).map((p) => (
              <SmallCard key={p.id} project={p} />
            ))}

            {/* Bottom row */}
            {rest.slice(2).map((p) => (
              <SmallCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

/* ── Card atoms ───────────────────────────────────────────────── */

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article
      className="md:col-span-2 md:row-span-2 flex flex-col rounded-sm overflow-hidden
                 border border-mid bg-steel group hover:shadow-xl transition-shadow min-h-[360px]"
    >
      {/* Image placeholder — full bleed */}
      <div
        className="flex-1 min-h-[240px] relative flex items-end p-6
                   bg-gradient-to-br from-navy/10 to-teal/10"
      >
        {/* Blueprint lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 600 400" fill="none" aria-hidden
        >
          <path d="M60 300 Q120 295 180 270 L500 230 L550 255 L550 320 L60 320 Z"
            stroke="#14818A" strokeWidth="1" />
          <path d="M180 270 L180 180 L290 155 L360 175 L420 175 L420 230"
            stroke="#14818A" strokeWidth="1" />
          <circle cx="130" cy="315" r="28" stroke="#14818A" strokeWidth="1" fill="none" />
          <circle cx="460" cy="315" r="28" stroke="#14818A" strokeWidth="1" fill="none" />
        </svg>

        <span className="relative font-mono text-[9px] text-white/20 uppercase tracking-widest">
          Project photography — client to supply
        </span>
      </div>

      {/* Copy */}
      <div className="p-6 bg-white border-t border-mid">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="font-mono text-[9px] uppercase tracking-widest text-teal">
            {project.tag} · Featured
          </span>
          <Link
            href={`/projects/${project.id}`}
            className="font-mono text-[9px] uppercase tracking-widest text-muted
                       hover:text-teal transition-colors shrink-0"
          >
            View case study →
          </Link>
        </div>
        <h3 className="font-playfair text-2xl font-semibold text-dark mb-3">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.specs.map((s) => (
            <Spec key={s} label={s} />
          ))}
        </div>
      </div>
    </article>
  )
}

function SmallCard({ project }: { project: Project }) {
  return (
    <article
      className="flex flex-col rounded-sm overflow-hidden border border-mid bg-steel
                 hover:border-teal/40 hover:shadow-md transition-all group min-h-[170px]"
    >
      {/* Thumbnail */}
      <div
        className="flex-1 min-h-[100px] bg-gradient-to-br from-navy/5 to-mid/20
                   flex items-center justify-center"
      >
        <span className="font-mono text-[8px] text-mid uppercase tracking-widest">Photo TBC</span>
      </div>

      {/* Copy */}
      <div className="p-4 bg-white border-t border-mid">
        <span className="font-mono text-[9px] uppercase tracking-widest text-teal block mb-1">
          {project.tag}
        </span>
        <h3 className="font-playfair text-[15px] font-semibold text-dark leading-snug mb-2">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {project.specs.slice(0, 2).map((s) => (
            <Spec key={s} label={s} />
          ))}
        </div>
      </div>
    </article>
  )
}

function Spec({ label }: { label: string }) {
  return (
    <span
      className="font-mono text-[9px] uppercase tracking-wide text-muted
                 bg-steel border border-mid px-2 py-0.5 rounded-sm"
    >
      {label}
    </span>
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
