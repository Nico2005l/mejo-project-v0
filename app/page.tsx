import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CornerLines } from "@/components/corner-lines"
import { AnimatedHeroLines } from "@/components/animated-hero-lines"
import productos from "@/data/productos"
import { ProductCard } from "@/components/product-card"

export default function HomePage() {
  // Obtener productos destacados y algunos productos adicionales para mostrar
  const productosDestacados = productos.filter((p) => p.destacado)
  const otrosProductos = productos.filter((p) => !p.destacado).slice(0, 2)
  const productosParaMostrar = [...productosDestacados, ...otrosProductos].slice(0, 3)

  return (
    <div className="min-h-screen py-8 px-4 md:py-16 md:px-6">
      {/* Hero Section */}
      <section className="py-8 px-4 md:py-16 md:px-6 mb-16">
        <div className="max-w-4xl mx-auto relative">
          {/* Instagram Handle */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
            <span className="text-sm md:text-base font-body text-brown-chocolate/60 tracking-wide">
              @mejo.pasteleria
            </span>
          </div>
          {/* Handmade Blue Lines - Desktop (now a client component) */}
          <AnimatedHeroLines />
          {/* Main Content Card */}
          <div className="incomplete-border-box relative">
            <CornerLines />
            <div className="text-center">
              <h1 className="font-display text-blue-accent text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-8">
                Bienvenidos a Mejo Pastelería
              </h1>

              <div className="space-y-4 mb-12 text-base md:text-lg lg:text-xl">
                <p className="font-body text-brown-chocolate leading-relaxed" style={{ lineHeight: "1.8em" }}>
                  Dulces creaciones artesanales horneadas con pasión,
                </p>
                <p className="font-body text-brown-chocolate leading-relaxed" style={{ lineHeight: "1.8em" }}>
                  cada bocado cuenta una historia de sabor y tradición,
                </p>
                <p className="font-body text-brown-chocolate leading-relaxed" style={{ lineHeight: "1.8em" }}>
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

      {/* Featured Products Preview */}
      <section className="py-16 px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-blue-accent mb-6 tracking-wide">
              Nuestras Especialidades
            </h2>
            <div className="organic-line-separator h-8 mb-8"></div>
            <p className="text-lg font-body text-brown-chocolate max-w-2xl mx-auto leading-relaxed">
              Cada producto es una obra de arte culinaria, elaborada con técnicas tradicionales y un toque contemporáneo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {productosParaMostrar.map((producto, index) => (
              <ProductCard key={producto.id} producto={producto} variant="default" priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="incomplete-border-box relative">
            <CornerLines />
            <h2 className="text-3xl font-display font-bold text-blue-accent mb-8 tracking-wide">Nuestra Filosofía</h2>
            <p className="text-lg font-body text-brown-chocolate leading-relaxed mb-6" style={{ lineHeight: "1.8em" }}>
              En Mejo Pastelería creemos que cada momento dulce merece ser especial. Trabajamos con ingredientes
              cuidadosamente seleccionados y técnicas artesanales para crear experiencias que perduran en la memoria.
            </p>
            <p className="text-base font-body text-brown-chocolate/80 italic">
              "La perfección está en los detalles, la pasión en cada creación"
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
