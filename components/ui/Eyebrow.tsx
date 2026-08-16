import { cn } from '@/lib/utils';

/**
 * Section 5.2 / 7 — বাংলায় ছোট maroon লেবেল + short rule;
 * English-এ uppercase tracked (globals.css-এর .eyebrow-text)।
 */
export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 text-xs',
        onDark ? 'text-[var(--gold)]' : 'text-maroon',
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'h-px w-8 shrink-0',
          onDark ? 'bg-[var(--gold)]' : 'bg-maroon'
        )}
      />
      <span className="eyebrow-text">{children}</span>
    </p>
  );
}
