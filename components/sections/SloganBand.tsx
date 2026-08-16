import { useLocale } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Divider } from '@/components/ui/Divider';
import { candidate } from '@/content/candidate';
import type { Locale } from '@/content/types';

/** Section 8.1b — full-width green band। */
export function SloganBand() {
  const locale = useLocale() as Locale;

  return (
    <section className="bg-green-800 py-14 text-on-dark sm:py-16">
      <Container className="text-center">
        <p className="mx-auto max-w-[24ch] text-h2 text-on-dark sm:max-w-[34ch]">
          {candidate.mainSlogan[locale]}
        </p>
        <Divider centered className="my-7" />
        <p className="text-lg italic text-on-dark-muted">
          “{candidate.sloganSub[locale]}”
        </p>
      </Container>
    </section>
  );
}
