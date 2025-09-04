"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { defaultLocale, isLocale, Locale } from "@/lib/i18n"

function getLocaleAndRest(pathname: string): { current: Locale | null; rest: string } {
  const parts = pathname.split("/")
  const first = parts[1]
  if (isLocale(first)) {
    return { current: first, rest: "/" + parts.slice(2).join("/") }
  }
  return { current: null, rest: pathname }
}

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/"
  const searchParams = useSearchParams()
  const search = searchParams?.toString()
  const qs = search ? `?${search}` : ""

  const { current, rest } = getLocaleAndRest(pathname)
  const active = (current ?? defaultLocale) as Locale

  const hrefFor = (target: Locale) => `/${target}${rest}${qs}`

  return (
    <div className="flex items-center gap-2">
      <Link href={hrefFor("en")} prefetch={false} aria-label="Switch to English">
        <Button size="sm" variant={active === "en" ? "default" : "outline"}>EN</Button>
      </Link>
      <Link href={hrefFor("zh")} prefetch={false} aria-label="切换到中文">
        <Button size="sm" variant={active === "zh" ? "default" : "outline"}>中文</Button>
      </Link>
    </div>
  )
}
