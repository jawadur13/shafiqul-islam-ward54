import { ArrowRight } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container, Section } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHero } from '@/components/sections/PageHero';
import { PledgeGrid } from '@/components/sections/PledgeGrid';
import { priorityAreas } from '@/content/pledges';
import type { Locale } from '@/content/types';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return buildMetadata({ locale, page: 'pledges', pathname: '/ongikar' });
}

export default async function PledgesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('pledges');
  const tActions = await getTranslations('actions');

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        intro={t('intro')}
      />

      <Section tone="ivory">
        <Container>
          <PledgeGrid />
        </Container>
      </Section>

      <Section tone="ivory-2">
        <Container>
          <SectionHeading title={t('priorityHeading')} />
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {priorityAreas.map((area) => (
              <li key={area.en}>
                <Badge tone="ink">{area[locale]}</Badge>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <ButtonLink href="/jogajog">
              {tActions('standWithUs')}
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
