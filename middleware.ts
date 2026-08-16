import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // api, _next, _vercel আর ফাইল-এক্সটেনশনওয়ালা সব path বাদ
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
