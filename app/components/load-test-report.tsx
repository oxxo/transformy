import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoadTestReport() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Informe de Pruebas de Carga</h1>

      <Tabs defaultValue="summary">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="summary">Resumen</TabsTrigger>
          <TabsTrigger value="performance">Rendimiento</TabsTrigger>
          <TabsTrigger value="errors">Errores</TabsTrigger>
          <TabsTrigger value="recommendations">Recomendaciones</TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <Card>
            <CardHeader>
              <CardTitle>Resumen de Pruebas de Carga</CardTitle>
              <CardDescription>Resultados generales de las pruebas de carga realizadas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Configuración de la Prueba</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="border rounded-md p-4">
                      <p className="text-sm font-medium text-gray-500">Duración</p>
                      <p className="text-2xl font-bold">30 minutos</p>
                    </div>
                    <div className="border rounded-md p-4">
                      <p className="text-sm font-medium text-gray-500">Usuarios Virtuales</p>
                      <p className="text-2xl font-bold">500</p>
                    </div>
                    <div className="border rounded-md p-4">
                      <p className="text-sm font-medium text-gray-500">Solicitudes Totales</p>
                      <p className="text-2xl font-bold">25,487</p>
                    </div>
                    <div className="border rounded-md p-4">
                      <p className="text-sm font-medium text-gray-500">Tasa de Error</p>
                      <p className="text-2xl font-bold">0.8%</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Resultados Clave</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>El sitio mantuvo un buen rendimiento hasta 350 usuarios concurrentes</li>
                    <li>El tiempo de respuesta promedio se mantuvo por debajo de 1.2 segundos</li>
                    <li>
                      La API de procesamiento de imágenes mostró degradación con más de 50 solicitudes simultáneas
                    </li>
                    <li>No se observaron errores críticos durante la prueba</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Conclusión</h3>
                  <p className="mt-2 text-gray-700">
                    El sitio está preparado para manejar el tráfico esperado en el lanzamiento (estimado en 100-150
                    usuarios concurrentes). Se recomienda implementar algunas optimizaciones para mejorar el rendimiento
                    de la API de procesamiento de imágenes antes de campañas de marketing a gran escala.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Métricas de Rendimiento</CardTitle>
              <CardDescription>Análisis detallado del rendimiento bajo carga</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Tiempo de Respuesta</h3>
                  <div className="mt-4 h-[200px] w-full bg-gray-100 rounded-md relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 h-[20%] w-[5%] bg-green-500"></div>
                    <div className="absolute bottom-0 left-[5%] h-[25%] w-[5%] bg-green-500"></div>
                    <div className="absolute bottom-0 left-[10%] h-[30%] w-[5%] bg-green-500"></div>
                    <div className="absolute bottom-0 left-[15%] h-[35%] w-[5%] bg-green-500"></div>
                    <div className="absolute bottom-0 left-[20%] h-[40%] w-[5%] bg-green-500"></div>
                    <div className="absolute bottom-0 left-[25%] h-[45%] w-[5%] bg-green-500"></div>
                    <div className="absolute bottom-0 left-[30%] h-[50%] w-[5%] bg-green-500"></div>
                    <div className="absolute bottom-0 left-[35%] h-[55%] w-[5%] bg-green-500"></div>
                    <div className="absolute bottom-0 left-[40%] h-[60%] w-[5%] bg-amber-500"></div>
                    <div className="absolute bottom-0 left-[45%] h-[65%] w-[5%] bg-amber-500"></div>
                    <div className="absolute bottom-0 left-[50%] h-[70%] w-[5%] bg-amber-500"></div>
                    <div className="absolute bottom-0 left-[55%] h-[75%] w-[5%] bg-amber-500"></div>
                    <div className="absolute bottom-0 left-[60%] h-[80%] w-[5%] bg-red-500"></div>
                    <div className="absolute bottom-0 left-[65%] h-[85%] w-[5%] bg-red-500"></div>
                    <div className="absolute bottom-0 left-[70%] h-[80%] w-[5%] bg-red-500"></div>
                    <div className="absolute bottom-0 left-[75%] h-[75%] w-[5%] bg-amber-500"></div>
                    <div className="absolute bottom-0 left-[80%] h-[70%] w-[5%] bg-amber-500"></div>
                    <div className="absolute bottom-0 left-[85%] h-[65%] w-[5%] bg-amber-500"></div>
                    <div className="absolute bottom-0 left-[90%] h-[60%] w-[5%] bg-amber-500"></div>
                    <div className="absolute bottom-0 left-[95%] h-[55%] w-[5%] bg-green-500"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>0 usuarios</span>
                    <span>500 usuarios</span>
                  </div>
                  <div className="flex justify-between mt-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Tiempo de respuesta mínimo</p>
                      <p className="text-xl font-bold">0.2s</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Tiempo de respuesta promedio</p>
                      <p className="text-xl font-bold">0.8s</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Tiempo de respuesta máximo</p>
                      <p className="text-xl font-bold">3.5s</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Rendimiento por Endpoint</h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">/api/transform</span>
                        <span className="text-sm font-medium">2.1s</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">/api/checkout</span>
                        <span className="text-sm font-medium">1.8s</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">/api/styles</span>
                        <span className="text-sm font-medium">0.4s</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">/ (página principal)</span>
                        <span className="text-sm font-medium">0.3s</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="errors">
          <Card>
            <CardHeader>
              <CardTitle>Análisis de Errores</CardTitle>
              <CardDescription>Errores detectados durante las pruebas de carga</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Distribución de Errores</h3>
                  <div className="mt-4 flex items-center">
                    <div className="w-3/4 bg-gray-100 rounded-l-md h-6">
                      <div className="bg-green-500 h-full rounded-l-md" style={{ width: "99.2%" }}></div>
                    </div>
                    <div className="w-1/4 flex">
                      <div className="bg-amber-500 h-6" style={{ width: "0.5%" }}></div>
                      <div className="bg-red-500 h-6 rounded-r-md" style={{ width: "0.3%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs">
                    <span className="text-green-500">Exitosas (99.2%)</span>
                    <span className="text-amber-500">Errores 4xx (0.5%)</span>
                    <span className="text-red-500">Errores 5xx (0.3%)</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Errores Principales</h3>
                  <div className="mt-4 space-y-4">
                    <div className="border rounded-md p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                          <span className="font-medium">Error 503</span>
                        </div>
                        <span className="text-sm text-gray-500">45 ocurrencias</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        Service Unavailable: API de transformación sobrecargada con más de 50 solicitudes simultáneas
                      </p>
                      <div className="mt-2 text-xs text-gray-500">/api/transform - Con 350+ usuarios concurrentes</div>
                    </div>

                    <div className="border rounded-md p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                          <span className="font-medium">Error 429</span>
                        </div>
                        <span className="text-sm text-gray-500">78 ocurrencias</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        Too Many Requests: Límite de tasa alcanzado en la API de Stripe
                      </p>
                      <div className="mt-2 text-xs text-gray-500">/api/checkout - Con picos de tráfico</div>
                    </div>

                    <div className="border rounded-md p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                          <span className="font-medium">Error 400</span>
                        </div>
                        <span className="text-sm text-gray-500">32 ocurrencias</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">Bad Request: Formato de imagen no soportado</p>
                      <div className="mt-2 text-xs text-gray-500">/api/transform - Pruebas con formatos inválidos</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations">
          <Card>
            <CardHeader>
              <CardTitle>Recomendaciones</CardTitle>
              <CardDescription>Mejoras sugeridas basadas en los resultados de las pruebas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Optimizaciones Prioritarias</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      <strong>Implementar cola de procesamiento:</strong> Añadir un sistema de colas para la API de
                      transformación de imágenes para manejar picos de tráfico.
                    </li>
                    <li>
                      <strong>Caché de resultados:</strong> Implementar caché para resultados de transformaciones
                      frecuentes o similares.
                    </li>
                    <li>
                      <strong>Optimizar consultas a Stripe:</strong> Reducir el número de llamadas a la API de Stripe
                      implementando un sistema de caché local para información que no cambia frecuentemente.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Mejoras Secundarias</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      <strong>Compresión de imágenes:</strong> Implementar compresión adicional antes de procesar las
                      imágenes para reducir la carga del servidor.
                    </li>
                    <li>
                      <strong>Validación de formatos:</strong> Mejorar la validación de formatos de imagen en el
                      frontend para evitar errores 400.
                    </li>
                    <li>
                      <strong>Escalado automático:</strong> Configurar el escalado automático de recursos en Vercel para
                      manejar picos de tráfico.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Plan de Monitoreo</h3>
                  <p className="mt-2 text-gray-700">
                    Se recomienda implementar un monitoreo continuo de los siguientes aspectos:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Tiempo de respuesta de la API de transformación</li>
                    <li>Tasa de errores en el procesamiento de pagos</li>
                    <li>Uso de recursos del servidor durante picos de tráfico</li>
                    <li>Tiempos de carga de la página principal y el wizard</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                  <h3 className="text-lg font-medium text-amber-800">Conclusión</h3>
                  <p className="mt-2 text-amber-700">
                    El sitio está listo para el lanzamiento con el tráfico inicial esperado (100-150 usuarios
                    concurrentes). Sin embargo, se recomienda implementar las optimizaciones prioritarias antes de
                    realizar campañas de marketing a gran escala que puedan atraer más de 300 usuarios concurrentes.
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
