"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { CheckCircle, ChevronRight, CreditCard, ImageIcon, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "@/lib/utils"

const STYLES = [
  { id: "minimalist", name: "Minimalista", price: 1499 },
  { id: "anime", name: "Anime", price: 1999 },
  { id: "vibrant", name: "Vibrante", price: 1799 },
]

export default function CheckoutPage() {
  const router = useRouter()
  const [selectedStyle, setSelectedStyle] = useState(STYLES[0])
  const [email, setEmail] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCvc, setCardCvc] = useState("")
  const [couponCode, setCouponCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setUploadedImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    const formattedValue = value
      .replace(/(\d{4})/g, "$1 ")
      .trim()
      .slice(0, 19)
    setCardNumber(formattedValue)
  }

  const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 2) {
      setCardExpiry(value)
    } else {
      setCardExpiry(`${value.slice(0, 2)}/${value.slice(2, 4)}`)
    }
  }

  const handleApplyCoupon = () => {
    setIsApplyingCoupon(true)
    // Simulate API call
    setTimeout(() => {
      if (couponCode.toLowerCase() === "promo10") {
        setDiscount(10)
      } else if (couponCode.toLowerCase() === "promo20") {
        setDiscount(20)
      } else {
        setDiscount(0)
      }
      setIsApplyingCoupon(false)
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!uploadedImage) {
      alert("Por favor sube una imagen para transformar")
      return
    }

    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      router.push("/success?orderId=123456")
    }, 2000)
  }

  const subtotal = selectedStyle.price
  const discountAmount = Math.round(subtotal * (discount / 100))
  const total = subtotal - discountAmount

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Finalizar Compra</h1>
        <p className="text-muted-foreground">Completa tu pedido para transformar tu foto</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon size={18} />
                  <span>Sube tu foto</span>
                </CardTitle>
                <CardDescription>Sube la imagen que quieres transformar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    <label htmlFor="image-upload" className="cursor-pointer block">
                      {imagePreview ? (
                        <div className="relative w-full h-48">
                          <Image
                            src={imagePreview || "/placeholder.svg"}
                            alt="Preview"
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="py-8">
                          <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                          <p className="mt-2 text-sm text-muted-foreground">Haz clic para seleccionar una imagen</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard size={18} />
                  <span>Información de pago</span>
                </CardTitle>
                <CardDescription>Ingresa los datos de tu tarjeta para completar la compra</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="card-number">Número de tarjeta</Label>
                    <Input
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      required
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      maxLength={19}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expiry">Fecha de expiración</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        required
                        value={cardExpiry}
                        onChange={handleCardExpiryChange}
                        maxLength={5}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input
                        id="cvc"
                        placeholder="123"
                        required
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, "").slice(0, 3))}
                        maxLength={3}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="coupon">Código de descuento (opcional)</Label>
                    <div className="flex gap-2">
                      <Input
                        id="coupon"
                        placeholder="PROMO10"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleApplyCoupon}
                        disabled={isApplyingCoupon || !couponCode}
                      >
                        {isApplyingCoupon ? <Loader2 className="h-4 w-4 animate-spin" /> : "Aplicar"}
                      </Button>
                    </div>
                    {discount > 0 && (
                      <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                        <CheckCircle className="h-4 w-4" />
                        <span>Descuento de {discount}% aplicado</span>
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isProcessing || !uploadedImage}>
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      Completar compra
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Resumen del pedido</CardTitle>
              <CardDescription>Detalles de tu transformación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                    <Image
                      src={`/${selectedStyle.id}-transformation.png`}
                      alt={selectedStyle.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Transformación {selectedStyle.name}</h3>
                    <p className="text-sm text-muted-foreground">Transformación digital de tu foto</p>
                  </div>
                  <div className="font-medium">{formatCurrency(selectedStyle.price)}</div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Descuento ({discount}%)</span>
                      <span className="text-green-600">-{formatCurrency(discountAmount)}</span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Entrega digital en 24-48 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Garantía de satisfacción</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Soporte personalizado</span>
              </div>
            </CardFooter>
          </Card>

          <div className="mt-6">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-medium mb-2">Elige un estilo</h3>
              <div className="grid gap-3">
                {STYLES.map((style) => (
                  <div
                    key={style.id}
                    className={`flex items-center gap-3 rounded-md border p-3 cursor-pointer transition-colors ${
                      selectedStyle.id === style.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedStyle(style)}
                  >
                    <div className="relative h-12 w-12 overflow-hidden rounded-md">
                      <Image src={`/${style.id}-transformation.png`} alt={style.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{style.name}</h4>
                      <p className="text-xs text-muted-foreground">Transformación estilo {style.name.toLowerCase()}</p>
                    </div>
                    <div className="font-medium">{formatCurrency(style.price)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
