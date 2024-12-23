import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'ar']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const pathname = request.nextUrl.pathname
  
  console.log('Middleware executing for path:', pathname)

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  console.log('Pathname missing locale:', pathnameIsMissingLocale)

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    console.log('Redirecting to:', newUrl.toString())
    return NextResponse.redirect(newUrl)
  }

  console.log('No redirect needed, continuing with:', pathname)
  return NextResponse.next()
}

export const config = {
  // Matcher ignoring /_next/ and /api/
  matcher: ['/((?!api|_next/static|_next/image|_next/data|favicon.ico).*)'],
}
