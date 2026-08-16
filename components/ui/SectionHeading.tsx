import { cn } from '@/lib/utils';
import { Eyebrow } from './Eyebrow';

/** Section 7 — eyebrow + title + optional intro। */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  onDark = false,
  as: Tag = 'h2',
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  onDark?: boolean;
  as?: 'h1' | 'h2';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-narrow',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <Eyebrow
          onDark={onDark}
          className={align === 'center' ? 'justify-center' : undefined}
        >
          {eyebrow}
        </Eyebrow>
      )}
      <Tag
        className={cn(
          'mt-4',
          Tag === 'h1' ? 'text-h1' : 'text-h2',
          onDark ? 'text-on-dark' : 'text-green-800'
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            'mt-5 text-lg',
            onDark ? 'text-on-dark-muted' : 'text-muted'
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
