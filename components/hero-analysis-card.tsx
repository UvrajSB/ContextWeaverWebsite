"use client"

import { motion } from "framer-motion"
import { CheckCircle2, AlertCircle, Clock, Cpu } from "lucide-react"

const timelineEvents = [
  { time: "14:23", text: "Temperature spike on T-045", type: "warn" },
  { time: "14:24", text: "Pressure drop cascade detected", type: "warn" },
  { time: "14:25", text: "Safety interlock triggered", type: "error" },
  { time: "14:26", text: "Line 3 shutdown initiated", type: "error" },
]

const sources = [
  { name: "SCADA", detail: "24k tags" },
  { name: "Historian", detail: "3.2M rows" },
  { name: "MES", detail: "847 events" },
]

export function HeroAnalysisCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Glow behind the card */}
      <div className="absolute inset-0 -m-4 rounded-3xl bg-primary/5 blur-2xl pointer-events-none" />

      {/* Main card */}
      <div className="relative rounded-2xl border border-border bg-card shadow-2xl shadow-foreground/5 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-secondary/40">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">RCA Agent</span>
            <span className="text-xs text-muted-foreground">/ Line 3 Downtime</span>
          </div>
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">Analyzing</span>
          </motion.div>
        </div>

        <div className="p-5 space-y-4">

          {/* Data Sources */}
          <div>
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">
              Data sources connected
            </p>
            <div className="flex gap-2">
              {sources.map((src, i) => (
                <motion.div
                  key={src.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
                  className="flex-1 rounded-xl border border-border bg-secondary/50 px-3 py-2.5 text-center"
                >
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="text-xs font-semibold text-foreground">{src.name}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">{src.detail}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">
              Event timeline
            </p>
            <div className="relative space-y-0">
              {/* Vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                className="absolute left-[31px] top-3 bottom-3 w-px bg-border origin-top"
              />
              {timelineEvents.map((evt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.5 + i * 0.2 }}
                  className="flex items-start gap-3 py-1.5"
                >
                  <div className="flex items-center gap-2 flex-shrink-0 w-16">
                    <div
                      className={`w-2 h-2 rounded-full mt-0.5 z-10 ${
                        evt.type === "error" ? "bg-destructive" : "bg-amber-400"
                      }`}
                    />
                    <span className="text-[10px] font-mono text-muted-foreground">{evt.time}</span>
                  </div>
                  <span
                    className={`text-xs leading-relaxed ${
                      evt.type === "error" ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {evt.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Root cause result */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-primary/30 bg-primary/5 p-4"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-semibold text-foreground">Root cause identified</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bearing degradation in Pump P-12. Last maintenance 127 days ago, exceeding 90-day interval. Corroborated by vibration trend on V-P12-01.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-[11px] text-muted-foreground">Investigation completed in <strong className="text-foreground">4 min 12 sec</strong></span>
            </div>
          </motion.div>

        </div>

        {/* Footer strip */}
        <div className="px-5 py-3 border-t border-border bg-secondary/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {["12 sensors cleaned", "3 gaps interpolated", "5 sources linked"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 + i * 0.15 }}
                className="text-[10px] text-muted-foreground"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <AlertCircle className="w-3.5 h-3.5 text-muted-foreground/40" />
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 3.0 }}
        className="absolute -top-4 -right-4 rounded-xl border border-border bg-card shadow-lg px-3 py-2 flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-xs font-medium text-foreground">OEE: 87.3%</span>
        <span className="text-xs text-emerald-600 font-semibold">+4.2%</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 3.2 }}
        className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card shadow-lg px-3 py-2 flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        <span className="text-xs font-medium text-foreground">12 alarms rationalized</span>
      </motion.div>
    </motion.div>
  )
}
