import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container, Section } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { CandidatePortrait } from '@/components/ui/CandidatePortrait';
import { Card } from '@/components/ui/Card';
import { PullQuote } from '@/components/ui/PullQuote';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABand } from '@/components/sections/CTABand';
import { PageHero } from '@/components/sections/PageHero';
import { candidate } from '@/content/candidate';
import type { Locale } from '@/content/types';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return buildMetadata({ locale, page: 'about', pathname: '/porichiti' });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');

  const glance = [
    { label: t('fields.name'), value: candidate.name[locale] },
    { label: t('fields.nickname'), value: candidate.nickname[locale] },
    { label: t('fields.dob'), value: candidate.dob[locale] },
    { label: t('fields.religion'), value: candidate.religion[locale] },
    { label: t('fields.area'), value: candidate.area[locale] },
    { label: t('fields.profession'), value: candidate.profession[locale] },
  ];

  return (
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} />

      {/* (a) গল্প + ছবি */}
      <Section tone="ivory">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
          <div>
            <h2 className="text-h2 text-green-800">{t('storyHeading')}</h2>
            <div className="mt-8 space-y-6 text-lg text-ink">
              {candidate.story.map((paragraph) => (
                <p key={paragraph.en}>{paragraph[locale]}</p>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <CandidatePortrait
              alt={`${candidate.name[locale]} — ${candidate.post[locale]}`}
              withMap
            />
          </div>
        </Container>
      </Section>

      {/* (b) নিজের কণ্ঠে */}
      <Section tone="white">
        <Container narrow>
          <PullQuote archMark attribution={candidate.name[locale]}>
            “{candidate.personalQuote[locale]}”
          </PullQuote>
        </Container>
      </Section>

      {/* (c) এক নজরে */}
      <Section tone="ivory-2">
        <Container>
          <SectionHeading title={t('glanceHeading')} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {glance.map((item, index) => (
              <Reveal as="li" key={item.label} delay={(index % 3) * 60}>
                <Card className="h-full">
                  <p className="font-ui text-xs uppercase tracking-[0.12em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-2 text-h3 text-green-800">{item.value}</p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* (d) পরিবার · (e) শিক্ষা ও কর্মজীবন · (f) রাজনৈতিক পরিচয় */}
      <Section tone="ivory">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="text-h3 text-green-800">{t('familyHeading')}</h2>
            <p className="mt-4 text-body text-ink">{candidate.family[locale]}</p>
          </div>

          <div>
            <h2 className="text-h3 text-green-800">{t('educationHeading')}</h2>
            <ul className="mt-4 space-y-2 text-body text-ink">
              {candidate.education.map((item) => (
                <li key={item.en}>{item[locale]}</li>
              ))}
            </ul>
            <p className="mt-6 font-ui text-xs uppercase tracking-[0.12em] text-muted">
              {t('businessHeading')}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {candidate.businesses.map((business) => (
                <li key={business}>
                  <Badge tone="ink">{business}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-h3 text-green-800">{t('politicsHeading')}</h2>
            <p className="mt-4 text-body text-ink">
              {candidate.politics[locale]}
            </p>
            <p className="mt-4 text-sm text-muted">
              {candidate.candidacy[locale]} · {candidate.party[locale]}
            </p>
          </div>
        </Container>
      </Section>

      {/* (g) কেন নির্বাচন */}
      <Section tone="white">
        <Container narrow>
          <SectionHeading title={t('whyHeading')} />
          <p className="mt-8 text-lg text-ink">
            {candidate.whyStanding[locale]}
          </p>
        </Container>
      </Section>

      {/* (h) faith line */}
      <Section tone="ivory-2">
        <Container narrow>
          <PullQuote>“{candidate.faithLine[locale]}”</PullQuote>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
