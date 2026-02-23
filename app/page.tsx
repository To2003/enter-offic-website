import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ReservationForm } from "@/components/reservation-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ReservationForm />
      </main>
      <Footer />
    </>
  )
}
