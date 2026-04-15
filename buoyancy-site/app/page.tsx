/**
 * Component Showcase — development reference only.
 * Delete this page and replace with the real homepage build.
 */
import {
  NavBar,
  SectionEyebrow,
  BlueprintGrid,
  StatCounter,
  ServiceCard,
  SDGCard,
} from '@/components/ui'

/* ── Placeholder service icon ─────────────────────────────── */
function ShipIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M2 14l2-6h12l2 6M4 8V5h12v3M10 2v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ShowcasePage() {
  return (
    <>
      <NavBar />

      {/* ── Hero placeholder (navy + blueprint) ─────────── */}
      <section className="relative bg-navy min-h-[420px] flex items-center justify-center overflow-hidden pt-16">
        <BlueprintGrid />
        {/* Ghost watermark */}
        <span
          className="absolute font-playfair text-[clamp(60px,15vw,180px)] font-bold text-white select-none pointer-events-none"
          style={{ opacity: 0.02 }}
          aria-hidden
        >
          MARINE
        </span>
        <div className="relative z-10 text-center px-6">
          <SectionEyebrow label="Component Showcase" theme="dark" className="justify-center mb-4" />
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Buoyancy Consultants
          </h1>
          <p className="font-inter text-white/70 max-w-md mx-auto">
            Shared UI components — NavBar · SectionEyebrow · BlueprintGrid ·
            StatCounter · ServiceCard · SDGCard
          </p>
        </div>
      </section>

      {/* ── StatCounter ──────────────────────────────────── */}
      <section className="bg-navy py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionEyebrow label="By the numbers" theme="dark" className="mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCounter value={11}  suffix="+"  label="Years in Practice"  accent="gold" />
            <StatCounter value={200} suffix="+"  label="Projects Delivered" accent="gold" />
            <StatCounter value={97}  suffix="%"  label="Class Approval Rate" accent="teal" />
            <StatCounter value={4}          label="Global Markets"     accent="gold" />
          </div>
        </div>
      </section>

      {/* ── ServiceCard grid ─────────────────────────────── */}
      <section className="bg-steel py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionEyebrow label="Our Services" theme="light" className="mb-4" />
          <h2 className="font-playfair text-3xl font-semibold text-dark mb-10">
            Engineering Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<ShipIcon />}
              title="Ship Design"
              description="Full-cycle naval architecture from concept through class approval — new builds and conversions across vessel types."
              href="/services/ship-design"
            />
            <ServiceCard
              icon={<ShipIcon />}
              title="Offshore Engineering"
              description="Platform, FPSO, and subsea structure analysis. Mooring, stability, and structural design to class and flag requirements."
              href="/services/offshore-engineering"
            />
            <ServiceCard
              icon={<ShipIcon />}
              title="Green Solutions"
              description="EEDI/EEXI compliance strategies, alternative-fuel vessel design, and sustainability reporting aligned with IMO 2050."
              href="/services/green-solutions"
            />
          </div>
        </div>
      </section>

      {/* ── SDGCard grid ─────────────────────────────────── */}
      <section className="relative bg-navy py-20 px-6 overflow-hidden">
        <BlueprintGrid opacity={0.03} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionEyebrow label="Sustainability" theme="dark" className="mb-4" />
          <h2 className="font-playfair text-3xl font-semibold text-white mb-10">
            Aligned with Global Goals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <SDGCard sdg={12} />
            <SDGCard sdg={13} />
            <SDGCard sdg={14} />
            <SDGCard sdg={17} />
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────── */}
      <section className="bg-dark py-16 px-6 text-center">
        <SectionEyebrow label="Next steps" theme="dark" className="justify-center mb-4" />
        <h2 className="font-playfair text-3xl font-bold text-white mb-6">
          Ready to Start a Project?
        </h2>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-white font-inter text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
        >
          Start a Project
        </a>
      </section>
    </>
  )
}
