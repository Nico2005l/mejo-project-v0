"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CornerLines } from "@/components/corner-lines"
import { AnimatedHeroLines } from "@/components/animated-hero-lines"
import { ProductCard } from "@/components/product-card"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import productos from "@/data/productos"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const heroObserver = useIntersectionObserver({ threshold: 0.2 })
  const productsObserver = useIntersectionObserver({ threshold: 0.1 })
  const philosophyObserver = useIntersectionObserver({ threshold: 0.2 })

  // Get featured products and some additional products to show
  const productosDestacados = productos.filter((p) => p.destacado)
  const otrosProductos = productos.filter((p) => !p.destacado).slice(0, 2)
  const productosParaMostrar = [...productosDestacados, ...otrosProductos].slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroObserver.ref}
        className={cn("py-fluid-3xl mb-fluid-2xl fade-in", heroObserver.isVisible && "visible")}
      >
        <div className="container-content relative">
          {/* Instagram Handle */}
          <div className="absolute top-fluid-sm right-fluid-sm z-10">
            <span className="text-fluid-sm font-body text-brown-chocolate/60 tracking-wide">@mejo.pasteleria</span>
          </div>

          {/* Handmade Blue Lines - Desktop only */}
          <div className="hidden lg:block">
            <AnimatedHeroLines />
          </div>

          {/* Main Content Card */}
          <div className="card-base p-fluid-xl">
            <CornerLines />
            <div className="text-center">
              <h1 className="font-display text-blue-accent text-fluid-6xl font-bold tracking-wide mb-fluid-lg leading-tight text-balance">
                Bienvenidos a Mejo Pastelería
              </h1>

              <div className="space-y-fluid-sm mb-fluid-xl">
                <p className="font-body text-brown-chocolate leading-relaxed text-fluid-lg text-pretty">
                  Dulces creaciones artesanales horneadas con pasión,
                </p>
                <p className="font-body text-brown-chocolate leading-relaxed text-fluid-lg text-pretty">
                  cada bocado cuenta una historia de sabor y tradición,
                </p>
                <p className="font-body text-brown-chocolate leading-relaxed text-fluid-lg text-pretty">
                  hechos con amor y los ingredientes más selectos.
                </p>
              </div>

              <Link href="/productos">
                <Button className="btn-primary">Descubrir Productos</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section
        ref={productsObserver.ref}
        className={cn("py-fluid-2xl mb-fluid-2xl fade-in", productsObserver.isVisible && "visible")}
      >
        <div className="container-fluid">
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-fluid-5xl font-display font-bold text-blue-accent mb-fluid-lg tracking-wide text-balance">
              Nuestras Especialidades
            </h2>
            <div className="organic-separator mb-fluid-lg"></div>
            <p className="text-fluid-lg font-body text-brown-chocolate max-w-2xl mx-auto leading-relaxed text-pretty">
              Cada producto es una obra de arte culinaria, elaborada con técnicas tradicionales y un toque contemporáneo
            </p>
          </div>

          <div className="grid-auto-fit">
            {productosParaMostrar.map((producto, index) => (
              <div
                key={producto.id}
                className={cn("slide-in-left", productsObserver.isVisible && "visible")}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProductCard producto={producto} variant="default" priority={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        ref={philosophyObserver.ref}
        className={cn("py-fluid-2xl fade-in", philosophyObserver.isVisible && "visible")}
      >
        <div className="container-content text-center">
          <div className="card-base p-fluid-xl">
            <CornerLines />
            <h2 className="text-fluid-4xl font-display font-bold text-blue-accent mb-fluid-lg tracking-wide text-balance">
              Nuestra Filosofía
            </h2>
            <p className="text-fluid-lg font-body text-brown-chocolate leading-relaxed mb-fluid-md text-pretty">
              En Mejo Pastelería creemos que cada momento dulce merece ser especial. Trabajamos con ingredientes
              cuidadosamente seleccionados y técnicas artesanales para crear experiencias que perduran en la memoria.
            </p>
            <p className="text-fluid-base font-body text-brown-chocolate/80 italic text-pretty">
              "La perfección está en los detalles, la pasión en cada creación"
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
