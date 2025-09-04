import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Liu Lab',
  description: 'Liu Lab',
  generator: 'Liu Lab',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
