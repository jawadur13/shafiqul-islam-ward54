import { useLocale, useTranslations } from 'next-intl';
import { mediaOutlets } from '@/content/quotes';
import type { Locale } from '@/content/types';

/** Section 8.6c — শুধু outlet নাম, কোনো ভুয়া লিংক নয়। */
export function MediaStrip() {
  const locale = useLocale() as Locale;
  const t = useTranslations('support');

  return (
    <div>
      <ul className="flex flex-wrap items-center gap-x-10 gap-y-5">
        {mediaOutlets.map((outlet) => (
          <li key={outlet.en} className="text-h3 text-green-800 opacity-80">
            {outlet[locale]}
          </li>
        ))}
      </ul>
      <p className="mt-6 font-ui text-xs text-muted">{t('mediaNote')}</p>
    </div>
  );
}
