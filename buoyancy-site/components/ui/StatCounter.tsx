'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  /** Final numeric value to count up to */
  value: number
  /** Text appended after the number, e.g. "+" or "%" */
  suffix?: string
  /** Text prepended before the number, e.g. "$" */
  prefix?: string
  /** Descriptive label rendered below the number */
  label: string
  /** Animation duration in ms. Default: 2000 */
  duration?: number
  /**
   * Colour context.
   * "gold"  — number in gold (default, on navy/dark sections)
   * "teal"  — number in teal (on light sections)
   * "white" — number in white
   */
  accent?: 'gold' | 'teal' | 'white'
}

const ACCENT_CLASSES: Record<NonNullable<StatCounterProps['accent']>, string> = {
  gold:  'text-gold',
  teal:  'text-teal',
  white: 'text-white',
}

/** Cubic ease-out — fast start, gentle finish */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
  accent = 'gold',
}: StatCounterProps) {
  const [display, setDisplay] = useState(0)
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  /* ── Intersection Observer: fire once when 50 % visible ── */
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [triggered])

  /* ── rAF counter ─────────────────────────────────────── */
  useEffect(() => {
    if (!triggered) return

    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed  = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setDisplay(Math.round(easeOutCubic(progress) * value))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [triggered, value, duration])

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-2">
      {/* Number */}
      <span
        className={`font-playfair text-5xl font-bold tabular-nums leading-none ${ACCENT_CLASSES[accent]}`}
        aria-live="polite"
        aria-atomic="true"
      >
        {prefix}{display}{suffix}
      </span>

      {/* Label */}
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
    </div>
  )
}
