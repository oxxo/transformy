"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "@/lib/utils"
import { StripeCheckoutButton } from "./stripe-checkout-button"
import { Badge } from "@/components/ui/badge"
import { Check, Camera, AlertCircle, ChevronRight, ChevronLeft, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

// Definición de tipos
interface Style {
  id: string
  name: string
  icon: string
  description: string
  price: number
  available: boolean
  background: string
  gradient: string
  category: string
  popular: boolean
  comingSoon?: boolean
  featured?: boolean
  size?: "small" | "medium" | "large"
}

export function HomeCheckout() {
  // Estados para el wizard
  const [step, setStep] = useState(1) // 1: Elegir estilo, 2: Subir foto, 3: Checkout
  const [email, setEmail] = useState("")
  const [photo, setPhoto] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  // Referencia para hacer scroll al wizard cuando cambia de paso
  const wizardRef = useRef<HTMLDivElement>(null)

  // Estilos disponibles con imágenes atractivas
  const styles: Style[] = [
    {
      id: "anime",
      name: "Anime Style",
      icon: "🎭",
      description: "Vibrant colors and expressive character aesthetics",
      price: 5.99,
      available: true,
      background: "/anime-transformation.png",
      gradient: "from-blue-500 to-cyan-400",
      category: "anime",
      popular: true,
      featured: true,
      size: "large",
    },
    {
      id: "ghibli",
      name: "Ghibli Style",
      icon: "✨",
      description: "Dreamlike landscapes with whimsical details",
      price: 6.99,
      available: true,
      background: "/forest-spirit-glade.png",
      gradient: "from-purple-500 to-pink-500",
      category: "anime",
      popular: true,
      featured: true,
      size: "large",
    },
    {
      id: "watercolor",
      name: "Watercolor Style",
      icon: "🎨",
      description: "Soft, watercolor-like aesthetics",
      price: 5.99,
      available: true,
      background: "/whimsical-forest-path.png",
      gradient: "from-teal-400 to-blue-400",
      category: "painting",
      popular: true,
      size: "medium",
    },
  ]

  // Ordenar estilos: primero disponibles, luego por tamaño (grande a pequeño), luego por popularidad
  const sortedStyles = [...styles].sort((a, b) => {
    // Primero por disponibilidad
    if (a.available && !b.available) return -1
    if (!a.available && b.available) return 1

    // Luego por tamaño
    const sizeOrder = { large: 0, medium: 1, small: 2 }
    if (sizeOrder[a.size as keyof typeof sizeOrder] < sizeOrder[b.size as keyof typeof sizeOrder]) return -1
    if (sizeOrder[a.size as keyof typeof sizeOrder] > sizeOrder[b.size as keyof typeof sizeOrder]) return 1

    // Finalmente por popularidad
    if (a.popular && !b.popular) return -1
    if (!a.popular && b.popular) return 1

    return 0
  })

  const [selectedStyle, setSelectedStyle] = useState(sortedStyles[0])

  // Manejadores para la carga de fotos
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null)
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]

      // Validación básica
      if (file.size > 5 * 1024 * 1024) {
        setUploadError("La imagen es demasiado grande. El tamaño máximo es 5MB.")
        return
      }

      if (!file.type.startsWith("image/")) {
        setUploadError("Por favor sube una imagen válida (JPG, PNG).")
        return
      }

      setPhoto(file)
      const reader = new FileReader()
      reader.onload = (event) => {
        setPhotoPreview(event.target?.result as string)
        // Mostrar la previsualización después de un breve retraso
        setTimeout(() => {
          setShowPreview(true)
          // Anunciar para lectores de pantalla que la imagen se ha cargado correctamente
          const statusElement = document.createElement("div")
          statusElement.setAttribute("aria-live", "polite")
          statusElement.setAttribute("role", "status")
          statusElement.classList.add("sr-only")
          statusElement.textContent = "Imagen cargada correctamente. Ya puedes continuar con el proceso."
          document.body.appendChild(statusElement)
          setTimeout(() => document.body.removeChild(statusElement), 3000)
        }, 500)
      }
      reader.onerror = () => {
        setUploadError("Ha ocurrido un error al leer el archivo. Por favor, inténtalo de nuevo.")
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsUploading(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]

      // Validación básica
      if (file.size > 5 * 1024 * 1024) {
        setUploadError("La imagen es demasiado grande. El tamaño máximo es 5MB.")
        return
      }

      if (!file.type.startsWith("image/")) {
        setUploadError("Por favor sube una imagen válida (JPG, PNG).")
        return
      }

      setPhoto(file)
      const reader = new FileReader()
      reader.onload = (event) => {
        setPhotoPreview(event.target?.result as string)
        // Mostrar la previsualización después de un breve retraso
        setTimeout(() => {
          setShowPreview(true)
          // Anunciar para lectores de pantalla que la imagen se ha cargado correctamente
          const statusElement = document.createElement("div")
          statusElement.setAttribute("aria-live", "polite")
          statusElement.setAttribute("role", "status")
          statusElement.classList.add("sr-only")
          statusElement.textContent = "Imagen arrastrada y cargada correctamente. Ya puedes continuar con el proceso."
          document.body.appendChild(statusElement)
          setTimeout(() => document.body.removeChild(statusElement), 3000)
        }, 500)
      }
      reader.onerror = () => {
        setUploadError("Ha ocurrido un error al leer el archivo. Por favor, inténtalo de nuevo.")
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsUploading(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsUploading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Permitir activar el área de carga con Enter o Space
    if ((e.key === "Enter" || e.key === " ") && !photoPreview) {
      e.preventDefault()
      const fileInput = document.getElementById("photo-upload") as HTMLInputElement
      if (fileInput) {
        fileInput.click()
      }
    }
  }

  // Navegación entre pasos
  const nextStep = () => {
    setStep(step + 1)
    // Scroll al inicio del wizard
    if (wizardRef.current) {
      wizardRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const prevStep = () => {
    setStep(step - 1)
    // Scroll al inicio del wizard
    if (wizardRef.current) {
      wizardRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Función para reiniciar la carga de foto
  const resetPhoto = () => {
    setPhoto(null)
    setPhotoPreview(null)
    setShowPreview(false)
    setUploadError(null)
  }

  return (
    <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6 md:p-10" ref={wizardRef}>
      {/* Indicador de pasos */}
      <div className="flex justify-between mb-8 px-4 md:px-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center relative">
            <div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-medium shadow-md transition-all duration-300 ${
                step > i
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white"
                  : step === i
                    ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white ring-4 ring-violet-100"
                    : "bg-gray-100 text-gray-500"
              }`}
            >
              {step > i ? <Check className="w-5 h-5" /> : i}
            </div>
            <span className={`mt-2 font-medium text-xs md:text-sm ${step === i ? "text-violet-600" : "text-gray-500"}`}>
              {i === 1 ? "Elegir estilo" : i === 2 ? "Subir foto" : "Pago"}
            </span>

            {i < 3 && (
              <div
                className={`absolute top-5 md:top-6 left-[2.5rem] md:left-[3rem] w-[calc(100%-2.5rem)] md:w-[calc(100%-3rem)] h-0.5 ${
                  step > i ? "bg-gradient-to-r from-violet-600 to-purple-600" : "bg-gray-200"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          {step === 1 ? "Elige un estilo" : step === 2 ? "Sube tu foto" : "Completa tu pedido"}
        </h2>
        <p className="text-gray-600 mt-2">
          {step === 1
            ? "Selecciona el estilo que más te guste para tu ilustración"
            : step === 2
              ? "Selecciona o arrastra una foto clara para transformar"
              : "Ingresa tu email y realiza el pago para recibir tu ilustración"}
        </p>
      </div>

      {/* Paso 1: Elegir estilo */}
      {step === 1 && (
        <div className="mb-8">
          {/* Grilla de estilos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {sortedStyles.map((style) => (
              <motion.div
                key={style.id}
                className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedStyle.id === style.id ? "ring-4 ring-violet-500" : ""
                }`}
                onClick={() => setSelectedStyle(style)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`relative ${style.size === "large" ? "h-72" : "h-64"}`}>
                  <Image
                    src={style.background || "/placeholder.svg"}
                    alt={style.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {style.popular && (
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white border-0 px-3 py-1.5 z-10">
                      Popular
                    </Badge>
                  )}

                  {style.featured && (
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white border-0 px-3 py-1.5 z-10">
                      Destacado
                    </Badge>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl" aria-hidden="true">
                        {style.icon}
                      </span>
                      <h3 className="font-bold text-xl text-white">{style.name}</h3>
                    </div>
                    <p className="text-sm text-gray-200 mb-4">{style.description}</p>

                    <div className="flex justify-between items-center">
                      <div
                        className={`bg-gradient-to-r text-white font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-lg ${style.gradient}`}
                      >
                        ${style.price}
                      </div>

                      {selectedStyle.id === style.id ? (
                        <div className="bg-white text-violet-700 font-medium px-4 py-2 rounded-full flex items-center gap-1">
                          <Check className="h-4 w-4" /> Seleccionado
                        </div>
                      ) : (
                        <Button variant="secondary" className="bg-white/80 backdrop-blur-sm hover:bg-white">
                          Seleccionar
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <div></div> {/* Espacio vacío para alinear el botón a la derecha */}
            <Button
              onClick={nextStep}
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-full px-5 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Siguiente <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Paso 2: Subir foto */}
      {step === 2 && (
        <div className="max-w-2xl mx-auto mb-8">
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
              isUploading ? "border-violet-500 bg-violet-50" : "border-gray-200"
            } ${photoPreview ? "p-4" : "p-8 md:p-12"}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            id="photo-upload-area"
            role="region"
            aria-labelledby="photo-upload-title"
            aria-describedby="photo-upload-description"
          >
            {photoPreview ? (
              <div className="space-y-4">
                <div className="relative mx-auto max-w-xs">
                  <img
                    src={photoPreview || "/placeholder.svg"}
                    alt="Vista previa de la foto subida"
                    className="mx-auto rounded-xl max-h-64 object-contain shadow-md"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full w-8 h-8 p-0"
                    onClick={resetPhoto}
                    aria-label="Eliminar foto"
                  >
                    ×
                  </Button>
                </div>
                <p className="text-sm text-gray-500" id="photo-preview-description">
                  ¡Excelente elección! Esta foto funcionará perfectamente.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mx-auto">
                  <Camera className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg mb-2" id="photo-upload-title">
                  Arrastra y suelta tu foto aquí
                </h3>
                <p className="text-gray-600" id="photo-upload-description">
                  o{" "}
                  <label htmlFor="photo-upload" className="text-violet-600 font-medium cursor-pointer hover:underline">
                    selecciona un archivo
                  </label>{" "}
                  desde tu ordenador
                </p>
                {uploadError && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {uploadError}
                  </div>
                )}
                <input
                  type="file"
                  id="photo-upload"
                  className="hidden"
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                  aria-describedby="photo-upload-description"
                />
              </div>
            )}
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={prevStep} className="rounded-full px-5">
              <ChevronLeft className="mr-2 h-4 w-4" /> Volver
            </Button>
            <Button
              onClick={nextStep}
              disabled={!photoPreview}
              className={`bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-full px-5 shadow-md hover:shadow-lg transition-all duration-300 ${
                !photoPreview ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Siguiente <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Paso 3: Checkout */}
      {step === 3 && (
        <div>
          {/* Formulario de checkout */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-violet-500/10 to-purple-500/10">
                <CardTitle>Completa tu pedido</CardTitle>
                <CardDescription>Ingresa tu email para recibir tu ilustración digital</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Estilo seleccionado</Label>
                  <div className="flex items-center gap-3 rounded-lg border p-3 bg-violet-50 border-violet-200">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md">
                      <Image
                        src={selectedStyle.background || "/placeholder.svg"}
                        alt={selectedStyle.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{selectedStyle.name}</h4>
                      <p className="text-xs text-gray-500">{selectedStyle.description}</p>
                    </div>
                    <div className="font-medium text-violet-600">{formatCurrency(selectedStyle.price)}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Tu foto</Label>
                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md">
                      {photoPreview && (
                        <Image
                          src={photoPreview || "/placeholder.svg"}
                          alt="Tu foto subida"
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Foto subida</h4>
                      <p className="text-xs text-gray-500">{photo?.name || "Foto seleccionada"}</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => prevStep()} className="text-xs">
                      Cambiar
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 p-6">
                <StripeCheckoutButton
                  productId={selectedStyle.id}
                  price={selectedStyle.price * 0.7} // Aplicamos el 30% de descuento
                  style={selectedStyle.name}
                  email={email}
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 h-12 text-base"
                  text="Proceder al pago"
                />
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-violet-500/10 to-purple-500/10">
                <CardTitle>Resumen del pedido</CardTitle>
                <CardDescription>Detalles de tu transformación</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-lg border">
                      <Image
                        src={selectedStyle.background || "/placeholder.svg"}
                        alt={selectedStyle.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">Transformación {selectedStyle.name}</h3>
                      <p className="text-sm text-gray-500">{selectedStyle.description}</p>
                      <p className="text-violet-600 font-medium mt-1">{formatCurrency(selectedStyle.price)}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span>{formatCurrency(selectedStyle.price)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Descuento (30%)</span>
                      <span className="text-green-600">-{formatCurrency(selectedStyle.price * 0.3)}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between font-medium text-lg pt-2">
                      <span>Total</span>
                      <span>{formatCurrency(selectedStyle.price * 0.7)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-2 text-sm text-gray-500 bg-gradient-to-r from-violet-500/10 to-purple-500/10 p-6">
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
          </div>

          {/* Botón de acción principal */}
          <div className="mt-8 text-center">
            <StripeCheckoutButton
              productId={selectedStyle.id}
              price={selectedStyle.price * 0.7} // Aplicamos el 30% de descuento
              style={selectedStyle.name}
              email={email}
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium w-auto"
              text="Pagar ahora y transformar mi foto"
              icon={<CreditCard className="ml-2 h-5 w-5" />}
            />
          </div>

          <div className="flex justify-start mt-6">
            <Button variant="outline" onClick={prevStep} className="rounded-full px-5">
              <ChevronLeft className="mr-2 h-4 w-4" /> Volver a subir foto
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
