# মোঃ শফিকুল ইসলাম — নির্বাচনী ওয়েবসাইট

DNCC ওয়ার্ড ৫৪ · কাউন্সিলর প্রার্থী · Databrandix

`design.md`-এর স্পেক ধরে বানানো। ডিজাইন সিদ্ধান্ত locked — কালার, ফন্ট, স্লোগান
বা কপি বদলানোর আগে ওই ফাইলটাই সোর্স অব ট্রুথ।

## চালানো

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # প্রোডাকশন বিল্ড
npm start        # বিল্ড চালানো
npm run typecheck
```

## স্ট্যাক

Next.js 15 (App Router) · TypeScript · Tailwind CSS · next-intl · lucide-react

- বাংলা default locale, URL-এ prefix নেই (`/porichiti`); English `/en/about`।
- ব্রাউজারের ভাষা দেখে auto-redirect **বন্ধ** (`localeDetection: false`) — `/` সবসময়
  বাংলা, ব্যবহারকারী Header-এর toggle দিয়ে English-এ যায়। বদলাতে হলে
  `i18n/routing.ts`।
- সব কপি `content/*.ts` (bilingual `{bn, en}`) আর `messages/*.json`-এ।
  কম্পোনেন্টে কোনো কপি hardcode করা নেই।

## এখনো যা বসানো বাকি (`[TBD]`)

প্রতিটার জায়গা কোডে তৈরি আছে — ফাইল/মান দিলেই আপনা থেকে কাজ করবে, কোড
বদলাতে হবে না।

| জিনিস | কোথায় বসবে | না থাকলে এখন কী হয় |
|---|---|---|
| **প্রার্থীর hero ছবি** | `public/img/hero-candidate.png` | খিলানের ভেতরে নিরপেক্ষ সবুজ placeholder |
| **পরিচিতি পেজের ছবি** | `public/img/candidate-about.jpg` | ঐ একই placeholder |
| **WhatsApp নম্বর** | `.env` → `NEXT_PUBLIC_WHATSAPP` | বাটন disabled + "শীঘ্রই" |
| **Google Sheet webhook** | `.env` → `SHEET_WEBHOOK_URL` | ফর্ম error state দেখায় (ভুয়া success নয়) |
| **ডোমেইন** | `.env` → `NEXT_PUBLIC_SITE_URL` | sitemap খালি, hreflang relative |
| **সোশ্যাল লিংক** | `.env` → `NEXT_PUBLIC_FACEBOOK`, `NEXT_PUBLIC_YOUTUBE` | chip নিষ্ক্রিয় |
| **লোগো/মনোগ্রাম** | `components/layout/Monogram.tsx` | খিলানের ভেতরে "শ" |
| **নির্বাচনী মার্কা** | Hero badge + Footer chip | নিরপেক্ষ star motif + "শীঘ্রই বরাদ্দ হবে" |

## পেজ ব্যানার

হোম ছাড়া বাকি ছয় পেজের উপরে full-bleed ব্যানার — `public/img/hero-banner.jpeg`।
এটা `components/sections/PageHero.tsx`-এর ডিফল্ট, তাই নতুন পেজ যোগ করলেও
আপনা থেকেই বসে যায়।

- **ছবি বদলাতে** ঐ ফাইলটা replace করলেই হয় — কোড ছুঁতে হবে না।
- **মাপ:** ~2400 × 800 (3:1)। মোবাইলে center-crop হয়, তাই জরুরি বিষয়বস্তু
  মাঝের ৪০%-এ রাখতে হবে; উপরে-নিচে ১৫% বাদ যেতে পারে।
- ছবির উপরে তিন স্তরের সবুজ scrim — লেখার কলাম আলাদা করে গাঢ়, যাতে
  উজ্জ্বল ছবিতেও eyebrow/হেডিং AA কনট্রাস্ট ধরে রাখে।
- ফাইল না থাকলে আগের ivory ব্যান্ডেই নেমে যায় — ভুয়া ছবি বসে না।
- কোনো পেজে ব্যানার না চাইলে `<PageHero image={null} … />`;
  আলাদা ছবি চাইলে `<PageHero image="/img/hero/kaj.webp" … />`।

## ফন্ট

`public/fonts/` — **Codepotro Abu Sayed** (SIL Open Font License, `OFL.txt` সাথে):

- `AbuSayed.woff2` (৫১ KB) — ব্রাউজারে এটাই লোড হয়, `globals.css`-এর `@font-face`
- `AbuSayed.ttf` (১৫৩ KB) — সোর্স ফাইল, ওয়েবে যায় না

TTF থেকে woff2 বানানো হয়েছে `wawoff2` দিয়ে (একবারের কাজ, dependency হিসেবে
রাখা হয়নি)। ফন্ট আপডেট করলে:

```bash
npm i --no-save wawoff2
node -e "const{compress}=require('wawoff2'),fs=require('fs');compress(fs.readFileSync('public/fonts/AbuSayed.ttf')).then(b=>fs.writeFileSync('public/fonts/AbuSayed.woff2',b))"
```

**কোথায় কোন ফন্ট:** Abu Sayed একটা display face — তাই শুধু হেডিং-এ
(`font-bn-display`: h1–h4, hero display line, স্লোগান ব্যান্ড, মনোগ্রাম)।
বডি, নেভিগেশন, বাটন, ফর্ম লেবেল — সব **Noto Serif Bengali** (`font-bn`),
ছোট সাইজে পড়তে আরাম।

Inter-এ বাংলা গ্লিফ নেই, তাই `font-ui` স্ট্যাকে Inter-এর পরেই Noto Serif
Bengali — বাংলা UI টেক্সট ব্যবহারকারীর OS-এর এলোমেলো ফন্টে পড়ে না।

## OG কার্ড কেন English-এ

`app/[locale]/opengraph-image.tsx` দুই locale-এই English লেখা দেখায় —
ইচ্ছাকৃত। next/og-এর রেন্ডারার (Satori) Indic script shaping করে না; Abu Sayed
embed করেও বাংলা ভেঙে আসে ("মোঃ" → "ম্ ঃ", ি-কার এদিক-ওদিক বসে)। ভাঙা বাংলার
চেয়ে পরিষ্কার English ভালো।

বাংলা OG চাইলে ডিজাইন করা আর্টওয়ার্ক (Canva/Figma থেকে ১২০০×৬৩০ PNG)
`public/og/`-তে বসিয়ে এই ফাইলটা সরিয়ে দিন, আর `lib/metadata.ts`-এ
`openGraph.images`-এ ওই পাথ দিন।

## প্রকাশের আগে যাচাই করানোর তালিকা

design.md-এই নোট করা, প্রার্থীকে দিয়ে confirm করাতে হবে:

- ~~মহল্লার বানান~~ — ২০২৬-০৮-১৭-এ প্রার্থীর পক্ষ থেকে confirm করা (`content/ward.ts`)
- সমর্থকদের নাম/বানান (`content/quotes.ts`)
- ফাউন্ডেশনের নাম — **D.A** নাকি **DIA** (`content/work.ts`)
- প্রতিষ্ঠানের নামের বানান (`content/candidate.ts` → `businesses`)

## Google Sheet সংযোগ

1. Sheet-এ কলাম: `timestamp | name | mobile | area | help_types | message | locale`
2. Apps Script-এ `doPost(e)` লিখে JSON body থেকে row append করান, Web App হিসেবে
   deploy করুন ("Anyone" access)।
3. URL-টা `.env`-এ `SHEET_WEBHOOK_URL` হিসেবে বসান (server-side only, কখনো
   `NEXT_PUBLIC_` নয়)।

সার্ভার সাইডে validate হয়: নাম আবশ্যক, BD মোবাইল `^01[3-9]\d{8}$`, honeypot
ফিল্ড ভরা থাকলে চুপচাপ বাদ।

## যা ইচ্ছাকৃতভাবে সাইটে নেই

design.md Section 12 (do-not-publish): NID, প্রতিদ্বন্দ্বী প্রার্থীর নাম,
প্রার্থীর দুর্বল দিক, সন্তানদের নাম/স্কুল, পিতা-মাতার নাম, রক্তের গ্রুপ,
বিস্তারিত বাসার ঠিকানা। ব্লগ/সংবাদ সেকশনও এই ফেজে নেই।

## ডিপ্লয়

Vercel। env: `SHEET_WEBHOOK_URL`, `NEXT_PUBLIC_WHATSAPP`, `NEXT_PUBLIC_SITE_URL`,
`NEXT_PUBLIC_FACEBOOK`, `NEXT_PUBLIC_YOUTUBE`।

---

*Databrandix · Insight. Decision. Develop.*
