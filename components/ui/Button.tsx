import { Link } from '@/i18n/navigation';
import type { AppPathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  onDark?: boolean;
  className?: string;
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-body',
  lg: 'px-8 py-4 text-lg',
};

function classesFor(
  variant: Variant,
  size: Size,
  onDark: boolean,
  className?: string
) {
  const variants: Record<Variant, string> = {
    // Section 5.1 — red-on-green এড়াতে dark ব্যাকগ্রাউন্ডে primary হয় ivory-fill
    primary: onDark
      ? 'bg-[var(--on-dark)] text-green-900 hover:bg-white'
      : 'bg-red text-white hover:bg-red-dark',
    secondary: onDark
      ? 'border border-[var(--on-dark)] text-on-dark hover:bg-[rgba(241,234,218,0.12)]'
      : 'border border-green-800 text-green-800 hover:bg-[rgba(28,52,36,0.06)]',
    ghost: onDark
      ? 'text-on-dark hover:text-white underline-offset-4 hover:underline'
      : 'text-maroon hover:underline underline-offset-4',
  };

  return cn(
    'inline-flex items-center justify-center gap-2 rounded-pill font-ui tracking-wide',
    'transition-colors duration-[var(--dur)] ease-[var(--ease)]',
    'disabled:cursor-not-allowed disabled:opacity-55',
    variant !== 'ghost' && sizes[size],
    variant === 'ghost' && 'px-0 py-1 text-sm',
    variants[variant],
    className
  );
}

/** অভ্যন্তরীণ রুট — next-intl-এর localized Link। */
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  onDark = false,
  className,
}: BaseProps & { href: AppPathname }) {
  return (
    <Link href={href} className={classesFor(variant, size, onDark, className)}>
      {children}
    </Link>
  );
}

/** বাইরের লিংক (WhatsApp ইত্যাদি)। */
export function ExternalButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  onDark = false,
  className,
}: BaseProps & { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classesFor(variant, size, onDark, className)}
    >
      {children}
    </a>
  );
}

/** লিংক নেই এমন অবস্থা — যেমন WhatsApp নম্বর এখনো আসেনি। */
export function DisabledButton({
  children,
  variant = 'primary',
  size = 'md',
  onDark = false,
  className,
  title,
}: BaseProps & { title?: string }) {
  return (
    <span
      aria-disabled="true"
      title={title}
      className={cn(
        classesFor(variant, size, onDark, className),
        'cursor-not-allowed opacity-55'
      )}
    >
      {children}
    </span>
  );
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onDark = false,
  className,
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classesFor(variant, size, onDark, className)} {...rest}>
      {children}
    </button>
  );
}
