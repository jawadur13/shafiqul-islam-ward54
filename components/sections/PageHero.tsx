import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

/** Section 8.2–8.7 — ভেতরের পেজগুলোর ছোট hero। */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-line bg-ivory-2 py-14 sm:py-20">
      <Container>
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
      </Container>
    </section>
  );
}
