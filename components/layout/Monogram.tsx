import { ArchMark } from '@/components/ui/ArchFrame';
import { cn } from '@/lib/utils';

/**
 * [TBD: logo] — আসল মনোগ্রাম এলে এই কম্পোনেন্টের ভেতরটা বদলালেই হবে।
 * ততক্ষণ: খিলানের ভেতরে "শ" (Section 7)।
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'relative inline-flex h-10 w-9 shrink-0 items-center justify-center',
        className
      )}
    >
      <span className="absolute inset-0 text-[var(--gold)]">
        <ArchMark />
      </span>
      {/* মনোগ্রাম display টাইপ; English locale-এও বাংলা ফন্টেই থাকবে */}
      <span className="relative mt-1 font-bn-display text-lg leading-none text-on-dark">
        শ
      </span>
    </span>
  );
}
