import type { L } from './types';

/** Section 8.3 — ১১টি নির্বাচনী অঙ্গীকার। icon = lucide-react নাম। */
export type Pledge = {
  id: number;
  icon: string;
  title: L;
  line: L;
};

export const pledges: Pledge[] = [
  {
    id: 1,
    icon: 'Route',
    title: { bn: 'রাস্তা উন্নয়ন', en: 'Roads that connect' },
    line: {
      bn: 'চলাচলের প্রতিটি রাস্তা টেকসই ও নিরাপদ।',
      en: 'Every road built to last, and safe to walk.',
    },
  },
  {
    id: 2,
    icon: 'ShieldBan',
    title: { bn: 'মাদকমুক্ত এলাকা', en: 'A drug-free ward' },
    line: {
      bn: 'তরুণ প্রজন্মকে মাদকের ছোবল থেকে ফেরানো।',
      en: 'Pulling a generation back from the grip of drugs.',
    },
  },
  {
    id: 3,
    icon: 'GraduationCap',
    title: { bn: 'মানসম্মত শিক্ষা', en: 'Quality education' },
    line: {
      bn: 'প্রতিটি শিশুর জন্য ভালো শিক্ষার সুযোগ।',
      en: 'A fair chance at good schooling for every child.',
    },
  },
  {
    id: 4,
    icon: 'Building2',
    title: { bn: 'আধুনিক তুরাগ', en: 'A modern Turag' },
    line: {
      bn: 'পরিকল্পিত, গোছানো ও বাসযোগ্য এলাকা।',
      en: 'A planned, orderly and liveable neighbourhood.',
    },
  },
  {
    id: 5,
    icon: 'Leaf',
    title: { bn: 'গ্রীন সিটি', en: 'A greener city' },
    line: {
      bn: 'সবুজে ঘেরা, স্বস্তির পরিবেশ।',
      en: 'Green surroundings, and room to breathe.',
    },
  },
  {
    id: 6,
    icon: 'Droplets',
    title: { bn: 'জলাবদ্ধতা নিয়ন্ত্রণ', en: 'No more waterlogging' },
    line: {
      bn: 'বৃষ্টি হলেই রাস্তা যেন না ডোবে।',
      en: 'Streets that stay above water when the rain comes.',
    },
  },
  {
    id: 7,
    icon: 'TreePine',
    title: { bn: 'বৃক্ষরোপণ', en: 'Tree plantation' },
    line: {
      bn: 'প্রতিটি পাড়ায় গাছ, প্রতিটি ঘরে ছায়া।',
      en: 'Trees in every lane, shade for every home.',
    },
  },
  {
    id: 8,
    icon: 'Briefcase',
    title: { bn: 'বেকারত্ব দূরীকরণ', en: 'Jobs & livelihoods' },
    line: {
      bn: 'তরুণদের কাজ ও দক্ষতার সুযোগ।',
      en: 'Work and skills within reach of the young.',
    },
  },
  {
    id: 9,
    icon: 'Stethoscope',
    title: { bn: 'বিনামূল্যে চিকিৎসা', en: 'Free medical care' },
    line: {
      bn: 'সাধারণ মানুষের জন্য বিনামূল্যে সেবা।',
      en: 'Care that costs an ordinary family nothing.',
    },
  },
  {
    id: 10,
    icon: 'Ambulance',
    title: { bn: '২৪ ঘণ্টা অ্যাম্বুলেন্স', en: '24/7 ambulance' },
    line: {
      bn: 'জরুরি মুহূর্তে থেমে না থাকা সেবা।',
      en: 'Help that never stops for the clock.',
    },
  },
  {
    id: 11,
    icon: 'Wrench',
    title: { bn: 'কারিগরি শিক্ষা', en: 'Technical education' },
    line: {
      bn: 'কর্মমুখী কারিগরি শিক্ষার ব্যবস্থা।',
      en: 'Hands-on training that leads to a living.',
    },
  },
];

/** Section 8.3 — অগ্রাধিকার ক্ষেত্র (১০টি) */
export const priorityAreas: L[] = [
  { bn: 'রাস্তা ও যোগাযোগ', en: 'Roads & connectivity' },
  { bn: 'ড্রেনেজ ও জলাবদ্ধতা', en: 'Drainage & waterlogging' },
  { bn: 'পরিচ্ছন্নতা ও বর্জ্য ব্যবস্থাপনা', en: 'Cleanliness & waste management' },
  { bn: 'নিরাপত্তা ও আইনশৃঙ্খলা', en: 'Safety & law and order' },
  { bn: 'তরুণ ও কর্মসংস্থান', en: 'Youth & employment' },
  { bn: 'নারী উন্নয়ন', en: "Women's development" },
  { bn: 'শিক্ষা', en: 'Education' },
  { bn: 'স্বাস্থ্যসেবা', en: 'Healthcare' },
  { bn: 'খেলাধুলা ও সংস্কৃতি', en: 'Sports & culture' },
  { bn: 'সেবা ডিজিটালাইজেশন', en: 'Digitalised services' },
];
