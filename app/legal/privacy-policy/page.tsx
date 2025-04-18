import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Política de Privacidad</CardTitle>
          <CardDescription>Última actualización: {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <h2 className="text-xl font-semibold mt-6">1. Información que recopilamos</h2>
          <p>En Minimalista Diseño Digital, recopilamos la siguiente información personal:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Información de contacto (como nombre, dirección de correo electrónico)</li>
            <li>Información de pago (procesada de forma segura a través de Stripe)</li>
            <li>Imágenes que subes para transformación</li>
            <li>Información de uso del sitio web y preferencias</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">2. Cómo utilizamos tu información</h2>
          <p>Utilizamos la información recopilada para:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Proporcionar, mantener y mejorar nuestros servicios</li>
            <li>Procesar transacciones y enviar notificaciones relacionadas</li>
            <li>Responder a tus comentarios y preguntas</li>
            <li>Proteger contra actividades fraudulentas o ilegales</li>
            <li>Personalizar tu experiencia en nuestro sitio</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">3. Compartición de datos</h2>
          <p>No vendemos tu información personal a terceros. Podemos compartir información con:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Proveedores de servicios que nos ayudan a operar nuestro negocio (como Stripe para procesamiento de pagos)
            </li>
            <li>Cuando sea requerido por ley o para proteger nuestros derechos</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">4. Seguridad de datos</h2>
          <p>
            Implementamos medidas de seguridad diseñadas para proteger tu información personal, incluyendo encriptación
            HTTPS, almacenamiento seguro de datos y acceso restringido a información personal.
          </p>

          <h2 className="text-xl font-semibold mt-6">5. Tus derechos</h2>
          <p>Dependiendo de tu ubicación, puedes tener derechos relacionados con tus datos personales, incluyendo:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Acceder a los datos personales que tenemos sobre ti</li>
            <li>Corregir datos inexactos</li>
            <li>Eliminar tus datos personales</li>
            <li>Oponerte al procesamiento de tus datos</li>
            <li>Solicitar la portabilidad de tus datos</li>
          </ul>
          <p className="mt-2">
            Para ejercer estos derechos, contáctanos a través de la información proporcionada al final de esta política.
          </p>

          <h2 className="text-xl font-semibold mt-6">6. Cookies y tecnologías similares</h2>
          <p>
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico y personalizar
            el contenido. Puedes controlar las cookies a través de la configuración de tu navegador.
          </p>

          <h2 className="text-xl font-semibold mt-6">7. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre cambios significativos
            publicando la nueva política de privacidad en esta página.
          </p>

          <h2 className="text-xl font-semibold mt-6">8. Contacto</h2>
          <p>Si tienes preguntas sobre esta política de privacidad, contáctanos en:</p>
          <p className="mt-2">
            Email: privacy@minimalista-diseno.com
            <br />
            Dirección: [Tu dirección física]
            <br />
            Teléfono: [Tu número de teléfono]
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
