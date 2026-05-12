import { useEffect, useRef } from 'react'
import './index.css'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const FADE_DURATION = 0.5

function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    function tick() {
      if (!video) return
      const { currentTime, duration, style } = video
      if (!duration) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }

      if (currentTime < FADE_DURATION) {
        style.opacity = String(currentTime / FADE_DURATION)
      } else if (currentTime > duration - FADE_DURATION) {
        style.opacity = String((duration - currentTime) / FADE_DURATION)
      } else {
        style.opacity = '1'
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    function handleEnded() {
      if (!video) return
      video.style.opacity = '0'
      setTimeout(() => {
        if (!video) return
        video.currentTime = 0
        video.play().catch(() => {})
      }, 100)
    }

    video.style.opacity = '0'
    video.play().catch(() => {})
    rafRef.current = requestAnimationFrame(tick)
    video.addEventListener('ended', handleEnded)

    return () => {
      cancelAnimationFrame(rafRef.current)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div
      className="absolute w-full overflow-hidden"
      style={{ inset: 'auto 0 0 0', top: '300px', zIndex: 0 }}
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0,
          display: 'block',
        }}
      />
      {/* gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #ffffff 0%, transparent 30%, transparent 70%, #ffffff 100%)',
        }}
      />
    </div>
  )
}

const navItems = [
  { label: 'Home', active: true },
  { label: 'Studio', active: false },
  { label: 'About', active: false },
  { label: 'Journal', active: false },
  { label: 'Reach Us', active: false },
]

function NavBar() {
  return (
    <nav
      className="relative w-full"
      style={{ zIndex: 10 }}
    >
      <div
        className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto"
      >
        {/* Logo */}
        <span
          className="text-3xl tracking-tight select-none"
          style={{ fontFamily: 'var(--font-display)', color: '#000000' }}
        >
          Aethera<sup style={{ fontSize: '0.5em', verticalAlign: 'super' }}>®</sup>
        </span>

        {/* Menu items */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className="text-sm transition-colors no-underline hover:opacity-80"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: item.active ? '#000000' : '#6F6F6F',
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          type="button"
          className="rounded-full px-6 text-sm transition-transform hover:scale-[1.03] active:scale-100 cursor-pointer border-0"
          style={{
            paddingTop: '0.625rem',
            paddingBottom: '0.625rem',
            fontFamily: 'var(--font-body)',
            backgroundColor: '#000000',
            color: '#ffffff',
          }}
        >
          Begin Journey
        </button>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 pb-40"
      style={{ paddingTop: 'calc(8rem - 75px)', zIndex: 10 }}
    >
      {/* Headline */}
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-normal max-w-7xl"
        style={{
          fontFamily: 'var(--font-display)',
          lineHeight: 0.95,
          letterSpacing: '-2.46px',
          color: '#000000',
        }}
      >
        Beyond{' '}
        <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>silence,</em>
        {' '}we build{' '}
        <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>the eternal.</em>
      </h1>

      {/* Description */}
      <p
        className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
        style={{
          fontFamily: 'var(--font-body)',
          color: '#6F6F6F',
        }}
      >
        Building platforms for brilliant minds, fearless makers, and thoughtful
        souls. Through the noise, we craft digital havens for deep work and pure
        flows.
      </p>

      {/* CTA Button */}
      <button
        type="button"
        className="animate-fade-rise-delay-2 rounded-full text-base mt-12 transition-transform hover:scale-[1.03] active:scale-100 cursor-pointer border-0"
        style={{
          paddingLeft: '3.5rem',
          paddingRight: '3.5rem',
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem',
          fontFamily: 'var(--font-body)',
          backgroundColor: '#000000',
          color: '#ffffff',
        }}
      >
        Begin Journey
      </button>
    </section>
  )
}

export default function App() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Video layer */}
      <VideoBackground />

      {/* Content layers */}
      <div className="relative" style={{ zIndex: 10 }}>
        <NavBar />
        <HeroSection />
      </div>
    </div>
  )
}
