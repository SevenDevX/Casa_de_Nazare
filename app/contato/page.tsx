"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create WhatsApp message
    const whatsappMessage = `Olá! Meu nome é ${formData.nome}.

*Assunto:* ${formData.assunto}

*Mensagem:* ${formData.mensagem}

*Contatos:*
- Email: ${formData.email}
- Telefone: ${formData.telefone || "Não informado"}

Enviado através do site da Casa de Nazaré.`

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappNumber = "5511123456789" // Replace with actual WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Simulate brief loading
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Open WhatsApp
    window.open(whatsappURL, "_blank")

    // Reset form
    setFormData({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
                Entre em <span className="text-primary">Contato</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Estamos aqui para ajudar. Entre em contato conosco para agendar consultas, se inscrever em atividades ou
                esclarecer dúvidas sobre nossos serviços.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Envie sua mensagem</CardTitle>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e você será redirecionado para o WhatsApp para finalizar o contato.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome completo *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleChange}
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="assunto">Assunto *</Label>
                      <Input
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        required
                        placeholder="Sobre o que você gostaria de falar?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                        placeholder="Escreva sua mensagem aqui..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        "Redirecionando..."
                      ) : (
                        <>
                          Enviar via WhatsApp
                          <MessageCircle className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      Nossa localização
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-foreground font-medium">Casa de Nazaré</p>
                      <p className="text-muted-foreground">
                        Rua das Flores, 123
                        <br />
                        Centro - Cidade, Estado
                        <br />
                        CEP: 12345-678
                      </p>
                    </div>
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                        <p className="text-foreground font-medium">Mapa interativo</p>
                        <p className="text-muted-foreground text-sm">Em breve</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">Outras formas de contato</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">WhatsApp</p>
                        <p className="text-muted-foreground">(11) 99999-9999</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Telefone</p>
                        <p className="text-muted-foreground">(11) 1234-5678</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">E-mail</p>
                        <p className="text-muted-foreground">contato@casadenazare.org.br</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Horário de funcionamento</p>
                        <div className="text-muted-foreground text-sm space-y-1">
                          <p>Segunda a sexta: 8h às 17h</p>
                          <p>Sábado: 8h às 12h</p>
                          <p>Domingo: Fechado</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Perguntas frequentes</h2>

              <div className="space-y-6">
                <Card className="border-border/40">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Como posso agendar uma consulta?</h3>
                    <p className="text-muted-foreground">
                      Você pode agendar uma consulta ligando para nosso telefone (11) 1234-5678 ou enviando uma mensagem
                      através do formulário acima. Nossa equipe entrará em contato para confirmar o horário disponível.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/40">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Os serviços são gratuitos?</h3>
                    <p className="text-muted-foreground">
                      Sim, todos os nossos serviços e atividades são oferecidos gratuitamente à comunidade. Somos uma
                      organização social sem fins lucrativos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/40">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      Preciso levar algum documento para a primeira consulta?
                    </h3>
                    <p className="text-muted-foreground">
                      Para a primeira consulta, recomendamos trazer um documento de identidade e, se possível,
                      comprovante de residência. Para menores de idade, é necessário estar acompanhado de um
                      responsável.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
