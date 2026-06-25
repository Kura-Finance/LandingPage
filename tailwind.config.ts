import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        kura: {
          ink: '#111118',
          'ink-muted': '#ededf3',
          'ink-subtle': '#9ca3af',
          background: '#ffffff',
          'background-light': '#f7f7f5',
          surface: '#f7f7f5',
          'surface-dark': '#171721',
          primary: '#7c3aed',
          'primary-dark': '#6d28d9',
          'primary-light': '#a78bfa',
          secondary: '#5266eb',
          accent: '#10b981',
          border: '#e8e8e4',
          'border-dark': '#2a2a36',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          text: '#111118',
          'text-secondary': '#6b7280',
          'text-on-dark': '#ededf3',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        soft: '0 12px 40px rgba(17, 17, 24, 0.08)',
        card: '0 1px 2px rgba(17, 17, 24, 0.04), 0 8px 24px rgba(17, 17, 24, 0.06)',
        'glow-primary': '0 8px 32px rgba(124, 58, 237, 0.25)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#6b7280',
            maxWidth: 'none',
            a: {
              color: '#7c3aed',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': { color: '#6d28d9' },
            },
            strong: { color: '#111118' },
            h1: { color: '#111118' },
            h2: { color: '#111118', marginTop: '2em' },
            h3: { color: '#111118' },
            code: {
              color: '#6d28d9',
              backgroundColor: 'rgba(124, 58, 237, 0.08)',
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
