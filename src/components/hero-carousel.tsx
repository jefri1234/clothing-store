"use client"

import { useCallback,useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const carouselItems = [
  {
    id: 1,
    image: "/carrusel/modelo.jpg",
    title: "Nueva Colección Primavera",
    description: "Descubre las últimas tendencias de la temporada",
    cta: "Comprar ahora",
    position: "left",
  },
  {
    id: 2,
    image: "/carrusel/polos.jpg",
    title: "Estilo Urbano",
    description: "Ropa casual para tu día a día",
    cta: "Ver catálogo",
    position: "center",
  },
  {
    id: 3,
    image: "/carrusel/conjunt.jpg",
    title: "Colección Exclusiva",
    description: "Prendas únicas con diseños limitados",
    cta: "Descubrir",
    position: "right",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [autoplay, setAutoplay] = useState(true)

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToNextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % carouselItems.length
    goToSlide(newIndex)
  }, [currentIndex,goToSlide])

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length
    goToSlide(newIndex)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        goToNextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentIndex, autoplay, goToNextSlide])

  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  return (
    <div
      className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Items */}
      <div className="relative w-full h-full">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out",
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 dark:from-black/70 dark:to-black/40" />

              <div
                className={cn(
                  "absolute inset-0 flex flex-col justify-center p-6 md:p-12 lg:p-24 text-white",
                  item.position === "left" ? "items-start text-left" : "",
                  item.position === "center" ? "items-center text-center" : "",
                  item.position === "right" ? "items-end text-right" : "",
                )}
              >
                <div
                  className={cn(
                    "transform transition-all duration-700 delay-100",
                    currentIndex === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                  )}
                >
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-md">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 max-w-md text-white/90 drop-shadow">{item.description}</p>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black dark:hover:bg-white/90 font-medium"
                  >
                    {item.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 dark:bg-white/10 hover:bg-black/50 dark:hover:bg-white/20 text-white rounded-full p-2 transition-all duration-200 backdrop-blur-sm"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 dark:bg-white/10 hover:bg-black/50 dark:hover:bg-white/20 text-white rounded-full p-2 transition-all duration-200 backdrop-blur-sm"
        aria-label="Siguiente"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              currentIndex === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/70",
            )}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
