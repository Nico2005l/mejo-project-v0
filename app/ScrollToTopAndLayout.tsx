"use client" // This is a Client Component

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTopAndLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
