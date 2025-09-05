import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
 

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

  // Strip leading locale prefixes "/en" or "/zh" and redirect to non-locale path
  const segments = pathname.split("/")
  const first = segments[1]
  if (first === "en" || first === "zh") {
    const rest = "/" + segments.slice(2).join("/")
    const url = request.nextUrl.clone()
    url.pathname = rest === "/" ? "/" : rest
    return NextResponse.redirect(url, 308)
  }

  // Otherwise, proceed without locale enforcement
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next|static|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|tiff|bmp)|api).*)",
  ],
}

