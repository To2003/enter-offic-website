import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import FloatingChatbot from '@/components/FloatingChatbot'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"], 
  weight: ['400', '600', '700', '800'] 
});

export const metadata: Metadata = {
  title: 'Enter Office | Libreria y Fotocopiadora en Victoria',
  description: 'Libreria y fotocopiadora en Victoria. Utiles escolares, articulos de oficina, fotocopias, impresiones y cuadernillos personalizados. Av. Pte. Peron 2323, Victoria.',
}

export const viewport: Viewport = {
  themeColor: '#020617', // Color slate-950 para celulares en modo oscuro
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${nunito.className} text-base md:text-lg bg-stone-50 dark:bg-slate-950 antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // <-- ¡Acá está la magia para que arranque oscuro!
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
          <Analytics />
          <FloatingChatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}