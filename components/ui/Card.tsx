import { cn } from '@/lib/utils';

/** Section 5.3 — ivory-র উপরে card: white/ivory-2 bg, hairline border। */
export function Card({
  children,
  className,
  tone = 'white',
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'white' | 'ivory' | 'dark';
  hover?: boolean;
}) {
  const tones = {
    white: 'bg-white border-line text-ink',
    ivory: 'bg-ivory-2 border-line text-ink',
    dark: 'bg-green-700 border-[rgba(196,162,76,0.35)] text-on-dark',
  } as const;

  return (
    <div
      className={cn(
        'rounded-md border p-6 shadow-sm',
        tones[tone],
        hover &&
          'transition-shadow duration-[var(--dur)] ease-[var(--ease)] hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
}
