import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Palette, Scissors, Music, Zap, Users2, Sparkles, Clock, MapPin } from "lucide-react"

export default function AtividadesPage() {
  const activities = [
    {
      icon: Users2,
      title: "Grupo de Convivência",
      description:
        "Espaço de socialização e troca de experiências para pessoas da terceira idade, promovendo bem-estar e qualidade de vida.",
      details: [
        "Atividades de socialização e integração",
        "Jogos e dinâmicas em grupo",
        "Palestras sobre saúde e bem-estar",
        "Comemorações e eventos especiais",
      ],
      schedule: "Quartas e sextas, 14h às 16h",
      participants: "25 participantes ativos",
      ageGroup: "A partir de 60 anos",
    },
    {
      icon: Palette,
      title: "Pintura em Tecido",
      description:
        "Desenvolva sua criatividade através da arte, aprendendo técnicas de pintura em tecido e criando peças únicas.",
      details: [
        "Técnicas básicas e avançadas de pintura",
        "Trabalho com diferentes tipos de tecido",
        "Criação de peças decorativas e utilitárias",
        "Exposições dos trabalhos realizados",
      ],
      schedule: "Terças e quintas, 9h às 11h",
      participants: "15 participantes",
      ageGroup: "A partir de 16 anos",
    },
    {
      icon: Scissors,
      title: "Corte e Costura",
      description:
        "Aprenda habilidades práticas de costura, desde o básico até técnicas avançadas, desenvolvendo uma nova profissão.",
      details: [
        "Técnicas básicas de costura à mão e máquina",
        "Modelagem e corte de roupas",
        "Consertos e ajustes",
        "Criação de peças completas",
      ],
      schedule: "Segundas e quartas, 14h às 17h",
      participants: "20 participantes",
      ageGroup: "A partir de 18 anos",
    },
    {
      icon: Music,
      title: "Balé",
      description:
        "Expressão corporal e artística através da dança clássica, desenvolvendo coordenação, disciplina e autoestima.",
      details: [
        "Técnicas básicas do balé clássico",
        "Desenvolvimento da coordenação motora",
        "Expressão corporal e artística",
        "Apresentações e espetáculos",
      ],
      schedule: "Terças e quintas, 16h às 17h30",
      participants: "25 participantes",
      ageGroup: "4 a 16 anos",
    },
    {
      icon: Zap,
      title: "Jiu-Jitsu",
      description:
        "Arte marcial que desenvolve disciplina, respeito, condicionamento físico e autodefesa em um ambiente seguro.",
      details: [
        "Técnicas fundamentais do jiu-jitsu",
        "Desenvolvimento da disciplina e respeito",
        "Condicionamento físico e flexibilidade",
        "Participação em campeonatos locais",
      ],
      schedule: "Segundas, quartas e sextas, 18h às 19h30",
      participants: "30 participantes",
      ageGroup: "6 a 45 anos",
    },
    {
      icon: Sparkles,
      title: "Yoga",
      description:
        "Prática milenar que promove equilíbrio entre corpo e mente, reduzindo o estresse e melhorando a qualidade de vida.",
      details: [
        "Posturas (asanas) básicas e intermediárias",
        "Técnicas de respiração (pranayama)",
        "Meditação e relaxamento",
        "Filosofia e princípios do yoga",
      ],
      schedule: "Terças e quintas, 7h às 8h",
      participants: "18 participantes",
      ageGroup: "A partir de 16 anos",
    },
    {
      icon: Palette,
      title: "Desenho",
      description:
        "Desenvolva suas habilidades artísticas através do desenho, explorando diferentes técnicas e materiais.",
      details: [
        "Técnicas básicas de desenho a lápis",
        "Desenho com carvão e pastel",
        "Estudo de proporções e perspectiva",
        "Criação de portfólio artístico",
      ],
      schedule: "Sábados, 9h às 11h",
      participants: "12 participantes",
      ageGroup: "A partir de 12 anos",
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
                <span className="text-primary">Atividades</span> e Oficinas
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Promovemos o desenvolvimento pessoal e social através de atividades culturais, artísticas e esportivas
                que fortalecem os laços comunitários e descobrem novos talentos.
              </p>
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border/40 hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <activity.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">{activity.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground text-pretty">{activity.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">O que você vai aprender</h4>
                      <ul className="space-y-2">
                        {activity.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 pt-4 border-t border-border/40">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{activity.schedule}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Users2 className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{activity.participants}</span>
                        </div>
                        <div className="text-muted-foreground">{activity.ageGroup}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Como participar das atividades
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Entre em contato</h4>
                        <p className="text-muted-foreground text-sm">
                          Ligue ou visite nossa sede para obter informações sobre vagas disponíveis.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Faça sua inscrição</h4>
                        <p className="text-muted-foreground text-sm">
                          Preencha a ficha de inscrição e apresente os documentos necessários.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Comece a participar</h4>
                        <p className="text-muted-foreground text-sm">
                          Compareça no horário marcado e faça parte da nossa comunidade.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-8 border border-border/40">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    Informações importantes
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>• Todas as atividades são gratuitas</li>
                    <li>• Vagas limitadas por atividade</li>
                    <li>• Inscrições abertas durante todo o ano</li>
                    <li>• Materiais básicos fornecidos pela Casa de Nazaré</li>
                    <li>• Certificado de participação ao final do curso</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Pronto para começar?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Entre em contato conosco para se inscrever em uma de nossas atividades e fazer parte da nossa
                comunidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contato">Fazer inscrição</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <Link href="/sobre">Conheça nossa sede</Link>
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
