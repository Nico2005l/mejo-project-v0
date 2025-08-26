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
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleMenu = () => {
    if (isAnimating) return // Prevent multiple clicks during animation

    setIsAnimating(true)
    setIsOpen(!isOpen)

    // Reset animation state after transition completes
    setTimeout(() => setIsAnimating(false), 300)
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
      // Prevent background scrolling on iOS
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    } else {
      document.body.classList.remove("no-scroll")
      document.body.style.position = ""
      document.body.style.width = ""
    }
    return () => {
      document.body.classList.remove("no-scroll")
      document.body.style.position = ""
      document.body.style.width = ""
    }
  }, [isOpen])

  // Close mobile menu when route changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 300)
    }
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/productos", label: "Productos" },
    { href: "/sobre-nosotros", label: "Historia" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <>
      <header className="w-full py-6 sm:py-8 px-4 sm:px-6 bg-cream-warm/95 backdrop-blur-md sticky top-0 z-40 border-b border-border-subtle/50 safe-top shadow-sm">
        <nav className="container-responsive flex justify-between items-center pt-8">
          {/* Logo - Responsive sizing */}
          <Link href="/" className="flex items-center group relative z-50">
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
          <div className="md:hidden flex items-center relative z-50">
            <button
              className={cn(
                "text-blue-accent transition-all duration-300 p-3 -mr-3 rounded-full",
                "hover:bg-blue-light/30 active:bg-blue-light/50",
                "focus:outline-none focus:ring-2 focus:ring-blue-main focus:ring-offset-2",
                "min-w-[48px] min-h-[48px] flex items-center justify-center",
                isAnimating && "pointer-events-none",
              )}
              onClick={toggleMenu}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              disabled={isAnimating}
            >
              <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                <Menu
                  className={cn(
                    "absolute inset-0 transition-all duration-300 transform",
                    isOpen ? "rotate-180 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 transition-all duration-300 transform",
                    isOpen ? "rotate-0 opacity-100 scale-100" : "rotate-180 opacity-0 scale-75",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Only rendered when needed */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 z-[100] transform transition-all duration-300 ease-out",
            "flex flex-col safe-top safe-bottom",
            isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible",
          )}
          style={{
            background: "var(--cream-warm)",
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(92, 61, 46, 0.02) 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, rgba(92, 61, 46, 0.02) 1px, transparent 1px),
              radial-gradient(circle at 40% 80%, rgba(92, 61, 46, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px, 25px 25px, 35px 35px",
          }}
        >
          {/* Mobile menu header */}
          <div className="flex justify-between items-center p-4 sm:p-6 lg:p-8 border-b border-border-subtle/30 flex-shrink-0 bg-cream-warm/80 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-blue-accent tracking-wide">
              Mejo
            </h2>
            <button
              onClick={toggleMenu}
              className={cn(
                "text-blue-accent hover:text-blue-accent transition-all duration-300 p-3 -mr-3 rounded-full",
                "hover:bg-blue-light/30 active:bg-blue-light/50",
                "focus:outline-none focus:ring-2 focus:ring-blue-main focus:ring-offset-2",
                "min-w-[48px] min-h-[48px] flex items-center justify-center",
              )}
              aria-label="Cerrar menú"
              disabled={isAnimating}
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </button>
          </div>

          {/* Mobile navigation links */}
          <nav className="flex-1 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-10 overflow-y-auto">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-nav text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold transition-all duration-300 relative group text-center",
                  "hover:text-blue-accent hover:scale-105 active:scale-95",
                  "focus:outline-none focus:ring-2 focus:ring-blue-main focus:ring-offset-4 focus:ring-offset-cream-warm rounded-lg",
                  "px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5",
                  "min-h-[60px] sm:min-h-[70px] lg:min-h-[80px] flex items-center justify-center",
                  "w-full max-w-xs sm:max-w-sm lg:max-w-md",
                  "transform transition-transform duration-300",
                  pathname === link.href
                    ? "text-blue-accent bg-blue-light/20 rounded-2xl shadow-lg border-2 border-blue-main/20"
                    : "text-brown-chocolate hover:bg-blue-light/10 rounded-2xl",
                )}
                onClick={toggleMenu}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isOpen ? "slideInFromRight 0.4s ease-out forwards" : "none",
                }}
              >
                <span className="relative">
                  {link.label}
                  {/* Enhanced underline for mobile */}
                  <span
                    className={cn(
                      "absolute left-1/2 -bottom-2 sm:-bottom-3 block h-[3px] sm:h-[4px] bg-[#123FA6] transition-all duration-300 origin-center rounded-full",
                      pathname === link.href
                        ? "w-full left-0 opacity-100"
                        : "w-0 group-hover:w-full group-hover:left-0 opacity-80",
                    )}
                  />
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu footer */}
          <div className="p-4 sm:p-6 lg:p-8 text-center border-t border-border-subtle/30 flex-shrink-0 bg-cream-warm/80 backdrop-blur-sm">
            <p className="text-sm sm:text-base lg:text-lg text-brown-chocolate/60 font-body tracking-wide">
              @mejo.pasteleria
            </p>
            <div className="mt-2 sm:mt-3 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-main/30 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-main/50 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-main/30 rounded-full"></div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] transition-opacity duration-300"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}
