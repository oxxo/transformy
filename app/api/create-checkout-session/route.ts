import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { getURL } from "@/lib/utils"

export async function POST(request: Request) {
  try {
    const { productId, price, style, addRushDelivery, addFrame, addHighRes, email } = await request.json()

    // Validar los datos recibidos
    if (!productId || !price || !style) {
      return NextResponse.json({ success: false, message: "Faltan datos requeridos" }, { status: 400 })
    }

    // Crear los metadatos para la orden
    const metadata = {
      productId,
      style,
      addRushDelivery: addRushDelivery ? "true" : "false",
      addFrame: addFrame ? "true" : "false",
      addHighRes: addHighRes ? "true" : "false",
    }

    // Crear los line items para la sesión de checkout
    const lineItems = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `Ilustración Digital - Estilo ${style}`,
            description: `Transformación de foto a ilustración en estilo ${style}`,
            metadata,
          },
          unit_amount: Math.round(price * 100), // Stripe usa centavos
        },
        quantity: 1,
      },
    ]

    // Crear la sesión de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${getURL()}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${getURL()}/cancel`,
      customer_email: email || undefined,
      metadata,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "MX", "ES", "AR"],
      },
    })

    return NextResponse.json({
      success: true,
      url: session.url,
      sessionId: session.id,
    })
  } catch (error) {
    console.error("Error al crear sesión de checkout:", error)
    return NextResponse.json({ success: false, message: "Error al procesar la solicitud" }, { status: 500 })
  }
}
