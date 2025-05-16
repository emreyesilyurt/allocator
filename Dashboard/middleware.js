// Dashboard/middleware.js
import { NextResponse } from 'next/server';

export async function middleware(request) {
  // Get the token from cookies
  const token = request.cookies.get('token');

  // Check if user is trying to access protected routes
  const protectedPaths = ['/dashboard', '/creator-profile', '/creator-profile-setting'];
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  // Allow API routes to pass through
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // If accessing protected path without token, redirect to login
  if (isProtectedPath && !token) {
    const loginUrl = new URL('http://3.148.159.251:3001/login');
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Let the request continue
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};