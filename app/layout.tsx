import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ContextWeaver",
  description:
    "Agentic layers over your entire manufacturing stack. ContextWeaver builds semantic and agent-application layers on top of your SCADA, MES, and ERP systems — and trains your team to extend them.",
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <ScrollProgress />
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
