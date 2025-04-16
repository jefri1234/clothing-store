"use client"
import { SheetContent } from "@/components/ui/sheet"
import { SheetTrigger } from "@/components/ui/sheet"
import { Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image"
import { Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

import { useParams } from "next/navigation"


//específica de usar tipado con objetos en TypeScript, utilizando Record<K, V> == clave , valor 
const categoryNames: Record<string, string> = {
  gorras: "Gorras",
  polos: "Polos",
  poleras: "Poleras",
  pantalones: "Pantalones",
}

export default  function CategoryPage() {
  const params = useParams()
  const slug = params?.slug as string

  // accedo a categoryNames.polos si es asi entonses usaras "Polos" osea el de la clave polos y se mostrara el string que es ese
  const categoryName = categoryNames[slug] || slug

  // Simulación de productos para la categoría (9 CARDS)
  const products = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    //definicion del nombre concatenado con un numero incrementando de 1 hasta 9
    name: `${categoryName.slice(0, -1)} ${i + 1}`,
    price: Math.floor(Math.random() * 50) + 20,
    image: `/img/${categoryName}.jpg`,
    //asignacion de colores de forma aleatoria, 1-3 colores por producto
    colors: ["Negro", "Blanco", "Azul"].slice(0, Math.floor(Math.random() * 3) + 1),
  }))

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold">{categoryName}</h1>
        <p className="text-muted-foreground">
          Encuentra la mejor selección de <span className="text-primary">{categoryName.toLowerCase()}</span> para complementar tu estilo
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filtros para pantallas grandes */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Filtros</h2>

            <Accordion type="multiple" className="w-full">
              <AccordionItem value="price">
                <AccordionTrigger>Precio</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-1" />
                      <label
                        htmlFor="price-1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        $0 - $25
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-2" />
                      <label
                        htmlFor="price-2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        $25 - $50
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-3" />
                      <label
                        htmlFor="price-3"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        $50 - $100
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="color">
                <AccordionTrigger>Color</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="color-1" />
                      <label
                        htmlFor="color-1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Negro
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="color-2" />
                      <label
                        htmlFor="color-2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Blanco
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="color-3" />
                      <label
                        htmlFor="color-3"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Azul
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="color-4" />
                      <label
                        htmlFor="color-4"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Rojo
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="size">
                <AccordionTrigger>Talla</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-1" />
                      <label
                        htmlFor="size-1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        S
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-2" />
                      <label
                        htmlFor="size-2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        M
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-3" />
                      <label
                        htmlFor="size-3"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        L
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-4" />
                      <label
                        htmlFor="size-4"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        XL
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="lg:col-span-3">
          {/* Filtros móviles y ordenamiento */}
          <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <h2 className="text-xl font-semibold mb-4">Filtros</h2>
                <Accordion type="multiple" className="w-full">
                  {/* Filtros móviles aquí... */}
                </Accordion>
              </SheetContent>
            </Sheet>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Ordenar por <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Más recientes</DropdownMenuItem>
                <DropdownMenuItem>Precio: Menor a Mayor</DropdownMenuItem>
                <DropdownMenuItem>Precio: Mayor a Menor</DropdownMenuItem>
                <DropdownMenuItem>Popularidad</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link href={`/producto/${product.id}`} key={product.id}>
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-64 w-full">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <div className="flex gap-2 mb-4">
                      {product.colors.map((color) => (
                        <span key={color} className="text-xs text-muted-foreground">
                          {color}
                        </span>
                      ))}
                    </div>
                    <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          {/* Fin Productos */}
        </div>
      </div>
    </div>
  )
}
