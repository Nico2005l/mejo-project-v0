import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"
import { CornerLines } from "@/components/corner-lines"

export function Footer() {
  return (
    <footer className="w-full py-16 px-6 mt-12">
      {" "}
      {/* Changed mt-20 to mt-12 */}
      <div className="max-w-4xl mx-auto">
        <div className="incomplete-border-box relative">
          <CornerLines />
          {/* Main Footer Content */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-blue-accent mb-6 tracking-wide">Mejo</h3>
            <div className="organic-line-separator h-8 mb-8"></div>
            <p className="font-body text-brown-chocolate/80 leading-relaxed max-w-2xl mx-auto">
              Pastelería artesanal boutique dedicada a crear momentos dulces e inolvidables con productos de la más alta
              calidad.
            </p>
          </div>

          {/* Navigation Links - Made responsive with flex-wrap and gap */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12">
            {" "}
            {/* Changed space-x to flex-wrap and gap */}
            <Link
              href="/"
              className="font-body text-brown-chocolate hover:text-blue-main transition-colors tracking-wide"
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              className="font-body text-brown-chocolate hover:text-blue-main transition-colors tracking-wide"
            >
              Productos
            </Link>
            <Link
              href="/sobre-nosotros"
              className="font-body text-brown-chocolate hover:text-blue-main transition-colors tracking-wide"
            >
              Historia
            </Link>
            <Link
              href="/contacto"
              className="font-body text-brown-chocolate hover:text-blue-main transition-colors tracking-wide"
            >
              Contacto
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-center mb-12">
            <div className="font-body text-brown-chocolate/80 space-y-2">
              <p>Calle 85 #12-34, Zona Rosa, Bogotá</p>
              <p>+57 (1) 345-6789 | hola@mejopasteleria.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-8 mb-12">
            <Link
              href="#"
              aria-label="Instagram"
              className="text-brown-chocolate hover:text-blue-main transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="text-brown-chocolate hover:text-blue-main transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Email"
              className="text-brown-chocolate hover:text-orange-pastel transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="font-body text-sm text-brown-chocolate/60">
              &copy; {new Date().getFullYear()} Mejo Pastelería. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
