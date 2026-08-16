/** ছোট classname joiner — নির্ভরতা ছাড়াই। */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}

/** ইংরেজি সংখ্যাকে বাংলা অঙ্কে বদলায় (যেখানে দরকার)। */
const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export function toBnDigits(input: string | number): string {
  return String(input).replace(/\d/g, (d) => bnDigits[Number(d)]);
}

/** locale অনুযায়ী সংখ্যা: বাংলায় বাংলা অঙ্ক, English-এ যেমন আছে। */
export function localeNumber(value: number | string, locale: string): string {
  return locale === 'bn' ? toBnDigits(value) : String(value);
}
