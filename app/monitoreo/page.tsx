"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  ArrowDown,
  ArrowUp,
  Users,
  Activity,
  Eye,
  ShoppingCart,
  CreditCard,
  CheckCircle,
  XCircle,
  AlertTriangle,
  BarChart3,
  LineChart,
  PieChart,
} from "lucide-react"

export default function MonitoreoPage() {
  const [timeRange, setTimeRange] = useState("7d")

  // Datos simulados para el dashboard
  const stats = {
    visitantes: {
      total: 12458,
      cambio: 8.2,
      positivo: true,
    },
    conversiones: {
      total: 342,
      cambio: 12.5,
      positivo: true,
    },
    ingresos: {
      total: 2845.99,
      cambio: 5.3,
      positivo: true,
    },
    tiempoPromedio: {
      total: "2:45",
      cambio: 0.8,
      positivo: false,
    },
  }

  // Datos de alertas
  const alertas = [
    {
      id: 1,
      tipo: "error",
      mensaje: "Error en procesamiento de pago",
      tiempo: "Hace 2 horas",
      detalles: "Transacción fallida para el usuario ID: 45892",
    },
    {
      id: 2,
      tipo: "warning",
      mensaje: "Tiempo de carga elevado",
      tiempo: "Hace 5 horas",
      detalles: "La página de ejemplos está tardando más de 3 segundos en cargar",
    },
    {
      id: 3,
      tipo: "success",
      mensaje: "Integración con Stripe funcionando correctamente",
      tiempo: "Hace 1 día",
      detalles: "Todas las transacciones procesadas sin errores",
    },
  ]

  // Datos del embudo de conversión
  const embudoConversion = [
    { etapa: "Visitas", cantidad: 12458, porcentaje: 100 },
    { etapa: "Subida de foto", cantidad: 3245, porcentaje: 26 },
    { etapa: "Selección de estilo", cantidad: 2187, porcentaje: 17.5 },
    { etapa: "Inicio de pago", cantidad: 876, porcentaje: 7 },
    { etapa: "Compra completada", cantidad: 342, porcentaje: 2.7 },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
            Dashboard de Monitoreo
          </h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className={timeRange === "24h" ? "bg-violet-100" : ""}
              onClick={() => setTimeRange("24h")}
            >
              24h
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={timeRange === "7d" ? "bg-violet-100" : ""}
              onClick={() => setTimeRange("7d")}
            >
              7 días
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={timeRange === "30d" ? "bg-violet-100" : ""}
              onClick={() => setTimeRange("30d")}
            >
              30 días
            </Button>
          </div>
        </div>

        {/* Estadísticas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Visitantes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">{stats.visitantes.total.toLocaleString()}</div>
                <div className={`flex items-center ${stats.visitantes.positivo ? "text-green-600" : "text-red-600"}`}>
                  {stats.visitantes.positivo ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  <span className="text-sm font-medium">{stats.visitantes.cambio}%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                <div className="bg-violet-600 h-1 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Conversiones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">{stats.conversiones.total}</div>
                <div className={`flex items-center ${stats.conversiones.positivo ? "text-green-600" : "text-red-600"}`}>
                  {stats.conversiones.positivo ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  <span className="text-sm font-medium">{stats.conversiones.cambio}%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                <div className="bg-violet-600 h-1 rounded-full" style={{ width: "42%" }}></div>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Ingresos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">${stats.ingresos.total.toLocaleString()}</div>
                <div className={`flex items-center ${stats.ingresos.positivo ? "text-green-600" : "text-red-600"}`}>
                  {stats.ingresos.positivo ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  <span className="text-sm font-medium">{stats.ingresos.cambio}%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                <div className="bg-violet-600 h-1 rounded-full" style={{ width: "78%" }}></div>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Tiempo promedio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">{stats.tiempoPromedio.total}</div>
                <div
                  className={`flex items-center ${stats.tiempoPromedio.positivo ? "text-green-600" : "text-red-600"}`}
                >
                  {stats.tiempoPromedio.positivo ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  <span className="text-sm font-medium">{stats.tiempoPromedio.cambio}%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                <div className="bg-violet-600 h-1 rounded-full" style={{ width: "35%" }}></div>
              </div>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Visión general</TabsTrigger>
            <TabsTrigger value="conversion">Embudo de conversión</TabsTrigger>
            <TabsTrigger value="alerts">Alertas</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Visitantes y conversiones</CardTitle>
                  <CardDescription>
                    Últimos {timeRange === "24h" ? "24 horas" : timeRange === "7d" ? "7 días" : "30 días"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-[300px] w-full bg-gradient-to-r from-violet-50 to-purple-50 rounded-b-lg flex items-center justify-center">
                    <LineChart className="h-16 w-16 text-violet-300" />
                    <span className="text-violet-400 ml-2">Gráfico de visitantes y conversiones</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribución de estilos</CardTitle>
                  <CardDescription>Estilos más populares</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px] w-full flex items-center justify-center">
                    <PieChart className="h-16 w-16 text-violet-300" />
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-violet-500 mr-2"></div>
                        <span className="text-sm">Anime Style</span>
                      </div>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span className="text-sm">Ghibli Style</span>
                      </div>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm">Watercolor Style</span>
                      </div>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dispositivos</CardTitle>
                  <CardDescription>Distribución por tipo de dispositivo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-violet-300" />
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-violet-500 mr-2"></div>
                        <span className="text-sm">Móvil</span>
                      </div>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span className="text-sm">Desktop</span>
                      </div>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm">Tablet</span>
                      </div>
                      <span className="text-sm font-medium">4%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fuentes de tráfico</CardTitle>
                  <CardDescription>De dónde vienen tus visitantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-violet-300" />
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-violet-500 mr-2"></div>
                        <span className="text-sm">Redes sociales</span>
                      </div>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span className="text-sm">Búsqueda orgánica</span>
                      </div>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm">Directo</span>
                      </div>
                      <span className="text-sm font-medium">23%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="conversion" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Embudo de conversión</CardTitle>
                <CardDescription>Análisis del proceso de compra</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {embudoConversion.map((etapa, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {index === 0 && <Users className="h-4 w-4 mr-2 text-violet-500" />}
                          {index === 1 && <Eye className="h-4 w-4 mr-2 text-violet-500" />}
                          {index === 2 && <ShoppingCart className="h-4 w-4 mr-2 text-violet-500" />}
                          {index === 3 && <CreditCard className="h-4 w-4 mr-2 text-violet-500" />}
                          {index === 4 && <CheckCircle className="h-4 w-4 mr-2 text-violet-500" />}
                          <span className="font-medium">{etapa.etapa}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-500">{etapa.cantidad.toLocaleString()}</span>
                          <span className="text-sm font-medium">{etapa.porcentaje}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full"
                          style={{ width: `${etapa.porcentaje}%` }}
                        ></div>
                      </div>
                      {index < embudoConversion.length - 1 && (
                        <div className="flex justify-center">
                          <ArrowDown className="h-4 w-4 text-gray-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="bg-violet-50 p-4 rounded-lg w-full">
                  <div className="flex items-start gap-2">
                    <Activity className="h-5 w-5 text-violet-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-violet-800">Análisis de conversión</p>
                      <p className="text-sm text-violet-600">
                        La tasa de conversión total es de 2.7%. El mayor abandono ocurre entre la selección de estilo y
                        el inicio de pago.
                      </p>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Alertas del sistema</CardTitle>
                <CardDescription>Últimas alertas y notificaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alertas.map((alerta) => (
                    <div key={alerta.id} className="border rounded-lg overflow-hidden">
                      <div
                        className={`p-4 flex items-start gap-3 ${
                          alerta.tipo === "error"
                            ? "bg-red-50"
                            : alerta.tipo === "warning"
                              ? "bg-amber-50"
                              : "bg-green-50"
                        }`}
                      >
                        {alerta.tipo === "error" && <XCircle className="h-5 w-5 text-red-500 mt-0.5" />}
                        {alerta.tipo === "warning" && <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />}
                        {alerta.tipo === "success" && <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />}
                        <div>
                          <div className="flex items-center justify-between">
                            <p
                              className={`font-medium ${
                                alerta.tipo === "error"
                                  ? "text-red-800"
                                  : alerta.tipo === "warning"
                                    ? "text-amber-800"
                                    : "text-green-800"
                              }`}
                            >
                              {alerta.mensaje}
                            </p>
                            <span className="text-xs text-gray-500">{alerta.tiempo}</span>
                          </div>
                          <p
                            className={`text-sm ${
                              alerta.tipo === "error"
                                ? "text-red-600"
                                : alerta.tipo === "warning"
                                  ? "text-amber-600"
                                  : "text-green-600"
                            }`}
                          >
                            {alerta.detalles}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Ver todas las alertas</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Estado del sistema</CardTitle>
                <CardDescription>Monitoreo de servicios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="font-medium">API Principal</span>
                    </div>
                    <span className="text-sm text-green-600">Operativo</span>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="font-medium">Procesamiento de imágenes</span>
                    </div>
                    <span className="text-sm text-green-600">Operativo</span>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="font-medium">Integración con Stripe</span>
                    </div>
                    <span className="text-sm text-green-600">Operativo</span>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span className="font-medium">Servicio de notificaciones</span>
                    </div>
                    <span className="text-sm text-amber-600">Degradado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Monitorea el rendimiento de tu plataforma y toma decisiones basadas en datos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
              Configurar alertas
            </Button>
            <Button variant="outline">Exportar informes</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
