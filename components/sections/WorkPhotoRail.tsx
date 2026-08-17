import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { publicAssetExists } from '@/lib/assets';
import { cn } from '@/lib/utils';

/** ৬টা স্লট — যেটা যেটা সত্যিই আছে শুধু সেগুলোই দেখানো হয়। */
const SLOTS = [1, 2, 3, 4, 5, 6];
/** যে ফরম্যাটেই ছবি দেওয়া হোক, প্রথম যেটা পাওয়া যায় সেটাই নেওয়া হয়। */
const EXTENSIONS = ['webp', 'jpg', 'jpeg', 'png'];

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
 */
export function WorkPhotoRail({ photos }: { photos: string[] }) {
  if (photos.length === 0) return null;

  const leadSpansFull = photos.length % 2 === 1;

  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4">
      {photos.map((src, index) => {
        const isLead = leadSpansFull && index === 0;
        return (
          <Reveal
            as="li"
            key={src}
            delay={(index % 3) * 60}
            className={cn(isLead && 'col-span-2')}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[rgba(196,162,76,0.45)] shadow-sm">
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
