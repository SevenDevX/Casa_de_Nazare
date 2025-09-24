import Link from "next/link"
import { MapPin, Phone, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CN</span>
              </div>
              <span className="font-bold text-xl text-foreground">Casa de Nazaré</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Desde 2000, oferecemos acolhimento e serviços sociais para nossa comunidade, promovendo bem-estar,
              desenvolvimento pessoal e integração social.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-primary" />
              <span>Fundada pela Paróquia Santo Antônio</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/atividades" className="text-muted-foreground hover:text-foreground transition-colors">
                  Atividades
                </Link>
              </li>
              <li>
                <Link href="/como-ajudar" className="text-muted-foreground hover:text-foreground transition-colors">
                  Como Ajudar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Rua das Flores, 123
                  <br />
                  Centro, Cidade - Estado
                  <br />
                  CEP: 12345-678
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">(11) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">contato@casadenazare.org.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2025 Casa de Nazaré. Todos os direitos reservados.</p>
          <p className="text-muted-foreground text-sm mt-2">
            Site desenvolvido pela{" "}
            <a
              href="https://sevendevx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:text-primary/80 transition-colors"
            >
              SevenDevX
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
