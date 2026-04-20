"use client"

import { motion } from "framer-motion"
import {
  Cpu,
  Factory,
  Building2,
  Sparkles,
  Layers,
  GitBranch,
  Workflow,
  ShieldCheck,
} from "lucide-react"

const EASE = [0.22, 1, 0.36, 1] as const

type Layer = {
  key: string
  system: string
  systemSub: string
  icon: typeof Cpu
  agents: string[]
}

const layers: Layer[] = [
  {
    key: "erp",
    system: "ERP / CRM",
    systemSub: "SAP · Oracle · Dynamics · Salesforce",
    icon: Building2,
    agents: ["Order Intelligence", "Margin Agent", "Inventory Agent"],
  },
  {
    key: "mes",
    system: "MES",
    systemSub: "Ignition · Wonderware · Rockwell · GE",
    icon: Factory,
    agents: ["OEE Analytics", "Quality Deviation", "Scheduling Agent"],
  },
  {
    key: "scada",
    system: "SCADA / Historians",
    systemSub: "OSIsoft PI · Aveva · OPC-UA",
    icon: Cpu,
    agents: ["Sensor Cleanse", "Alarm Rationalizer", "Asset Health"],
  },
]

const crossStack = [
  { icon: GitBranch, name: "Root Cause Agent", scope: "SCADA + MES" },
  { icon: Workflow, name: "Demand-to-Production", scope: "ERP + MES" },
  { icon: ShieldCheck, name: "Compliance Agent", scope: "All layers" },
]

export function StackLayersDiagram() {
  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] gap-6 lg:gap-10 items-stretch">
      {/* Main stack ── layers rendered top→bottom (ERP first) */}
      <div className="relative flex flex-col gap-5">
        {layers.map((layer, idx) => {
          const Icon = layer.icon
          // Reveal order: bottom layer (SCADA) first, then MES, then ERP.
          const revealIndex = layers.length - 1 - idx
          return (
            <motion.div
              key={layer.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: revealIndex * 0.22, ease: EASE }}
              className="relative group"
              data-layer={layer.key}
            >
              {/* Agent application strip ── top */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: revealIndex * 0.22 + 0.45, ease: EASE }}
                className="rounded-t-2xl border border-border border-b-0 bg-foreground text-background px-5 py-3.5 flex items-center justify-between gap-3 flex-wrap"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-background/60">
                  <Sparkles className="w-3 h-3" />
                  Agent application layer
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {layer.agents.map((agent, i) => (
                    <motion.span
                      key={agent}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: revealIndex * 0.22 + 0.6 + i * 0.08, ease: EASE }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/10 border border-background/20 text-[11px] font-medium text-background"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
                      {agent}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Semantic / context layer ── thin */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: revealIndex * 0.22 + 0.3, ease: EASE }}
                className="border-x border-border bg-muted/60 px-5 py-2 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  <Layers className="w-3 h-3" />
                  Semantic &middot; context layer
                </div>
                {/* little animated ticks showing context flowing */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                      }}
                      className="inline-block w-1 h-3 bg-foreground/40 rounded-sm"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Base system ── the stack layer */}
              <div className="rounded-b-2xl border border-border border-t-0 bg-card px-5 py-5 sm:py-6 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-foreground/5 text-foreground flex items-center justify-center border border-border flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base sm:text-lg font-bold tracking-tight text-foreground leading-tight">
                    {layer.system}
                  </p>
                  <p className="text-[11px] sm:text-xs font-mono text-muted-foreground truncate">
                    {layer.systemSub}
                  </p>
                </div>
                <span className="text-[10px] font-mono tabular-nums text-muted-foreground tracking-wider hidden sm:inline">
                  / L{3 - idx}
                </span>
              </div>

              {/* Connector dot to side panel (desktop only) */}
              <span className="hidden lg:block absolute top-1/2 -right-[13px] -translate-y-1/2 w-2 h-2 rounded-full bg-foreground" />
            </motion.div>
          )
        })}
      </div>

      {/* Side panel ── cross-stack agents */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
        className="relative"
      >
        {/* Connection lines (desktop only) */}
        <svg
          className="hidden lg:block absolute -left-10 top-0 h-full pointer-events-none"
          width="40"
          viewBox="0 0 40 600"
          preserveAspectRatio="none"
        >
          {[0, 1, 2].map((i) => {
            const y = 64 + i * 180
            return (
              <motion.path
                key={i}
                d={`M 0 ${y} Q 20 ${y} 40 120`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 3"
                className="text-border"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.2 + i * 0.15, ease: EASE }}
              />
            )
          })}
        </svg>

        <div className="relative h-full rounded-2xl border border-border bg-foreground text-background p-6 flex flex-col gap-5">
          {/* Header */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-background/60 mb-2">
              / Cross-stack
            </p>
            <p className="text-lg font-bold tracking-tight leading-tight">
              Agents that span
              <br />
              <span className="text-background/60">all three layers</span>
            </p>
          </div>

          <div className="h-px bg-background/15" />

          {/* Agent list */}
          <div className="space-y-2.5 flex-1">
            {crossStack.map((a, i) => {
              const Icon = a.icon
              return (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.12, ease: EASE }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-background/5 border border-background/10"
                >
                  <div className="w-9 h-9 rounded-lg bg-background/10 border border-background/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight">{a.name}</p>
                    <p className="text-[11px] font-mono text-background/50 mt-0.5">{a.scope}</p>
                  </div>
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 rounded-full bg-background mt-2 flex-shrink-0"
                  />
                </motion.div>
              )
            })}
          </div>

          <div className="h-px bg-background/15" />

          <p className="text-[11px] text-background/60 leading-relaxed">
            Built on the semantic layer below — cross-stack agents read shared context from every layer to
            reason end-to-end.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
