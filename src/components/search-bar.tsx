"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [focus, setFocus] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null) // Índice de la sugerencia seleccionada
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const categories = ["polos", "poleras", "gorras", "pantalones"]

  // Función para hacer la búsqueda con el query
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Si hay alguna sugerencia que coincide con el searchQuery
    const matchedCategory = categories.find(category => category.toLowerCase() === searchQuery.trim().toLowerCase())

    if (matchedCategory) {
      router.push(`/categoria/${matchedCategory.toLowerCase()}`)
    } else if (searchQuery.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleFocus = () => {
    setFocus(true)
    if (searchQuery.trim()) {
      setSuggestions(categories.filter(category => category.toLowerCase().includes(searchQuery.toLowerCase())))
    } else {
      setSuggestions([])
    }
  }

  const handleBlur = () => {
    setTimeout(() => {
      if (!inputRef.current?.matches(":focus")) {
        setFocus(false)
        setSuggestions([])
        setSelectedIndex(null)
      }
    }, 100)
  }

  const handleSelectSuggestion = (category: string) => {
    router.push(`/categoria/${category.toLowerCase()}`)
    setSearchQuery("") // Limpiar el input
    setSuggestions([]) // Limpiar las sugerencias
    setSelectedIndex(null) // Limpiar la selección
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim()) {
      setSuggestions(categories.filter(category => category.toLowerCase().includes(query.toLowerCase())))
    } else {
      setSuggestions([])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      // Mover hacia abajo
      setSelectedIndex(prevIndex => {
        if (prevIndex === null) return 0
        if (prevIndex < suggestions.length - 1) return prevIndex + 1
        return prevIndex
      })
    } else if (e.key === "ArrowUp") {
      // Mover hacia arriba
      setSelectedIndex(prevIndex => {
        if (prevIndex === null) return suggestions.length - 1
        if (prevIndex > 0) return prevIndex - 1
        return prevIndex
      })
    } else if (e.key === "Enter") {
      // Al presionar Enter, seleccionamos la opción actual
      if (selectedIndex !== null && suggestions[selectedIndex]) {
        handleSelectSuggestion(suggestions[selectedIndex])
      } else {
        handleSearch(e as React.FormEvent)
      }
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-sm">
      <Input
        ref={inputRef}
        type="text"
        placeholder="Buscar productos..."
        value={searchQuery}
        onChange={handleChange}
        className="pr-10 dark:bg-gray-800 dark:text-white dark:border-gray-600 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        onFocus={handleFocus} // Mostrar sugerencias cuando tenga foco
        onBlur={handleBlur} // Ocultar sugerencias cuando se pierde foco
        onKeyDown={handleKeyDown} // Manejo de teclas
      />
      <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
        <Search className="h-4 w-4" />
      </Button>

      {/* Mostrar sugerencias solo si hay foco y opciones disponibles */}
      {focus && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 shadow-md max-h-60 overflow-y-auto rounded-md z-10">
          {suggestions.map((category, index) => (
            <div
              key={category}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${selectedIndex === index ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
              onClick={() => handleSelectSuggestion(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </form>
  )
}
