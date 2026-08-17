import type { L } from './types';

/**
 * Section 9 — সব ব্যক্তিগত ও নির্বাচনী তথ্য।
 * ⚠️ Section 12 (Do-Not-Publish): NID, প্রতিদ্বন্দ্বী প্রার্থীর নাম, সন্তানদের নাম/স্কুল,
 * পিতা-মাতার নাম, রক্তের গ্রুপ, বিস্তারিত ঠিকানা — এখানে যোগ করা যাবে না।
 */
export const candidate = {
  name: { bn: 'মোঃ শফিকুল ইসলাম', en: 'Md. Shafiqul Islam' },
  nickname: { bn: 'শফিক', en: 'Shafiq' },
  post: { bn: 'কাউন্সিলর প্রার্থী', en: 'Councilor Candidate' },
  ward: {
    bn: 'ওয়ার্ড ৫৪, ঢাকা উত্তর সিটি কর্পোরেশন',
    en: 'Ward 54, Dhaka North City Corporation',
  },
  wardShort: { bn: 'ওয়ার্ড ৫৪ · ঢাকা উত্তর', en: 'Ward 54 · Dhaka North' },
  party: { bn: 'বাংলাদেশ জামায়াতে ইসলামী', en: 'Bangladesh Jamaat-e-Islami' },
  candidacy: { bn: 'দলীয় সমর্থিত প্রার্থী', en: 'Party-supported candidate' },
  symbol: { bn: 'শীঘ্রই বরাদ্দ হবে', en: 'To be assigned' }, // [TBD] placeholder
  dob: { bn: '৪ জানুয়ারি ১৯৭৫', en: '4 January 1975' },
  religion: { bn: 'ইসলাম', en: 'Islam' },
  area: { bn: 'তুরাগ, ওয়ার্ড ৫৪, ঢাকা উত্তর', en: 'Turag, Ward 54, Dhaka North' },
  profession: { bn: 'ব্যবসায়ী', en: 'Businessman' },
  spouse: { bn: 'ফরিদা ইয়াসমিন', en: 'Farida Yasmin' },
  campOffice: {
    bn: 'ওয়ালটন সার্কেল, খামারপাড়া মেইন রোড, উত্তরা',
    en: 'Walton Circle, Khamar Para Main Rd, Uttara',
  },

  mainSlogan: {
    bn: 'মাদককে না বলুন — সুন্দর ভবিষ্যতের জন্য এগিয়ে চলুন।',
    en: 'Say no to drugs — walk toward a brighter future.',
  },
  heroLine: {
    bn: 'আল্লাহর আইন চাই,\nসৎ লোকের শাসন চাই',
    en: 'We seek the rule of the honest,\nunder the justice of faith',
  },
  heroSub: {
    bn: 'এই তুরাগেরই সন্তান, আপনাদেরই একজন। একটি ন্যায্য, স্বচ্ছ ও মাদকমুক্ত ওয়ার্ড ৫৪ গড়তে আপনার পাশে।',
    en: 'A son of this soil in Turag, one of your own — standing beside you to build a fair, transparent and drug-free Ward 54.',
  },
  intro: {
    bn: 'তুরাগের মাটিতে জন্ম, এই মাটিতেই বেড়ে ওঠা। ব্যবসা, সমাজসেবা আর মানুষের পাশে থাকা — এই তিনটাই দীর্ঘদিনের পরিচয়। মানুষের কাছে পরিচিত সহজ নামে — "শফিক"।',
    en: 'Born on the soil of Turag and raised among its people. Business, service, and standing by those in need — that has long been his identity. To the neighbourhood, simply "Shafiq".',
  },

  // ── পরিচিতি (8.2) ──
  story: [
    {
      bn: 'তুরাগের মাটিতে জন্ম, এই মাটিতেই বেড়ে ওঠা। মোঃ শফিকুল ইসলাম — এলাকার মানুষের কাছে পরিচিত "শফিক" নামে।',
      en: 'Born on the soil of Turag, and raised among its people — Md. Shafiqul Islam, known to everyone simply as "Shafiq".',
    },
    {
      bn: 'জীবনের শুরু একেবারে সাধারণ ঘর থেকে। সততা আর পরিশ্রমকে সঙ্গী করে গড়ে তুলেছেন নিজের ব্যবসা, আর পাশাপাশি আঁকড়ে ধরেছেন একটাই কথা — মানুষের পাশে থাকা। সেই তাগিদ থেকেই গড়ে তোলেন নিজের সেবামূলক প্রতিষ্ঠান, যার মধ্য দিয়ে বছরের পর বছর এলাকার মানুষের সুখ-দুঃখে শামিল হয়েছেন।',
      en: 'His life began in an ordinary home. With honesty and hard work he built his own business, while holding on to one conviction above all: to stand with people. That conviction led him to found his own service organisation, through which he has shared in the joys and hardships of this community for years.',
    },
    {
      bn: 'মানুষ তাঁকে চেনে সৎ, নামাজী আর পরিচ্ছন্ন ইমেজের একজন মানুষ হিসেবে — যাঁর দরজা সবার জন্য খোলা।',
      en: 'People know him as an honest, prayerful man with a clean reputation — one whose door stays open to all.',
    },
  ] satisfies L[],

  personalQuote: {
    bn: 'ছোটবেলায় ক্লাস পাঁচ থেকে নয় পর্যন্ত হাফপ্যান্ট পরেই স্কুলে গেছি। একটা লাল শার্ট ছিল, সেটা পরেই ঈদের নামাজ পড়তাম। সেই দিনগুলো আমি ভুলিনি — আজ পাঞ্জাবি পরি ঠিকই, কিন্তু গায়ে এখনো সেই সাধারণ মানুষের দাগটা লেগে আছে।',
    en: 'As a boy, from class five to class nine, I went to school in short pants. I had one red shirt, and I wore it to Eid prayers. I have never forgotten those days — I wear a panjabi now, but the mark of that ordinary boy is still on me.',
  },

  family: {
    bn: 'পারিবারিক জীবনে সহধর্মিণী ফরিদা ইয়াসমিন। এক ছেলে ও তিন মেয়ের বাবা — সন্তানরা দেশে-বিদেশে উচ্চশিক্ষায় নিয়োজিত।',
    en: 'In family life, his wife is Farida Yasmin. Father to one son and three daughters, all pursuing higher education at home and abroad.',
  },

  education: [
    { bn: 'SSC — টাঙ্গী পাইলট হাই স্কুল, ১৯৯২', en: 'SSC — Tangi Pilot High School, 1992' },
    { bn: 'HSC — টাঙ্গী সরকারি কলেজ, ১৯৯৪', en: 'HSC — Tangi Government College, 1994' },
  ] satisfies L[],

  // (বানান confirm করাও — design.md §8.2e)
  businesses: [
    'Expensive Fashion',
    'Prime Food and Consumer Products',
    'Turag Leather Cut',
  ],

  politics: {
    bn: 'রাজনীতির সঙ্গে যুক্ত ১৯৮১ সাল থেকে। বর্তমানে বাংলাদেশ জামায়াতে ইসলামী-র শুরা সদস্য।',
    en: 'Engaged in politics since 1981. Currently a Shura member of Bangladesh Jamaat-e-Islami.',
  },

  whyStanding: {
    bn: 'আমি নির্বাচন করছি, কারণ আমার এলাকার মানুষ বহু বছর ধরে অবহেলিত থেকেছে — ছোট ছোট সমস্যার কষ্ট নীরবে বয়ে বেড়িয়েছে। আমি চাই তাদের স্পষ্ট কণ্ঠস্বর হতে; ন্যায্য, স্বচ্ছ আর কার্যকর পরিবর্তন আনতে, যাতে প্রত্যেকের জীবন একটু সহজ আর মর্যাদাপূর্ণ হয়। এক কথায় — একটি ন্যায়ের সমাজ গড়া।',
    en: 'I am standing because the people of my area have been overlooked for too long — carrying the weight of everyday problems in silence. I want to be their clear voice: to bring fair, transparent and real change, so that every life here becomes a little easier and a little more dignified. In short — to build a just society.',
  },

  faithLine: {
    bn: 'মানুষের সেবাই আমার রাজনীতির উদ্দেশ্য — আর সেটাই আল্লাহর সন্তুষ্টির পথ। আল্লাহ ন্যায়পরায়ণ, তিনি ন্যায়কে ভালোবাসেন।',
    en: "Serving people is the purpose of my politics — and that is the path to Allah's pleasure. Allah is just, and He loves justice.",
  },

  /**
   * যোগাযোগ — [TBD]। খালি স্ট্রিং/undefined হলে UI gracefully disable করে।
   * env থেকে আসে যাতে নম্বর/লিংক পেলে কোড না ছুঁয়ে বসানো যায়।
   */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || null,
  facebook: process.env.NEXT_PUBLIC_FACEBOOK || null,
  youtube: process.env.NEXT_PUBLIC_YOUTUBE || null,
} as const;
