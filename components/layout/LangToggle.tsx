'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

/** Section 4/7 — ছোট "বাং / EN" toggle; বর্তমান path ধরে অন্য locale-এ যায়। */
export function LangToggle({ onDark = true }: { onDark?: boolean }) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('header');
  const other = locale === 'bn' ? 'en' : 'bn';

  return (
    <Link
      href={pathname}
      locale={other}
      aria-label={t('langToggle')}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 font-ui text-xs transition-colors duration-[var(--dur)]',
        onDark
          ? 'border-[rgba(241,234,218,0.35)] text-on-dark hover:border-[var(--gold)]'
          : 'border-line text-ink hover:border-maroon'
      )}
    >
      <span className={cn(locale !== 'bn' && 'opacity-50')}>{t('bnLabel')}</span>
      <span aria-hidden="true" className="opacity-40">
        /
      </span>
      <span className={cn(locale !== 'en' && 'opacity-50')}>{t('enLabel')}</span>
    </Link>
  );
}
