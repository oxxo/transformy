import { NextResponse } from "next/server"
import { getOrder } from "@/lib/orders"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const orderId = params.id

    if (!orderId) {
      return NextResponse.json({ success: false, message: "ID de transformación no proporcionado" }, { status: 400 })
    }

    // Obtener la orden/transformación
    const order = await getOrder(orderId)

    if (!order) {
      return NextResponse.json({ success: false, message: "Transformación no encontrada" }, { status: 404 })
    }

    // Formatear la respuesta
    return NextResponse.json({
      id: order.id,
      originalImage: order.imageUrl || "/original-photo.png", // Fallback a una imagen de ejemplo
      transformedImage: order.resultUrl || "/placeholder.svg",
      style: order.style,
      status: order.status,
      createdAt: order.createdAt.toISOString(),
    })
  } catch (error) {
    console.error("Error al obtener la transformación:", error)
    return NextResponse.json({ success: false, message: "Error al procesar la solicitud" }, { status: 500 })
  }
}
