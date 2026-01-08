"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  FileText,
  Calendar,
  DollarSign,
  Download,
} from "lucide-react"
import Link from "next/link"

export default function RecruitmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    degree: "",
    major: "",
    university: "",
    gpa: "",
    research: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    console.log("Form submitted:", formData)
    alert("申请已提交，我们会尽快与您联系！")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">招生信息</h1>
          <p className="text-xl text-slate-600 mb-8">欢迎加入Ruminant Metabolism and Physiology Laboratory，共同探索反刍动物消化道营养</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">15+</div>
              <div className="text-slate-600">在读学生</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-slate-600">就业率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-slate-600">获得奖学金</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">5+</div>
              <div className="text-slate-600">合作企业</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="overview">招生概述</TabsTrigger>
              <TabsTrigger value="requirements">招生要求</TabsTrigger>
              <TabsTrigger value="process">申请流程</TabsTrigger>
              <TabsTrigger value="benefits">待遇福利</TabsTrigger>
              <TabsTrigger value="apply">在线申请</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      招生类型
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div>
                          <h4 className="font-medium text-slate-900">博士研究生</h4>
                          <p className="text-sm text-slate-600">学制4年，全日制培养</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <h4 className="font-medium text-slate-900">硕士研究生</h4>
                          <p className="text-sm text-slate-600">学制3年，全日制培养</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div>
                          <h4 className="font-medium text-slate-900">本科实习生</h4>
                          <p className="text-sm text-slate-600">暑期实习，优秀者可推荐免试</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      研究方向
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "反刍动物消化道营养",
                        "反刍动物上皮生理",
                        "反刍动物胃肠道发育与营养调控",
                        "宏转录组",
                        "单细胞转录组",
                        "扩增子测序",
                        "宏基因组"
                      ].map((direction, index) => (
                        <Badge key={index} variant="outline" className="justify-center">
                          {direction}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>实验室优势</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2">顶尖师资</h3>
                      <p className="text-sm text-slate-600">
                        导师团队在反刍动物消化道领域有丰富经验，发表高水平论文60余篇，主持国家级项目多项
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2">团队协作</h3>
                      <p className="text-sm text-slate-600">
                        实验室氛围融洽，鼓励团队合作，定期举办学术讨论会和技术分享
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2">产学结合</h3>
                      <p className="text-sm text-slate-600">
                        与多家畜牧企业建立合作关系，提供实习，理论与实践相结合
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Requirements Tab */}
            <TabsContent value="requirements" className="space-y-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                      博士研究生招生要求
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">基本要求</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            已获得硕士学位或应届硕士毕业生
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            动物科学，动物医学，生物信息学等相关专业背景
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            英语六级450分以上
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">优先条件</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-amber-500" />
                            有反刍动物消化相关研究经验
                          </li>
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-amber-500" />
                            发表过高质量学术论文
                          </li>
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-amber-500" />
                            熟练掌握数据分析流程
                          </li>
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-amber-500" />
                            参与过相关项目或竞赛获奖
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-green-600" />
                      硕士研究生招生要求
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">基本要求</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            本科学历，动物科学相关专业
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            本科GPA不低于3.0
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            通过研究生入学考试
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            具备良好的数学基础
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">优先条件</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-amber-500" />
                            有夏令营或竞赛经历
                          </li>
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-amber-500" />
                            熟悉数据分析基础知识
                          </li>
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-amber-500" />
                            有实习或项目经验
                          </li>
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-amber-500" />
                            获得过奖学金或荣誉
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-purple-600" />
                      本科实习生要求
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">基本要求</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            本科在读，大二及以上年级
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            动物科学等相关专业
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            学习成绩优秀，专业排名前30%
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            能够保证实习时间不少于2个月
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">技能要求</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-amber-500" />
                            生理生化等专业知识扎实
                          </li>
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-amber-500" />
                            了解基本数据分析流程
                          </li>
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-amber-500" />
                            有团队合作精神
                          </li>
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-amber-500" />
                            学习能力强，积极主动
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Process Tab */}
            <TabsContent value="process" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>申请流程</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {[
                      {
                        step: "1",
                        title: "在线申请",
                        description: "填写在线申请表格，上传相关材料",
                        icon: FileText,
                        color: "bg-blue-500",
                      },
                      {
                        step: "2",
                        title: "材料审核",
                        description: "导师团队审核申请材料，筛选合适候选人",
                        icon: CheckCircle,
                        color: "bg-green-500",
                      },
                      {
                        step: "3",
                        title: "面试交流",
                        description: "通过初审者参加面试，深入了解研究兴趣",
                        icon: Users,
                        color: "bg-purple-500",
                      },
                      {
                        step: "4",
                        title: "录取通知",
                        description: "发放录取通知，确认入学意向",
                        icon: Award,
                        color: "bg-amber-500",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold`}
                        >
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-slate-600">{item.description}</p>
                        </div>
                        <item.icon className="h-6 w-6 text-slate-400 mt-1" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>申请材料清单</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">必需材料</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-slate-500" />
                          个人简历（中英文）
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-slate-500" />
                          成绩单（官方盖章）
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-slate-500" />
                          学位证书复印件
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-slate-500" />
                          英语水平证明
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-slate-500" />
                          研究计划书
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">补充材料</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-slate-500" />
                          发表论文列表
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-slate-500" />
                          项目经历证明
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-slate-500" />
                          获奖证书
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-slate-500" />
                          推荐信（2封）
                        </li>
                        <li className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-slate-500" />
                          其他相关材料
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-amber-800 mb-1">注意事项</h4>
                        <ul className="text-sm text-amber-700 space-y-1">
                          <li>• 所有材料请提供PDF格式的电子版</li>
                          <li>• 中文材料需提供英文翻译件</li>
                          <li>• 材料不全者将不予考虑</li>
                          <li>• 申请材料恕不退还</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Benefits Tab */}
            <TabsContent value="benefits" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      奖学金政策
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">博士研究生</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• 国家奖学金：30,000元/年</li>
                          <li>• 国家助学金金：15,000元/年</li>
                          <li>• 科研津贴：1,000-2,000元/月</li>
                          <li>• 校一等奖学金：18,000元 </li>
                          <li>• 校二等奖学金：15,000元 </li>
                          <li>• 校三等奖学金：12,000元 </li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-2">硕士研究生</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• 国家助学金：6,000元/年</li>
                          <li>• 科研津贴：200元/月</li>
                          <li>• 校一等奖学金：7000元</li>
                          <li>• 校二等奖学金奖学金：5000元</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                        <h4 className="font-medium text-purple-900 mb-2">本科实习生</h4>
                        <ul className="text-sm text-purple-800 space-y-1">
                          <li>• 实习津贴：以实际情况为准</li>
                          <li>• 优秀实习生奖励：以实际情况为准</li>
                          <li>• 推荐免试研究生资格</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      培养支持
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-slate-900">学术资源</h4>
                          <p className="text-sm text-slate-600">提供高性能计算资源、数据集、文献数据库等</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-slate-900">会议支持</h4>
                          <p className="text-sm text-slate-600">资助参加国际顶级会议，报销差旅费用</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-slate-900">交流机会</h4>
                          <p className="text-sm text-slate-600">与浙大、中农等知名高校联合培养机会</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-slate-900">就业指导</h4>
                          <p className="text-sm text-slate-600">提供就业指导，推荐到知名企业和科研院所</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-slate-900">生活保障</h4>
                          <p className="text-sm text-slate-600">提供宿舍、食堂、医疗等完善的生活保障</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>毕业生去向</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-900 mb-2">5%</div>
                      <div className="text-slate-600 mb-4">知名企业</div>
                      <div className="text-sm text-slate-500">中国知名畜牧企业</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-900 mb-2">85%</div>
                      <div className="text-slate-600 mb-4">继续深造</div>
                      <div className="text-sm text-slate-500">留在本校或访学交流</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-900 mb-2">10%</div>
                      <div className="text-slate-600 mb-4">科研院所</div>
                      <div className="text-sm text-slate-500">中国农科院等科研院所</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Apply Tab */}
            <TabsContent value="apply" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>在线申请表</CardTitle>
                  <p className="text-sm text-slate-600">请填写以下信息，我们会尽快与您联系</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">姓名 *</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="请输入您的姓名"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">邮箱 *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="请输入您的邮箱"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">电话</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="请输入您的电话号码"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">申请类型 *</label>
                        <Select value={formData.degree} onValueChange={(value) => handleInputChange("degree", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="请选择申请类型" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="phd">博士研究生</SelectItem>
                            <SelectItem value="master">硕士研究生</SelectItem>
                            <SelectItem value="intern">本科实习生</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">专业背景</label>
                        <Input
                          value={formData.major}
                          onChange={(e) => handleInputChange("major", e.target.value)}
                          placeholder="如：计算机科学与技术"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">毕业院校</label>
                        <Input
                          value={formData.university}
                          onChange={(e) => handleInputChange("university", e.target.value)}
                          placeholder="请输入您的毕业院校"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">GPA/成绩</label>
                        <Input
                          value={formData.gpa}
                          onChange={(e) => handleInputChange("gpa", e.target.value)}
                          placeholder="如：3.5/4.0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">感兴趣的研究方向</label>
                        <Input
                          value={formData.research}
                          onChange={(e) => handleInputChange("research", e.target.value)}
                          placeholder="如：深度学习、计算机视觉"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">个人简介</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="请简要介绍您的学术背景、研究经历、兴趣方向等"
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1">
                        提交申请
                      </Button>
                      <Button type="button" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        下载申请表
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>联系方式</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">招生咨询</h4>
                      <div className="space-y-2 text-sm text-slate-700">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-slate-500" />
                          <a href="mailto:recruit@university.edu.cn" className="hover:text-slate-900">
                          liujunhua@njau.edu.cn
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-slate-500" />
                          <span>025-84395523</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-slate-500" />
                          <span>理科楼B420</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">办公时间</h4>
                      <div className="space-y-2 text-sm text-slate-700">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-slate-500" />
                          <span>周一至周五：9:00-17:00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-slate-500" />
                          <span>周六：9:00-12:00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-slate-500" />
                          <span>周日及节假日：休息</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* FAQ Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>常见问题</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>申请截止时间是什么时候？</AccordionTrigger>
                  <AccordionContent>
                    博士研究生申请截止时间为每年3月31日，硕士研究生申请截止时间为每年9月30日。本科实习生全年接受申请，建议提前2个月申请。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>是否需要提前联系导师？</AccordionTrigger>
                  <AccordionContent>
                    建议在正式申请前通过邮件联系导师，介绍自己的研究兴趣和背景。这有助于导师更好地了解您，提高申请成功率。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>实验室的研究环境如何？</AccordionTrigger>
                  <AccordionContent>
                    实验室仪器齐全，并有高性能服务器可供生信分析使用。同时提供舒适的办公环境、图书资料和学术交流平台。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>毕业后的就业前景如何？</AccordionTrigger>
                  <AccordionContent>
                    我们的毕业生主要去向包括知名养殖企业、科研院所和继续深造。实验室与多家企业建立合作关系，为学生提供实习和就业机会。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>是否接受跨专业申请？</AccordionTrigger>
                  <AccordionContent>
                    我们欢迎水产、生信等相关专业的优秀学生申请。跨专业申请者需要具备良好的生理生化基础和数据分析能力，并表现出对该方向研究的浓厚兴趣。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">反刍动物消化道微生物实验室</div>
            <p className="text-slate-300 mb-4">Ruminant Metabolism and Physiology Laboratory</p>
            <p className="text-slate-400 text-sm">&copy; 2024 反刍动物消化道微生物实验室. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
