import type { Metadata } from "next"
import "./globals.css"

import { SiteHeader } from "@/components/layout/site-header"

export const metadata: Metadata = {
  title: "Liu Lab",
  description: "Liu Lab",
  generator: "Liu Lab",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
