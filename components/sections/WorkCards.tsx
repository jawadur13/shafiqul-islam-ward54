import { useLocale } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import type { WorkItem } from '@/content/work';
import type { Locale } from '@/content/types';

/** Section 8.4a — feature grid। ছবি না থাকলে টেক্সট-only card (ভুয়া ছবি নয়)। */
export function WorkCards({
  items,
  columns = 3,
}: {
  items: WorkItem[];
  columns?: 2 | 3;
}) {
  const locale = useLocale() as Locale;

  return (
    <ul
      className={`grid gap-5 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}
    >
      {items.map((item, index) => (
        <Reveal as="li" key={item.id} delay={(index % 3) * 60}>
          <Card hover className="h-full">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-pill bg-ivory-2 text-green-800">
              <Icon name={item.icon} />
            </span>
            <h3 className="mt-5 text-h3 text-green-800">{item.title[locale]}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc[locale]}</p>
          </Card>
        </Reveal>
      ))}
    </ul>
  );
}

/** Section 8.4b — দুর্যোগে পাশে থাকার timeline। */
export function WorkTimeline({ items }: { items: WorkItem[] }) {
  const locale = useLocale() as Locale;

  return (
    <ol className="relative border-l border-line pl-6 sm:pl-8">
      {items.map((item, index) => (
        <Reveal as="li" key={item.id} delay={(index % 4) * 60} className="pb-9 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[7px] mt-2 inline-flex h-3.5 w-3.5 items-center justify-center rounded-pill border border-[var(--gold)] bg-ivory"
          />
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-maroon">
              <Icon name={item.icon} size={18} />
            </span>
            <div>
              <h3 className="text-h3 text-green-800">{item.title[locale]}</h3>
              <p className="mt-1 text-sm text-muted">{item.desc[locale]}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
