import { ArrowRight, MapPin, Clock, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-secondary px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="mb-4 flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-primary-foreground">
                Enter
              </span>
              <ArrowRight className="h-5 w-5 text-primary" strokeWidth={3} />
              <span className="text-xl font-bold tracking-tight text-primary-foreground">
                Office
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              Tu libreria y fotocopiadora de confianza en Victoria. Atencion
              personalizada y los mejores precios.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/5491156360053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  11 5636 0053
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/libreriaenteroffice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-primary" />
                  @libreriaenteroffice
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Ubicacion
            </h3>
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-primary-foreground/80">
                Av. Pte. Peron 2323,
                <br />
                Victoria, Buenos Aires
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Horarios
            </h3>
            <div className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div className="flex flex-col gap-1 text-sm text-primary-foreground/80">
                <span>Lunes a Viernes</span>
                <span className="font-medium text-primary-foreground">
                  9:00 a 13:00 - 15:00 a 19:00
                </span>
                <span className="mt-1">Sabados</span>
                <span className="font-medium text-primary-foreground">
                  9:00 a 13:00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6">
          <p className="text-center text-xs text-primary-foreground/50">
            Enter Office - Libreria y Fotocopiadora. Victoria, Buenos Aires.
          </p>
        </div>
      </div>
    </footer>
  )
}
