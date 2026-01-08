"use client"

import { useCallback, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePaginatedResource } from "@/hooks/usePaginatedResource"
import { fetchPublicationsPage, type PublicationItem } from "@/lib/api"
import { Search, Download, ExternalLink, Calendar, Users, BookOpen, Filter } from "lucide-react"
import Link from "next/link"

// 动态数据通过 /api/publication 获取

// const categories = ["全部", "深度学习", "计算机视觉", "自然语言处理", "强化学习", "边缘计算", "医疗AI"]
const types = ["全部", "SCI", "核心期刊", "学位论文", "专利"]
const years = ["全部","2025", "2024", "2023", "2022", "2021", "2020","2019","2018","2017"]

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [selectedType, setSelectedType] = useState("全部")
  const [selectedYear, setSelectedYear] = useState("全部")
  const [sortBy, setSortBy] = useState("year")
  const { items, loading, error, page, setPage, pageSize, setPageSize, totalPages, totalItems } =
    usePaginatedResource<PublicationItem>({
      fetchPage: useCallback((p, size) => fetchPublicationsPage({ page: p, pageSize: size }), []),
      initialPageSize: 12,
    })

  // 本地过滤与排序（静态筛选）
  const filteredPublications = useMemo(() => {
    const lower = searchTerm.trim().toLowerCase()
    // const categoryMap: Record<string, string[]> = {
    //   "深度学习": ["Deep Learning"],
    //   "计算机视觉": ["Computer Vision"],
    //   "自然语言处理": ["Natural Language Processing", "NLP"],
    //   "强化学习": ["Reinforcement Learning"],
    //   "边缘计算": ["Edge Computing"],
    //   "医疗AI": ["Medical AI", "Healthcare AI"],
    // }
    return items
      .filter((pub) => {
        const matchesSearch =
          !lower ||
          pub.title.toLowerCase().includes(lower) ||
          pub.authors.some((a) => a.toLowerCase().includes(lower)) ||
          pub.keywords.some((k) => k.toLowerCase().includes(lower))
        // const matchesCategory =
        //   selectedCategory === "全部" || (categoryMap[selectedCategory]?.includes(pub.category) ?? false)
        const matchesType = selectedType === "全部" || pub.type === selectedType
        const matchesYear = selectedYear === "全部" || pub.year.toString() === selectedYear
        return matchesSearch && matchesType && matchesYear
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "year":
            return (b.year - a.year) || (b.citations - a.citations)
          case "citations":
            return b.citations - a.citations
          case "title":
            return a.title.localeCompare(b.title)
          default:
            return 0
        }
      })
  }, [items, searchTerm, selectedCategory, selectedType, selectedYear, sortBy])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">研究成果</h1>
          <p className="text-xl text-slate-600 mb-8">课题组发表的学术论文和研究项目</p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">{filteredPublications.length}</div>
              <div className="text-slate-600">总论文数</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">{filteredPublications.filter((p) => p.type === "SCI").length}</div>
              <div className="text-slate-600">SCI论文</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">{filteredPublications.filter((p) => p.type === "CCF-A").length}</div>
              <div className="text-slate-600">CCF-A论文</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">{filteredPublications.reduce((sum, p) => sum + p.citations, 0)}</div>
              <div className="text-slate-600">总引用数</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="搜索论文标题、作者或关键词..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">筛选：</span>
              </div>

              {/* <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="研究方向" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select> */}

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="类型" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="年份" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="排序方式" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="year">按年份</SelectItem>
                  <SelectItem value="citations">按引用数</SelectItem>
                  <SelectItem value="title">按标题</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-slate-600">找到 {filteredPublications.length} 篇论文</div>
          {error && (
            <div className="mt-2 text-sm text-red-600">加载失败：{error}</div>
          )}
          {loading && !error && (
            <div className="mt-2 text-sm text-slate-600">加载中...</div>
          )}
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="list">列表视图</TabsTrigger>
              <TabsTrigger value="grid">网格视图</TabsTrigger>
            </TabsList>

            <TabsContent value="list" className="space-y-6">
              {filteredPublications.map((paper) => (
                <Card key={paper.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-slate-900 hover:text-slate-700 cursor-pointer">
                            {paper.title}
                          </h3>
                          <Badge variant={paper.type === "SCI" ? "default" : "secondary"}>{paper.type}</Badge>
                          <Badge variant="outline">{paper.category}</Badge>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {paper.authors.join(", ")}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {paper.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            被引用 {paper.citations} 次
                          </div>
                        </div>

                        <p className="text-slate-700 font-medium mb-2">{paper.journal}</p>
                        <p className="text-slate-600 mb-3">{paper.abstract}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {paper.keywords.map((keyword, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm text-slate-500">DOI: {paper.doi}</div>
                      <div className="flex gap-2">
                        {paper.pdfUrl ? (
                          <Button size="sm" variant="outline" asChild>
                            <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
                              <Download className="h-4 w-4 mr-1" />
                              PDF
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" disabled>
                            <Download className="h-4 w-4 mr-1" />
                            PDF
                          </Button>
                        )}
                        {paper.codeUrl ? (
                          <Button size="sm" variant="outline" asChild>
                            <a href={paper.codeUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              链接
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" disabled>
                            <ExternalLink className="h-4 w-4 mr-1" />
                            链接
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="grid">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPublications.map((paper) => (
                  <Card key={paper.id} className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant={paper.type === "SCI" ? "default" : "secondary"}>{paper.type}</Badge>
                        <Badge variant="outline" className="text-xs">
                          {paper.year}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{paper.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-sm text-slate-600 mb-2">{paper.authors.join(", ")}</p>
                      <p className="text-sm font-medium text-slate-700 mb-3">{paper.journal}</p>
                      <p className="text-sm text-slate-600 mb-4 flex-1">{paper.abstract.substring(0, 120)}...</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {paper.keywords.slice(0, 3).map((keyword, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                        <span>引用: {paper.citations}</span>
                        <span>{paper.category}</span>
                      </div>

                      <div className="flex gap-2">
                        {paper.pdfUrl ? (
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                            <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
                              <Download className="h-3 w-3 mr-1" />
                              PDF
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent" disabled>
                            <Download className="h-3 w-3 mr-1" />
                            PDF
                          </Button>
                        )}
                        {paper.codeUrl ? (
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                            <a href={paper.codeUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              链接
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent" disabled>
                            <ExternalLink className="h-3 w-3 mr-1" />
                            链接
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm text-slate-600">
              第 {page} / {totalPages} 页 • 共 {totalItems} 篇
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">每页</span>
                <Select value={String(pageSize)} onValueChange={(v) => { setPageSize(Number(v)); setPage(1) }}>
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="每页数量" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="36">36</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}>
                  上一页
                </Button>
                <Button variant="outline" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page >= totalPages}>
                  下一页
                </Button>
              </div>
            </div>
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">未找到相关论文</h3>
              <p className="text-slate-600">请尝试调整搜索条件或筛选器</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">反刍动物消化道微生物实验室</div>
            <p className="text-slate-300 mb-4">Ruminant Metabolism and Physiology Laboratory</p>
            <p className="text-slate-400 text-sm"> 2024 反刍动物消化道微生物实验室. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
