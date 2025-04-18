import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Copy, Download, Share2, Instagram, Facebook, Twitter } from "lucide-react"

export default function CampanaSocialPage() {
  // Estilos disponibles
  const styles = [
    {
      id: "anime",
      name: "Anime Style",
      description: "Vibrant colors and expressive character aesthetics",
    },
    {
      id: "ghibli",
      name: "Ghibli Style",
      description: "Dreamlike landscapes with whimsical details",
    },
    {
      id: "watercolor",
      name: "Watercolor Style",
      description: "Soft, watercolor-like aesthetics",
    },
  ]

  // Copys para redes sociales
  const socialCopys = [
    {
      title: "Lanzamiento",
      content:
        "✨ ¡NUEVO! ✨ Transforma tus fotos en increíbles ilustraciones digitales con ArtifyMe. Elige entre estilos anime, Ghibli y acuarela. ¡Resultados en menos de 10 minutos! Pruébalo ahora con 30% de descuento por lanzamiento. #ArtifyMe #FotoAArte",
    },
    {
      title: "Promoción",
      content:
        "🔥 OFERTA POR TIEMPO LIMITADO 🔥 30% de descuento en todas las ilustraciones digitales. Convierte tu foto favorita en una obra de arte única. ¡Solo por esta semana! Visita ArtifyMe.com ahora. #OfertaEspecial #ArteDigital",
    },
    {
      title: "Testimonial",
      content:
        '"Convertí mi foto en estilo Ghibli y quedó espectacular. El proceso fue súper fácil y rápido" - María G. ⭐⭐⭐⭐⭐ Únete a miles de clientes satisfechos en ArtifyMe.com #Testimonios #ArteDigital',
    },
    {
      title: "Uso",
      content:
        "💡 IDEAS: Regala una ilustración personalizada, decora tu hogar con tu arte favorito, o crea un perfil único para tus redes. Las posibilidades son infinitas con ArtifyMe. ¿Cómo usarías tu ilustración? #IdeasCreativas #RegaloOriginal",
    },
  ]

  // Hashtags recomendados
  const hashtags = [
    "#ArtifyMe",
    "#FotoAArte",
    "#IlustraciónDigital",
    "#ArteDigital",
    "#EstiloAnime",
    "#EstiloGhibli",
    "#Acuarela",
    "#TransformaciónDigital",
    "#RegaloOriginal",
    "#ArtePersonalizado",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
            Campaña de Redes Sociales
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Materiales y recursos para promocionar ArtifyMe en redes sociales
          </p>
        </div>

        <Tabs defaultValue="images" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="images">Imágenes</TabsTrigger>
            <TabsTrigger value="copy">Textos</TabsTrigger>
            <TabsTrigger value="hashtags">Hashtags</TabsTrigger>
          </TabsList>

          <TabsContent value="images" className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">Imágenes para Redes Sociales</h2>
              <p className="text-gray-600 mb-6">
                Utiliza estas imágenes generadas automáticamente para promocionar ArtifyMe en tus redes sociales.
                Personaliza el estilo y el título según tus necesidades.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {styles.map((style) => (
                  <Card key={style.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle>{style.name}</CardTitle>
                      <CardDescription>{style.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="relative aspect-[1200/630] overflow-hidden">
                        <img
                          src={`/api/social-preview?style=${style.id}&title=Transforma%20tu%20foto%20en%20${style.name}`}
                          alt={`Preview de ${style.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-4">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Copy className="h-4 w-4" /> Copiar URL
                      </Button>
                      <Button size="sm" className="flex items-center gap-1">
                        <Download className="h-4 w-4" /> Descargar
                      </Button>
                    </CardFooter>
                  </Card>
                ))}

                <Card>
                  <CardHeader>
                    <CardTitle>Personalizar imagen</CardTitle>
                    <CardDescription>Crea tu propia imagen para redes sociales</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="custom-style">Estilo</Label>
                      <select id="custom-style" className="w-full p-2 border rounded-md" defaultValue="anime">
                        <option value="anime">Anime Style</option>
                        <option value="ghibli">Ghibli Style</option>
                        <option value="watercolor">Watercolor Style</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-title">Título</Label>
                      <Input
                        id="custom-title"
                        placeholder="Transforma tu foto en arte digital"
                        defaultValue="Transforma tu foto en arte digital"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Generar imagen personalizada</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">Ejemplos de Transformaciones</h2>
              <p className="text-gray-600 mb-6">
                Utiliza estos ejemplos de antes/después para mostrar el poder de ArtifyMe.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Antes / Después - Anime Style</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Foto original</p>
                        <img
                          src="/ejemplos/original-1.png"
                          alt="Foto original"
                          className="rounded-lg w-full h-40 object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Ilustración generada</p>
                        <img
                          src="/ejemplos/anime-1.png"
                          alt="Ilustración generada"
                          className="rounded-lg w-full h-40 object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Copy className="h-4 w-4" /> Copiar URL
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <Download className="h-4 w-4" /> Descargar
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Antes / Después - Ghibli Style</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Foto original</p>
                        <img
                          src="/ejemplos/original-2.png"
                          alt="Foto original"
                          className="rounded-lg w-full h-40 object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Ilustración generada</p>
                        <img
                          src="/ejemplos/ghibli-1.png"
                          alt="Ilustración generada"
                          className="rounded-lg w-full h-40 object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Copy className="h-4 w-4" /> Copiar URL
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <Download className="h-4 w-4" /> Descargar
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="copy" className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">Textos para Redes Sociales</h2>
              <p className="text-gray-600 mb-6">
                Utiliza estos textos predefinidos para tus publicaciones en redes sociales. Puedes copiarlos
                directamente o personalizarlos según tus necesidades.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {socialCopys.map((copy, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{copy.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Textarea className="min-h-[100px]" value={copy.content} readOnly />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Copy className="h-4 w-4" /> Copiar texto
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Instagram className="h-4 w-4" /> Instagram
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Facebook className="h-4 w-4" /> Facebook
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Twitter className="h-4 w-4" /> Twitter
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Crear texto personalizado</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Texto personalizado</CardTitle>
                    <CardDescription>Crea tu propio texto para redes sociales</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="custom-title">Título</Label>
                      <Input id="custom-title" placeholder="Título de la publicación" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-content">Contenido</Label>
                      <Textarea
                        id="custom-content"
                        placeholder="Escribe aquí el contenido de tu publicación..."
                        className="min-h-[150px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Guardar texto personalizado</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hashtags" className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">Hashtags Recomendados</h2>
              <p className="text-gray-600 mb-6">
                Utiliza estos hashtags en tus publicaciones para aumentar su visibilidad y alcance.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {hashtags.map((hashtag, index) => (
                  <div
                    key={index}
                    className="bg-violet-100 text-violet-800 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-violet-200 cursor-pointer transition-colors"
                  >
                    {hashtag}
                  </div>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Todos los hashtags</CardTitle>
                  <CardDescription>Copia todos los hashtags de una vez</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea className="min-h-[100px]" value={hashtags.join(" ")} readOnly />
                </CardContent>
                <CardFooter>
                  <Button className="w-full flex items-center gap-2">
                    <Copy className="h-4 w-4" /> Copiar todos los hashtags
                  </Button>
                </CardFooter>
              </Card>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Hashtags por categoría</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Arte Digital</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-violet-100 text-violet-800 px-3 py-1.5 rounded-full text-sm font-medium">
                          #ArteDigital
                        </div>
                        <div className="bg-violet-100 text-violet-800 px-3 py-1.5 rounded-full text-sm font-medium">
                          #IlustraciónDigital
                        </div>
                        <div className="bg-violet-100 text-violet-800 px-3 py-1.5 rounded-full text-sm font-medium">
                          #ArteIA
                        </div>
                        <div className="bg-violet-100 text-violet-800 px-3 py-1.5 rounded-full text-sm font-medium">
                          #DiseñoDigital
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Copiar hashtags
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Estilos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-violet-100 text-violet-800 px-3 py-1.5 rounded-full text-sm font-medium">
                          #EstiloAnime
                        </div>
                        <div className="bg-violet-100 text-violet-800 px-3 py-1.5 rounded-full text-sm font-medium">
                          #EstiloGhibli
                        </div>
                        <div className="bg-violet-100 text-violet-800 px-3 py-1.5 rounded-full text-sm font-medium">
                          #Acuarela
                        </div>
                        <div className="bg-violet-100 text-violet-800 px-3 py-1.5 rounded-full text-sm font-medium">
                          #AnimeArt
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Copiar hashtags
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">¿Listo para comenzar tu campaña en redes sociales?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
              <Share2 className="mr-2 h-4 w-4" /> Compartir en redes sociales
            </Button>
            <Link href="/">
              <Button variant="outline">Volver al inicio</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
