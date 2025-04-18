"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, CheckCircle2, CreditCard, Mail } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CheckoutFormProps {
  productId: string
  price: number
  name: string
  description: string
}

function CheckoutFormContent({ productId, price, name, description }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [couponCode, setCouponCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [cardComplete, setCardComplete] = useState(false)

  // Format card number input
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  // Format expiry date input
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")

    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2)}`
    }

    return v
  }

  // Apply coupon code
  const applyCoupon = async () => {
    if (!couponCode) return

    try {
      const response = await fetch("/api/validate-coupon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: couponCode }),
      })

      const data = await response.json()

      if (data.valid) {
        setDiscount(data.discount)
        setError(null)
      } else {
        setError("Código de cupón inválido")
        setDiscount(0)
      }
    } catch (err) {
      setError("Error al validar el cupón")
      setDiscount(0)
    }
  }

  // Calculate final price with fallback to 0
  const finalPrice = price ? price - (price * discount) / 100 : 0

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      return
    }

    if (!email) {
      setError("Por favor ingresa tu correo electrónico")
      return
    }

    setProcessing(true)
    setError(null)

    try {
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          email,
        },
      })

      if (stripeError) {
        setError(stripeError.message || "Error al procesar el pago")
        setProcessing(false)
        return
      }

      // Create payment intent on the server
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          email,
          productId,
          amount: finalPrice,
          couponCode: discount > 0 ? couponCode : null,
        }),
      })

      const paymentData = await response.json()

      if (paymentData.error) {
        setError(paymentData.error)
        setProcessing(false)
        return
      }

      // Handle successful payment
      if (paymentData.success) {
        setSuccess(true)
        setTimeout(() => {
          router.push(`/success?session_id=${paymentData.paymentIntentId}`)
        }, 2000)
      }
    } catch (err) {
      setError("Error al procesar el pago. Por favor intenta de nuevo.")
      setProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-50 text-green-800 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle>¡Pago exitoso!</AlertTitle>
          <AlertDescription>Redirigiendo a la página de confirmación...</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Información de pago</CardTitle>
            <CardDescription>Ingresa los detalles de tu tarjeta para completar la compra</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                <Mail className="h-4 w-4 inline mr-2" />
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="card">
                <CreditCard className="h-4 w-4 inline mr-2" />
                Detalles de la tarjeta
              </Label>
              <div className="border rounded-md p-3">
                <CardElement
                  id="card"
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                  onChange={(e) => setCardComplete(e.complete)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="coupon">Código de cupón (opcional)</Label>
              <div className="flex space-x-2">
                <Input
                  id="coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="DESCUENTO10"
                />
                <Button type="button" variant="outline" onClick={applyCoupon} disabled={!couponCode}>
                  Aplicar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resumen del pedido</CardTitle>
            <CardDescription>Detalles de tu compra</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">{name}</span>
              <span>${price ? price.toFixed(2) : "0.00"}</span>
            </div>

            <p className="text-sm text-muted-foreground">{description}</p>

            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Descuento ({discount}%)</span>
                <span>-${price ? ((price * discount) / 100).toFixed(2) : "0.00"}</span>
              </div>
            )}

            <Separator />

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${finalPrice ? finalPrice.toFixed(2) : "0.00"}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={processing || !stripe || !cardComplete}>
              {processing ? "Procesando..." : `Pagar $${finalPrice ? finalPrice.toFixed(2) : "0.00"}`}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </form>
  )
}

export function CheckoutForm(props: CheckoutFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutFormContent {...props} />
    </Elements>
  )
}
