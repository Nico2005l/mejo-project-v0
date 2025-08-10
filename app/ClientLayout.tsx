"use client" // Added 'use client' directive

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useEffect } from "react" // Import useEffect
import { usePathname } from "next/navigation" // Import usePathname

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname() // Get current pathname

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [pathname]) // Dependency array: re-run when pathname changes

  return (
    <body className="min-h-screen bg-cream-warm font-body antialiased paper-texture">
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  )
}
