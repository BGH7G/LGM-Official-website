import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
// import {Separator} from "@/components/ui/separator"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {
    ArrowLeft,
    Mail,
    Phone,
    MapPin,
    GraduationCap,
    Award,
    BookOpen,
    Users,
    ExternalLink,
    Download,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// 成员数据
const memberData = {
    "Liu-professor": {
        id: "Liu-professor",
        name: "刘军花",
        nameEn: "Liu Junhua",
        title: "教授，博士生导师，国家优秀青年科学基金获得者",
        titleEn: "Professor, PhD Supervisor",
        department: "动物科技学院",
        photo: "/avatar/liu.png",

        contact: {
            email: "liujunhua@njau.edu.cn",
            phone: "025-84395523",
            office: "理科楼B420",
            address: "南京农业大学动物科技学院理科楼",
        },

        education: [
            {
                degree: "博士",
                major: "动物营养与饲料科学专业",
                school: "南京农业大学",
                year: "2011-2014",
            },
            {
                degree: "硕士",
                major: "动物营养与饲料科学专业",
                school: "南京农业大学",
                year: "2007-2009",
            },
            {
                degree: "学士",
                major: "动物科学专业",
                school: "东北农业大学",
                year: "2003-2007",
            },
        ],

        experience: [
            {
                position: "教师",
                institution: "南京农业大学动物科技学院",
                period: "2014-now",
            },
            {
                position: "访问学者",
                institution: "加拿大阿尔伯塔大学",
                period: "2018-2010",
            },
        ],

        research: {
            interests: ["反刍动物消化道营养", "羔羊胃肠道发育与调控", "犊牛胃肠道发育与调控"],
            description:
                "反刍动物消化道营养；犊牛/羔羊胃肠道发育与营养调控",
        },

        achievements: {
            projects: [
                {
                    name: "反刍动物和鱼类中共生纤毛虫和细菌的共性遗传互作机制",
                    type: "国家重点研发计划",
                    amount: "50万元",
                    period: "2022-2027",
                    role: "项目负责人",
                },
                {
                    name: "湘西黄牛瘤胃秸秆纤维高效降解关键微生物的适应性规律与效应机制",
                    type: "国家自然科学基金重点支持项目",
                    amount: "62万元",
                    period: "2023-2026",
                    role: "项目负责人",
                },
                {
                    name: "基于多组学分析鉴定绵羊胃肠道微生物与宿主互作对性状形成的调控机制",
                    type: "国家重点研发计划子任务",
                    amount: "230万元",
                    period: "2021-2026",
                    role: "主持",
                },
            ],

            awards: [
                {
                    name: "南京农业大学优秀本科毕业设计特等奖指导教师",
                    year: "2021",
                    description: "",
                },
                {
                    name: "教育部自然科学奖二等奖",
                    year: "2019",
                    description: "",
                },
                {
                    name: "南京农业大学钟山学术新秀",
                    year: "2019",
                    description: "",
                },
                {
                    name: "全国百名优秀博士后基金获得者选介",
                    year: "2017",
                    description: "",
                },
            ],
        },

        publications: [
            {
                title: "Early concentrate starter introduction induces rumen epithelial parakeratosis by blocking keratinocyte differentiation with excessive ruminal butyrate accumulation",
                authors: ["Zhang, K (Zhang, Kai) ; Zhang, YL (Zhang, Yali) ; Qin, J (Qin, Jing) ; Zhu, HN (Zhu, Haining) ; Liu, N (Liu, Ning) ; Sun, DM (Sun, Daming) ; Yin, YY (Yin, Yuyang) ; Mao, SY (Mao, Shengyong) ; Zhu, WY (Zhu, Weiyun) ; Huang, Z (Huang, Zan) ; Liu, JH (Liu, Junhua)"],
                journal: "JOURNAL OF ADVANCED RESEARCH",
                year: 2024,
                type: "SCI",
                impact: "11.6",
                citations: 2,
                pdfUrl: "https://pubmed.ncbi.nlm.nih.gov/38128723/",
                doi: "10.1016/j.jare.2023.12.016",
            },
            {
                title: "Adaptive survival strategies of rumen microbiota with solid diet deficiency in early life cause epithelial mitochondrial dysfunction",
                authors: ["Yu, SQ (Yu, Shiqiang) ; Fu, YT (Fu, Yuting) ; Qu, JR (Qu, Jinrui) ; Zhang, K (Zhang, Kai) ; Zhu, WY (Zhu, Weiyun) ; Mao, SY (Mao, Shengyong) ; Liu, JH (Liu, Junhua)"],
                journal: "ISME JOURNAL",
                year: 2025,
                type: "SCI",
                impact: "12.5",
                citations: 2,
                pdfUrl: "https://academic.oup.com/ismej/article/19/1/wraf064/8106831",
                doi: "10.1093/ismejo/wraf064",
            },
            {
                title: "Dietary secoisolariciresinol diglucoside crude extract improves growth through modulating rumen bacterial community and epithelial development in lambs",
                authors: ["Liu, N (Liu, Ning) ; Yu, SQ (Yu, Shiqiang) ; Qu, JR (Qu, Jinrui) ; Tian, BY (Tian, Boya) ; Liu, JH (Liu, Junhua)"],
                journal: "JOURNAL OF THE SCIENCE OF FOOD AND AGRICULTURE",
                year: 2025,
                type: "SCI",
                impact: "4.2",
                citations: 1,
                pdfUrl: "https://pubmed.ncbi.nlm.nih.gov/39291551/",
                doi: "10.1002/jsfa.13909",
            },
            {
                title: "Early-life ruminal microbiome-derived indole-3-carboxaldehyde and prostaglandin D2 are effective promoters of rumen development",
                authors: ["Sun, DM (Sun, Daming) ; Bian, GR (Bian, Gaorui) ; Zhang, K (Zhang, Kai) ; Liu, N (Liu, Ning) ; Yin, YY (Yin, Yuyang) ; Hou, YL (Hou, Yuanlong) ; Xie, F (Xie, Fei) ; Zhu, WY (Zhu, Weiyun) ; Mao, SY (Mao, Shengyong) ; Liu, JH (Liu, Junhua)"],
                journal: "GENOME BIOLOGY",
                year: 2024,
                type: "SCI",
                impact: "16.3",
                citations: 8,
                pdfUrl: "https://genomebiology.biomedcentral.com/articles/10.1186/s13059-024-03205-x",
                doi: "10.1186/s13059-024-03205-x",
            },
        ],

        students: {
            current: {
                phd: [
                    {name: "张元锌", year: "2022级", research: "动物营养与饲料学(090502)"},
                    {name: "贾小巍", year: "2022级", research: "动物营养与饲料学(090502)"},
                    {name: "余诗强", year: "2023级", research: "动物营养与饲料学(090502)"},
                    {name: "张凯", year: "2024级", research: "动物营养与饲料学(090502)"},
                    {name: "田博雅", year: "2025级", research: "动物营养与饲料学(090502)"},
                    {name: "马世越", year: "2025级", research: "动物营养与饲料学(090502)"},
                    {name: "马浩凯", year: "2025级", research: "动物营养与饲料学(090502)"},
                    {name: "莫佳琪", year: "2025级", research: "动物营养与饲料学(090502)"},
                    {name: "孙伟", year: "2025级", research: "动物营养与饲料学(090502)"}
                ],
                master: [
                    {name: "付雨婷", year: "2024级", research: "动物营养与饲料学(090502)"},
                    {name: "曲金瑞", year: "2024级", research: "动物营养与饲料学(090502)"},
                    {name: "许东亮", year: "2024级", research: "畜牧(095133)"},
                    {name: "柏豪", year: "2025级", research: "畜牧(095133)"},
                    {name: "单雯涵", year: "2025级", research: "畜牧(095133)"},
                    {name: "李佳豪", year: "2025级", research: "动物营养与饲料学(090502)"},
                    {name: "腾超", year: "2025级", research: "动物营养与饲料学(090502)"}
                ],
            },
        },

        services: [
            {
                type: "副主编",
                name: "Small Ruminant Research",
                period: "2022-至今",
            },
            {
                type: "客座编辑",
                name: "Frontiers in Microbiology",
                period: "2020-至今",
            }
        ],

        teaching: [
            {
                course: "请输入--",
                type: "请输入--",
                hours: "48学时",
                semester: "春季学期",
            },
            {
                course: "请输入--",
                type: "请输入--",
                hours: "32学时",
                semester: "秋季学期",
            },
            {
                course: "请输入--",
                type: "请输入--",
                hours: "24学时",
                semester: "春季学期",
            },
        ],
    },
}

interface MemberPageProps {
    params: {
        slug: string
    }
}

export default function MemberPage({params}: MemberPageProps) {
    const member = memberData[params.slug as keyof typeof memberData]

    if (!member) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900 mb-4">成员不存在</h1>
                    <Link href="/">
                        <Button>返回首页</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Navigation */}
            <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-2xl font-bold text-slate-900">
                                Liu Lab
                            </Link>
                            <Badge variant="secondary">Laboratory of Gastrointestinal Microbiology</Badge>
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
                            <Link href="/#publications" className="text-slate-700 hover:text-slate-900 font-medium">
                                研究成果
                            </Link>
                            <Link href="/#news" className="text-slate-700 hover:text-slate-900 font-medium">
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Link href="/#team">
                    <Button variant="ghost" className="mb-6">
                        <ArrowLeft className="h-4 w-4 mr-2"/>
                        返回团队成员
                    </Button>
                </Link>
            </div>

            {/* Member Profile Header */}
            <section className="px-4 sm:px-6 lg:px-8 pb-12">
                <div className="max-w-7xl mx-auto">
                    <Card className="mb-8">
                        <CardContent className="p-8">
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Photo */}
                                <div className="flex-shrink-0">
                                    <div
                                        className="w-48 h-48 bg-slate-200 rounded-lg flex items-center justify-center mx-auto lg:mx-0 overflow-hidden">
                                        <Image src={member.photo} alt={member.name} width={192} height={192}
                                               className="object-cover w-full h-full"/>
                                    </div>
                                </div>

                                {/* Basic Info */}
                                <div className="flex-1">
                                    <div className="text-center lg:text-left">
                                        <h1 className="text-4xl font-bold text-slate-900 mb-2">{member.name}</h1>
                                        <p className="text-xl text-slate-600 mb-4">{member.nameEn}</p>
                                        <p className="text-lg text-slate-700 mb-6">{member.title}</p>
                                        <p className="text-slate-600 mb-6">{member.department}</p>

                                        {/* Research Interests */}
                                        <div className="mb-6">
                                            <h3 className="text-lg font-semibold text-slate-900 mb-3">研究方向</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {member.research.interests.map((interest, index) => (
                                                    <Badge key={index} variant="secondary">
                                                        {interest}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Contact Info */}
                                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Mail className="h-4 w-4 text-slate-500"/>
                                                <a href={`mailto:${member.contact.email}`}
                                                   className="text-slate-700 hover:text-slate-900">
                                                    {member.contact.email}
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Phone className="h-4 w-4 text-slate-500"/>
                                                <span className="text-slate-700">{member.contact.phone}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-slate-500"/>
                                                <span className="text-slate-700">{member.contact.office}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Detailed Information Tabs */}
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
                            <TabsTrigger value="overview">概览</TabsTrigger>
                            <TabsTrigger value="education">教育经历</TabsTrigger>
                            <TabsTrigger value="research">研究成果</TabsTrigger>
                            <TabsTrigger value="publications">发表论文</TabsTrigger>
                            <TabsTrigger value="students">指导学生</TabsTrigger>
                            <TabsTrigger value="services">学术服务</TabsTrigger>
                        </TabsList>

                        {/* Overview Tab */}
                        <TabsContent value="overview" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <BookOpen className="h-5 w-5"/>
                                        研究简介
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700 leading-relaxed">{member.research.description}</p>
                                </CardContent>
                            </Card>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Award className="h-5 w-5"/>
                                            主要荣誉
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {member.achievements.awards.slice(0, 3).map((award, index) => (
                                                <div key={index} className="border-l-4 border-slate-200 pl-4">
                                                    <h4 className="font-semibold text-slate-900">{award.name}</h4>
                                                    <p className="text-sm text-slate-600">{award.year}</p>
                                                    <p className="text-sm text-slate-700">{award.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>教学课程</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {member.teaching.map((course, index) => (
                                                <div key={index}
                                                     className="border-b border-slate-100 pb-3 last:border-b-0">
                                                    <h4 className="font-medium text-slate-900">{course.course}</h4>
                                                    <div className="flex justify-between text-sm text-slate-600">
                                                        <span>{course.type}</span>
                                                        <span>{course.hours}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Education Tab */}
                        <TabsContent value="education" className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <GraduationCap className="h-5 w-5"/>
                                            教育背景
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {member.education.map((edu, index) => (
                                                <div key={index} className="border-l-4 border-slate-200 pl-4">
                                                    <h4 className="font-semibold text-slate-900">
                                                        {edu.degree} - {edu.major}
                                                    </h4>
                                                    <p className="text-slate-700">{edu.school}</p>
                                                    <p className="text-sm text-slate-600">{edu.year}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>工作经历</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {member.experience.map((exp, index) => (
                                                <div key={index} className="border-l-4 border-slate-200 pl-4">
                                                    <h4 className="font-semibold text-slate-900">{exp.position}</h4>
                                                    <p className="text-slate-700">{exp.institution}</p>
                                                    <p className="text-sm text-slate-600">{exp.period}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Research Tab */}
                        <TabsContent value="research" className="space-y-6">
                            <div className="grid gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>主持项目</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-6">
                                            {member.achievements.projects.map((project, index) => (
                                                <div key={index} className="border rounded-lg p-4">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h4 className="font-semibold text-slate-900 flex-1">{project.name}</h4>
                                                        <Badge variant="outline">{project.role}</Badge>
                                                    </div>
                                                    <div className="grid md:grid-cols-3 gap-2 text-sm text-slate-600">
                                                        <span>{project.type}</span>
                                                        <span>资助金额：{project.amount}</span>
                                                        <span>执行期：{project.period}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>获得荣誉</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {member.achievements.awards.map((award, index) => (
                                                <div key={index}
                                                     className="flex items-start gap-4 p-4 border rounded-lg">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <Award className="h-6 w-6 text-amber-500"/>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-slate-900">{award.name}</h4>
                                                        <p className="text-sm text-slate-600 mb-1">{award.year}</p>
                                                        <p className="text-sm text-slate-700">{award.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Publications Tab */}
                        <TabsContent value="publications" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>近期发表论文</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        {member.publications.map((paper, index) => (
                                            <div key={index} className="border rounded-lg p-4">
                                                <div className="flex items-start justify-between mb-2">
                                                    <h4 className="font-semibold text-slate-900 flex-1 pr-4">{paper.title}</h4>
                                                    <div className="flex gap-2">
                                                        <Badge
                                                            variant={paper.type === "SCI" ? "default" : "secondary"}>{paper.type}</Badge>
                                                        <Badge variant="outline">IF: {paper.impact}</Badge>
                                                    </div>
                                                </div>
                                                <p className="text-slate-600 mb-2">{paper.authors.join(", ")}</p>
                                                <div
                                                    className="flex items-center justify-between text-sm text-slate-600">
                          <span className="font-medium">
                            {paper.journal}, {paper.year}
                          </span>
                                                    <span>被引用 {paper.citations} 次</span>
                                                </div>
                                                <div className="flex gap-2 mt-3">
                                                    {paper.pdfUrl && (
                                                        <Button size="sm" variant="outline" asChild>
                                                            <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
                                                                <Download className="h-3 w-3 mr-1"/>
                                                                PDF
                                                            </a>
                                                        </Button>
                                                    )}
                                                    {paper.doi && (
                                                        <Button size="sm" variant="outline" asChild>
                                                            <a
                                                                href={paper.doi.startsWith("http") ? paper.doi : `https://doi.org/${paper.doi}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <ExternalLink className="h-3 w-3 mr-1"/>
                                                                DOI
                                                            </a>
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Students Tab */}
                        <TabsContent value="students" className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>博士生</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            {member.students.current.phd.map((student, index) => (
                                                <div
                                                    key={index}
                                                    className="flex justify-between items-start p-3 bg-slate-50 rounded"
                                                >
                                                    <div>
                                                        <p className="font-medium text-slate-900">{student.name}</p>
                                                        <p className="text-sm text-slate-600">{student.research}</p>
                                                    </div>
                                                    <Badge variant="outline">{student.year}</Badge>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>研究生</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            {member.students.current.master.map((student, index) => (
                                                <div
                                                    key={index}
                                                    className="flex justify-between items-start p-3 bg-slate-50 rounded"
                                                >
                                                    <div>
                                                        <p className="font-medium text-slate-900">{student.name}</p>
                                                        <p className="text-sm text-slate-600">{student.research}</p>
                                                    </div>
                                                    <Badge variant="outline">{student.year}</Badge>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Services Tab */}
                        <TabsContent value="services" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>学术服务</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {member.services.map((service, index) => (
                                            <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                                                <div className="flex-shrink-0 mt-1">
                                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-medium text-slate-900">{service.name}</h4>
                                                        <Badge variant="outline">{service.type}</Badge>
                                                    </div>
                                                    <p className="text-sm text-slate-600">{service.period}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="text-2xl font-bold mb-4">反刍动物消化道微生物实验室</div>
                        <p className="text-slate-300 mb-4">Laboratory of Gastrointestinal Microbiology</p>
                        <p className="text-slate-400 text-sm">&copy; 2024 反刍动物消化道微生物实验室. 保留所有权利.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
