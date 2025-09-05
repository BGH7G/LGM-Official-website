import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, BookOpen, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { headers } from "next/headers"
 

function formatDate(createdAt?: string, publishedAt?: string): string {
  try {
    const ds = createdAt || publishedAt
    if (!ds) return ""
    const d = new Date(ds)
    if (isNaN(d.getTime())) return ""
    const pad = (n: number) => `${n}`.padStart(2, "0")
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
  } catch {
    return ""
  }
}

export default async function HomePage() {
  // Fetch members and build full list (no role filtering)
  let students: any[] = []
  let latestNews: { id: number; title: string; summary: string; date: string }[] = []
  let latestPubs: { id: number; title: string; authors: string; journal: string; year: number; type: string }[] = []
  try {
    const h = await headers()
    const base = process.env.NEXT_PUBLIC_APP_URL ?? `http://${h.get("host")}`
    const res = await fetch(`${base}/api/member`, { cache: "no-store" })
    if (res.ok) {
      const payload = await res.json()
      const items = Array.isArray(payload?.items) ? payload.items : []
      // 不过滤 Role，展示全部成员
      students = items
    }
  } catch (_) {
    // 忽略错误，渲染空状态
  }

  // Fetch latest news for homepage
  try {
    const h = await headers()
    const base = process.env.NEXT_PUBLIC_APP_URL ?? `http://${h.get("host")}`
    const res = await fetch(`${base}/api/news`, { cache: "no-store" })
    if (res.ok) {
      const payload = await res.json().catch(() => ({} as any))
      const items: any[] = Array.isArray(payload?.items) ? payload.items : []
      const published = items.filter((it: any) => (it?.status || "").toLowerCase() === "published")
      const sorted = published.sort((a: any, b: any) => {
        const at = new Date(a?.createdAt || a?.publishedAt || 0).getTime()
        const bt = new Date(b?.createdAt || b?.publishedAt || 0).getTime()
        return bt - at
      })
      latestNews = sorted.slice(0, 3).map((it: any) => ({
        id: Number(it?.id),
        title: it?.title || "",
        summary: it?.summary || "",
        date: formatDate(it?.createdAt, it?.publishedAt),
      }))
    }
  } catch (_) {
    // 忽略错误
  }

  // Fetch latest publications for homepage
  try {
    const h = await headers()
    const base = process.env.NEXT_PUBLIC_APP_URL ?? `http://${h.get("host")}`
    const res = await fetch(`${base}/api/publication?page=1&pageSize=3`, { cache: "no-store" })
    if (res.ok) {
      const payload = await res.json().catch(() => ({} as any))
      const items: any[] = Array.isArray(payload?.items) ? payload.items : []
      const sorted = items.sort((a: any, b: any) => {
        const ay = Number(a?.year) || new Date(a?.createdAt || 0).getFullYear() || 0
        const by = Number(b?.year) || new Date(b?.createdAt || 0).getFullYear() || 0
        if (by !== ay) return by - ay
        const at = new Date(a?.createdAt || 0).getTime()
        const bt = new Date(b?.createdAt || 0).getTime()
        return bt - at
      })
      latestPubs = sorted.slice(0, 3).map((it: any) => ({
        id: Number(it?.id),
        title: it?.title || "",
        authors: Array.isArray(it?.Authors)
          ? it.Authors.map((a: any) => a?.name || "").filter(Boolean).join(", ")
          : "",
        journal: it?.Venue?.name || "",
        year: Number(it?.year) || new Date(it?.createdAt || Date.now()).getFullYear(),
        type: it?.PublicationType?.name || "其他",
      }))
    }
  } catch (_) {
    // 忽略错误
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-slate-900">Liu Lab</div>
              <Badge variant="secondary">Laboratory of Gastrointestinal Microbiology
              </Badge>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-slate-700 hover:text-slate-900 font-medium">
                首页
              </Link>
              <Link href="#research" className="text-slate-700 hover:text-slate-900 font-medium">
                研究方向
              </Link>
              <Link href="#team" className="text-slate-700 hover:text-slate-900 font-medium">
                团队成员
              </Link>
              <Link href="#publications" className="text-slate-700 hover:text-slate-900 font-medium">
                研究成果
              </Link>
              <Link href="#news" className="text-slate-700 hover:text-slate-900 font-medium">
                新闻动态
              </Link>
              <Link href="#contact" className="text-slate-700 hover:text-slate-900 font-medium">
                联系我们
              </Link>
            
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">反刍动物消化道营养与上皮生理实验室</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            反刍动物消化道营养；犊牛、羔羊胃肠道发育与营养调控
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
              了解更多 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/publications">
              <Button size="lg" variant="outline">
                查看研究成果
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-slate-300">团队成员</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60+</div>
              <div className="text-slate-300">发表论文</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-slate-300">研究项目</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-slate-300">合作院校</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">研究方向</h2>
            <p className="text-xl text-slate-600">专注于反刍动物消化道营养研究</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-slate-700" />
                  反刍动物消化道微生物
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">促进营养物质消化吸收与能量利用效率，维持肠道稳态与宿主健康</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-slate-700" />
                  羔羊胃肠道发育与营养调控
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">促进羔羊生长发育和提高生产性能，提高饲料利用率和经济效益，优化胃肠道微生物菌群</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-slate-700" />
                  犊牛胃肠道发育与营养调控
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">促进犊牛生长发育和提高生产性能，提高饲料利用率和经济效益，优化胃肠道微生物菌群</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">团队成员</h2>
            <p className="text-xl text-slate-600">优秀的研究团队是创新的基石</p>
          </div>

          {/* Principal Investigator */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">课题组负责人</h3>
            <Link href="/members/Liu-professor">
              <Card className="max-w-3xl mx-auto hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-48 h-64 bg-slate-200 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                      <Image
                          src="/avatar/liu.png"
                          alt="刘军花教授"
                          width={192}
                          height={256}
                          className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">刘军花教授</h4>
                      <p className="text-slate-600 mb-4">博士生导师，教授，国家优秀青年科学基金获得者</p>
                      <p className="text-slate-700 mb-4">
                        农学博士，国家优秀青年科学基金获得者，在Genome Biology、Journal of Advanced Research、Microbiome等期刊发表论文60余篇，主持国家基金委优青/面上及重点研发子课题等项目16项。
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        <Badge variant="secondary">反刍动物</Badge>
                        <Badge variant="secondary">消化道微生物</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Students */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">在读学生</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {students.map((m: any) => (
                <Card key={m.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-3 bg-slate-200">
                      {m?.avatarUrl ? (
                        <img
                          src={m.avatarUrl}
                          alt={m.name || "avatar"}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <Users className="h-12 w-12 text-slate-400" />
                      )}
                    </div>
                    <p className="text-sm font-medium text-slate-900">{`${m.Role?.name ?? '成员'}：${m.name}`}</p>
                  </CardContent>
                </Card>
              ))}
              {students.length === 0 && (
                <div className="col-span-full text-center text-slate-500">暂无在读学生数据</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">近期研究成果</h2>
            <p className="text-xl text-slate-600">最新发表的学术论文和研究项目</p>
          </div>
          <div className="space-y-6">
            {latestPubs.map((paper) => (
              <Card key={paper.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{paper.title}</h3>
                      <p className="text-slate-600 mb-2">{paper.authors}</p>
                      <p className="text-slate-700 font-medium">
                        {paper.journal}, {paper.year}
                      </p>
                    </div>
                    <Badge variant={paper.type === "SCI" ? "default" : "secondary"}>{paper.type}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
            {latestPubs.length === 0 && (
              <div className="text-center text-slate-500">暂无研究成果</div>
            )}
          </div>
          <div className="text-center mt-8">
            <Link href="/publications">
              <Button variant="outline">查看全部论文</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">新闻动态</h2>
            <p className="text-xl text-slate-600">课题组最新动态和学术活动</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    {news.date}
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{news.summary}</p>
                  <Link href={`/news/${news.id}`}>
                    <Button variant="link" className="p-0 mt-2">
                      阅读更多 <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
            {latestNews.length === 0 && (
              <div className="col-span-full text-center text-slate-500">暂无新闻</div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">联系我们</h2>
          <p className="text-xl text-slate-600 mb-12">欢迎学术交流与合作</p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>实验室地址</CardTitle>
              </CardHeader>
              <CardContent className="text-left space-y-2">
                <p>
                  <strong>地址：</strong>南京农业大学卫岗校区动物科技学院
                </p>
                <p>
                  <strong>邮编：</strong>210095
                </p>
                <p>
                  <strong>电话：</strong>025-84395523
                </p>
                <p>
                  <strong>邮箱：</strong>liujunhua@njau.edu.cn
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>加入我们</CardTitle>
              </CardHeader>
              <CardContent className="text-left space-y-2">
                <p>我们常年招收博士生、硕士生和本科实习生</p>
                <p>欢迎对反刍动物消化道微生物研究感兴趣的同学加入</p>
                <p>请发送简历至：liujunhua@njau.edu.cn</p>
                <Link href="/recruitment">
                  <Button className="mt-4 w-full">了解招生信息</Button>
                </Link>
              </CardContent>
            </Card>
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
