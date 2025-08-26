import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CornerLines } from "@/components/corner-lines"
import { FeaturedRibbon } from "@/components/featured-ribbon"
import { OptimizedImage } from "@/components/optimized-image"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  producto: {
    id: number
    nombre: string
    descripcion: string
    imagen: string
    destacado: boolean
    porciones: number
  }
  variant?: "default" | "featured"
  priority?: boolean
  className?: string
}

export function ProductCard({ producto, variant = "default", priority = false, className }: ProductCardProps) {
  const isFeatured = variant === "featured"

  return (
    <Link href={`/productos/${producto.id}`} className={cn("group relative block", className)}>
      <div className={cn(isFeatured ? "product-card-featured" : "product-card")}>
        <CornerLines />

        {/* Image Container */}
        <div
          className={cn(
            "relative mb-fluid-md flex-shrink-0",
            isFeatured ? "featured-image-container" : "product-image-container",
          )}
        >
          <OptimizedImage
            src={producto.imagen}
            alt={producto.nombre}
            className="image-optimized"
            containerClassName="w-full h-full"
            priority={priority}
            sizes={
              isFeatured
                ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
          />

          {/* Featured Ribbon */}
          {producto.destacado && <FeaturedRibbon />}
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col justify-between p-fluid-md pt-0">
          <div className="space-y-fluid-sm">
            <h3 className="text-fluid-xl font-display font-semibold text-blue-accent tracking-wide leading-tight text-balance">
              {producto.nombre}
            </h3>
            <p className="text-fluid-sm font-body text-brown-chocolate/80 leading-relaxed line-clamp-3 text-pretty">
              {producto.descripcion}
            </p>
          </div>

          <div className="pt-fluid-md mt-auto space-y-fluid-sm">
            <span className="text-fluid-base font-body text-blue-main font-medium block">
              {producto.porciones} porciones
            </span>
            <Button className="btn-primary w-full sm:w-auto">Ver Detalles</Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
