import type { HTMLAttributes } from 'react'

interface BlueprintGridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Fine grid pitch in pixels.      Default: 20
   * Major grid repeats every 5 cells. Default: 100
   */
  pitch?: number
  /** Overall grid opacity. Spec calls for ~2 % (0.02–0.05 range). */
  opacity?: number
}

/**
 * Blueprint-style SVG grid overlay.
 *
 * Usage: place inside a `relative` navy container —
 *   <div className="relative bg-navy">
 *     <BlueprintGrid />
 *     <YourContent className="relative z-10" />
 *   </div>
 */
export function BlueprintGrid({
  pitch = 20,
  opacity = 0.04,
  className = '',
  ...rest
}: BlueprintGridProps) {
  const major = pitch * 5

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
      {...rest}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          {/* Fine grid — thin strokes */}
          <pattern
            id="bp-fine"
            width={pitch}
            height={pitch}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${pitch} 0 L 0 0 0 ${pitch}`}
              fill="none"
              stroke="white"
              strokeWidth="0.4"
            />
          </pattern>

          {/* Major grid — heavier strokes, fills with fine grid */}
          <pattern
            id="bp-major"
            width={major}
            height={major}
            patternUnits="userSpaceOnUse"
          >
            <rect width={major} height={major} fill="url(#bp-fine)" />
            <path
              d={`M ${major} 0 L 0 0 0 ${major}`}
              fill="none"
              stroke="white"
              strokeWidth="0.9"
            />
          </pattern>

          {/* Corner cross-hairs at major intersections */}
          <pattern
            id="bp-cross"
            width={major}
            height={major}
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal tick */}
            <line x1={-4} y1={0} x2={4} y2={0} stroke="white" strokeWidth="0.8" />
            {/* Vertical tick */}
            <line x1={0} y1={-4} x2={0} y2={4} stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>

        {/* Render layers back-to-front */}
        <rect width="100%" height="100%" fill="url(#bp-major)" />
        <rect width="100%" height="100%" fill="url(#bp-cross)" />
      </svg>
    </div>
  )
}
