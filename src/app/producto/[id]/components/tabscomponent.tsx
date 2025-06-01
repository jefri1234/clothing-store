import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Product {
  id: string | number;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  categoryName: string;
}

interface TabsComponentProps {
  product: Product;
  params: { id: string | number };
}

function Tabscomponent({ product, params }: TabsComponentProps) {
  return (
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
          <p>{product.description}</p>
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
                    className={`h-5 w-5 ${i < Math.floor(product.rating)
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
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border-b pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Usuario {i + 1}</h4>
                    <div className="flex my-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${j < 4 + (i % 2) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
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
  );
}

export default Tabscomponent;
