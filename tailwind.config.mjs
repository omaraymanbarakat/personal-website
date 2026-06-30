import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        tight: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#FAF7F2',
        surface: '#FFFFFF',
        border: '#EDE8E0',
        'ink-primary': '#1A1A1A',
        'ink-secondary': '#5A5A57',
        accent: '#8B3A1A',
        'accent-dark': '#6E2E12',
        'accent-light': '#FEF3EB',
        // Dimension tag colors
        'dim-build-bg': '#EEF2FF',
        'dim-build-text': '#1E3A8A',
        'dim-fix-bg': '#FFF7ED',
        'dim-fix-text': '#7C2D12',
        'dim-design-bg': '#FDF2F8',
        'dim-design-text': '#831843',
        'dim-teach-bg': '#ECFDF5',
        'dim-teach-text': '#065F46',
      },
      maxWidth: {
        reading: '720px',
        content: '1080px',
      },
      borderRadius: {
        card: '12px',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1A1A1A',
            '--tw-prose-headings': '#1A1A1A',
            '--tw-prose-links': '#8B3A1A',
            '--tw-prose-bold': '#1A1A1A',
            '--tw-prose-counters': '#5A5A57',
            '--tw-prose-bullets': '#5A5A57',
            '--tw-prose-hr': '#E8E6E0',
            '--tw-prose-quotes': '#5A5A57',
            '--tw-prose-quote-borders': '#8B3A1A',
            '--tw-prose-captions': '#5A5A57',
            '--tw-prose-th-borders': '#E8E6E0',
            '--tw-prose-td-borders': '#E8E6E0',
            maxWidth: 'none',
            lineHeight: '1.75',
            a: {
              fontWeight: '500',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            },
            h2: { fontFamily: '"Inter Tight", Inter, system-ui, sans-serif', fontWeight: '500' },
            h3: { fontFamily: '"Inter Tight", Inter, system-ui, sans-serif', fontWeight: '500' },
            table: { fontSize: '0.875rem' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
