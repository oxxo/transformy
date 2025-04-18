export function GET() {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app/sitemap.xml
`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
