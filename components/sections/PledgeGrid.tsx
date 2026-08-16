import { useLocale } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { pledges as allPledges, type Pledge } from '@/content/pledges';
import type { Locale } from '@/content/types';
import { localeNumber } from '@/lib/utils';

/** Section 8.3 — অঙ্গীকার কার্ড grid (হোমে top 6, অঙ্গীকার পেজে ১১টি)। */
export function PledgeGrid({ limit }: { limit?: number }) {
  const locale = useLocale() as Locale;
  const list: Pledge[] = limit ? allPledges.slice(0, limit) : allPledges;

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((pledge, index) => (
        <Reveal as="li" key={pledge.id} delay={(index % 3) * 60}>
          <Card hover className="h-full">
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-pill bg-ivory-2 text-green-800">
                <Icon name={pledge.icon} />
              </span>
              <span className="font-ui text-xs text-[var(--gold)]">
                {localeNumber(String(pledge.id).padStart(2, '0'), locale)}
              </span>
            </div>
            <h3 className="mt-5 text-h3 text-green-800">
              {pledge.title[locale]}
            </h3>
            <p className="mt-2 text-sm text-muted">{pledge.line[locale]}</p>
          </Card>
        </Reveal>
      ))}
    </ul>
  );
}
