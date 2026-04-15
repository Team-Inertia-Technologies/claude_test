import { SectionEyebrow, StatCounter } from '@/components/ui'

/* Placeholder names — replace with real client names/logos */
const CLIENT_LOGOS = [
  'Shipyard Alpha',
  'Operator Bravo',
  'Owner Charlie',
  'Yard Group Delta',
  'Maritime Echo',
  'Naval Org Foxtrot',
  'Owner Golf',
  'Shipyard Hotel',
  'Operator India',
  'Contractor Juliet',
  'Port Auth Kilo',
  'Group Lima',
]

const CLASS_SOCIETIES = [
  'IRS',
  'Bureau Veritas',
  'DNV',
  "Lloyd's Register",
  'ABS',
]

const CREDENTIALS = [
  { value: 15, suffix: '+', label: 'Avg. Team Experience (yrs)' },
  { value: 5,  suffix: '',  label: 'Approved Class Societies'   },
  { value: 4,  suffix: '',  label: 'Flag State Registrations'   },
] as const

export function ClientsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Credential stat strip ───────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 pb-16 border-b border-mid">
          <div>
            <SectionEyebrow label="Credentials" className="mb-8" />
            <StatCounter
              value={CREDENTIALS[0].value}
              suffix={CREDENTIALS[0].suffix}
              label={CREDENTIALS[0].label}
              accent="teal"
            />
          </div>
          <div className="flex items-end">
            <StatCounter
              value={CREDENTIALS[1].value}
              suffix={CREDENTIALS[1].suffix}
              label={CREDENTIALS[1].label}
              accent="teal"
            />
          </div>
          <div className="flex items-end">
            <StatCounter
              value={CREDENTIALS[2].value}
              suffix={CREDENTIALS[2].suffix}
              label={CREDENTIALS[2].label}
              accent="teal"
            />
          </div>
        </div>

        {/* Client logo grid ────────────────────────────────────── */}
        <SectionEyebrow label="Trusted by Owners & Operators" className="mb-8" />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {CLIENT_LOGOS.map((name) => (
            <div
              key={name}
              className="aspect-[3/2] bg-steel border border-mid rounded-sm
                         flex items-center justify-center hover:border-mid/50
                         transition-colors"
            >
              <span
                className="font-mono text-[8px] text-muted uppercase tracking-widest
                           text-center px-2 leading-relaxed"
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Class society badges ────────────────────────────────── */}
        <div className="mt-12 pt-8 border-t border-mid">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-5">
            Class approved by
          </p>
          <div className="flex flex-wrap gap-3">
            {CLASS_SOCIETIES.map((name) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 px-4 py-2 bg-steel border
                           border-mid rounded-sm font-mono text-[10px] uppercase
                           tracking-widest text-body"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" aria-hidden />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
