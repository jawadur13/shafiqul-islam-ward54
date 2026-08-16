import type { L } from './types';

/** Section 8.6a — উক্তি প্রাচীর */
export const quotes: L[] = [
  {
    bn: 'ক্ষমতা নয়, আসল উদ্দেশ্য সেবা।',
    en: 'Not power — service is the real purpose.',
  },
  {
    bn: 'পরিবর্তন ছোট থেকেই শুরু হয়; বড় কিছু একদিনে হয় না।',
    en: 'Change begins small; nothing big happens overnight.',
  },
  {
    bn: 'ন্যায় ছাড়া শান্তি টেকে না।',
    en: 'Without justice, there is no lasting peace.',
  },
  {
    bn: 'সততাই ধর্ম; সততা মানুষকে ন্যায়পরায়ণ করে।',
    en: 'Honesty is faith; honesty makes a person just.',
  },
];

/** হোম ও সমর্থন পেজের প্রধান pull-quote */
export const primaryQuote: L = quotes[0];

/**
 * Section 8.6b — এলাকাবাসীর কথা।
 * নাম/বানান confirm করাও। ছবি বা বানানো উদ্ধৃতি নেই — plain chip হিসেবেই থাকবে।
 */
export const supporters: string[] = [
  'ওমর আলী',
  'শরীফ',
  'সাহিদ',
  'হাদী সোহেল খন্দকার',
  'আলী হোসেন সরদার',
  'ইসাম হোসেন',
  'ফেরদৌস',
  'হাদী মোস্তাফিজ',
  'ইকবাল',
  'বাবলু',
  'লতিফ',
  'রাজা মিয়া',
  'জমির খন্দকার',
];

export const voterComment: { text: L; attribution: L } = {
  text: { bn: 'ভালো মানুষ।', en: 'A good man.' },
  attribution: { bn: 'সাধারণ ভোটার', en: 'An ordinary voter' },
};

/** Section 8.6c — মিডিয়া কভারেজ। লিংক নেই, শুধু outlet নাম। */
export const mediaOutlets: L[] = [
  { bn: 'আমার দেশ', en: 'Amar Desh' },
  { bn: 'দিগন্ত মিডিয়া', en: 'Diganta Media' },
  { bn: 'এটিএন বাংলা', en: 'ATN Bangla' },
];
