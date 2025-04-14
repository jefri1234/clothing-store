import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PageVisibilityListener from "@/components/PageVisibilityListener"; // Importa el componente
import WhatsAppButton from "@/components/WhatsAppButton"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tienda de Ropa | Tu estilo, tu elección",
  description: "Encuentra las mejores prendas de vestir organizadas por categorías",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" >
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Este componente se monta una vez y se encarga de cambiar el título */}
          <PageVisibilityListener />
          <div className="flex min-h-screen flex-col">
            <WhatsAppButton />
            {/* Este componente se monta una vez y se encarga de cambiar el título */}
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
