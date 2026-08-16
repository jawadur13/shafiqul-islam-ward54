import { useLocale } from 'next-intl';
import { Badge } from '@/components/ui/Badge';
import { PullQuote } from '@/components/ui/PullQuote';
import { supporters, voterComment } from '@/content/quotes';
import type { Locale } from '@/content/types';

/**
 * Section 8.6b — এলাকাবাসীর কথা।
 * নামগুলো plain chip; ছবি বা বানানো উদ্ধৃতি নেই।
 */
export function Endorsements() {
  const locale = useLocale() as Locale;

  return (
    <div>
      <ul className="flex flex-wrap gap-2.5">
        {supporters.map((name) => (
          <li key={name}>
            <Badge tone="ink">{name}</Badge>
          </li>
        ))}
      </ul>

      <PullQuote
        className="mt-12"
        attribution={voterComment.attribution[locale]}
      >
        “{voterComment.text[locale]}”
      </PullQuote>
    </div>
  );
}
