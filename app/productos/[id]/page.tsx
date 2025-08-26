import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CornerLines } from "@/components/corner-lines"
import { FeaturedRibbon } from "@/components/featured-ribbon"
import Link from "next/link"
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import productos from "@/data/productos"

interface ProductPageProps {
  params: { id: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number.parseInt(params.id)
  const productIndex = productos.findIndex((p) => p.id === productId)
  const product = productos[productIndex]

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-brown-chocolate text-xl font-body">
        Producto no encontrado.
      </div>
    )
  }

  const prevProduct = productIndex > 0 ? productos[productIndex - 1] : null
  const nextProduct = productIndex < productos.length - 1 ? productos[productIndex + 1] : null

  return (
    <div className="min-h-screen py-8 px-4 md:py-16 md:px-6 bg-cream-warm paper-texture">
      {/* Enhanced Navigation Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          {/* Back to Products */}
          <Link href="/productos">
            <Button className="flex items-center gap-2 bg-blue-light/50 text-blue-accent hover:bg-blue-light border border-blue-main/20 rounded-full px-4 py-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Todos los productos</span>
              <span className="sm:hidden">Productos</span>
            </Button>
          </Link>

          {/* Product Counter */}
          <div className="text-center">
            <span className="text-sm font-body text-brown-chocolate/60">
              Producto {productIndex + 1} de {productos.length}
            </span>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center gap-1">
            {productos.map((_, index) => (
              <Link key={index} href={`/productos/${productos[index].id}`}>
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === productIndex ? "bg-blue-main w-6" : "bg-blue-main/30 hover:bg-blue-main/60"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Enhanced Previous/Next Navigation */}
        <div className="flex items-center justify-between gap-4">
          {/* Previous Product */}
          {prevProduct ? (
            <Link href={`/productos/${prevProduct.id}`} className="flex-1 max-w-xs">
              <div className="product-nav-card group">
                <div className="flex items-center gap-3">
                  <ChevronLeft className="w-5 h-5 text-blue-main group-hover:text-blue-accent transition-colors" />
                  <div className="product-nav-image">
                    <Image
                      src={prevProduct.imagen || "/placeholder.svg"}
                      alt={prevProduct.nombre}
                      fill
                      className="object-cover rounded-md"
                      sizes="60px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-body text-blue-main/70 mb-1">Anterior</p>
                    <p className="font-display font-semibold text-blue-accent text-sm truncate">{prevProduct.nombre}</p>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex-1 max-w-xs opacity-50">
              <div className="product-nav-card-disabled">
                <div className="flex items-center gap-3">
                  <ChevronLeft className="w-5 h-5 text-brown-chocolate/30" />
                  <div className="product-nav-image bg-gray-200"></div>
                  <div className="flex-1">
                    <p className="text-xs font-body text-brown-chocolate/40 mb-1">Anterior</p>
                    <p className="font-display text-brown-chocolate/40 text-sm">No disponible</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Current Product Indicator */}
          <div className="flex-shrink-0 px-4">
            <div className="w-3 h-3 rounded-full bg-blue-main shadow-lg"></div>
          </div>

          {/* Next Product */}
          {nextProduct ? (
            <Link href={`/productos/${nextProduct.id}`} className="flex-1 max-w-xs">
              <div className="product-nav-card group">
                <div className="flex items-center gap-3">
                  <div className="flex-1 min-w-0 text-right">
                    <p className="text-xs font-body text-blue-main/70 mb-1">Siguiente</p>
                    <p className="font-display font-semibold text-blue-accent text-sm truncate">{nextProduct.nombre}</p>
                  </div>
                  <div className="product-nav-image">
                    <Image
                      src={nextProduct.imagen || "/placeholder.svg"}
                      alt={nextProduct.nombre}
                      fill
                      className="object-cover rounded-md"
                      sizes="60px"
                    />
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-main group-hover:text-blue-accent transition-colors" />
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex-1 max-w-xs opacity-50">
              <div className="product-nav-card-disabled">
                <div className="flex items-center gap-3">
                  <div className="flex-1 text-right">
                    <p className="text-xs font-body text-brown-chocolate/40 mb-1">Siguiente</p>
                    <p className="font-display text-brown-chocolate/40 text-sm">No disponible</p>
                  </div>
                  <div className="product-nav-image bg-gray-200"></div>
                  <ChevronRight className="w-5 h-5 text-brown-chocolate/30" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Product Content */}
      <div className="max-w-4xl mx-auto incomplete-border-box relative mb-16">
        <CornerLines />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
          <div className="product-detail-container shadow-md relative">
            <Image
              src={product.imagen || "/placeholder.svg"}
              alt={product.nombre}
              fill
              className="product-detail-image"
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Listón de destacado para página de detalles */}
            {product.destacado && <FeaturedRibbon />}
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-display font-bold text-blue-accent tracking-wide">{product.nombre}</h1>
            <p className="text-lg font-body text-brown-chocolate leading-relaxed">{product.descripcion}</p>
            <p className="text-lg font-body text-brown-chocolate">
              <span className="font-semibold">Porciones:</span>{" "}
              <span className="text-blue-main font-bold">{product.porciones}</span>
            </p>
            <div>
              <h3 className="text-xl font-display font-semibold text-blue-main mb-3">Beneficios</h3>
              <ul className="list-disc list-inside text-brown-chocolate font-body space-y-1">
                {product.beneficios.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="incomplete-border-box relative bg-blue-light/50 p-6 rounded-lg mb-16">
          <CornerLines />
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-main" />
            <h3 className="text-xl font-display font-semibold text-blue-main">Historia</h3>
          </div>
          <p className="text-base font-body text-brown-chocolate leading-relaxed">{product.historia}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/productos">
            <Button className="btn-handmade bg-blue-main text-white hover:bg-blue-accent">Volver a Productos</Button>
          </Link>
          <Link href="/contacto">
            <Button className="btn-handmade bg-blue-main text-white hover:bg-blue-accent">Hacer Pedido</Button>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation - Mobile Friendly */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="flex items-center justify-center gap-4 sm:hidden">
          {prevProduct && (
            <Link href={`/productos/${prevProduct.id}`}>
              <Button className="bg-blue-main text-white hover:bg-blue-accent rounded-full p-3">
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </Link>
          )}

          <span className="text-sm font-body text-brown-chocolate/60 px-4">
            {productIndex + 1} / {productos.length}
          </span>

          {nextProduct && (
            <Link href={`/productos/${nextProduct.id}`}>
              <Button className="bg-blue-main text-white hover:bg-blue-accent rounded-full p-3">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
