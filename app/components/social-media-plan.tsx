import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SocialMediaPlan() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Plan de Campaña en Redes Sociales</h1>

      <Tabs defaultValue="strategy">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="strategy">Estrategia</TabsTrigger>
          <TabsTrigger value="content">Contenido</TabsTrigger>
          <TabsTrigger value="schedule">Calendario</TabsTrigger>
          <TabsTrigger value="metrics">Métricas</TabsTrigger>
        </TabsList>

        <TabsContent value="strategy">
          <Card>
            <CardHeader>
              <CardTitle>Estrategia de Redes Sociales</CardTitle>
              <CardDescription>Plan estratégico para promocionar el servicio de ilustración digital</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Plataformas Principales</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Instagram: Enfoque visual ideal para mostrar transformaciones</li>
                    <li>TikTok: Videos cortos mostrando el proceso de transformación</li>
                    <li>Pinterest: Galería de ejemplos para inspiración</li>
                    <li>Facebook: Grupos de arte y diseño, anuncios dirigidos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Audiencia Objetivo</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Personas interesadas en arte digital (25-45 años)</li>
                    <li>Pequeños negocios buscando ilustraciones personalizadas</li>
                    <li>Personas que buscan regalos personalizados</li>
                    <li>Aficionados al arte con poca experiencia técnica</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Objetivos de la Campaña</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Generar 500 pre-registros en las primeras 2 semanas</li>
                    <li>Conseguir 1000 seguidores en Instagram</li>
                    <li>Lograr 50 conversiones de la landing page</li>
                    <li>Crear conciencia de marca con 10,000 impresiones</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Plan de Contenido</CardTitle>
              <CardDescription>Tipos de contenido a crear para cada plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Instagram</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Antes/después de transformaciones (carrusel)</li>
                    <li>Reels mostrando el proceso de transformación</li>
                    <li>Historias con encuestas sobre estilos preferidos</li>
                    <li>Publicaciones destacando testimonios de clientes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">TikTok</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Videos de transformación con música de tendencia</li>
                    <li>Tutoriales rápidos sobre cómo usar el servicio</li>
                    <li>Colaboraciones con creadores de contenido</li>
                    <li>Respuestas a preguntas frecuentes en formato video</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Hashtags Principales</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#IlustraciónDigital</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#ArtePersonalizado</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#TransformaciónFoto</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#DiseñoMinimalista</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#RegaloÚnico</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#ArteDigital</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Calendario de Publicaciones</CardTitle>
              <CardDescription>Frecuencia y horarios recomendados para publicar</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Plataforma</TableHead>
                    <TableHead>Frecuencia</TableHead>
                    <TableHead>Mejor Horario</TableHead>
                    <TableHead>Tipo de Contenido</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Instagram</TableCell>
                    <TableCell>4-5 veces por semana</TableCell>
                    <TableCell>12-2pm, 7-9pm</TableCell>
                    <TableCell>Carruseles, Reels, Historias</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TikTok</TableCell>
                    <TableCell>3-4 veces por semana</TableCell>
                    <TableCell>9am, 7pm, 10pm</TableCell>
                    <TableCell>Videos cortos, tendencias</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pinterest</TableCell>
                    <TableCell>10-15 pines semanales</TableCell>
                    <TableCell>2-4pm, 8-11pm</TableCell>
                    <TableCell>Pines de ejemplos, tutoriales</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Facebook</TableCell>
                    <TableCell>3 veces por semana</TableCell>
                    <TableCell>1-4pm</TableCell>
                    <TableCell>Anuncios, grupos, testimonios</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Fases de la Campaña</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Fase de Intriga (1 semana):</strong> Publicaciones que generen curiosidad sobre el servicio
                  </li>
                  <li>
                    <strong>Fase de Lanzamiento (2 semanas):</strong> Anuncio oficial, ejemplos de transformaciones,
                    promoción de pre-registro
                  </li>
                  <li>
                    <strong>Fase de Testimonios (continua):</strong> Compartir resultados y experiencias de clientes
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics">
          <Card>
            <CardHeader>
              <CardTitle>Métricas y KPIs</CardTitle>
              <CardDescription>Indicadores para medir el éxito de la campaña</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Métricas de Alcance</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Impresiones totales</li>
                    <li>Alcance de publicaciones</li>
                    <li>Crecimiento de seguidores</li>
                    <li>Visualizaciones de video</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Métricas de Engagement</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Tasa de interacción (likes, comentarios, compartidos)</li>
                    <li>Tiempo de visualización de videos</li>
                    <li>Guardados y colecciones</li>
                    <li>Menciones de la marca</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Métricas de Conversión</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Clics en enlaces</li>
                    <li>Visitas a la landing page desde redes sociales</li>
                    <li>Tasa de conversión (pre-registros/visitas)</li>
                    <li>Costo por adquisición (CPA)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Herramientas de Análisis</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Google Analytics</li>
                    <li>Estadísticas nativas de cada plataforma</li>
                    <li>Bitly para seguimiento de enlaces</li>
                    <li>Hootsuite o Buffer para programación y análisis</li>
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
