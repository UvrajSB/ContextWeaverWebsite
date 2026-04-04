"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import {
  ArrowUpRight,
  Database,
  Wrench,
  Bell,
  TrendingUp,
  Shield,
  Zap,
  AlertTriangle,
  GitBranch,
  BarChart3,
  Cpu,
  Network,
  FlaskConical,
  Activity,
} from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"
import { AnimatedStats } from "@/components/animated-stats"
import { HeroAnalysisCard } from "@/components/hero-analysis-card"

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

const dataProblems = [
  {
    icon: AlertTriangle,
    title: "Sensor data you can't trust",
    stat: "~40%",
    statLabel: "of sensor readings need cleaning before use",
  },
  {
    icon: GitBranch,
    title: "Context lives in silos",
    stat: "60%",
    statLabel: "of investigation time spent just gathering data",
  },
  {
    icon: Wrench,
    title: "Hand-built pipelines break fast",
    stat: "70%",
    statLabel: "of data engineering effort is maintenance, not insight",
  },
]

const dataEngineeringAgents = [
  {
    icon: Database,
    name: "Pipeline Builder Agent",
    description: "Auto-discovers sources, infers schemas, and builds cleaning pipelines. No hand-coding.",
  },
  {
    icon: Shield,
    name: "Data Quality Agent",
    description: "Monitors ingested data continuously for gaps, drift, and anomalies before they reach analytics.",
  },
  {
    icon: Network,
    name: "Context Enrichment Agent",
    description: "Links raw tags to physical assets, production lines, and business outcomes across OT and IT.",
  },
]

const analyticsAgents = [
  {
    icon: GitBranch,
    name: "RCA Agent",
    description:
      "Traces the chain of events that led to an incident, surfacing the true root cause with a timestamped evidence trail.",
    capabilities: [
      "Multi-system causal chain analysis",
      "Timestamped incident timeline",
      "Contributing factor ranking",
      "RCA report generation",
    ],
    link: "/use-cases#root-cause",
    badge: "Demo available",
  },
  {
    icon: Wrench,
    name: "Troubleshooting Agent",
    description:
      "Guides operators through active downtime with step-by-step diagnostics drawn from live data, past incidents, and SOPs.",
    capabilities: [
      "Ranked fault hypotheses",
      "Step-by-step diagnostic checklist",
      "Similar past incident retrieval",
      "Shift handover summary draft",
    ],
    link: "/use-cases#troubleshooting",
  },
  {
    icon: Bell,
    name: "Alarm Management Agent",
    description:
      "Cuts through alarm floods by identifying nuisance alarms, grouping correlated events, and prioritizing what truly needs attention.",
    capabilities: [
      "EEMUA-compliant alarm KPIs",
      "Nuisance alarm identification",
      "Alarm rationalization proposals",
      "Suppression and shelving logic",
    ],
    link: "/use-cases#alarms",
  },
  {
    icon: BarChart3,
    name: "OEE Analytics Agent",
    description:
      "Breaks down availability, performance, and quality losses with each loss category tied to specific events and causes.",
    capabilities: [
      "Real-time OEE by line and shift",
      "Top-N loss waterfall analysis",
      "Speed vs. quality loss attribution",
      "Shift performance comparison",
    ],
    link: "/use-cases#oee",
  },
  {
    icon: FlaskConical,
    name: "Quality Deviation Agent",
    description:
      "Detects quality escapes early, correlates deviations to process conditions, and generates CAPA drafts with supporting evidence.",
    capabilities: [
      "In-line and lab data correlation",
      "Deviation-to-process root cause",
      "CAPA draft with data attachments",
      "Affected batch scope assessment",
    ],
    link: "/use-cases#quality",
  },
  {
    icon: Activity,
    name: "Predictive Health Agent",
    description:
      "Monitors equipment health signals over time, flags degradation trends, and recommends maintenance before failures occur.",
    capabilities: [
      "Health score and trend dashboard",
      "Remaining useful life estimates",
      "Maintenance action recommendations",
      "Work order draft with evidence",
    ],
    link: "/use-cases#predictive",
  },
]

const steps = [
  { step: 1, title: "Connect", description: "SCADA, historians, MES, ERP via native connectors" },
  { step: 2, title: "Clean", description: "Agents normalize, validate, and score data quality" },
  { step: 3, title: "Enrich", description: "Tags linked to assets, lines, and business context" },
  { step: 4, title: "Analyze", description: "RCA, troubleshooting, and production agents run on clean data" },
  { step: 5, title: "Improve", description: "Feedback refines models and expands coverage over time" },
]

const integrations = [
  { name: "OSIsoft PI" },
  { name: "Ignition" },
  { name: "Wonderware" },
  { name: "GE iFIX" },
  { name: "Rockwell FT" },
  { name: "SAP" },
  { name: "Oracle" },
  { name: "MS Dynamics" },
  { name: "ServiceNow" },
  { name: "Azure IoT" },
  { name: "AWS IoT" },
  { name: "OPC-UA" },
]

function AnalyticsAgentsTabs({ agents, isInView }: { agents: typeof analyticsAgents; isInView: boolean }) {
  const [active, setActive] = useState(0)
  const activeAgent = agents[active]
  const ActiveIcon = activeAgent.icon

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {agents.map((agent, i) => {
          const Icon = agent.icon
          return (
            <button
              key={agent.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {agent.name}
            </button>
          )
        })}
      </div>

      {/* Active agent panel */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-card border border-border rounded-3xl p-8 flex flex-col sm:flex-row gap-8 items-start max-w-3xl mx-auto"
      >
        <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center flex-shrink-0">
          <ActiveIcon className="w-7 h-7" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-xl font-semibold text-foreground">{activeAgent.name}</h3>
            {activeAgent.badge && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-foreground text-background text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
                {activeAgent.badge}
              </span>
            )}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-5">{activeAgent.description}</p>
          <Link
            href={activeAgent.link}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline underline-offset-4"
          >
            See full use case
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>

      <div className="text-center mt-8">
        <Button variant="outline" size="lg" asChild className="rounded-full px-8 bg-transparent">
          <Link href="/use-cases">Explore all use cases</Link>
        </Button>
      </div>
    </motion.div>
  )
}

export default function HomePage() {
  const problemRef = useRef(null)
  const deAgentsRef = useRef(null)
  const analyticsRef = useRef(null)
  const howItWorksRef = useRef(null)
  const integrationsRef = useRef(null)

  const problemInView = useInView(problemRef, { once: true, margin: "-100px" })
  const deAgentsInView = useInView(deAgentsRef, { once: true, margin: "-100px" })
  const analyticsInView = useInView(analyticsRef, { once: true, margin: "-100px" })
  const howItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" })
  const integrationsInView = useInView(integrationsRef, { once: true, margin: "-100px" })

  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        {/* ── Hero ── */}
        <section className="py-20 lg:py-28 px-4 border-b border-border/50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left: copy */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tighter mb-6 leading-[1.05]"
                >
                  IoT Data is Messy.
                  <br />
                  <span className="text-muted-foreground">Great Analytics</span>
                  <br />
                  <span className="text-muted-foreground">Shouldn't Be.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg"
                >
                  ContextWeaver deploys <strong className="text-foreground">Data Engineering Agents</strong> that
                  clean and structure raw IoT sensor data, then runs <strong className="text-foreground">Analytics Agents</strong> for
                  RCA, troubleshooting, alarm management, and production intelligence on top of it.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-start gap-3"
                >
                  <Button size="lg" asChild className="btn-gradient rounded-full px-8 gap-2 group">
                    <a href="https://calendly.com/yuvraj-s-bhadauria/30min" target="_blank" rel="noopener noreferrer">
                      Book a demo
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="rounded-full px-8 bg-transparent">
                    <Link href="/use-cases">See use cases</Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-8 flex items-center gap-6"
                >
                  {[
                    "No data migration required",
                    "Read-only source connections",
                    "Deploys in days",
                  ].map((point, i) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.12 }}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {point}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right: animated analysis card */}
              <div className="relative flex items-center justify-center lg:justify-end">
                <HeroAnalysisCard />
              </div>

            </div>
          </div>
        </section>

        {/* ── Animated Stats ── */}
        <AnimatedStats />

        {/* ── The Problem ── */}
        <section ref={problemRef} className="py-24 px-4 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              animate={problemInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="inline-block text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                The problem
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5">
                Why manufacturing analytics keeps failing
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Before any analytics can work, the data underneath has to be trustworthy. In most plants, it isn't.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={problemInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {dataProblems.map((problem, i) => {
                const Icon = problem.icon
                return (
                  <motion.div
                    key={problem.title}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative bg-card border border-border rounded-2xl p-8 flex flex-col gap-6 group hover:bg-secondary/30 transition-colors duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-5xl font-bold tracking-tight text-foreground leading-none mb-3">{problem.stat}</p>
                      <p className="text-sm font-medium text-foreground mb-1">{problem.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{problem.statLabel}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ── RCA Demo Video ── */}
        <section className="py-24 px-4 border-b border-border/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground mb-5">
                Live demo
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                See the RCA Agent in action
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Watch how the RCA Agent ingests messy sensor data, cleans it, and builds a traceable
                root cause timeline in minutes, not hours.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl"
            >
              <iframe
                src="https://www.youtube.com/embed/Zjbc6QrF4A4"
                title="RCA Agent Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
          </div>
        </section>

        {/* ── Data Engineering Agents ── */}
        <section
          ref={deAgentsRef}
          className="py-24 px-4 border-b border-border/50"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              animate={deAgentsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-block text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                Data Engineering Agents
              </span>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-lg">
                  Build a data foundation you can trust
                </h2>
                <p className="text-base text-muted-foreground max-w-xs leading-relaxed md:text-right">
                  Clean, normalize, and contextualize every sensor and tag automatically.
                </p>
              </div>
            </motion.div>

            {/* Asymmetric grid: 1 featured left + 2 stacked right */}
            <motion.div
              initial="hidden"
              animate={deAgentsInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-5 gap-4"
            >
              {/* Featured — Pipeline Builder */}
              {(() => {
                const agent = dataEngineeringAgents[0]
                const Icon = agent.icon
                return (
                  <motion.div
                    key={agent.name}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-3"
                  >
                    <div className="card-spotlight card-hover h-full bg-card border border-border rounded-2xl p-10 group relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
                      <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-3">Featured</p>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3">{agent.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{agent.description}</p>
                    </div>
                  </motion.div>
                )
              })()}

              {/* Two stacked cards */}
              <div className="md:col-span-2 flex flex-col gap-4">
                {dataEngineeringAgents.slice(1).map((agent, i) => {
                  const Icon = agent.icon
                  return (
                    <motion.div
                      key={agent.name}
                      variants={fadeInUp}
                      transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                      className="flex-1"
                    >
                      <div className="card-spotlight card-hover h-full bg-card border border-border rounded-2xl p-7 group">
                        <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">{agent.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Analytics Agents ── */}
        <section ref={analyticsRef} className="py-24 px-4 border-b border-border/50 bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              animate={analyticsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="inline-block text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                Analytics & Intelligence Agents
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5">
                RCA, troubleshooting, and production intelligence
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Specialized agents for every manufacturing use case, from diagnosing a downtime event in minutes
                to catching a quality deviation before it escapes the line.
              </p>
            </motion.div>

            <AnalyticsAgentsTabs agents={analyticsAgents} isInView={analyticsInView} />
          </div>
        </section>

        {/* ── How It Works ── */}
        <section
          ref={howItWorksRef}
          className="py-20 px-4 border-b border-border/50 bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate={howItWorksInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">How it works</h2>
              <p className="text-muted-foreground">From raw IoT data to reliable analytics in five steps.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={howItWorksInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="flex flex-col sm:flex-row items-stretch gap-0"
            >
              {steps.map((item, i) => (
                <motion.div
                  key={item.step}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex-1 flex flex-col items-center text-center px-4 py-6 relative group"
                >
                  {/* connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden sm:block absolute right-0 top-[38px] w-px h-6 bg-border -translate-y-1/2 translate-x-1/2 z-10" />
                  )}
                  <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold mb-3 relative z-10">
                    {item.step}
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Industry context with images ── */}
        <section className="py-24 px-4 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 gap-3"
              >
                {["/pic1.jpeg", "/pic2.jpeg", "/pic3.jpeg", "/pic4.jpeg"].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                  >
                    <img
                      src={src}
                      alt="Manufacturing plant"
                      className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/30 via-transparent to-foreground/20" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-block text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                  Built for the plant floor
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                  Where every minute of downtime costs money
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Manufacturing plants run on thousands of sensors producing millions of readings per day.
                    That data is an incredible asset when it's clean, contextual, and accessible.
                  </p>
                  <p>
                    Most plants are nowhere near that. Engineers export CSVs, paste them into spreadsheets,
                    and spend half the day just assembling the picture before they can start diagnosing.
                  </p>
                  <p>
                    ContextWeaver was built for these environments to make the data infrastructure problem
                    go away so your team can focus on the problem that matters: keeping operations running.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: "Discrete manufacturing", icon: Cpu },
                    { label: "Process industries", icon: FlaskConical },
                    { label: "Food & beverage", icon: Zap },
                    { label: "Oil, gas & chemicals", icon: TrendingUp },
                  ].map(({ label, icon: Icon }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors"
                    >
                      <Icon className="w-4 h-4 text-foreground flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Integrations ── */}
        <section ref={integrationsRef} className="py-20 px-4 border-b border-border/50 overflow-hidden">
          <motion.div
            initial="hidden"
            animate={integrationsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
              Connects to what you already run
            </h2>
            <p className="text-sm text-muted-foreground">
              No rip-and-replace. Native connectors for your existing industrial systems.
            </p>
          </motion.div>

          {/* Marquee strip */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex overflow-hidden">
              <div className="animate-marquee flex gap-3 whitespace-nowrap">
                {[...integrations, ...integrations].map((integration, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-secondary border border-border text-sm font-medium text-foreground flex-shrink-0"
                  >
                    {integration.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/architecture" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
              See the full architecture →
            </Link>
          </div>
        </section>

        <CTABand
          title="Ready to fix your data foundation?"
          description="Tell us what systems you run and what outcomes matter most. We'll map the data engineering pipeline and first agent pack for your plant."
        />
      </motion.main>
      <Footer />
    </>
  )
}
