import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Términos y Condiciones</CardTitle>
          <CardDescription>Última actualización: {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <h2 className="text-xl font-semibold mt-6">1. Aceptación de los términos</h2>
          <p>
            Al acceder y utilizar Minimalista Diseño Digital, aceptas estar legalmente vinculado por estos Términos y
            Condiciones. Si no estás de acuerdo con alguno de estos términos, no debes utilizar nuestro servicio.
          </p>

          <h2 className="text-xl font-semibold mt-6">2. Descripción del servicio</h2>
          <p>
            Minimalista Diseño Digital ofrece un servicio de transformación de fotografías en ilustraciones digitales
            mediante técnicas de diseño gráfico y procesamiento de imágenes.
          </p>

          <h2 className="text-xl font-semibold mt-6">3. Cuentas de usuario</h2>
          <p>
            Al registrarte en nuestro servicio, eres responsable de mantener la confidencialidad de tu cuenta y
            contraseña. Notifícanos inmediatamente si sospechas de cualquier uso no autorizado de tu cuenta.
          </p>

          <h2 className="text-xl font-semibold mt-6">4. Propiedad intelectual</h2>
          <p>
            4.1. <strong>Tus contenidos:</strong> Al subir imágenes a nuestro servicio, garantizas que tienes los
            derechos necesarios sobre dichas imágenes y nos otorgas una licencia no exclusiva para procesarlas con el
            fin de proporcionar nuestro servicio.
          </p>
          <p className="mt-2">
            4.2. <strong>Nuestros contenidos:</strong> Todos los derechos de propiedad intelectual relacionados con
            nuestro servicio, incluyendo pero no limitado a software, diseños, logotipos y contenido creado por
            nosotros, son propiedad de Minimalista Diseño Digital.
          </p>
          <p className="mt-2">
            4.3. <strong>Ilustraciones resultantes:</strong> Una vez completado el pago, recibirás los derechos de uso
            personal o comercial (según el plan adquirido) sobre las ilustraciones generadas. No reivindicamos la
            propiedad de las ilustraciones finales entregadas a los clientes.
          </p>

          <h2 className="text-xl font-semibold mt-6">5. Pagos y reembolsos</h2>
          <p>5.1. Los precios están indicados en la página de precios y pueden estar sujetos a cambios.</p>
          <p className="mt-2">
            5.2. Procesamos los pagos a través de Stripe, un procesador de pagos seguro de terceros.
          </p>
          <p className="mt-2">
            5.3. Política de reembolsos: Ofrecemos reembolsos completos si no estás satisfecho con el resultado final,
            siempre que lo solicites dentro de los 14 días posteriores a la entrega.
          </p>

          <h2 className="text-xl font-semibold mt-6">6. Limitación de responsabilidad</h2>
          <p>
            En la medida permitida por la ley, Minimalista Diseño Digital no será responsable por daños indirectos,
            incidentales, especiales, consecuentes o punitivos, o cualquier pérdida de beneficios o ingresos.
          </p>

          <h2 className="text-xl font-semibold mt-6">7. Contenido prohibido</h2>
          <p>No está permitido utilizar nuestro servicio para transformar imágenes que contengan:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Contenido ilegal o que promueva actividades ilegales</li>
            <li>Contenido que infrinja derechos de propiedad intelectual</li>
            <li>Contenido pornográfico o sexualmente explícito</li>
            <li>Contenido que promueva la discriminación o el odio</li>
            <li>Contenido que represente violencia gráfica</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">8. Modificaciones del servicio y términos</h2>
          <p>
            Nos reservamos el derecho de modificar o discontinuar, temporal o permanentemente, nuestro servicio con o
            sin previo aviso. También podemos actualizar estos términos ocasionalmente, y los cambios entrarán en vigor
            inmediatamente después de su publicación.
          </p>

          <h2 className="text-xl font-semibold mt-6">9. Ley aplicable</h2>
          <p>
            Estos términos se regirán e interpretarán de acuerdo con las leyes de [Tu país/jurisdicción], sin tener en
            cuenta sus disposiciones sobre conflictos de leyes.
          </p>

          <h2 className="text-xl font-semibold mt-6">10. Contacto</h2>
          <p>Si tienes preguntas sobre estos Términos y Condiciones, contáctanos en:</p>
          <p className="mt-2">
            Email: legal@minimalista-diseno.com
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
