import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { ServicesPreview } from "@/components/services-preview"
import { ActivitiesPreview } from "@/components/activities-preview"
import { CallToAction } from "@/components/call-to-action"
import { About } from "@/components/about"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesPreview />
        <ActivitiesPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
