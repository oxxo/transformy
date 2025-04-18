import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, BarChart } from "lucide-react"

export default function MonitoringDashboard() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Monitoreo de la Aplicación</h1>

      <Tabs defaultValue="performance">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Rendimiento</TabsTrigger>
          <TabsTrigger value="errors">Errores</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="setup">Configuración</TabsTrigger>
        </TabsList>

        <TabsContent value="performance">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tiempo de Carga Promedio</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2s</div>
                <p className="text-xs text-muted-foreground">-0.3s desde la semana pasada</p>
                <div className="mt-4 h-[80px] w-full bg-gray-100 rounded-md relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 h-[60%] w-[10%] bg-green-500"></div>
                  <div className="absolute bottom-0 left-[10%] h-[70%] w-[10%] bg-green-500"></div>
                  <div className="absolute bottom-0 left-[20%] h-[50%] w-[10%] bg-green-500"></div>
                  <div className="absolute bottom-0 left-[30%] h-[80%] w-[10%] bg-green-500"></div>
                  <div className="absolute bottom-0 left-[40%] h-[60%] w-[10%] bg-green-500"></div>
                  <div className="absolute bottom-0 left-[50%] h-[40%] w-[10%] bg-green-500"></div>
                  <div className="absolute bottom-0 left-[60%] h-[50%] w-[10%] bg-green-500"></div>
                  <div className="absolute bottom-0 left-[70%] h-[30%] w-[10%] bg-green-500"></div>
                  <div className="absolute bottom-0 left-[80%] h-[40%] w-[10%] bg-green-500"></div>
                  <div className="absolute bottom-0 left-[90%] h-[20%] w-[10%] bg-green-500"></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Core Web Vitals</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">LCP</span>
                      <span className="text-sm font-medium">2.1s</span>
                    </div>
                    <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">FID</span>
                      <span className="text-sm font-medium">18ms</span>
                    </div>
                    <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">CLS</span>
                      <span className="text-sm font-medium">0.05</span>
                    </div>
                    <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tiempo de Respuesta API</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">320ms</div>
                <p className="text-xs text-muted-foreground">+50ms desde la semana pasada</p>
                <div className="mt-4 h-[80px] w-full bg-gray-100 rounded-md relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 h-[30%] w-[10%] bg-amber-500"></div>
                  <div className="absolute bottom-0 left-[10%] h-[40%] w-[10%] bg-amber-500"></div>
                  <div className="absolute bottom-0 left-[20%] h-[20%] w-[10%] bg-green-500"></div>
                  <div className="absolute bottom-0 left-[30%] h-[25%] w-[10%] bg-green-500"></div>
                  <div className="absolute bottom-0 left-[40%] h-[35%] w-[10%] bg-amber-500"></div>
                  <div className="absolute bottom-0 left-[50%] h-[45%] w-[10%] bg-amber-500"></div>
                  <div className="absolute bottom-0 left-[60%] h-[50%] w-[10%] bg-amber-500"></div>
                  <div className="absolute bottom-0 left-[70%] h-[40%] w-[10%] bg-amber-500"></div>
                  <div className="absolute bottom-0 left-[80%] h-[60%] w-[10%] bg-red-500"></div>
                  <div className="absolute bottom-0 left-[90%] h-[55%] w-[10%] bg-amber-500"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="errors">
          <Card>
            <CardHeader>
              <CardTitle>Registro de Errores</CardTitle>
              <CardDescription>Monitoreo de errores en tiempo real</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                      <span className="font-medium">Error 500</span>
                    </div>
                    <span className="text-sm text-gray-500">Hace 2 horas</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    Error al procesar el pago: Stripe API returned error code 400
                  </p>
                  <div className="mt-2 text-xs text-gray-500">/api/checkout - 3 ocurrencias</div>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                      <span className="font-medium">Error 404</span>
                    </div>
                    <span className="text-sm text-gray-500">Hace 5 horas</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">Recurso no encontrado: /images/style-example-8.jpg</p>
                  <div className="mt-2 text-xs text-gray-500">/styles - 12 ocurrencias</div>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                      <span className="font-medium">Error de Cliente</span>
                    </div>
                    <span className="text-sm text-gray-500">Hace 1 día</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    Uncaught TypeError: Cannot read property 'src' of undefined
                  </p>
                  <div className="mt-2 text-xs text-gray-500">/wizard - 5 ocurrencias</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tráfico del Sitio</CardTitle>
                <CardDescription>Visitas y usuarios activos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Visitas Totales</p>
                      <p className="text-2xl font-bold">1,248</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Usuarios Únicos</p>
                      <p className="text-2xl font-bold">845</p>
                    </div>
                  </div>

                  <div className="h-[200px] w-full bg-gray-100 rounded-md relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 h-[40%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[5%] h-[30%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[10%] h-[50%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[15%] h-[70%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[20%] h-[60%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[25%] h-[40%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[30%] h-[30%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[35%] h-[50%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[40%] h-[80%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[45%] h-[90%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[50%] h-[70%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[55%] h-[60%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[60%] h-[50%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[65%] h-[40%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[70%] h-[60%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[75%] h-[70%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[80%] h-[50%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[85%] h-[40%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[90%] h-[30%] w-[5%] bg-blue-500"></div>
                    <div className="absolute bottom-0 left-[95%] h-[20%] w-[5%] bg-blue-500"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversiones</CardTitle>
                <CardDescription>Métricas de conversión y ventas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Tasa de Conversión</p>
                      <p className="text-2xl font-bold">3.2%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Ventas Totales</p>
                      <p className="text-2xl font-bold">28</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Visitantes → Pre-registro</span>
                        <span className="text-sm font-medium">8.5%</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full" style={{ width: "8.5%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Pre-registro → Compra</span>
                        <span className="text-sm font-medium">38%</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full" style={{ width: "38%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Abandono de Carrito</span>
                        <span className="text-sm font-medium">62%</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full" style={{ width: "62%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="setup">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Monitoreo</CardTitle>
              <CardDescription>Herramientas implementadas para el monitoreo de la aplicación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Vercel Analytics</h3>
                  <p className="mt-1 text-gray-700">
                    Monitoreo integrado con la plataforma de despliegue para seguimiento de Core Web Vitals y
                    rendimiento.
                  </p>
                  <div className="mt-2 flex items-center text-sm text-green-600">
                    <span className="mr-1">✓</span> Configurado y activo
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Error Tracking</h3>
                  <p className="mt-1 text-gray-700">
                    Sentry implementado para captura y análisis de errores en tiempo real.
                  </p>
                  <div className="mt-2 flex items-center text-sm text-green-600">
                    <span className="mr-1">✓</span> Configurado y activo
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Google Analytics</h3>
                  <p className="mt-1 text-gray-700">
                    Seguimiento de comportamiento de usuarios, conversiones y campañas.
                  </p>
                  <div className="mt-2 flex items-center text-sm text-amber-600">
                    <span className="mr-1">!</span> Pendiente de configuración
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Uptime Monitoring</h3>
                  <p className="mt-1 text-gray-700">
                    Monitoreo de disponibilidad del sitio con alertas por correo electrónico.
                  </p>
                  <div className="mt-2 flex items-center text-sm text-green-600">
                    <span className="mr-1">✓</span> Configurado y activo
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Stripe Dashboard</h3>
                  <p className="mt-1 text-gray-700">Monitoreo de transacciones, pagos y métricas financieras.</p>
                  <div className="mt-2 flex items-center text-sm text-green-600">
                    <span className="mr-1">✓</span> Configurado y activo
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
