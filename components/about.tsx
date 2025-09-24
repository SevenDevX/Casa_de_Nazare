import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, Award } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Recebemos cada pessoa com carinho, respeito e dignidade, criando um ambiente seguro e acolhedor.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Fortalecemos os laços comunitários através de atividades que promovem integração e pertencimento.",
    },
    {
      icon: Target,
      title: "Desenvolvimento",
      description: "Oferecemos oportunidades de crescimento pessoal e profissional para todos os participantes.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Mantemos altos padrões de qualidade em todos os nossos serviços e atividades oferecidas.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Nossa História e Missão</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Fundada em 2000 pela Paróquia Santo Antônio, a Casa de Nazaré nasceu do desejo de servir à comunidade com
            amor e dedicação. Ao longo de mais de duas décadas, temos sido um refúgio de esperança e transformação para
            centenas de famílias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 bg-card/50 hover:bg-card transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Transformando vidas, construindo futuro
              </h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                Nossa missão é proporcionar um espaço de acolhimento, crescimento e desenvolvimento humano, oferecendo
                serviços profissionais de qualidade e atividades que promovam o bem-estar físico, mental e social de
                nossa comunidade.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">Atendimento psicológico especializado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">Atividades culturais e esportivas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">Apoio social e comunitário</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24</div>
                  <div className="text-lg text-foreground font-medium">Anos</div>
                  <div className="text-muted-foreground">de dedicação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
