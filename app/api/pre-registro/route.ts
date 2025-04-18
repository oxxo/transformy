import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Aquí iría la lógica para guardar el email en una base de datos
    // Por ejemplo, usando Supabase, Firebase, o enviando a un servicio de email marketing

    // Simulamos un proceso exitoso
    console.log(`Email registrado: ${email}`)

    // En una implementación real, aquí se enviaría un email de confirmación

    return NextResponse.json({
      success: true,
      message: "Email registrado correctamente",
    })
  } catch (error) {
    console.error("Error al registrar email:", error)
    return NextResponse.json({ success: false, message: "Error al procesar la solicitud" }, { status: 500 })
  }
}
