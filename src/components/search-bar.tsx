"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-sm">
      <Input
        type="text"
        placeholder="Buscar productos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pr-10"
      />
      <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
        <Search className="h-4 w-4" />
      </Button>
    </form>
  )
}
