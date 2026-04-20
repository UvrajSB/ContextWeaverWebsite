"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    const t = setTimeout(() => {
      window.location.href = "https://calendly.com/yuvraj-s-bhadauria/30min"
    }, 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md text-center"
      >
        <div className="inline-flex items-center gap-3 mb-6 font-mono text-[11px] tabular-nums text-muted-foreground tracking-[0.2em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]" />
          <span>Redirecting</span>
          <span className="w-6 h-px bg-border" />
          <span>→ calendly</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
          Opening the scheduler
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          If it doesn't open automatically, use the link below.
        </p>
        <a
          href="https://calendly.com/yuvraj-s-bhadauria/30min"
          className="group inline-flex items-stretch rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors overflow-hidden"
        >
          <span className="inline-flex items-center px-6 text-sm font-semibold">
            Open Calendly
          </span>
          <span className="inline-flex items-center justify-center w-10 h-10 my-1.5 mr-1.5 rounded-full bg-[var(--orange)] text-[var(--orange-foreground)]">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </a>
      </motion.div>
    </div>
  )
}
