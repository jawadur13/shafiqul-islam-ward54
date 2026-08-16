// Section 4 / 9 — সব কনটেন্টের bilingual shape।
export type L = { bn: string; en: string };

export type Locale = 'bn' | 'en';

/** L অবজেক্ট থেকে locale অনুযায়ী স্ট্রিং নেয়। */
export function t(value: L, locale: Locale): string {
  return value[locale];
}
