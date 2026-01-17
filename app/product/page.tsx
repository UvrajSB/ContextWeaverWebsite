import Link from "next/link"
import { ArrowUpRight, Check, Layers, Database, Users, FileText, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"

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

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero - Updated styling */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
              A shared context layer with modular agents
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Connect your operational systems, build a unified context, and run specialized agents that understand your
              plant, your processes, and your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="rounded-full px-8 gap-2">
                <a href="https://calendly.com/yuvraj-s-bhadauria/30min" target="_blank" rel="noopener noreferrer">
                  Book a demo
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8 bg-transparent">
                <Link href="/architecture">See the architecture</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-24 px-4 bg-secondary/50">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                One platform, many capabilities
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The platform connects to your existing systems without replacing them. It builds a shared context layer
                that multiple agents can use to answer questions, explain situations, and take governed actions across
                operational and business domains.
              </p>
            </div>

            {/* Architecture Flow Strip */}
            <div className="flex flex-wrap justify-start items-center gap-3 text-sm">
              <span className="px-5 py-2.5 rounded-full bg-background border border-border font-medium">
                Connectors
              </span>
              <span className="text-muted-foreground">→</span>
              <span className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium">
                Context Layer
              </span>
              <span className="text-muted-foreground">→</span>
              <span className="px-5 py-2.5 rounded-full bg-background border border-border font-medium">
                Agent Packs
              </span>
              <span className="text-muted-foreground">→</span>
              <span className="px-5 py-2.5 rounded-full bg-background border border-border font-medium">
                Governed Actions
              </span>
              <span className="text-muted-foreground">→</span>
              <span className="px-5 py-2.5 rounded-full bg-background border border-border font-medium">
                UI Surfaces
              </span>
            </div>
          </div>
        </section>

        {/* Agent Packs */}
        <section id="packs" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                Agent packs for each domain
              </h2>
              <p className="text-lg text-muted-foreground">
                Specialized agents that know their domain, all using the same context layer.
              </p>
            </div>

            {/* Global Operations Pack Wrapper */}
            <div className="relative">
              {/* Outer container - Global Operations Pack */}
              <div className="relative rounded-[2.5rem] border-2 border-dashed border-foreground/20 bg-gradient-to-b from-secondary/30 to-secondary/60 p-8 md:p-10">
                {/* Decorative connecting lines from header to cards */}
                <svg
                  className="absolute top-32 left-0 right-0 h-16 w-full pointer-events-none hidden md:block"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  {/* Lines connecting to each card */}
                  <line
                    x1="50%"
                    y1="0"
                    x2="25%"
                    y2="100%"
                    stroke="url(#lineGrad)"
                    strokeWidth="1"
                    className="text-foreground"
                  />
                  <line
                    x1="50%"
                    y1="0"
                    x2="75%"
                    y2="100%"
                    stroke="url(#lineGrad)"
                    strokeWidth="1"
                    className="text-foreground"
                  />
                </svg>

                {/* Global Pack Header */}
                <div className="relative bg-foreground text-background rounded-3xl p-6 md:p-8 mb-8 overflow-hidden">
                  {/* Decorative pattern inside header */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <circle cx="1" cy="1" r="0.5" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
                  <div className="absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-white/5" />

                  <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0 border border-white/10">
                      <Network className="w-8 h-8" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">Global Operations Pack</h3>
                      <p className="text-white/80 leading-relaxed mb-6 max-w-2xl">
                        Reason across SCADA, ERP, CRM, and SOP domains. Generate unified insights, system-level tradeoff
                        analysis, and leadership-ready narratives by coordinating domain agents.
                      </p>

                      {/* Capabilities */}
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
                          Capabilities
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {[
                            "Cross-domain incident and performance analysis",
                            "Operational ↔ business impact correlation",
                            "Constraint and tradeoff reasoning across systems",
                            "Executive summaries and decision narratives",
                          ].map((capability) => (
                            <div key={capability} className="flex items-center gap-2.5 text-sm text-white/80">
                              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3" />
                              </div>
                              {capability}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Connects to */}
                      <div>
                        <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">Coordinates</p>
                        <div className="flex flex-wrap gap-2">
                          {["SCADA Pack", "ERP Pack", "CRM Pack", "SOP/Quality Pack"].map((pack) => (
                            <span
                              key={pack}
                              className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-medium"
                            >
                              {pack}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Helper text */}
                  <p className="relative mt-6 pt-4 border-t border-white/10 text-xs text-white/50 italic">
                    This pack does not connect to source systems directly. It reasons through domain agents using the
                    shared context layer.
                  </p>
                </div>

                {/* Domain Pack Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {agentPacks.map((pack, index) => {
                    const IconComponent = pack.icon
                    return (
                      <Card
                        key={pack.id}
                        id={pack.id}
                        className="group relative overflow-hidden bg-card border-border rounded-3xl transition-all duration-500 hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1"
                      >
                        {/* Decorative corner pattern */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-secondary/80 transition-transform duration-500 group-hover:scale-150" />
                        <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-secondary transition-transform duration-500 group-hover:scale-150 delay-75" />

                        {/* Subtle grid pattern */}
                        <div
                          className="absolute inset-0 opacity-[0.02] pointer-events-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          }}
                        />

                        <CardHeader className="relative pb-4 z-10">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-xl mb-3">{pack.name}</CardTitle>
                              <p className="text-muted-foreground text-sm leading-relaxed">{pack.description}</p>
                            </div>
                            {/* Icon container with subtle styling */}
                            <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center flex-shrink-0 ml-4 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                              <IconComponent className="w-6 h-6" />
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="relative z-10">
                          <div className="mb-6">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                              Capabilities
                            </p>
                            <div className="grid grid-cols-2 gap-2.5">
                              {pack.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2.5 text-sm text-foreground/80">
                                  <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                                    <Check className="w-3 h-3 text-foreground" />
                                  </div>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-5 border-t border-border/50">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                              Connects to
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {pack.systems.map((system) => (
                                <Badge
                                  key={system}
                                  variant="secondary"
                                  className="rounded-full bg-secondary/80 border border-border/50 text-foreground/70 font-normal"
                                >
                                  {system}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                {/* Corner badges showing containment */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-foreground text-background text-xs font-semibold rounded-full shadow-lg">
                  Global Operations Pack
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 px-4 bg-secondary/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">How it works</h2>
              <p className="text-lg text-muted-foreground">From connection to continuous improvement.</p>
            </div>

            <div className="relative">
              {/* Connecting line - hidden on mobile */}
              <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

              <div className="grid md:grid-cols-5 gap-8">
                {steps.map((item, index) => (
                  <div key={item.step} className="text-center relative">
                    <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-5 text-lg font-bold relative z-10 shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section id="integrations" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">Integrations</h2>
              <p className="text-lg text-muted-foreground">Connect to the systems you already use.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="flex items-center gap-2.5 text-sm py-2.5 px-5 rounded-full border border-border bg-background hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-foreground/70">{integration.logo}</span>
                  <span className="font-medium">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABand
          title="Ready to unify your operational data?"
          description="Tell us about your systems and the outcomes you care about. We will show you how the platform can help."
        />
      </main>
      <Footer />
    </>
  )
}
