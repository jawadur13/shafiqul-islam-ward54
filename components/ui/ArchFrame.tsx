import { cn } from '@/lib/utils';

/**
 * Section 5.4 — সাইটের signature: মেহরাব খিলান।
 * children-কে pointed-arch শেপে clip করে, উপরে gold hairline outline বসায়।
 * clipPath-টা লেআউটে একবার ঘোষণা করা আছে (ArchDefs)।
 */
export function ArchFrame({
  children,
  className,
  hairline = true,
}: {
  children: React.ReactNode;
  className?: string;
  hairline?: boolean;
}) {
  return (
    <div className={cn('relative', className)}>
      <div className="arch-clip relative h-full w-full overflow-hidden">
        {children}
      </div>
      {hairline && (
        <svg
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d={ARCH_PATH}
            fill="none"
            stroke="var(--gold)"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}
    </div>
  );
}

/** খিলানের পথ — clipPath আর hairline দুটোতেই একই জ্যামিতি। */
export const ARCH_PATH = 'M0,1 L0,0.42 Q0,0.10 0.5,0 Q1,0.10 1,0.42 L1,1 Z';

/** লেআউটে একবার রেন্ডার হয়; .arch-clip এই id ব্যবহার করে। */
export function ArchDefs() {
  return (
    <svg aria-hidden="true" className="absolute h-0 w-0" focusable="false">
      <defs>
        <clipPath id="mihrab-arch" clipPathUnits="objectBoundingBox">
          <path d={ARCH_PATH} />
        </clipPath>
      </defs>
    </svg>
  );
}

/** ছোট আলংকারিক খিলান — মনোগ্রাম/আইকনের ব্যাকড্রপ হিসেবে। */
export function ArchMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn('h-full w-full', className)}
    >
      <path
        d={ARCH_PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
