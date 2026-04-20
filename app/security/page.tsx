"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Shield,
  Lock,
  Eye,
  Users,
  Server,
  FileCheck,
  BrainCircuit,
  Network,
  Fingerprint,
  MapPin,
  Plus,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"

const EASE = [0.22, 1, 0.36, 1] as const

const slmPillars = [
  {
    icon: Lock,
    title: "Your data never leaves",
    body: "Small language models fine-tuned and served on your hardware. No egress, no SaaS round-trip. Works in fully air-gapped environments.",
  },
  {
    icon: BrainCircuit,
    title: "Your SOPs are not training data",
    body: "We never fine-tune on client data outside the client's environment. Your tag schema, your batch records, your operator notes stay yours.",
  },
  {
    icon: Network,
    title: "Read-only by default",
    body: "Source connections to SCADA, MES, ERP are read-only. Write actions (work orders, schedule changes) flow through systems-of-record with full human-in-the-loop.",
  },
]

const controls = [
  {
    icon: Users,
    title: "Access & identity",
    body: "RBAC integrated with your IdP (Okta, Azure AD, Google). Scoped tokens per agent. SCIM provisioning supported.",
  },
  {
    icon: Eye,
    title: "Audit & lineage",
    body: "Every agent query, every data read, every generated artifact is logged with full lineage. Immutable, exportable, compliance-ready.",
  },
  {
    icon: Shield,
    title: "Human-in-the-loop",
    body: "High-impact actions require explicit approval. Approvers see the full chain of reasoning, source evidence, and what the agent is about to do.",
  },
  {
    icon: Server,
    title: "Deployment modes",
    body: "On-prem, private VPC, or managed SaaS. Hybrid modes supported for data-residency constraints (e.g. EU plant + US HQ).",
  },
  {
    icon: Fingerprint,
    title: "Model provenance",
    body: "Every model's base checkpoint, fine-tuning dataset, and eval pass-rate is version-controlled in your infra. Swap models without re-auditing the platform.",
  },
  {
    icon: FileCheck,
    title: "Compliance alignment",
    body: "Controls aligned with SOC 2 Type II, ISO 27001, and GDPR. Industry-specific postures for pharma (GxP), food (FSMA), and OT (IEC-62443).",
  },
]

const residencyRegions = [
  { region: "US East", status: "GA", note: "AWS us-east-1, us-east-2" },
  { region: "EU Central", status: "GA", note: "AWS eu-central-1, Azure West Europe" },
  { region: "APAC", status: "GA", note: "AWS ap-southeast-2, ap-northeast-1" },
  { region: "On-prem", status: "GA", note: "K8s or bare-metal, air-gap supported" },
  { region: "Middle East", status: "Q3", note: "AWS me-south-1 (planned)" },
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

export default function SecurityPage() {
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
                SECURITY / TRUST
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
              <span className="text-[var(--orange)]">Private</span> by default.
              <br />
              <span className="text-muted-foreground">Auditable by design.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Agentic infrastructure on a plant floor is only useful if it can be trusted end-to-end. We ship
              with SLM-on-your-infra, read-only source connections, immutable audit trails, and a deployment
              model that works even when the internet doesn't.
            </motion.p>
          </div>
        </section>

        {/* ── SLM pillars ── */}
        <section className="py-24 px-4 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-2xl mb-14"
            >
              <SectionLabel index="01">Model posture</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5 leading-[1.05]">
                Why small language
                <br />
                <span className="text-muted-foreground">models, on your infra</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Frontier APIs are fine for demos and wrong for operations: your tag schema, your SOPs, your batch
                records are not someone else's training data. We run small, specialized models on your hardware.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {slmPillars.map((p, i) => {
                const Icon = p.icon
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                    className="bg-background p-8 flex flex-col gap-5 hover:bg-secondary/40 transition-colors duration-500"
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
                      <h3 className="text-lg font-bold tracking-tight text-foreground mb-3">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Controls grid ── */}
        <section className="py-24 px-4 border-b border-border/50 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-2xl mb-14"
            >
              <SectionLabel index="02">Controls</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5 leading-[1.05]">
                Built-in security
                <br />
                <span className="text-muted-foreground">at every layer</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {controls.map((c, i) => {
                const Icon = c.icon
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                    className="rounded-2xl border border-border bg-card p-7 flex flex-col gap-5 hover:border-foreground/40 transition-colors duration-500"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-foreground/5 text-foreground flex items-center justify-center border border-border">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono tabular-nums text-muted-foreground tracking-wider">
                        / 0{i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold tracking-tight text-foreground mb-2">{c.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Data residency table ── */}
        <section className="py-24 px-4 border-b border-border/50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-2xl mb-10"
            >
              <SectionLabel index="03">Data residency</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.05]">
                Where your data lives
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="grid grid-cols-[1.4fr_0.7fr_2fr] gap-4 px-6 py-3 border-b border-border bg-background/50 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                <span>Region</span>
                <span>Status</span>
                <span>Notes</span>
              </div>
              <div className="divide-y divide-border">
                {residencyRegions.map((r, i) => (
                  <motion.div
                    key={r.region}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                    className="grid grid-cols-[1.4fr_0.7fr_2fr] gap-4 px-6 py-4 items-center text-sm"
                  >
                    <span className="font-semibold text-foreground">{r.region}</span>
                    <span>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest ${
                          r.status === "GA" ? "text-foreground" : "text-[var(--orange)]"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            r.status === "GA" ? "bg-foreground" : "bg-[var(--orange)]"
                          }`}
                        />
                        {r.status}
                      </span>
                    </span>
                    <span className="text-muted-foreground font-mono text-xs">{r.note}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Compliance list ── */}
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
                <span>Compliance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-[1.05]">
                Aligned with the frameworks
                <br />
                <span className="text-background/60">your auditors know</span>
              </h2>
            </motion.div>

            <div className="divide-y divide-background/15 border-y border-background/15">
              {[
                {
                  name: "SOC 2 Type II",
                  line: "Security, availability, and confidentiality — aligned controls and evidence packs.",
                },
                {
                  name: "ISO 27001",
                  line: "Information-security management system practices; policies, risk register, and review cadence.",
                },
                {
                  name: "GDPR",
                  line: "Data-subject rights, cross-border transfer posture, and processor/controller agreements.",
                },
                {
                  name: "GxP (pharma)",
                  line: "Electronic records, audit trails, and computer-systems-validation alignment (21 CFR Part 11 posture).",
                },
                {
                  name: "FSMA (food)",
                  line: "Traceability and recall-readiness workflows on top of MES batch records.",
                },
                {
                  name: "IEC 62443 (OT)",
                  line: "Segmentation-aware deployment for control-network zones and conduits.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                  className="flex items-start gap-5 py-5"
                >
                  <span className="text-[11px] font-mono tabular-nums text-background/50 tracking-wider w-8 pt-0.5">
                    0{i + 1}
                  </span>
                  <Plus className="w-3.5 h-3.5 text-[var(--orange)] mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-base font-semibold mb-1">{item.name}</p>
                    <p className="text-sm text-background/70 leading-relaxed">{item.line}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              href="https://calendly.com/yuvraj-s-bhadauria/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 inline-flex items-stretch rounded-full bg-background text-foreground hover:bg-background/90 transition-colors overflow-hidden"
            >
              <span className="inline-flex items-center px-6 text-sm font-semibold">
                Request security docs
              </span>
              <span className="inline-flex items-center justify-center w-11 h-11 my-1.5 mr-1.5 rounded-full bg-[var(--orange)] text-[var(--orange-foreground)]">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </motion.a>
          </div>
        </section>

        <CTABand
          title="Need a security deep-dive?"
          description="Share your controls checklist, regulatory context, and deployment posture. We'll walk through architecture, data flow, and evidence — and line them up against your auditor's expectations."
        />
      </motion.main>
      <Footer />
    </>
  )
}
