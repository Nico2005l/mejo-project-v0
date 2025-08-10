import type React from "react"
import type { Metadata } from "next"
import { Dancing_Script, Quicksand } from "next/font/google"
import "./globals.css"
import ScrollToTopAndLayout from "./ScrollToTopAndLayout" // Renamed and re-imported
import { Analytics } from "@vercel/analytics/next" // Import Vercel Analytics
import { Suspense } from "react" // Import Suspense

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"], // Added 600 for navigation
  variable: "--font-dancing",
  display: "swap",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400"], // Specified weight 400
  variable: "--font-quicksand",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mejo Pastelería - Dulces creaciones artesanales",
  description: "Pastelería artesanal con productos elaborados con amor y dedicación",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${dancingScript.variable} ${quicksand.variable}`}>
      {/* The body tag and its classes are now correctly placed here */}
      <body className="min-h-screen bg-cream-warm font-body antialiased paper-texture">
        {/* ScrollToTopAndLayout is a Client Component that wraps the main content */}
        <Suspense fallback={null}>
          <ScrollToTopAndLayout>{children}</ScrollToTopAndLayout>
        </Suspense>
        <Analytics /> {/* Vercel Web Analytics component */}
      </body>
    </html>
  )
}
