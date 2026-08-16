'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { mohollas } from '@/content/ward';
import type { Locale } from '@/content/types';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'sending' | 'success' | 'error';

const helpKeys = ['campaign', 'volunteer', 'info', 'event'] as const;

/**
 * Section 8.7a / 10 — controlled inputs + honeypot; native form submit নয়,
 * fetch('/api/volunteer') দিয়ে পাঠায়।
 */
export function VolunteerForm() {
  const locale = useLocale() as Locale;
  const t = useTranslations('form');

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [area, setArea] = useState('');
  const [help, setHelp] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState(''); // honeypot
  const [status, setStatus] = useState<Status>('idle');
  const [fieldError, setFieldError] = useState<string | null>(null);

  const toggleHelp = (key: string) => {
    setHelp((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key]
    );
  };

  const submit = async () => {
    setFieldError(null);

    if (!name.trim()) {
      setFieldError(t('nameRequired'));
      return;
    }
    if (!/^01[3-9]\d{8}$/.test(mobile.trim())) {
      setFieldError(t('mobileInvalid'));
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          mobile: mobile.trim(),
          area,
          help: help.map((key) => t(`helpOptions.${key}`)),
          message: message.trim(),
          locale,
          company, // honeypot — ভরা থাকলে সার্ভার চুপচাপ বাদ দেয়
        }),
      });

      if (!res.ok) throw new Error(`status ${res.status}`);

      setStatus('success');
      setName('');
      setMobile('');
      setArea('');
      setHelp([]);
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p
        role="status"
        className="rounded-md border border-line bg-white p-6 text-lg text-green-800"
      >
        {t('success')}
      </p>
    );
  }

  return (
    <div className="rounded-md border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t('name')} required requiredLabel={t('required')}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('namePlaceholder')}
            autoComplete="name"
            className={inputClass}
          />
        </Field>

        <Field label={t('mobile')} required requiredLabel={t('required')}>
          <input
            type="tel"
            inputMode="numeric"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder={t('mobilePlaceholder')}
            autoComplete="tel"
            className={inputClass}
          />
        </Field>

        <Field label={t('area')} className="sm:col-span-2">
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className={inputClass}
          >
            <option value="">{t('areaPlaceholder')}</option>
            {mohollas.map((moholla) => (
              <option key={moholla.en} value={moholla.en}>
                {moholla[locale]}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="font-ui text-sm text-muted">{t('help')}</legend>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
          {helpKeys.map((key) => (
            <label
              key={key}
              className="inline-flex cursor-pointer items-center gap-2 text-sm text-ink"
            >
              <input
                type="checkbox"
                checked={help.includes(key)}
                onChange={() => toggleHelp(key)}
                className="h-4 w-4 accent-[var(--green-800)]"
              />
              {t(`helpOptions.${key}`)}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <Field
          label={`${t('message')} (${t('messageOptional')})`}
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t('messagePlaceholder')}
            rows={4}
            className={cn(inputClass, 'resize-y')}
          />
        </Field>
      </div>

      {/* honeypot — মানুষ দেখে না, বট ভরে ফেলে */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
      </div>

      {(fieldError || status === 'error') && (
        <p role="alert" className="mt-6 text-sm text-maroon">
          {fieldError ?? t('error')}
        </p>
      )}

      <div className="mt-7">
        <Button
          type="button"
          onClick={submit}
          disabled={status === 'sending'}
          size="lg"
        >
          {status === 'sending' ? t('sending') : t('submit')}
        </Button>
      </div>
    </div>
  );
}

const inputClass =
  'mt-2 w-full rounded-sm border border-line bg-ivory px-4 py-3 text-body text-ink placeholder:text-muted/70 focus:border-green-800 focus:outline-none';

function Field({
  label,
  children,
  required = false,
  requiredLabel,
  className,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  requiredLabel?: string;
  className?: string;
}) {
  return (
    <label className={cn('block', className)}>
      <span className="font-ui text-sm text-muted">
        {label}
        {required && (
          <span className="ml-1 text-maroon" title={requiredLabel}>
            *
          </span>
        )}
      </span>
      {children}
    </label>
  );
}
