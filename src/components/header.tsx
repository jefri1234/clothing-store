"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart, User, Search } from "lucide-react"
import { useTheme } from "next-themes" // Importa el hook

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
import SearchBar from "@/components/search-bar"
import Image from "next/image"

export default function Header() {
  const { theme } = useTheme() // Obtienes el tema actual
  console.log("tema actual",theme)//ver el tema actual por consola
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Dependiendo del valor de theme, elige el logo adecuado.
  // Ojo: en algunos casos es preferible usar "resolvedTheme" en lugar de "theme"
  const logoSrc = theme === "dark" ? "/logos/blanco/logo.png" : "/logos/negro/logo.png"

  const routes = [
    { href: "/", label: "Inicio" },
    { href: "/categoria/gorras", label: "Gorras" },
    { href: "/categoria/polos", label: "Polos" },
    { href: "/categoria/poleras", label: "Poleras" },
    { href: "/categoria/pantalones", label: "Pantalones" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        pathname === route.href ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0 text-xl font-bold">
              <Image 
                src={logoSrc}
                alt="Logo"
                width={150}
                height={150}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <SearchBar />
            </div>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Buscar"
              className="md:hidden"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            >
              {isMobileSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" aria-label="Mi cuenta">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" aria-label="Carrito">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">3</Badge>
              </div>
            </Button>

            <ModeToggle />
          </div>
        </div>

        {isMobileSearchOpen && (
          <div className="pb-4 md:hidden animate-fade-in">
            <SearchBar />
          </div>
        )}
      </div>
    </header>
  )
}
