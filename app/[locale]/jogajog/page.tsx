import { Facebook, MapPin, Youtube } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container, Section } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { PageHero } from '@/components/sections/PageHero';
import { VolunteerForm } from '@/components/sections/VolunteerForm';
import { candidate } from '@/content/candidate';
import type { Locale } from '@/content/types';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return buildMetadata({ locale, page: 'contact', pathname: '/jogajog' });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('contact');

  return (
    <>
      <PageHero title={t('title')} intro={t('intro')} />

      <Section tone="ivory">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* (a) স্বেচ্ছাসেবক ফর্ম */}
          <div>
            <h2 className="text-h2 text-green-800">{t('formHeading')}</h2>
            <div className="mt-8">
              <VolunteerForm />
            </div>
          </div>

          {/* (b) সরাসরি যোগাযোগ */}
          <div>
            <h2 className="text-h2 text-green-800">{t('directHeading')}</h2>

            <div className="mt-8">
              <WhatsAppButton size="lg" />
            </div>

            <Card tone="ivory" className="mt-8">
              <p className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-maroon"
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-ui text-xs uppercase tracking-[0.12em] text-muted">
                    {t('campOfficeHeading')}
                  </span>
                  <span className="mt-1 block text-body text-ink">
                    {candidate.campOffice[locale]}
                  </span>
                </span>
              </p>
            </Card>

            {/* (c) সোশ্যাল — [TBD] */}
            <div className="mt-10">
              <p className="font-ui text-xs uppercase tracking-[0.12em] text-muted">
                {t('socialHeading')}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                <li>
                  <SocialChip
                    href={candidate.facebook}
                    label="Facebook"
                    icon={<Facebook size={14} aria-hidden="true" />}
                  />
                </li>
                <li>
                  <SocialChip
                    href={candidate.youtube}
                    label="YouTube"
                    icon={<Youtube size={14} aria-hidden="true" />}
                  />
                </li>
              </ul>
              <p className="mt-3 text-xs text-muted">{t('socialSoon')}</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/** লিংক এলে সক্রিয়; না থাকলে নিষ্ক্রিয় chip — ভুয়া লিংক নয়। */
function SocialChip({
  href,
  label,
  icon,
}: {
  href: string | null;
  label: string;
  icon: React.ReactNode;
}) {
  if (!href) {
    return (
      <Badge tone="ink" className="opacity-55">
        {icon}
        {label}
      </Badge>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Badge tone="ink">
        {icon}
        {label}
      </Badge>
    </a>
  );
}
