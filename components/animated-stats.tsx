"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface StatProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

function AnimatedCounter({ value, suffix = "", prefix = "", label, duration = 2000 }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const startTime = Date.now()
      const endValue = value

      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.floor(easeOutQuart * endValue)

        setCount(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(endValue)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {prefix}{count.toLocaleString()}{suffix}
        </span>
      </div>
      <p className="text-muted-foreground text-sm md:text-base">{label}</p>
    </div>
  )
}

export function AnimatedStats() {
  const stats = [
    { value: 99, suffix: ".9%", label: "Uptime Guarantee" },
    { value: 50, suffix: "+", label: "Enterprise Integrations" },
    { value: 10, suffix: "x", label: "Faster Incident Resolution" },
    { value: 24, suffix: "/7", label: "Continuous Monitoring" },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30 border-y border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              duration={2000 + index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
