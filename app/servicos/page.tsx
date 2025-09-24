import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, MessageCircle, BookOpen, Clock, Users, CheckCircle } from "lucide-react"

export default function ServicosPage() {
  const services = [
    {
      icon: Brain,
      title: "Psicoterapia",
      description:
        "Atendimento psicológico individual e em grupo para todas as idades, promovendo saúde mental e bem-estar emocional.",
      details: [
        "Atendimento individual para crianças, adolescentes e adultos",
        "Terapia em grupo para questões específicas",
        "Acompanhamento psicológico familiar",
        "Orientação para pais e cuidadores",
      ],
      schedule: "Segunda a sexta, 8h às 17h",
      capacity: "Até 50 atendimentos por semana",
      href: "/servicos/psicoterapia",
    },
    {
      icon: MessageCircle,
      title: "Fonoaudiologia",
      description: "Tratamento especializado para distúrbios da comunicação, linguagem, fala, voz e audição.",
      details: [
        "Avaliação e tratamento de distúrbios da fala",
        "Terapia para dificuldades de linguagem",
        "Reabilitação vocal",
        "Estimulação precoce da comunicação",
      ],
      schedule: "Segunda a quinta, 8h às 16h",
      capacity: "Até 30 atendimentos por semana",
      href: "/servicos/fonoaudiologia",
    },
    {
      icon: BookOpen,
      title: "Psicopedagogia",
      description: "Apoio especializado para dificuldades de aprendizagem, auxiliando no desenvolvimento educacional.",
      details: [
        "Avaliação psicopedagógica completa",
        "Intervenção em dificuldades de aprendizagem",
        "Orientação escolar e familiar",
        "Desenvolvimento de estratégias de estudo",
      ],
      schedule: "Terça e quinta, 14h às 18h",
      capacity: "Até 20 atendimentos por semana",
      href: "/servicos/psicopedagogia",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Nossos <span className="text-primary">Serviços</span> Profissionais
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Oferecemos atendimento especializado com profissionais qualificados, proporcionando cuidado integral
                para o desenvolvimento e bem-estar de nossa comunidade.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden border-border/40">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <CardHeader className="p-8 lg:p-12">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                          {service.title}
                        </CardTitle>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6 text-pretty">{service.description}</p>
                      <Button asChild>
                        <Link href={service.href}>Saiba mais detalhes</Link>
                      </Button>
                    </CardHeader>

                    <CardContent className="p-8 lg:p-12 bg-muted/30">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2" />O que oferecemos
                          </h4>
                          <ul className="space-y-2">
                            {service.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-muted-foreground flex items-start">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-foreground mb-2 flex items-center">
                              <Clock className="h-4 w-4 text-primary mr-2" />
                              Horários
                            </h5>
                            <p className="text-sm text-muted-foreground">{service.schedule}</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-foreground mb-2 flex items-center">
                              <Users className="h-4 w-4 text-primary mr-2" />
                              Capacidade
                            </h5>
                            <p className="text-sm text-muted-foreground">{service.capacity}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Precisa de nossos serviços?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Entre em contato conosco para agendar uma consulta ou obter mais informações sobre nossos atendimentos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contato">Agendar consulta</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <Link href="/sobre">Conheça nossa equipe</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
