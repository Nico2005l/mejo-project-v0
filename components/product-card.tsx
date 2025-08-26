import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CornerLines } from "@/components/corner-lines"
import { FeaturedRibbon } from "@/components/featured-ribbon"

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
}

export function ProductCard({ producto, variant = "default", priority = false }: ProductCardProps) {
  const imageContainerClass = variant === "featured" ? "featured-image-container" : "product-image-container"
  const imageClass = variant === "featured" ? "featured-image" : "product-image"
  const cardHeight =
    variant === "featured"
      ? "h-auto min-h-[400px] sm:min-h-[480px]"
      : "h-auto min-h-[580px] sm:min-h-[680px] lg:min-h-[720px]"

  return (
    <Link href={`/productos/${producto.id}`} className="group relative block">
      <div className={`incomplete-border-box relative text-center ${cardHeight} flex flex-col`}>
        <CornerLines />

        {/* Image with uniform container */}
        <div className={`${imageContainerClass} mb-4 sm:mb-6 flex-shrink-0 relative`}>
          <Image
            src={producto.imagen || "/placeholder.svg"}
            alt={producto.nombre}
            fill
            className={imageClass}
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Featured ribbon */}
          {producto.destacado && <FeaturedRibbon />}
        </div>

        {/* Content with flex-grow to occupy remaining space */}
        <div className="flex-grow flex flex-col justify-between p-3 sm:p-4 lg:p-6 pt-0">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-3xl lg:text-2xl font-display font-semibold text-blue-accent tracking-wide leading-tight">
              {producto.nombre}
            </h3>
            <p className="text-sm sm:text-base font-body text-brown-chocolate/80 leading-relaxed px-1">
              {producto.descripcion}
            </p>
          </div>

          <div className="pt-3 sm:pt-4 mt-auto">
            <Button className="btn-handmade w-full sm:w-auto">Ver Detalles</Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
