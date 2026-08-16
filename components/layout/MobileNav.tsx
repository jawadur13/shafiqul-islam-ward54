'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { navItems } from './nav-items';
import { LangToggle } from './LangToggle';
import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

/** Section 7 — hamburger → full-screen green drawer, বড় টাইপ। */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');
  const tActions = useTranslations('actions');
  const pathname = usePathname();

  // path বদলালে drawer বন্ধ
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // drawer খোলা থাকলে ব্যাকগ্রাউন্ড scroll বন্ধ + Esc-এ বন্ধ
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t('openMenu')}
        aria-expanded={open}
        className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-on-dark"
      >
        <Menu size={22} aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-green-800">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-ui text-xs text-on-dark-muted">
              {t('menu')}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t('close')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-on-dark"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block border-b border-[rgba(241,234,218,0.12)] py-4 text-h3',
                        active ? 'text-[var(--gold)]' : 'text-on-dark'
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center justify-between gap-4 border-t border-[rgba(241,234,218,0.15)] px-5 py-5">
            <LangToggle />
            <ButtonLink href="/jogajog" onDark size="sm">
              {tActions('volunteer')}
            </ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
}
