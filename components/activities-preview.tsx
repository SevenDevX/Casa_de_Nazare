import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Palette, Scissors, Music, Zap, ArrowRight, Users } from "lucide-react"

export function ActivitiesPreview() {
  const activities = [
    {
      icon: Palette,
      title: "Pintura em Tecido",
      description: "Desenvolva sua criatividade através da arte, aprendendo técnicas de pintura em tecido.",
      participants: "15 participantes",
    },
    {
      icon: Scissors,
      title: "Corte e Costura",
      description: "Aprenda habilidades práticas de costura e desenvolva uma nova profissão.",
      participants: "20 participantes",
    },
    {
      icon: Music,
      title: "Balé",
      description: "Expressão corporal e artística através da dança clássica para todas as idades.",
      participants: "25 participantes",
    },
    {
      icon: Zap,
      title: "Jiu-Jitsu",
      description: "Arte marcial que desenvolve disciplina, respeito e condicionamento físico.",
      participants: "30 participantes",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Atividades e Oficinas</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Promovemos o desenvolvimento pessoal e social através de atividades culturais, artísticas e esportivas que
            fortalecem os laços comunitários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/40 hover:border-primary/20 bg-card/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <activity.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm text-pretty">{activity.description}</p>
                <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{activity.participants}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/atividades">
              Ver todas as atividades
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
