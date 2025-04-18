import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TransformationExamples() {
  const examples = [
    {
      id: 1,
      style: "Anime",
      before: "/original-photo.png",
      after: "/anime-transformation.png",
    },
    {
      id: 2,
      style: "Minimalist",
      before: "/original-photo.png",
      after: "/minimalist-transformation.png",
    },
    {
      id: 3,
      style: "Vibrant",
      before: "/original-photo.png",
      after: "/vibrant-discount-promo.png",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Ejemplos de transformaciones</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Mira cómo transformamos fotos normales en increíbles obras de arte digital
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example) => (
          <Card key={example.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={example.before || "/placeholder.svg"}
                      alt={`Foto original para estilo ${example.style}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <span className="text-white font-medium text-sm px-2 py-1 bg-black/50 rounded">Original</span>
                    </div>
                  </div>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={example.after || "/placeholder.svg"}
                      alt={`Transformación en estilo ${example.style}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <span className="text-white font-medium text-sm px-2 py-1 bg-black/50 rounded">
                        {example.style}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-lg">
                  <ArrowRight className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium">Transformación estilo {example.style}</h3>
                <p className="text-sm text-gray-500">Transformación digital profesional</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
