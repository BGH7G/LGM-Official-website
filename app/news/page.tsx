"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, User, Eye, Heart, Search, ArrowRight } from "lucide-react"
import Link from "next/link"
 

// 动态数据通过 useEffect 获取

export default function NewsListPage() {
  // 动态数据与分页、本地搜索/筛选/排序
  const [allNews, setAllNews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(6)
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [selectedSort, setSelectedSort] = useState("最新")
  const [reloadTick, setReloadTick] = useState(0)

  useEffect(() => {
    let cancelled = false
    async function run() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`/api/news?page=${page}&pageSize=${pageSize}`, { cache: "no-store" })
        const data = await res.json().catch(() => ({}))
        if (!res.ok || data?.success === false) {
          throw new Error(data?.message || `请求失败: ${res.status}`)
        }
        const list: any[] = Array.isArray(data?.items) ? data.items : []
        const mapped = list.map((it: any) => {
          const publishedAt = it?.publishedAt ?? null
          const createdAt = it?.createdAt ?? null
          const publishedMs = publishedAt ? new Date(publishedAt).getTime() : -Infinity
          return {
            id: it?.id,
            title: it?.title || "",
            summary: it?.summary || "",
            author: "管理员",
            category: it?.newsCategory?.name || "未分类",
            views: Number(it?.views) || 0,
            likes: Number(it?.likes) || 0,
            tags: Array.isArray(it?.TagOfNews) ? it.TagOfNews.map((t: any) => t?.name || "").filter(Boolean) : [],
            coverImage: it?.coverImage ?? null,
            status: (it?.status || "").toLowerCase(),
            publishedAt,
            createdAt,
            publishedMs,
            date: createdAt ? new Date(createdAt).toLocaleDateString() : "—",
          }
        })
        if (!cancelled) {
          setAllNews(mapped)
          setTotalPages(Number(data?.totalPages) || 1)
          setTotalItems(Number(data?.totalItems) || mapped.length)
        }
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "网络错误")
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [page, pageSize, reloadTick])

  // 动态分类选项（基于当前页数据）
  const categories = useMemo(() => {
    const s = new Set<string>()
    allNews.forEach((n: any) => s.add(n.category))
    return ["全部", ...Array.from(s)]
  }, [allNews])

  // 本地过滤与排序（仅当前页）
  const filteredNews = useMemo(() => {
    const lower = searchTerm.trim().toLowerCase()
    return allNews
      .filter((n: any) => n.status === "published")
      .filter((n: any) => (!lower ? true : n.title.toLowerCase().includes(lower)))
      .filter((n: any) => (selectedCategory === "全部" ? true : n.category === selectedCategory))
      .sort((a: any, b: any) => {
        if (selectedSort === "最新") return (b.publishedMs ?? 0) - (a.publishedMs ?? 0)
        if (selectedSort === "最热") return (b.views ?? 0) - (a.views ?? 0)
        if (selectedSort === "最赞") return (b.likes ?? 0) - (a.likes ?? 0)
        return 0
      })
  }, [allNews, searchTerm, selectedCategory, selectedSort])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-slate-900">Liu Lab</div>
              <Badge variant="secondary">Laboratory of Gastrointestinal Microbiology</Badge>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium">
                首页
              </Link>
              <Link href="/#research" className="text-slate-700 hover:text-slate-900 font-medium">
                研究方向
              </Link>
              <Link href="/#team" className="text-slate-700 hover:text-slate-900 font-medium">
                团队成员
              </Link>
              <Link href="/publications" className="text-slate-700 hover:text-slate-900 font-medium">
                研究成果
              </Link>
              <Link href="/news" className="text-slate-900 font-medium border-b-2 border-slate-900">
                新闻动态
              </Link>
              <Link href="/#contact" className="text-slate-700 hover:text-slate-900 font-medium">
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">新闻动态</h1>
          <p className="text-xl text-slate-600 mb-8">课题组最新动态和学术活动</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="搜索新闻标题..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="分类" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSort} onValueChange={setSelectedSort}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="排序" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="最新">最新发布</SelectItem>
                  <SelectItem value="最热">最多浏览</SelectItem>
                  <SelectItem value="最赞">最多点赞</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {error && (
            <div className="mt-2 text-sm text-red-600">
              加载失败：{error}
              <Button variant="link" className="ml-2 p-0" onClick={() => setReloadTick((t) => t + 1)}>
                重试
              </Button>
            </div>
          )}
          {loading && !error && <div className="mt-2 text-sm text-slate-600">加载中...</div>}
        </div>
      </section>

      {/* News List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {filteredNews.map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary">{news.category}</Badge>
                        {news.tags.slice(0, 2).map((tag: string, index: number) => (
                          <Badge key={index} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Link href={`/news/${news.id}`}>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-slate-700 cursor-pointer">
                          {news.title}
                        </h2>
                      </Link>

                      <p className="text-slate-600 mb-4 leading-relaxed">{news.summary}</p>

                      <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {news.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {news.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {news.views} 次浏览
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {news.likes} 次点赞
                        </div>
                      </div>

                      <Link href={`/news/${news.id}`}>
                        <Button variant="link" className="p-0">
                          阅读全文 <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="lg:w-48 flex-shrink-0">
                      {news.coverImage ? (
                        <img src={news.coverImage} alt={news.title} className="w-full h-32 object-cover rounded-lg" />
                      ) : (
                        <div className="w-full h-32 bg-slate-200 rounded-lg flex items-center justify-center">
                          <span className="text-slate-400 text-sm">新闻配图</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-between">
            <div className="text-sm text-slate-600">
              第 {page} / {totalPages} 页，共 {totalItems} 条
            </div>
            <div className="flex items-center gap-2">
              <Select value={String(pageSize)} onValueChange={(v) => { setPageSize(parseInt(v)); setPage(1) }}>
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="每页数量" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6">每页 6 条</SelectItem>
                  <SelectItem value="12">每页 12 条</SelectItem>
                  <SelectItem value="24">每页 24 条</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-2">
                <Button variant="outline" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
                  上一页
                </Button>
                <Button variant="outline" disabled={page >= totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
                  下一页
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">反刍动物消化道微生物实验室</div>
            <p className="text-slate-300 mb-4">Laboratory of Gastrointestinal Microbiology</p>
            <p className="text-slate-400 text-sm"> 2024 反刍动物消化道微生物实验室. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
