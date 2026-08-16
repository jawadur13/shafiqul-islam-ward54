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

Inter-এ বাংলা গ্লিফ নেই, তাই `font-ui` স্ট্যাকে Inter-এর পরেই Abu Sayed —
বাটন/ফর্ম লেবেলের বাংলাও ব্র্যান্ড ফন্টে পড়ে, ব্যবহারকারীর OS ফন্টে নয়।

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

- মহল্লার বানান (`content/ward.ts`) — কয়েকটা হাতের লেখা থেকে আনুমানিক
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
