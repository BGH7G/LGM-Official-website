import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { defaultLocale, isLocale } from "./lib/i18n"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Next.js internals and assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next()
  }

  const segments = pathname.split("/")
  const first = segments[1]

  // Already locale-prefixed
  if (isLocale(first)) {
    return NextResponse.next()
  }

  // Redirect to default locale, preserving path and query
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    "/((?!_next|static|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|tiff|bmp)|api).*)",
  ],
}
