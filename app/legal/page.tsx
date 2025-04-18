import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function LegalPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Información Legal</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/legal/privacy-policy" className="block">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Política de Privacidad</CardTitle>
              <CardDescription>Cómo recopilamos, usamos y protegemos tu información</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Nuestra política de privacidad detalla cómo manejamos tus datos personales, incluyendo qué información
                recopilamos, cómo la utilizamos y tus derechos respecto a tus datos.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/legal/terms" className="block">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Términos y Condiciones</CardTitle>
              <CardDescription>Acuerdo legal para el uso de nuestros servicios</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Nuestros términos y condiciones establecen las reglas, directrices y acuerdos que rigen el uso de
                nuestro servicio de ilustración digital.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Información de Contacto</CardTitle>
            <CardDescription>Cómo ponerte en contacto con nosotros</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Dirección</h3>
                <p className="text-gray-600">[Tu dirección física]</p>
              </div>

              <div>
                <h3 className="font-medium">Correo Electrónico</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@minimalista-diseno.com" className="text-primary hover:underline">
                    info@minimalista-diseno.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-medium">Teléfono</h3>
                <p className="text-gray-600">[Tu número de teléfono]</p>
              </div>

              <div>
                <h3 className="font-medium">Horario de Atención</h3>
                <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
