import { defineRouting } from 'next-intl/routing';

// Section 3 + 4 — বাংলা default, prefix নেই; English-এ /en।
export const routing = defineRouting({
  locales: ['bn', 'en'],
  defaultLocale: 'bn',
  localePrefix: 'as-needed',
  // বাংলা default — ব্রাউজারের Accept-Language দেখে /en-এ পাঠানো হয় না।
  // ব্যবহারকারী Header-এর toggle দিয়ে English-এ যাবে।
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/porichiti': { bn: '/porichiti', en: '/about' },
    '/ongikar': { bn: '/ongikar', en: '/pledges' },
    '/kaj': { bn: '/kaj', en: '/work' },
    '/elaka': { bn: '/elaka', en: '/ward' },
    '/shomorthon': { bn: '/shomorthon', en: '/support' },
    '/jogajog': { bn: '/jogajog', en: '/contact' },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
