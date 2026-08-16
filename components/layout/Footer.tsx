import { Facebook, MapPin, Youtube } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from './Container';
import { navItems } from './nav-items';
import { Badge } from '@/components/ui/Badge';
import { Divider } from '@/components/ui/Divider';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { candidate } from '@/content/candidate';
import type { Locale } from '@/content/types';

/** Section 7 — green-900। */
export function Footer() {
  const t = useTranslations('nav');
  const tFooter = useTranslations('footer');
  const locale = useLocale() as Locale;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-on-dark">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-3">
          {/* বাঁয়ে — পরিচয় */}
          <div>
            <p className="text-h3 text-on-dark">{candidate.name[locale]}</p>
            <p className="mt-2 text-sm text-on-dark-muted">
              {candidate.post[locale]}, {candidate.ward[locale]}
            </p>
            <p className="mt-4 text-sm text-on-dark-muted">
              {candidate.candidacy[locale]} · {candidate.party[locale]}
            </p>
            <Badge tone="gold" className="mt-5">
              {tFooter('symbolChip')}
            </Badge>
          </div>

          {/* মাঝে — quick nav */}
          <nav aria-label={tFooter('quickNav')}>
            <p className="font-ui text-xs uppercase tracking-[0.12em] text-[var(--gold)]">
              {tFooter('quickNav')}
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-on-dark-muted transition-colors duration-[var(--dur)] hover:text-on-dark"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ডানে — যোগাযোগ */}
          <div>
            <p className="font-ui text-xs uppercase tracking-[0.12em] text-[var(--gold)]">
              {tFooter('reach')}
            </p>
            <div className="mt-5">
              <WhatsAppButton size="sm" onDark variant="secondary" />
            </div>

            {/* [TBD: FB/YouTube — নতুন খোলা হবে] */}
            <div className="mt-6 flex items-center gap-3">
              <SocialChip
                href={candidate.facebook}
                label="Facebook"
                icon={<Facebook size={16} aria-hidden="true" />}
              />
              <SocialChip
                href={candidate.youtube}
                label="YouTube"
                icon={<Youtube size={16} aria-hidden="true" />}
              />
            </div>
            <p className="mt-3 text-xs text-on-dark-muted">
              {tFooter('socialSoon')}
            </p>

            <p className="mt-6 flex items-start gap-2 text-sm text-on-dark-muted">
              <MapPin size={16} className="mt-1 shrink-0" aria-hidden="true" />
              <span>
                <span className="block font-ui text-xs uppercase tracking-[0.12em] text-on-dark-muted">
                  {tFooter('campOffice')}
                </span>
                {candidate.campOffice[locale]}
              </span>
            </p>
          </div>
        </div>

        <Divider className="mt-12" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {candidate.name[locale]}. {tFooter('rights')}
          </p>
          <p>{tFooter('poweredBy')}</p>
        </div>
      </Container>
    </footer>
  );
}

/** লিংক না থাকলে inactive chip — ভুয়া লিংক নয় (Section 11/12)। */
function SocialChip({
  href,
  label,
  icon,
}: {
  href: string | null;
  label: string;
  icon: React.ReactNode;
}) {
  const base =
    'inline-flex h-9 w-9 items-center justify-center rounded-pill border border-[rgba(241,234,218,0.25)]';

  if (!href) {
    return (
      <span
        aria-disabled="true"
        aria-label={label}
        title={label}
        className={`${base} text-on-dark-muted opacity-45`}
      >
        {icon}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${base} text-on-dark transition-colors duration-[var(--dur)] hover:border-[var(--gold)] hover:text-[var(--gold)]`}
    >
      {icon}
    </a>
  );
}
