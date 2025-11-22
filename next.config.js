/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Workaround para evitar el crash en "Collecting build traces" en Vercel
  // (desactiva el file tracing avanzado del lado del servidor)
  outputFileTracing: false,
}

module.exports = nextConfig
