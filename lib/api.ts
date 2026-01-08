export type PaginatedResponse<T> = {
  items: T[]
  totalPages: number
  totalItems: number
}

export type NewsItem = {
  id: number
  title: string
  summary: string
  author: string
  category: string
  views: number
  likes: number
  tags: string[]
  coverImage?: string | null
  status: string
  publishedAt?: string | null
  createdAt?: string | null
  publishedMs: number
  date: string
}

export type PublicationItem = {
  id: number
  title: string
  authors: string[]
  journal: string
  year: number
  type: string
  category: string
  citations: number
  doi: string
  abstract: string
  keywords: string[]
  createdAt?: string | null
  pdfUrl?: string
  codeUrl?: string
}

export type Member = {
  id: string | number
  name: string
  avatarUrl?: string | null
  roleName?: string
  Role?: { name?: string }
  raw?: any
}

type FetchOptions = {
  baseUrl?: string
  cache?: RequestCache
  signal?: AbortSignal
}

const normalizeBaseUrl = (baseUrl?: string) => (baseUrl ? baseUrl.replace(/\/$/, "") : "")

export function resolveBaseUrl(headers?: Headers | null) {
  const env = process.env.NEXT_PUBLIC_APP_URL
  if (env) return env
  const host = headers?.get("host")
  return host ? `http://${host}` : ""
}

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { cache: "no-store", ...init })
  if (!res.ok) {
    const message = (await res.text().catch(() => "")).trim()
    throw new Error(message || `Request failed: ${res.status}`)
  }
  return (await res.json().catch(() => ({} as any))) as T
}

export async function fetchNewsPage({
  page,
  pageSize,
  baseUrl,
  cache = "no-store",
  signal,
}: { page: number; pageSize: number } & FetchOptions): Promise<PaginatedResponse<NewsItem>> {
  const origin = normalizeBaseUrl(baseUrl)
  const url = `${origin}/api/news?page=${page}&pageSize=${pageSize}`
  const data = await fetchJson<any>(url, { cache, signal })
  const list: any[] = Array.isArray(data?.items) ? data.items : []
  const mapped = list.map(mapNewsItem)
  return {
    items: mapped,
    totalPages: Number(data?.totalPages) || 1,
    totalItems: Number(data?.totalItems) || mapped.length,
  }
}

export async function fetchPublicationsPage({
  page,
  pageSize,
  baseUrl,
  cache = "no-store",
  signal,
}: { page: number; pageSize: number } & FetchOptions): Promise<PaginatedResponse<PublicationItem>> {
  const origin = normalizeBaseUrl(baseUrl)
  const url = `${origin}/api/publication?page=${page}&pageSize=${pageSize}`
  const data = await fetchJson<any>(url, { cache, signal })
  const list: any[] = Array.isArray(data?.items) ? data.items : []
  const mapped = list.map(mapPublicationItem)
  return {
    items: mapped,
    totalPages: Number(data?.totalPages) || 1,
    totalItems: Number(data?.totalItems) || mapped.length,
  }
}

export async function fetchMembers(baseUrl?: string): Promise<Member[]> {
  const origin = normalizeBaseUrl(baseUrl)
  const data = await fetchJson<any>(`${origin}/api/member`)
  const list: any[] = Array.isArray(data?.items) ? data.items : []
  return list.map(mapMember)
}

function mapNewsItem(source: any): NewsItem {
  const publishedAt = source?.publishedAt ?? null
  const createdAt = source?.createdAt ?? null
  const publishedMs = publishedAt ? new Date(publishedAt).getTime() : -Infinity
  const dateValue = createdAt || publishedAt || ""
  const date = dateValue ? new Date(dateValue).toLocaleDateString() : ""
  return {
    id: Number(source?.id) || 0,
    title: source?.title || "",
    summary: source?.summary || "",
    author: source?.author || "管理员",
    category: source?.newsCategory?.name || source?.category || "未分类",
    views: Number(source?.views) || 0,
    likes: Number(source?.likes) || 0,
    tags: Array.isArray(source?.TagOfNews)
      ? source.TagOfNews.map((t: any) => t?.name || "").filter(Boolean)
      : Array.isArray(source?.tags)
      ? source.tags.filter(Boolean)
      : [],
    coverImage: source?.coverImage ?? null,
    status: (source?.status || "").toLowerCase(),
    publishedAt,
    createdAt,
    publishedMs,
    date,
  }
}

function mapPublicationItem(source: any): PublicationItem {
  return {
    id: Number(source?.id) || 0,
    title: source?.title || "",
    authors: Array.isArray(source?.Authors)
      ? source.Authors.map((a: any) => a?.name || "").filter(Boolean)
      : [],
    journal: source?.Venue?.name || "",
    year: Number(source?.year) || 0,
    type: source?.PublicationType?.name || source?.type || "其他",
    category: source?.ResearchCategory?.name || source?.category || "未分类",
    citations: Number(source?.citations) || 0,
    doi: source?.doi || "",
    abstract: source?.abstract || "",
    keywords: Array.isArray(source?.Keywords)
      ? source.Keywords.map((k: any) => k?.name || "").filter(Boolean)
      : [],
    createdAt: source?.createdAt ?? null,
    pdfUrl: source?.pdfUrl || undefined,
    codeUrl: source?.codeUrl || undefined,
  }
}

function mapMember(source: any): Member {
  const fallbackId = source?.id ?? source?.slug ?? source?.name
  const id = fallbackId ?? `member-${Math.random().toString(36).slice(2)}`
  return {
    id,
    name: source?.name || "",
    avatarUrl: source?.avatarUrl ?? source?.avatar ?? null,
    roleName: source?.Role?.name || source?.role || undefined,
    Role: source?.Role,
    raw: source,
  }
}
