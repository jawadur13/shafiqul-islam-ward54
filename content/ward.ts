import type { L } from './types';

/**
 * Section 8.5a — মহল্লা তালিকা (প্রার্থীর পক্ষ থেকে confirm করা)।
 * `partial` = মহল্লার একাংশ ওয়ার্ড ৫৪-এর ভেতরে পড়ে।
 */
export type Moholla = L & { partial?: true };

export const mohollas: Moholla[] = [
  { bn: 'রাজাবাড়ী', en: 'Rajabari' },
  { bn: 'ভাটুলিয়া', en: 'Bhatulia' },
  { bn: 'গ্রাম ভাটুলিয়া', en: 'Gram Bhatulia' },
  { bn: 'কালিয়ারটেক', en: 'Kaliartek' },
  { bn: 'খায়েরটেক', en: 'Khairtek' },
  { bn: 'নয়ানীচালা', en: 'Nayanichala' },
  { bn: 'আশুতিয়া', en: 'Ashutia' },
  { bn: 'রোশাদিয়া', en: 'Roshadia', partial: true },
  { bn: 'ধউর', en: 'Dhaur', partial: true },
];

/**
 * Section 8.5b — এক নজরে এলাকা (public-safe শুধু)।
 * ⚠️ প্রতিদ্বন্দ্বী প্রার্থীর নাম, "দুর্বল দিক", অভ্যন্তরীণ কৌশল — Section 12, এখানে নয়।
 */
export const wardFacts: { label: L; value: L }[] = [
  {
    label: { bn: 'আনুমানিক ভোটার', en: 'Approx. voters' },
    value: { bn: '~৩৫,০০০', en: '~35,000' },
  },
  {
    label: { bn: 'আনুমানিক জনসংখ্যা', en: 'Approx. population' },
    value: { bn: '~৭০,০০০', en: '~70,000' },
  },
  {
    label: { bn: 'সিটি কর্পোরেশন', en: 'City corporation' },
    value: { bn: 'ঢাকা উত্তর (DNCC)', en: 'Dhaka North (DNCC)' },
  },
  {
    label: { bn: 'মহল্লা', en: 'Neighbourhoods' },
    value: { bn: '৯টি', en: 'Nine' },
  },
];

/** Section 8.5c — এলাকার সমস্যা → আমাদের লক্ষ্য */
export const challenges: { problem: L; focus: L }[] = [
  {
    problem: { bn: 'রাস্তা', en: 'Roads' },
    focus: {
      bn: 'ভাঙা রাস্তা ধরে ধরে সংস্কার, টেকসই নির্মাণ।',
      en: 'Broken stretches repaired one by one, built to last.',
    },
  },
  {
    problem: { bn: 'সড়কবাতি', en: 'Street lighting' },
    focus: {
      bn: 'প্রতিটি গলিতে আলো — রাতে চলাফেরা নিরাপদ।',
      en: 'Light in every lane, so the night feels safe.',
    },
  },
  {
    problem: { bn: 'টেলিকম/সংযোগ', en: 'Telecom & connectivity' },
    focus: {
      bn: 'নেটওয়ার্ক ও ইন্টারনেট সেবা পৌঁছে দিতে উদ্যোগ।',
      en: 'Pressing for network and internet service that reaches everyone.',
    },
  },
  {
    problem: { bn: 'পরিবহন', en: 'Transport' },
    focus: {
      bn: 'যাতায়াত সহজ করতে পরিকল্পিত ব্যবস্থা।',
      en: 'A planned system that makes getting around easier.',
    },
  },
  {
    problem: { bn: 'মাদক', en: 'Drugs' },
    focus: {
      bn: 'মাদকমুক্ত ওয়ার্ড — সমাজ ও প্রশাসন একসাথে।',
      en: 'A drug-free ward, with the community and administration together.',
    },
  },
  {
    problem: { bn: 'কিশোর গ্যাং', en: 'Teen gangs' },
    focus: {
      bn: 'খেলাধুলা, শিক্ষা ও কাজে তরুণদের ফেরানো।',
      en: 'Turning the young back toward sport, study and work.',
    },
  },
  {
    problem: { bn: 'চাঁদাবাজি', en: 'Extortion' },
    focus: {
      bn: 'ব্যবসায়ী ও সাধারণ মানুষের পাশে, চাঁদাবাজির বিরুদ্ধে অবস্থান।',
      en: 'Standing with traders and residents against extortion.',
    },
  },
  {
    problem: { bn: 'জমি দখল', en: 'Land grabbing' },
    focus: {
      bn: 'দখলমুক্ত এলাকা — আইনের পথে সমাধান।',
      en: 'Land freed of grabbing, settled the lawful way.',
    },
  },
];

export const honestNote: L = {
  bn: 'প্রতিটা সমস্যা এক রাতে সমাধান হবে না — কিন্তু ধরে ধরে, একটার পর একটা।',
  en: 'Not every problem will be solved overnight — but one by one, steadily.',
};
