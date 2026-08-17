import { ArrowRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Container, Section } from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { candidate } from '@/content/candidate';
import type { Locale } from '@/content/types';

/** Section 8.1c — এক নজরে প্রার্থী। */
export function IntroStrip() {
  const locale = useLocale() as Locale;
  const t = useTranslations('about');
  const tActions = useTranslations('actions');

  return (
    <Section tone="ivory">
      <Container narrow>
        <Reveal>
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <p className="mt-6 text-h3 leading-relaxed text-green-800">
            {candidate.intro[locale]}
          </p>
          <div className="mt-8">
            <ButtonLink href="/porichiti" variant="secondary">
              {tActions('readAbout')}
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
