"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Clock,
  GitBranch,
  Layers,
  TrendingUp,
} from "lucide-react"

const EASE = [0.22, 1, 0.36, 1] as const

// Random-ish sparkline path generator using seeded values
function sparkPath(values: number[], w: number, h: number) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const step = w / (values.length - 1)
  return values
    .map((v, i) => {
      const x = i * step
      const y = h - ((v - min) / range) * h
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(" ")
}

const oeeSeries = [74, 76, 72, 78, 81, 79, 84, 83, 86, 85, 87, 89]
const qualitySeries = [94, 95, 93, 92, 95, 96, 94, 97, 96, 98, 97, 98]

const activityLog = [
  { ts: "14:23:02", agent: "Sensor Cleanse", kind: "ok", msg: "Interpolated 3 gaps on T-045.PV" },
  { ts: "14:23:08", agent: "Alarm Rationalizer", kind: "warn", msg: "Chatter grouped — 12 alarms → 1" },
  { ts: "14:23:14", agent: "RCA (cross-stack)", kind: "info", msg: "Timeline assembled · Pump P-12" },
  { ts: "14:23:21", agent: "OEE Analytics", kind: "ok", msg: "Shift OEE +0.4pp to 87.3%" },
  { ts: "14:23:26", agent: "Quality Deviation", kind: "info", msg: "Batch B-2104 within spec" },
  { ts: "14:23:33", agent: "Order Intelligence", kind: "warn", msg: "SO-48812 at-risk · -1 shift" },
]

export function AgentsAtWorkDashboard() {
  const [clockTick, setClockTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setClockTick((t) => t + 1), 1200)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-xl shadow-foreground/5"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/50">
        <div className="flex items-center gap-2.5">
          <Layers className="w-4 h-4 text-foreground" />
          <span className="text-sm font-mono text-foreground">cw.console</span>
          <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline">
            · line 3 / shift 2
          </span>
        </div>
        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground">
            Live · 18 agents
          </span>
        </motion.div>
      </div>

      {/* Grid: KPI tiles + activity log */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.2fr]">
        {/* OEE panel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-5 border-b lg:border-b-0 lg:border-r border-border"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              OEE · Line 3
            </p>
            <BarChart3 className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <p className="text-3xl font-bold tracking-tight text-foreground tabular-nums">87.3%</p>
            <span className="inline-flex items-center gap-0.5 text-[11px] font-mono text-[var(--orange)]">
              <TrendingUp className="w-3 h-3" />
              +4.2pp
            </span>
          </div>
          <svg viewBox="0 0 200 48" className="w-full h-12">
            <defs>
              <linearGradient id="oeeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--orange)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="var(--orange)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.35, ease: EASE }}
              d={sparkPath(oeeSeries, 200, 48)}
              fill="none"
              stroke="var(--orange)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.5 }}
              d={`${sparkPath(oeeSeries, 200, 48)} L 200 48 L 0 48 Z`}
              fill="url(#oeeFill)"
            />
          </svg>
          <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground mt-2">
            <span>06:00</span>
            <span>now</span>
          </div>
        </motion.div>

        {/* Quality panel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-5 border-b lg:border-b-0 lg:border-r border-border"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              First-pass yield
            </p>
            <CheckCircle2 className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <p className="text-3xl font-bold tracking-tight text-foreground tabular-nums">98.1%</p>
            <span className="text-[11px] font-mono text-muted-foreground">+0.6</span>
          </div>
          <svg viewBox="0 0 200 48" className="w-full h-12">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.45, ease: EASE }}
              d={sparkPath(qualitySeries, 200, 48)}
              fill="none"
              stroke="var(--foreground)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {qualitySeries.map((v, i) => {
              const max = Math.max(...qualitySeries)
              const min = Math.min(...qualitySeries)
              const x = (i * 200) / (qualitySeries.length - 1)
              const y = 48 - ((v - min) / (max - min)) * 48
              return (
                <motion.circle
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.2 + i * 0.04 }}
                  cx={x}
                  cy={y}
                  r="1.5"
                  fill="var(--foreground)"
                />
              )
            })}
          </svg>
          <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground mt-2">
            <span>12-hr</span>
            <span>rolling</span>
          </div>
        </motion.div>

        {/* Active agents log */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Agent activity
            </p>
            <Activity className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            {activityLog.map((log, i) => {
              const idx = (clockTick + i) % activityLog.length
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-2.5 text-[11px] font-mono"
                >
                  <span className="text-muted-foreground tabular-nums flex-shrink-0">{log.ts}</span>
                  <span
                    className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${
                      log.kind === "ok"
                        ? "bg-foreground"
                        : log.kind === "warn"
                        ? "bg-[var(--orange)]"
                        : "bg-muted-foreground"
                    }`}
                  />
                  <span className="text-foreground flex-shrink-0 min-w-[110px]">{log.agent}</span>
                  <span className="text-muted-foreground truncate">{log.msg}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Footer strip */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-background/40 text-[10px] font-mono text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <AlertTriangle className="w-3 h-3 text-[var(--orange)]" />
            3 active alarms
          </span>
          <span className="inline-flex items-center gap-1.5">
            <GitBranch className="w-3 h-3 text-foreground" />
            1 RCA in progress
          </span>
          <span className="inline-flex items-center gap-1.5 hidden sm:inline-flex">
            <Clock className="w-3 h-3 text-foreground" />
            MTTA 2m 14s
          </span>
        </div>
        <span className="text-foreground/50">context-weaver.console.v4</span>
      </div>
    </motion.div>
  )
}
