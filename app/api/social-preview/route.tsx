import { NextResponse } from "next/server"
import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const style = searchParams.get("style") || "anime"
  const title = searchParams.get("title") || "Transforma tu foto en arte digital"

  // Determinar qué imagen de fondo usar según el estilo
  let backgroundImage = "/vibrant-city-street.png" // default - anime
  if (style === "ghibli") {
    backgroundImage = "/forest-spirit-glade.png"
  } else if (style === "watercolor") {
    backgroundImage = "/whimsical-forest-path.png"
  }

  // Cargar fuentes
  const interBold = await fetch(
    new URL("https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap", request.url),
  ).then((res) => res.arrayBuffer())

  try {
    return new ImageResponse(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#f8fafc",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "20px",
              textShadow: "0px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "white",
              marginBottom: "40px",
              textShadow: "0px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Ilustraciones profesionales en minutos
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#8b5cf6",
              color: "white",
              padding: "16px 32px",
              borderRadius: "9999px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            ¡Pruébalo ahora!
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              background: "linear-gradient(to right, #8b5cf6, #d946ef)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              padding: "8px 16px",
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: "8px",
            }}
          >
            ArtifyMe
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (error) {
    console.error("Error generating social preview:", error)
    return NextResponse.json({ error: "Failed to generate image" }, { status: 500 })
  }
}
