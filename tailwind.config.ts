import type { Config } from 'tailwindcss';

// Section 5 — সব টোকেন globals.css-এর CSS variable থেকে আসে।
// এখানে শুধু Tailwind-এর দিকে map করা হয়েছে; নতুন কালার invent করা হয়নি।
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          900: 'var(--green-900)',
          800: 'var(--green-800)',
          700: 'var(--green-700)',
          600: 'var(--green-600)',
        },
        maroon: 'var(--maroon)',
        red: {
          DEFAULT: 'var(--red)',
          dark: 'var(--red-dark)',
        },
        ivory: {
          DEFAULT: 'var(--ivory)',
          2: 'var(--ivory-2)',
        },
        line: 'var(--line)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        'on-dark': 'var(--on-dark)',
        'on-dark-muted': 'var(--on-dark-muted)',
        gold: 'var(--gold)',
      },
      fontFamily: {
        // বাংলা বডি — Noto Serif Bengali (ছোট সাইজে পড়তে আরাম)।
        bn: ['var(--font-bn-fallback)', 'Noto Serif Bengali', 'Hind Siliguri', 'serif'],
        // বাংলা হেডিং/display — Abu Sayed। globals.css-এর @font-face থেকে আসে;
        // ফাইল না থাকলে আপনা থেকে Noto-তে নেমে যায়।
        'bn-display': [
          'Abu Sayed',
          'var(--font-bn-fallback)',
          'Noto Serif Bengali',
          'serif',
        ],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-eb)', 'Georgia', 'serif'],
        // Inter-এ বাংলা গ্লিফ নেই — তাই বাংলা UI টেক্সট যেন ব্যবহারকারীর OS-এর
        // এলোমেলো ফন্টে না পড়ে, বডির ফন্টেই পড়ে (Latin থাকে Inter-এ)।
        ui: [
          'var(--font-ui)',
          'var(--font-bn-fallback)',
          'Noto Serif Bengali',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        display: ['var(--fs-display)', { lineHeight: '1.12' }],
        h1: ['var(--fs-h1)', { lineHeight: '1.12' }],
        h2: ['var(--fs-h2)', { lineHeight: '1.12' }],
        h3: ['var(--fs-h3)', { lineHeight: '1.2' }],
        lg: 'var(--fs-lg)',
        body: 'var(--fs-body)',
        sm: 'var(--fs-sm)',
        xs: 'var(--fs-xs)',
      },
      spacing: {
        'section-y': 'var(--section-y)',
      },
      maxWidth: {
        container: 'var(--container)',
        narrow: 'var(--container-narrow)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--ease)',
        ease: 'var(--ease)',
      },
      transitionDuration: {
        DEFAULT: 'var(--dur)',
      },
    },
  },
  plugins: [],
};

export default config;
