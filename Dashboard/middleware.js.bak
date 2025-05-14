// Dashboard/middleware.js
import { NextResponse } from 'next/server';

export async function middleware(request) {
    // Skip middleware for static files and api routes
    if (
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.startsWith('/api') ||
        request.nextUrl.pathname.startsWith('/images') ||
        request.nextUrl.pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    try {
        // Check authentication by calling the Landing auth check endpoint
        const authCheckUrl = 'http://localhost:3001/api/auth/check';
        const authResponse = await fetch(authCheckUrl, {
            headers: {
                cookie: request.headers.get('cookie') || '',
            },
        });

        const authData = await authResponse.json();

        if (!authData.loggedIn) {
            // Redirect to login page if not authenticated
            return NextResponse.redirect('http://localhost:3001/login');
        }

        // Continue to the requested page if authenticated
        return NextResponse.next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        // Redirect to login on error
        return NextResponse.redirect('http://localhost:3001/login');
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
    ],
};