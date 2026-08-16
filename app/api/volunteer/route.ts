import { NextResponse } from 'next/server';
import { appendVolunteerRow } from '@/lib/sheets';

/** Section 10 — POST → validate → Google Sheet webhook। */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_json' }, { status: 400 });
  }

  // honeypot ভরা মানে বট — চুপচাপ ঠিক আছে বলে দিই, কিন্তু কিছু লিখি না।
  if (typeof payload.company === 'string' && payload.company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = String(payload.name ?? '').trim();
  const mobile = String(payload.mobile ?? '').trim();

  if (!name) {
    return NextResponse.json(
      { ok: false, error: 'name_required' },
      { status: 400 }
    );
  }

  if (!/^01[3-9]\d{8}$/.test(mobile)) {
    return NextResponse.json(
      { ok: false, error: 'invalid_mobile' },
      { status: 400 }
    );
  }

  const help = Array.isArray(payload.help)
    ? payload.help.map((item) => String(item)).join(', ')
    : '';

  const result = await appendVolunteerRow({
    timestamp: new Date().toISOString(),
    name: name.slice(0, 120),
    mobile,
    area: String(payload.area ?? '').slice(0, 80),
    help_types: help.slice(0, 200),
    message: String(payload.message ?? '').slice(0, 1000),
    locale: payload.locale === 'en' ? 'en' : 'bn',
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.reason },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
