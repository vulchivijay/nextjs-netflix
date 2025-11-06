// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales } from './i18n';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/public') ||
    pathname.endsWith('.well-known')
  ) {
    return NextResponse.next();
  }
  // Redirect `/` to default locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }
  // Check if path starts with a locale
  const locale = pathname.split('/')[1];
  if (!locales.includes(locale as any)) {
    console.warn(`Invalid locale in middleware: ${locale}`);
    return NextResponse.redirect(new URL(`/en/${locale}`, request.url));
  }
  return NextResponse.next();
}