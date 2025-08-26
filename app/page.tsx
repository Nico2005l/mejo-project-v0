import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CornerLines } from "@/components/corner-lines"
import { AnimatedHeroLines } from "@/components/animated-hero-lines"
import productos from "@/data/productos"
import { ProductCard } from "@/components/product-card"

export default function HomePage() {
  // Get featured products and some additional products to show
  const productosDestacados = productos.filter((p) => p.destacado)
  const otrosProductos = productos.filter((p) => !p.destacado).slice(0, 2)
  const productosParaMostrar = [...productosDestacados, ...otrosProductos].slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced responsiveness */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="container-responsive-sm relative">
          {/* Instagram Handle - Responsive positioning */}
          <div className="absolute top-2 sm:top-4 lg:top-6 right-2 sm:right-4 lg:right-6 z-10">
            <span className="text-xs sm:text-sm lg:text-base font-body text-brown-chocolate/60 tracking-wide">
              @mejo.pasteleria
            </span>
          </div>

          {/* Handmade Blue Lines - Desktop only */}
          <div className="hidden lg:block">
            <AnimatedHeroLines />
          </div>

          {/* Main Content Card */}
          <div className="incomplete-border-box relative">
            <CornerLines />
            <div className="text-center">
              <h1 className="font-display text-blue-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-6 sm:mb-8 leading-tight">
                Bienvenidos a Mejo Pastelería
              </h1>

              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="font-body text-brown-chocolate leading-relaxed px-2" style={{ lineHeight: "1.8em" }}>
                  Dulces creaciones artesanales horneadas con pasión,
                </p>
                <p className="font-body text-brown-chocolate leading-relaxed px-2" style={{ lineHeight: "1.8em" }}>
                  cada bocado cuenta una historia de sabor y tradición,
                </p>
                <p className="font-body text-brown-chocolate leading-relaxed px-2" style={{ lineHeight: "1.8em" }}>
                  hechos con amor y los ingredientes más selectos.
                </p>
              </div>

              <Link href="/productos">
                <Button className="btn-handmade">Descubrir Productos</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview - Enhanced responsiveness */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-blue-accent mb-4 sm:mb-6 tracking-wide">
              Nuestras Especialidades
            </h2>
            <div className="organic-line-separator h-8 mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg font-body text-brown-chocolate max-w-2xl mx-auto leading-relaxed px-4">
              Cada producto es una obra de arte culinaria, elaborada con técnicas tradicionales y un toque contemporáneo
            </p>
          </div>

          <div className="grid-responsive-3 gap-responsive-md">
            {productosParaMostrar.map((producto, index) => (
              <ProductCard key={producto.id} producto={producto} variant="default" priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - Enhanced responsiveness */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container-responsive-sm text-center">
          <div className="incomplete-border-box relative">
            <CornerLines />
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-blue-accent mb-6 sm:mb-8 tracking-wide">
              Nuestra Filosofía
            </h2>
            <p
              className="text-base sm:text-lg font-body text-brown-chocolate leading-relaxed mb-4 sm:mb-6 px-2"
              style={{ lineHeight: "1.8em" }}
            >
              En Mejo Pastelería creemos que cada momento dulce merece ser especial. Trabajamos con ingredientes
              cuidadosamente seleccionados y técnicas artesanales para crear experiencias que perduran en la memoria.
            </p>
            <p className="text-sm sm:text-base font-body text-brown-chocolate/80 italic px-2">
              "La perfección está en los detalles, la pasión en cada creación"
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
