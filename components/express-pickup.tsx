"use client"

import { useState } from "react"
import { Zap, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ExpressPickup() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const nombre = formData.get("nombre-express") as string
    const lista = formData.get("lista-utiles") as string

    const message = encodeURIComponent(
      `Hola! Quiero hacer un pedido express para retirar.\n\nNombre: ${nombre}\nLista de utiles:\n${lista}`
    )
    window.open(`https://wa.me/5491156360053?text=${message}`, "_blank")
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-background px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Pedido express enviado
          </h2>
          <p className="mt-2 text-muted-foreground">
            Se abrio WhatsApp con tu lista. Te confirmamos disponibilidad y
            precio para que pases a retirar.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="mt-6"
          >
            Hacer otro pedido
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-primary/20 bg-primary/5">
          <div className="grid lg:grid-cols-5">
            <div className="flex flex-col justify-center bg-secondary p-8 lg:col-span-2 lg:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-balance text-2xl font-bold text-primary-foreground md:text-3xl">
                Reserva Express de Utiles
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-primary-foreground/80">
                Anota tu lista de utiles y enviala. Te la preparamos para que
                pases a retirar sin esperas. Rapido y simple.
              </p>
              <div className="mt-6 flex flex-col gap-2 text-sm text-primary-foreground/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Envianos tu lista</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Te confirmamos precio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Retira en el local</span>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 lg:col-span-3 lg:p-10"
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="nombre-express" className="text-foreground">Tu nombre</Label>
                <Input
                  id="nombre-express"
                  name="nombre-express"
                  placeholder="Ej: Juan Perez"
                  required
                  className="bg-background"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="lista-utiles" className="text-foreground">Lista de utiles</Label>
                <Textarea
                  id="lista-utiles"
                  name="lista-utiles"
                  placeholder={"Ej:\n2 lapices HB\n3 lapiceras azules\n1 goma de borrar\n1 regla 30cm"}
                  rows={6}
                  required
                  className="resize-none bg-background"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="mr-2 h-4 w-4" />
                Enviar lista por WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
