"use client"

import React, { useState, useEffect } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false) // Estado para detectar si es móvil

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    // Función para actualizar el estado isMobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // Tailwind's 'md' breakpoint is 768px
    }

    // Establecer el estado inicial
    checkIsMobile()

    // Añadir event listener para cambios de tamaño de ventana
    window.addEventListener("resize", checkIsMobile)

    // Limpiar event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, []) // Se ejecuta solo una vez al montar

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll") // Add the no-scroll class
    } else {
      document.body.classList.remove("no-scroll") // Remove the no-scroll class
    }
    return () => {
      document.body.classList.remove("no-scroll") // Ensure class is removed on unmount
    }
  }, [isOpen])

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/productos", label: "Productos" },
    { href: "/sobre-nosotros", label: "Historia" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header className="w-full py-6 px-6 bg-cream-warm/90 backdrop-blur-sm sticky top-0 z-50 border-b border-border-subtle/50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <h1 className="text-4xl font-display font-bold text-blue-accent tracking-wide group-hover:text-blue-accent transition-colors duration-300">
            Mejo
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "font-nav text-xl font-semibold tracking-wide transition-all duration-300 relative group",
                  pathname === link.href
                    ? "text-blue-accent"
                    : "text-brown-chocolate",
                )}
              >
                {link.label}

                {/* Subrayado animado */}
                <span
                  className={cn(
                    "absolute left-1/2 -bottom-1 block h-[2px] w-0 bg-[#123FA6] transition-all duration-300 origin-center",
                    pathname === link.href
                      ? "w-full left-0"
                      : "group-hover:w-full group-hover:left-0"
                  )}
                />
              </Link>
              {index < navLinks.length - 1 && <div className="h-6 w-px bg-blue-main/30"></div>}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Menu Toggle (conditionally rendered only on mobile) */}
        {isMobile && (
          <div className="flex items-center">
            <button className="text-blue-accent transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
              <Menu className="w-7 h-7" />
            </button>
          </div>
        )}

        {/* Mobile Menu Overlay (conditionally rendered only on mobile AND when open) */}
        {isMobile && isOpen && (
          <div
            className={cn(
              "fixed inset-0 bg-cream-warm paper-texture z-[100] transform transition-transform duration-300 ease-in-out min-h-screen",
              isOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            <div className="flex justify-between items-center p-6 border-b border-border-subtle/50">
              <h2 className="text-3xl font-display font-bold text-blue-accent">Mejo</h2>
              <button
                onClick={toggleMenu}
                className="text-blue-accent hover:text-blue-accent transition-colors"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
            <nav className="flex flex-col items-center py-12 space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-nav text-3xl font-semibold transition-all duration-300 relative group",
                    "hover:text-blue-accent hover:border-b-4 hover:border-[#123FA6]", // Hover effect
                    pathname === link.href
                      ? "text-blue-accent border-b-4 border-[#123FA6]" // Active state
                      : "text-brown-chocolate border-b-0", // Default state
                  )}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </nav>
    </header>
  )
}
