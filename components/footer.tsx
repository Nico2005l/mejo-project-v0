import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"
import { CornerLines } from "@/components/corner-lines"

export function Footer() {
  return (
    <footer className="w-full py-12 sm:py-16 px-4 sm:px-6 mt-8 sm:mt-12">
      <div className="container-responsive">
        <div className="incomplete-border-box relative">
          <CornerLines />

          {/* Main Footer Content */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-blue-accent mb-4 sm:mb-6 tracking-wide">
              Mejo
            </h3>
            <div className="organic-line-separator h-8 mb-6 sm:mb-8"></div>
            <p className="font-body text-sm sm:text-base text-brown-chocolate/80 leading-relaxed max-w-2xl mx-auto px-4">
              Pastelería artesanal boutique dedicada a crear momentos dulces e inolvidables con productos de la más alta
              calidad.
            </p>
          </div>

          {/* Navigation Links - Responsive grid */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Link
              href="/"
              className="font-body text-sm sm:text-base text-brown-chocolate hover:text-blue-main transition-colors tracking-wide text-center"
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              className="font-body text-sm sm:text-base text-brown-chocolate hover:text-blue-main transition-colors tracking-wide text-center"
            >
              Productos
            </Link>
            <Link
              href="/sobre-nosotros"
              className="font-body text-sm sm:text-base text-brown-chocolate hover:text-blue-main transition-colors tracking-wide text-center"
            >
              Historia
            </Link>
            <Link
              href="/contacto"
              className="font-body text-sm sm:text-base text-brown-chocolate hover:text-blue-main transition-colors tracking-wide text-center"
            >
              Contacto
            </Link>
          </div>

          {/* Contact Info - Responsive layout */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="font-body text-xs sm:text-sm text-brown-chocolate/80 space-y-1 sm:space-y-2 leading-relaxed">
              <p>Calle 85 #12-34, Zona Rosa, Bogotá</p>
              <p className="break-all sm:break-normal">+57 (1) 345-6789 | hola@mejopasteleria.com</p>
            </div>
          </div>

          {/* Social Media - Responsive spacing */}
          <div className="flex justify-center space-x-6 sm:space-x-8 mb-8 sm:mb-12">
            <Link
              href="#"
              aria-label="Instagram"
              className="text-brown-chocolate hover:text-blue-main transition-colors p-2 -m-2"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="text-brown-chocolate hover:text-blue-main transition-colors p-2 -m-2"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Email"
              className="text-brown-chocolate hover:text-orange-pastel transition-colors p-2 -m-2"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="font-body text-xs sm:text-sm text-brown-chocolate/60 px-4">
              &copy; {new Date().getFullYear()} Mejo Pastelería. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
