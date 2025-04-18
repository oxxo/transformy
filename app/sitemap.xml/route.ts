export function GET(): Response {
  const sitemap = [
    {
      url: "https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app/wizard",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app/pricing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app/examples",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]

  // Convertir el sitemap a formato XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemap
    .map(
      (item) => `
    <url>
      <loc>${item.url}</loc>
      <lastmod>${item.lastModified.toISOString()}</lastmod>
      <changefreq>${item.changeFrequency}</changefreq>
      <priority>${item.priority}</priority>
    </url>
  `,
    )
    .join("")}
</urlset>`

  // Devolver una respuesta con el XML
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
