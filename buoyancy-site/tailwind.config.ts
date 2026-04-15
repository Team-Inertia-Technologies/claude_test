import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:  '#0B2545',
        teal:  '#14818A',
        gold:  '#C9A035',
        steel: '#F4F6F9',
        mid:   '#D0D8E4',
        dark:  '#1A2333',
        body:  '#3A4556',
        muted: '#7A8A9A',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter:    ['var(--font-inter)',    'system-ui', 'sans-serif'],
        mono:     ['var(--font-jetbrains)','Consolas',  'monospace'],
      },
      backgroundImage: {
        'blueprint-grid': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3Cpattern id='s' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M20 0L0 0 0 20' fill='none' stroke='white' stroke-width='0.4'/%3E%3C/pattern%3E%3Cpattern id='g' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect width='100' height='100' fill='url(%23s)'/%3E%3Cpath d='M100 0L0 0 0 100' fill='none' stroke='white' stroke-width='0.8'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 28s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
