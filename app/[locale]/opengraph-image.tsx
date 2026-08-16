import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Md. Shafiqul Islam — Councilor Candidate, Ward 54';

/**
 * Section 14 — OG card।
 * বাংলা গ্লিফের জন্য embed করার মতো ফন্ট ফাইল এখনো নেই (Abu Sayed আসেনি),
 * তাই কার্ডের লেখা এখন English-এ। Abu Sayed এলে এখানে fontData দিয়ে
 * বাংলা সংস্করণ করা যাবে — README-র placeholder তালিকায় নোট আছে।
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
              height: '64px',
              background: '#C4A24C',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#C4A24C',
            }}
          >
            Ward 54 · Dhaka North
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 86, lineHeight: 1.1 }}>
            Md. Shafiqul Islam
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '18px',
              fontSize: 38,
              color: '#B9C4B4',
            }}
          >
            Councilor Candidate · Dhaka North City Corporation
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
            Election symbol: to be assigned
          </div>
          <div style={{ display: 'flex' }}>Say no to drugs</div>
        </div>
      </div>
    ),
    size
  );
}
