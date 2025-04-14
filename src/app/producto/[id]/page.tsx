import Image from "next/image"
import Link from "next/link"
import { Star, Heart, ShoppingCart, ChevronRight, Truck, RotateCcw, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function ProductPage({ params }: { params: { id: string } }) {
  // Simulación de datos del producto
  const product = {
    id: params.id,
    name: `Producto ${params.id}`,
    price: 39.99,
    originalPrice: 59.99,
    description:
      "Este producto de alta calidad está diseñado para ofrecer comodidad y estilo. Fabricado con materiales premium que garantizan durabilidad y un acabado excepcional.",
    features: [
      "Material de alta calidad",
      "Diseño moderno y elegante",
      "Disponible en varios colores",
      "Tallas disponibles: S, M, L, XL",
    ],
    rating: 4.5,
    reviews: 128,
    images: [
      `/placeholder.svg?height=600&width=600&text=Producto ${params.id} - Principal`,
      `/placeholder.svg?height=600&width=600&text=Producto ${params.id} - Lateral`,
      `/placeholder.svg?height=600&width=600&text=Producto ${params.id} - Detalle`,
      `/placeholder.svg?height=600&width=600&text=Producto ${params.id} - Trasera`,
    ],
    colors: ["Negro", "Blanco", "Azul"],
    sizes: ["S", "M", "L", "XL"],
    category: "polos",
    categoryName: "Polos",
  }

  // Productos relacionados
  const relatedProducts = Array.from({ length: 4 }, (_, i) => ({
    id: Number(params.id) + i + 1,
    name: `Producto ${Number(params.id) + i + 1}`,
    price: Math.floor(Math.random() * 50) + 20,
    image: `/placeholder.svg?height=400&width=400&text=Producto ${Number(params.id) + i + 1}`,
  }))

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          Inicio
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/categoria/${product.category}`} className="hover:text-primary transition-colors">
          {product.categoryName}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Galería de imágenes */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={`/img/polos.jpg`}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.originalPrice && (
              <Badge className="absolute top-4 left-4 bg-primary">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-md border cursor-pointer hover:border-primary transition-colors"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Vista ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : i < product.rating
                          ? "text-yellow-400 fill-yellow-400 opacity-50"
                          : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">({product.reviews} reseñas)</span>
              </div>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-3">Color</h3>
              <RadioGroup defaultValue={product.colors[0]} className="flex gap-3">
                {product.colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <RadioGroupItem value={color} id={`color-${color}`} />
                    <Label htmlFor={`color-${color}`}>{color}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium mb-3">Talla</h3>
              <RadioGroup defaultValue={product.sizes[1]} className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center justify-center">
                    <Label
                      htmlFor={`size-${size}`}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border [&:has(:checked)]:border-primary [&:has(:checked)]:bg-primary/10"
                    >
                      <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium mb-3">Cantidad</h3>
              <div className="flex items-center">
                <Button variant="outline" size="icon" className="rounded-r-none" aria-label="Disminuir cantidad">
                  -
                </Button>
                <div className="flex h-10 w-14 items-center justify-center border-y">1</div>
                <Button variant="outline" size="icon" className="rounded-l-none" aria-label="Aumentar cantidad">
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Añadir al carrito
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="mr-2 h-5 w-5" />
              Añadir a favoritos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">Envío gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">Devolución en 30 días</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">Garantía de calidad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detalles del producto */}
      <div className="mb-16">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3"
            >
              Descripción
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3"
            >
              Detalles
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3"
            >
              Reseñas ({product.reviews})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-6">
            <div className="prose max-w-none">
              <p>
                Este producto de alta calidad está diseñado para ofrecer comodidad y estilo. Fabricado con materiales
                premium que garantizan durabilidad y un acabado excepcional.
              </p>
              <p>
                Nuestro compromiso con la calidad se refleja en cada detalle de este producto. Desde la selección de
                materiales hasta el proceso de fabricación, cada paso está cuidadosamente supervisado para asegurar que
                recibas un producto que supere tus expectativas.
              </p>
              <p>
                Ya sea para uso diario o para ocasiones especiales, este producto se adaptará perfectamente a tus
                necesidades, brindándote la confianza y el estilo que buscas.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="details" className="pt-6">
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
              <li>Instrucciones de cuidado: Lavar a máquina, temperatura baja</li>
              <li>Origen: Importado</li>
              <li>Código del producto: PROD-{params.id}</li>
            </ul>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold">{product.rating}</div>
                <div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : i < product.rating
                              ? "text-yellow-400 fill-yellow-400 opacity-50"
                              : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Basado en {product.reviews} reseñas</p>
                </div>
              </div>

              <Button>Escribir una reseña</Button>

              <div className="space-y-4">
                {/* Reseñas simuladas */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">Usuario {i + 1}</h4>
                        <div className="flex my-1">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star
                              key={j}
                              className={`h-4 w-4 ${
                                j < 4 + (i % 2) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(Date.now() - i * 86400000 * 7).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="mt-2">
                      {i === 0
                        ? "Excelente producto, muy buena calidad y el envío fue rápido. Lo recomiendo totalmente."
                        : i === 1
                          ? "Me encanta este producto. El material es de buena calidad y el diseño es muy bonito. Definitivamente compraré más."
                          : "Buen producto por el precio. La talla es exacta y el color es como se muestra en las imágenes."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Productos relacionados */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
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
                  <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
