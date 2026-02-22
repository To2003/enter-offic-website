import { ArrowRight, BookOpen, Printer, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-secondary px-4 py-20 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />
      <div className="relative mx-auto max-w-6xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
          <BookOpen className="h-4 w-4" />
          <span>Libreria y Fotocopiadora en Victoria</span>
        </div>
        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Todo lo que necesitas para el cole y la oficina
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Utiles escolares, articulos de oficina, fotocopias, impresiones y
          cuadernillos personalizados. Tu libreria de confianza en Victoria.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#reservar">
              Reservar cuadernillos
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="#servicios">Ver servicios</a>
          </Button>
        </div>
        <div className="mx-auto mt-14 grid max-w-md grid-cols-3 gap-6 sm:max-w-lg">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
              <Printer className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xs font-medium text-primary-foreground/70">Fotocopias</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xs font-medium text-primary-foreground/70">Cuadernillos</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
              <ShoppingBag className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xs font-medium text-primary-foreground/70">Utiles</span>
          </div>
        </div>
      </div>
    </section>
  )
}
