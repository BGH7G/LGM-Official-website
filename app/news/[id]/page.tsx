import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, User, Eye, Heart } from "lucide-react"
import Link from "next/link"
import { headers } from "next/headers"
import NewsDetailActions from "@/components/news/news-detail-client"

export const revalidate = 0

/* 模拟新闻数据
const newsData = {
  1: {
    id: 1,
    title: "课题组获得国家自然科学基金重点项目资助",
    date: "2024-01-15",
    author: "实验室管理员",
    category: "项目资助",
    views: 1250,
    likes: 89,
    summary: "我们的项目获得资助...",
    content: `
      <p>近日，我们课题组申请的国家自然科学基金重点项目"面向边缘计算的联邦学习关键技术研究"正式获得资助，项目资助金额为300万元，执行期为4年。</p>
      
      <h3>项目背景</h3>
      <p>随着物联网和移动计算的快速发展，边缘计算已成为支撑智能应用的重要基础设施。然而，传统的集中式机器学习方法在边缘计算环境中面临着数据隐私、通信开销、计算资源受限等诸多挑战。联邦学习作为一种新兴的分布式机器学习范式，为解决这些问题提供了新的思路。</p>
      
      <h3>研究内容</h3>
      <p>本项目将围绕边缘计算环境下的联邦学习展开深入研究，主要包括以下几个方面：</p>
      <ul>
        <li><strong>高效的联邦学习算法设计：</strong>针对边缘设备计算能力有限的特点，设计轻量化的联邦学习算法</li>
        <li><strong>隐私保护机制：</strong>研究差分隐私、同态加密等技术在联邦学习中的应用</li>
        <li><strong>通信优化策略：</strong>设计高效的模型聚合和通信压缩方法</li>
        <li><strong>系统平台构建：</strong>开发面向边缘计算的联邦学习系统平台</li>
      </ul>
      
      <h3>预期成果</h3>
      <p>项目预期将在以下方面取得重要进展：</p>
      <ul>
        <li>发表高水平学术论文15-20篇，其中SCI论文不少于10篇</li>
        <li>申请发明专利5-8项</li>
        <li>培养博士研究生6-8名，硕士研究生15-20名</li>
        <li>开发具有自主知识产权的联邦学习系统平台</li>
      </ul>
      
      <h3>项目意义</h3>
      <p>本项目的成功实施将为边缘计算环境下的智能应用提供重要的技术支撑，推动联邦学习技术的产业化应用，具有重要的理论意义和实用价值。</p>
      
      <p>课题组将充分利用这一机会，加强与国内外知名高校和科研院所的合作，努力在联邦学习领域取得更多原创性成果，为我国人工智能技术的发展贡献力量。</p>
    `,
    tags: ["国家自然科学基金", "重点项目", "联邦学习", "边缘计算"],
    relatedNews: [2, 3],
  },
  2: {
    id: 2,
    title: "博士生刘同学论文被CVPR 2024接收",
    date: "2024-01-10",
    author: "实验室管理员",
    category: "学术成果",
    views: 890,
    likes: 67,
    summary: "恭喜刘同学的计算机视觉相关研究成果被顶级会议CVPR接收...",
    content: `
      <p>热烈祝贺我课题组博士研究生刘明同学的论文"Efficient Multi-Scale Feature Fusion for Real-Time Object Detection"被计算机视觉领域顶级会议CVPR 2024接收！</p>
      
      <h3>论文简介</h3>
      <p>该论文针对实时目标检测中的多尺度特征融合问题，提出了一种高效的特征融合网络架构。通过引入自适应权重分配机制和轻量化的特征提取模块，在保证检测精度的同时显著提升了推理速度。</p>
      
      <h3>主要贡献</h3>
      <ul>
        <li><strong>创新的网络架构：</strong>设计了一种新颖的多尺度特征融合网络，有效整合不同层次的语义信息</li>
        <li><strong>自适应权重机制：</strong>提出了基于注意力机制的自适应权重分配策略，提高特征融合效率</li>
        <li><strong>轻量化设计：</strong>通过模型压缩和知识蒸馏技术，实现了模型的轻量化部署</li>
        <li><strong>优异的性能表现：</strong>在COCO数据集上取得了state-of-the-art的性能，同时推理速度提升30%</li>
      </ul>
      
      <h3>实验结果</h3>
      <p>在多个公开数据集上的实验结果表明，所提出的方法在精度和速度方面都取得了显著的改进：</p>
      <ul>
        <li>COCO数据集：mAP达到45.2%，FPS达到65</li>
        <li>PASCAL VOC数据集：mAP达到82.1%</li>
        <li>模型大小：仅为传统方法的60%</li>
      </ul>
      
      <h3>应用前景</h3>
      <p>该研究成果在自动驾驶、智能监控、机器人视觉等领域具有广阔的应用前景。目前，相关技术已经与多家企业开展合作，推进产业化应用。</p>
      
      <h3>致谢</h3>
      <p>感谢导师张教授的悉心指导，感谢课题组全体成员的支持与帮助。这一成果的取得离不开团队的共同努力和国家自然科学基金项目的资助。</p>
    `,
    tags: ["CVPR", "计算机视觉", "目标检测", "深度学习"],
    relatedNews: [1, 3],
  },
  3: {
    id: 3,
    title: "与清华大学建立合作关系",
    date: "2024-01-05",
    author: "实验室管理员",
    category: "合作交流",
    views: 1100,
    likes: 78,
    summary: "我们与清华大学人工智能研究院签署合作协议，将在联邦学习领域开展深入合作...",
    content: `
      <p>2024年1月5日，我课题组与清华大学人工智能研究院正式签署战略合作协议，双方将在联邦学习、边缘计算等前沿技术领域开展深入合作。</p>
      
      <h3>合作背景</h3>
      <p>随着人工智能技术的快速发展，跨机构、跨领域的合作变得越来越重要。清华大学人工智能研究院在机器学习理论研究方面具有深厚的积累，而我课题组在联邦学习的工程实现和应用方面有着丰富的经验。双方的合作将实现优势互补，共同推进相关技术的发展。</p>
      
      <h3>合作内容</h3>
      <p>根据合作协议，双方将在以下几个方面开展深入合作：</p>
      
      <h4>1. 联合研究项目</h4>
      <ul>
        <li>联邦学习理论与算法研究</li>
        <li>隐私保护机器学习技术</li>
        <li>边缘计算与分布式AI系统</li>
        <li>多模态数据融合与分析</li>
      </ul>
      
      <h4>2. 人才培养</h4>
      <ul>
        <li>联合培养博士研究生</li>
        <li>研究生交换访问项目</li>
        <li>青年教师互访交流</li>
        <li>联合举办学术研讨会</li>
      </ul>
      
      <h4>3. 平台共建</h4>
      <ul>
        <li>共建联邦学习实验平台</li>
        <li>共享计算资源和数据集</li>
        <li>联合申请重大科研项目</li>
        <li>共同开发开源软件工具</li>
      </ul>
      
      <h3>签约仪式</h3>
      <p>签约仪式在清华大学举行，清华大学人工智能研究院院长张钹院士、我校计算机学院院长以及双方课题组负责人出席了签约仪式。张钹院士在致辞中表示，期待通过此次合作，能够在联邦学习等前沿技术领域取得更多突破性成果。</p>
      
      <h3>合作展望</h3>
      <p>此次合作协议的签署标志着双方合作关系的正式建立。未来三年内，双方计划：</p>
      <ul>
        <li>联合发表高水平学术论文20篇以上</li>
        <li>联合申请国家级重大科研项目2-3项</li>
        <li>培养联合培养博士生10名以上</li>
        <li>举办国际学术会议1-2次</li>
        <li>开发并开源联邦学习平台1套</li>
}
*/

interface NewsPageProps {
  params: {
    id: string
  }
}

export default async function NewsPage({ params }: NewsPageProps) {
  const resolvedParams = await params
  const baseUrl = await getBaseUrl()
  let data: any = null
  try {
    const res = await fetch(`${baseUrl}/api/news/${resolvedParams.id}`, { cache: "no-store" })
    const json = await res.json().catch(() => null)
    if (res.ok && json?.success && json?.data) {
      data = json.data
    }
  } catch {}

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">新闻不存在</h1>
          <Link href="/">
            <Button>返回首页</Button>
          </Link>
        </div>
      </div>
    )
  }

  const news = {
    id: Number(data?.id),
    title: data?.title || "",
    author: "管理员",
    category: data?.newsCategory?.name || "未分类",
    views: Number(data?.views) || 0,
    likes: Number(data?.likes) || 0,
    summary: data?.summary || "",
    content: typeof data?.content === "string" ? transformContentHtml(data.content, baseUrl) : "",
    date: formatDate(data?.createdAt, data?.publishedAt),
    tags: Array.isArray(data?.TagOfNews) ? data.TagOfNews.map((t: any) => t?.name || "").filter(Boolean) : [],
    coverImage: typeof data?.coverImage === "string" ? toAbsoluteUrl(data.coverImage, baseUrl) : null,
  }
  console.log(news.content)

  const relatedNewsItems = Array.isArray(data?.Related)
    ? data.Related
        .filter((r: any) => (r?.status || "").toLowerCase() === "published")
        .slice(0, 2)
        .map((r: any) => ({
          id: Number(r?.id),
          title: r?.title || "",
          summary: r?.summary || "",
          date: formatDate(r?.createdAt, r?.publishedAt),
        }))
    : []

  const shareUrl = `${baseUrl}/news/${resolvedParams.id}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-slate-900">Liu Lab</div>
              <Badge variant="secondary">Ruminant Metabolism and Physiology Laboratory
              </Badge>
            </div>
            <div className="hidden md:flex space-x-8">
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

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/news">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回新闻列表
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {news.coverImage && (
          <img
            src={news.coverImage}
            alt={news.title}
            loading="lazy"
            className="w-full h-auto rounded-xl mb-6 object-cover"
          />
        )}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{news.category}</Badge>
            {news.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">{news.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{news.views} 次浏览</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span>{news.likes} 次点赞</span>
            </div>
          </div>

          <NewsDetailActions id={news.id} initialLikes={news.likes} shareUrl={shareUrl} />
        </header>

        <Separator className="mb-8" />

        {/* Article Content */}
        <div className="prose max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </div>

        <Separator className="my-12" />

        {/* Related News */}
        {relatedNewsItems.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">相关新闻</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedNewsItems.map((relatedNews: { id: number; title: string; summary: string; date: string }) => (
                <Card key={relatedNews.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      {relatedNews.date}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">{relatedNews.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{relatedNews.summary}</p>
                    <Link href={`/news/${relatedNews.id}`}>
                      <Button variant="link" className="p-0">
                        阅读更多 <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-12 pt-8 border-t">
          <Link href="/news">
            <Button variant="outline">查看更多新闻</Button>
          </Link>
          <Link href="/#contact">
            <Button>联系我们</Button>
          </Link>
        </div>
      </article>

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

async function getBaseUrl() {
  const h = await headers()
  const protocol = h.get("x-forwarded-proto") || "http"
  const host = h.get("x-forwarded-host") || h.get("host") || "localhost:3000"
  return `${protocol}://${host}`
}

function toAbsoluteUrl(url: string, baseUrl: string) {
  if (!url) return ""
  if (/^https?:\/\//i.test(url)) return url
  if (url.startsWith("/")) return `${baseUrl}${url}`
  return `${baseUrl}/${url}`
}

function transformContentHtml(html: string, baseUrl: string) {
  if (!html) return ""
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    let out = tag
    if (!/\bloading\s*=/.test(out)) {
      out = out.replace("<img", "<img loading=\"lazy\"")
    }
    if (/\bstyle\s*=/.test(out)) {
      out = out.replace(/style=\"([^\"]*)\"/i, (m, s) => {
        let style = s
        if (!/max-width\s*:\s*100%/i.test(style)) style += "; max-width: 100%"
        if (!/height\s*:\s*auto/i.test(style)) style += "; height: auto"
        return `style="${style.trim()}"`
      })
    } else {
      out = out.replace("<img", "<img style=\"max-width: 100%; height: auto\"")
    }
    const srcMatch = out.match(/src=[\"']([^\"']+)[\"']/i)
    if (srcMatch) {
      const abs = toAbsoluteUrl(srcMatch[1], baseUrl)
      out = out.replace(srcMatch[0], `src="${abs}"`)
    }
    return out
  })
}

function formatDate(createdAt?: string | null, publishedAt?: string | null) {
  const raw = createdAt || publishedAt
  if (!raw) return ""
  const d = new Date(raw)
  if (isNaN(d.getTime())) return ""
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${day}`
}
