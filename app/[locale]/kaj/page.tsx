import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container, Section } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Achievements } from '@/components/sections/Achievements';
import { CTABand } from '@/components/sections/CTABand';
import { PageHero } from '@/components/sections/PageHero';
import { WorkCards, WorkTimeline } from '@/components/sections/WorkCards';
import {
  WorkPhotoRail,
  workPhotos,
} from '@/components/sections/WorkPhotoRail';
import { affiliations, crisisWork, socialWork } from '@/content/work';
import type { Locale } from '@/content/types';
import { buildMetadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return buildMetadata({ locale, page: 'work', pathname: '/kaj' });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('work');
  // ছবি বসানো থাকলেই timeline-এর পাশে কলামটা খোলে; নইলে আগের মতোই narrow
  const photos = workPhotos();

  return (
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} />

      <Section tone="ivory">
        <Container>
          <SectionHeading title={t('socialHeading')} />
          <div className="mt-12">
            <WorkCards items={socialWork} />
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeading title={t('crisisHeading')} />
          <div
            className={cn(
              'mt-12',
              photos.length > 0
                ? 'grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-14'
                : 'max-w-narrow'
            )}
          >
            <div className="max-w-narrow">
              <WorkTimeline items={crisisWork} />
            </div>
            <WorkPhotoRail photos={photos} />
          </div>
        </Container>
      </Section>

      <Section tone="ivory-2">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-h2 text-green-800">
              {t('affiliationsHeading')}
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {affiliations.map((item) => (
                <li key={item}>
                  <Badge tone="ink">{item}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-h2 text-green-800">
              {t('recognitionHeading')}
            </h2>
            <div className="mt-8">
              <Achievements />
            </div>
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
