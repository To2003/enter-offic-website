import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ReservationForm } from "@/components/reservation-form"
import { ExpressPickup } from "@/components/express-pickup"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ReservationForm />
        {/* ExpressPickup: componente modular. Eliminar esta linea para desactivarlo. */}
        <ExpressPickup />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
