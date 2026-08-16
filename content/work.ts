import type { L } from './types';

/** Section 8.4 — কাজ ও অবদান। img না থাকলে card টেক্সট-only থাকবে (ভুয়া ছবি নয়)। */
export type WorkItem = {
  id: string;
  icon: string;
  title: L;
  desc: L;
  img?: string;
};

/** (a) সামাজিক কাজ */
export const socialWork: WorkItem[] = [
  {
    id: 'foundation',
    icon: 'HeartHandshake',
    // নামের সঠিক রূপ confirm করাও — D.A নাকি DIA (design.md §8.4a)
    title: { bn: 'D.A / DIA ফাউন্ডেশন', en: 'D.A / DIA Foundation' },
    desc: { bn: 'প্রতিষ্ঠাতা ও চেয়ারম্যান', en: 'Founder & Chairman' },
  },
  {
    id: 'roads',
    icon: 'Route',
    title: { bn: 'রাস্তা উন্নয়ন (১২টি)', en: '12 road projects' },
    desc: {
      bn: 'এলাকার ১২টি রাস্তা সংস্কার ও উন্নয়ন।',
      en: 'Twelve neighbourhood roads repaired and rebuilt.',
    },
  },
  {
    id: 'sewing',
    icon: 'Scissors',
    title: { bn: 'সেলাই মেশিন বিতরণ', en: 'Sewing machines distributed' },
    desc: {
      bn: 'নারীদের নিজের পায়ে দাঁড়ানোর সুযোগ।',
      en: 'A way for women to stand on their own feet.',
    },
  },
  {
    id: 'van',
    icon: 'Truck',
    title: { bn: 'ভ্যান গাড়ি বিতরণ', en: 'Vans for livelihood' },
    desc: {
      bn: 'দিনমজুর পরিবারের আয়ের পথ তৈরি।',
      en: 'A daily income within reach for working families.',
    },
  },
  {
    id: 'livestock',
    icon: 'Beef',
    title: { bn: 'গবাদি পশু লালন-পালনে সহায়তা', en: 'Support for livestock rearing' },
    desc: {
      bn: 'ছোট খামার গড়ে তুলতে সহায়তা।',
      en: 'Help to start and keep a small farm.',
    },
  },
  {
    id: 'trees',
    icon: 'TreePine',
    title: { bn: 'বৃক্ষরোপণ', en: 'Tree plantation drives' },
    desc: {
      bn: 'পাড়ায় পাড়ায় গাছ লাগানোর উদ্যোগ।',
      en: 'Planting drives lane by lane.',
    },
  },
];

/** (b) দুর্যোগে মানুষের পাশে */
export const crisisWork: WorkItem[] = [
  {
    id: 'covid',
    icon: 'Syringe',
    title: { bn: 'কোভিড সহায়তা', en: 'COVID relief' },
    desc: {
      bn: 'মহামারির সময় ঘরে ঘরে খাদ্য ও সহায়তা।',
      en: 'Food and support delivered door to door through the pandemic.',
    },
  },
  {
    id: 'medical',
    icon: 'Stethoscope',
    title: { bn: 'চিকিৎসা সহায়তা', en: 'Medical support' },
    desc: {
      bn: 'অসুস্থ প্রতিবেশীর চিকিৎসার পাশে থাকা।',
      en: 'Standing by neighbours through illness and treatment.',
    },
  },
  {
    id: 'flood',
    icon: 'Waves',
    title: { bn: 'বন্যায় খাদ্য ও বস্ত্র বিতরণ', en: 'Food & clothing in floods' },
    desc: {
      bn: 'বন্যাকবলিত পরিবারের কাছে ত্রাণ পৌঁছে দেওয়া।',
      en: 'Relief carried to families cut off by floodwater.',
    },
  },
  {
    id: 'milestone',
    icon: 'Plane',
    title: { bn: 'বিমান দুর্ঘটনায় (মাইলস্টোন) সহায়তা', en: 'Milestone air-crash relief' },
    desc: {
      bn: 'ক্ষতিগ্রস্ত পরিবারের পাশে দাঁড়ানো।',
      en: 'Standing with the families the crash left behind.',
    },
  },
  {
    id: 'july',
    icon: 'Home',
    title: { bn: 'জুলাই শহীদ পরিবারের পাশে', en: 'July martyr families' },
    desc: {
      bn: 'ঘর নির্মাণ ও আর্থিক সহায়তা।',
      en: 'Housing built and funds raised for those left behind.',
    },
  },
  {
    id: 'mirpur-uttara',
    icon: 'Map',
    title: { bn: 'মিরপুর–উত্তরা রাস্তা', en: 'Mirpur–Uttara road' },
    desc: {
      bn: 'দুই এলাকার যোগাযোগ সহজ করার উদ্যোগ।',
      en: 'Work to ease the link between two neighbourhoods.',
    },
  },
];

/** (c) সংগঠন */
export const affiliations: string[] = [
  'Rotary Club of Dhaka Scholars',
  'Nagrik Unnayan Forum',
  'Mitali Jubo Sangha',
];

/** (d) স্বীকৃতি */
export const recognitions: L[] = [
  { bn: 'Modern Education Center, Japan University — সম্মাননা', en: 'Modern Education Center, Japan University — honour' },
  { bn: 'DIA Foundation — সম্মাননা', en: 'DIA Foundation — honour' },
  { bn: 'Founder Chairman, Rotary — সম্মাননা', en: 'Founder Chairman, Rotary — honour' },
  { bn: 'Nagar Unnayan — সম্মাননা', en: 'Nagar Unnayan — honour' },
];

/** হোম পেজের ৩টি highlight (Section 8.1e) */
export const workHighlights: WorkItem[] = [
  socialWork[0],
  crisisWork[0],
  socialWork[5],
];
