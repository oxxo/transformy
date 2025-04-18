import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductionChecklist() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Checklist de Producción</h1>

      <Tabs defaultValue="performance">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="performance">Rendimiento</TabsTrigger>
          <TabsTrigger value="security">Seguridad</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="accessibility">Accesibilidad</TabsTrigger>
          <TabsTrigger value="legal">Legal</TabsTrigger>
        </TabsList>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Optimización de Rendimiento</CardTitle>
              <CardDescription>Verificaciones para asegurar un rendimiento óptimo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="perf1" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="perf1" className="font-medium">
                      Optimización de imágenes
                    </Label>
                    <p className="text-sm text-gray-500">
                      Todas las imágenes están optimizadas y utilizan formatos modernos (WebP/AVIF)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="perf2" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="perf2" className="font-medium">
                      Lazy loading
                    </Label>
                    <p className="text-sm text-gray-500">Imágenes y componentes no críticos utilizan carga diferida</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="perf3" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="perf3" className="font-medium">
                      Minificación de assets
                    </Label>
                    <p className="text-sm text-gray-500">CSS, JavaScript e HTML están minificados</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="perf4" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="perf4" className="font-medium">
                      Caché adecuado
                    </Label>
                    <p className="text-sm text-gray-500">
                      Cabeceras de caché configuradas correctamente para assets estáticos
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="perf5" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="perf5" className="font-medium">
                      Pruebas de carga
                    </Label>
                    <p className="text-sm text-gray-500">
                      Realizar pruebas de carga para verificar el rendimiento bajo tráfico elevado
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="perf6" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="perf6" className="font-medium">
                      Core Web Vitals
                    </Label>
                    <p className="text-sm text-gray-500">LCP, FID y CLS cumplen con los umbrales recomendados</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Seguridad</CardTitle>
              <CardDescription>Verificaciones para proteger la aplicación y los datos de los usuarios</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="sec1" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="sec1" className="font-medium">
                      HTTPS habilitado
                    </Label>
                    <p className="text-sm text-gray-500">Todo el tráfico está cifrado con HTTPS</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="sec2" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="sec2" className="font-medium">
                      Cabeceras de seguridad
                    </Label>
                    <p className="text-sm text-gray-500">Implementadas cabeceras como CSP, X-XSS-Protection, etc.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="sec3" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="sec3" className="font-medium">
                      Protección de datos sensibles
                    </Label>
                    <p className="text-sm text-gray-500">Variables de entorno y secretos almacenados de forma segura</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="sec4" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="sec4" className="font-medium">
                      Auditoría de seguridad
                    </Label>
                    <p className="text-sm text-gray-500">Realizar una auditoría de seguridad completa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="sec5" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="sec5" className="font-medium">
                      Dependencias actualizadas
                    </Label>
                    <p className="text-sm text-gray-500">
                      Todas las dependencias están actualizadas y sin vulnerabilidades conocidas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO</CardTitle>
              <CardDescription>Verificaciones para optimizar el posicionamiento en buscadores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="seo1" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="seo1" className="font-medium">
                      Meta tags
                    </Label>
                    <p className="text-sm text-gray-500">
                      Todas las páginas tienen título, descripción y meta tags adecuados
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="seo2" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="seo2" className="font-medium">
                      Estructura de encabezados
                    </Label>
                    <p className="text-sm text-gray-500">Uso correcto de H1, H2, H3, etc. en todas las páginas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="seo3" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="seo3" className="font-medium">
                      Sitemap.xml
                    </Label>
                    <p className="text-sm text-gray-500">Generar y configurar sitemap.xml</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="seo4" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="seo4" className="font-medium">
                      robots.txt
                    </Label>
                    <p className="text-sm text-gray-500">Archivo robots.txt configurado correctamente</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="seo5" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="seo5" className="font-medium">
                      URLs amigables
                    </Label>
                    <p className="text-sm text-gray-500">Todas las URLs son descriptivas y amigables para SEO</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="seo6" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="seo6" className="font-medium">
                      Configuración de Analytics
                    </Label>
                    <p className="text-sm text-gray-500">Google Analytics o herramienta similar configurada</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accessibility">
          <Card>
            <CardHeader>
              <CardTitle>Accesibilidad</CardTitle>
              <CardDescription>
                Verificaciones para asegurar que el sitio es accesible para todos los usuarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="a11y1" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="a11y1" className="font-medium">
                      Contraste de colores
                    </Label>
                    <p className="text-sm text-gray-500">El contraste de texto cumple con WCAG AA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="a11y2" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="a11y2" className="font-medium">
                      Textos alternativos
                    </Label>
                    <p className="text-sm text-gray-500">Todas las imágenes tienen atributos alt descriptivos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="a11y3" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="a11y3" className="font-medium">
                      Navegación por teclado
                    </Label>
                    <p className="text-sm text-gray-500">El sitio es completamente navegable usando solo el teclado</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="a11y4" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="a11y4" className="font-medium">
                      Prueba con lectores de pantalla
                    </Label>
                    <p className="text-sm text-gray-500">Verificar compatibilidad con lectores de pantalla</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="a11y5" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="a11y5" className="font-medium">
                      Estructura semántica
                    </Label>
                    <p className="text-sm text-gray-500">Uso correcto de elementos HTML semánticos</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="legal">
          <Card>
            <CardHeader>
              <CardTitle>Requisitos Legales</CardTitle>
              <CardDescription>Verificaciones para cumplir con requisitos legales y normativos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="legal1" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="legal1" className="font-medium">
                      Política de privacidad
                    </Label>
                    <p className="text-sm text-gray-500">Documento de política de privacidad accesible y actualizado</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="legal2" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="legal2" className="font-medium">
                      Términos y condiciones
                    </Label>
                    <p className="text-sm text-gray-500">Documento de términos y condiciones accesible y actualizado</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="legal3" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="legal3" className="font-medium">
                      Aviso de cookies
                    </Label>
                    <p className="text-sm text-gray-500">Banner de cookies con opciones de consentimiento</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="legal4" checked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="legal4" className="font-medium">
                      Cumplimiento GDPR
                    </Label>
                    <p className="text-sm text-gray-500">
                      Mecanismos para solicitar, modificar o eliminar datos personales
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="legal5" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="legal5" className="font-medium">
                      Información de contacto
                    </Label>
                    <p className="text-sm text-gray-500">Información de contacto visible y accesible</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
