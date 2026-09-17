import type { Config } from 'tailwindcss'

// "Ledger" design system. Colors resolve to CSS custom properties (per-theme
// "R G B" triplets in src/index.css) so every bg-canvas/text-ink/etc. utility
// repaints for light vs dark automatically.
function withOpacity(variable: string) {
  return `rgb(var(${variable}) / <alpha-value>)`
}

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: withOpacity('--color-canvas'),
          raised: withOpacity('--color-canvas-raised'),
          panel: withOpacity('--color-canvas-panel'),
          border: withOpacity('--color-canvas-border'),
        },
        ink: {
          DEFAULT: withOpacity('--color-ink'),
          muted: withOpacity('--color-ink-muted'),
          faint: withOpacity('--color-ink-faint'),
        },
        accent: {
          DEFAULT: withOpacity('--color-accent'),
          bright: withOpacity('--color-accent-bright'),
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadein: 'fadein 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
} satisfies Config
