import { NextResponse } from "next/server"
import stripe from "@/lib/stripe"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get("sessionId")

    if (!sessionId) {
      return NextResponse.json({ success: false, message: "Session ID is required" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "payment_intent"],
    })

    return NextResponse.json({
      success: true,
      session,
    })
  } catch (error) {
    console.error("Error retrieving session:", error)
    return NextResponse.json({ success: false, message: "Error retrieving session" }, { status: 500 })
  }
}
