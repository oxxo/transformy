import { NextResponse } from "next/server"
import { getOrder } from "@/lib/orders"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const orderId = searchParams.get("orderId")

    if (!orderId) {
      return NextResponse.json({ success: false, message: "Order ID is required" }, { status: 400 })
    }

    const order = await getOrder(orderId)

    if (!order) {
      return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      order,
    })
  } catch (error) {
    console.error("Error retrieving order:", error)
    return NextResponse.json({ success: false, message: "Error retrieving order" }, { status: 500 })
  }
}
