"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Heart, ArrowRight, HandHeart, Users, Quote } from "lucide-react"
import Image from "next/image"

export function CallToAction() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe de participante",
      content:
        "A Casa de Nazaré transformou a vida da minha filha. Aqui ela encontrou apoio, carinho e oportunidades de crescer.",
      image: "/community-volunteers-team-work.jpg",
    },
    {
      name: "João Santos",
      role: "Voluntário há 5 anos",
      content:
        "Ser voluntário aqui me ensinou o verdadeiro significado de servir ao próximo. É uma experiência transformadora.",
      image: "/community-event-celebration-gathering.jpg",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/community-volunteers-team-work.jpg"
          alt="Voluntários em ação"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart className="h-4 w-4 text-white" />
              <span className="text-sm font-medium">Faça parte da nossa missão</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Sua ajuda transforma vidas</h2>

          <p className="text-xl mb-12 max-w-2xl mx-auto text-pretty opacity-90">
            Cada contribuição, por menor que seja, faz a diferença na vida de quem mais precisa. Junte-se a nós nessa
            missão de acolhimento e transformação social.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-white/60 mb-4" />
                  <p className="text-sm mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-medium">{testimonial.name[0]}</span>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs opacity-80">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Doações</h3>
              <p className="text-sm opacity-90">Contribua financeiramente para manter nossos serviços funcionando</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                  <HandHeart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Voluntariado</h3>
              <p className="text-sm opacity-90">Doe seu tempo e talento para ajudar em nossas atividades</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Parcerias</h3>
              <p className="text-sm opacity-90">Empresas e organizações podem se tornar nossos parceiros</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 hover:shadow-lg transition-all duration-300"
            >
              <Link href="/como-ajudar">
                Como ajudar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 bg-transparent border-white/30 text-white hover:bg-white/10"
            >
              <Link href="/contato">Entre em contato</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
