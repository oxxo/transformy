import { NextResponse } from "next/server"
import { uploadImage } from "@/lib/blob"
import { updateOrderImage } from "@/lib/orders"

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const orderId = formData.get("orderId") as string

    if (!file) {
      return NextResponse.json({ success: false, message: "No se proporcionó ningún archivo" }, { status: 400 })
    }

    if (!orderId) {
      return NextResponse.json({ success: false, message: "No se proporcionó ID de orden" }, { status: 400 })
    }

    // Validar el tipo de archivo
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ success: false, message: "El archivo debe ser una imagen" }, { status: 400 })
    }

    // Validar el tamaño del archivo (máximo 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: "El archivo es demasiado grande (máximo 10MB)" },
        { status: 400 },
      )
    }

    // Convertir el archivo a un buffer
    const buffer = Buffer.from(await file.arrayBuffer())

    // Subir la imagen a Vercel Blob
    const imageUrl = await uploadImage(buffer, file.name, file.type)

    // Si hay un orderId, actualizar la orden con la URL de la imagen
    if (orderId) {
      await updateOrderImage(orderId, imageUrl)
    }

    return NextResponse.json({ success: true, imageUrl })
  } catch (error) {
    console.error("Error al subir la imagen:", error)
    return NextResponse.json({ success: false, message: "Error al procesar la imagen" }, { status: 500 })
  }
}
