export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/studio",
          "/private",
          "/public/assets",
          "/payment",
          "/assets",
          "/_next",
          "/articles",
        ],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
