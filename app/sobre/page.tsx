"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { PhotoGalleryModal } from "@/components/photo-gallery-modal"
import { Heart, Users, Target, Award, Calendar, MapPin, Camera } from "lucide-react"

export default function SobrePage() {
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null)

  const photoCollections = {
    "Atendimento Psicológico": [
      {
        src: "/psicoterapia-session-therapy-room.jpg",
        alt: "Sala de psicoterapia acolhedora",
        description: "Ambiente preparado para sessões de psicoterapia individual",
      },
      {
        src: "/psychology-therapy-session-room-comfortable.jpg",
        alt: "Sala de terapia em grupo",
        description: "Espaço para terapias em grupo e dinâmicas familiares",
      },
      {
        src: "/psychology-consultation-room-professional.jpg",
        alt: "Consultório de psicologia",
        description: "Consultório equipado para atendimento psicológico especializado",
      },
    ],
    Fonoaudiologia: [
      {
        src: "/placeholder-gdfzy.png",
        alt: "Sessão de fonoaudiologia infantil",
        description: "Atendimento fonoaudiológico especializado para crianças",
      },
      {
        src: "/speech-therapy-equipment-room.jpg",
        alt: "Sala de fonoaudiologia equipada",
        description: "Equipamentos modernos para diagnóstico e tratamento",
      },
      {
        src: "/speech-therapy-adult-session.jpg",
        alt: "Terapia da fala para adultos",
        description: "Reabilitação da comunicação para todas as idades",
      },
    ],
    "Aulas de Balé": [
      {
        src: "/placeholder-iykn1.png",
        alt: "Aula de balé infantil",
        description: "Crianças aprendendo os primeiros passos do balé clássico",
      },
      {
        src: "/ballet-studio-mirrors-barre-dance.jpg",
        alt: "Estúdio de dança",
        description: "Sala equipada com barras e espelhos para as aulas de balé",
      },
      {
        src: "/placeholder-nzeew.png",
        alt: "Apresentação de balé",
        description: "Apresentação dos alunos em evento da Casa de Nazaré",
      },
    ],
    "Jiu-Jitsu": [
      {
        src: "/jiu-jitsu-martial-arts-training.jpg",
        alt: "Treino de jiu-jitsu",
        description: "Aulas de jiu-jitsu para desenvolvimento da disciplina",
      },
      {
        src: "/placeholder-kobmp.png",
        alt: "Jiu-jitsu infantil",
        description: "Crianças aprendendo técnicas básicas de jiu-jitsu",
      },
      {
        src: "/martial-arts-dojo-training-space.jpg",
        alt: "Dojo de artes marciais",
        description: "Espaço dedicado às práticas de artes marciais",
      },
    ],
    "Yoga e Bem-estar": [
      {
        src: "/yoga-meditation-wellness.jpg",
        alt: "Aula de yoga",
        description: "Práticas de yoga para equilíbrio mental e físico",
      },
      {
        src: "/meditation-group-wellness-session.jpg",
        alt: "Sessão de meditação em grupo",
        description: "Momentos de meditação e relaxamento coletivo",
      },
      {
        src: "/yoga-studio-peaceful-environment.jpg",
        alt: "Estúdio de yoga",
        description: "Ambiente tranquilo para práticas de bem-estar",
      },
    ],
    "Oficinas de Arte": [
      {
        src: "/art-workshop-painting-fabric.jpg",
        alt: "Oficina de pintura em tecido",
        description: "Participantes criando arte em tecido",
      },
      {
        src: "/sewing-workshop-community.jpg",
        alt: "Oficina de corte e costura",
        description: "Aprendendo técnicas de costura e confecção",
      },
      {
        src: "/art-supplies-creative-workshop.jpg",
        alt: "Materiais de arte",
        description: "Variedade de materiais disponíveis para as oficinas",
      },
    ],
    "Nossa Equipe": [
      {
        src: "/community-volunteers-team-work.jpg",
        alt: "Equipe de voluntários",
        description: "Profissionais e voluntários dedicados da Casa de Nazaré",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Reunião da equipe",
        description: "Planejamento e organização das atividades",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Voluntários em ação",
        description: "Equipe trabalhando em prol da comunidade",
      },
    ],
    "Eventos Comunitários": [
      {
        src: "/community-event-celebration-gathering.jpg",
        alt: "Evento comunitário",
        description: "Celebração e integração da comunidade",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Festival comunitário",
        description: "Festa anual da Casa de Nazaré com a comunidade",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Encontro social",
        description: "Momentos de confraternização e união",
      },
    ],
  }

  const timeline = [
    {
      year: "2000",
      title: "Fundação",
      description: "A Casa de Nazaré é fundada pela Paróquia Santo Antônio com o objetivo de servir à comunidade.",
    },
    {
      year: "2005",
      title: "Expansão dos Serviços",
      description: "Início dos atendimentos de psicoterapia e fonoaudiologia para a comunidade local.",
    },
    {
      year: "2010",
      title: "Atividades Culturais",
      description: "Implementação das primeiras oficinas de arte e atividades culturais para todas as idades.",
    },
    {
      year: "2015",
      title: "Crescimento",
      description: "Ampliação do espaço físico e inclusão de novas atividades como balé e jiu-jitsu.",
    },
    {
      year: "2020",
      title: "Adaptação Digital",
      description: "Adaptação dos serviços durante a pandemia, mantendo o atendimento à comunidade.",
    },
    {
      year: "2024",
      title: "Presente",
      description: "Mais de 500 pessoas atendidas e 8 atividades diferentes oferecidas à comunidade.",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Acolhimento",
      description:
        "Recebemos cada pessoa com carinho, respeito e dignidade, criando um ambiente seguro e acolhedor para todos que nos procuram.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description:
        "Fortalecemos os laços comunitários através de atividades que promovem integração, pertencimento e solidariedade.",
    },
    {
      icon: Target,
      title: "Desenvolvimento",
      description:
        "Oferecemos oportunidades de crescimento pessoal e profissional, respeitando as particularidades de cada indivíduo.",
    },
    {
      icon: Award,
      title: "Excelência",
      description:
        "Mantemos altos padrões de qualidade em todos os nossos serviços, com profissionais qualificados e dedicados.",
    },
  ]

  const galleryImages = [
    {
      src: "/psicoterapia-session-therapy-room.jpg",
      alt: "Sala de psicoterapia da Casa de Nazaré",
      title: "Atendimento Psicológico",
      description: "Espaço acolhedor para sessões de psicoterapia",
    },
    {
      src: "/placeholder-g7nog.png",
      alt: "Sessão de fonoaudiologia com criança",
      title: "Fonoaudiologia",
      description: "Atendimento especializado em comunicação",
    },
    {
      src: "/placeholder-zu3nq.png",
      alt: "Aula de balé para crianças",
      title: "Aulas de Balé",
      description: "Desenvolvimento artístico e corporal",
    },
    {
      src: "/jiu-jitsu-martial-arts-training.jpg",
      alt: "Treino de jiu-jitsu",
      title: "Jiu-Jitsu",
      description: "Disciplina e desenvolvimento físico",
    },
    {
      src: "/yoga-meditation-wellness.jpg",
      alt: "Aula de yoga",
      title: "Yoga e Bem-estar",
      description: "Equilíbrio mental e físico",
    },
    {
      src: "/placeholder-ow07g.png",
      alt: "Oficina de pintura em tecido",
      title: "Oficinas de Arte",
      description: "Expressão criativa e terapêutica",
    },
    {
      src: "/community-volunteers-team-work.jpg",
      alt: "Equipe de voluntários da Casa de Nazaré",
      title: "Nossa Equipe",
      description: "Profissionais e voluntários dedicados",
    },
    {
      src: "/community-event-celebration-gathering.jpg",
      alt: "Evento comunitário",
      title: "Eventos Comunitários",
      description: "Celebrações e integração social",
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
                Nossa História de <span className="text-primary">Acolhimento</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Há mais de duas décadas transformando vidas através do cuidado, do amor e da dedicação à nossa
                comunidade.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nossa Missão</h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  A Casa de Nazaré tem como missão proporcionar um espaço de acolhimento, crescimento e desenvolvimento
                  humano, oferecendo serviços profissionais de qualidade e atividades que promovam o bem-estar físico,
                  mental e social de nossa comunidade.
                </p>
                <p className="text-lg text-muted-foreground text-pretty">
                  Acreditamos que cada pessoa tem potencial único e merece ser tratada com dignidade, respeito e amor.
                  Por isso, trabalhamos incansavelmente para criar um ambiente onde todos se sintam acolhidos e
                  valorizados.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-primary mb-4">500+</div>
                    <div className="text-xl text-foreground font-medium">Vidas transformadas</div>
                    <div className="text-muted-foreground">ao longo dos anos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <Camera className="inline-block h-8 w-8 mr-3 text-primary" />
                Nossa Casa em Imagens
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Conheça nossos espaços, atividades e a dedicação de nossa equipe através destas imagens que retratam o
                dia a dia da Casa de Nazaré. Clique em cada categoria para ver mais fotos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <Card
                  key={index}
                  className="border-0 bg-card/50 hover:bg-card transition-all duration-300 hover:scale-105 group overflow-hidden cursor-pointer"
                  onClick={() => setSelectedGallery(image.title)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{image.title}</h3>
                    <p className="text-muted-foreground text-xs text-pretty">{image.description}</p>
                    <p className="text-primary text-xs mt-2 font-medium">Clique para ver mais fotos</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground text-sm">
                Estas imagens representam apenas uma pequena parte do trabalho realizado diariamente em nossa
                instituição.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nossos Valores</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Os princípios que guiam nosso trabalho e definem nossa identidade como organização social.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 bg-card/50 hover:bg-card transition-colors duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 text-xl">{value.title}</h3>
                        <p className="text-muted-foreground text-pretty">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nossa Jornada</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Acompanhe os principais marcos da nossa história de dedicação e crescimento.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-bold text-primary">{item.year}</span>
                        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-pretty">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Onde Estamos</h2>
                  <p className="text-lg text-muted-foreground mb-6 text-pretty">
                    Localizada no coração da comunidade, nossa sede é um espaço acolhedor e acessível, preparado para
                    receber todas as pessoas que buscam nossos serviços.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium">Endereço</p>
                        <p className="text-muted-foreground">
                          Rua das Flores, 123 - Centro
                          <br />
                          Cidade - Estado, CEP: 12345-678
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-medium">Mapa interativo em breve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedGallery && (
        <PhotoGalleryModal
          isOpen={!!selectedGallery}
          onClose={() => setSelectedGallery(null)}
          title={selectedGallery}
          photos={photoCollections[selectedGallery as keyof typeof photoCollections] || []}
        />
      )}

      <Footer />
    </div>
  )
}
