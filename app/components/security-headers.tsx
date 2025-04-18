import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SecurityHeaders() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Cabeceras de Seguridad</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Configuración de Cabeceras de Seguridad</CardTitle>
          <CardDescription>
            Estas cabeceras HTTP ayudan a proteger tu aplicación contra varios tipos de ataques
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cabecera</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">X-XSS-Protection</TableCell>
                <TableCell>1; mode=block</TableCell>
                <TableCell>Activa el filtro XSS en navegadores modernos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">X-Frame-Options</TableCell>
                <TableCell>DENY</TableCell>
                <TableCell>Evita que tu sitio sea embebido en iframes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">X-Content-Type-Options</TableCell>
                <TableCell>nosniff</TableCell>
                <TableCell>Evita que el navegador intente adivinar el tipo MIME</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Referrer-Policy</TableCell>
                <TableCell>strict-origin-when-cross-origin</TableCell>
                <TableCell>Controla la información enviada en el encabezado Referer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Content-Security-Policy</TableCell>
                <TableCell>default-src 'self'; script-src 'self' 'unsafe-inline' *.stripe.com; ...</TableCell>
                <TableCell>Define fuentes permitidas para cargar contenido</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Permissions-Policy</TableCell>
                <TableCell>camera=(), microphone=(), geolocation=()</TableCell>
                <TableCell>Controla qué características y APIs puede usar el navegador</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
