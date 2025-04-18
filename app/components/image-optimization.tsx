import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code } from "@/components/ui/code"

export default function ImageOptimization() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Optimización de Imágenes</h1>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="examples">Ejemplos</TabsTrigger>
          <TabsTrigger value="best-practices">Mejores Prácticas</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Optimización de Imágenes Implementada</CardTitle>
              <CardDescription>Mejoras aplicadas para optimizar el rendimiento de las imágenes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Componente Next/Image</h3>
                  <p className="mt-2 text-gray-700">
                    Hemos implementado el componente Image de Next.js que proporciona:
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Optimización automática de imágenes</li>
                    <li>Carga diferida (lazy loading)</li>
                    <li>Redimensionamiento según el dispositivo</li>
                    <li>Prevención de Cumulative Layout Shift (CLS)</li>
                    <li>Formatos modernos como WebP y AVIF cuando el navegador los soporta</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Formatos de Imagen Modernos</h3>
                  <p className="mt-2 text-gray-700">
                    Utilizamos formatos modernos que ofrecen mejor compresión y calidad:
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      <strong>WebP:</strong> 25-35% más pequeño que JPEG con calidad similar
                    </li>
                    <li>
                      <strong>AVIF:</strong> Hasta 50% más pequeño que WebP
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Estrategia de Carga</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      <strong>Lazy Loading:</strong> Las imágenes se cargan solo cuando entran en el viewport
                    </li>
                    <li>
                      <strong>Placeholder:</strong> Utilizamos placeholders durante la carga
                    </li>
                    <li>
                      <strong>Priority:</strong> Imágenes críticas marcadas como prioritarias
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples">
          <Card>
            <CardHeader>
              <CardTitle>Ejemplos de Implementación</CardTitle>
              <CardDescription>Código de ejemplo para la optimización de imágenes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Imagen Básica Optimizada</h3>
                  <div className="bg-gray-50 p-4 rounded-md mt-2">
                    <Code>
                      {`import Image from 'next/image'

export function OptimizedImage() {
  return (
    <Image
      src="/example-image.jpg"
      alt="Descripción de la imagen"
      width={800}
      height={600}
      quality={85}
    />
  )
}`}
                    </Code>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Imagen con Prioridad</h3>
                  <p className="text-sm text-gray-500 mt-1">Para imágenes above-the-fold importantes</p>
                  <div className="bg-gray-50 p-4 rounded-md mt-2">
                    <Code>
                      {`<Image
  src="/hero-image.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority
/>`}
                    </Code>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Imagen con Placeholder</h3>
                  <div className="bg-gray-50 p-4 rounded-md mt-2">
                    <Code>
                      {`<Image
  src="/product-image.jpg"
  alt="Product"
  width={400}
  height={400}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg"
/>`}
                    </Code>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Imagen Responsiva</h3>
                  <div className="bg-gray-50 p-4 rounded-md mt-2">
                    <Code>
                      {`<div className="relative w-full h-[50vh]">
  <Image
    src="/background.jpg"
    alt="Background"
    fill
    sizes="100vw"
    style={{ objectFit: 'cover' }}
  />
</div>`}
                    </Code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="best-practices">
          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para optimizar imágenes en la aplicación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Dimensiones Adecuadas</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Utiliza imágenes con las dimensiones más cercanas a cómo se mostrarán</li>
                    <li>Evita cargar imágenes grandes para mostrarlas pequeñas</li>
                    <li>Considera múltiples tamaños para diferentes dispositivos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Priorización</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Usa el atributo <code>priority</code> solo para imágenes above-the-fold
                    </li>
                    <li>Limita el número de imágenes prioritarias (idealmente 2-3 máximo)</li>
                    <li>Las imágenes del hero y LCP (Largest Contentful Paint) deben ser prioritarias</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Atributo sizes</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Especifica el atributo <code>sizes</code> para imágenes responsivas
                    </li>
                    <li>
                      Ejemplo: <code>sizes="(max-width: 768px) 100vw, 50vw"</code>
                    </li>
                    <li>Esto ayuda a Next.js a generar los tamaños de imagen correctos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Calidad de Imagen</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>El valor predeterminado de calidad es 75</li>
                    <li>Usa valores más altos (80-85) para imágenes importantes</li>
                    <li>Usa valores más bajos (60-70) para imágenes menos críticas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Accesibilidad</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Siempre incluye un atributo <code>alt</code> descriptivo
                    </li>
                    <li>
                      Para imágenes decorativas, usa <code>alt=""</code>
                    </li>
                    <li>Asegúrate de que el contraste de texto sobre imágenes sea adecuado</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
