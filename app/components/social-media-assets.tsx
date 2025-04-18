import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function SocialMediaAssets() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Recursos para Redes Sociales</h1>

      <Tabs defaultValue="templates">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="templates">Plantillas</TabsTrigger>
          <TabsTrigger value="captions">Textos</TabsTrigger>
          <TabsTrigger value="hashtags">Hashtags</TabsTrigger>
        </TabsList>

        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>Plantillas para Publicaciones</CardTitle>
              <CardDescription>Diseños listos para usar en tus publicaciones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-square relative bg-gray-100">
                    <Image
                      src="/minimalist-transformation.png"
                      alt="Plantilla antes/después"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Antes/Después</h3>
                    <p className="text-sm text-gray-500">Para mostrar transformaciones</p>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-square relative bg-gray-100">
                    <Image
                      src="/minimalist-testimonial.png"
                      alt="Plantilla de testimonios"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Testimonios</h3>
                    <p className="text-sm text-gray-500">Para compartir experiencias</p>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-square relative bg-gray-100">
                    <Image
                      src="/vibrant-discount-promo.png"
                      alt="Plantilla de promoción"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Promociones</h3>
                    <p className="text-sm text-gray-500">Para ofertas especiales</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Dimensiones Recomendadas</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Instagram Feed:</strong> 1080 x 1080px (cuadrado)
                  </li>
                  <li>
                    <strong>Instagram Stories:</strong> 1080 x 1920px (vertical)
                  </li>
                  <li>
                    <strong>TikTok:</strong> 1080 x 1920px (vertical)
                  </li>
                  <li>
                    <strong>Facebook:</strong> 1200 x 630px (horizontal)
                  </li>
                  <li>
                    <strong>Pinterest:</strong> 1000 x 1500px (vertical)
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="captions">
          <Card>
            <CardHeader>
              <CardTitle>Textos para Publicaciones</CardTitle>
              <CardDescription>Ejemplos de textos para acompañar tus publicaciones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-300 pl-4 py-2">
                  <h3 className="font-medium">Lanzamiento</h3>
                  <p className="mt-1 text-gray-700">
                    ✨ ¡Emocionados de presentar nuestro nuevo servicio de ilustración digital! Transforma tus fotos en
                    arte único con solo unos clics. Pre-regístrate ahora y obtén un 20% de descuento en tu primera
                    ilustración. Link en bio. #ArteDigital #DiseñoMinimalista
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-4 py-2">
                  <h3 className="font-medium">Antes/Después</h3>
                  <p className="mt-1 text-gray-700">
                    De foto a obra de arte en minutos ✨ Desliza para ver la transformación completa. ¿Qué estilo te
                    gustaría probar? Comenta abajo y visita nuestro sitio para crear tu propia ilustración
                    personalizada. #TransformaciónDigital #ArteDesdeFotos
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-4 py-2">
                  <h3 className="font-medium">Testimonios</h3>
                  <p className="mt-1 text-gray-700">
                    "No podía creer lo hermosa que quedó mi ilustración. Es exactamente lo que quería y ahora decora mi
                    sala" - María L. 💬 Nos encanta ver cómo nuestras creaciones traen alegría a nuestros clientes.
                    ¿Listo para la tuya? Link en bio. #TestimoniosReales #ClientesFelices
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-4 py-2">
                  <h3 className="font-medium">Promoción</h3>
                  <p className="mt-1 text-gray-700">
                    🎁 OFERTA ESPECIAL: Solo por esta semana, obtén 2 ilustraciones por el precio de 1. ¡El regalo
                    perfecto para compartir! Usa el código DUOARTE al finalizar tu compra. Oferta válida hasta el
                    domingo. ¡No te lo pierdas! #OfertaEspecial #RegaloÚnico
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-4 py-2">
                  <h3 className="font-medium">Pregunta de Engagement</h3>
                  <p className="mt-1 text-gray-700">
                    ¿Cuál es tu estilo de ilustración favorito? 🎨 ¿Minimalista, acuarela, o tal vez algo más abstracto?
                    Comenta abajo y muéstranos tu preferencia. Estamos constantemente añadiendo nuevos estilos basados
                    en vuestros comentarios. #EstilosDeArte #TuOpiniónCuenta
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hashtags">
          <Card>
            <CardHeader>
              <CardTitle>Colecciones de Hashtags</CardTitle>
              <CardDescription>Grupos de hashtags organizados por categoría</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Hashtags Generales</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#IlustraciónDigital</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#ArteDigital</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#DiseñoMinimalista</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#ArtePersonalizado</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#TransformaciónFoto</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#DiseñoGráfico</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#ArtistasDigitales</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#CreatividadDigital</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Hashtags de Estilos</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#EstiloMinimalista</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#ArteAbstracto</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#EstiloAcuarela</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#DiseñoGeométrico</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#EstiloVintage</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#ArteContemporáneo</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#EstiloCartoon</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#ArteLineal</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Hashtags de Ocasiones</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#RegaloPersonalizado</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#RegaloAniversario</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#RegaloCumpleaños</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#DecoraciónHogar</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#RegaloBoda</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#RecuerdoEspecial</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#MomentoÚnico</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Hashtags de Promoción</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#OfertaEspecial</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#Descuento</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#PreRegistro</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#LanzamientoEspecial</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#PromoLimitada</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#2x1</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">#CompraAhora</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Consejos para Hashtags</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Usa entre 5-15 hashtags por publicación</li>
                    <li>Combina hashtags populares con nichos específicos</li>
                    <li>Investiga hashtags relevantes en tu industria</li>
                    <li>Crea un hashtag único para tu marca</li>
                    <li>Actualiza tus hashtags regularmente según tendencias</li>
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
