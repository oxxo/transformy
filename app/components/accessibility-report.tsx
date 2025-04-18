"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertCircle, XCircle } from "lucide-react"

export default function AccessibilityReport() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Informe de Accesibilidad</h1>

      <Tabs defaultValue="summary">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="summary">Resumen</TabsTrigger>
          <TabsTrigger value="screenreader">Lector de Pantalla</TabsTrigger>
          <TabsTrigger value="keyboard">Navegación por Teclado</TabsTrigger>
          <TabsTrigger value="recommendations">Recomendaciones</TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <Card>
            <CardHeader>
              <CardTitle>Resumen de Accesibilidad</CardTitle>
              <CardDescription>Resultados generales de las pruebas de accesibilidad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-md p-4 bg-green-50 border-green-200">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <p className="font-medium">Conformidad WCAG</p>
                    </div>
                    <p className="mt-2 text-sm">Nivel AA alcanzado en la mayoría de criterios</p>
                  </div>
                  <div className="border rounded-md p-4 bg-amber-50 border-amber-200">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                      <p className="font-medium">Problemas Menores</p>
                    </div>
                    <p className="mt-2 text-sm">5 problemas de prioridad media identificados</p>
                  </div>
                  <div className="border rounded-md p-4 bg-red-50 border-red-200">
                    <div className="flex items-center">
                      <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      <p className="font-medium">Problemas Críticos</p>
                    </div>
                    <p className="mt-2 text-sm">1 problema crítico en el wizard de carga de fotos</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Puntuación por Categoría</h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Navegación por teclado</span>
                        <span className="text-sm font-medium">85/100</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Compatibilidad con lectores de pantalla</span>
                        <span className="text-sm font-medium">78/100</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Contraste de colores</span>
                        <span className="text-sm font-medium">92/100</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Estructura semántica</span>
                        <span className="text-sm font-medium">90/100</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Conclusión</h3>
                  <p className="mt-2 text-gray-700">
                    El sitio cumple con la mayoría de los criterios de accesibilidad WCAG 2.1 nivel AA. Se han
                    identificado algunos problemas menores y un problema crítico que debe resolverse antes del
                    lanzamiento. Con las correcciones recomendadas, el sitio será accesible para la gran mayoría de
                    usuarios, incluyendo aquellos que utilizan tecnologías de asistencia.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="screenreader">
          <Card>
            <CardHeader>
              <CardTitle>Pruebas con Lectores de Pantalla</CardTitle>
              <CardDescription>Resultados de pruebas con NVDA y VoiceOver</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Navegadores y Lectores Probados</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>NVDA con Chrome en Windows 10</li>
                    <li>VoiceOver con Safari en macOS</li>
                    <li>TalkBack en Android Chrome</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Problemas Identificados</h3>
                  <div className="mt-4 space-y-4">
                    <div className="border rounded-md p-4 border-red-200 bg-red-50">
                      <div className="flex items-center">
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        <span className="font-medium">Crítico: Wizard de carga de fotos</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        El componente de carga de fotos no anuncia cambios de estado ni errores a los lectores de
                        pantalla. Los usuarios no reciben feedback cuando una imagen se ha cargado correctamente o
                        cuando hay un error.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">Ubicación: /wizard - Paso 1</div>
                    </div>

                    <div className="border rounded-md p-4 border-amber-200 bg-amber-50">
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                        <span className="font-medium">Medio: Selector de estilos</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        El selector de estilos utiliza imágenes sin descripciones adecuadas. Los usuarios de lectores de
                        pantalla no pueden distinguir entre los diferentes estilos disponibles.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">Ubicación: /wizard - Paso 2</div>
                    </div>

                    <div className="border rounded-md p-4 border-amber-200 bg-amber-50">
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                        <span className="font-medium">Medio: Formulario de pago</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        Los mensajes de error en el formulario de pago no se anuncian automáticamente cuando aparecen.
                        Los usuarios de lectores de pantalla pueden no darse cuenta de que ha ocurrido un error.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">Ubicación: /checkout</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Elementos Positivos</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>La navegación principal es completamente accesible con lectores de pantalla</li>
                    <li>Los botones y enlaces tienen textos descriptivos</li>
                    <li>La estructura de encabezados es lógica y bien organizada</li>
                    <li>Los formularios tienen etiquetas asociadas correctamente</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keyboard">
          <Card>
            <CardHeader>
              <CardTitle>Navegación por Teclado</CardTitle>
              <CardDescription>Resultados de pruebas de navegación sin ratón</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Problemas Identificados</h3>
                  <div className="mt-4 space-y-4">
                    <div className="border rounded-md p-4 border-amber-200 bg-amber-50">
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                        <span className="font-medium">Medio: Indicador de foco</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        El indicador de foco del teclado no es suficientemente visible en algunos elementos
                        interactivos, especialmente en el selector de estilos y en los botones con fondo oscuro.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">Ubicación: Múltiples páginas</div>
                    </div>

                    <div className="border rounded-md p-4 border-amber-200 bg-amber-50">
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                        <span className="font-medium">Medio: Orden de tabulación</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        El orden de tabulación en el wizard no sigue un patrón lógico en dispositivos móviles, lo que
                        puede confundir a los usuarios que navegan con teclado.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">Ubicación: /wizard en móviles</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Pruebas Realizadas</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Navegación completa del sitio utilizando solo el teclado</li>
                    <li>Verificación de trampas de foco (ninguna encontrada)</li>
                    <li>Comprobación de accesibilidad de componentes interactivos</li>
                    <li>Prueba de atajos de teclado personalizados</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Elementos Positivos</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Todos los elementos interactivos son accesibles mediante teclado</li>
                    <li>No hay trampas de foco que impidan la navegación</li>
                    <li>Los diálogos modales atrapan el foco correctamente</li>
                    <li>Los menús desplegables son operables con teclado</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations">
          <Card>
            <CardHeader>
              <CardTitle>Recomendaciones</CardTitle>
              <CardDescription>Mejoras sugeridas para resolver los problemas de accesibilidad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Correcciones Prioritarias</h3>
                  <div className="mt-4 space-y-4">
                    <div className="border-l-4 border-red-500 pl-4 py-2">
                      <h4 className="font-medium">Mejorar el componente de carga de fotos</h4>
                      <p className="mt-1 text-gray-700">
                        Añadir anuncios de estado mediante ARIA live regions para informar a los usuarios de lectores de
                        pantalla sobre el progreso de carga, éxito o errores.
                      </p>
                      <div className="mt-2 text-sm bg-gray-50 p-2 rounded">
                        <code>{`<div aria-live="polite" className="sr-only">
  {isUploading ? 'Subiendo imagen...' : ''}
  {isSuccess ? 'Imagen subida correctamente' : ''}
  {error ? 'Error al subir la imagen: ' + error : ''}
</div>`}</code>
                      </div>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-4 py-2">
                      <h4 className="font-medium">Mejorar el selector de estilos</h4>
                      <p className="mt-1 text-gray-700">
                        Añadir descripciones detalladas a cada estilo y asegurarse de que sean anunciadas por los
                        lectores de pantalla.
                      </p>
                      <div className="mt-2 text-sm bg-gray-50 p-2 rounded">
                        <code>{`<button 
  aria-label="Estilo minimalista: líneas simples en blanco y negro" 
  onClick={() => selectStyle('minimalist')}
>
  <img alt="" src="/styles/minimalist.jpg" />
  <span>Minimalista</span>
</button>`}</code>
                      </div>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-4 py-2">
                      <h4 className="font-medium">Mejorar los mensajes de error en formularios</h4>
                      <p className="mt-1 text-gray-700">
                        Implementar ARIA live regions para anunciar automáticamente los errores de validación y utilizar
                        el atributo aria-describedby para asociar mensajes de error con los campos correspondientes.
                      </p>
                      <div className="mt-2 text-sm bg-gray-50 p-2 rounded">
                        <code>{`<div aria-live="assertive" className="sr-only">
  {formErrors.map(error => <p key={error.id}>{error.message}</p>)}
</div>

<input 
  id="email"
  aria-invalid={!!emailError} 
  aria-describedby={emailError ? "email-error" : undefined}
/>
{emailError && <p id="email-error" className="text-red-500">{emailError}</p>}`}</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Mejoras Secundarias</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      <strong>Mejorar el indicador de foco:</strong> Aumentar el contraste y la visibilidad del
                      indicador de foco en todos los elementos interactivos.
                    </li>
                    <li>
                      <strong>Corregir el orden de tabulación:</strong> Revisar y corregir el orden de tabulación en el
                      wizard para dispositivos móviles, asegurando que siga un flujo lógico y natural.
                    </li>
                    <li>
                      <strong>Añadir atajos de teclado:</strong> Implementar atajos de teclado para las acciones
                      principales, como navegar entre pasos del wizard o confirmar selecciones.
                    </li>
                    <li>
                      <strong>Mejorar textos alternativos:</strong> Revisar y mejorar los textos alternativos de todas
                      las imágenes, especialmente en la galería de ejemplos.
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <h3 className="text-lg font-medium text-green-800">Plan de Implementación</h3>
                  <p className="mt-2 text-green-700">
                    Se recomienda abordar primero el problema crítico del componente de carga de fotos antes del
                    lanzamiento. Las mejoras de prioridad media pueden implementarse en las primeras dos semanas después
                    del lanzamiento, y las mejoras secundarias pueden planificarse para actualizaciones posteriores.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
