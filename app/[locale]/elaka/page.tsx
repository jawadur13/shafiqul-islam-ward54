import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container, Section } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABand } from '@/components/sections/CTABand';
import { PageHero } from '@/components/sections/PageHero';
import { WardMap } from '@/components/sections/WardMap';
import { challenges, honestNote, wardFacts } from '@/content/ward';
import type { Locale } from '@/content/types';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return buildMetadata({ locale, page: 'ward', pathname: '/elaka' });
}

export default async function WardPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('ward');

  return (
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} />

      <WardMap />

      {/* (b) এক নজরে এলাকা */}
      <Section tone="white">
        <Container>
          <SectionHeading title={t('glanceHeading')} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {wardFacts.map((fact, index) => (
              <Reveal as="li" key={fact.label.en} delay={(index % 4) * 60}>
                <Card tone="ivory" className="h-full">
                  <p className="font-ui text-xs uppercase tracking-[0.12em] text-muted">
                    {fact.label[locale]}
                  </p>
                  <p className="mt-2 text-h3 text-green-800">
                    {fact.value[locale]}
                  </p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* (c) সমস্যা → লক্ষ্য */}
      <Section tone="ivory">
        <Container>
          <SectionHeading title={t('challengesHeading')} />

          <div className="mt-12 border-t border-line">
            <div className="hidden grid-cols-[0.4fr_1fr] gap-6 border-b border-line py-3 font-ui text-xs uppercase tracking-[0.12em] text-muted sm:grid">
              <span>{t('problemLabel')}</span>
              <span>{t('focusLabel')}</span>
            </div>
            <ul>
              {challenges.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.problem.en}
                  delay={(index % 4) * 60}
                  className="grid gap-1 border-b border-line py-5 sm:grid-cols-[0.4fr_1fr] sm:gap-6"
                >
                  <span className="text-h3 text-maroon">
                    {item.problem[locale]}
                  </span>
                  <span className="text-body text-ink">
                    {item.focus[locale]}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <p className="mt-10 max-w-narrow text-lg italic text-muted">
            “{honestNote[locale]}”
          </p>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
