"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

interface CTABandProps {
  title?: string
  description?: string
}

export function CTABand({
  title = "If your story is split across tools, unify it.",
  description = "Tell us what systems you run and what outcomes matter first. We will map the first agent pack and the context needed to make it reliable.",
}: CTABandProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-28 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-10 leading-relaxed"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" asChild className="btn-gradient rounded-full px-8 gap-2">
            <a href="https://calendly.com/yuvraj-s-bhadauria/30min" target="_blank" rel="noopener noreferrer">
              Book a demo
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="rounded-full px-8 bg-transparent">
            <a href="https://calendly.com/yuvraj-s-bhadauria/30min" target="_blank" rel="noopener noreferrer">Talk to founder</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
