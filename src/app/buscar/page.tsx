import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Skeleton } from "@/components/ui/skeleton"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q || ""

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold">Resultados de búsqueda</h1>
        <p className="text-muted-foreground">
          {query ? `Mostrando resultados para "${query}"` : "Todos los productos"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filtros para pantallas grandes */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Filtros</h2>

            <Accordion type="multiple" className="w-full">
              <AccordionItem value="category">
                <AccordionTrigger>Categoría</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-1" />
                      <label
                        htmlFor="category-1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Gorras
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-2" />
                      <label
                        htmlFor="category-2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Polos
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-3" />
                      <label
                        htmlFor="category-3"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Poleras
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-4" />
                      <label
                        htmlFor="category-4"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Pantalones
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

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
                  <AccordionItem value="category">
                    <AccordionTrigger>Categoría</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-category-1" />
                          <label
                            htmlFor="mobile-category-1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Gorras
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-category-2" />
                          <label
                            htmlFor="mobile-category-2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Polos
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-category-3" />
                          <label
                            htmlFor="mobile-category-3"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Poleras
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="price">
                    <AccordionTrigger>Precio</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-price-1" />
                          <label
                            htmlFor="mobile-price-1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            $0 - $25
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-price-2" />
                          <label
                            htmlFor="mobile-price-2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            $25 - $50
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-price-3" />
                          <label
                            htmlFor="mobile-price-3"
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
                          <Checkbox id="mobile-color-1" />
                          <label
                            htmlFor="mobile-color-1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Negro
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-color-2" />
                          <label
                            htmlFor="mobile-color-2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Blanco
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-color-3" />
                          <label
                            htmlFor="mobile-color-3"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Azul
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
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

          {/* Resultados de búsqueda */}
          <Suspense fallback={<SearchResultsSkeleton />}>
            <SearchResults query={query} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function SearchResults({ query }: { query: string }) {
  // Simulación de resultados de búsqueda
  const results = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: query ? `${query} - Producto ${i + 1}` : `Producto ${i + 1}`,
    price: Math.floor(Math.random() * 50) + 20,
    image: `/placeholder.svg?height=400&width=400&text=${query ? query : "Producto"} ${i + 1}`,
    category: ["Gorras", "Polos", "Poleras", "Pantalones"][i % 4],
  }))

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No se encontraron resultados</h3>
        <p className="text-muted-foreground mb-6">No pudimos encontrar productos que coincidan con "{query}".</p>
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((product) => (
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
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

function SearchResultsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="overflow-hidden h-full">
          <Skeleton className="h-64 w-full" />
          <CardContent className="p-6">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-2" />
            <Skeleton className="h-6 w-1/4" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
