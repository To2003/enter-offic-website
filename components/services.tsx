import { Printer, Pencil, Briefcase, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Printer,
    title: "Fotocopias e Impresiones",
    description:
      "Fotocopias en blanco y negro o color, impresiones laser y a inyeccion de tinta. Calidad profesional al mejor precio.",
  },
  {
    icon: Pencil,
    title: "Utiles Escolares",
    description:
      "Lapices, cuadernos, carpetas, cartucheras, hojas y todo lo que necesitas para arrancar las clases.",
  },
  {
    icon: Briefcase,
    title: "Articulos de Oficina",
    description:
      "Resmas, cartuchos, archivadores, abrochadoras y todos los insumos para mantener tu oficina equipada.",
  },
  {
    icon: BookOpen,
    title: "Cuadernillos Personalizados",
    description:
      "Armamos cuadernillos a medida para cada colegio y materia. Reserva el tuyo y retiralo listo.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-background px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestros servicios
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Todo en un solo lugar
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            En Enter Office encontras todo lo que necesitas para el colegio, la
            facultad y la oficina. Productos de calidad y atencion personalizada.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border bg-card transition-shadow hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
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
