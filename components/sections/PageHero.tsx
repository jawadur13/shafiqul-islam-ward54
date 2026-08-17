import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { publicAssetExists } from '@/lib/assets';

/** ব্যানারের ডিফল্ট ছবি — হোম ছাড়া সব পেজে এটাই বসে। */
const DEFAULT_BANNER = '/img/hero-banner.jpeg';

/** ছবির উপর সবুজ scrim — তিন স্তরে (Section 5.1-এর --green-900 = #14261a)।
 *  ছবিটা উজ্জ্বল (আকাশ + পানির প্রতিফলন), তাই লেখার কলামটা আলাদা করে
 *  গাঢ় করা — নইলে gold eyebrow-এর কনট্রাস্ট AA-তে পৌঁছায় না। */
const SCRIM_VERTICAL =
  'linear-gradient(180deg, rgba(20,38,26,0) 0%, rgba(20,38,26,0.18) 42%, rgba(20,38,26,0.62) 74%, rgba(20,38,26,0.88) 100%)';
const SCRIM_HORIZONTAL =
  'linear-gradient(90deg, rgba(20,38,26,0.72) 0%, rgba(20,38,26,0.55) 38%, rgba(20,38,26,0.12) 70%, rgba(20,38,26,0) 100%)';

/**
 * Section 8.2–8.7 — ভেতরের পেজগুলোর hero।
 * ব্যানার ছবি থাকলে full-bleed ছবি + সবুজ scrim, লেখা ivory/gold-এ।
 * ছবি না থাকলে আগের ivory ব্যান্ডই থাকে — ভুয়া ছবি বসানো হয় না (Section 11)।
 * `image={null}` দিলে কোনো পেজে ইচ্ছে করে ছবি বাদ দেওয়া যায়।
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image = DEFAULT_BANNER,
  focal = 'center',
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string | null;
  focal?: string;
}) {
  const banner = image && publicAssetExists(image) ? image : null;

  if (!banner) {
    return (
      <section className="border-b border-line bg-ivory-2 py-14 sm:py-20">
        <Container>
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
        </Container>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[340px] items-end overflow-hidden bg-green-900 sm:min-h-[400px] lg:min-h-[420px]">
      {/* ছবি — saturate কমানো, যাতে নীল আকাশ ব্র্যান্ডের সবুজের সাথে মেশে */}
      <Image
        src={banner}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="hero-zoom object-cover"
        style={{ objectPosition: focal, filter: 'saturate(0.55)' }}
      />

      {/* সমতল সবুজ টিন্ট */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[rgba(20,38,26,0.50)]"
      />
      {/* নিচের দিকে গাঢ় */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundImage: SCRIM_VERTICAL }}
      />
      {/* লেখার কলাম (বাঁ দিক) আলাদা করে গাঢ় */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundImage: SCRIM_HORIZONTAL }}
      />

      <Container className="relative w-full py-14 sm:py-16 lg:py-20">
        <SectionHeading
          as="h1"
          onDark
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />
      </Container>

      {/* সাইটের gold hairline — নিচের ivory সেকশন থেকে আলাদা করে */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-[var(--gold)] opacity-45"
      />
    </section>
  );
}
