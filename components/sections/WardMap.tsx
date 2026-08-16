import { useLocale, useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { mohollas } from '@/content/ward';
import type { Locale } from '@/content/types';

/**
 * Section 8.5a — মহল্লা তালিকা, green section।
 * আসল geo-map নেই, তাই পাশের আউটলাইনটা নিছক আলংকারিক — ভৌগোলিক দাবি নয়।
 */
export function WardMap() {
  const locale = useLocale() as Locale;
  const t = useTranslations('ward');

  return (
    <section className="bg-green-800 py-section-y text-on-dark">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="mx-auto w-full max-w-[280px] text-[var(--gold)] opacity-70">
          <DecorativeOutline />
        </div>

        <div>
          <Eyebrow onDark>{t('eyebrow')}</Eyebrow>
          <h2 className="mt-4 text-h2 text-on-dark">{t('mohollaHeading')}</h2>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {mohollas.map((moholla) => (
              <li key={moholla.en}>
                <Badge tone="onDark">{moholla[locale]}</Badge>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-ui text-xs text-on-dark-muted">
            {t('mohollaNote')}
          </p>
        </div>
      </Container>
    </section>
  );
}

/** নিছক আলংকারিক outline — কোনো প্রকৃত সীমানা নয়। */
function DecorativeOutline() {
  return (
    <svg
      viewBox="0 0 200 240"
      aria-hidden="true"
      className="h-auto w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
    >
      <path d="M42 210 L28 150 L46 92 L92 44 L150 34 L176 74 L168 132 L182 178 L138 214 L86 206 Z" />
      <path
        d="M92 44 L96 118 L168 132"
        strokeDasharray="4 7"
        opacity={0.7}
      />
      <path d="M46 92 L96 118 L86 206" strokeDasharray="4 7" opacity={0.7} />
      <circle cx="96" cy="118" r="4.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
