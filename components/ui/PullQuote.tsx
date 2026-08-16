import { cn } from '@/lib/utils';
import { ArchMark } from './ArchFrame';

/** Section 7 — বড় serif, বাঁয়ে maroon vertical rule, optional arch-mark। */
export function PullQuote({
  children,
  attribution,
  onDark = false,
  archMark = false,
  className,
}: {
  children: React.ReactNode;
  attribution?: string;
  onDark?: boolean;
  archMark?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        'relative border-l-2 pl-6 sm:pl-8',
        onDark ? 'border-[var(--gold)]' : 'border-maroon',
        className
      )}
    >
      {archMark && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute -top-2 right-0 hidden h-10 w-8 opacity-40 sm:block',
            onDark ? 'text-[var(--gold)]' : 'text-maroon'
          )}
        >
          <ArchMark />
        </span>
      )}
      <blockquote
        className={cn(
          'text-h3 sm:text-h2',
          onDark ? 'text-on-dark' : 'text-green-800'
        )}
      >
        {children}
      </blockquote>
      {attribution && (
        <figcaption
          className={cn(
            'mt-4 font-ui text-sm',
            onDark ? 'text-on-dark-muted' : 'text-muted'
          )}
        >
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
