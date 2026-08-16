import { cn } from '@/lib/utils';

/** ছোট pill — ওয়ার্ড chip, মার্কা placeholder, মহল্লা tag ইত্যাদি। */
export function Badge({
  children,
  tone = 'gold',
  className,
}: {
  children: React.ReactNode;
  tone?: 'gold' | 'ink' | 'onDark' | 'red';
  className?: string;
}) {
  const tones = {
    gold: 'border-[var(--gold)] text-[var(--gold)]',
    ink: 'border-line bg-white text-ink',
    onDark: 'border-[rgba(241,234,218,0.35)] text-on-dark',
    red: 'border-transparent bg-red text-white',
  } as const;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-pill border px-3 py-1 font-ui text-xs',
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
