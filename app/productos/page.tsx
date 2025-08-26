"use client"

import { Button } from "@/components/ui/button"
import { CornerLines } from "@/components/corner-lines"
import { ProductCard } from "@/components/product-card"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import productos from "@/data/productos"
import { cn } from "@/lib/utils"

export default function ProductosPage() {
  const headerObserver = useIntersectionObserver({ threshold: 0.2 })
  const productsObserver = useIntersectionObserver({ threshold: 0.1 })
  const ctaObserver = useIntersectionObserver({ threshold: 0.2 })

  return (
    <div className="min-h-screen py-fluid-2xl">
      <div className="container-fluid">
        {/* Header */}
        <div
          ref={headerObserver.ref}
          className={cn("text-center mb-fluid-2xl fade-in", headerObserver.isVisible && "visible")}
        >
          <h1 className="text-fluid-6xl font-display font-bold text-blue-accent mb-fluid-lg tracking-wide text-balance">
            Nuestros Productos
          </h1>
          <div className="organic-separator mb-fluid-xl"></div>
          <p className="text-fluid-lg font-body text-brown-chocolate max-w-3xl mx-auto leading-relaxed text-pretty">
            Cada creación es elaborada con ingredientes premium y técnicas artesanales, diseñada para crear momentos
            inolvidables
          </p>
        </div>

        {/* Products Grid */}
        <div
          ref={productsObserver.ref}
          className={cn("grid-auto-fit mb-fluid-3xl fade-in", productsObserver.isVisible && "visible")}
        >
          {productos.map((producto, index) => (
            <div
              key={producto.id}
              className={cn("slide-in-left", productsObserver.isVisible && "visible")}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard producto={producto} priority={index < 3} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div ref={ctaObserver.ref} className={cn("text-center fade-in", ctaObserver.isVisible && "visible")}>
          <div className="card-base container-content p-fluid-xl">
            <CornerLines />
            <h2 className="text-fluid-4xl font-display font-bold text-blue-accent mb-fluid-lg tracking-wide text-balance">
              Pedidos Personalizados
            </h2>
            <p className="text-fluid-lg font-body text-brown-chocolate mb-fluid-xl leading-relaxed text-pretty">
              ¿Tienes una ocasión especial? Creamos productos únicos adaptados a tus necesidades
            </p>
            <Button className="btn-primary">Contactar para Pedido Especial</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
