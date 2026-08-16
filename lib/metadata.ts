import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getPathname } from '@/i18n/navigation';
import { routing, type AppPathname, type Locale } from '@/i18n/routing';

/** ডোমেইন `[TBD]` — এলে NEXT_PUBLIC_SITE_URL বসালেই canonical/OG পূর্ণ URL পাবে। */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

type MetaKey =
  | 'home'
  | 'about'
  | 'pledges'
  | 'work'
  | 'ward'
  | 'support'
  | 'contact';

/**
 * Section 14 — per-locale title/description + hreflang alternates।
 */
export async function buildMetadata({
  locale,
  page,
  pathname,
}: {
  locale: Locale;
  page: MetaKey;
  pathname: AppPathname;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const title = t(`${page}.title`);
  const description = t(`${page}.description`);

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, getPathname({ href: pathname, locale: l })])
  );

  return {
    title,
    description,
    alternates: {
      canonical: getPathname({ href: pathname, locale }),
      languages,
    },
    // OG ছবি app/[locale]/opengraph-image.tsx থেকে আপনা থেকে যুক্ত হয়।
    openGraph: {
      title,
      description,
      locale: locale === 'bn' ? 'bn_BD' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
