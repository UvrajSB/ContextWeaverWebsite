import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"

const contextLayerItems = [
  {
    id: "asset-model",
    title: "Asset & identity model",
    content:
      "A hierarchical representation of your physical and logical assets: plants, lines, machines, equipment, and the tags that measure them. Assets are linked to their identities in other systems (ERP equipment IDs, CRM account codes, maintenance system asset numbers) so queries can traverse across domains.",
  },
  {
    id: "semantic-layer",
    title: "Semantic layer (metrics definitions)",
    content:
      "Consistent definitions for KPIs and metrics that everyone agrees on. OEE, availability, quality, throughput, and custom metrics are defined once and computed consistently across all agents and surfaces. No more spreadsheet disagreements about what 'uptime' means.",
  },
  {
    id: "lineage",
    title: "Lineage & relationships (OT ↔ IT)",
    content:
      "Explicit links between operational signals and business entities. Which tags belong to which equipment? Which equipment produces which products? Which products fulfill which orders? Which orders belong to which customers? These relationships enable cross-domain reasoning.",
  },
  {
    id: "memory",
    title: "Memory (incidents, fixes, learnings)",
    content:
      "A persistent record of what has happened and what worked. Past incidents, their root causes, the fixes that resolved them, and the learnings captured afterward. This memory allows agents to recognize patterns and suggest solutions that have worked before.",
  },
  {
    id: "knowledge",
    title: "Knowledge indexing (SOPs, tickets, docs)",
    content:
      "Indexed access to unstructured knowledge: standard operating procedures, maintenance manuals, past tickets, engineering documents. Agents can retrieve and reason over this content in the context of the current situation.",
  },
]

const orchestrationItems = [
  {
    title: "Tool routing",
    description:
      "The platform routes queries to the appropriate agents and tools based on the question type and available context.",
  },
  {
    title: "Policy enforcement",
    description:
      "Actions are governed by policies that define what agents can do, what requires approval, and what is logged.",
  },
  {
    title: "Observability",
    description: "Full visibility into agent reasoning, data access, and action execution for debugging and audit.",
  },
  {
    title: "Human approvals",
    description:
      "Sensitive or high-impact actions require human review before execution, with clear context for the approver.",
  },
]

export default function ArchitecturePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
              Context layer = shared brain
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              The platform works because every agent shares the same understanding of your operations. That
              understanding lives in the context layer.
            </p>
          </div>
        </section>

        {/* Big Diagram - Updated styling */}
        <section className="py-16 px-4 bg-secondary/50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-3xl border border-border p-8 overflow-x-auto">
              <svg
                viewBox="0 0 920 420"
                className="w-full min-w-[700px] h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Defs for arrows and patterns */}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="8"
                    markerHeight="6"
                    refX="7"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 8 3, 0 6" className="fill-foreground/40" />
                  </marker>
                  <marker
                    id="arrowheadBold"
                    markerWidth="8"
                    markerHeight="6"
                    refX="7"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 8 3, 0 6" className="fill-foreground" />
                  </marker>
                  <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.5" className="fill-foreground/10" />
                  </pattern>
                </defs>

                {/* Background subtle pattern */}
                <rect width="920" height="420" fill="url(#dotPattern)" />

                {/* Sources */}
                <g>
                  <rect
                    x="20"
                    y="60"
                    width="120"
                    height="280"
                    rx="16"
                    className="fill-secondary stroke-border"
                    strokeWidth="1"
                  />
                  <text
                    x="80"
                    y="40"
                    textAnchor="middle"
                    className="fill-foreground text-sm font-semibold"
                    fontSize="14"
                  >
                    Sources
                  </text>

                  <rect
                    x="35"
                    y="80"
                    width="90"
                    height="40"
                    rx="20"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="80" y="105" textAnchor="middle" className="fill-foreground" fontSize="11">
                    SCADA
                  </text>

                  <rect
                    x="35"
                    y="130"
                    width="90"
                    height="40"
                    rx="20"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="80" y="155" textAnchor="middle" className="fill-foreground" fontSize="11">
                    Historian
                  </text>

                  <rect
                    x="35"
                    y="180"
                    width="90"
                    height="40"
                    rx="20"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="80" y="205" textAnchor="middle" className="fill-foreground" fontSize="11">
                    MES
                  </text>

                  <rect
                    x="35"
                    y="230"
                    width="90"
                    height="40"
                    rx="20"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="80" y="255" textAnchor="middle" className="fill-foreground" fontSize="11">
                    ERP
                  </text>

                  <rect
                    x="35"
                    y="280"
                    width="90"
                    height="40"
                    rx="20"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="80" y="305" textAnchor="middle" className="fill-foreground" fontSize="11">
                    CRM / Docs
                  </text>
                </g>

                {/* Connectors */}
                <g>
                  <rect
                    x="180"
                    y="130"
                    width="80"
                    height="140"
                    rx="16"
                    className="fill-secondary stroke-border"
                    strokeWidth="1"
                  />
                  <text x="220" y="185" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="500">
                    Connectors
                  </text>
                  <text x="220" y="205" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
                    Secure
                  </text>
                  <text x="220" y="220" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
                    Read-only
                  </text>
                  {/* Small lock icon */}
                  <circle cx="220" cy="245" r="8" className="fill-foreground/10" />
                  <rect x="216" y="243" width="8" height="6" rx="1" className="fill-foreground/40" />
                  <path d="M217 243v-2a3 3 0 0 1 6 0v2" className="stroke-foreground/40" strokeWidth="1.5" fill="none" />
                </g>

                {/* Connection lines - Sources to Connectors */}
                <g className="stroke-foreground/30" strokeWidth="1">
                  <line x1="125" y1="100" x2="180" y2="160" />
                  <line x1="125" y1="150" x2="180" y2="180" />
                  <line x1="140" y1="200" x2="180" y2="200" markerEnd="url(#arrowhead)" />
                  <line x1="125" y1="250" x2="180" y2="220" />
                  <line x1="125" y1="300" x2="180" y2="240" />
                  {/* Connection dots at source ends */}
                  <circle cx="125" cy="100" r="2" className="fill-foreground/30" />
                  <circle cx="125" cy="150" r="2" className="fill-foreground/30" />
                  <circle cx="140" cy="200" r="2" className="fill-foreground/30" />
                  <circle cx="125" cy="250" r="2" className="fill-foreground/30" />
                  <circle cx="125" cy="300" r="2" className="fill-foreground/30" />
                </g>

                {/* Context Layer - Central */}
                <g>
                  <rect
                    x="300"
                    y="50"
                    width="200"
                    height="300"
                    rx="20"
                    className="fill-foreground/5 stroke-foreground"
                    strokeWidth="2"
                  />
                  {/* Inner glow effect */}
                  <rect
                    x="305"
                    y="55"
                    width="190"
                    height="290"
                    rx="17"
                    className="fill-none stroke-foreground/10"
                    strokeWidth="1"
                  />
                  <text
                    x="400"
                    y="35"
                    textAnchor="middle"
                    className="fill-foreground text-sm font-semibold"
                    fontSize="14"
                  >
                    Context Layer
                  </text>

                  <rect
                    x="320"
                    y="75"
                    width="160"
                    height="38"
                    rx="19"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="400" y="99" textAnchor="middle" className="fill-foreground" fontSize="10">
                    Asset Model
                  </text>

                  <rect
                    x="320"
                    y="123"
                    width="160"
                    height="38"
                    rx="19"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="400" y="147" textAnchor="middle" className="fill-foreground" fontSize="10">
                    Semantic Metrics
                  </text>

                  <rect
                    x="320"
                    y="171"
                    width="160"
                    height="38"
                    rx="19"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="400" y="195" textAnchor="middle" className="fill-foreground" fontSize="10">
                    Lineage & Relationships
                  </text>

                  <rect
                    x="320"
                    y="219"
                    width="160"
                    height="38"
                    rx="19"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="400" y="243" textAnchor="middle" className="fill-foreground" fontSize="10">
                    Memory & Learnings
                  </text>

                  <rect
                    x="320"
                    y="267"
                    width="160"
                    height="38"
                    rx="19"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="400" y="291" textAnchor="middle" className="fill-foreground" fontSize="10">
                    Knowledge Index
                  </text>

                  {/* Vertical connecting line inside context layer */}
                  <line x1="310" y1="94" x2="310" y2="286" className="stroke-foreground/10" strokeWidth="1" strokeDasharray="2 4" />
                </g>

                {/* Connection - Connectors to Context */}
                <line x1="260" y1="200" x2="300" y2="200" className="stroke-foreground/40" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <circle cx="260" cy="200" r="3" className="fill-foreground/30" />

                {/* Agents */}
                <g>
                  <rect
                    x="545"
                    y="90"
                    width="120"
                    height="220"
                    rx="16"
                    className="fill-secondary stroke-border"
                    strokeWidth="1"
                  />
                  <text
                    x="605"
                    y="35"
                    textAnchor="middle"
                    className="fill-foreground text-sm font-semibold"
                    fontSize="14"
                  >
                    Agents
                  </text>

                  <rect
                    x="560"
                    y="115"
                    width="90"
                    height="38"
                    rx="19"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="605" y="139" textAnchor="middle" className="fill-foreground" fontSize="10">
                    Troubleshoot
                  </text>

                  <rect
                    x="560"
                    y="163"
                    width="90"
                    height="38"
                    rx="19"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="605" y="187" textAnchor="middle" className="fill-foreground" fontSize="10">
                    Root Cause
                  </text>

                  <rect
                    x="560"
                    y="211"
                    width="90"
                    height="38"
                    rx="19"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="605" y="235" textAnchor="middle" className="fill-foreground" fontSize="10">
                    Report
                  </text>

                  <rect
                    x="560"
                    y="259"
                    width="90"
                    height="38"
                    rx="19"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="605" y="283" textAnchor="middle" className="fill-foreground" fontSize="10">
                    Guide
                  </text>
                </g>

                {/* Connection - Context to Agents (bold, main flow) */}
                <line x1="500" y1="200" x2="545" y2="200" className="stroke-foreground" strokeWidth="2" markerEnd="url(#arrowheadBold)" />
                <circle cx="500" cy="200" r="4" className="fill-foreground" />

                {/* Surfaces - Fixed container */}
                <g>
                  <rect
                    x="710"
                    y="115"
                    width="120"
                    height="170"
                    rx="16"
                    className="fill-secondary stroke-border"
                    strokeWidth="1"
                  />
                  <text
                    x="770"
                    y="35"
                    textAnchor="middle"
                    className="fill-foreground text-sm font-semibold"
                    fontSize="14"
                  >
                    Surfaces
                  </text>

                  <rect
                    x="725"
                    y="140"
                    width="90"
                    height="35"
                    rx="17"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="770" y="162" textAnchor="middle" className="fill-foreground" fontSize="10">
                    Chat
                  </text>

                  <rect
                    x="725"
                    y="185"
                    width="90"
                    height="35"
                    rx="17"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="770" y="207" textAnchor="middle" className="fill-foreground" fontSize="10">
                    Dashboards
                  </text>

                  <rect
                    x="725"
                    y="230"
                    width="90"
                    height="35"
                    rx="17"
                    className="fill-background stroke-border"
                    strokeWidth="1"
                  />
                  <text x="770" y="252" textAnchor="middle" className="fill-foreground" fontSize="10">
                    Alerts
                  </text>
                </g>

                {/* Connection - Agents to Surfaces */}
                <line x1="665" y1="200" x2="710" y2="200" className="stroke-foreground/40" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <circle cx="665" cy="200" r="3" className="fill-foreground/30" />

                {/* Governance layer */}
                <g>
                  <rect
                    x="545"
                    y="330"
                    width="285"
                    height="50"
                    rx="25"
                    className="fill-foreground/5 stroke-foreground/30"
                    strokeWidth="1"
                  />
                  <text x="687" y="360" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="500">
                    Governance: Policies • Approvals • Audit Logs
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* Context Layer Deep Dive */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">Context layer deep dive</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              The context layer is the foundation that makes agents useful. It contains structured knowledge about your
              operations that agents can query and reason over.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {contextLayerItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-border">
                  <AccordionTrigger className="text-left py-5 hover:no-underline">
                    <span className="font-semibold text-lg">{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Orchestration */}
        <section className="py-24 px-4 bg-secondary/50">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                Orchestration & evaluation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The platform coordinates agent activities, enforces policies, and provides visibility into what agents
                are doing and why.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {orchestrationItems.map((item) => (
                <Card key={item.title} className="bg-card border-border rounded-3xl">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABand
          title="Want to see the architecture in action?"
          description="We can walk through how the context layer would work with your specific systems and use cases."
        />
      </main>
      <Footer />
    </>
  )
}
