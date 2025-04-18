"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronRight, Check, AlertCircle, ArrowLeft, Camera } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import MainLayout from "../components/main-layout"
import Link from "next/link"

export default function CrearIlustracion() {
  const [step, setStep] = useState(1)
  const [photo, setPhoto] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [selectedStyle, setSelectedStyle] = useState("anime")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)
  const [addRushDelivery, setAddRushDelivery] = useState(false)
  const [totalPrice, setTotalPrice] = useState(5.99)

  const wizardRef = useRef<HTMLDivElement>(null)

  // Estilos disponibles - Reducidos a solo 3 para MVP
  const styles = [
    {
      id: "anime",
      name: "Anime Style",
      icon: "🎭",
      description: "Vibrant colors and expressive character aesthetics",
      price: 5.99,
      available: true,
      background: "/vibrant-city-street.png",
      gradient: "from-blue-500 to-cyan-400",
      category: "anime",
      popular: true,
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
    },
  ]

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
        }, 1500)
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
        }, 1500)
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

  const getSelectedStyleName = () => {
    const style = styles.find((s) => s.id === selectedStyle)
    return style ? style.name : "Anime Style"
  }

  const getSelectedStylePrice = () => {
    const style = styles.find((s) => s.id === selectedStyle)
    return style ? style.price : 5.99
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar el pago
    // Por ahora, simplemente redirigimos a una página de éxito simulada
    window.location.href = "/success?demo=true"
  }

  return (
    <MainLayout>
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-violet-600 hover:text-violet-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </div>

        <div ref={wizardRef} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-10">
          {/* Pasos del wizard */}
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6">
            <div className="flex justify-between mb-0 px-4 md:px-10">
              {[1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center relative">
                  <div
                    className={cn(
                      "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-medium shadow-md transition-all duration-300",
                      step > i
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white"
                        : step === i
                          ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white ring-4 ring-violet-100"
                          : "bg-gray-100 text-gray-500",
                    )}
                  >
                    {step > i ? <Check className="w-5 h-5" /> : i}
                  </div>
                  <span
                    className={cn(
                      "mt-2 font-medium text-xs md:text-sm",
                      step === i ? "text-violet-600" : "text-gray-500",
                    )}
                  >
                    {i === 1 ? "Subir foto y elegir estilo" : "Pago"}
                  </span>

                  {i < 2 && (
                    <div
                      className={cn(
                        "absolute top-5 md:top-6 left-[2.5rem] md:left-[3rem] w-[calc(100%-2.5rem)] md:w-[calc(100%-3rem)] h-0.5",
                        step > i ? "bg-gradient-to-r from-violet-600 to-purple-600" : "bg-gray-200",
                      )}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contenido del paso actual */}
          <div className="p-6">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center">Sube tu foto y elige un estilo</h2>
                <p className="text-center text-gray-600">
                  Selecciona una foto clara y el estilo que más te guste para tu ilustración
                </p>

                <div
                  className={cn(
                    "border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300",
                    isUploading ? "border-violet-500 bg-violet-50" : "border-gray-200",
                    photoPreview ? "p-4" : "p-8 md:p-12",
                  )}
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
                          onClick={() => {
                            setPhoto(null)
                            setPhotoPreview(null)
                            setShowPreview(false)
                          }}
                          aria-label="Eliminar foto"
                        >
                          ×
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500" id="photo-preview-description">
                        ¡Excelente elección! Esta foto funcionará perfectamente.
                      </p>

                      {/* Selección de estilo integrada en el paso 1 */}
                      <div className="mt-6">
                        <h3 className="font-medium mb-3" id="style-selection-title">
                          Elige un estilo para tu ilustración:
                        </h3>
                        <div
                          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                          role="radiogroup"
                          aria-labelledby="style-selection-title"
                        >
                          {styles.map((style) => (
                            <div
                              key={style.id}
                              className={cn(
                                "border rounded-lg p-3 cursor-pointer transition-all",
                                selectedStyle === style.id
                                  ? "border-violet-500 bg-violet-50 ring-2 ring-violet-200"
                                  : "border-gray-200 hover:border-violet-300",
                              )}
                              onClick={() => setSelectedStyle(style.id)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault()
                                  setSelectedStyle(style.id)
                                }
                              }}
                              role="radio"
                              aria-checked={selectedStyle === style.id}
                              tabIndex={0}
                              aria-label={`Estilo ${style.name} por ${style.price}`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-xl" aria-hidden="true">
                                  {style.icon}
                                </span>
                                <div>
                                  <p className="font-medium">{style.name}</p>
                                  <p className="text-xs text-gray-500">${style.price}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Opciones simplificadas */}
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                          <div className="flex items-center space-x-3">
                            <Switch
                              id="add-rush"
                              checked={addRushDelivery}
                              onCheckedChange={setAddRushDelivery}
                              aria-describedby="rush-delivery-description"
                            />
                            <div>
                              <Label htmlFor="add-rush" className="font-medium">
                                Entrega rápida
                              </Label>
                              <p className="text-xs text-gray-500" id="rush-delivery-description">
                                Recibe tu ilustración en 3-5 minutos
                              </p>
                            </div>
                          </div>
                          <span className="text-sm font-bold text-violet-600">+$3.99</span>
                        </div>
                      </div>
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
                        <label
                          htmlFor="photo-upload"
                          className="text-violet-600 font-medium cursor-pointer hover:underline"
                        >
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

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => (window.location.href = "/")}>
                    Cancelar
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={!photoPreview || !selectedStyle}
                    className={cn(
                      "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-full px-5 shadow-md hover:shadow-lg transition-all duration-300",
                      !photoPreview || !selectedStyle ? "opacity-50 cursor-not-allowed" : "",
                    )}
                  >
                    Siguiente <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center">Revisa tu pedido y paga</h2>
                <p className="text-center text-gray-600">
                  Verifica los detalles de tu ilustración y completa el pago de forma segura
                </p>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">Resumen del pedido</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span>Estilo:</span>
                    <span className="font-medium">{getSelectedStyleName()}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span>Precio del estilo:</span>
                    <span className="font-medium">${getSelectedStylePrice()}</span>
                  </div>
                  {addRushDelivery && (
                    <div className="flex items-center justify-between mb-2">
                      <span>Entrega rápida:</span>
                      <span className="font-medium">+$3.99</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-4 mt-4 flex items-center justify-between font-bold">
                    <span>Total:</span>
                    <span>${(getSelectedStylePrice() + (addRushDelivery ? 3.99 : 0)).toFixed(2)}</span>
                  </div>
                </div>

                {/* Formulario de pago simplificado */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="rounded-lg p-3 border-gray-200 focus:border-violet-300 focus:ring-violet-200"
                    />
                    <p className="text-xs text-gray-500">Recibirás tu ilustración en este correo</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card">Número de tarjeta</Label>
                    <Input
                      id="card"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="rounded-lg p-3 border-gray-200 focus:border-violet-300 focus:ring-violet-200"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Fecha de expiración</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/AA"
                        required
                        className="rounded-lg p-3 border-gray-200 focus:border-violet-300 focus:ring-violet-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input
                        id="cvc"
                        placeholder="123"
                        required
                        className="rounded-lg p-3 border-gray-200 focus:border-violet-300 focus:ring-violet-200"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={prevStep} className="rounded-full px-5">
                      Volver
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Pagar ahora
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
