import Image from 'next/image';
import { ArchFrame } from './ArchFrame';
import { publicAssetExists } from '@/lib/assets';
import { cn } from '@/lib/utils';

/**
 * Section 8.1a / 11 — প্রার্থীর ছবি খিলানের ভেতরে।
 * `withMap` দিলে পেছনে বাংলাদেশের মানচিত্র (আঙুলের ছাপ মোটিফ) বসে —
 * ছবির পেছনে, নিচে সবুজ ওয়াশ।
 * ছবির ফাইল না থাকলে নিরপেক্ষ placeholder থাকে, ভুয়া ছবি নয়।
 */
export function CandidatePortrait({
  src = '/img/hero-candidate.webp',
  alt,
  className,
  priority = false,
  withMap = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  withMap?: boolean;
}) {
  const exists = publicAssetExists(src);
  const mapExists = withMap && publicAssetExists('/img/map-bd.webp');

  return (
    <ArchFrame className={cn('aspect-[4/5] w-full', className)}>
      {/* সবুজ ওয়াশ — সব লেয়ারের নিচে */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--green-700)] via-[var(--green-800)] to-[var(--green-900)]" />

      {!exists && <PortraitTexture />}

      {mapExists && (
        <Image
          src="/img/map-bd.webp"
          alt=""
          aria-hidden="true"
          fill
          priority={priority}
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-contain object-center p-2 opacity-40"
        />
      )}

      {exists && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-contain object-bottom"
        />
      )}
    </ArchFrame>
  );
}

/** ছবি না থাকলে খিলানের ভেতরে শান্ত টেক্সচার। */
function PortraitTexture() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.14]"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, var(--gold) 0 1px, transparent 1px 14px)',
      }}
    />
  );
}
