"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Props {
  id: number
  initialLikes: number
  shareUrl: string
}

export default function NewsDetailActions({ id, initialLikes, shareUrl }: Props) {
  const { toast } = useToast()
  const [likes, setLikes] = useState<number>(initialLikes)
  const [liking, setLiking] = useState(false)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    try {
      const flag = typeof window !== "undefined" ? localStorage.getItem(`liked_news_${id}`) : null
      setLiked(!!flag)
    } catch {}
  }, [id])

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      toast({ title: "已复制链接", description: shareUrl })
    } catch {
      try {
        const textarea = document.createElement("textarea")
        textarea.value = shareUrl
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea)
        toast({ title: "已复制链接", description: shareUrl })
      } catch (e) {
        toast({ title: "复制失败", variant: "destructive" })
      }
    }
  }

  const handleLike = async () => {
    if (liked || liking) return
    setLiking(true)
    try {
      const res = await fetch(`/api/news/${id}/like`, { method: "POST" })
      if (!res.ok) throw new Error("请求失败")
      setLiked(true)
      try {
        localStorage.setItem(`liked_news_${id}`, "1")
      } catch {}
      setLikes((v) => v + 1)
      toast({ title: "已点赞" })
    } catch (e: any) {
      toast({ title: "点赞失败", description: e?.message || "网络错误", variant: "destructive" })
    } finally {
      setLiking(false)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <Button size="sm" variant="outline" onClick={handleShare} aria-label="分享">
        <Share2 className="h-4 w-4 mr-2" />
        分享
      </Button>
      <Button size="sm" variant="outline" onClick={handleLike} disabled={liked || liking} aria-label="点赞">
        <Heart className="h-4 w-4 mr-2" />
        {liked ? "已点赞" : "点赞"}
      </Button>
    </div>
  )
}
