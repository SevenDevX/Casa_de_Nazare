import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, ArrowRight, HandHeart, Users } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Faça parte da nossa missão</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Sua ajuda transforma vidas
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Cada contribuição, por menor que seja, faz a diferença na vida de quem mais precisa. Junte-se a nós nessa
            missão de acolhimento e transformação social.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Doações</h3>
              <p className="text-muted-foreground text-sm">
                Contribua financeiramente para manter nossos serviços funcionando
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <HandHeart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Voluntariado</h3>
              <p className="text-muted-foreground text-sm">Doe seu tempo e talento para ajudar em nossas atividades</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Parcerias</h3>
              <p className="text-muted-foreground text-sm">Empresas e organizações podem se tornar nossos parceiros</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/como-ajudar">
                Como ajudar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
              <Link href="/contato">Entre em contato</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
