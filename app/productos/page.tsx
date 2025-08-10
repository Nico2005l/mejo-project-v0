import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CornerLines } from "@/components/corner-lines"
import Link from "next/link" // Import Link

const productos = [
  {
    id: 1,
    nombre: "Torta de Chocolate Belga",
    descripcion: "Exquisita torta elaborada con chocolate belga premium, ganache sedoso y decoración artesanal",
    precio: "$45.000",
    categoria: "Tortas",
    imagen: "/placeholder.svg?height=320&width=500&text=Torta+Chocolate", // Updated dimensions
  },
  {
    id: 2,
    nombre: "Cheesecake de Frutos del Bosque",
    descripcion: "Cremoso cheesecake con base de galleta artesanal y compota de frutos rojos frescos",
    precio: "$38.000",
    categoria: "Postres",
    imagen: "/placeholder.svg?height=320&width=500&text=Cheesecake", // Updated dimensions
  },
  {
    id: 3,
    nombre: "Cookies Artesanales",
    descripcion: "Deliciosas cookies elaboradas con técnica tradicional, disponibles en 6 sabores únicos",
    precio: "$24.000",
    categoria: "Cookies",
    imagen: "/placeholder.svg?height=320&width=500&text=Cookies", // Updated dimensions
  },
  {
    id: 4,
    nombre: "Tarta de Limón Meyer",
    descripcion: "Refrescante tarta con crema de limón Meyer y merengue italiano dorado",
    precio: "$35.000",
    categoria: "Tartas",
    imagen: "/placeholder.svg?height=320&width=500&text=Tarta+Limón", // Updated dimensions
  },
  {
    id: 5,
    nombre: "Brownies de Nuez Pecana",
    descripcion: "Intensos brownies con chocolate oscuro 70% y nueces pecanas caramelizadas",
    precio: "$28.000",
    categoria: "Brownies",
    imagen: "/placeholder.svg?height=320&width=500&text=Brownies", // Updated dimensions
  },
  {
    id: 6,
    nombre: "Red Velvet Clásico",
    descripcion: "Tradicional red velvet con frosting de queso crema y decoración vintage",
    precio: "$42.000",
    categoria: "Tortas",
    imagen: "/placeholder.svg?height=320&width=500&text=Red+Velvet", // Updated dimensions
  },
]

export default function ProductosPage() {
  return (
    <div className="min-h-screen py-8 px-4 md:py-16 md:px-6">
      {" "}
      {/* Adjusted padding for smaller screens */}
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
          {" "}
          {/* Added mb-20 for spacing before CTA */}
          {productos.map((producto) => (
            <Link key={producto.id} href={`/productos/${producto.id}`} className="group relative block">
              <div className="incomplete-border-box relative text-center h-[680px] flex flex-col justify-between">
                {" "}
                {/* Added fixed height and flex properties */}
                <CornerLines />
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  {" "}
                  {/* Image wrapper */}
                  <Image
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    width={500} // Explicit width
                    height={320} // Explicit height to match h-80
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105" // Updated h-64 to h-80
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-main/90 text-white px-3 py-1 text-sm font-body tracking-wide rounded-full">
                      {producto.categoria}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 p-6 pt-0 flex-grow">
                  {" "}
                  {/* Added p-6 for padding, pt-0 to avoid double padding with image, and flex-grow */}
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-blue-accent tracking-wide">
                    {producto.nombre}
                  </h3>
                  <p className="text-base font-body text-brown-chocolate/80 leading-relaxed max-w-sm mx-auto">
                    {producto.descripcion}
                  </p>
                  <div className="pt-4">
                    <span className="text-2xl font-display font-bold text-blue-main mb-4 block">{producto.precio}</span>
                    <Button className="btn-handmade">Ver Detalles</Button>
                  </div>
                </div>
              </div>
            </Link>
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
