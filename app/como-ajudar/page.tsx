import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, HandHeart, Users, Building, Banknote, Clock, Gift, ArrowRight } from "lucide-react"

export default function ComoAjudarPage() {
  const donationMethods = [
    {
      icon: Banknote,
      title: "Doação em dinheiro",
      description: "Contribua financeiramente para manter nossos serviços funcionando e ajudar mais pessoas.",
      details: [
        "PIX: contato@casadenazare.org.br",
        "Conta corrente: Banco do Brasil",
        "Agência: 1234-5 | Conta: 12345-6",
        "CNPJ: 12.345.678/0001-90",
      ],
    },
    {
      icon: Gift,
      title: "Doação de materiais",
      description: "Doe materiais que utilizamos em nossas atividades e no dia a dia da instituição.",
      details: [
        "Materiais de arte e artesanato",
        "Equipamentos esportivos",
        "Materiais de escritório",
        "Produtos de limpeza e higiene",
      ],
    },
    {
      icon: HandHeart,
      title: "Trabalho voluntário",
      description: "Doe seu tempo e talento para ajudar em nossas atividades e serviços.",
      details: [
        "Apoio em atividades e oficinas",
        "Ajuda administrativa",
        "Manutenção e limpeza",
        "Eventos e campanhas",
      ],
    },
    {
      icon: Building,
      title: "Parcerias empresariais",
      description: "Empresas podem se tornar parceiras através de diferentes modalidades de apoio.",
      details: [
        "Patrocínio de atividades específicas",
        "Doação de produtos ou serviços",
        "Voluntariado corporativo",
        "Responsabilidade social empresarial",
      ],
    },
  ]

  const impactStats = [
    { number: "500+", label: "Pessoas atendidas anualmente" },
    { number: "8", label: "Atividades oferecidas" },
    { number: "24", label: "Anos de atuação" },
    { number: "50+", label: "Voluntários ativos" },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/10" />
          <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Faça a diferença</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Sua ajuda <span className="text-primary">transforma</span> vidas
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Cada contribuição, por menor que seja, faz a diferença na vida de quem mais precisa. Junte-se a nós
                nessa missão de acolhimento e transformação social.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Nosso impacto na comunidade
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Help */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Como você pode ajudar</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Existem várias maneiras de contribuir com nossa missão. Escolha a forma que mais se adequa à sua
                realidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {donationMethods.map((method, index) => (
                <Card key={index} className="border-border/40 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <method.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">{method.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground text-pretty">{method.description}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2">
                      {method.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Seja um voluntário</h2>
                  <p className="text-lg text-muted-foreground mb-6 text-pretty">
                    O voluntariado é uma das formas mais gratificantes de contribuir com nossa missão. Você pode doar
                    algumas horas do seu tempo e fazer a diferença na vida de muitas pessoas.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Flexibilidade de horários</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Trabalho em equipe</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Experiência transformadora</span>
                    </div>
                  </div>

                  <Button size="lg" asChild>
                    <Link href="/contato">
                      Quero ser voluntário
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <HandHeart className="h-20 w-20 text-primary mx-auto mb-4" />
                      <div className="text-2xl font-bold text-foreground mb-2">50+</div>
                      <div className="text-muted-foreground">Voluntários ativos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transparência e prestação de contas
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Acreditamos na importância da transparência. Todas as doações são utilizadas exclusivamente para manter
                nossos serviços e atividades, beneficiando diretamente nossa comunidade.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border-border/40 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">85%</div>
                    <div className="text-sm text-muted-foreground">Destinado diretamente aos serviços</div>
                  </CardContent>
                </Card>
                <Card className="border-border/40 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">10%</div>
                    <div className="text-sm text-muted-foreground">Manutenção e infraestrutura</div>
                  </CardContent>
                </Card>
                <Card className="border-border/40 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">5%</div>
                    <div className="text-sm text-muted-foreground">Administração e gestão</div>
                  </CardContent>
                </Card>
              </div>

              <Button variant="outline" asChild className="bg-transparent">
                <Link href="/contato">Solicitar relatório de atividades</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Pronto para fazer a diferença?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Sua contribuição, seja ela qual for, é fundamental para continuarmos nossa missão de acolhimento e
                transformação social.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contato">
                    Entrar em contato
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <Link href="/sobre">Conhecer nossa história</Link>
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
