import type React from "react"
import type { Metadata } from "next"
import { Dancing_Script, Quicksand } from "next/font/google"
import "./globals.css"
import ScrollToTopAndLayout from "./ScrollToTopAndLayout"
import { Analytics } from "@vercel/analytics/next"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { Suspense } from "react"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-dancing",
  display: "swap",
  preload: true,
})

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-quicksand",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Mejo Pastelería - Dulces creaciones artesanales",
  description:
    "Pastelería artesanal con productos elaborados con amor y dedicación. Especialistas en tortas personalizadas, postres gourmet y dulces únicos en Bogotá.",
  keywords: "pastelería, tortas, postres, dulces, artesanal, Bogotá, personalizado",
  authors: [{ name: "Mejo Pastelería" }],
  creator: "Mejo Pastelería",
  publisher: "Mejo Pastelería",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mejo-pasteleria.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mejo Pastelería - Dulces creaciones artesanales",
    description: "Pastelería artesanal con productos elaborados con amor y dedicación",
    url: "https://mejo-pasteleria.vercel.app",
    siteName: "Mejo Pastelería",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejo Pastelería - Dulces creaciones artesanales",
    description: "Pastelería artesanal con productos elaborados con amor y dedicación",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${dancingScript.variable} ${quicksand.variable} scrollbar-thin`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#123fa6" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-cream-warm font-body antialiased paper-texture">
        <Suspense fallback={null}>
          <ScrollToTopAndLayout>{children}</ScrollToTopAndLayout>
        </Suspense>
        <Analytics />
        <PerformanceMonitor />
      </body>
    </html>
  )
}
