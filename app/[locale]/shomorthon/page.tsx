import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container, Section } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABand } from '@/components/sections/CTABand';
import { Endorsements } from '@/components/sections/Endorsements';
import { MediaStrip } from '@/components/sections/MediaStrip';
import { PageHero } from '@/components/sections/PageHero';
import { QuoteWall } from '@/components/sections/QuoteWall';
import type { Locale } from '@/content/types';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return buildMetadata({ locale, page: 'support', pathname: '/shomorthon' });
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('support');

  return (
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} />

      <Section tone="ivory">
        <Container>
          <SectionHeading title={t('quotesHeading')} />
          <div className="mt-12">
            <QuoteWall />
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeading title={t('voicesHeading')} />
          <div className="mt-10">
            <Endorsements />
          </div>
        </Container>
      </Section>

      <Section tone="ivory-2">
        <Container>
          <SectionHeading title={t('mediaHeading')} />
          <div className="mt-10">
            <MediaStrip />
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
