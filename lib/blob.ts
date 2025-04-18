import { put, del, list } from "@vercel/blob"
import { nanoid } from "nanoid"

// Función para subir una imagen al blob storage
export async function uploadImage(file: Buffer | ArrayBuffer, fileName: string, contentType: string): Promise<string> {
  try {
    // Generar un nombre único para el archivo
    const uniqueFileName = `${nanoid()}-${fileName}`

    // Subir el archivo a Vercel Blob
    const { url } = await put(uniqueFileName, file, {
      contentType,
      access: "public", // Las imágenes serán accesibles públicamente
    })

    console.log(`Imagen subida exitosamente: ${url}`)
    return url
  } catch (error) {
    console.error("Error al subir la imagen a Vercel Blob:", error)
    throw new Error("No se pudo subir la imagen. Por favor intenta nuevamente.")
  }
}

// Función para eliminar una imagen del blob storage
export async function deleteImage(url: string): Promise<void> {
  try {
    await del(url)
    console.log(`Imagen eliminada exitosamente: ${url}`)
  } catch (error) {
    console.error("Error al eliminar la imagen de Vercel Blob:", error)
  }
}

// Función para listar imágenes con un prefijo específico
export async function listImages(prefix: string): Promise<string[]> {
  try {
    const { blobs } = await list({ prefix })
    return blobs.map((blob) => blob.url)
  } catch (error) {
    console.error("Error al listar imágenes de Vercel Blob:", error)
    return []
  }
}
