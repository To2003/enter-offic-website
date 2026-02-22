import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import FloatingChatbot from '@/components/FloatingChatbot'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });

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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <FloatingChatbot />
      </body>
    </html>
  )
}
