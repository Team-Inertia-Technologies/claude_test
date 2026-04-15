import Link from 'next/link'
import { SectionEyebrow } from '@/components/ui'

interface Article {
  id: string
  category: string
  title: string
  excerpt: string
  readTime: string
  date: string
}

const ARTICLES: Article[] = [
  {
    id: 'eedi-phase-3',
    category: 'Regulation',
    title: 'EEDI Phase 3: What Every Shipowner Needs to Know Before Their Next Newbuild',
    excerpt:
      'Phase 3 of the Energy Efficiency Design Index tightens required efficiency by 30% over the baseline — and it applies to all contracts signed after 2025. Here's what that means for your newbuild specification, propulsion selection, and class submission timeline.',
    readTime: '8 min',
    date: 'March 2026',
  },
  {
    id: 'steel-weight-optimisation',
    category: 'Engineering',
    title: 'Steel Weight Optimisation in Bulk Carrier Design',
    excerpt:
      'How modern FEA-driven structural optimisation reduces lightship weight without compromising class rule compliance.',
    readTime: '5 min',
    date: 'February 2026',
  },
  {
    id: 'imo-ghg-roadmap',
    category: 'Sustainability',
    title: 'IMO 2050: Building an Engineering Roadmap for Zero-Carbon Shipping',
    excerpt:
      'A practical breakdown of the revised GHG strategy and the technical levers available to operators today.',
    readTime: '6 min',
    date: 'January 2026',
  },
]

export function InsightsSection() {
  const [featured, ...others] = ARTICLES

  return (
    <section className="bg-steel py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionEyebrow label="Insights" className="mb-4" />
            <h2
              className="font-playfair font-semibold text-dark leading-[1.1]"
              style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
            >
              Engineering<br />Perspectives
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-inter text-sm font-medium
                       text-teal shrink-0 self-start hover:gap-3 transition-all"
          >
            All articles
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
              <path
                d="M2 7.5h11M9 3l4 4.5-4 4.5"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* 3-col asymmetric grid: featured (2 cols) + 2 stacked ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Featured article — spans 2 columns ─────────────── */}
          {featured && (
            <article
              className="lg:col-span-2 flex flex-col bg-white rounded-sm border border-mid
                         overflow-hidden group hover:shadow-lg transition-shadow"
            >
              {/* Image placeholder */}
              <div
                className="h-52 bg-gradient-to-br from-navy/8 to-teal/8
                           flex items-center justify-center border-b border-mid relative"
              >
                <svg
                  className="absolute inset-0 w-full h-full opacity-5"
                  viewBox="0 0 600 200" fill="none" aria-hidden
                >
                  <path
                    d="M0 150 Q 150 100 300 130 T 600 110"
                    stroke="#14818A" strokeWidth="1"
                  />
                  <path
                    d="M0 170 Q 150 120 300 150 T 600 130"
                    stroke="#14818A" strokeWidth="0.6" strokeDasharray="4 3"
                  />
                </svg>
                <span className="font-mono text-[9px] text-muted uppercase tracking-widest relative">
                  Article image — client to supply
                </span>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-teal">
                    {featured.category}
                  </span>
                  <span className="text-mid text-xs" aria-hidden>·</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    {featured.date}
                  </span>
                  <span className="text-mid text-xs" aria-hidden>·</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    {featured.readTime} read
                  </span>
                </div>

                <h3 className="font-playfair text-2xl font-semibold text-dark
                               leading-snug mb-4">
                  {featured.title}
                </h3>
                <p className="font-inter text-sm text-body leading-relaxed flex-1 mb-6">
                  {featured.excerpt}
                </p>

                <Link
                  href={`/insights/${featured.id}`}
                  className="inline-flex items-center gap-2 font-inter text-sm
                             font-medium text-teal hover:gap-3 transition-all"
                >
                  Read article
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
                    <path
                      d="M2 7.5h11M9 3l4 4.5-4 4.5"
                      stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          )}

          {/* Stacked secondary articles ──────────────────────── */}
          <div className="flex flex-col gap-6">
            {others.map((article) => (
              <article
                key={article.id}
                className="flex flex-col bg-white rounded-sm border border-mid overflow-hidden
                           hover:shadow-md transition-shadow group"
              >
                {/* Thin image strip */}
                <div
                  className="h-28 bg-gradient-to-br from-navy/5 to-teal/5
                             flex items-center justify-center border-b border-mid"
                >
                  <span className="font-mono text-[8px] text-mid/60 uppercase tracking-widest">
                    Image TBC
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-teal">
                      {article.category}
                    </span>
                    <span className="text-mid text-xs" aria-hidden>·</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                      {article.readTime} read
                    </span>
                  </div>
                  <h3 className="font-playfair text-[15px] font-semibold text-dark
                                 leading-snug mb-4 flex-1">
                    {article.title}
                  </h3>
                  <Link
                    href={`/insights/${article.id}`}
                    className="inline-flex items-center gap-1.5 font-inter text-sm
                               font-medium text-teal mt-auto hover:gap-2.5 transition-all"
                  >
                    Read
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                      <path
                        d="M2 6.5h9M7.5 3l3 3.5-3 3.5"
                        stroke="currentColor" strokeWidth="1.4"
                        strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
