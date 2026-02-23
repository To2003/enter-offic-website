"use client"

import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Reservar", href: "#reservar" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Truco pro para celulares: Le damos un respiro de 150ms al navegador 
  // para que registre el clic en el enlace antes de desaparecer el menú.
  const handleMobileLinkClick = () => {
    setTimeout(() => {
      setMobileOpen(false)
    }, 150)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-stone-50/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-stone-50/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-8 relative z-50">
        
        {/* Logo de Enter Office */}
        <a href="#inicio" className="flex items-center gap-1.5 transition-transform hover:scale-105">
          <span className="text-xl font-extrabold tracking-tight text-slate-800">
            Enter
          </span>
          {/* Un rojo un poquito más cálido y amigable */}
          <ArrowRight className="h-5 w-5 text-red-600" strokeWidth={3} />
          <span className="text-xl font-extrabold tracking-tight text-slate-800">
            Office
          </span>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-slate-600 transition-colors hover:text-red-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón WhatsApp Desktop */}
        <div className="hidden md:block">
          <Button asChild size="lg" className="bg-red-600 font-bold text-white shadow-md hover:bg-red-700 rounded-xl">
            <a
              href="https://wa.me/5491156360053"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar por WhatsApp
            </a>
          </Button>
        </div>

        {/* Botón Menú Hamburguesa (Mobile) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 inline-flex items-center justify-center rounded-xl p-3 text-slate-700 transition-colors hover:bg-slate-200 focus:outline-none md:hidden"
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Menú Desplegable (Mobile) - Ahora flota por encima (absolute) */}
      {mobileOpen && (
        <div className="absolute left-0 top-full w-full border-b border-border shadow-xl bg-stone-50 md:hidden z-40">
          <nav className="mx-auto flex flex-col px-6 py-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileLinkClick}
                className="rounded-xl px-4 py-3 text-lg font-bold text-slate-700 transition-colors hover:bg-red-50 hover:text-red-600"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6">
              <Button asChild size="lg" className="w-full bg-red-600 text-white font-bold text-lg hover:bg-red-700 rounded-xl py-6 shadow-md">
                <a
                  href="https://wa.me/5491156360053"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMobileLinkClick}
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}