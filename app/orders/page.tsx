"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Loader2, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"

interface Order {
  id: string
  status: "processing" | "completed" | "cancelled"
  createdAt: string
  style: string
  amount: number
  imageUrl?: string
  transformedImageUrl?: string
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    // const fetchOrders = async () => {
    //   const response = await fetch('/api/orders')
    //   const data = await response.json()
    //   setOrders(data)
    //   setLoading(false)
    // }

    // For demo purposes, we'll simulate an API response
    setTimeout(() => {
      setOrders([
        {
          id: "123456",
          status: "completed",
          createdAt: new Date().toISOString(),
          style: "Minimalista",
          amount: 1499,
          imageUrl: "/original-photo.png",
          transformedImageUrl: "/minimalist-transformation.png",
        },
        {
          id: "123457",
          status: "processing",
          createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          style: "Anime",
          amount: 1999,
          imageUrl: "/original-photo.png",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es", {
      day: "numeric",
      month: "long",
      year: "numeric",
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

  if (loading) {
    return (
      <div className="container mx-auto py-20 flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-lg">Cargando tus pedidos...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Mis pedidos</h1>
          <p className="text-muted-foreground">Gestiona y revisa tus transformaciones digitales</p>
        </div>
        <Button asChild>
          <Link href="/">
            <Plus className="mr-2 h-4 w-4" />
            Nueva transformación
          </Link>
        </Button>
      </div>

      {orders.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-4">
              <div className="rounded-full bg-muted p-6">
                <Image
                  src="/minimalist-transformation.png"
                  alt="No orders"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold">No tienes pedidos</h3>
              <p className="text-muted-foreground">Comienza transformando tu primera foto en una ilustración digital</p>
              <Button asChild>
                <Link href="/">Crear mi primera transformación</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-[1fr_200px_120px_auto] md:items-center md:gap-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                      {order.transformedImageUrl ? (
                        <Image
                          src={order.transformedImageUrl || "/placeholder.svg"}
                          alt={`Transformación ${order.style}`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted/50">
                          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">Transformación {order.style}</h3>
                      <p className="text-sm text-muted-foreground">Pedido #{order.id}</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Fecha</p>
                    <p className="text-muted-foreground">{formatDate(order.createdAt)}</p>
                  </div>
                  <div>{getStatusBadge(order.status)}</div>
                  <div className="flex items-center justify-between md:justify-end gap-4">
                    <div className="font-medium">{formatCurrency(order.amount)}</div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/orders/${order.id}`}>Ver detalles</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
