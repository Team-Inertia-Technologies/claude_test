import type { HTMLAttributes } from 'react'

interface SectionEyebrowProps extends HTMLAttributes<HTMLDivElement> {
  /** The mono-spaced label text displayed after the teal rule */
  label: string
  /**
   * Colour context — controls line and text contrast.
   * "light" = teal line + muted text (for white/steel backgrounds)
   * "dark"  = teal line + white/60 text (for navy backgrounds)
   */
  theme?: 'light' | 'dark'
}

export function SectionEyebrow({
  label,
  theme = 'light',
  className = '',
  ...rest
}: SectionEyebrowProps) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      {...rest}
    >
      {/* Teal rule */}
      <span className="block w-8 h-px bg-teal shrink-0" aria-hidden />

      {/* Label */}
      <span
        className={[
          'font-mono text-[11px] uppercase tracking-[0.18em]',
          theme === 'dark' ? 'text-white/60' : 'text-muted',
        ].join(' ')}
      >
        {label}
      </span>
    </div>
  )
}
