import type { AppPathname } from '@/i18n/routing';

/** Section 7 — হোম · পরিচিতি · অঙ্গীকার · কাজ · এলাকা · সমর্থন · যোগাযোগ */
export const navItems: { href: AppPathname; key: string }[] = [
  { href: '/', key: 'home' },
  { href: '/porichiti', key: 'about' },
  { href: '/ongikar', key: 'pledges' },
  { href: '/kaj', key: 'work' },
  { href: '/elaka', key: 'ward' },
  { href: '/shomorthon', key: 'support' },
  { href: '/jogajog', key: 'contact' },
];
