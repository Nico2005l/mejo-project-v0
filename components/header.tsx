"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
    return () => {
      document.body.classList.remove("no-scroll")
    }
  }, [isOpen])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/productos", label: "Productos" },
    { href: "/sobre-nosotros", label: "Historia" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header className="w-full py-4 sm:py-6 px-4 sm:px-6 bg-cream-warm/90 backdrop-blur-sm sticky top-0 z-50 border-b border-border-subtle/50 safe-top">
      <nav className="container-responsive flex justify-between items-center">
        {/* Logo - Responsive sizing */}
        <Link href="/" className="flex items-center group">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-blue-accent tracking-wide group-hover:text-blue-accent transition-colors duration-300">
            Mejo
          </h1>
        </Link>

        {/* Desktop Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "font-nav text-lg lg:text-xl font-semibold tracking-wide transition-all duration-300 relative group px-2 py-1",
                  pathname === link.href ? "text-blue-accent" : "text-brown-chocolate hover:text-blue-accent",
                )}
              >
                {link.label}

                {/* Animated underline */}
                <span
                  className={cn(
                    "absolute left-1/2 -bottom-1 block h-[2px] w-0 bg-[#123FA6] transition-all duration-300 origin-center",
                    pathname === link.href ? "w-full left-0" : "group-hover:w-full group-hover:left-0",
                  )}
                />
              </Link>
              {index < navLinks.length - 1 && <div className="h-6 w-px bg-blue-main/30 hidden lg:block"></div>}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Menu Toggle - Only visible on mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-blue-accent transition-colors p-2 -mr-2"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
          </button>
        </div>

        {/* Mobile Menu Overlay - Only rendered when needed */}
        {isMobile && isOpen && (
          <div
            className={cn(
              "fixed inset-0 bg-cream-warm paper-texture z-[100] transform transition-transform duration-300 ease-in-out",
              "flex flex-col safe-top safe-bottom",
              isOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            {/* Mobile menu header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-border-subtle/50 flex-shrink-0">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-blue-accent">Mejo</h2>
              <button
                onClick={toggleMenu}
                className="text-blue-accent hover:text-blue-accent transition-colors p-2 -mr-2"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Mobile navigation links */}
            <nav className="flex-1 flex flex-col items-center justify-center py-8 px-4 space-y-6 sm:space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-nav text-2xl sm:text-3xl font-semibold transition-all duration-300 relative group text-center",
                    "hover:text-blue-accent hover:border-b-4 hover:border-[#123FA6] pb-2",
                    pathname === link.href
                      ? "text-blue-accent border-b-4 border-[#123FA6]"
                      : "text-brown-chocolate border-b-0",
                  )}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu footer */}
            <div className="p-4 sm:p-6 text-center border-t border-border-subtle/50 flex-shrink-0">
              <p className="text-sm text-brown-chocolate/60">@mejo.pasteleria</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
