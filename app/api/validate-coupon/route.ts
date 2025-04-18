import { NextResponse } from "next/server"

// In a real application, this would be stored in a database
const validCoupons = [
  { code: "PROMO10", discount: 10 },
  { code: "WELCOME20", discount: 20 },
  { code: "SPECIAL50", discount: 50 },
]

export async function POST(request: Request) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json({ valid: false, message: "No coupon code provided" }, { status: 400 })
    }

    const coupon = validCoupons.find((c) => c.code.toLowerCase() === code.toLowerCase())

    if (coupon) {
      return NextResponse.json({
        valid: true,
        discount: coupon.discount,
        message: `Coupon applied: ${coupon.discount}% discount`,
      })
    } else {
      return NextResponse.json({
        valid: false,
        message: "Invalid coupon code",
      })
    }
  } catch (error) {
    console.error("Error validating coupon:", error)
    return NextResponse.json(
      {
        valid: false,
        message: "Error processing coupon",
      },
      { status: 500 },
    )
  }
}
