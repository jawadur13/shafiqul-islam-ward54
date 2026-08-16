'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Container } from './Container';
import { LangToggle } from './LangToggle';
import { MobileNav } from './MobileNav';
import { Monogram } from './Monogram';
import { navItems } from './nav-items';
import { ButtonLink } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { candidate } from '@/content/candidate';
import type { Locale } from '@/content/types';
import { cn } from '@/lib/utils';

/** Section 7 — sticky, green-800। */
export function Header() {
  const t = useTranslations('nav');
  const tHeader = useTranslations('header');
  const tActions = useTranslations('actions');
  const pathname = usePathname();
  const locale = useLocale() as Locale;

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(241,234,218,0.14)] bg-green-800 text-on-dark">
      <Container className="flex h-[68px] items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={candidate.name[locale]}
        >
          <Monogram />
          <span className="flex flex-col leading-tight">
            <span className="text-sm text-on-dark">{candidate.name[locale]}</span>
            <span className="hidden font-ui text-xs text-on-dark-muted sm:block">
              {candidate.post[locale]}
            </span>
          </span>
        </Link>

        <nav aria-label={t('menu')} className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'py-2 text-sm transition-colors duration-[var(--dur)]',
                      active
                        ? 'text-[var(--gold)]'
                        : 'text-on-dark hover:text-[var(--gold)]'
                    )}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Badge tone="gold" className="hidden xl:inline-flex">
            {tHeader('wardChip')}
          </Badge>
          <div className="hidden lg:block">
            <LangToggle />
          </div>
          <ButtonLink
            href="/jogajog"
            size="sm"
            className="hidden md:inline-flex"
          >
            {tActions('volunteer')}
          </ButtonLink>
          <div className="lg:hidden">
            <LangToggle />
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
