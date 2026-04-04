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
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    <Card
      id={useCase.id}
      className={cn(
        "group relative overflow-hidden bg-card border-border rounded-3xl transition-all duration-500 hover:shadow-xl hover:shadow-foreground/5",
        useCase.highlight && "border-foreground/20 ring-1 ring-foreground/10",
      )}
    >
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-secondary/60 transition-transform duration-500 group-hover:scale-125" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-secondary/40 transition-transform duration-500 group-hover:scale-110" />

      {useCase.badge && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground text-background text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
            {useCase.badge}
          </span>
        </div>
      )}

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer transition-colors py-8 px-8 relative z-10">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 border border-border transition-all duration-300",
                      isOpen && "bg-foreground border-foreground",
                    )}
                  >
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-foreground transition-all duration-300",
                        isOpen && "rotate-180 text-background",
                      )}
                    />
                  </div>
                </div>
                <p className="text-muted-foreground text-left">{useCase.description}</p>
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="pt-0 pb-8 px-8 relative z-10">
            <div className="grid md:grid-cols-3 gap-5 pt-6 border-t border-border/50 ml-[76px]">
              <div className="bg-secondary/50 rounded-2xl p-5 border border-border/30">
                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-foreground" />
                  Inputs
                </h4>
                <ul className="space-y-2.5">
                  {useCase.inputs.map((input) => (
                    <li key={input} className="text-sm text-muted-foreground flex items-start gap-2.5">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-foreground/40" />
                      {input}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/50 rounded-2xl p-5 border border-border/30">
                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-foreground" />
                  Outputs
                </h4>
                <ul className="space-y-2.5">
                  {useCase.outputs.map((output) => (
                    <li key={output} className="text-sm text-muted-foreground flex items-start gap-2.5">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-foreground/40" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-foreground text-background rounded-2xl p-5">
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-background" />
                  Impact
                </h4>
                <ul className="space-y-2.5">
                  {useCase.impact.map((item) => (
                    <li key={item} className="text-sm text-background/80 flex items-start gap-2.5">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-background/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground mb-6">
              Use cases
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
              Analytics that actually work
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Every use case below depends on clean, contextualized IoT data. ContextWeaver handles the data
              engineering layer first, so these agents deliver reliable answers, not hallucinations on noisy signals.
            </p>
            <Button size="lg" asChild className="rounded-full px-8 gap-2">
              <a href="https://calendly.com/yuvraj-s-bhadauria/30min" target="_blank" rel="noopener noreferrer">
                Discuss your use case
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        <section className="py-24 px-4 bg-secondary/50">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-5">
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
