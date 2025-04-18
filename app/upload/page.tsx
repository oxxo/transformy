"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Upload, ImagePlus, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const styles = [
  { id: "minimalist", name: "Minimalista", image: "/minimalist-transformation.png" },
  { id: "anime", name: "Anime", image: "/anime-transformation.png" },
  { id: "vibrant", name: "Vibrante", image: "/vibrant-city-street.png" },
  { id: "whimsical", name: "Fantástico", image: "/whimsical-forest-path.png" },
]

export default function UploadPage() {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [selectedStyle, setSelectedStyle] = useState("minimalist")
  const [instructions, setInstructions] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      return
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Por favor selecciona un archivo de imagen válido")
      return
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("El archivo es demasiado grande. El tamaño máximo es 10MB")
      return
    }

    setSelectedFile(file)
    setError(null)

    // Create preview URL
    const reader = new FileReader()
    reader.onload = () => {
      setPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedFile) {
      setError("Por favor selecciona una imagen para transformar")
      return
    }

    setUploading(true)
    setError(null)

    try {
      // Create form data
      const formData = new FormData()
      formData.append("file", selectedFile)
      formData.append("style", selectedStyle)
      formData.append("instructions", instructions)

      // Upload file to server
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Error al subir la imagen")
      }

      // Redirect to processing page
      router.push(`/processing/${data.orderId}`)
    } catch (err) {
      console.error("Error uploading image:", err)
      setError("Error al subir la imagen. Por favor intenta de nuevo.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="container max-w-4xl py-12">
      <Card>
        <CardHeader>
          <CardTitle>Sube tu foto</CardTitle>
          <CardDescription>Selecciona una imagen para transformar en una ilustración digital</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-4">
              <Label>1. Sube tu foto</Label>
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center ${
                  previewUrl ? "border-primary" : "border-gray-300 hover:border-primary"
                } transition-colors cursor-pointer`}
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />

                {previewUrl ? (
                  <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64 mb-4">
                      <Image
                        src={previewUrl || "/placeholder.svg"}
                        alt="Vista previa"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">Haz clic para cambiar la imagen</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <ImagePlus className="h-12 w-12 text-muted-foreground mb-2" />
                    <p className="text-lg font-medium">Haz clic para seleccionar una imagen</p>
                    <p className="text-sm text-muted-foreground">O arrastra y suelta aquí</p>
                    <p className="text-xs text-muted-foreground mt-2">PNG, JPG o JPEG (máx. 10MB)</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <Label>2. Selecciona un estilo</Label>
              <RadioGroup
                value={selectedStyle}
                onValueChange={setSelectedStyle}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {styles.map((style) => (
                  <div key={style.id} className="relative">
                    <RadioGroupItem value={style.id} id={style.id} className="peer sr-only" />
                    <Label
                      htmlFor={style.id}
                      className="flex flex-col items-center space-y-2 rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      <div className="relative w-full aspect-square rounded-md overflow-hidden">
                        <Image src={style.image || "/placeholder.svg"} alt={style.name} fill className="object-cover" />
                      </div>
                      <span>{style.name}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="instructions">3. Instrucciones adicionales (opcional)</Label>
              <Textarea
                id="instructions"
                placeholder="Describe cualquier detalle específico que quieras para tu ilustración..."
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} disabled={!selectedFile || uploading} className="w-full">
            {uploading ? (
              "Subiendo..."
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Subir y transformar
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
