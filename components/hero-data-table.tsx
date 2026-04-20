"use client"

import { motion } from "framer-motion"
import { FileText, Filter, CheckCircle2, AlertCircle } from "lucide-react"

const EASE = [0.22, 1, 0.36, 1] as const

type Row = {
  ts: string
  tag: string
  raw: string
  clean: string
  unit: string
  quality: "ok" | "interp" | "bad"
}

const rows: Row[] = [
  { ts: "14:23:01.204", tag: "T-045.PV",   raw: "78.42",   clean: "78.42",   unit: "°C",  quality: "ok" },
  { ts: "14:23:02.198", tag: "T-045.PV",   raw: "—",       clean: "78.51",   unit: "°C",  quality: "interp" },
  { ts: "14:23:03.211", tag: "T-045.PV",   raw: "78.61",   clean: "78.61",   unit: "°C",  quality: "ok" },
  { ts: "14:23:04.207", tag: "P-12.FLOW",  raw: "412.3",   clean: "412.3",   unit: "L/m", quality: "ok" },
  { ts: "14:23:05.199", tag: "P-12.FLOW",  raw: "9999",    clean: "411.8",   unit: "L/m", quality: "bad" },
  { ts: "14:23:06.210", tag: "P-12.FLOW",  raw: "410.9",   clean: "410.9",   unit: "L/m", quality: "ok" },
  { ts: "14:23:07.205", tag: "V-P12.VIB",  raw: "0.0412",  clean: "0.0412",  unit: "mm/s",quality: "ok" },
  { ts: "14:23:08.201", tag: "V-P12.VIB",  raw: "0.0468",  clean: "0.0468",  unit: "mm/s",quality: "ok" },
]

function QualityPill({ q }: { q: Row["quality"] }) {
  if (q === "ok") {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-foreground/60">
        <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
        ok
      </span>
    )
  }
  if (q === "interp") {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-foreground/60">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        interp
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-foreground/60">
      <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
      outlier
    </span>
  )
}

export function HeroDataTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
      className="relative w-full max-w-xl mx-auto"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 -m-6 rounded-3xl bg-foreground/[0.02] blur-2xl pointer-events-none" />

      {/* Main card */}
      <div className="relative rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-background/50">
          <div className="flex items-center gap-2.5 min-w-0">
            <FileText className="w-4 h-4 text-foreground/70 flex-shrink-0" />
            <span className="text-sm font-mono text-foreground truncate">sensors_line3.csv</span>
            <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline">
              · 12,847 rows
            </span>
          </div>
          <motion.div
            animate={{ opacity: [1, 0.45, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1.5 flex-shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-foreground">
              Ingesting
            </span>
          </motion.div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between px-5 py-2 border-b border-border bg-background/30 text-[10px] font-mono text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <Filter className="w-3 h-3" />
              quality &gt;= 0.7
            </span>
            <span className="hidden sm:inline text-foreground/30">·</span>
            <span className="hidden sm:inline">window 5s</span>
          </div>
          <span className="text-foreground/40">rows 1–8</span>
        </div>

        {/* Column header */}
        <div className="grid grid-cols-[1.3fr_1.2fr_0.9fr_0.9fr_0.8fr] gap-3 px-5 py-2.5 border-b border-border bg-muted/40 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <span>timestamp</span>
          <span>tag</span>
          <span className="text-right">raw</span>
          <span className="text-right">cleaned</span>
          <span className="text-right">quality</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-border/70">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.7 + i * 0.08, ease: EASE }}
              className={`grid grid-cols-[1.3fr_1.2fr_0.9fr_0.9fr_0.8fr] gap-3 px-5 py-2.5 text-xs font-mono items-center ${
                row.quality !== "ok" ? "bg-muted/20" : ""
              }`}
            >
              <span className="text-muted-foreground tabular-nums truncate">{row.ts}</span>
              <span className="text-foreground truncate">{row.tag}</span>
              <span
                className={`text-right tabular-nums truncate ${
                  row.quality === "bad"
                    ? "text-destructive line-through"
                    : row.quality === "interp"
                    ? "text-muted-foreground/60"
                    : "text-foreground/80"
                }`}
              >
                {row.raw}
              </span>
              <span className="text-right text-foreground tabular-nums truncate font-medium">
                {row.clean}
                <span className="text-muted-foreground/70 ml-1">{row.unit}</span>
              </span>
              <span className="text-right">
                <QualityPill q={row.quality} />
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-background/40">
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-foreground" />
              6 clean
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              1 interpolated
            </span>
            <span className="inline-flex items-center gap-1.5">
              <AlertCircle className="w-3 h-3 text-destructive" />
              1 outlier
            </span>
          </div>
          <span className="text-[10px] font-mono text-foreground/50 hidden sm:inline">
            context-weaver.de.v4
          </span>
        </div>
      </div>

      {/* Floating badge — quality score */}
      <motion.div
        initial={{ opacity: 0, y: -8, x: 8 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 1.6, ease: EASE }}
        className="absolute -top-4 -right-3 sm:-right-5 rounded-xl border border-border bg-card shadow-lg px-3.5 py-2"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col items-start">
            <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground leading-tight">
              Data quality
            </span>
            <span className="text-base font-bold text-foreground leading-tight tabular-nums">
              98.4%
            </span>
          </div>
          <span className="text-[10px] font-mono text-foreground bg-foreground/5 border border-border rounded px-1.5 py-0.5">
            +2.1
          </span>
        </div>
      </motion.div>

      {/* Floating badge — tags linked */}
      <motion.div
        initial={{ opacity: 0, y: 8, x: -8 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 1.8, ease: EASE }}
        className="absolute -bottom-4 -left-3 sm:-left-5 rounded-xl border border-border bg-card shadow-lg px-3.5 py-2 flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
        <span className="text-[11px] font-mono text-foreground">
          3 tags · linked to Pump P-12
        </span>
      </motion.div>
    </motion.div>
  )
}
