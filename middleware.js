// middleware.js  ← place in project root, next to next.config.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const host = request.headers.get('host') || ''

  // If request comes from non-www, redirect to www
  if (host === 'springfieldmoplumber.com') {
    const url = request.nextUrl.clone()
    url.host = 'www.springfieldmoplumber.com'
    return NextResponse.redirect(url, {
      status: 301,
    })
  }

  return NextResponse.next()
}

// Run on ALL routes
export const config = {
  matcher: '/:path*',
}