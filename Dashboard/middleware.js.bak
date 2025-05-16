import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;

  // Redirect to login if no token
  if (!token) {
    return NextResponse.redirect(new URL('http://localhost:3001/login', request.url));
  }

  return NextResponse.next();
}

// Apply middleware to all routes except public assets
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
