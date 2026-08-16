import { ImageResponse } from 'next/og';
import { candidate } from '@/content/candidate';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Md. Shafiqul Islam — Councilor Candidate, Ward 54';

/**
 * Section 14 — OG card: নাম + পদ + ওয়ার্ড + মার্কা placeholder।
 *
 * ⚠️ লেখা ইচ্ছাকৃতভাবে English-এ, দুই locale-এই। next/og-এর রেন্ডারার (Satori)
 * Indic script shaping করে না — Abu Sayed embed করেও বাংলা ভেঙে আসে
 * ("মোঃ" → "ম্ ঃ", ি-কার আগে-পরে বসে যায়)। তাই ভাঙা বাংলার বদলে পরিষ্কার
 * English কার্ড। ডিজাইন করা বাংলা OG আর্টওয়ার্ক এলে `public/og/`-তে বসিয়ে
 * এই ফাইলটা সরিয়ে দিলেই হবে (README দেখো)।
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#1C3424',
          color: '#F1EADA',
          padding: '72px',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              width: '10px',
              height: '58px',
              background: '#C4A24C',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#C4A24C',
            }}
          >
            {candidate.wardShort.en}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 86, lineHeight: 1.1 }}>
            {candidate.name.en}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '18px',
              fontSize: 36,
              color: '#B9C4B4',
            }}
          >
            {candidate.post.en} · {candidate.ward.en}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(196,162,76,0.5)',
            paddingTop: '28px',
            fontSize: 26,
            color: '#B9C4B4',
          }}
        >
          <div style={{ display: 'flex' }}>
            Election symbol: {candidate.symbol.en}
          </div>
          <div style={{ display: 'flex' }}>{candidate.candidacy.en}</div>
        </div>
      </div>
    ),
    size
  );
}
