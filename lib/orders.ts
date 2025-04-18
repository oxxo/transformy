export interface OrderData {
  id: string
  email: string
  style: string
  addRushDelivery: boolean
  addFrame: boolean
  addHighRes: boolean
  amount: number
  status: "pending" | "processing" | "completed" | "failed"
  createdAt: Date
  updatedAt: Date
  imageUrl?: string
  resultUrl?: string
}

// Esta es una implementación simulada para almacenar órdenes
// En una implementación real, usarías una base de datos
const orders = new Map<string, OrderData>()

export async function createOrder(sessionId: string, sessionData: any): Promise<OrderData> {
  const { customer_email, metadata, amount_total } = sessionData

  // Crear una nueva orden
  const order: OrderData = {
    id: sessionId,
    email: customer_email,
    style: metadata.style,
    addRushDelivery: metadata.addRushDelivery === "true",
    addFrame: metadata.addFrame === "true",
    addHighRes: metadata.addHighRes === "true",
    amount: amount_total / 100, // Convertir de centavos a dólares
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  // Guardar la orden
  orders.set(sessionId, order)

  // En una implementación real, guardarías la orden en la base de datos
  // await db.orders.create({ data: order })

  return order
}

export async function updateOrderStatus(
  orderId: string,
  status: "pending" | "processing" | "completed" | "failed",
  resultUrl?: string,
): Promise<OrderData | null> {
  // Obtener la orden
  const order = orders.get(orderId)

  if (!order) {
    return null
  }

  // Actualizar el estado
  order.status = status
  order.updatedAt = new Date()

  if (resultUrl) {
    order.resultUrl = resultUrl
  }

  // Guardar la orden actualizada
  orders.set(orderId, order)

  // En una implementación real, actualizarías la orden en la base de datos
  // await db.orders.update({ where: { id: orderId }, data: { status, updatedAt: new Date(), resultUrl } })

  return order
}

export async function getOrder(orderId: string): Promise<OrderData | null> {
  // Obtener la orden
  const order = orders.get(orderId)

  if (!order) {
    return null
  }

  return order
}

export async function getOrdersByEmail(email: string): Promise<OrderData[]> {
  // Filtrar las órdenes por email
  const userOrders = Array.from(orders.values()).filter((order) => order.email === email)

  return userOrders
}

export async function processOrder(orderId: string): Promise<void> {
  // Actualizar el estado de la orden a "processing"
  await updateOrderStatus(orderId, "processing")

  try {
    // Obtener la orden
    const order = await getOrder(orderId)

    if (!order || !order.imageUrl) {
      throw new Error("Orden no encontrada o sin imagen")
    }

    // Llamar a nuestra API de transformación
    const response = await fetch(`${process.env.DOMAIN || "http://localhost:3000"}/api/transformations/process`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId,
        imageUrl: order.imageUrl,
        style: order.style,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Error al procesar la transformación")
    }

    const result = await response.json()

    // La API ya actualiza el estado de la orden, pero podemos enviar el email aquí
    await sendCompletionEmail(orderId)
  } catch (error) {
    console.error(`Error processing order ${orderId}:`, error)
    await updateOrderStatus(orderId, "failed")
  }
}

async function sendCompletionEmail(orderId: string): Promise<void> {
  const order = await getOrder(orderId)

  if (!order) {
    throw new Error(`Order ${orderId} not found`)
  }

  // Aquí iría la lógica para enviar un email al cliente
  console.log(`Sending completion email to ${order.email} for order ${orderId}`)
}

// Agregar una función para actualizar la URL de la imagen original
export async function updateOrderImage(orderId: string, imageUrl: string): Promise<OrderData | null> {
  // Obtener la orden
  const order = orders.get(orderId)

  if (!order) {
    return null
  }

  // Actualizar la URL de la imagen
  order.imageUrl = imageUrl
  order.updatedAt = new Date()

  // Guardar la orden actualizada
  orders.set(orderId, order)

  return order
}
