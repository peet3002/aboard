// src/middleware.ts or app/middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth_token') || request.headers.get('Authorization');
  const url = request.nextUrl.pathname;

  if (url === '/login') {
    return NextResponse.next();
  }

  if (!authToken) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
