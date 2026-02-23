import { ArrowRight, BookOpen, Printer, ShoppingBag, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-stone-50 dark:bg-slate-950 px-4 py-16 sm:py-24 lg:px-8 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* Columna Izquierda */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-bold text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400 self-center lg:self-start shadow-sm transition-colors duration-300">
              <MapPin className="h-4 w-4" />
              <span>Tu librería en Victoria</span>
            </div>
            
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-5xl lg:text-6xl transition-colors duration-300">
              Todo lo que necesitas para el <span className="text-red-600 dark:text-red-500">cole</span> y la <span className="text-blue-700 dark:text-blue-500">oficina</span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:mx-0 font-medium transition-colors duration-300">
              Útiles escolares, artículos de oficina, fotocopias, impresiones y
              cuadernillos personalizados. Atención cálida y los mejores precios del barrio.
            </p>
            
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="h-14 rounded-2xl bg-red-600 px-8 text-base font-bold text-white shadow-lg shadow-red-600/20 hover:bg-red-700 hover:scale-105 transition-all">
                <a href="#reservar">
                  Reservar cuadernillos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-2xl border-2 border-slate-200 bg-white px-8 text-base font-bold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-red-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-red-400 transition-all"
              >
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>

            {/* Íconos de servicios rápidos */}
            <div className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 sm:max-w-lg lg:mx-0">
              <div className="flex flex-col items-center gap-3 lg:items-start transition-transform hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30 shadow-sm border border-blue-200 dark:border-blue-800/50 transition-colors duration-300">
                  <Printer className="h-7 w-7 text-blue-700 dark:text-blue-400" />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Fotocopias</span>
              </div>
              <div className="flex flex-col items-center gap-3 lg:items-start transition-transform hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30 shadow-sm border border-red-200 dark:border-red-800/50 transition-colors duration-300">
                  <BookOpen className="h-7 w-7 text-red-600 dark:text-red-400" />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Cuadernillos</span>
              </div>
              <div className="flex flex-col items-center gap-3 lg:items-start transition-transform hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-900/30 shadow-sm border border-amber-200 dark:border-amber-800/50 transition-colors duration-300">
                  <ShoppingBag className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Útiles</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Imagen visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none mt-10 lg:mt-0">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 p-2 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 z-10 transition-colors duration-300">
              
              <img
                src="/venta-utiles-escolares.jpg"
                alt="Mostrador de Enter Office"
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-[2rem] dark:brightness-90 transition-all"
              />
              
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 p-4 shadow-xl backdrop-blur-sm border border-slate-100 dark:border-slate-800 transition-colors duration-300">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-800 dark:text-white">Pedidos Express</p>
                   <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Pasá a retirar sin filas</p>
                 </div>
              </div>
            </div>
            
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-tr from-red-100 to-blue-100 dark:from-red-900/20 dark:to-blue-900/20 opacity-70 blur-2xl transition-colors duration-300"></div>
          </div>

        </div>
      </div>
    </section>
  )
}