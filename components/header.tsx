"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Reservar", href: "#reservar" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitamos errores de hidratación esperando a que el cliente cargue el tema
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMobileLinkClick = () => {
    setTimeout(() => {
      setMobileOpen(false)
    }, 150)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-stone-50/95 dark:bg-slate-950/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-stone-50/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-8 relative z-50">
        
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-1.5 transition-transform hover:scale-105">
          <span className="text-xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Enter
          </span>
          <ArrowRight className="h-5 w-5 text-red-600" strokeWidth={3} />
          <span className="text-xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Office
          </span>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-slate-600 dark:text-slate-300 transition-colors hover:text-red-600 dark:hover:text-red-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botones Derecha */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Botón Tema Oscuro/Claro */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2.5 text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}

          {/* Botón WhatsApp Desktop */}
          <div className="hidden md:block">
            <Button asChild size="lg" className="bg-red-600 font-bold text-white shadow-md hover:bg-red-700 rounded-xl">
              <a href="https://wa.me/5491156360053" target="_blank" rel="noopener noreferrer">
                Contactar
              </a>
            </Button>
          </div>

          {/* Botón Menú Hamburguesa (Mobile) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 inline-flex items-center justify-center rounded-xl p-2 text-slate-700 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none md:hidden"
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable (Mobile) */}
      {mobileOpen && (
        <div className="absolute left-0 top-full w-full border-b border-slate-200 dark:border-slate-800 shadow-xl bg-stone-50 dark:bg-slate-900 md:hidden z-40">
          <nav className="mx-auto flex flex-col px-6 py-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileLinkClick}
                className="rounded-xl px-4 py-3 text-lg font-bold text-slate-700 dark:text-slate-200 transition-colors hover:bg-red-50 dark:hover:bg-slate-800 hover:text-red-600"
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