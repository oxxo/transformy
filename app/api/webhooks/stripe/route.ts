import { NextResponse } from "next/server"
import { headers } from "next/headers"
import stripe from "@/lib/stripe"
import { createOrder, processOrder } from "@/lib/orders"

export async function POST(request: Request) {
  const body = await request.text()
  const signature = headers().get("stripe-signature") as string

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET as string)
  } catch (error: any) {
    console.error(`Webhook Error: ${error.message}`)
    return NextResponse.json({ success: false, message: `Webhook Error: ${error.message}` }, { status: 400 })
  }

  // Manejar diferentes tipos de eventos
  try {
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object

        // Crear una nueva orden
        const order = await createOrder(session.id, session)

        // Procesar la orden (en un entorno de producción, esto debería hacerse en un worker)
        processOrder(session.id).catch((error) => {
          console.error(`Error processing order ${session.id}:`, error)
        })

        console.log(`Order ${session.id} created and processing started`)
        break

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`)
        break

      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error(`Error processing webhook: ${error}`)
    return NextResponse.json({ success: false, message: "Error processing webhook" }, { status: 500 })
  }
}

// Configuración para que Next.js no analice el cuerpo de la solicitud
export const config = {
  api: {
    bodyParser: false,
  },
}
