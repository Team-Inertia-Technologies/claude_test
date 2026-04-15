import type { ReactNode } from 'react'
import Link from 'next/link'

interface ServiceCardProps {
  /** Service name — rendered in Playfair Display */
  title: string
  /** One-line description */
  description: string
  /** Destination URL */
  href: string
  /**
   * Icon element displayed in the floating badge over the image.
   * Pass an SVG or any inline React node (24 × 24 viewBox recommended).
   */
  icon: ReactNode
  /**
   * Optional image URL. When omitted a teal/navy gradient placeholder
   * is shown, consistent with wireframe mid-fidelity style.
   */
  imageSrc?: string
  /** Alt text for the image */
  imageAlt?: string
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
  imageSrc,
  imageAlt = '',
}: ServiceCardProps) {
  return (
    <article className="group flex flex-col bg-steel rounded-sm overflow-hidden border border-mid hover:border-teal/40 hover:shadow-xl transition-all duration-300">

      {/* ── Image area ─────────────────────────────────────── */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-navy/8 to-teal/8 shrink-0">
        {imageSrc ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Blueprint-style placeholder */
          <div className="absolute inset-0 flex items-end p-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-mid/60">
              Image — client to supply
            </span>
          </div>
        )}

        {/* Icon badge — floats over image */}
        <div className="absolute top-4 left-4 w-9 h-9 bg-white rounded-sm shadow-md flex items-center justify-center text-teal">
          {icon}
        </div>
      </div>

      {/* ── Copy ───────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h3 className="font-playfair text-[17px] font-semibold text-dark leading-snug">
          {title}
        </h3>
        <p className="font-inter text-sm text-body leading-relaxed flex-1">
          {description}
        </p>

        {/* ── Link ─────────────────────────────────────────── */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-inter text-sm font-medium text-teal mt-auto group/link"
          aria-label={`Learn more about ${title}`}
        >
          Learn more
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            aria-hidden
            className="transition-transform duration-200 group-hover/link:translate-x-1"
          >
            <path
              d="M2 7.5h11M9 3l4 4.5-4 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  )
}
