import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import FloatingChatbot from '@/components/FloatingChatbot'
import './globals.css'

// Instanciamos Nunito con los grosores que más vamos a usar
const nunito = Nunito({ 
  subsets: ["latin"], 
  weight: ['400', '600', '700', '800'] 
});

export const metadata: Metadata = {
  title: 'Enter Office | Libreria y Fotocopiadora en Victoria',
  description: 'Libreria y fotocopiadora en Victoria. Utiles escolares, articulos de oficina, fotocopias, impresiones y cuadernillos personalizados. Av. Pte. Peron 2323, Victoria.',
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* Sumamos la nueva fuente, el tamaño responsivo y un color de fondo más cálido */}
      <body className={`${nunito.className} text-base md:text-lg bg-stone-50 antialiased`}>
        {children}
        <Analytics />
        <FloatingChatbot />
      </body>
    </html>
  )
}