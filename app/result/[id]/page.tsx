"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Share2, Home } from "lucide-react"

interface ResultPageProps {
  params: {
    id: string
  }
}

interface TransformationResult {
  id: string
  originalImage: string
  transformedImage: string
  style: string
  createdAt: string
}

export default function ResultPage({ params }: ResultPageProps) {
  const router = useRouter()
  const [result, setResult] = useState<TransformationResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchResult() {
      try {
        // En un caso real, esto sería una llamada a la API para obtener los resultados
        // basados en el ID proporcionado
        const response = await fetch(`/api/transformations/${params.id}`)

        if (!response.ok) {
          throw new Error("No se pudo cargar el resultado")
        }

        const data = await response.json()
        setResult(data)
      } catch (err) {
        console.error("Error fetching result:", err)
        setError("No pudimos cargar tu transformación. Por favor intenta nuevamente.")

        // Para fines de demostración, creamos datos de ejemplo si la API falla
        setResult({
          id: params.id,
          originalImage: "/original-photo.png",
          transformedImage: "/anime-transformation.png",
          style: "Anime",
          createdAt: new Date().toISOString(),
        })
      } finally {
        setLoading(false)
      }
    }

    fetchResult()
  }, [params.id])

  const handleDownload = () => {
    // Implementación de la descarga de la imagen
    if (result) {
      const link = document.createElement("a")
      link.href = result.transformedImage
      link.download = `transformacion-${result.style.toLowerCase()}-${params.id}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleShare = () => {
    // Implementación para compartir en redes sociales
    if (navigator.share && result) {
      navigator
        .share({
          title: `Mi transformación de estilo ${result.style}`,
          text: "¡Mira mi increíble transformación de foto!",
          url: window.location.href,
        })
        .catch((err) => console.error("Error compartiendo:", err))
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("¡Enlace copiado al portapapeles!"))
        .catch((err) => console.error("Error copiando al portapapeles:", err))
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
        <div className="w-16 h-16 border-4 border-t-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-lg">Cargando tu transformación...</p>
      </div>
    )
  }

  if (error && !result) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
        <p className="text-red-500 text-lg">{error}</p>
        <Button variant="outline" className="mt-4" onClick={() => router.push("/")}>
          Volver al inicio
        </Button>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <Card className="overflow-hidden">
        <CardHeader className="bg-primary/5">
          <CardTitle className="text-center">¡Tu transformación está lista!</CardTitle>
        </CardHeader>

        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium mb-2">Foto original</h3>
              <div className="relative w-full aspect-square rounded-md overflow-hidden border">
                {result && (
                  <Image
                    src={result.originalImage || "/placeholder.svg"}
                    alt="Foto original"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium mb-2">Transformación {result?.style}</h3>
              <div className="relative w-full aspect-square rounded-md overflow-hidden border">
                {result && (
                  <Image
                    src={result.transformedImage || "/placeholder.svg"}
                    alt={`Transformación estilo ${result.style}`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              ¡Gracias por usar nuestro servicio! Puedes descargar tu imagen transformada o compartirla con tus amigos.
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center p-6 bg-primary/5">
          <Button onClick={handleDownload} className="flex-1 sm:flex-initial">
            <Download className="mr-2 h-4 w-4" /> Descargar
          </Button>
          <Button onClick={handleShare} variant="outline" className="flex-1 sm:flex-initial">
            <Share2 className="mr-2 h-4 w-4" /> Compartir
          </Button>
          <Button onClick={() => router.push("/")} variant="secondary" className="flex-1 sm:flex-initial">
            <Home className="mr-2 h-4 w-4" /> Volver al inicio
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
