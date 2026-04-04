import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"

const values = [
  {
    title: "Data quality first",
    description:
      "Analytics built on dirty data give wrong answers. Confidently. We believe the data engineering layer is non-negotiable, and we build it before putting any agent in front of an operator.",
  },
  {
    title: "Transparency over black boxes",
    description:
      "Every insight the platform surfaces is traceable back to the sensor readings and records it came from. No unexplained outputs. No magic. Operators need to trust what they act on.",
  },
  {
    title: "Works with what you have",
    description:
      "You've spent years building your data infrastructure. We don't ask you to replace it. We connect to it, clean what comes out, and add the context layer that makes it useful for AI.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground mb-6">
              About ContextWeaver
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
              Built for teams who need answers, not more dashboards
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Manufacturing plants generate enormous amounts of data. Most of it is too messy to be useful.
              We built ContextWeaver to fix the data problem first, and then put powerful analytics on top of it.
            </p>
          </div>
        </section>

        {/* Why this exists */}
        <section className="py-24 px-4 bg-secondary/50">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
              <div className="lg:w-48 flex-shrink-0">
                <span className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground">
                  Our story
                </span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
                  Why we built this
                </h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Talking to manufacturing engineers, we kept hearing the same frustration: every analytics tool
                    they tried failed in production. Not because the tools were bad. The data going in was.
                    Missing sensor readings. Duplicate timestamps. Tags with no context. Historian values that were
                    technically recorded but practically useless.
                  </p>
                  <p>
                    Root cause analysis, OEE monitoring, predictive maintenance: all of these tools assume you
                    already have clean, structured, contextual data. In most manufacturing plants, you don't.
                    Building that data infrastructure manually takes months of engineering time per system,
                    and it breaks every time the plant changes.
                  </p>
                  <p>
                    We built ContextWeaver to solve this at the foundation. Data Engineering Agents that
                    automatically handle ingestion, cleaning, normalization, and context enrichment across your
                    industrial data sources, so the analytics layer above it can actually be trusted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-14 text-center">
              What we believe
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="bg-card border-border rounded-3xl">
                  <CardContent className="pt-8 pb-8 px-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABand
          title="Want to learn more?"
          description="Tell us about your plant's data challenges and we'll show you how Data Engineering Agents can fix the foundation."
        />
      </main>
      <Footer />
    </>
  )
}
