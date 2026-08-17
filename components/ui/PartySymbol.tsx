import { cn } from '@/lib/utils';

/**
 * দলীয় প্রতীক — দাঁড়িপাল্লা (বাংলাদেশ জামায়াতে ইসলামী)।
 * currentColor-এ আঁকা, তাই যেখানে বসবে সেই টেক্সট কালার নেয়।
 *
 * ⚠️ এটা দলীয় প্রতীক — নির্বাচনী মার্কা নয়। ব্যালটের মার্কা বরাদ্দ হলে
 * hero badge আর footer chip-এর `[TBD]` placeholder আলাদাভাবে বদলাতে হবে।
 *
 * প্রস্থ caller ঠিক করে — এখানে `w-full` বসানো নেই, নাহলে caller-এর
 * `w-12`/`sm:w-24` ধরনের ক্লাস Tailwind-এর CSS ক্রমে হেরে যেত।
 */
export function PartySymbol({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label={label}
      className={cn('h-auto max-w-full', className)}
      fill="currentColor"
    >
      {/* খুঁটি — উপরে সরু ডগা */}
      <path d="M100 18c3.2 4.6 4.6 9.4 4.6 14.6V52h-9.2V32.6c0-5.2 1.4-10 4.6-14.6Z" />

      {/* দণ্ড — মাঝে মোটা, দুই দিকে সরু; নিচে কাঁটা */}
      <path d="M44 56.5c18-4.2 37.2-6.4 56-6.4s37.8 2.2 56 6.4v6.8c-14.6 3.2-30 5.2-45.6 6l-10.4 22-10.4-22c-15.6-.8-31-2.8-45.6-6v-6.8Z" />

      {/* দুই প্রান্তের কড়া */}
      <circle cx="44" cy="55" r="10" fill="none" stroke="currentColor" strokeWidth="7" />
      <circle cx="156" cy="55" r="10" fill="none" stroke="currentColor" strokeWidth="7" />

      {/* ঝুলন্ত দড়ি */}
      <g stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M44 65 8 150M44 65v85M44 65l36 85" />
        <path d="M156 65l-36 85M156 65v85M156 65l36 85" />
      </g>

      {/* বাঁ পাল্লা */}
      <ellipse cx="44" cy="150" rx="36" ry="8.5" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M8 150c0 19.9 16.1 36 36 36s36-16.1 36-36c-10 5.3-22.4 8-36 8s-26-2.7-36-8Z" />

      {/* ডান পাল্লা */}
      <ellipse cx="156" cy="150" rx="36" ry="8.5" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M120 150c0 19.9 16.1 36 36 36s36-16.1 36-36c-10 5.3-22.4 8-36 8s-26-2.7-36-8Z" />
    </svg>
  );
}
