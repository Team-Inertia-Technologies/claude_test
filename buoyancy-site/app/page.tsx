/**
 * Homepage — /
 * Section order follows WF-01 exactly as specified in BUOYANCY_CONTEXT.md
 */
import { NavBar }                from '@/components/ui'
import { HeroSection }           from '@/components/sections/home/HeroSection'
import { TickerSection }         from '@/components/sections/home/TickerSection'
import { AboutSection }          from '@/components/sections/home/AboutSection'
import { ServicesSection }       from '@/components/sections/home/ServicesSection'
import { ProjectsSection }       from '@/components/sections/home/ProjectsSection'
import { SustainabilitySection } from '@/components/sections/home/SustainabilitySection'
import { ProcessSection }        from '@/components/sections/home/ProcessSection'
import { ClientsSection }        from '@/components/sections/home/ClientsSection'
import { InsightsSection }       from '@/components/sections/home/InsightsSection'
import { CtaBand }               from '@/components/sections/home/CtaBand'
import { Footer }                from '@/components/sections/home/Footer'

export default function HomePage() {
  return (
    <>
      {/* 01 — NAV */}
      <NavBar />

      <main>
        {/* 02 — HERO */}
        <HeroSection />

        {/* 03 — TICKER */}
        <TickerSection />

        {/* 04 — ABOUT STRIP */}
        <AboutSection />

        {/* 05 — SERVICES */}
        <ServicesSection />

        {/* 06 — PROJECTS */}
        <ProjectsSection />

        {/* 07 — SUSTAINABILITY */}
        <SustainabilitySection />

        {/* 08 — PROCESS */}
        <ProcessSection />

        {/* 09 — CLIENTS */}
        <ClientsSection />

        {/* 10 — INSIGHTS */}
        <InsightsSection />

        {/* 11 — CTA BAND */}
        <CtaBand />
      </main>

      {/* 12 — FOOTER */}
      <Footer />
    </>
  )
}
