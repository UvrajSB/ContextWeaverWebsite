"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  ChevronDown,
  Layers,
  RefreshCw,
  Bell,
  Package,
  HeartHandshake,
  FileCheck,
  ArrowRight,
  Globe,
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
    id: "global-operations",
    title: "Global Operations Intelligence",
    description:
      "Coordinate insights across SCADA, ERP, CRM, and SOP domains to explain system-level impact and guide leadership decisions.",
    inputs: [
      "Incident summaries from SCADA Pack",
      "Production plans, inventory, and cost signals from ERP Pack",
      "Customer orders, SLAs, and escalations from CRM Pack",
      "Procedures, SOPs, and compliance context from SOP/Quality Pack",
    ],
    outputs: [
      "Unified cross-domain incident and performance narrative",
      "Operational vs business impact explanation",
      "Constraint and tradeoff analysis across systems",
      "Leadership-ready daily and weekly summaries",
    ],
    impact: [
      "Faster, aligned decision-making across operations and leadership",
      "Reduced siloed reporting and manual reconciliation",
      "Clear prioritization of actions based on system-wide impact",
    ],
    icon: Globe,
    helperText: "Reasons through domain agents instead of querying raw systems directly.",
  },
  {
    id: "troubleshooting",
    title: "SCADA Troubleshooting Copilot",
    description: "Guide operators through downtime events with context-aware analysis.",
    inputs: ["SCADA alarms and events", "Historian tag data", "Maintenance records", "Previous incident reports"],
    outputs: [
      "Incident timeline with correlated events",
      "Suggested checks and next steps",
      "Similar past incidents",
      "Draft incident summary",
    ],
    impact: [
      "30-50% faster mean time to resolution",
      "Reduced reliance on senior operators during off-hours",
      "Consistent troubleshooting approach across shifts",
    ],
    icon: Layers,
  },
  {
    id: "root-cause",
    title: "Root Cause + Learning Loop",
    description: "Capture patterns, link to contributing factors, and prevent repeat issues.",
    inputs: ["Incident history", "Process changes and MOCs", "Maintenance activities", "Operating conditions"],
    outputs: [
      "Root cause linkages",
      "Contributing factor analysis",
      "Recommended preventive actions",
      "Knowledge base entries",
    ],
    impact: [
      "20-40% reduction in repeat incidents",
      "Faster onboarding for new reliability engineers",
      "Institutional memory that persists through turnover",
    ],
    icon: RefreshCw,
  },
  {
    id: "alarms",
    title: "Alarm Hygiene & Noise Reduction",
    description: "Identify nuisance alarms, suggest rationalization, and reduce alarm fatigue.",
    inputs: [
      "Alarm configuration",
      "Alarm occurrence logs",
      "Operator acknowledgment patterns",
      "Process state context",
    ],
    outputs: [
      "Alarm performance metrics",
      "Nuisance alarm candidates",
      "Rationalization recommendations",
      "Priority adjustment suggestions",
    ],
    impact: [
      "30-60% reduction in alarm floods",
      "Improved operator response to critical alarms",
      "Better compliance with alarm management standards",
    ],
    icon: Bell,
  },
  {
    id: "planning",
    title: "Inventory + Planning Insights",
    description: "Explain variance between plan and actual using operational evidence.",
    inputs: [
      "Production plans and schedules",
      "Actual production data",
      "Inventory levels",
      "Operational events and constraints",
    ],
    outputs: [
      "Plan vs actual analysis with root causes",
      "Constraint identification",
      "Inventory risk alerts",
      "Cost variance attribution",
    ],
    impact: [
      "Faster monthly close and variance explanation",
      "Proactive stockout prevention",
      "Better alignment between operations and supply chain",
    ],
    icon: Package,
  },
  {
    id: "customer",
    title: "Customer Impact & SLA Risk",
    description: "Connect operational incidents to customer orders and SLA commitments.",
    inputs: ["CRM order data", "Production schedules", "Operational incidents", "Shipping and logistics data"],
    outputs: [
      "Customer impact assessment",
      "SLA risk scoring",
      "Evidence-backed communication drafts",
      "Escalation prioritization",
    ],
    impact: [
      "Faster, clearer customer communication",
      "Reduced SLA penalties through early intervention",
      "Improved customer satisfaction scores",
    ],
    icon: HeartHandshake,
  },
  {
    id: "quality",
    title: "SOP Guidance + CAPA Support",
    description: "Query procedures in context and generate corrective action drafts.",
    inputs: ["SOP documents", "Equipment state and alarms", "Operator actions", "Quality events and deviations"],
    outputs: [
      "Context-aware procedure guidance",
      "CAPA draft with supporting evidence",
      "Deviation trend analysis",
      "Training recommendations",
    ],
    impact: ["Fewer procedure deviations", "Faster CAPA closure", "Better audit readiness"],
    icon: FileCheck,
  },
]

function UseCaseCard({ useCase, index }: { useCase: (typeof useCases)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const IconComponent = useCase.icon
  const isFeatured = useCase.id === "global-operations"

  return (
    <Card
      id={useCase.id}
      className={cn(
        "group relative overflow-hidden bg-card border-border rounded-3xl transition-all duration-500 hover:shadow-xl hover:shadow-foreground/5",
        isFeatured && "border-foreground/20 ring-1 ring-foreground/10",
      )}
    >
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-secondary/60 transition-transform duration-500 group-hover:scale-125" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-secondary/40 transition-transform duration-500 group-hover:scale-110" />

      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {isFeatured && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground text-background text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
            Coordinates all packs
          </span>
        </div>
      )}

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer transition-colors py-8 px-8 relative z-10">
            <div className="flex items-start gap-5">
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                  isFeatured && "w-16 h-16 rounded-2xl",
                )}
              >
                <IconComponent className={cn("w-6 h-6", isFeatured && "w-7 h-7")} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <CardTitle className={cn("text-xl", isFeatured && "text-2xl")}>{useCase.title}</CardTitle>
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
            <div
              className={cn(
                "grid md:grid-cols-3 gap-5 pt-6 border-t border-border/50",
                isFeatured ? "ml-[84px]" : "ml-[76px]",
              )}
            >
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

            {useCase.helperText && (
              <p className={cn("mt-5 text-xs text-muted-foreground italic", isFeatured ? "ml-[84px]" : "ml-[76px]")}>
                {useCase.helperText}
              </p>
            )}
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
              Use cases for every team
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              From floor operators troubleshooting downtime to leadership reviewing performance, the platform adapts to
              the workflows that matter to your organization.
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
          description="We work with teams to identify high-value applications and build the context layer to support them."
        />
      </main>
      <Footer />
    </>
  )
}
