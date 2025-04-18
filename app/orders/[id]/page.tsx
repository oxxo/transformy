"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "@/lib/utils"

interface OrderDetails {
  id: string
  status: "processing" | "completed" | "cancelled"
  createdAt: string
  email: string
  style: string
  amount: number
  imageUrl?: string
  transformedImageUrl?: string
}

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const [order, setOrder] = useState<OrderDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch(`/api/orders/${params.id}`)
        // const data = await response.json()

        // For demo purposes, we'll simulate an API response
        setTimeout(() => {
          setOrder({
            id: params.id,
            status: "completed",
            createdAt: new Date().toISOString(),
            email: "cliente@ejemplo.com",
            style: "Minimalista",
            amount: 1499,
            imageUrl: "/original-photo.png",
            transformedImageUrl: "/minimalist-transformation.png",
          })
          setLoading(false)
        }, 1000)
      } catch (err) {
        setError("No se pudo cargar los detalles del pedido")
        setLoading(false)
      }
    }

    fetchOrder()
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto py-20 flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-lg">Cargando detalles del pedido...</p>
      </div>
    )
  }

  if (error || !order) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="mb-6">{error || "No se encontró el pedido"}</p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Completado</span>
      case "processing":
        return <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Procesando</span>
      case "cancelled":
        return <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Cancelado</span>
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="mb-8">
        <Link href="/orders" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a mis pedidos
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Pedido #{order.id}</h1>
            <p className="text-muted-foreground">Realizado el {formatDate(order.createdAt)}</p>
          </div>
          <div>{getStatusBadge(order.status)}</div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detalles del pedido</CardTitle>
              <CardDescription>Información sobre tu transformación digital</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Transformación {order.style}</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Imagen original</p>
                      <div className="relative aspect-square w-full overflow-hidden rounded-md border">
                        {order.imageUrl && (
                          <Image
                            src={order.imageUrl || "/placeholder.svg"}
                            alt="Imagen original"
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Imagen transformada</p>
                      <div className="relative aspect-square w-full overflow-hidden rounded-md border">
                        {order.transformedImageUrl ? (
                          <Image
                            src={order.transformedImageUrl || "/placeholder.svg"}
                            alt="Imagen transformada"
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-muted/50">
                            <p className="text-sm text-muted-foreground">Procesando...</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Información del cliente</h3>
                  <dl className="grid gap-2 text-sm">
                    <div className="grid grid-cols-2 gap-1">
                      <dt className="text-muted-foreground">Email:</dt>
                      <dd>{order.email}</dd>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <dt className="text-muted-foreground">Método de entrega:</dt>
                      <dd>Digital (descarga)</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {order.status === "completed" && order.transformedImageUrl && (
                <Button className="w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar imagen transformada
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Resumen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Transformación {order.style}</span>
                  <span>{formatCurrency(order.amount)}</span>
                </div>

                <Separator />

                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>{formatCurrency(order.amount)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="rounded-md bg-muted p-4 text-sm">
                <h4 className="font-medium mb-2">Estado del pedido</h4>
                <div className="space-y-1">
                  {order.status === "processing" && (
                    <p>Tu imagen está siendo transformada por nuestros artistas digitales.</p>
                  )}
                  {order.status === "completed" && (
                    <p>¡Tu transformación está lista! Puedes descargarla desde esta página.</p>
                  )}
                  {order.status === "cancelled" && (
                    <p>Este pedido ha sido cancelado. Si tienes alguna pregunta, contáctanos.</p>
                  )}
                </div>
              </div>

              <Button variant="outline" asChild>
                <Link href="/contact">¿Necesitas ayuda?</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
