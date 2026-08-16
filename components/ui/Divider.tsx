import { cn } from '@/lib/utils';

/** Gold hairline — ornament হিসেবেই, restraint-এ (Section 5.1)। */
export function Divider({
  className,
  centered = false,
}: {
  className?: string;
  centered?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'h-px w-full bg-[var(--gold)] opacity-45',
        centered && 'mx-auto max-w-[120px]',
        className
      )}
    />
  );
}
