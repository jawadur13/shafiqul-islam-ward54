import { useLocale } from 'next-intl';
import { PullQuote } from '@/components/ui/PullQuote';
import { Reveal } from '@/components/ui/Reveal';
import { quotes } from '@/content/quotes';
import type { Locale } from '@/content/types';

/** Section 8.6a — উক্তি প্রাচীর। */
export function QuoteWall() {
  const locale = useLocale() as Locale;

  return (
    <ul className="grid gap-10 sm:grid-cols-2 sm:gap-12">
      {quotes.map((quote, index) => (
        <Reveal as="li" key={quote.en} delay={(index % 2) * 60}>
          <PullQuote archMark={index === 0}>“{quote[locale]}”</PullQuote>
        </Reveal>
      ))}
    </ul>
  );
}
