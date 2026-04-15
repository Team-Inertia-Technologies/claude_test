import Link from 'next/link'

/* ── Data ─────────────────────────────────────────────────────── */
const SERVICES_LINKS = [
  { label: 'Ship Design',              href: '/services/ship-design'           },
  { label: 'Offshore Engineering',     href: '/services/offshore-engineering'  },
  { label: 'Detailed Engineering & CAD', href: '/services/detailed-engineering' },
  { label: 'Retrofit & Conversion',   href: '/services/retrofit-conversion'   },
  { label: 'Project Management',      href: '/services/project-management'    },
  { label: 'Green Solutions',         href: '/services/green-solutions'       },
]

const COMPANY_LINKS = [
  { label: 'About Us',       href: '/about'              },
  { label: 'Our Team',       href: '/about/team'         },
  { label: 'Affiliations',   href: '/about/affiliations' },
  { label: 'Awards & News',  href: '/about/awards'       },
  { label: 'Careers',        href: '/about/careers'      },
  { label: 'Contact',        href: '/contact'            },
]

const SDG_BADGES = [
  { num: '12', color: '#C5192D', label: 'SDG 12 — Responsible Consumption & Production' },
  { num: '13', color: '#3F7E44', label: 'SDG 13 — Climate Action'                        },
  { num: '14', color: '#0A97D9', label: 'SDG 14 — Life Below Water'                      },
  { num: '17', color: '#19486A', label: 'SDG 17 — Partnerships for the Goals'            },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">

      {/* ── 4-column grid ───────────────────────────────────────── */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 py-16
                   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
      >

        {/* Col 1: Brand ──────────────────────────────────────── */}
        <div>
          {/* Wordmark */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-playfair text-xl font-semibold text-white">Buoyancy</span>
            <span className="block w-px h-4 bg-gold opacity-60" aria-hidden />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Consultants
            </span>
          </div>

          <p className="font-inter text-sm text-white/50 leading-relaxed mb-5 max-w-[220px]">
            Marine engineering and naval architecture consultancy.<br />
            Panaji, Goa, India.
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25 mb-5">
            Precision engineered, story-driven
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/buoyancyconsultants"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buoyancy Consultants on LinkedIn"
              className="w-8 h-8 rounded-sm border border-white/10 flex items-center
                         justify-center text-white/40 hover:text-white hover:border-white/30
                         transition-colors"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Col 2: Services ───────────────────────────────────── */}
        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-5">
            Services
          </h3>
          <ul className="space-y-3">
            {SERVICES_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-inter text-sm text-white/55 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Company ─────────────────────────────────────── */}
        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-5">
            Company
          </h3>
          <ul className="space-y-3">
            {COMPANY_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-inter text-sm text-white/55 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact ─────────────────────────────────────── */}
        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-5">
            Contact
          </h3>
          <address className="not-italic space-y-4">
            <p className="font-inter text-sm text-white/55 leading-relaxed">
              Panaji, Goa<br />
              India — 403 001
            </p>
            <a
              href="mailto:info@buoyancyconsultants.com"
              className="font-inter text-sm text-teal hover:text-white transition-colors block"
            >
              info@buoyancyconsultants.com
            </a>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/25">
              Mon–Fri 09:00–18:00 IST
            </p>
          </address>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2 border border-white/15
                       text-white/60 font-inter text-sm rounded-sm hover:border-white/30
                       hover:text-white transition-all"
          >
            Start a Project →
          </Link>
        </div>
      </div>

      {/* ── SDG badge strip + copyright ─────────────────────────── */}
      <div className="border-t border-white/[0.07]">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10 py-5
                     flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          {/* SDG badges */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/25">
              Aligned with UN SDGs
            </span>
            <div className="flex gap-2">
              {SDG_BADGES.map(({ num, color, label }) => (
                <div
                  key={num}
                  className="w-6 h-6 rounded-sm flex items-center justify-center"
                  style={{ backgroundColor: color }}
                  title={label}
                  aria-label={label}
                >
                  <span className="font-playfair text-white text-[9px] font-bold leading-none">
                    {num}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="font-mono text-[9px] uppercase tracking-widest text-white/25">
            © {year} Buoyancy Consultants · Design by Team Inertia Technologies, Goa
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ── LinkedIn SVG ─────────────────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
      <path d="M1.5 4.5h2.5V12H1.5V4.5zm1.25-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
      <path d="M5.5 4.5h2.4v1h.03C8.3 4.9 9.1 4.4 10.2 4.4c2.2 0 2.6 1.4 2.6 3.3V12H10.3V8.2c0-.9-.02-2.1-1.3-2.1S7.4 7.2 7.4 8.1V12H5.5V4.5z" />
    </svg>
  )
}
