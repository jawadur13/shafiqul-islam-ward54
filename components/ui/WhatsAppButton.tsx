import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { candidate } from '@/content/candidate';
import { DisabledButton, ExternalButton } from './Button';

/**
 * Section 8.7b — নম্বর `[TBD]`।
 * NEXT_PUBLIC_WHATSAPP বসালে বাটন সক্রিয় হবে; ততক্ষণ disabled + "শীঘ্রই"।
 */
export function WhatsAppButton({
  size = 'md',
  onDark = false,
  variant = 'primary',
}: {
  size?: 'sm' | 'md' | 'lg';
  onDark?: boolean;
  variant?: 'primary' | 'secondary';
}) {
  const t = useTranslations('actions');
  const number = candidate.whatsapp?.replace(/\D/g, '');

  if (!number) {
    return (
      <DisabledButton
        size={size}
        onDark={onDark}
        variant={variant}
        title={t('whatsappSoon')}
      >
        <MessageCircle size={18} aria-hidden="true" />
        {t('whatsappSoon')}
      </DisabledButton>
    );
  }

  return (
    <ExternalButton
      href={`https://wa.me/${number}`}
      size={size}
      onDark={onDark}
      variant={variant}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {t('whatsapp')}
    </ExternalButton>
  );
}
