import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F7',
        surface: '#FFFFFF',
        ink: '#191919',
        muted: '#666666',
        brand: '#FE6D4C',
        navy: '#191919',
        border: '#E5E5E5',
        'pixie-pink': '#FE86F6',
        'curious-blue': '#3052F9',
        mindaro: '#C4FE79',
        'space-green': '#00524D',
        'ultra-violet': '#9A4EFF',
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(2.25rem,5vw,3.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'section': ['clamp(1.75rem,3.5vw,2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'subheading': ['clamp(1.25rem,2vw,1.5rem)', { lineHeight: '1.2' }],
      },
      maxWidth: {
        'content': '1120px',
        'prose': '680px',
      },
      spacing: {
        'section': '7rem',
        'section-sm': '4rem',
      },
    },
  },
  plugins: [],
}

export default config
