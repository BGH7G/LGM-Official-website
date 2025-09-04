export const locales = ["en", "zh"] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = "en"

export function isLocale(input: string | undefined | null): input is Locale {
  if (!input) return false
  return (locales as readonly string[]).includes(input)
}

export function stripLocaleFromPath(pathname: string): { locale: Locale | null; path: string } {
  const parts = pathname.split("/")
  const first = parts[1]
  if (isLocale(first)) {
    return { locale: first, path: "/" + parts.slice(2).join("/") }
  }
  return { locale: null, path: pathname }
}
