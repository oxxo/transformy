"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { TRANSFORMATION_MODELS, type TransformationStyle } from "@/lib/replicate"
import Image from "next/image"

interface StyleOption {
  id: TransformationStyle
  name: string
  description: string
  imageUrl: string
}

const STYLE_OPTIONS: StyleOption[] = [
  {
    id: "anime",
    name: "Anime",
    description: "Estilo de animación japonesa con colores vibrantes y características expresivas.",
    imageUrl: "/anime-transformation.png",
  },
  {
    id: "watercolor",
    name: "Acuarela",
    description: "Efecto artístico de pintura con texturas fluidas y colores suaves que se mezclan.",
    imageUrl: "/watercolor-style.png",
  },
  {
    id: "cartoon",
    name: "Caricatura",
    description: "Estilo animado con líneas limpias y colores brillantes, similar a las animaciones populares.",
    imageUrl: "/cartoon-style.png",
  },
  {
    id: "minimalist",
    name: "Minimalista",
    description: "Diseño limpio y simplificado con formas geométricas y paleta de colores limitada.",
    imageUrl: "/minimalist-transformation.png",
  },
  {
    id: "digital",
    name: "Arte Digital",
    description: "Ilustración digital profesional con detalles intrincados y efectos modernos.",
    imageUrl: "/digital-art-style.png",
  },
  {
    id: "portrait",
    name: "Retrato Artístico",
    description: "Estilo de retrato elegante con enfoque en las características faciales y expresión.",
    imageUrl: "/portrait-style.png",
  },
]

interface StyleSelectorProps {
  selectedStyle: TransformationStyle
  onStyleChange: (style: TransformationStyle) => void
}

export function StyleSelector({ selectedStyle, onStyleChange }: StyleSelectorProps) {
  const [hoveredStyle, setHoveredStyle] = useState<TransformationStyle | null>(null)

  return (
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-bold text-center">Selecciona un Estilo</h2>
      <p className="text-muted-foreground text-center mb-6">Elige el estilo artístico para transformar tu fotografía</p>

      <RadioGroup
        value={selectedStyle}
        onValueChange={(value) => onStyleChange(value as TransformationStyle)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {STYLE_OPTIONS.map((style) => (
          <div key={style.id} className="relative">
            <RadioGroupItem value={style.id} id={`style-${style.id}`} className="sr-only" />
            <Label
              htmlFor={`style-${style.id}`}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredStyle(style.id)}
              onMouseLeave={() => setHoveredStyle(null)}
            >
              <Card
                className={`overflow-hidden transition-all ${
                  selectedStyle === style.id
                    ? "ring-2 ring-primary border-primary"
                    : hoveredStyle === style.id
                      ? "ring-1 ring-primary/50"
                      : ""
                }`}
              >
                <div className="relative h-40 w-full">
                  <Image src={style.imageUrl || "/placeholder.svg"} alt={style.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <div className="font-medium">{style.name}</div>
                  <p className="text-sm text-muted-foreground mt-1">{style.description}</p>
                </CardContent>
              </Card>
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="mt-6 p-4 bg-muted rounded-lg">
        <h3 className="font-medium mb-2">Detalles del estilo seleccionado</h3>
        <p className="text-sm text-muted-foreground">
          {STYLE_OPTIONS.find((s) => s.id === selectedStyle)?.description ||
            "Selecciona un estilo para ver sus detalles."}
        </p>
        {selectedStyle && (
          <div className="mt-2 text-xs text-muted-foreground">
            <p>Modelo: {TRANSFORMATION_MODELS[selectedStyle].id.split("/")[0]}</p>
            <p className="mt-1">Pasos de inferencia: {TRANSFORMATION_MODELS[selectedStyle].steps}</p>
          </div>
        )}
      </div>
    </div>
  )
}
