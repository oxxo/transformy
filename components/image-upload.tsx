"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X, Check, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ImageUploadProps {
  onImageSelected: (imageUrl: string, file: File) => void
  orderId?: string
  className?: string
}

export function ImageUpload({ onImageSelected, orderId, className = "" }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const validateImage = (file: File): boolean => {
    // Verificar el tipo de archivo
    if (!file.type.startsWith("image/")) {
      setError("Por favor sube una imagen válida (JPEG, PNG, etc.)")
      return false
    }

    // Verificar el tamaño (máximo 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("La imagen es demasiado grande. El tamaño máximo es 10MB.")
      return false
    }

    return true
  }

  const processImage = async (file: File) => {
    try {
      setUploading(true)
      setError(null)

      // Crear una URL para la vista previa
      const previewUrl = URL.createObjectURL(file)
      setImagePreview(previewUrl)

      // Crear un FormData para subir la imagen
      const formData = new FormData()
      formData.append("file", file)
      if (orderId) {
        formData.append("orderId", orderId)
      }

      // Subir la imagen a nuestro endpoint
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Error al subir la imagen")
      }

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || "Error al subir la imagen")
      }

      // Llamar al callback con la URL de la imagen subida
      onImageSelected(data.imageUrl, file)
    } catch (err) {
      console.error("Error al procesar la imagen:", err)
      setError(
        err instanceof Error ? err.message : "Ocurrió un error al procesar la imagen. Por favor intenta nuevamente.",
      )
    } finally {
      setUploading(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (validateImage(file)) {
        processImage(file)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (validateImage(file)) {
        processImage(file)
      }
    }
  }

  const handleButtonClick = () => {
    inputRef.current?.click()
  }

  const handleRemoveImage = () => {
    setImagePreview(null)
    if (inputRef.current) inputRef.current.value = ""
  }

  return (
    <Card
      className={`${className} ${dragActive ? "border-primary" : ""}`}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      <CardContent className="p-6">
        {imagePreview ? (
          <div className="relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-md">
              <Image src={imagePreview || "/placeholder.svg"} alt="Vista previa" fill className="object-cover" />
            </div>
            <Button
              variant="destructive"
              size="icon"
              className="absolute -right-2 -top-2 h-8 w-8 rounded-full"
              onClick={handleRemoveImage}
              disabled={uploading}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="mt-2 flex items-center justify-center">
              {uploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin text-primary" />
                  <span className="text-sm">Subiendo imagen...</span>
                </>
              ) : (
                <>
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">Imagen seleccionada</span>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 py-8">
            <div className="rounded-full bg-primary/10 p-4">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">Arrastra y suelta tu foto aquí</p>
              <p className="text-sm text-muted-foreground">O haz clic para seleccionar un archivo (JPEG, PNG, etc.)</p>
            </div>
            <Button type="button" variant="outline" onClick={handleButtonClick} disabled={uploading}>
              {uploading ? "Subiendo..." : "Seleccionar archivo"}
            </Button>
            <input
              ref={inputRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleChange}
              disabled={uploading}
            />
          </div>
        )}

        {error && (
          <div className="mt-4 flex items-center rounded-md bg-destructive/10 p-3 text-sm text-destructive">
            <AlertCircle className="mr-2 h-4 w-4" />
            {error}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
