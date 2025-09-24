import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, MessageCircle, BookOpen, ArrowRight } from "lucide-react"

export function ServicesPreview() {
  const services = [
    {
      icon: Brain,
      title: "Psicoterapia",
      description:
        "Atendimento psicológico individual e em grupo para todas as idades, promovendo saúde mental e bem-estar emocional.",
      href: "/servicos/psicoterapia",
    },
    {
      icon: MessageCircle,
      title: "Fonoaudiologia",
      description: "Tratamento especializado para distúrbios da comunicação, linguagem, fala, voz e audição.",
      href: "/servicos/fonoaudiologia",
    },
    {
      icon: BookOpen,
      title: "Psicopedagogia",
      description: "Apoio especializado para dificuldades de aprendizagem, auxiliando no desenvolvimento educacional.",
      href: "/servicos/psicopedagogia",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Nossos Serviços Profissionais
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Oferecemos atendimento especializado com profissionais qualificados, proporcionando cuidado integral para o
            desenvolvimento e bem-estar de nossa comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/40 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>
                <Button
                  variant="outline"
                  asChild
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                >
                  <Link href={service.href}>
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/servicos">
              Ver todos os serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
