import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"

const values = [
  {
    title: "Reliability",
    description:
      "Operations cannot afford downtime or incorrect answers. We build systems that earn trust through consistent, verifiable performance. Every output can be traced back to its sources.",
  },
  {
    title: "Clarity",
    description:
      "Complex systems should produce simple answers. We prioritize explanations over black boxes, context over raw data, and actionable insights over information overload.",
  },
  {
    title: "Adoption",
    description:
      "Technology only creates value when people use it. We design for real workflows, train for actual users, and measure success by adoption, not features shipped.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero - Updated styling */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
              Built for teams running real operations
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We build AI agents that understand industrial operations because we believe the people running plants,
              lines, and supply chains deserve tools that actually work.
            </p>
          </div>
        </section>

        {/* Why this exists - Updated with badge chip */}
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
                    Operations teams have spent decades collecting data. SCADA systems, historians, MES platforms, ERPs,
                    CRMs, and countless spreadsheets capture what happens across plants and supply chains. But when
                    something goes wrong, or when leadership asks for an explanation, teams still spend hours manually
                    correlating across systems.
                  </p>
                  <p>
                    We saw an opportunity to change this. Not by replacing existing systems, but by building a layer on
                    top of them that creates shared context. A layer that AI agents can use to answer questions, explain
                    situations, and take governed actions across operational and business domains.
                  </p>
                  <p>
                    The goal is simple: help operations teams spend less time reconstructing the truth and more time
                    acting on it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Updated card styling */}
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
          description="We would love to hear about your operations and explore how we might help."
        />
      </main>
      <Footer />
    </>
  )
}
