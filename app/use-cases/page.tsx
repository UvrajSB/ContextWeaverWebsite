"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Cpu,
  Factory,
  Building2,
  Layers,
  GitBranch,
  Wrench,
  Bell,
  BarChart3,
  FlaskConical,
  Activity,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Boxes,
  Users,
  Plus,
  MapPin,
} from "lucide-react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"

const EASE = [0.22, 1, 0.36, 1] as const

type UseCase = {
  id: string
  name: string
  icon: typeof Wrench
  summary: string
  inputs: string[]
  outputs: string[]
  outcome: { metric: string; label: string }
}

type LayerGroup = {
  key: string
  label: string
  index: string
  icon: typeof Cpu
  blurb: string
  cases: UseCase[]
}

const layerGroups: LayerGroup[] = [
  {
    key: "scada",
    label: "SCADA / Historians",
    index: "L1",
    icon: Cpu,
    blurb: "Agents that live closest to the signal — cleaning, enriching, and reasoning over raw sensor data.",
    cases: [
      {
        id: "sensor-cleanse",
        name: "Sensor Cleanse",
        icon: Activity,
        summary: "Continuously normalizes, interpolates, and quality-scores every tag before downstream agents read it.",
        inputs: ["Raw historian tags", "OPC-UA / MQTT streams", "Tag naming conventions"],
        outputs: ["Cleaned tag stream", "Quality score per tag", "Interpolation + outlier annotations"],
        outcome: { metric: "98.4%", label: "Avg. data quality" },
      },
      {
        id: "alarms",
        name: "Alarm Rationalizer",
        icon: Bell,
        summary: "Cuts alarm floods by identifying chattering alarms, grouping correlated events, proposing suppression logic.",
        inputs: ["SCADA alarm logs", "Operator ack history", "Interlock sequences"],
        outputs: ["EEMUA-191 KPI dashboard", "Suppression proposals", "Rationalization playbook"],
        outcome: { metric: "-62%", label: "Nuisance alarms" },
      },
      {
        id: "asset-health",
        name: "Asset Health",
        icon: ShieldCheck,
        summary: "Tracks degradation signals on rotating equipment and surfaces failures before they cause downtime.",
        inputs: ["Vibration, temp, current trends", "Maintenance history", "Manufacturer curves"],
        outputs: ["Health score + RUL estimate", "Maintenance recommendation", "Work order draft"],
        outcome: { metric: "+127 days", label: "Avg. early warning" },
      },
    ],
  },
  {
    key: "mes",
    label: "MES",
    index: "L2",
    icon: Factory,
    blurb: "Agents on the execution layer — production, quality, and coordination.",
    cases: [
      {
        id: "oee",
        name: "OEE Analytics",
        icon: BarChart3,
        summary: "Breaks availability, performance, and quality loss into causes tied to specific events.",
        inputs: ["Downtime reasons", "Cycle-time records", "Scrap / rework data"],
        outputs: ["Top-N loss waterfall", "Shift comparison report", "Loss attribution by line/product"],
        outcome: { metric: "+4.2pp", label: "OEE uplift" },
      },
      {
        id: "quality",
        name: "Quality Deviation",
        icon: FlaskConical,
        summary: "Correlates in-line process conditions with lab results to catch escapes early and draft CAPAs.",
        inputs: ["In-line sensor readings", "Lab QC results", "Batch genealogy"],
        outputs: ["Deviation-to-cause mapping", "Affected batch scope", "CAPA draft w/ evidence"],
        outcome: { metric: "3 hrs", label: "Escape → CAPA draft" },
      },
      {
        id: "scheduling",
        name: "Scheduling",
        icon: Workflow,
        summary: "Rebalances schedules on disruption — considers changeovers, demand, and operator constraints.",
        inputs: ["Current schedule", "Live changeover data", "Demand from ERP"],
        outputs: ["Adjusted sequence", "Changeover-aware plan", "Impact diff vs. original"],
        outcome: { metric: "-18%", label: "Plan-replan cycle time" },
      },
    ],
  },
  {
    key: "erp",
    label: "ERP / CRM",
    index: "L3",
    icon: Building2,
    blurb: "Agents reasoning over orders, inventory, margin, and customer signals.",
    cases: [
      {
        id: "order-intel",
        name: "Order Intelligence",
        icon: TrendingUp,
        summary: "Flags at-risk orders and produces promise-date confidence intervals grounded in MES reality.",
        inputs: ["Open sales orders", "MES schedule reality", "Historical fulfilment"],
        outputs: ["At-risk order list", "Promise-date confidence", "Recovery options"],
        outcome: { metric: "+18pp", label: "Promise-date accuracy" },
      },
      {
        id: "margin",
        name: "Margin Agent",
        icon: BarChart3,
        summary: "Attributes per-SKU margin variance to mix, yield, scrap, and raw-material drift.",
        inputs: ["Standard costs", "Actual yields", "Raw material pricing"],
        outputs: ["Margin drift explanation", "SKU rationalization list", "Scenario projections"],
        outcome: { metric: "+2.1pp", label: "Gross margin recovery" },
      },
      {
        id: "inventory",
        name: "Inventory Agent",
        icon: Boxes,
        summary: "Projects stockouts and excess, reconciling ERP inventory with MES consumption patterns.",
        inputs: ["ERP inventory balances", "MES consumption", "Lead-time history"],
        outputs: ["Stockout early warning", "Excess + aging flags", "Replenishment proposal"],
        outcome: { metric: "-24%", label: "Stockout incidents" },
      },
    ],
  },
  {
    key: "cross",
    label: "Cross-stack",
    index: "L∞",
    icon: Layers,
    blurb: "Agents that reason across SCADA, MES, and ERP together — the problems no single system can solve alone.",
    cases: [
      {
        id: "root-cause",
        name: "Root Cause Agent",
        icon: GitBranch,
        summary: "Traces an incident across SCADA, MES, and ERP — from sensor event to batch to customer impact.",
        inputs: ["Cross-layer event logs", "Batch / work-order genealogy", "Open customer complaints"],
        outputs: ["Unified incident timeline", "Ranked causal chain", "Customer-impact scope"],
        outcome: { metric: "-78%", label: "Avg. RCA time" },
      },
      {
        id: "demand-to-production",
        name: "Demand-to-Production",
        icon: Workflow,
        summary: "Short-horizon plan updates as demand shifts — ERP orders, MES capacity, live constraints.",
        inputs: ["Rolling forecast", "Current MES capacity", "Inventory position"],
        outputs: ["Feasibility assessment", "Plan adjustment", "Capacity-vs-demand report"],
        outcome: { metric: "-1 shift", label: "Avg. plan latency" },
      },
      {
        id: "compliance",
        name: "Compliance Agent",
        icon: ShieldCheck,
        summary: "Builds evidence packs across all three layers for audit readiness and deviation reporting.",
        inputs: ["Process records", "MES batch records", "Change-control history"],
        outputs: ["Evidence pack per audit question", "Deviation report", "21 CFR Part 11 trail"],
        outcome: { metric: "-70%", label: "Audit prep time" },
      },
      {
        id: "enablement",
        name: "Enablement",
        icon: Users,
        summary: "Not an agent — the training track that turns your GMs and CDOs into the next-wave agent builders.",
        inputs: ["Your team's existing tooling", "First-wave agents we shipped", "Semantic-layer handover"],
        outputs: ["Trained internal builders", "Governance cadence", "Second-wave agent roadmap"],
        outcome: { metric: "2", label: "Waves shipped by month 6" },
      },
    ],
  },
]

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]" />
      <span className="font-mono tabular-nums">{index}</span>
      <span className="w-6 h-px bg-border" />
      <span>{children}</span>
    </div>
  )
}

export default function UseCasesPage() {
  const [active, setActive] = useState(0)
  const currentYear = new Date().getFullYear()
  const currentGroup = layerGroups[active]
  const ActiveIcon = currentGroup.icon

  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="min-h-screen pt-20"
      >
        {/* ── Hero ── */}
        <section className="py-20 lg:py-28 px-4 border-b border-border/50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-4 mb-8 font-mono text-[11px] tabular-nums text-muted-foreground tracking-wider"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--orange)]" />
                USE-CASES / BY LAYER
              </span>
              <span className="w-4 h-px bg-border" />
              <span>// {currentYear}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tighter mb-8 leading-[1.03] max-w-4xl"
            >
              <span className="text-[var(--orange)]">Agents</span> for every
              <br />
              <span className="text-muted-foreground">layer of the stack.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Pick the layer that matters most to you — SCADA, MES, ERP / CRM, or the cross-stack tier — and see
              the specialized agents we deploy there, what they take in, what they produce, and the numbers we
              see in deployment.
            </motion.p>
          </div>
        </section>

        {/* ── Layer tabs + list ── */}
        <section className="py-20 lg:py-24 px-4 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-2xl mb-10"
            >
              <SectionLabel index="01">Agent catalog</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5 leading-[1.05]">
                Browse by layer
              </h2>
            </motion.div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {layerGroups.map((group, i) => {
                const Icon = group.icon
                const isActive = active === i
                return (
                  <button
                    key={group.key}
                    onClick={() => setActive(i)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-foreground text-background border border-foreground"
                        : "bg-transparent text-muted-foreground border border-border hover:text-foreground hover:border-foreground/40"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {group.label}
                    <span className="text-[10px] font-mono tabular-nums opacity-60">{group.index}</span>
                  </button>
                )
              })}
            </div>

            {/* Active group header */}
            <motion.div
              key={`header-${active}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex items-start gap-5 mb-8 pb-8 border-b border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border text-foreground flex items-center justify-center flex-shrink-0">
                <ActiveIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-mono tabular-nums text-muted-foreground tracking-widest mb-1">
                  / {currentGroup.index}
                </p>
                <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">{currentGroup.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{currentGroup.blurb}</p>
              </div>
            </motion.div>

            {/* Cases list */}
            <motion.div
              key={`cases-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="space-y-3"
            >
              {currentGroup.cases.map((useCase, i) => {
                const Icon = useCase.icon
                return (
                  <motion.div
                    key={useCase.id}
                    id={useCase.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                    className="group rounded-2xl border border-border bg-card p-7 lg:p-8 hover:border-foreground/40 transition-colors duration-500"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_auto] gap-6 lg:gap-10">
                      {/* Left: name + summary */}
                      <div>
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-11 h-11 rounded-xl bg-foreground/5 text-foreground flex items-center justify-center border border-border flex-shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-mono tabular-nums text-muted-foreground tracking-widest mb-1">
                              / 0{i + 1}
                            </p>
                            <h4 className="text-lg font-bold tracking-tight text-foreground leading-tight">
                              {useCase.name}
                            </h4>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{useCase.summary}</p>
                      </div>

                      {/* Middle: inputs / outputs */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                            Inputs
                          </p>
                          <ul className="space-y-2">
                            {useCase.inputs.map((inp) => (
                              <li key={inp} className="flex items-start gap-2 text-sm text-foreground leading-tight">
                                <Plus className="w-3 h-3 text-muted-foreground mt-1 flex-shrink-0" />
                                {inp}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                            Outputs
                          </p>
                          <ul className="space-y-2">
                            {useCase.outputs.map((out) => (
                              <li key={out} className="flex items-start gap-2 text-sm text-foreground leading-tight">
                                <Plus className="w-3 h-3 text-[var(--orange)] mt-1 flex-shrink-0" />
                                {out}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: outcome metric */}
                      <div className="lg:w-36 lg:border-l lg:border-border lg:pl-8 flex lg:flex-col lg:justify-center">
                        <div>
                          <p className="text-4xl lg:text-5xl font-bold tracking-tighter text-[var(--orange)] leading-none mb-2">
                            {useCase.outcome.metric}
                          </p>
                          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                            {useCase.outcome.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Build your own ── */}
        <section className="py-24 px-4 border-b border-border/50 bg-foreground text-background">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] text-background/60 uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]" />
                <span className="font-mono tabular-nums">02</span>
                <span className="w-6 h-px bg-background/30" />
                <span>Beyond the catalog</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-[1.05]">
                Don't see your agent here?
              </h2>
              <p className="text-base text-background/70 mb-10 leading-relaxed">
                Every client ships at least one agent we didn't have before the engagement started. Once the
                semantic layer is in place, building a new agent becomes a one-week project rather than a
                one-quarter one.
              </p>
              <a
                href="https://calendly.com/yuvraj-s-bhadauria/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-stretch rounded-full bg-background text-foreground hover:bg-background/90 transition-colors overflow-hidden"
              >
                <span className="inline-flex items-center px-6 text-sm font-semibold">
                  Pitch us your agent idea
                </span>
                <span className="inline-flex items-center justify-center w-11 h-11 my-1.5 mr-1.5 rounded-full bg-[var(--orange)] text-[var(--orange-foreground)]">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </motion.div>
          </div>
        </section>

        <CTABand
          title="Map your agent roadmap"
          description="Tell us the shape of your stack and the top three questions your team can't answer fast enough today. We'll turn that into a layer-by-layer agent plan."
        />
      </motion.main>
      <Footer />
    </>
  )
}
