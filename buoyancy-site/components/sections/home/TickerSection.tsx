/**
 * Teal scrolling capability strip.
 * Pure CSS animation — no client JS required.
 * The track is duplicated so the -50% translateX keyframe creates a seamless loop.
 */

const CAPABILITIES = [
  'Ship Design',
  'Offshore Engineering',
  'Detailed Engineering & CAD',
  'Retrofit & Conversion',
  'Project Management',
  'Green Solutions',
  'Naval Architecture',
  'Stability Analysis',
]

export function TickerSection() {
  /* Double the list for seamless infinite scroll */
  const track = [...CAPABILITIES, ...CAPABILITIES]

  return (
    <section className="bg-teal overflow-hidden py-[14px]" aria-label="Engineering capabilities">
      {/* Accessible text for screen readers */}
      <p className="sr-only">
        Capabilities: {CAPABILITIES.join(', ')}
      </p>

      {/* Scrolling track ──────────────────────────────────────── */}
      <div
        className="flex animate-ticker will-change-transform"
        aria-hidden
      >
        {track.map((cap, i) => (
          <span
            key={i}
            className="inline-flex items-center shrink-0 gap-5 px-7"
          >
            <span className="font-mono text-[11px] font-medium text-white uppercase tracking-[0.18em] whitespace-nowrap">
              {cap}
            </span>
            <span className="text-white/30 text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </section>
  )
}
