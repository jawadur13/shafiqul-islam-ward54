import fs from 'node:fs';
import path from 'node:path';

/**
 * Section 11 — ছবি এখনো আসেনি। ফাইল থাকলে দেখাও, না থাকলে
 * ArchFrame-এ neutral placeholder — ভুয়া ছবি generate করা হয় না।
 * শুধু server component থেকে কল করা যাবে।
 */
export function publicAssetExists(relativePath: string): boolean {
  try {
    return fs.existsSync(
      path.join(process.cwd(), 'public', relativePath.replace(/^\//, ''))
    );
  } catch {
    return false;
  }
}
