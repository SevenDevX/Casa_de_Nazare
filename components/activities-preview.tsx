"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Palette, Scissors, Music, Zap, ArrowRight, Users } from "lucide-react"
import Image from "next/image"

export function ActivitiesPreview() {
  const activities = [
    {
      icon: Palette,
      title: "Pintura em Tecido",
      description: "Desenvolva sua criatividade através da arte, aprendendo técnicas de pintura em tecido.",
      participants: "15 participantes",
      image: "/painting-art-creative-workshop.jpg",
      imageAlt: "Participantes pintando em tecido",
    },
    {
      icon: Scissors,
      title: "Corte e Costura",
      description: "Aprenda habilidades práticas de costura e desenvolva uma nova profissão.",
      participants: "20 participantes",
      image: "/sewing-workshop-crafts.jpg",
      imageAlt: "Aula de corte e costura",
    },
    {
      icon: Music,
      title: "Balé",
      description: "Expressão corporal e artística através da dança clássica para todas as idades.",
      participants: "25 participantes",
      image: "/ballet-studio-mirrors-barre-dance.jpg",
      imageAlt: "Aula de balé em andamento",
    },
    {
      icon: Zap,
      title: "Jiu-Jitsu",
      description: "Arte marcial que desenvolve disciplina, respeito e condicionamento físico.",
      participants: "30 participantes",
      image: "/jiu-jitsu-martial-arts-training.jpg",
      imageAlt: "Treino de jiu-jitsu",
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
              className="group hover:shadow-xl transition-all duration-500 border-border/40 hover:border-primary/20 bg-card/50 overflow-hidden hover:-translate-y-2"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <activity.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <div className="flex items-center space-x-1 text-xs text-white">
                    <Users className="h-3 w-3" />
                    <span>{activity.participants.split(" ")[0]}</span>
                  </div>
                </div>
              </div>

              <CardHeader className="text-center pb-3">
                <CardTitle className="text-lg font-semibold text-foreground">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm text-pretty">{activity.description}</p>
                <div className="text-xs text-muted-foreground">{activity.participants}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="hover:shadow-lg transition-shadow duration-300">
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
