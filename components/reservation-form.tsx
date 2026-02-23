"use client"

import { useState } from "react"
import { BookOpen, CheckCircle, Send } from "lucide-react"
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
  "Colegio San Martín",
  "Escuela N° 1",
  "Escuela N° 2",
  "Instituto Nuestra Señora",
  "Colegio Lincoln",
  "Otro",
]

const cursos = [
  "1er grado", "2do grado", "3er grado", "4to grado", "5to grado", "6to grado",
  "1er año", "2do año", "3er año", "4to año", "5to año", "6to año",
]

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const nombre = formData.get("nombre") as string
    const colegio = formData.get("colegio") as string
    const curso = formData.get("curso") as string
    const materiales = formData.get("materiales") as string

    const message = encodeURIComponent(
      `¡Hola Enter Office! 👋 Quería reservar un cuadernillo.\n\n*A nombre de:* ${nombre}\n*Colegio:* ${colegio}\n*Curso:* ${curso}\n*Materiales extra:* ${materiales}`
    )
    window.open(`https://wa.me/5491156360053?text=${message}`, "_blank")
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="reservar" className="bg-stone-50 dark:bg-slate-950 px-4 py-24 lg:px-8 transition-colors duration-300">
        <div className="mx-auto max-w-lg text-center bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl dark:shadow-none border border-stone-100 dark:border-slate-800 transition-colors duration-300">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white">
            ¡Reserva lista!
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
            Se abrió WhatsApp con tu pedido. Si no se abrió automáticamente, mandanos un mensaje al <span className="font-bold text-slate-800 dark:text-white">11 5636 0053</span>.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            size="lg"
            className="mt-8 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Hacer otra reserva
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="reservar" className="bg-stone-50 dark:bg-slate-950 px-4 py-20 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          
          <div className="flex flex-col justify-center h-full">
            <p className="text-sm font-extrabold uppercase tracking-wider text-red-600 dark:text-red-500">
              Reserva de cuadernillos
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white md:text-5xl leading-tight">
              Reservá tus cuadernillos escolares
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-lg font-medium text-slate-600 dark:text-slate-300">
              Completá el formulario con tus datos y los materiales que necesitas. Nos comunicamos por WhatsApp para confirmarlo y te lo preparamos para retirar.
            </p>
            
            <div className="mt-10 flex items-start gap-4 rounded-3xl border border-blue-100 dark:border-blue-800/50 bg-blue-50/50 dark:bg-blue-900/20 p-6 shadow-sm transition-colors duration-300">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-blue-100 dark:border-blue-800/50">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">
                  A tu medida
                </h3>
                <p className="mt-2 text-base font-medium text-slate-600 dark:text-slate-400">
                  Preparamos los cuadernillos específicos de cada colegio de la zona. Pedinos el que buscas y lo armamos.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl shadow-slate-200/50 dark:shadow-none sm:p-10 transition-colors duration-300"
          >
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2.5">
                <Label htmlFor="nombre" className="text-base font-bold text-slate-700 dark:text-slate-200">Nombre y Apellido del alumno</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  placeholder="Ej: María García"
                  required
                  className="h-12 rounded-xl bg-stone-50 dark:bg-slate-950 dark:text-white border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-red-400 focus:ring-red-400 text-base"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <Label htmlFor="colegio" className="text-base font-bold text-slate-700 dark:text-slate-200">Colegio</Label>
                <Select name="colegio" required>
                  <SelectTrigger id="colegio" className="h-12 rounded-xl bg-stone-50 dark:bg-slate-950 dark:text-white border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-red-400 text-base">
                    <SelectValue placeholder="Seleccioná un colegio" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl dark:bg-slate-900 dark:border-slate-800">
                    {colegios.map((c) => (
                      <SelectItem key={c} value={c} className="rounded-lg cursor-pointer dark:focus:bg-slate-800">
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2.5">
                <Label htmlFor="curso" className="text-base font-bold text-slate-700 dark:text-slate-200">Curso / Año</Label>
                <Select name="curso" required>
                  <SelectTrigger id="curso" className="h-12 rounded-xl bg-stone-50 dark:bg-slate-950 dark:text-white border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-red-400 text-base">
                    <SelectValue placeholder="Seleccioná el curso" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl max-h-64 dark:bg-slate-900 dark:border-slate-800">
                    {cursos.map((c) => (
                      <SelectItem key={c} value={c} className="rounded-lg cursor-pointer dark:focus:bg-slate-800">
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2.5">
                <Label htmlFor="materiales" className="text-base font-bold text-slate-700 dark:text-slate-200">¿Qué materiales necesitas?</Label>
                <Textarea
                  id="materiales"
                  name="materiales"
                  placeholder="Ej: Cuadernillo de Matemática y Lengua, más un block rayado."
                  rows={4}
                  required
                  className="resize-none rounded-xl bg-stone-50 dark:bg-slate-950 dark:text-white border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-red-400 focus:ring-red-400 text-base p-4 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-4 h-14 w-full rounded-xl bg-red-600 text-lg font-bold text-white shadow-md hover:bg-red-700 hover:scale-[1.02] transition-all"
              >
                <Send className="mr-2 h-5 w-5" />
                Reservar por WhatsApp
              </Button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}