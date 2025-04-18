import { NextResponse } from "next/server"
import { transformImage } from "@/lib/replicate"
import { updateOrderStatus, getOrder } from "@/lib/orders"

export async function POST(request: Request) {
  try {
    const { orderId, imageUrl, style } = await request.json()

    if (!orderId || !imageUrl || !style) {
      return NextResponse.json({ success: false, message: "Faltan datos requeridos" }, { status: 400 })
    }

    // Verificar que la orden existe
    const order = await getOrder(orderId)
    if (!order) {
      return NextResponse.json({ success: false, message: "Orden no encontrada" }, { status: 404 })
    }

    // Actualizar el estado de la orden a "processing"
    await updateOrderStatus(orderId, "processing")

    // Iniciar la transformación de la imagen
    const result = await transformImage(imageUrl, style, orderId)

    if (!result.success) {
      await updateOrderStatus(orderId, "failed")
      return NextResponse.json({ success: false, message: result.error }, { status: 500 })
    }

    // Actualizar la orden con la URL de la imagen resultante
    await updateOrderStatus(orderId, "completed", result.resultUrl)

    return NextResponse.json({
      success: true,
      message: "Transformación completada con éxito",
      resultUrl: result.resultUrl,
    })
  } catch (error) {
    console.error("Error al procesar la transformación:", error)
    return NextResponse.json({ success: false, message: "Error al procesar la solicitud" }, { status: 500 })
  }
}
