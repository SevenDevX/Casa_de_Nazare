import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/10" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Acolhimento desde 2000</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Transformando vidas através do <span className="text-primary">acolhimento</span> e{" "}
            <span className="text-primary">cuidado</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            A Casa de Nazaré oferece serviços profissionais de saúde mental, atividades culturais e apoio social para
            fortalecer nossa comunidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/servicos">
                Conheça nossos serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
              <Link href="/como-ajudar">Como ajudar</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">500+</div>
              <div className="text-muted-foreground">Pessoas atendidas</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">24</div>
              <div className="text-muted-foreground">Anos de dedicação</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">8</div>
              <div className="text-muted-foreground">Atividades oferecidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
