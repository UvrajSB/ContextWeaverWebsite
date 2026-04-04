import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"

const dataLayerItems = [
  {
    id: "ingestion",
    title: "Ingestion & protocol adapters",
    content:
      "Native connectors for OPC-UA, MQTT, REST historians, OSIsoft PI, Ignition, Wonderware, and common MES/ERP APIs. Data is pulled securely on a read-only basis with no writes to source systems. Adapters handle protocol-level quirks like timestamp resolution differences, backfill gaps, and connection failures.",
  },
  {
    id: "quality",
    title: "Automated data quality pipeline",
    content:
      "Incoming sensor data is immediately assessed for completeness, range validity, freshness, and statistical anomalies. The Data Quality Agent applies configurable cleaning rules, interpolating short gaps, flagging suspect readings, removing duplicates, and maintains a quality score per tag over time. Downstream agents always know the reliability of the data they're working with.",
  },
  {
    id: "normalization",
    title: "Normalization & unit harmonization",
    content:
      "Different sensors report the same physical quantity in different units, at different resolutions, with different naming conventions. The normalization layer creates a consistent representation: standardized engineering units, aligned timestamps, canonical tag names mapped from the source tag namespace.",
  },
  {
    id: "context",
    title: "Context enrichment & asset model",
    content:
      "Raw sensor tags are linked to the physical assets they belong to (equipment, production lines, plants). Assets are connected to their representations in ERP, MES, and maintenance systems. This OT/IT bridge is what allows an RCA agent to trace from a quality defect back through process conditions to a specific piece of equipment and its maintenance history.",
  },
  {
    id: "memory",
    title: "Incident memory & learnings",
    content:
      "Past incidents, their root causes, the fixes that resolved them, and engineer notes are stored in a searchable memory layer. When a new incident occurs, agents can retrieve similar past events and suggest solutions that have worked before, creating an institutional knowledge base that doesn't leave when engineers do.",
  },
  {
    id: "knowledge",
    title: "Knowledge indexing (SOPs, manuals, tickets)",
    content:
      "Standard operating procedures, equipment manuals, past support tickets, and engineering documents are indexed and made retrievable in context. When a troubleshooting agent needs to reference the correct startup sequence for a compressor, it retrieves the relevant SOP section, not the entire document.",
  },
]

const governanceItems = [
  {
    title: "Read-only source access",
    description:
      "All source system connections are read-only. Agents cannot write to SCADA, historians, or ERP systems. Actions that affect operations require explicit human approval.",
  },
  {
    title: "Human-in-the-loop approvals",
    description:
      "High-impact actions (work order creation, alarm configuration changes, CAPA submissions) are proposed by agents but require human review and approval before execution.",
  },
  {
    title: "Full audit trail",
    description:
      "Every query, data access, agent reasoning step, and action is logged immutably. Audit trails are exportable for compliance reviews and post-incident investigations.",
  },
  {
    title: "Role-based access control",
    description:
      "Data visibility and agent capabilities are scoped by role. Operators see their line's data. Engineers see their plant. Leadership sees aggregates. Sensitive data is masked per policy.",
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
            <span className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground mb-6">
              Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
              Clean data in. Reliable answers out.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              The platform is built in two layers: a Data Engineering layer that makes IoT data trustworthy,
              and an Analytics Agent layer that reasons over it. Each layer is independently valuable.
              Together, they make manufacturing analytics actually work.
            </p>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="py-16 px-4 bg-secondary/50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-3xl border border-border p-8 overflow-x-auto">
              <svg
                viewBox="0 0 960 480"
                className="w-full min-w-[700px] h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" className="fill-foreground/40" />
                  </marker>
                  <marker id="arrowheadBold" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" className="fill-foreground" />
                  </marker>
                  <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.5" className="fill-foreground/10" />
                  </pattern>
                </defs>

                <rect width="960" height="480" fill="url(#dotPattern)" />

                {/* IoT Sources */}
                <g>
                  <rect x="20" y="80" width="130" height="300" rx="16" className="fill-secondary stroke-border" strokeWidth="1" />
                  <text x="85" y="55" textAnchor="middle" className="fill-foreground font-semibold" fontSize="13">IoT Sources</text>
                  {["SCADA", "Historian", "MES", "ERP/SAP", "Docs/SOPs"].map((label, i) => (
                    <g key={label}>
                      <rect x="35" y={100 + i * 52} width="100" height="36" rx="18" className="fill-background stroke-border" strokeWidth="1" />
                      <text x="85" y={122 + i * 52} textAnchor="middle" className="fill-foreground" fontSize="10">{label}</text>
                    </g>
                  ))}
                </g>

                {/* Data Engineering Layer */}
                <g>
                  <rect x="185" y="55" width="340" height="340" rx="20" className="fill-foreground/5 stroke-foreground" strokeWidth="2" />
                  <text x="355" y="38" textAnchor="middle" className="fill-foreground font-semibold" fontSize="13">Data Engineering Layer</text>

                  {/* Ingestion */}
                  <rect x="200" y="80" width="310" height="50" rx="12" className="fill-secondary stroke-border" strokeWidth="1" />
                  <text x="355" y="100" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="500">Ingestion & Protocol Adapters</text>
                  <text x="355" y="117" textAnchor="middle" className="fill-muted-foreground" fontSize="9">OPC-UA · MQTT · REST · Native connectors</text>

                  {/* Quality */}
                  <rect x="200" y="145" width="145" height="50" rx="12" className="fill-background stroke-border" strokeWidth="1" />
                  <text x="272" y="165" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="500">Data Quality</text>
                  <text x="272" y="182" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Clean · Validate · Score</text>

                  {/* Normalization */}
                  <rect x="355" y="145" width="155" height="50" rx="12" className="fill-background stroke-border" strokeWidth="1" />
                  <text x="432" y="165" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="500">Normalization</text>
                  <text x="432" y="182" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Units · Timestamps · Tags</text>

                  {/* Context Enrichment */}
                  <rect x="200" y="210" width="310" height="50" rx="12" className="fill-background stroke-border" strokeWidth="1" />
                  <text x="355" y="230" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="500">Context Enrichment & Asset Model</text>
                  <text x="355" y="247" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Tags → Equipment → Lines → Business outcomes</text>

                  {/* Memory & Knowledge */}
                  <rect x="200" y="275" width="145" height="50" rx="12" className="fill-background stroke-border" strokeWidth="1" />
                  <text x="272" y="295" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="500">Incident Memory</text>
                  <text x="272" y="312" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Past events & learnings</text>

                  <rect x="355" y="275" width="155" height="50" rx="12" className="fill-background stroke-border" strokeWidth="1" />
                  <text x="432" y="295" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="500">Knowledge Index</text>
                  <text x="432" y="312" textAnchor="middle" className="fill-muted-foreground" fontSize="9">SOPs · Manuals · Tickets</text>
                </g>

                {/* Arrows: Sources → DE Layer */}
                <g className="stroke-foreground/30" strokeWidth="1">
                  {[118, 170, 222, 274, 326].map((y, i) => (
                    <line key={i} x1="150" y1={y} x2="185" y2={y} markerEnd="url(#arrowhead)" />
                  ))}
                </g>

                {/* Analytics Agents */}
                <g>
                  <rect x="560" y="80" width="140" height="310" rx="16" className="fill-secondary stroke-border" strokeWidth="1" />
                  <text x="630" y="55" textAnchor="middle" className="fill-foreground font-semibold" fontSize="13">Analytics Agents</text>
                  {["RCA Agent", "Troubleshoot", "Alarm Mgmt", "OEE Agent", "Quality Agent", "Predictive"].map((label, i) => (
                    <g key={label}>
                      <rect x="575" y={100 + i * 46} width="110" height="36" rx="18" className="fill-background stroke-border" strokeWidth="1" />
                      <text x="630" y={122 + i * 46} textAnchor="middle" className="fill-foreground" fontSize="10">{label}</text>
                    </g>
                  ))}
                </g>

                {/* Arrow: DE Layer → Agents (bold, main flow) */}
                <line x1="525" y1="235" x2="560" y2="235" className="stroke-foreground" strokeWidth="2.5" markerEnd="url(#arrowheadBold)" />
                <circle cx="525" cy="235" r="5" className="fill-foreground" />

                {/* Surfaces */}
                <g>
                  <rect x="740" y="120" width="130" height="225" rx="16" className="fill-secondary stroke-border" strokeWidth="1" />
                  <text x="805" y="95" textAnchor="middle" className="fill-foreground font-semibold" fontSize="13">Surfaces</text>
                  {["Chat interface", "Dashboards", "Email alerts", "Work orders"].map((label, i) => (
                    <g key={label}>
                      <rect x="755" y={140 + i * 48} width="100" height="36" rx="18" className="fill-background stroke-border" strokeWidth="1" />
                      <text x="805" y={162 + i * 48} textAnchor="middle" className="fill-foreground" fontSize="10">{label}</text>
                    </g>
                  ))}
                </g>

                {/* Arrow: Agents → Surfaces */}
                <line x1="700" y1="235" x2="740" y2="235" className="stroke-foreground/40" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <circle cx="700" cy="235" r="3" className="fill-foreground/40" />

                {/* Governance Bar */}
                <rect x="560" y="415" width="310" height="45" rx="22" className="fill-foreground/5 stroke-foreground/30" strokeWidth="1" />
                <text x="715" y="442" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="500">
                  Governance: RBAC · Approvals · Audit Logs · Read-only sources
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* Data Engineering Layer Deep Dive */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Data engineering layer, in detail
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              The data engineering layer is what makes the analytics agents reliable. Without it, agents would
              be reasoning over noisy, incomplete, context-free sensor data, and producing untrustworthy outputs.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {dataLayerItems.map((item) => (
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

        {/* Governance */}
        <section className="py-24 px-4 bg-secondary/50">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                Governance & safety
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connecting AI agents to operational systems requires strict guardrails. Every interaction
                is governed, logged, and auditable.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {governanceItems.map((item) => (
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

        <CTABand
          title="Want to see the architecture in action?"
          description="We'll walk through how the data engineering pipeline would work with your specific systems, and what the first analytics agent would look like on top of it."
        />
      </main>
      <Footer />
    </>
  )
}
