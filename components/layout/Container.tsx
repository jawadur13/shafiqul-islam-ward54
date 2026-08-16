import { cn } from '@/lib/utils';

export function Container({
  children,
  narrow = false,
  className,
}: {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-8',
        narrow ? 'max-w-narrow' : 'max-w-container',
        className
      )}
    >
      {children}
    </div>
  );
}

/** Section 5.3 — সেকশনের উল্লম্ব ছন্দ এক জায়গা থেকে। */
export function Section({
  children,
  tone = 'ivory',
  className,
  id,
}: {
  children: React.ReactNode;
  tone?: 'ivory' | 'ivory-2' | 'green' | 'green-deep' | 'white';
  className?: string;
  id?: string;
}) {
  const tones = {
    ivory: 'bg-ivory text-ink',
    'ivory-2': 'bg-ivory-2 text-ink',
    green: 'bg-green-800 text-on-dark',
    'green-deep': 'bg-green-900 text-on-dark',
    white: 'bg-white text-ink',
  } as const;

  return (
    <section id={id} className={cn('py-section-y', tones[tone], className)}>
      {children}
    </section>
  );
}
