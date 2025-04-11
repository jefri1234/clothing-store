import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SearchBar from "@/components/search-bar"

export default function Home() {
  const categories = [
    {
      id: "gorras",
      name: "Gorras",
      description: "Estilo y protección para cualquier ocasión",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "polos",
      name: "Polos",
      description: "Comodidad y estilo casual para el día a día",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "poleras",
      name: "Poleras",
      description: "Mantente abrigado con nuestras poleras de alta calidad",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "pantalones",
      name: "Pantalones",
      description: "Variedad de estilos para completar tu look",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="relative h-[60vh] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/banner.jpg"
            alt="Banner de la tienda"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Estilo para Cada Momento</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in-delay">
              Descubre nuestra colección de ropa de alta calidad para todas las ocasiones
            </p>
            <Button size="lg" className="animate-fade-in-delay-2">
              Comprar Ahora
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Categorías</h2>
          <SearchBar />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link href={`/categoria/${category.id}`} key={category.id}>
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-64 w-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex items-center text-sm font-medium text-primary">
                    Ver productos <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Link href={`/producto/${item}`} key={item}>
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-64 w-full">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Producto ${item}`}
                    alt={`Producto ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Producto {item}</h3>
                  <p className="text-muted-foreground mb-4">Descripción breve del producto</p>
                  <p className="text-lg font-bold">$29.99</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
