import { Printer, Pencil, Briefcase, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Printer,
    title: "Fotocopias e Impresiones",
    description: "Fotocopias en blanco y negro o color, impresiones láser y a inyección de tinta. Calidad profesional al mejor precio.",
    color: "text-blue-700 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: Pencil,
    title: "Útiles Escolares",
    description: "Lápices, cuadernos, carpetas, cartucheras, hojas y todo lo que necesitas para arrancar las clases.",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    icon: Briefcase,
    title: "Artículos de Oficina",
    description: "Resmas, cartuchos, archivadores, abrochadoras y todos los insumos para mantener tu oficina equipada.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: BookOpen,
    title: "Cuadernillos Personalizados",
    description: "Armamos cuadernillos a medida para cada colegio y materia. Reservá el tuyo y retiralo listo.",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-100 dark:bg-red-900/30",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-white dark:bg-slate-900 px-4 py-20 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-wider text-red-600 dark:text-red-500 transition-colors">
            Nuestros servicios
          </p>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white md:text-4xl transition-colors">
            Todo en un solo lugar
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg font-medium text-slate-600 dark:text-slate-300 transition-colors">
            En Enter Office encontrás todo lo que necesitas para el colegio, la
            facultad y la oficina. Productos de calidad y atención súper personalizada.
          </p>
        </div>
        
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50"
            >
              <CardContent className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4 p-8">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.bg} transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium transition-colors">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}