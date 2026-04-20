"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Layers,
  Sparkles,
  Network,
  Database,
  Shield,
  Cpu,
  Factory,
  Building2,
  BrainCircuit,
  Plus,
  MapPin,
  Workflow,
  Boxes,
  GitBranch,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"
import { SignalFlow } from "@/components/signal-flow"

const EASE = [0.22, 1, 0.36, 1] as const

const semanticBlocks = [
  {
    icon: Database,
    title: "Tag-to-asset graph",
    body: "Every raw tag in your SCADA/historian mapped to the physical asset it represents. Assets link to MES work-centers and ERP equipment masters. One source of truth for what-is-what.",
  },
  {
    icon: Boxes,
    title: "Unit & time harmonization",
    body: "Engineering units normalized, timestamps aligned, sampling rates reconciled. Agents downstream don't have to care that one line reports °F and another °C.",
  },
  {
    icon: BrainCircuit,
    title: "SOP & document corpus",
    body: "Procedures, manuals, change-control records, and ticket history indexed and retrievable in-context. Agents cite the exact paragraph they drew on.",
  },
  {
    icon: Workflow,
    title: "Ontology of the operation",
    body: "Shifts, routes, batches, SKUs, lines, and sites — modeled as first-class entities so agents reason in your vocabulary, not the source system's.",
  },
  {
    icon: GitBranch,
    title: "Incident & decision memory",
    body: "Past investigations, CAPAs, and engineer notes kept searchable. New incidents arrive with their own precedent pack.",
  },
  {
    icon: Shield,
    title: "Quality scoring per tag",
    body: "Every incoming tag carries a live quality score. Agents know what they can trust and refuse to reason on poor-quality inputs.",
  },
]

const deploymentModes = [
  {
    key: "onprem",
    name: "On-premises",
    tag: "Air-gap supported",
    points: [
      "K8s or bare-metal, no internet egress required",
      "Models, inference, and semantic layer all local",
      "SSO via on-prem IdP (AD, FreeIPA)",
      "Fit for OT-networked plants and regulated sites",
    ],
  },
  {
    key: "vpc",
    name: "Customer VPC",
    tag: "Most common",
    points: [
      "Deployed inside your AWS/Azure/GCP tenant",
      "Data never crosses your account boundary",
      "SSO via cloud IdP (Azure AD, Okta, Google)",
      "Infra-as-code handover at end of engagement",
    ],
  },
  {
    key: "saas",
    name: "Managed SaaS",
    tag: "Fastest to start",
    points: [
      "ContextWeaver-operated multi-tenant control plane",
      "Per-customer encryption and tenancy isolation",
      "Region-pinned storage + inference",
      "Upgrade path to VPC or on-prem any time",
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

const layerFlow = [
  {
    icon: Cpu,
    system: "SCADA / Historians",
    semantic: "tag→asset, quality scoring, unit normalization",
    agents: "Sensor Cleanse · Alarm Rationalizer · Asset Health",
    color: "var(--foreground)",
  },
  {
    icon: Factory,
    system: "MES",
    semantic: "batch genealogy, operator ontology, loss taxonomy",
    agents: "OEE Analytics · Quality Deviation · Scheduling",
    color: "oklch(0.3 0.008 60)",
  },
  {
    icon: Building2,
    system: "ERP / CRM",
    semantic: "order-to-fulfil graph, margin model, customer map",
    agents: "Order Intelligence · Margin · Inventory",
    color: "oklch(0.48 0.008 60)",
  },
]

export default function ArchitecturePage() {
  const currentYear = new Date().getFullYear()

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
                ARCHITECTURE / LAYERS
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
              Two <span className="text-[var(--orange)]">thin layers</span>
              <br />
              <span className="text-muted-foreground">over every</span>
              <br />
              <span className="text-muted-foreground">system you run.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              The architecture is deliberately simple: a semantic layer that makes each system
              machine-readable in your vocabulary, an agent-application layer that acts on it, and a cross-stack
              layer that lets agents reason end-to-end. Everything else is plumbing.
            </motion.p>
          </div>
        </section>

        {/* ── Signal flow ── */}
        <section className="py-16 px-4 border-b border-border/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                Signal path · sensor → action
              </p>
            </div>
            <SignalFlow />
          </div>
        </section>

        {/* ── Layer flow table ── */}
        <section className="py-24 px-4 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-2xl mb-14"
            >
              <SectionLabel index="01">Per-stack layers</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5 leading-[1.05]">
                What sits over
                <br />
                <span className="text-muted-foreground">each system of record</span>
              </h2>
            </motion.div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="hidden md:grid grid-cols-[1.1fr_1.3fr_1.6fr] gap-4 px-6 py-3 border-b border-border bg-background/50 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                <span>Source system</span>
                <span>Semantic layer contents</span>
                <span>Agent application layer</span>
              </div>
              <div className="divide-y divide-border">
                {layerFlow.map((row, i) => {
                  const Icon = row.icon
                  return (
                    <motion.div
                      key={row.system}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                      className="grid grid-cols-1 md:grid-cols-[1.1fr_1.3fr_1.6fr] gap-4 px-6 py-6 items-start"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: row.color, color: "var(--background)" }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">{row.system}</p>
                          <p className="text-[10px] font-mono text-muted-foreground tracking-widest">
                            / L{3 - i}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{row.semantic}</p>
                      <p className="text-sm text-foreground font-medium leading-relaxed">{row.agents}</p>
                    </motion.div>
                  )
                })}
                {/* Cross-stack row */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
                  className="grid grid-cols-1 md:grid-cols-[1.1fr_1.3fr_1.6fr] gap-4 px-6 py-6 items-start bg-foreground text-background"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-[var(--orange)] text-[var(--orange-foreground)]">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Cross-stack</p>
                      <p className="text-[10px] font-mono text-background/60 tracking-widest">/ L∞</p>
                    </div>
                  </div>
                  <p className="text-sm text-background/70 leading-relaxed">
                    Shared vocabulary across all three layers: asset ↔ batch ↔ order linkages, cross-system joins
                  </p>
                  <p className="text-sm font-medium leading-relaxed">
                    Root Cause · Demand-to-Production · Compliance
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Semantic layer detail ── */}
        <section className="py-24 px-4 border-b border-border/50 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-2xl mb-14"
            >
              <SectionLabel index="02">Semantic layer</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5 leading-[1.05]">
                What lives in
                <br />
                <span className="text-muted-foreground">the context layer</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                The thin strip between your source systems and the agents. Invisible when it works, painful when
                it doesn't. Everything here belongs to you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {semanticBlocks.map((b, i) => {
                const Icon = b.icon
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                    className="bg-background p-7 lg:p-8 flex flex-col gap-5 hover:bg-secondary/40 transition-colors duration-500"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-foreground/5 text-foreground flex items-center justify-center border border-border">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono tabular-nums text-muted-foreground tracking-wider">
                        / 0{i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold tracking-tight text-foreground mb-2">{b.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Deployment modes ── */}
        <section className="py-24 px-4 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-2xl mb-14"
            >
              <SectionLabel index="03">Deployment</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5 leading-[1.05]">
                Three modes,
                <br />
                <span className="text-muted-foreground">same platform</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {deploymentModes.map((mode, i) => (
                <motion.div
                  key={mode.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                  className={`rounded-2xl border p-7 flex flex-col gap-5 transition-colors duration-500 ${
                    i === 1
                      ? "bg-foreground text-background border-foreground"
                      : "bg-card border-border hover:border-foreground/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tabular-nums tracking-wider opacity-60">
                      / 0{i + 1}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-widest border ${
                        i === 1
                          ? "bg-background/10 border-background/20"
                          : "bg-[var(--orange)]/10 border-[var(--orange)]/30 text-[var(--orange)]"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          i === 1 ? "bg-[var(--orange)]" : "bg-[var(--orange)]"
                        }`}
                      />
                      {mode.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-2">{mode.name}</h3>
                  </div>
                  <div
                    className={`divide-y ${
                      i === 1 ? "divide-background/15" : "divide-border"
                    } border-y ${i === 1 ? "border-background/15" : "border-border"}`}
                  >
                    {mode.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-3 py-3">
                        <Plus
                          className={`w-3 h-3 mt-1 flex-shrink-0 ${
                            i === 1 ? "text-[var(--orange)]" : "text-[var(--orange)]"
                          }`}
                        />
                        <span
                          className={`text-sm leading-relaxed ${
                            i === 1 ? "text-background/85" : "text-foreground"
                          }`}
                        >
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Integration flow ── */}
        <section className="py-24 px-4 border-b border-border/50 bg-foreground text-background">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-2xl mb-12"
            >
              <div className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] text-background/60 uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]" />
                <span className="font-mono tabular-nums">04</span>
                <span className="w-6 h-px bg-background/30" />
                <span>Integrations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-[1.05]">
                Connectors you
                <br />
                <span className="text-background/60">won't have to build</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                "OSIsoft PI",
                "Aveva",
                "Ignition",
                "Wonderware",
                "Rockwell FT",
                "GE iFIX",
                "Siemens WinCC",
                "OPC-UA / DA",
                "MQTT / Sparkplug B",
                "SAP S/4HANA",
                "Oracle ERP",
                "MS Dynamics",
                "NetSuite",
                "Salesforce",
                "ServiceNow",
                "Kafka / Pulsar",
              ].map((integration, i) => (
                <motion.div
                  key={integration}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="rounded-xl border border-background/15 bg-background/5 px-4 py-3 text-sm font-medium text-background hover:bg-background/10 transition-colors"
                >
                  {integration}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABand
          title="Want an architecture walkthrough?"
          description="Share your current stack, source systems, and deployment constraints. We'll map the semantic layer, the first-wave agent pack, and the migration plan together."
        />
      </motion.main>
      <Footer />
    </>
  )
}
