import {
  Cormorant_Garamond,
  EB_Garamond,
  Inter,
  Noto_Serif_Bengali,
} from 'next/font/google';

/**
 * Section 6 — Abu Sayed (বাংলা) local ফাইল হিসেবে আসবে; সেটা globals.css-এর
 * @font-face-এ ঘোষণা করা আছে (public/fonts/AbuSayed.woff2)। এখানে যেগুলো আছে
 * সেগুলো fallback + English পরিবার।
 */
export const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ['bengali'],
  variable: '--font-bn-fallback',
  display: 'swap',
});

/** English display + hero (Light, tight tracking, italic hero) */
export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

/** English body */
export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb',
  display: 'swap',
});

/** ছোট UI/data টেক্সট — badge, caption, form label */
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
});

export const fontVariables = [
  notoSerifBengali.variable,
  cormorant.variable,
  ebGaramond.variable,
  inter.variable,
].join(' ');
