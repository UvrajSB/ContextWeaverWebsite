import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ContextWeaver - AI Agents for Industrial Operations",
  description:
    "Connect SCADA, historians, MES, ERP, CRM, and SOPs so operators, engineers, and leadership can make decisions from the same story.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ScrollProgress />
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
