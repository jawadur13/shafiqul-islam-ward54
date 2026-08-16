import { Award } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';
import { recognitions } from '@/content/work';
import type { Locale } from '@/content/types';

/** Section 8.4d — স্বীকৃতি strip। */
export function Achievements() {
  const locale = useLocale() as Locale;

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {recognitions.map((item, index) => (
        <Reveal as="li" key={item.en} delay={(index % 2) * 60}>
          <div className="flex items-start gap-3 border-t border-line pt-4">
            <Award
              size={18}
              className="mt-1 shrink-0 text-[var(--gold)]"
              aria-hidden="true"
            />
            <span className="text-body text-ink">{item[locale]}</span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
