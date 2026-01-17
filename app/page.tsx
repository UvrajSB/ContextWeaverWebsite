"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import { ArrowUpRight, Check, Layers, Database, Users, FileText, Network, CircleDot } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"
import { AnimatedStats } from "@/components/animated-stats"

const agentPacks = [
  {
    id: "scada",
    name: "SCADA Pack",
    description: "Troubleshoot downtime, correlate alarms, and build incident timelines from SCADA and historian data.",
    features: ["Alarm sequence analysis", "Tag correlation", "Incident story generation", "Pattern recognition"],
    systems: ["Ignition", "PI System", "Wonderware", "GE iFIX"],
    icon: Layers,
  },
  {
    id: "erp",
    name: "ERP Pack",
    description: "Connect production plans to actual performance. Explain variance, constraints, and inventory risks.",
    features: [
      "Plan vs actual analysis",
      "Constraint identification",
      "Cost variance explanation",
      "Inventory forecasting",
    ],
    systems: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"],
    icon: Database,
  },
  {
    id: "crm",
    name: "CRM Pack",
    description: "Link operational incidents to customer impact. Prioritize escalations and communicate with evidence.",
    features: [
      "SLA risk assessment",
      "Customer impact mapping",
      "Evidence-based communication",
      "Escalation prioritization",
    ],
    systems: ["Salesforce", "HubSpot", "Microsoft Dynamics", "Zendesk"],
    icon: Users,
  },
  {
    id: "sop",
    name: "SOP/Quality Pack",
    description: "Query procedures in context of equipment state. Generate CAPA drafts with traceable evidence.",
    features: ["Contextual SOP lookup", "CAPA draft generation", "Evidence collection", "Compliance tracking"],
    systems: ["Document systems", "Quality management", "Ticketing systems", "SharePoint"],
    icon: FileText,
  },
]

const steps = [
  {
    step: 1,
    title: "Connect",
    description: "Link your existing systems through secure connectors. No data migration required.",
  },
  {
    step: 2,
    title: "Model context",
    description: "Build your asset model, define metrics, and map relationships across OT and IT.",
  },
  {
    step: 3,
    title: "Run agents",
    description: "Deploy specialized agents that use the shared context to answer questions and take actions.",
  },
  {
    step: 4,
    title: "Review",
    description: "Approve actions, review outputs, and provide feedback that improves agent performance.",
  },
  {
    step: 5,
    title: "Improve",
    description: "Capture learnings, expand coverage, and refine the context layer over time.",
  },
]

const integrations = [
  {
    name: "Ignition",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.18l5.45 2.73L12 9.64 6.55 6.91 12 4.18zM6 8.27l5 2.5v7.46l-5-2.5V8.27zm12 7.46l-5 2.5v-7.46l5-2.5v7.46z" />
      </svg>
    ),
  },
  {
    name: "PI System",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8z" />
      </svg>
    ),
  },
  {
    name: "Wonderware",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M3 5l3.5 14h3l2-8 2 8h3L20 5h-3l-2 8-2-8h-2l-2 8-2-8H3z" />
      </svg>
    ),
  },
  {
    name: "GE iFIX",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6v12M8 10h8v10H8V10zm12 0h4v10h-4V10z" />
      </svg>
    ),
  },
  {
    name: "SAP",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 0h4v10h-4V10z" />
      </svg>
    ),
  },
  {
    name: "Oracle",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <rect x="2" y="7" width="20" height="10" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Salesforce",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M10 5a4 4 0 0 0-4 4 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3 4 4 0 0 0-4-4 4 4 0 0 0-4 0z" />
      </svg>
    ),
  },
  {
    name: "Microsoft Dynamics",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
      </svg>
    ),
  },
  {
    name: "ServiceNow",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    name: "Jira",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.005 2L2 12.5l10.005 10.005L22.01 12.005 12.005 2zm0 3.536l6.469 6.469-6.469 6.469-6.469-6.469 6.469-6.469z" />
      </svg>
    ),
  },
  {
    name: "SharePoint",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <circle cx="9" cy="9" r="5" />
        <circle cx="15" cy="15" r="5" fillOpacity="0.7" />
      </svg>
    ),
  },
  {
    name: "Azure",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M6.5 4L3 12.5l5 1.5-3.5 6L19 9h-7l4-5H6.5z" />
      </svg>
    ),
  },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// Preload images
const industryImages = ["/pic1.jpeg", "/pic2.jpeg", "/pic3.jpeg", "/pic4.jpeg"]

// Agent Packs Section Component
function AgentPacksSection({ agentPacksRef, agentPacksInView }: { agentPacksRef: React.RefObject<HTMLElement | null>, agentPacksInView: boolean }) {
  const [activeTab, setActiveTab] = useState(0)
  const activePack = agentPacks[activeTab]
  const IconComponent = activePack.icon

  return (
    <section ref={agentPacksRef} id="packs" className="py-24 px-4 border-b border-border/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate={agentPacksInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Agent packs for each domain
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized agents that know their domain, all using the same context layer.
          </p>
        </motion.div>

        {/* Global Operations Container */}
        <motion.div
          initial="hidden"
          animate={agentPacksInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl border-2 border-dashed border-foreground/20 bg-gradient-to-b from-secondary/20 to-secondary/40 p-6 md:p-8">
            {/* Global Operations Header */}
            <div className="relative bg-foreground text-background rounded-2xl p-5 md:p-6 mb-6 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="gridPack" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.5" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#gridPack)" />
                </svg>
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/5" />

              <div className="relative flex flex-col md:flex-row gap-5">
                <div className="flex items-start gap-4 md:w-1/2">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                    <Network className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Global Operations Pack</h3>
                    <p className="text-white/70 text-sm">
                      Coordinates domain agents for cross-system reasoning and executive narratives.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {[
                    "Cross-domain analysis",
                    "Business impact correlation",
                    "Tradeoff reasoning",
                    "Executive summaries",
                  ].map((capability) => (
                    <div key={capability} className="flex items-center gap-2 text-xs text-white/70">
                      <Check className="w-3 h-3 flex-shrink-0" />
                      {capability}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {agentPacks.map((pack, index) => {
                const TabIcon = pack.icon
                return (
                  <button
                    key={pack.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeTab === index
                        ? "bg-foreground text-background shadow-lg"
                        : "bg-background border border-border hover:bg-secondary/50"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    {pack.name}
                  </button>
                )
              })}
            </div>

            {/* Active Pack Content */}
            <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-secondary/50" />

              <div className="relative flex flex-col md:flex-row gap-6">
                {/* Left - Description */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-semibold">{activePack.name}</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">{activePack.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {activePack.systems.map((system) => (
                      <span
                        key={system}
                        className="px-3 py-1 rounded-full bg-secondary/80 border border-border/50 text-xs text-foreground/70"
                      >
                        {system}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right - Capabilities */}
                <div className="md:w-72 flex-shrink-0">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Capabilities
                  </p>
                  <div className="space-y-2">
                    {activePack.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5 text-sm">
                        <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                          <Check className="w-3 h-3 text-foreground" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Container Label */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-foreground text-background text-xs font-semibold rounded-full shadow-lg">
              Global Operations Pack
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function HomePage() {
  // Refs for scroll animations
  const platformRef = useRef(null)
  const agentPacksRef = useRef(null)
  const howItWorksRef = useRef(null)
  const integrationsRef = useRef(null)

  const platformInView = useInView(platformRef, { once: true, margin: "-100px" })
  const agentPacksInView = useInView(agentPacksRef, { once: true, margin: "-100px" })
  const howItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" })
  const integrationsInView = useInView(integrationsRef, { once: true, margin: "-100px" })

  // Preload industry images on mount
  useEffect(() => {
    industryImages.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        {/* Hero Section - Modern design with revolving agents */}
        <section className="py-24 px-4 border-b border-border/50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left side - Animated text content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight mb-6 text-balance leading-tight">
                    A shared context layer with modular agents
              </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
                    Connect your operational systems, build a unified context, and run specialized agents that understand your
                    plant, your processes, and your business.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-start gap-4"
                >
                  <Button size="lg" asChild className="btn-gradient rounded-full px-8 gap-2 group">
                  <a href="https://calendly.com/yuvraj-s-bhadauria/30min" target="_blank" rel="noopener noreferrer">
                    Book a demo
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full px-8 bg-transparent">
                    <Link href="/architecture">See the architecture</Link>
                </Button>
                </motion.div>
              </div>

              {/* Right side - Revolving agents around Context (Solar System) */}
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* CSS for orbital animation */}
                <style jsx>{`
                  @keyframes orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                  @keyframes counter-0 {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                  }
                  @keyframes counter-72 {
                    from { transform: rotate(-72deg); }
                    to { transform: rotate(-432deg); }
                  }
                  @keyframes counter-144 {
                    from { transform: rotate(-144deg); }
                    to { transform: rotate(-504deg); }
                  }
                  @keyframes counter-216 {
                    from { transform: rotate(-216deg); }
                    to { transform: rotate(-576deg); }
                  }
                  @keyframes counter-288 {
                    from { transform: rotate(-288deg); }
                    to { transform: rotate(-648deg); }
                  }
                  .orbital-container {
                    animation: orbit 30s linear infinite;
                  }
                  .agent-0 { animation: counter-0 30s linear infinite; }
                  .agent-72 { animation: counter-72 30s linear infinite; }
                  .agent-144 { animation: counter-144 30s linear infinite; }
                  .agent-216 { animation: counter-216 30s linear infinite; }
                  .agent-288 { animation: counter-288 30s linear infinite; }
                `}</style>

                {/* Central Context element */}
                <div className="absolute z-20 w-20 h-20 rounded-full bg-gradient-to-br from-muted/80 to-muted/60 border border-border/50 flex items-center justify-center backdrop-blur-sm shadow-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="text-center">
                    <CircleDot className="w-6 h-6 text-foreground mx-auto mb-0.5" />
                    <span className="text-[10px] font-semibold text-foreground">Context</span>
                  </div>
                </div>

                {/* Orbital rings (solar system style) */}
                <div className="absolute w-[100px] h-[100px] rounded-full border border-border/40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute w-[180px] h-[180px] rounded-full border border-dashed border-border/30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute w-[260px] h-[260px] rounded-full border border-border/25 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute w-[320px] h-[320px] rounded-full border-2 border-border/50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-border/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

                {/* Orbital container that rotates */}
                <div className="orbital-container absolute w-[320px] h-[320px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* SCADA - 0 degrees (right) */}
                  <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(-50%, -50%) rotate(0deg) translateX(160px)" }}>
                    <div className="agent-0 relative w-24 h-24 rounded-xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-md flex flex-col items-center justify-center p-3 hover:scale-110 transition-transform">
                      <div className="w-10 h-10 rounded-lg bg-muted/60 flex items-center justify-center mb-1.5">
                        <Layers className="w-5 h-5 text-foreground/80" />
                      </div>
                      <span className="text-[10px] font-medium text-foreground">SCADA</span>
                      <span className="text-[9px] text-muted-foreground">Agent</span>
                    </div>
                  </div>

                  {/* ERP - 72 degrees */}
                  <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(-50%, -50%) rotate(72deg) translateX(160px)" }}>
                    <div className="agent-72 relative w-24 h-24 rounded-xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-md flex flex-col items-center justify-center p-3 hover:scale-110 transition-transform">
                      <div className="w-10 h-10 rounded-lg bg-muted/60 flex items-center justify-center mb-1.5">
                        <Database className="w-5 h-5 text-foreground/80" />
                      </div>
                      <span className="text-[10px] font-medium text-foreground">ERP</span>
                      <span className="text-[9px] text-muted-foreground">Agent</span>
                    </div>
                  </div>

                  {/* Global Ops - 144 degrees */}
                  <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(-50%, -50%) rotate(144deg) translateX(160px)" }}>
                    <div className="agent-144 relative w-24 h-24 rounded-xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-md flex flex-col items-center justify-center p-3 hover:scale-110 transition-transform">
                      <div className="w-10 h-10 rounded-lg bg-muted/60 flex items-center justify-center mb-1.5">
                        <Network className="w-5 h-5 text-foreground/80" />
                      </div>
                      <span className="text-[10px] font-medium text-foreground">Global Ops</span>
                      <span className="text-[9px] text-muted-foreground">Agent</span>
                    </div>
                  </div>

                  {/* CRM - 216 degrees */}
                  <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(-50%, -50%) rotate(216deg) translateX(160px)" }}>
                    <div className="agent-216 relative w-24 h-24 rounded-xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-md flex flex-col items-center justify-center p-3 hover:scale-110 transition-transform">
                      <div className="w-10 h-10 rounded-lg bg-muted/60 flex items-center justify-center mb-1.5">
                        <Users className="w-5 h-5 text-foreground/80" />
                      </div>
                      <span className="text-[10px] font-medium text-foreground">CRM</span>
                      <span className="text-[9px] text-muted-foreground">Agent</span>
                    </div>
                  </div>

                  {/* SOP - 288 degrees */}
                  <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(-50%, -50%) rotate(288deg) translateX(160px)" }}>
                    <div className="agent-288 relative w-24 h-24 rounded-xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-md flex flex-col items-center justify-center p-3 hover:scale-110 transition-transform">
                      <div className="w-10 h-10 rounded-lg bg-muted/60 flex items-center justify-center mb-1.5">
                        <FileText className="w-5 h-5 text-foreground/80" />
                      </div>
                      <span className="text-[10px] font-medium text-foreground">SOP</span>
                      <span className="text-[9px] text-muted-foreground">Agent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats */}
        <AnimatedStats />

        {/* Platform Overview */}
        <section ref={platformRef} className="py-24 px-4 relative bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 border-b border-border/50">
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-foreground/5" />
            </svg>
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              animate={platformInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto mb-14 text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                One platform, many capabilities
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The platform connects to your existing systems without replacing them. It builds a shared context layer
                that multiple agents can use to answer questions, explain situations, and take governed actions across
                operational and business domains.
              </p>
            </motion.div>

            {/* Architecture Flow Strip */}
            <motion.div
              initial="hidden"
              animate={platformInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="flex flex-wrap justify-center items-center gap-3 text-sm"
            >
              <motion.span
                variants={fadeInUp}
                className="px-5 py-2.5 rounded-full bg-background border border-border font-medium"
              >
                Connectors
              </motion.span>
              <motion.span variants={fadeIn} className="text-muted-foreground">→</motion.span>
              <motion.span
                variants={fadeInUp}
                className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium"
              >
                Context Layer
              </motion.span>
              <motion.span variants={fadeIn} className="text-muted-foreground">→</motion.span>
              <motion.span
                variants={fadeInUp}
                className="px-5 py-2.5 rounded-full bg-background border border-border font-medium"
              >
                Agent Packs
              </motion.span>
              <motion.span variants={fadeIn} className="text-muted-foreground">→</motion.span>
              <motion.span
                variants={fadeInUp}
                className="px-5 py-2.5 rounded-full bg-background border border-border font-medium"
              >
                Governed Actions
              </motion.span>
              <motion.span variants={fadeIn} className="text-muted-foreground">→</motion.span>
              <motion.span
                variants={fadeInUp}
                className="px-5 py-2.5 rounded-full bg-background border border-border font-medium"
              >
                UI Surfaces
              </motion.span>
            </motion.div>
          </div>
        </section>

        {/* Agent Packs - Tabbed Interface */}
        <AgentPacksSection agentPacksRef={agentPacksRef} agentPacksInView={agentPacksInView} />

        {/* How it works */}
        <section ref={howItWorksRef} className="py-24 px-4 relative bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 border-b border-border/50">
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-pattern-2" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern-2)" className="text-foreground/5" />
            </svg>
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              animate={howItWorksInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">How it works</h2>
              <p className="text-lg text-muted-foreground">From connection to continuous improvement.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={howItWorksInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="relative"
            >
              {/* Connecting line - hidden on mobile */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={howItWorksInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent origin-left"
              />

              <div className="grid md:grid-cols-5 gap-8">
                {steps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                    className="text-center relative"
                  >
                    <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-5 text-lg font-bold relative z-10 shadow-lg">
                      {item.step}
              </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Impact with Image Collage */}
        <section className="py-24 px-4 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Collage - Left Side */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src="/pic1.jpeg"
                      alt="Industrial manufacturing"
                      className="w-full h-full object-cover brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/30 via-transparent to-foreground/20" />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src="/pic2.jpeg"
                      alt="Control room"
                      className="w-full h-full object-cover brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-foreground/30 via-transparent to-foreground/20" />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src="/pic3.jpeg"
                      alt="Process systems"
                      className="w-full h-full object-cover brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-foreground/30 via-transparent to-foreground/20" />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src="/pic4.jpeg"
                      alt="Equipment monitoring"
                      className="w-full h-full object-cover brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-foreground/30 via-transparent to-foreground/20" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-2 border-dashed border-foreground/10 -z-10" />
              </div>

              {/* Content - Right Side */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Built for industry
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Where every minute of downtime costs money. Where decisions need context from five different systems. Where the person who knew how to fix it just retired.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We built ContextWeaver for these environments — not as another dashboard to check, but as an intelligent layer that connects what you already have.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section ref={integrationsRef} id="integrations" className="py-24 px-4 border-b border-border/50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              animate={integrationsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">Integrations</h2>
              <p className="text-lg text-muted-foreground">Connect to the systems you already use.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={integrationsInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-3"
            >
              {integrations.map((integration) => (
                <motion.div
                  key={integration.name}
                  variants={fadeInUp}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2.5 text-sm py-2.5 px-5 rounded-full border border-border bg-background hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-foreground/70">{integration.logo}</span>
                  <span className="font-medium">{integration.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <CTABand
          title="Ready to unify your operational data?"
          description="Tell us about your systems and the outcomes you care about. We will show you how the platform can help."
        />
      </motion.main>
      <Footer />
    </>
  )
}
