"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/#research", label: "研究方向" },
  { href: "/#team", label: "团队成员" },
  { href: "/publications", label: "研究成果" },
  { href: "/news", label: "新闻动态" },
  { href: "/recruitment", label: "加入我们" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  const clean = href.split("#")[0]
  return clean !== "/" && pathname.startsWith(clean)
}

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              Liu Lab
            </Link>
            <Badge variant="secondary">Ruminant Metabolism and Physiology Laboratory</Badge>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-slate-700 hover:text-slate-900 font-medium ${
                  isActive(pathname, link.href) ? "text-slate-900" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
