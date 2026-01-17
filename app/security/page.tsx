import Link from "next/link"
import { ArrowUpRight, Shield, Lock, Eye, Users, Server, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABand } from "@/components/cta-band"

const securityFeatures = [
  {
    icon: Users,
    title: "Access control (RBAC, SSO)",
    description:
      "Role-based access control determines who can see what data and take what actions. Integrate with your existing identity provider for single sign-on and centralized user management.",
  },
  {
    icon: Lock,
    title: "Data handling (encryption, retention)",
    description:
      "Data is encrypted in transit and at rest. Retention policies are configurable per data type. Sensitive data can be masked or excluded from agent access based on your requirements.",
  },
  {
    icon: Eye,
    title: "Audit logs",
    description:
      "Every query, every data access, every action is logged. See who asked what, what data was used, and what was generated. Audit trails are immutable and exportable for compliance.",
  },
  {
    icon: Shield,
    title: "Human-in-the-loop approvals",
    description:
      "Sensitive or high-impact actions require human approval before execution. Approvers see full context including the data and reasoning behind the proposed action.",
  },
  {
    icon: Server,
    title: "Deployment options",
    description:
      "Deploy in the cloud for fastest setup, on-premises for maximum control, or hybrid to meet specific data residency requirements. Your choice, your infrastructure.",
  },
  {
    icon: FileCheck,
    title: "Compliance readiness",
    description:
      "The platform is designed to support SOC 2, ISO 27001, and industry-specific compliance requirements. Security controls are documented and auditable.",
  },
]

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
              Trust, control, auditability
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Security is not optional when AI touches operational systems. The platform is built from the ground up
              with governance, control, and transparency at its core.
            </p>
            <Button size="lg" asChild className="rounded-full px-8 gap-2">
              <a href="https://calendly.com/yuvraj-s-bhadauria/30min" target="_blank" rel="noopener noreferrer">
                Discuss security requirements
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-24 px-4 bg-secondary/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature) => (
                <Card key={feature.title} className="bg-card border-border rounded-3xl">
                  <CardHeader className="pb-3">
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                      <feature.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Compliance-ready practices
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              The platform implements security controls and practices designed to support common compliance frameworks.
              While we do not claim specific certifications, our architecture and processes are aligned with:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-secondary/50 border border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">SOC 2 Type II readiness</p>
                  <p className="text-sm text-muted-foreground">
                    Controls for security, availability, and confidentiality.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-secondary/50 border border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">ISO 27001 alignment</p>
                  <p className="text-sm text-muted-foreground">Information security management system practices.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-secondary/50 border border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Industry-specific considerations</p>
                  <p className="text-sm text-muted-foreground">
                    Configurable controls for regulated industries including pharma, food & beverage, and critical
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABand
          title="Need to review security details?"
          description="We can provide security documentation, architecture reviews, and answer specific questions about your requirements."
        />
      </main>
      <Footer />
    </>
  )
}
