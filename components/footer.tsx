import { ArrowRight, MapPin, Clock, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-slate-900 dark:bg-slate-950 dark:border-t dark:border-slate-800/50 px-4 py-16 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo y descripción */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="mb-4 flex items-center gap-1.5 transition-transform hover:scale-105">
              <span className="text-xl font-extrabold tracking-tight text-white">
                Enter
              </span>
              <ArrowRight className="h-5 w-5 text-red-500" strokeWidth={3} />
              <span className="text-xl font-extrabold tracking-tight text-white">
                Office
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 font-medium">
              Tu librería y fotocopiadora de confianza en Victoria. Atención
              personalizada y los mejores precios para vos.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-500">
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://wa.me/5491156360053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 dark:bg-slate-900 transition-colors group-hover:bg-red-500 dark:group-hover:bg-red-500">
                    <Phone className="h-4 w-4 text-slate-300 group-hover:text-white" />
                  </div>
                  11 5636 0053
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/libreriaenteroffice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 dark:bg-slate-900 transition-colors group-hover:bg-red-500 dark:group-hover:bg-red-500">
                    <Instagram className="h-4 w-4 text-slate-300 group-hover:text-white" />
                  </div>
                  @libreriaenteroffice
                </a>
              </li>
            </ul>
          </div>

          {/* Ubicación */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-500">
              Ubicación
            </h3>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 dark:bg-slate-900">
                <MapPin className="h-4 w-4 text-slate-300" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-slate-300">
                Av. Pte. Perón 2323,
                <br />
                Victoria, Buenos Aires
              </p>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-500">
              Horarios
            </h3>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 dark:bg-slate-900">
                <Clock className="h-4 w-4 text-slate-300" />
              </div>
              <div className="flex flex-col gap-1.5 text-sm font-medium text-slate-400">
                <span>Lunes a Viernes</span>
                <span className="text-white bg-slate-800/50 dark:bg-slate-900/80 px-2 py-1 rounded-md text-xs w-fit">
                  9:00 a 13:00 - 15:00 a 19:00
                </span>
                <span className="mt-2">Sábados</span>
                <span className="text-white bg-slate-800/50 dark:bg-slate-900/80 px-2 py-1 rounded-md text-xs w-fit">
                  9:00 a 13:00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 dark:border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center text-xs font-medium text-slate-500">
            © {new Date().getFullYear()} Enter Office. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}