"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Actualizar la definición de tipos al inicio del archivo
type StyleCategory = "all" | "popular" | "anime" | "painting" | "modern"

interface Style {
  id: string
  name: string
  icon: string
  description: string
  price: number
  available: boolean
  background: string
  gradient: string
  category: string
  popular: boolean
  comingSoon?: boolean
  featured?: boolean
  size?: "small" | "medium" | "large"
}

// Modificar la función StyleShowcase para ordenar los estilos correctamente
export function StyleShowcase() {
  const [activeTab, setActiveTab] = useState<StyleCategory>("all")
  const [hoveredStyle, setHoveredStyle] = useState<string | null>(null)

  // Estilos disponibles con imágenes atractivas - reorganizados para mostrar primero los disponibles
  const styles: Style[] = [
    {
      id: "anime",
      name: "Anime Style",
      icon: "🎭",
      description: "Vibrant colors and expressive character aesthetics",
      price: 5.99,
      available: true,
      background: "/anime-transformation.png",
      gradient: "from-blue-500 to-cyan-400",
      category: "anime",
      popular: true,
      featured: true, // Marcado como destacado
      size: "large", // Tamaño grande
    },
    {
      id: "ghibli",
      name: "Ghibli Style",
      icon: "✨",
      description: "Dreamlike landscapes with whimsical details",
      price: 6.99,
      available: true,
      background: "/forest-spirit-glade.png",
      gradient: "from-purple-500 to-pink-500",
      category: "anime",
      popular: true,
      featured: true, // Marcado como destacado
      size: "large", // Tamaño grande
    },
    {
      id: "watercolor",
      name: "Watercolor Style",
      icon: "🎨",
      description: "Soft, watercolor-like aesthetics",
      price: 5.99,
      available: true,
      background: "/whimsical-forest-path.png",
      gradient: "from-teal-400 to-blue-400",
      category: "painting",
      popular: true,
      size: "medium",
    },
    {
      id: "cyberpunk",
      name: "Cyberpunk Style",
      icon: "🌆",
      description: "Neon-lit urban dystopia aesthetics",
      price: 5.99,
      available: false,
      comingSoon: true,
      background: "/vibrant-city-street.png",
      gradient: "from-pink-500 to-orange-400",
      category: "modern",
      popular: false,
      size: "medium",
    },
    {
      id: "vangogh",
      name: "Van Gogh Style",
      icon: "🌻",
      description: "Post-impressionist painting style",
      price: 5.99,
      available: false,
      comingSoon: true,
      background: "/minimalist-transformation.png",
      gradient: "from-yellow-400 to-orange-500",
      category: "painting",
      popular: false,
      size: "small",
    },
    {
      id: "pixar",
      name: "Pixar Style",
      icon: "🧸",
      description: "3D animation style",
      price: 5.99,
      available: false,
      comingSoon: true,
      background: "/minimalist-testimonial.png",
      gradient: "from-blue-400 to-indigo-500",
      category: "modern",
      popular: false,
      size: "small",
    },
  ]

  // Ordenar estilos: primero disponibles, luego por tamaño (grande a pequeño), luego por popularidad
  const sortedStyles = [...styles].sort((a, b) => {
    // Primero por disponibilidad
    if (a.available && !b.available) return -1
    if (!a.available && b.available) return 1

    // Luego por tamaño
    const sizeOrder = { large: 0, medium: 1, small: 2 }
    if (sizeOrder[a.size as keyof typeof sizeOrder] < sizeOrder[b.size as keyof typeof sizeOrder]) return -1
    if (sizeOrder[a.size as keyof typeof sizeOrder] > sizeOrder[b.size as keyof typeof sizeOrder]) return 1

    // Finalmente por popularidad
    if (a.popular && !b.popular) return -1
    if (!a.popular && b.popular) return 1

    return 0
  })

  const filteredStyles =
    activeTab === "all"
      ? sortedStyles
      : sortedStyles.filter((style) => (activeTab === "popular" ? style.popular : style.category === activeTab))

  return (
    <div className="space-y-6">
      <div className="text-center mb-6 pt-6">
        <h2 className="text-2xl md:text-3xl font-bold">Estilos disponibles</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Elige entre nuestros estilos artísticos profesionales creados por expertos
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-6" onValueChange={(value) => setActiveTab(value as StyleCategory)}>
        <TabsList className="mx-auto">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="popular">Populares</TabsTrigger>
          <TabsTrigger value="anime">Anime</TabsTrigger>
          <TabsTrigger value="painting">Pintura</TabsTrigger>
          <TabsTrigger value="modern">Moderno</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {filteredStyles.map((style) => (
          <motion.div
            key={style.id}
            className={cn(
              "relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
              !style.available ? "opacity-90" : "",
              style.size === "large" ? "md:col-span-2" : "",
              style.featured ? "ring-2 ring-violet-400 ring-offset-2" : "",
            )}
            onMouseEnter={() => setHoveredStyle(style.id)}
            onMouseLeave={() => setHoveredStyle(null)}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={cn("relative w-full", style.size === "large" ? "h-80" : "h-64")}>
              <Image
                src={style.background || "/placeholder.svg"}
                alt={style.name}
                fill
                className="object-cover transition-transform duration-500"
                style={{
                  transform: hoveredStyle === style.id ? "scale(1.05)" : "scale(1)",
                }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {style.comingSoon && (
                <Badge
                  variant="secondary"
                  className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 z-10"
                >
                  Coming Soon
                </Badge>
              )}

              {style.popular && style.available && (
                <Badge className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white border-0 px-3 py-1.5 z-10">
                  Popular
                </Badge>
              )}

              {style.featured && style.available && (
                <Badge className="absolute top-3 left-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white border-0 px-3 py-1.5 z-10">
                  Destacado
                </Badge>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl" aria-hidden="true">
                    {style.icon}
                  </span>
                  <h3 className="font-bold text-xl text-white">{style.name}</h3>
                </div>
                <p className="text-sm text-gray-200 mb-4">{style.description}</p>

                <div className="flex justify-between items-center">
                  <div
                    className={cn(
                      "bg-gradient-to-r text-white font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-lg",
                      `bg-gradient-to-r ${style.gradient}`,
                    )}
                  >
                    ${style.price}
                  </div>

                  {style.available ? (
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">Seleccionar</Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30"
                      disabled
                    >
                      Próximamente
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
