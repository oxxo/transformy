"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface ProcessingPageProps {
  params: {
    id: string
  }
}

export default function ProcessingPage({ params }: ProcessingPageProps) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState("Iniciando procesamiento...")

  useEffect(() => {
    const processTransformation = async () => {
      try {
        // Obtener la información de la orden
        const orderResponse = await fetch(`/api/orders/get-order?id=${params.id}`)
        if (!orderResponse.ok) throw new Error("No se pudo obtener la información de la orden")

        const orderData = await orderResponse.json()

        // Simular los pasos iniciales
        setProgress(10)
        setStatus("Analizando imagen...")
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setProgress(25)
        setStatus("Preparando transformación...")
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Iniciar el proceso real de transformación
        setProgress(40)
        setStatus("Aplicando estilo...")

        const response = await fetch("/api/transformations/process", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId: params.id,
            imageUrl: orderData.imageUrl || "/original-photo.png", // Usar una imagen de ejemplo si no hay URL
            style: orderData.style,
          }),
        })

        if (!response.ok) {
          throw new Error("Error al procesar la transformación")
        }

        // Simular los pasos finales
        setProgress(80)
        setStatus("Optimizando resultado...")
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setProgress(95)
        setStatus("Finalizando...")
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setProgress(100)
        setStatus("¡Transformación completada!")

        // Redirigir a la página de resultado
        setTimeout(() => {
          router.push(`/result/${params.id}`)
        }, 1500)
      } catch (error) {
        console.error("Error en el procesamiento:", error)
        setStatus("Error en el procesamiento. Intentando nuevamente...")

        // Reintentar después de un tiempo
        setTimeout(() => {
          processTransformation()
        }, 5000)
      }
    }

    processTransformation()
  }, [params.id, router])

  return (
    <div className="container max-w-2xl py-12">
      <Card>
        <CardHeader>
          <CardTitle>Procesando tu imagen</CardTitle>
          <CardDescription>Estamos transformando tu foto en una ilustración digital</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
            <p className="text-lg font-medium">{status}</p>
          </div>

          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-right text-muted-foreground">{progress}%</p>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Este proceso puede tomar unos minutos. No cierres esta ventana.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
