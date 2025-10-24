// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales } from './i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg')
  ) {
    return NextResponse.next();
  }
  // Redirect `/` to default locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }
  const locale = pathname.split('/')[1];
  if (!locales.includes(locale as any)) {
    console.warn(`Invalid locale in middleware: ${locale}`);
    return NextResponse.redirect(new URL('/en', request.url));
  }
  return NextResponse.next();
}