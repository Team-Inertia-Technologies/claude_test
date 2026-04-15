/** Official UN SDG colour & label data — do not modify */
const SDG_META = {
  12: {
    color:    '#C5192D',
    name:     'Responsible Consumption & Production',
    practice: '"Designed to Fit" — zero-waste production packages',
  },
  13: {
    color:    '#3F7E44',
    name:     'Climate Action',
    practice: 'EEDI/EEXI compliance, alt-fuel vessel design',
  },
  14: {
    color:    '#0A97D9',
    name:     'Life Below Water',
    practice: 'Hull noise reduction, MARPOL compliance',
  },
  17: {
    color:    '#19486A',
    name:     'Partnerships for the Goals',
    practice: 'Class society & industry body partnerships',
  },
} as const

export type SDGNumber = keyof typeof SDG_META

interface SDGCardProps {
  /** UN SDG number — one of 12, 13, 14, 17 */
  sdg: SDGNumber
  /**
   * Override the default SDG name when you need a shorter
   * or context-specific heading.
   */
  title?: string
  /**
   * Override the default engineering practice description.
   */
  description?: string
}

export function SDGCard({ sdg, title, description }: SDGCardProps) {
  const meta = SDG_META[sdg]
  const displayTitle = title ?? meta.name
  const displayDesc  = description ?? meta.practice

  return (
    <article
      className="relative rounded-sm overflow-hidden bg-navy/80 backdrop-blur-sm p-6 flex flex-col gap-4"
      style={{ borderTop: `4px solid ${meta.color}` }}
    >
      {/* ── Header row ───────────────────────────────────── */}
      <div className="flex items-start gap-3">
        {/* Numbered SDG badge */}
        <div
          className="shrink-0 w-11 h-11 rounded-sm flex items-center justify-center"
          style={{ backgroundColor: meta.color }}
          aria-label={`SDG ${sdg}`}
        >
          <span className="font-playfair text-white font-bold text-base leading-none">
            {sdg}
          </span>
        </div>

        {/* Label */}
        <div className="pt-1">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
            SDG {sdg}
          </span>
          <h3 className="font-playfair text-white text-[15px] font-semibold leading-snug mt-0.5">
            {displayTitle}
          </h3>
        </div>
      </div>

      {/* ── Practice description ──────────────────────────── */}
      <p className="font-inter text-sm text-white/65 leading-relaxed">
        {displayDesc}
      </p>

      {/* ── Colour accent rule ───────────────────────────── */}
      <div
        className="mt-auto h-px w-8 opacity-50"
        style={{ backgroundColor: meta.color }}
        aria-hidden
      />
    </article>
  )
}
