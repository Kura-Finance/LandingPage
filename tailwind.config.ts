import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './nuxt.config.{js,ts}',
    './src/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        kura: {
          ink: '#12131a',
          'ink-muted': '#c8ccd8',
          'ink-subtle': '#9499a8',
          background: '#f8f9fc',
          'background-light': '#f0f2f7',
          surface: '#f0f2f7',
          'surface-dark': '#12131a',
          primary: '#7c5cfc',
          'primary-dark': '#6b4de0',
          'primary-light': '#9d85fd',
          secondary: '#5266eb',
          accent: '#7c5cfc',
          border: '#e1e4ec',
          'border-dark': '#2a2d3a',
          success: '#2d6a4f',
          warning: '#b45309',
          error: '#b91c1c',
          text: '#12131a',
          'text-secondary': '#52566a',
          'text-muted': '#64687a',
          'text-on-dark': '#f0f2f7',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        display: ['Newsreader', 'Georgia', '"Times New Roman"', 'serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-md': ['3.25rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        card: '0 1px 0 rgba(18, 19, 26, 0.04)',
        device: '0 32px 80px rgba(18, 19, 26, 0.1), 0 8px 24px rgba(124, 92, 252, 0.06)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#52566a',
            maxWidth: 'none',
            a: {
              color: '#7c5cfc',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: '400',
              '&:hover': { color: '#6b4de0' },
            },
            strong: { color: '#12131a' },
            h1: { color: '#12131a', fontFamily: 'Newsreader, Georgia, serif' },
            h2: { color: '#12131a', marginTop: '2em', fontFamily: 'Newsreader, Georgia, serif' },
            h3: { color: '#12131a', fontFamily: 'Newsreader, Georgia, serif' },
            code: {
              color: '#6b4de0',
              backgroundColor: 'rgba(124, 92, 252, 0.08)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
