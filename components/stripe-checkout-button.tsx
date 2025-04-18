"use client"

import { useState, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, CreditCard } from "lucide-react"

interface StripeCheckoutButtonProps {
  productId: string
  price: number
  style: string
  email?: string
  addRushDelivery?: boolean
  addFrame?: boolean
  addHighRes?: boolean
  text?: string
  className?: string
  icon?: ReactNode
}

export function StripeCheckoutButton({
  productId,
  price,
  style,
  email = "",
  addRushDelivery = false,
  addFrame = false,
  addHighRes = false,
  text = "Pagar ahora",
  className,
  icon,
}: StripeCheckoutButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    // Validación básica
    if (!email) {
      alert("Por favor ingresa tu email para continuar")
      return
    }

    setLoading(true)

    try {
      console.log("Iniciando checkout con:", { productId, price, style, email })

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          price,
          style,
          email,
          addRushDelivery,
          addFrame,
          addHighRes,
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || "Error al crear la sesión de checkout")
      }

      // Redirigir al usuario a la página de checkout de Stripe
      window.location.href = data.url
    } catch (error) {
      console.error("Error al iniciar el checkout:", error)
      alert("Hubo un problema al procesar tu pago. Por favor intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  const isDisabled = !email

  return (
    <Button onClick={handleCheckout} disabled={loading || isDisabled} className={className} data-stripe-checkout-button>
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Procesando...
        </>
      ) : (
        <>
          {text}
          {icon || (text.includes("Pagar") && <CreditCard className="ml-2 h-5 w-5" />)}
        </>
      )}
    </Button>
  )
}
