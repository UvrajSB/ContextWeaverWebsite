"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Layers,
  Lock,
  GraduationCap,
  Users,
  BrainCircuit,
  Workflow,
  MapPin,
  Plus,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"

const EASE = [0.22, 1, 0.36, 1] as const

const principles = [
  {
    icon: Layers,
    title: "The semantic layer is the moat",
    body: "Frontier models are commodities. Your plant's vocabulary, tag ontology, and SOP corpus are not. We invest in the layer no one can copy — the one that describes how your operation actually works.",
  },
  {
    icon: Lock,
    title: "Your data never leaves your infra",
    body: "Small language models, fine-tuned on your data, served on your hardware. No egress, no per-token bill, no vendor dependency on someone else's roadmap.",
  },
  {
    icon: GraduationCap,
    title: "Enablement beats dependency",
    body: "We deliberately work ourselves out of a job on the first wave. The engineers, GMs, and CDOs we work with leave the engagement shipping agents without us.",
  },
  {
    icon: Workflow,
    title: "Brown-field is the default",
    body: "You already spent a decade building the stack. We build on top of it, not around it. No rip-and-replace, no forced migration, no re-architecture projects.",
  },
  {
    icon: BrainCircuit,
    title: "Transparency over magic",
    body: "Every inference the platform makes is traceable to the sensor reading, batch record, or ERP line item it came from. Operators should never have to trust unexplained output.",
  },
  {
    icon: Users,
    title: "Leaders, not just engineers",
    body: "Agentic systems fail when they're an IT side-project. The people we train are the people who run the plant — GMs, ops directors, CDOs — because they're the ones who know which agents should exist.",
  },
]

const timeline = [
  {
    year: "2023",
    label: "Observation",
    body: "Time spent on plant floors listening to engineers describe the same problem: every analytics tool assumes clean data, and almost no plant has it.",
  },
  {
    year: "2024",
    label: "Prototype",
    body: "First semantic layer built for a process plant. Cross-stack RCA agent shipped before shift end became the template for everything after.",
  },
  {
    year: "2025",
    label: "Catalog",
    body: "Agent catalog expanded to cover all three stack layers. Small-language-model fine-tuning replaced frontier APIs for plant workloads.",
  },
  {
    year: "2026",
    label: "Enablement-first",
    body: "Every engagement now ships with a training curriculum. The second wave of agents at each client comes from their own team.",
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

export default function AboutPage() {
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
                ABOUT / CONTEXTWEAVER
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
              <span className="text-[var(--orange)]">We don't</span> replace
              <br />
              <span className="text-muted-foreground">your stack.</span>
              <br />
              <span className="text-muted-foreground">We put layers over it.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              ContextWeaver is an agentic-infrastructure company for manufacturing. We build the semantic and
              agent-application layers that sit over your SCADA, MES, and ERP systems, train your team to
              extend them, and then we leave.
            </motion.p>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="py-24 px-4 border-b border-border/50">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <SectionLabel index="01">Origin</SectionLabel>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
                  Why this company exists
                </h2>
                <div className="space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Every conversation on a plant floor eventually comes back to the same two sentences:
                    "We already have all the data." And: "We still can't trust what it says."
                  </p>
                  <p>
                    The problem was never the data. It was the{" "}
                    <strong className="text-foreground">absence of a layer between the data and the people</strong>{" "}
                    that turns raw signal into context the organization can act on. That layer has always been
                    built by hand, once per question, and thrown away when the question changed.
                  </p>
                  <p>
                    ContextWeaver makes that layer a first-class piece of infrastructure. A semantic layer your
                    company owns, agent applications that read from it, and a cross-stack layer that lets any
                    one of them reason end-to-end. Private models on your hardware, and a training path so your
                    team extends the work after we're gone.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Principles ── */}
        <section className="py-24 px-4 border-b border-border/50 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-2xl mb-14"
            >
              <SectionLabel index="02">Principles</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5 leading-[1.05]">
                What we believe —
                <br />
                <span className="text-muted-foreground">and what we won't compromise on</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {principles.map((p, i) => {
                const Icon = p.icon
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                    className="bg-background p-7 lg:p-9 flex flex-col gap-5 hover:bg-secondary/40 transition-colors duration-500"
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

        {/* ── Timeline ── */}
        <section className="py-24 px-4 border-b border-border/50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mb-14"
            >
              <SectionLabel index="03">Trajectory</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.05]">
                How we got here
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[14px] top-2 bottom-2 w-px bg-border" />
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                  className="relative pl-12 pb-12 last:pb-0"
                >
                  <span className="absolute left-[8px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--orange)] ring-4 ring-background" />
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-[11px] font-mono tabular-nums text-muted-foreground tracking-widest">
                      / {t.year}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                      {t.label}
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">{t.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who we work with ── */}
        <section className="py-24 px-4 border-b border-border/50 bg-foreground text-background">
          <div className="max-w-6xl mx-auto">
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
                <span>Engagement</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-[1.05]">
                Who we build with
              </h2>
              <p className="text-base text-background/70 leading-relaxed">
                Not every manufacturing org is ready for agentic infrastructure. The ones who are tend to share a
                few traits.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Stack-literate operators",
                  body: "A plant team that already knows which data lives in which system, and is frustrated that the systems don't talk.",
                },
                {
                  title: "A mandate from the top",
                  body: "GMs, CDOs, or ops directors who own the outcome — not a standalone IT project with no operations sponsor.",
                },
                {
                  title: "Appetite for ownership",
                  body: "Teams who want to extend the platform themselves, not teams looking for a permanent vendor dependency.",
                },
              ].map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                  className="rounded-2xl border border-background/15 bg-background/5 p-7 flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between">
                    <Plus className="w-4 h-4 text-background/60" />
                    <span className="text-[10px] font-mono tabular-nums text-background/50 tracking-wider">
                      / 0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold tracking-tight mb-2">{c.title}</h3>
                    <p className="text-sm text-background/70 leading-relaxed">{c.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="mt-12 flex flex-col sm:flex-row items-start gap-3"
            >
              <a
                href="https://calendly.com/yuvraj-s-bhadauria/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-stretch rounded-full bg-background text-foreground hover:bg-background/90 transition-colors overflow-hidden"
              >
                <span className="inline-flex items-center px-6 text-sm font-semibold">
                  Schedule an intro
                </span>
                <span className="inline-flex items-center justify-center w-11 h-11 my-1.5 mr-1.5 rounded-full bg-[var(--orange)] text-[var(--orange-foreground)] transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
              <Link
                href="/use-cases"
                className="group inline-flex items-stretch rounded-full border border-background/20 bg-transparent hover:border-background/40 transition-colors overflow-hidden"
              >
                <span className="inline-flex items-center px-6 py-3 text-sm font-semibold text-background">
                  See use cases
                </span>
                <span className="inline-flex items-center justify-center w-11 h-11 my-1 mr-1 rounded-full bg-[var(--orange)] text-[var(--orange-foreground)] transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        <CTABand
          title="Want to see if we're a fit?"
          description="Tell us the shape of your stack and the outcomes that matter most. We'll sketch a first-layer plan and an enablement roadmap for your team."
        />
      </motion.main>
      <Footer />
    </>
  )
}
