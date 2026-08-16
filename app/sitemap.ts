import type { MetadataRoute } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing, type AppPathname } from '@/i18n/routing';
import { siteUrl } from '@/lib/metadata';

const pages: AppPathname[] = [
  '/',
  '/porichiti',
  '/ongikar',
  '/kaj',
  '/elaka',
  '/shomorthon',
  '/jogajog',
];

/**
 * Section 14 — ডোমেইন `[TBD]`।
 * NEXT_PUBLIC_SITE_URL সেট না থাকলে ভুয়া absolute URL বানানো হয় না,
 * sitemap খালি থাকে; ডোমেইন বসালেই পূর্ণ হয়ে যাবে।
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  const base = siteUrl.replace(/\/$/, '');

  return pages.map((page) => ({
    url: `${base}${getPathname({ href: page, locale: routing.defaultLocale })}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          `${base}${getPathname({ href: page, locale })}`,
        ])
      ),
    },
  }));
}
