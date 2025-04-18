import { NextResponse } from "next/server"
import Stripe from "stripe"
import { stripe } from "@/lib/stripe"

export async function POST(request: Request) {
  try {
    const { paymentMethodId, email, productId, amount, couponCode } = await request.json()

    if (!paymentMethodId || !email || !productId || !amount) {
      return NextResponse.json(
        {
          error: "Missing required parameters",
        },
        { status: 400 },
      )
    }

    // Create a customer
    const customer = await stripe.customers.create({
      email,
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    })

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: "usd",
      customer: customer.id,
      payment_method: paymentMethodId,
      confirm: true,
      description: `Purchase of product ${productId}${couponCode ? ` with coupon ${couponCode}` : ""}`,
      metadata: {
        productId,
        customerEmail: email,
        couponCode: couponCode || "none",
      },
      return_url: `${process.env.DOMAIN}/success`,
    })

    return NextResponse.json({
      success: true,
      paymentIntentId: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error("Error creating payment intent:", error)
    let errorMessage = "Error processing payment"

    if (error instanceof Stripe.errors.StripeError) {
      errorMessage = error.message
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
