import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

/** Section 8.1g — green CTA band। */
export function CTABand() {
  const t = useTranslations('home');
  const tActions = useTranslations('actions');

  return (
    <section className="bg-green-800 py-16 text-on-dark">
      <Container className="flex flex-col items-center gap-8 text-center">
        <div>
          <h2 className="mx-auto max-w-[26ch] text-h2 text-on-dark">
            {t('ctaTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-lg text-on-dark-muted">
            {t('ctaSub')}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/jogajog" onDark size="lg">
            {tActions('volunteer')}
          </ButtonLink>
          <WhatsAppButton size="lg" onDark variant="secondary" />
        </div>
      </Container>
    </section>
  );
}
