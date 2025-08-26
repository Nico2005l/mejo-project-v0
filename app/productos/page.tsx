import { Button } from "@/components/ui/button"
import { CornerLines } from "@/components/corner-lines"
import { ProductCard } from "@/components/product-card"
import productos from "@/data/productos"

export default function ProductosPage() {
  return (
    <div className="min-h-screen py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-blue-accent mb-8 tracking-wide">
            Nuestros Productos
          </h1>
          <div className="organic-line-separator h-8 mb-12"></div>
          <p className="text-xl font-body text-brown-chocolate max-w-3xl mx-auto leading-relaxed">
            Cada creación es elaborada con ingredientes premium y técnicas artesanales, diseñada para crear momentos
            inolvidables
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
          {productos.map((producto, index) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              priority={index < 3} // Prioridad para las primeras 3 imágenes
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="incomplete-border-box max-w-2xl mx-auto relative">
            <CornerLines />
            <h2 className="text-3xl font-display font-bold text-blue-accent mb-6 tracking-wide">
              Pedidos Personalizados
            </h2>
            <p className="text-lg font-body text-brown-chocolate mb-8 leading-relaxed">
              ¿Tienes una ocasión especial? Creamos productos únicos adaptados a tus necesidades
            </p>
            <Button className="btn-handmade w-full sm:w-auto">Contactar para Pedido Especial</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
