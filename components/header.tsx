"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  // Optimized resize handler
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const checkIsMobile = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768)
      }, 100)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile, { passive: true })

    return () => {
      window.removeEventListener("resize", checkIsMobile)
      clearTimeout(timeoutId)
    }
  }, [])

  // Optimized scroll handler
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 20)
      }, 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  // Body scroll lock
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

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  const navLinks = useMemo(
    () => [
      { href: "/", label: "Inicio" },
      { href: "/productos", label: "Productos" },
      { href: "/sobre-nosotros", label: "Historia" },
      { href: "/contacto", label: "Contacto" },
    ],
    [],
  )

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 transition-all duration-300 safe-top",
        "bg-cream-warm/90 backdrop-blur-md border-b border-border-subtle/50",
        isScrolled && "shadow-medium bg-cream-warm/95",
      )}
    >
      <nav className="container-fluid flex justify-between items-center py-fluid-sm">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-main rounded-lg"
        >
          <h1 className="text-fluid-4xl font-display font-bold text-blue-accent tracking-wide group-hover:text-blue-main transition-colors duration-300">
            Mejo
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-fluid-lg">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "font-nav text-fluid-lg font-semibold tracking-wide transition-all duration-300 relative group",
                  "px-fluid-sm py-fluid-xs rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-main",
                  pathname === link.href ? "text-blue-accent" : "text-brown-chocolate hover:text-blue-accent",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute left-1/2 -bottom-1 block h-0.5 w-0 bg-blue-main transition-all duration-300 origin-center rounded-full",
                    pathname === link.href ? "w-full left-0" : "group-hover:w-full group-hover:left-0",
                  )}
                />
              </Link>
              {index < navLinks.length - 1 && <div className="h-6 w-px bg-blue-main/30 hidden lg:block" />}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-fluid-xs -mr-2 text-blue-accent transition-colors rounded-lg",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-main",
          )}
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobile && (
          <div
            className={cn(
              "fixed inset-0 bg-cream-warm paper-texture z-[100]",
              "transform transition-transform duration-300 ease-out",
              "flex flex-col safe-top safe-bottom",
              isOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-fluid-md border-b border-border-subtle/50 flex-shrink-0">
              <h2 className="text-fluid-3xl font-display font-bold text-blue-accent">Mejo</h2>
              <button
                onClick={closeMenu}
                className="text-blue-accent p-fluid-xs -mr-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-main"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-fluid-xl px-fluid-md">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-nav text-fluid-3xl font-semibold transition-all duration-300 text-center",
                    "px-fluid-lg py-fluid-sm rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-main",
                    "hover:text-blue-accent hover:bg-blue-light/30",
                    pathname === link.href ? "text-blue-accent bg-blue-light/50" : "text-brown-chocolate",
                  )}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Footer */}
            <div className="p-fluid-md text-center border-t border-border-subtle/50 flex-shrink-0">
              <p className="text-fluid-sm text-brown-chocolate/60">@mejo.pasteleria</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
