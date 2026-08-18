import { PartySymbol } from '@/components/ui/PartySymbol';
import { cn } from '@/lib/utils';

/**
 * Header-এর মার্ক — দলীয় প্রতীক (দাঁড়িপাল্লা), সাদা রঙে।
 * Header-এর Link-এ ইতিমধ্যে aria-label আছে, তাই এখানে label দেওয়া হয়নি।
 * একই প্রতীক favicon-এও আছে — public/favicon.svg একসাথে বদলাতে হবে।
 */
export function Monogram({ className }: { className?: string }) {
  return <PartySymbol className={cn('w-10 shrink-0 text-white', className)} />;
}
