"use client"

import { useState } from "react"
import { BookOpen, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const colegios = [
  "Colegio San Martin",
  "Escuela N° 1",
  "Escuela N° 2",
  "Instituto Nuestra Senora",
  "Colegio Lincoln",
  "Otro",
]

const cursos = [
  "1er grado",
  "2do grado",
  "3er grado",
  "4to grado",
  "5to grado",
  "6to grado",
  "1er ano",
  "2do ano",
  "3er ano",
  "4to ano",
  "5to ano",
  "6to ano",
]

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const nombre = formData.get("nombre") as string
    const colegio = formData.get("colegio") as string
    const curso = formData.get("curso") as string
    const materiales = formData.get("materiales") as string

    const message = encodeURIComponent(
      `Hola! Quiero reservar cuadernillos.\n\nNombre: ${nombre}\nColegio: ${colegio}\nCurso: ${curso}\nMateriales: ${materiales}`
    )
    window.open(`https://wa.me/5491156360053?text=${message}`, "_blank")
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="reservar" className="bg-muted px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Reserva enviada
          </h2>
          <p className="mt-2 text-muted-foreground">
            Se abrio WhatsApp con tu pedido. Si no se abrio automaticamente,
            escribinos al 11 5636 0053.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="mt-6"
          >
            Hacer otra reserva
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="reservar" className="bg-muted px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Reserva de cuadernillos
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Reserva tus cuadernillos escolares
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Completa el formulario con tus datos y los materiales que
              necesitas. Nos comunicamos por WhatsApp para confirmar tu pedido y
              te lo tenemos listo para retirar.
            </p>
            <div className="mt-8 flex items-start gap-4 rounded-lg border border-border bg-card p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  Cuadernillos a medida
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Preparamos cuadernillos para cada colegio y materia. Pedinos
                  lo que necesites y lo tenemos listo.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-card p-6 shadow-sm lg:p-8"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="nombre" className="text-card-foreground">Nombre y Apellido</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  placeholder="Ej: Maria Garcia"
                  required
                  className="bg-background"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="colegio" className="text-card-foreground">Colegio</Label>
                <Select name="colegio" required>
                  <SelectTrigger id="colegio" className="bg-background">
                    <SelectValue placeholder="Selecciona un colegio" />
                  </SelectTrigger>
                  <SelectContent>
                    {colegios.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="curso" className="text-card-foreground">Curso</Label>
                <Select name="curso" required>
                  <SelectTrigger id="curso" className="bg-background">
                    <SelectValue placeholder="Selecciona un curso" />
                  </SelectTrigger>
                  <SelectContent>
                    {cursos.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="materiales" className="text-card-foreground">Materiales que necesites</Label>
                <Textarea
                  id="materiales"
                  name="materiales"
                  placeholder="Ej: Cuadernillo de Matematica, Lengua y Ciencias Naturales"
                  rows={4}
                  required
                  className="resize-none bg-background"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Reservar por WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
