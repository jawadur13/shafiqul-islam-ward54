import { ArrowRight } from 'lucide-react';
import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server';
import { Container, Section } from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/Button';
import { PullQuote } from '@/components/ui/PullQuote';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABand } from '@/components/sections/CTABand';
import { Hero } from '@/components/sections/Hero';
import { IntroStrip } from '@/components/sections/IntroStrip';
import { PledgeGrid } from '@/components/sections/PledgeGrid';
import { SloganBand } from '@/components/sections/SloganBand';
import { WorkCards } from '@/components/sections/WorkCards';
import { primaryQuote } from '@/content/quotes';
import { workHighlights } from '@/content/work';
import type { Locale } from '@/content/types';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return buildMetadata({ locale, page: 'home', pathname: '/' });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const tActions = await getTranslations('actions');
  const contentLocale = (await getLocale()) as Locale;

  return (
    <>
      <Hero />
      <SloganBand />
      <IntroStrip />

      {/* (d) অঙ্গীকার preview — top 6 */}
      <Section tone="ivory-2">
        <Container>
          <SectionHeading
            eyebrow={t('pledgesEyebrow')}
            title={t('pledgesTitle')}
          />
          <div className="mt-12">
            <PledgeGrid limit={6} />
          </div>
          <div className="mt-10">
            <ButtonLink href="/ongikar" variant="secondary">
              {tActions('allPledges')}
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* (e) কাজের highlight */}
      <Section tone="ivory">
        <Container>
          <SectionHeading eyebrow={t('workEyebrow')} title={t('workTitle')} />
          <div className="mt-12">
            <WorkCards items={workHighlights} />
          </div>
          <div className="mt-10">
            <ButtonLink href="/kaj" variant="secondary">
              {tActions('seeWork')}
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* (f) pull-quote */}
      <Section tone="white">
        <Container narrow>
          <PullQuote archMark>“{primaryQuote[contentLocale]}”</PullQuote>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
