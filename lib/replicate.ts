import Replicate from "replicate"
import { put } from "@vercel/blob"
import { nanoid } from "nanoid"

// Inicializar el cliente de Replicate con la API key
export const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || "",
})

// Modelos disponibles para transformación con prompts mejorados
export const TRANSFORMATION_MODELS = {
  anime: {
    id: "cjwbw/anything-v3-better-vae:09a5805203f4c12da649ec1923bb7729517ca25fcac790e640eaa9ed66573b65",
    prompt:
      "masterpiece, best quality, anime style, highly detailed, vibrant colors, beautiful artwork, studio ghibli inspired, professional illustration, sharp focus, dramatic lighting, character illustration",
    negativePrompt:
      "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name",
    steps: 30,
    guidanceScale: 7.5,
  },
  watercolor: {
    id: "jagilley/controlnet-scribble:435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117",
    prompt:
      "masterpiece, best quality, watercolor painting, artistic, vibrant colors, flowing textures, detailed brushstrokes, professional illustration, traditional media, expressive, hand-painted, gallery quality artwork",
    negativePrompt:
      "lowres, distorted, blurry, bad anatomy, bad hands, cropped, worst quality, low quality, jpeg artifacts, signature, watermark, username, simple background",
    steps: 35,
    guidanceScale: 8.0,
  },
  cartoon: {
    id: "rossjillian/controlnet-hough:576a3d9b5f84cb0dc2ef6b2613b843e228c9e17f3f6307b9f81c8899a48664d9",
    prompt:
      "professional cartoon style, clean lines, vibrant colors, stylized illustration, Disney/Pixar style, appealing character design, expressive features, professional animation quality, detailed background, polished artwork",
    negativePrompt:
      "realistic, photograph, 3d render, bad anatomy, distorted, blurry, grainy, low resolution, oversaturated, text, watermark",
    steps: 30,
    guidanceScale: 7.0,
  },
  minimalist: {
    id: "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    prompt:
      "minimalist illustration, clean design, simple shapes, limited color palette, elegant composition, modern aesthetic, professional graphic design, negative space, geometric elements, flat colors, vector art style",
    negativePrompt:
      "busy, cluttered, detailed, photorealistic, noisy, grainy, text, watermark, signature, complex patterns, distorted, low quality",
    steps: 40,
    guidanceScale: 7.0,
  },
  digital: {
    id: "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    prompt:
      "professional digital art, high resolution, detailed, vibrant colors, professional illustration, concept art quality, sharp focus, intricate details, fantasy art, cinematic lighting, trending on artstation, 4k resolution, highly detailed",
    negativePrompt:
      "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
    steps: 45,
    guidanceScale: 8.5,
  },
  portrait: {
    id: "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    prompt:
      "professional portrait illustration, detailed facial features, expressive eyes, professional lighting, high-end magazine quality, fashion illustration style, elegant composition, detailed hair, smooth gradients, professional retouching",
    negativePrompt:
      "deformed, distorted, disfigured, poorly drawn face, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, disconnected limbs, mutation, mutated, ugly, disgusting, blurry, amputation",
    steps: 40,
    guidanceScale: 7.0,
  },
}

// Tipos para las transformaciones
export type TransformationStyle = keyof typeof TRANSFORMATION_MODELS
export type TransformationStatus = "pending" | "processing" | "completed" | "failed"

export interface TransformationResult {
  id: string
  originalImageUrl: string
  resultImageUrl?: string
  style: TransformationStyle
  status: TransformationStatus
  createdAt: Date
  updatedAt: Date
  error?: string
}

// Función para guardar una imagen desde una URL en Vercel Blob
async function saveImageToBlob(imageUrl: string, transformationId: string, style: string): Promise<string> {
  try {
    // Descargar la imagen
    const response = await fetch(imageUrl)
    if (!response.ok) {
      throw new Error(`Error al descargar la imagen: ${response.statusText}`)
    }

    const imageBuffer = await response.arrayBuffer()
    const contentType = response.headers.get("content-type") || "image/jpeg"

    // Generar un nombre único para el archivo
    const fileName = `transformation-${style}-${transformationId}-${nanoid()}.jpg`

    // Subir la imagen a Vercel Blob
    const { url } = await put(fileName, imageBuffer, {
      contentType,
      access: "public",
    })

    return url
  } catch (error) {
    console.error("Error al guardar la imagen en Vercel Blob:", error)
    throw error
  }
}

// Función para transformar una imagen con prompts mejorados
export async function transformImage(
  imageUrl: string,
  style: TransformationStyle,
  transformationId: string,
): Promise<{ success: boolean; resultUrl?: string; error?: string }> {
  try {
    // Obtener el modelo y prompt para el estilo seleccionado
    const model = TRANSFORMATION_MODELS[style]

    if (!model) {
      throw new Error(`Estilo no válido: ${style}`)
    }

    console.log(`Iniciando transformación ${transformationId} con estilo ${style}`)

    // Ejecutar la predicción con Replicate usando los prompts y parámetros mejorados
    const output = await replicate.run(model.id, {
      input: {
        image: imageUrl,
        prompt: model.prompt,
        negative_prompt: model.negativePrompt,
        num_inference_steps: model.steps,
        guidance_scale: model.guidanceScale,
      },
    })

    // El resultado puede ser una URL o un array de URLs
    const replicateResultUrl = Array.isArray(output) ? output[0] : output

    if (!replicateResultUrl || typeof replicateResultUrl !== "string") {
      throw new Error("No se recibió una URL de resultado válida")
    }

    // Guardar la imagen resultante en Vercel Blob para almacenamiento persistente
    const persistentResultUrl = await saveImageToBlob(replicateResultUrl, transformationId, style)

    console.log(`Transformación ${transformationId} completada con éxito`)

    return {
      success: true,
      resultUrl: persistentResultUrl,
    }
  } catch (error) {
    console.error(`Error en transformación ${transformationId}:`, error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido en la transformación",
    }
  }
}
