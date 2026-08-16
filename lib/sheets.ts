/**
 * Section 10 — Google Sheet-এ row append।
 * SHEET_WEBHOOK_URL = Google Apps Script Web App (doPost) URL।
 * কোনো secret ক্লায়েন্টে যায় না; সব কিছু server-side।
 *
 * Apps Script-এর দিকে যে কলামগুলো আশা করা হচ্ছে:
 *   timestamp | name | mobile | area | help_types | message | locale
 */
export type VolunteerRow = {
  timestamp: string;
  name: string;
  mobile: string;
  area: string;
  help_types: string;
  message: string;
  locale: string;
};

export type SheetResult = { ok: true } | { ok: false; reason: string };

export async function appendVolunteerRow(
  row: VolunteerRow
): Promise<SheetResult> {
  const url = process.env.SHEET_WEBHOOK_URL;

  if (!url) {
    // এখনো webhook বসানো হয়নি — সার্ভার লগে রেখে দিই, কিন্তু
    // ভুয়া success দেখাই না, কারণ ডেটা কোথাও যায়নি।
    console.error('[volunteer] SHEET_WEBHOOK_URL সেট করা নেই — row সংরক্ষিত হয়নি।');
    return { ok: false, reason: 'not_configured' };
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(row),
      // Apps Script 302 redirect করে; follow করা দরকার।
      redirect: 'follow',
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('[volunteer] webhook থেকে খারাপ status:', res.status);
      return { ok: false, reason: `bad_status_${res.status}` };
    }

    return { ok: true };
  } catch (error) {
    console.error('[volunteer] webhook কল ব্যর্থ:', error);
    return { ok: false, reason: 'network_error' };
  }
}
