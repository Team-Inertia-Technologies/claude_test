'use client'

import { useState } from 'react'

const RED = '#CC2B1D'
const WA  = '#25D366'

export default function TravelGoaPage() {
  const [form, setForm] = useState({
    name: '', phone: '',
    pickupDate: '', pickupTime: '', pickupLocation: '',
    dropDate: '', dropTime: '', dropLocation: '',
    agreed: false,
  })

  const set = (k: string, v: string | boolean) =>
    setForm(p => ({ ...p, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = [
      '🛵 *Scooter Booking — Travel Goa Tours*',
      '',
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      '',
      `*Pickup Date:* ${form.pickupDate} at ${form.pickupTime}`,
      `*Pickup Location:* ${form.pickupLocation}`,
      '',
      `*Drop-off Date:* ${form.dropDate} at ${form.dropTime}`,
      `*Drop Location:* ${form.dropLocation}`,
    ].join('\n')
    window.open(`https://wa.me/919007022760?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="font-inter text-gray-900 antialiased">

      {/* ── NAVBAR ──────────────────────────────────────────────── */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 h-14 flex items-center justify-between gap-4">
          <TGLogo />
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <PinIcon /> Candolim, Bardez – Goa
            </span>
            <a href="tel:+919007022760"
               className="flex items-center gap-1.5 hover:text-red-700 transition-colors font-medium">
              <PhoneIcon /> +91 900 702 2760
            </a>
            <span className="flex items-center gap-1.5">
              <ClockIcon /> Mon – Sat 08:00 – 20:00
            </span>
          </div>
          <a href="https://wa.me/919007022760" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-sm font-semibold md:hidden"
             style={{ background: WA }}>
            <WAIcon small /> WhatsApp
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        {/* Layered beach-toned gradient as photo stand-in */}
        <div className="absolute inset-0"
             style={{ background: 'linear-gradient(120deg,#0d3d3a 0%,#1a5c55 35%,#c87941 70%,#e8a84a 100%)' }} />
        <div className="absolute inset-0"
             style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8 py-20 w-full">
          <div className="max-w-[480px]">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/90
                             px-3 py-1 rounded-full mb-5"
                  style={{ background: RED }}>
              Holiday Tours
            </span>
            <h1 className="font-inter text-4xl lg:text-[3.2rem] font-bold text-white leading-[1.1] mb-5">
              One Scooter.<br />All of Goa.
            </h1>
            <p className="text-white/70 text-[0.9375rem] leading-relaxed mb-8 max-w-[360px]">
              Enjoy the freedom of exploring Goa at your own pace with Travel Goa Tours.
              The best Scooter in North Goa, delivered right at your door step.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/919007022760" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white
                            font-semibold text-sm shadow-xl hover:opacity-90 transition-opacity"
                 style={{ background: WA }}>
                <WAIcon /> WhatsApp Now
              </a>
              <a href="tel:+919007022760"
                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white
                            font-semibold text-sm border-2 border-white/40
                            hover:border-white/70 hover:bg-white/10 transition-all">
                <PhoneIcon white /> Call Agent
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET SHOWCASE ──────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block mb-4"
                    style={{ color: RED }}>
                The Fleet Standard
              </span>
              <h2 className="font-inter text-3xl lg:text-[2.25rem] font-bold text-gray-900 mb-4 leading-tight">
                Yamaha Fascino F1 Hybrid
              </h2>
              <p className="text-gray-500 leading-relaxed mb-7 text-sm lg:text-base">
                We exclusively rent the Yamaha Fascino for its unmatched blend of lightweight
                handling and sophisticated styling — perfect for Goa's winding coastal roads.
              </p>
              <ul className="space-y-3.5">
                {[
                  'Disc Brakes for superior safety',
                  '21L Under-seat storage for beach gear',
                  'Smart Motor Generator (Silent Start)',
                ].map(feat => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: RED }}>
                      <CheckIcon />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scooter image block */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl flex items-center justify-center"
                     style={{ background: RED }}>
                  <div className="text-center px-6">
                    <div className="text-white/20 text-7xl mb-2">🛵</div>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest">
                      Yamaha Fascino F1<br />product photo
                    </p>
                  </div>
                </div>
                {/* decorative offset square */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-gray-100 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              One Rate. No Surprises.
            </h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
              Premium service with transparent pricing. All rentals include taxes and
              roadside assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <PricingCard
              label="Standard"
              duration="1 Day"
              price="₹488"
              features={['24-Hour Rental', '1 Sanitised Helmet']}
              cta="Select Plan"
              onCta={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <PricingCard
              label="Most Popular"
              duration="3 Days"
              price="₹1,400"
              features={['72-Hour Rental', '3 Sanitised Helmets', 'Free Candolim Delivery']}
              cta="Book Now"
              popular
              onCta={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <PricingCard
              label="The Saver"
              duration="7 Days"
              price="₹3,100"
              features={['Weekly Pass', 'Full Set Included']}
              cta="Select Plan"
              onCta={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="font-inter text-3xl lg:text-4xl font-bold text-gray-900 mb-14 text-center">
            Your Journey Starts in 10 Minutes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Connector line — desktop */}
            <div className="hidden md:block absolute top-6 left-[calc(100%/6+1.5rem)]
                            right-[calc(100%/6+1.5rem)] h-px bg-gray-200" aria-hidden />

            {[
              {
                num: '01',
                title: 'WhatsApp Booking',
                desc: 'Send us your preferred dates and location. No complex forms or registrations required.',
              },
              {
                num: '02',
                title: 'Identity Check',
                desc: "Show your IDs and Aadhaar at the time of pickup. We take a quick photo and you're good to go.",
              },
              {
                num: '03',
                title: 'Ride & Explore',
                desc: "Take your key and explore Goa's hidden gems. 24/7 roadside assistance is just a call away.",
              },
            ].map(step => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center
                               text-white font-bold text-sm mb-5 relative z-10 shadow-md"
                     style={{ background: RED }}>
                  {step.num}
                </div>
                <h3 className="font-inter font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY RENT FROM US ────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="font-inter text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
            Why Rent From Us?
          </h2>

          {/* Top row — 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4 items-start">
              <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <PinIcon brand />
              </div>
              <div>
                <h3 className="font-inter font-semibold text-gray-900 mb-1.5">Total Transparency</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  The price you see is exactly what you pay. No extra charges for
                  helmets, cleaning, or weekend surges.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-6 flex gap-4 items-start text-white"
                 style={{ background: RED }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 bg-white/20">
                <PinIcon white />
              </div>
              <div>
                <h3 className="font-inter font-semibold mb-1.5">Candolim Main Road</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Our hub is located right at the heart of Candolim, making pick-up
                  and drop-off effortless for tourists.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <BikeIcon />,
                title: '2024–25 Models',
                desc: 'We always maintain the latest fleet for reliability and style.',
              },
              {
                icon: <SupportIcon />,
                title: '24/7 Support',
                desc: 'Puncture or breakdown? We replace your bike in under 15 mins.',
              },
              {
                icon: <SparkleIcon />,
                title: 'Sanitized Gear',
                desc: 'Helmets are deep-cleaned and sanitised after every single rental.',
              },
            ].map(f => (
              <div key={f.title}
                   className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-3"
                     style={{ color: RED }}>
                  {f.icon}
                </div>
                <h3 className="font-inter font-semibold text-gray-900 text-sm mb-1.5">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ───────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Photo placeholder */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-amber-50 border
                            border-amber-100 flex items-center justify-center">
              <p className="text-amber-300 text-xs uppercase tracking-widest text-center px-6">
                Scooter / lifestyle photo<br />— client to supply
              </p>
            </div>

            <div>
              <h2 className="font-inter text-3xl font-bold text-gray-900 mb-3">
                Documents You'll Need
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                To ensure a legal and safe rental experience in Goa, we require the
                following valid documents at the time of pickup.
              </p>
              <ul className="space-y-6">
                {[
                  {
                    title: 'Valid Driving License',
                    note: 'Original instead of a photocopy (is mandatory)',
                  },
                  {
                    title: 'Aadhaar Card / Passport',
                    note: 'For international visitors only (Aadhaar is not mandatory)',
                  },
                  {
                    title: 'Rental Agreement',
                    note: 'Signed digitally or physically at the time of pickup',
                  },
                ].map(doc => (
                  <li key={doc.title} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full flex items-center
                                     justify-center shrink-0"
                          style={{ background: RED }}>
                      <CheckIcon />
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{doc.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{doc.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 lg:py-20" id="book">
        <div className="max-w-2xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-inter text-3xl font-bold text-gray-900 mb-2">
              Book Your Fascino
            </h2>
            <p className="text-gray-500 text-sm">
              Fill in your details and we'll contact you instantly on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Full Name" placeholder="John Doe"
                     value={form.name} onChange={v => set('name', v)} required />
              <Field label="Phone Number" placeholder="+91 93993 93993" type="tel"
                     value={form.phone} onChange={v => set('phone', v)} required />
            </div>

            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 pt-2">
              Pickup Details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Pickup Date" type="date"
                     value={form.pickupDate} onChange={v => set('pickupDate', v)} required />
              <Field label="Pickup Time" type="time"
                     value={form.pickupTime} onChange={v => set('pickupTime', v)} required />
            </div>
            <Field label="Pickup Location" placeholder="e.g. Candolim Hotel or Our Shop"
                   value={form.pickupLocation} onChange={v => set('pickupLocation', v)} required />

            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 pt-2">
              Drop-off Details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Drop Date" type="date"
                     value={form.dropDate} onChange={v => set('dropDate', v)} required />
              <Field label="Drop Time" type="time"
                     value={form.dropTime} onChange={v => set('dropTime', v)} required />
            </div>
            <Field label="Drop Location" placeholder="e.g. Airport or Our Shop"
                   value={form.dropLocation} onChange={v => set('dropLocation', v)} required />

            <label className="flex items-start gap-3 cursor-pointer pt-1">
              <input type="checkbox" required checked={form.agreed}
                     onChange={e => set('agreed', e.target.checked)}
                     className="mt-0.5 rounded border-gray-300 w-4 h-4 shrink-0"
                     style={{ accentColor: RED }} />
              <span className="text-xs text-gray-500 leading-relaxed">
                I agree to the Rental{' '}
                <a href="#" className="underline text-gray-700 hover:text-red-700 transition-colors">
                  Terms & Conditions
                </a>{' '}
                and adhere to traffic regulations set by the Government Authorities.
              </span>
            </label>

            <button type="submit"
                    className="w-full py-4 rounded-full text-white font-semibold text-sm
                               flex items-center justify-center gap-2 hover:opacity-90
                               transition-opacity shadow-lg mt-2"
                    style={{ background: WA }}>
              <WAIcon /> Confirm Booking via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

            {/* About */}
            <div>
              <TGLogo dark className="mb-4" />
              <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
                Experience Goa with us! Travel Goa Tours provides great Bike Rental
                in Goa — safe, reliable, and hassle-free.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-sm mb-5 text-gray-200 uppercase tracking-wide">
                Contact Info
              </h3>
              <div className="space-y-3 text-sm text-gray-400">
                <p className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0"><PhoneIcon /></span>
                  +91 900 702 2760
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0"><PinIcon /></span>
                  Travel Goa Tours, Near Bharatdaga Temple,
                  Sequeira Waddo, Candolim, Bardez – Goa
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0"><ClockIcon /></span>
                  Mon – Sat 08:00 – 20:30
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div>
              <h3 className="font-semibold text-sm mb-5 text-gray-200 uppercase tracking-wide">
                Location
              </h3>
              <div className="aspect-video rounded-xl bg-gray-800 border border-gray-700
                              flex items-center justify-center">
                <span className="text-gray-600 text-xs text-center px-3">
                  📍 Candolim, Goa<br />
                  <span className="text-gray-700">Map embed — client to add</span>
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Travel Goa Tours · Design by Team Inertia Technologies, Goa
          </div>
        </div>
      </footer>

    </div>
  )
}

/* ── SUB-COMPONENTS ─────────────────────────────────────────────── */

function PricingCard({
  label, duration, price, features, cta, popular = false, onCta,
}: {
  label: string
  duration: string
  price: string
  features: string[]
  cta: string
  popular?: boolean
  onCta?: () => void
}) {
  return (
    <div className={[
      'relative rounded-2xl p-6 flex flex-col border transition-shadow hover:shadow-xl',
      popular ? 'border-transparent text-white shadow-2xl' : 'border-gray-200 bg-white',
    ].join(' ')}
         style={popular ? { background: '#1A1A1A' } : {}}>

      {popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full
                         text-white text-[11px] font-bold uppercase tracking-widest shadow-lg"
              style={{ background: RED }}>
          Most Popular
        </span>
      )}

      <p className={`text-[11px] font-bold uppercase tracking-widest mb-1
                     ${popular ? 'text-gray-400' : 'text-gray-400'}`}>
        {label}
      </p>
      <h3 className={`font-inter text-xl font-bold mb-1 ${popular ? 'text-white' : 'text-gray-900'}`}>
        {duration}
      </h3>
      <div className="mb-5 mt-1">
        <span className={`font-inter text-4xl font-bold ${popular ? 'text-white' : 'text-gray-900'}`}>
          {price}
        </span>
        <span className={`text-xs ml-1 ${popular ? 'text-gray-400' : 'text-gray-400'}`}>
          / total
        </span>
      </div>

      <ul className="space-y-2.5 mb-7 flex-1">
        {features.map(f => (
          <li key={f} className="flex items-center gap-2.5 text-sm">
            <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: popular ? RED : '#f3e8e8' }}>
              <CheckIcon small />
            </span>
            <span className={popular ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onCta}
        className={[
          'w-full py-3 rounded-full font-semibold text-sm transition-all',
          popular
            ? 'text-white hover:opacity-90'
            : 'border-2 hover:opacity-80',
        ].join(' ')}
        style={popular
          ? { background: WA }
          : { borderColor: RED, color: RED, background: 'transparent' }}>
        {cta}
      </button>
    </div>
  )
}

function Field({
  label, placeholder = '', value, onChange, type = 'text', required = false,
}: {
  label: string
  placeholder?: string
  value: string
  onChange: (v: string) => void
  type?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm
                   text-gray-900 placeholder:text-gray-400 outline-none transition-colors
                   focus:border-red-400 focus:ring-2 focus:ring-red-100"
      />
    </div>
  )
}

/* ── LOGO ────────────────────────────────────────────────────────── */
function TGLogo({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-2 shrink-0 ${className}`}>
      <div className="w-8 h-8 rounded-sm flex items-center justify-center shadow-sm"
           style={{ background: RED }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M4 14 Q 9 4 14 14" stroke="white" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="6" r="2" fill="white" />
        </svg>
      </div>
      <div className="leading-none">
        <span className={`font-bold text-sm block ${dark ? 'text-white' : 'text-gray-900'}`}>
          Travel Goa
        </span>
        <span className={`text-[9px] uppercase tracking-[0.18em] font-semibold
                          ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
          Tours
        </span>
      </div>
    </div>
  )
}

/* ── ICONS ───────────────────────────────────────────────────────── */
function WAIcon({ small = false }: { small?: boolean }) {
  const s = small ? 14 : 16
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function PhoneIcon({ white = false }: { white?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden
         stroke={white ? 'white' : 'currentColor'} strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function PinIcon({ white = false, brand = false }: { white?: boolean; brand?: boolean }) {
  const color = white ? 'white' : brand ? RED : 'currentColor'
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden
         stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function CheckIcon({ small = false }: { small?: boolean }) {
  return (
    <svg width={small ? 8 : 10} height={small ? 8 : 10} viewBox="0 0 10 10"
         fill="none" aria-hidden>
      <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BikeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6h-5l-3 5.5M8 6l4 6M15 6l3 5.5" />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 5.8L20 10l-6.1 1.2-1.9 5.8-1.9-5.8L4 10l6.1-1.2L12 3z" />
      <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
    </svg>
  )
}
