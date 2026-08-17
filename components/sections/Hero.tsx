import { Star } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import { Container } from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/Button';
import { CandidatePortrait } from '@/components/ui/CandidatePortrait';
import { PartySymbol } from '@/components/ui/PartySymbol';
import { candidate } from '@/content/candidate';
import type { Locale } from '@/content/types';
import { cn } from '@/lib/utils';

/** Section 8.1a — বাঁয়ে display হেডলাইন, ডানে খিলান-ফ্রেমে ছবি, ডান-উপরে badge। */
export async function Hero() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('home');
  const tActions = await getTranslations('actions');

  return (
    <section className="relative overflow-hidden bg-ivory">
      {/* খুব হালকা সবুজ wash (Section 8.1a) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_85%_0%,rgba(28,52,36,0.10),transparent_60%)]"
      />

      <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* মোবাইলে ছবি আগে (Section 13) */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-[290px] sm:max-w-[360px]">
            <CandidatePortrait
              alt={`${candidate.name[locale]} — ${candidate.post[locale]}`}
              priority
              withMap
            />
            <VoteBadge
              top={t('badgeTop')}
              bottom={t('badgeBottom')}
              className="absolute -right-2 -top-4 sm:-right-6 sm:-top-6"
            />
            <p className="mt-5 text-center font-ui text-sm text-muted">
              {candidate.name[locale]} · {candidate.post[locale]}
            </p>
          </div>
        </div>

        <div className="order-2 lg:order-1">
          {/* দলীয় প্রতীক — হেডলাইনের প্রথম লাইনের মাঝ বরাবর।
              প্রথম লাইনের কেন্দ্র breakpoint ভেদে সরে যায় (কলাম চওড়া হলে
              লাইনটা কলামের বাঁ দিকে পড়ে), তাই মেপে নেওয়া মান বসানো।
              -translate-x-1/2 প্রতীকের নিজের কেন্দ্রকে ওই বিন্দুতে আনে। */}
          <PartySymbol
            label={`${t('partySymbol')} — ${candidate.party[locale]}`}
            className={cn(
              'mb-8 w-28 -translate-x-1/2 text-green-800 sm:w-36',
              locale === 'bn'
                ? 'ml-[38%] sm:ml-[24%] md:ml-[21%] lg:ml-[39%]'
                : 'ml-[34%]'
            )}
          />

          <h1 className="display-line whitespace-pre-line text-balance text-maroon">
            {candidate.heroLine[locale]}
          </h1>

          <p className="mt-7 max-w-[52ch] text-lg text-muted">
            {candidate.heroSub[locale]}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="/jogajog" size="lg">
              {tActions('volunteer')}
            </ButtonLink>
            <ButtonLink href="/ongikar" variant="secondary" size="lg">
              {tActions('seePledges')}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** ডান-উপরের circular badge — মার্কা `[TBD]`, এখন নিরপেক্ষ star motif। */
function VoteBadge({
  top,
  bottom,
  className,
}: {
  top: string;
  bottom: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-24 w-24 flex-col items-center justify-center rounded-pill border border-[var(--gold)] bg-ivory text-center shadow-sm sm:h-28 sm:w-28 ${className ?? ''}`}
    >
      <span className="font-ui text-[0.6rem] uppercase tracking-[0.14em] text-maroon">
        {top}
      </span>
      <Star
        size={20}
        className="my-1 text-[var(--gold)]"
        aria-hidden="true"
        fill="var(--gold)"
      />
      <span className="font-ui text-[0.6rem] uppercase tracking-[0.14em] text-green-800">
        {bottom}
      </span>
    </div>
  );
}
