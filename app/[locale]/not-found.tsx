import { useTranslations } from 'next-intl';
import { Container, Section } from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  const t = useTranslations('notFound');
  const tActions = useTranslations('actions');

  return (
    <Section tone="ivory">
      <Container narrow className="py-16 text-center">
        <h1 className="text-h1 text-green-800">{t('title')}</h1>
        <p className="mt-5 text-lg text-muted">{t('description')}</p>
        <div className="mt-9 flex justify-center">
          <ButtonLink href="/">{tActions('backHome')}</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
