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
  const cardHeight = variant === "featured" ? "h-[480px]" : "h-[640px]"

  return (
    <Link href={`/productos/${producto.id}`} className="group relative block">
      <div className={`incomplete-border-box relative text-center ${cardHeight} flex flex-col`}>
        <CornerLines />

        {/* Imagen con contenedor uniforme */}
        <div className={`${imageContainerClass} mb-6 flex-shrink-0 relative`}>
          <Image
            src={producto.imagen || "/placeholder.svg"}
            alt={producto.nombre}
            fill
            className={imageClass}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Listón de destacado */}
          {producto.destacado && <FeaturedRibbon />}
        </div>

        {/* Contenido con flex-grow para ocupar espacio restante */}
        <div className="flex-grow flex flex-col justify-between p-6 pt-0">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-display font-semibold text-blue-accent tracking-wide">
              {producto.nombre}
            </h3>
            <p className="text-base font-body text-brown-chocolate/80 leading-relaxed line-clamp-3">
              {producto.descripcion}
            </p>
          </div>

          <div className="pt-4 mt-auto">
            <span className="text-lg font-body text-blue-main mb-4 block">{producto.porciones} porciones</span>
            <Button className="btn-handmade">Ver Detalles</Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
