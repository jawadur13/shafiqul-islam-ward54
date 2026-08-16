import Image from 'next/image';
import { ArchFrame } from './ArchFrame';
import { publicAssetExists } from '@/lib/assets';
import { cn } from '@/lib/utils';

/**
 * Section 8.1a / 11 — প্রার্থীর ছবি।
 * public/img/hero-candidate.png বসালে আপনা থেকে দেখাবে; না থাকলে
 * খিলানের ভেতরে নিরপেক্ষ placeholder থাকে (ভুয়া ছবি নয়)।
 */
export function CandidatePortrait({
  src = '/img/hero-candidate.png',
  alt,
  className,
  priority = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const exists = publicAssetExists(src);

  return (
    <ArchFrame className={cn('aspect-[4/5] w-full', className)}>
      {exists ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 90vw, 40vw"
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <PortraitPlaceholder />
      )}
    </ArchFrame>
  );
}

/** নিরপেক্ষ placeholder — সবুজ wash + খিলানের ভেতরে শান্ত টেক্সচার। */
export function PortraitPlaceholder() {
  return (
    <div className="relative h-full w-full bg-gradient-to-b from-[var(--green-700)] to-[var(--green-900)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, var(--gold) 0 1px, transparent 1px 14px)',
        }}
      />
    </div>
  );
}
