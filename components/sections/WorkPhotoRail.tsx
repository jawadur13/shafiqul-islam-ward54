import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { publicAssetExists } from '@/lib/assets';
import { cn } from '@/lib/utils';

/** ৬টা স্লট — যেটা যেটা সত্যিই আছে শুধু সেগুলোই দেখানো হয়। */
const SLOTS = [1, 2, 3, 4, 5, 6];
/** যে ফরম্যাটেই ছবি দেওয়া হোক, প্রথম যেটা পাওয়া যায় সেটাই নেওয়া হয়। */
const EXTENSIONS = ['webp', 'jpg', 'jpeg', 'png'];

/**
 * lead সারিটা পুরো রেল চওড়া (৪২০px), বাকিগুলো অর্ধেক (৪২০-১৬)/২ = ২০২px।
 * ৪২০ ∶ ২০২ ≈ 2.08 — এই অনুপাতে সারি ভাগ করলে ছোট-বড় সব টাইলের
 * aspect ratio এক থাকে, উচ্চতা যাই হোক।
 */
const LEAD_ROW_FR = '2.08fr';

/**
 * Section 8.4b — কাজের সাধারণ ছবি (কোনো নির্দিষ্ট ঘটনার সাথে বাঁধা নয়,
 * তাই caption/alt নেই — timeline-এর লেখাই তথ্য বহন করে)।
 * শুধু server component থেকে কল করা যাবে (fs ব্যবহার করে)।
 */
export function workPhotos(): string[] {
  return SLOTS.map((n) =>
    EXTENSIONS.map((ext) => `/img/work/work-${n}.${ext}`).find(publicAssetExists)
  ).filter((src): src is string => Boolean(src));
}

/**
 * দুই কলামের mosaic — বড় স্ক্রিনে timeline-এর পাশের রেলে, ছোট স্ক্রিনে নিচে।
 * বিজোড় সংখ্যায় প্রথম ছবিটা দুই কলাম জুড়ে বসে, তাই শেষ সারিতে ফাঁকা ঘর থাকে না।
 *
 * lg-তে রেলটা timeline-এর সমান উচ্চতা নেয় (h-full + fr সারি), তাই দুই
 * কলামের নিচের প্রান্ত একই লাইনে শেষ হয়। টাইলের ভেতরে ছবি object-cover,
 * তাই উচ্চতা বদলালেও ছবি বিকৃত হয় না — শুধু crop বদলায়।
 */
export function WorkPhotoRail({ photos }: { photos: string[] }) {
  if (photos.length === 0) return null;

  const leadSpansFull = photos.length % 2 === 1;
  // ২টার কম হলে টান-টান করলে ছবি অস্বাভাবিক লম্বা দেখায় — তখন স্বাভাবিক 4:3
  const stretchToTimeline = photos.length >= 3;

  const bodyRows = Math.ceil((photos.length - (leadSpansFull ? 1 : 0)) / 2);
  const railRows = [
    ...(leadSpansFull ? [LEAD_ROW_FR] : []),
    ...Array.from({ length: bodyRows }, () => '1fr'),
  ].join(' ');

  return (
    <ul
      className={cn(
        'grid grid-cols-2 gap-3 sm:gap-4',
        stretchToTimeline && 'lg:h-full lg:grid-rows-[var(--rail-rows)]'
      )}
      style={
        stretchToTimeline
          ? ({ '--rail-rows': railRows } as React.CSSProperties)
          : undefined
      }
    >
      {photos.map((src, index) => {
        const isLead = leadSpansFull && index === 0;
        return (
          <Reveal
            as="li"
            key={src}
            delay={(index % 3) * 60}
            className={cn(isLead && 'col-span-2')}
          >
            <div
              className={cn(
                'relative aspect-[4/3] overflow-hidden rounded-md border border-[rgba(196,162,76,0.45)] shadow-sm',
                stretchToTimeline && 'lg:aspect-auto lg:h-full'
              )}
            >
              <Image
                src={src}
                alt=""
                aria-hidden="true"
                fill
                sizes={
                  isLead
                    ? '(max-width: 1023px) 100vw, 420px'
                    : '(max-width: 1023px) 50vw, 205px'
                }
                className="object-cover"
              />
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}
