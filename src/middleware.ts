// Taken from: https://locize.com/blog/next-13-app-dir-i18n/

// Next
import { NextRequest, NextResponse } from 'next/server'

// Utils
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from '@src/app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)']
}

export function middleware(req: NextRequest) {
  let lng
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  const pathname = req.nextUrl.pathname
  const validRoutePattern = /^\/\w+\/(#[^/]+)?$/

  // Redirect if lng in path is not supported or the route is 404
  if (
    (!languages.some((loc) => pathname.startsWith(`/${loc}`)) ||
      !validRoutePattern.test(pathname)) &&
    !pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}`, req.url))
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer') ?? '')
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    )
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}
