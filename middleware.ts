import { NextResponse, type NextRequest } from 'next/server'

const locales = ['en', 'ar']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname
  console.log('Current pathname:', pathname)

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  console.log('Missing locale:', pathnameIsMissingLocale)

  // Skip internal Next.js paths and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    console.log('Skipping internal path:', pathname)
    return
  }

  // Redirect if locale is missing
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale
    const newUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    console.log('Redirecting to:', newUrl.toString())
    return NextResponse.redirect(newUrl)
  }

  console.log('Allowing through:', pathname)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
