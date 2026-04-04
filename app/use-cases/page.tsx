"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  ChevronDown,
  GitBranch,
  Wrench,
  Bell,
  BarChart3,
  FlaskConical,
  Activity,
  CheckCircle2,
  ArrowRight,
  Database,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"
import { cn } from "@/lib/utils"

const useCases = [
  {
    id: "root-cause",
    title: "Root Cause Analysis",
    description:
      "Automatically trace the chain of events that caused a production incident. The RCA Agent pulls from historian data, alarm logs, and maintenance records to build a timestamped causal timeline, reducing investigation time from hours to minutes.",
    inputs: [
      "Historian tag data (pre- and post-incident)",
      "SCADA alarm and event logs",
      "Maintenance work orders and calibration records",
      "Process change management (MOC) records",
    ],
    outputs: [
      "Timestamped root cause timeline",
      "Contributing factor analysis with evidence links",
      "Recommended corrective and preventive actions",
      "RCA report draft ready for review",
    ],
    impact: [
      "10x faster average investigation time",
      "20–40% reduction in repeat incidents",
      "Traceable, auditable root cause evidence",
    ],
    icon: GitBranch,
    badge: "Demo available",
    highlight: true,
  },
  {
    id: "troubleshooting",
    title: "Equipment Troubleshooting",
    description:
      "Guide operators through active downtime events with step-by-step, context-aware diagnostics. The Troubleshooting Agent uses live sensor data, past incidents, and SOPs to narrow the fault quickly, even for less experienced operators.",
    inputs: [
      "Live SCADA sensor readings",
      "Recent alarm and event sequences",
      "Historical incidents on the same equipment",
      "SOP and maintenance procedure documents",
    ],
    outputs: [
      "Ranked fault hypotheses with supporting evidence",
      "Step-by-step diagnostic checklist",
      "Similar past incidents and what resolved them",
      "Draft incident summary for shift handover",
    ],
    impact: [
      "30–50% faster mean time to resolution (MTTR)",
      "Reduced dependency on senior experts during off-hours",
      "Consistent troubleshooting approach across shifts",
    ],
    icon: Wrench,
  },
  {
    id: "alarms",
    title: "Alarm Flood Management",
    description:
      "Manufacturing plants drowning in alarm notifications miss the critical ones. The Alarm Management Agent identifies nuisance alarms, groups correlated events, and recommends rationalization changes to reduce alarm fatigue and improve response quality.",
    inputs: [
      "Alarm configuration database",
      "Historical alarm occurrence and acknowledgment logs",
      "Operator response time and pattern data",
      "Process state context (operating mode, product, shift)",
    ],
    outputs: [
      "Alarm performance KPI dashboard (EEMUA-compliant)",
      "Nuisance alarm candidates with rationalization justification",
      "Priority and setpoint adjustment recommendations",
      "Alarm shelving and suppression proposals",
    ],
    impact: [
      "30–60% reduction in standing and repeat alarms",
      "Improved operator response to critical alarms",
      "Better compliance with ISA-18.2 alarm management standards",
    ],
    icon: Bell,
  },
  {
    id: "oee",
    title: "OEE & Production Analytics",
    description:
      "Break down Overall Equipment Effectiveness into its real components. The OEE Agent pulls clean, contextualized sensor data to explain availability, performance, and quality losses, with each loss category tied back to specific events and root causes.",
    inputs: [
      "Equipment run/idle/fault state data",
      "Production count and reject signals",
      "Planned production schedules",
      "Downtime event codes and durations",
    ],
    outputs: [
      "Real-time and historical OEE by line, cell, and shift",
      "Top-N loss analysis with root cause evidence",
      "Speed loss vs. quality loss attribution",
      "Shift performance comparison reports",
    ],
    impact: [
      "Faster identification of chronic vs. sporadic losses",
      "Data-driven prioritization of improvement projects",
      "Reduction in manual reporting effort",
    ],
    icon: BarChart3,
  },
  {
    id: "quality",
    title: "Quality Deviation Investigation",
    description:
      "Detect quality escapes early and link them to the process conditions that caused them. The Quality Deviation Agent correlates product quality measurements with upstream sensor readings to pinpoint root causes and generate CAPA documentation.",
    inputs: [
      "In-line and lab quality measurement data",
      "Process parameter historian data",
      "Bill of materials and batch records",
      "SOP and quality specification documents",
    ],
    outputs: [
      "Quality deviation timeline with correlated process conditions",
      "Root cause hypothesis with statistical evidence",
      "Draft CAPA with supporting data attachments",
      "Affected batch and product scope assessment",
    ],
    impact: [
      "Earlier detection of quality drift before escapes occur",
      "Faster CAPA closure with audit-ready evidence",
      "Reduced scrap and rework costs",
    ],
    icon: FlaskConical,
  },
  {
    id: "predictive",
    title: "Predictive Health Monitoring",
    description:
      "Move from reactive maintenance to condition-based action. The Predictive Health Agent monitors equipment health signals over time, detects degradation trends, and recommends maintenance interventions before failures occur.",
    inputs: [
      "Vibration, temperature, and pressure sensor readings",
      "Lubrication and maintenance history",
      "Equipment nameplate and design specifications",
      "Historical failure modes and fault signatures",
    ],
    outputs: [
      "Equipment health score and trend dashboard",
      "Degradation alerts with remaining useful life estimates",
      "Recommended maintenance action with urgency rating",
      "Work order draft with supporting sensor evidence",
    ],
    impact: [
      "Reduction in unexpected equipment failures",
      "Better maintenance schedule optimization",
      "Lower maintenance cost per unit of output",
    ],
    icon: Activity,
  },
]

function UseCaseCard({ useCase, index }: { useCase: (typeof useCases)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const IconComponent = useCase.icon

  return (
    <motion.div
      id={useCase.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={cn(
        "group relative bg-card border rounded-2xl overflow-hidden transition-all duration-300",
        useCase.highlight
          ? "border-primary/30 shadow-md shadow-primary/5"
          : "border-border hover:border-border/80 hover:shadow-sm",
      )}
    >
      {/* Subtle teal glow for highlighted card */}
      {useCase.highlight && (
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/6 blur-3xl pointer-events-none" />
      )}

      {useCase.badge && (
        <div className="absolute top-5 right-5 z-20">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {useCase.badge}
          </span>
        </div>
      )}

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <div className="cursor-pointer px-7 py-6 relative z-10">
            <div className="flex items-start gap-5">
              <div className={cn(
                "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105",
                useCase.highlight
                  ? "bg-primary/15 text-primary"
                  : "bg-secondary text-foreground"
              )}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0 pr-10">
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className="text-lg font-bold tracking-tight text-foreground">{useCase.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
              </div>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 mt-0.5",
                  isOpen
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-secondary border-border text-muted-foreground",
                )}
              >
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </div>
            </div>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="px-7 pb-7 relative z-10">
            <div className="grid md:grid-cols-3 gap-3 pt-5 border-t border-border/50 ml-16">
              {/* Inputs */}
              <div className="rounded-xl p-4 bg-secondary/40 border border-border/40">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Database className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Inputs</h4>
                </div>
                <ul className="space-y-2">
                  {useCase.inputs.map((input) => (
                    <li key={input} className="text-xs text-muted-foreground flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-blue-500/60" />
                      {input}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outputs */}
              <div className="rounded-xl p-4 bg-secondary/40 border border-border/40">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Outputs</h4>
                </div>
                <ul className="space-y-2">
                  {useCase.outputs.map((output) => (
                    <li key={output} className="text-xs text-muted-foreground flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-primary/60" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="rounded-xl p-4 bg-primary/8 border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-semibold tracking-widest text-primary/80 uppercase">Impact</h4>
                </div>
                <ul className="space-y-2">
                  {useCase.impact.map((item) => (
                    <li key={item} className="text-xs text-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  )
}

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-20 px-4 border-b border-border/50">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10 items-end">
              <div className="lg:col-span-3">
                <span className="inline-block text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-5">
                  Use cases
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter leading-[1.05] mb-0">
                  Analytics that
                  <br />
                  <span className="text-muted-foreground">actually work</span>
                </h1>
              </div>
              <div className="lg:col-span-2">
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Every use case depends on clean, contextualized IoT data. ContextWeaver handles the data
                  engineering layer first, so these agents deliver reliable answers, not hallucinations on noisy signals.
                </p>
                <Button size="lg" asChild className="btn-gradient rounded-full px-8 gap-2 group">
                  <a href="https://calendly.com/yuvraj-s-bhadauria/30min" target="_blank" rel="noopener noreferrer">
                    Discuss your use case
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Use case cards */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-3">
              {useCases.map((useCase, index) => (
                <UseCaseCard key={useCase.id} useCase={useCase} index={index} />
              ))}
            </div>
          </div>
        </section>

        <CTABand
          title="Have a different use case in mind?"
          description="We work with manufacturing teams to identify the highest-value applications and build the data engineering layer to support them reliably."
        />
      </main>
      <Footer />
    </>
  )
}
