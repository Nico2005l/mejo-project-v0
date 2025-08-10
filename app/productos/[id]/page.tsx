import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CornerLines } from "@/components/corner-lines"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react"

// Datos de productos detallados (simulando una base de datos o API)
const detailedProductos = [
  {
    id: 1,
    nombre: "Torta de Chocolate Belga",
    descripcion:
      "Exquisita torta elaborada con chocolate belga premium, ganache sedoso y decoración artesanal. Un placer intenso para los amantes del chocolate.",
    precio: "$45.000",
    categoria: "Tortas",
    imagen: "/placeholder.svg?height=400&width=400&text=Torta+Chocolate",
    porciones: 10,
    beneficios: [
      "Chocolate belga de alta calidad",
      "Textura húmeda y sabor intenso",
      "Ideal para celebraciones especiales",
    ],
    historia:
      "La torta de chocolate, un clásico atemporal, ha evolucionado a lo largo de los siglos. Nuestra receta se inspira en las tradiciones europeas, perfeccionada para el paladar moderno.",
  },
  {
    id: 2,
    nombre: "Cheesecake de Frutos del Bosque",
    descripcion:
      "Cremoso cheesecake con base de galleta artesanal y compota de frutos rojos frescos. Ligero y refrescante, perfecto para cualquier momento.",
    precio: "$38.000",
    categoria: "Postres",
    imagen: "/placeholder.svg?height=400&width=400&text=Cheesecake",
    porciones: 8,
    beneficios: ["Frescura de frutos rojos", "Textura suave y cremosa", "Base crujiente de galleta"],
    historia:
      "El cheesecake tiene raíces antiguas, pero la versión moderna se popularizó en Nueva York. Nuestra versión con frutos del bosque es un homenaje a la frescura y la simplicidad.",
  },
  {
    id: 3,
    nombre: "Cookies Artesanales",
    descripcion:
      "Deliciosas cookies elaboradas con técnica tradicional, disponibles en 6 sabores únicos. Crocantes por fuera, suaves por dentro, con chips de chocolate, un clásico para cualquier momento.",
    precio: "$24.000",
    categoria: "Cookies",
    imagen: "/placeholder.svg?height=400&width=400&text=Cookies",
    porciones: 12,
    beneficios: [
      "Perfectas para cualquier momento del día",
      "Textura crocante y suave a la vez",
      "Clásicas chips de chocolate",
    ],
    historia:
      "Las cookies surgieron en Estados Unidos en la década de 1930 y se popularizaron gracias a su receta fácil y sabor irresistible.",
  },
  {
    id: 4,
    nombre: "Tarta de Limón Meyer",
    descripcion:
      "Refrescante tarta con crema de limón Meyer y merengue italiano dorado. Un equilibrio perfecto entre acidez y dulzura.",
    precio: "$35.000",
    categoria: "Tartas",
    imagen: "/placeholder.svg?height=400&width=400&text=Tarta+Limón",
    porciones: 8,
    beneficios: ["Sabor cítrico y refrescante", "Merengue suave y dorado", "Ideal para postre ligero"],
    historia:
      "Las tartas de limón son un postre clásico francés. Nuestra versión con limón Meyer le da un toque especial y aromático.",
  },
  {
    id: 5,
    nombre: "Brownies de Nuez Pecana",
    descripcion:
      "Intensos brownies con chocolate oscuro 70% y nueces pecanas caramelizadas. Un bocado denso y chocolatoso.",
    precio: "$28.000",
    categoria: "Brownies",
    imagen: "/placeholder.svg?height=400&width=400&text=Brownies",
    porciones: 9,
    beneficios: ["Chocolate oscuro de alta intensidad", "Nueces pecanas crujientes", "Textura fudgy y deliciosa"],
    historia:
      "Los brownies nacieron en Estados Unidos a finales del siglo XIX. Se dice que fueron creados por error, pero rápidamente se convirtieron en un favorito mundial.",
  },
  {
    id: 6,
    nombre: "Red Velvet Clásico",
    descripcion:
      "Tradicional red velvet con frosting de queso crema y decoración vintage. Un clásico elegante y delicioso.",
    precio: "$42.000",
    categoria: "Tortas",
    imagen: "/placeholder.svg?height=400&width=400&text=Red+Velvet",
    porciones: 10,
    beneficios: ["Sabor suave y aterciopelado", "Frosting cremoso de queso", "Apariencia vibrante y elegante"],
    historia:
      "El Red Velvet es un pastel con una historia rica y misteriosa, popularizado en el sur de Estados Unidos. Su color distintivo y sabor único lo hacen inolvidable.",
  },
]

interface ProductPageProps {
  params: { id: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number.parseInt(params.id)
  const productIndex = detailedProductos.findIndex((p) => p.id === productId)
  const product = detailedProductos[productIndex]

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-brown-chocolate text-xl font-body">
        Producto no encontrado.
      </div>
    )
  }

  const prevProduct = productIndex > 0 ? detailedProductos[productIndex - 1] : null
  const nextProduct = productIndex < detailedProductos.length - 1 ? detailedProductos[productIndex + 1] : null

  return (
    <div className="min-h-screen py-8 px-4 md:py-16 md:px-6 bg-cream-warm paper-texture">
      <div className="max-w-4xl mx-auto incomplete-border-box relative mb-16">
        {" "}
        {/* Added mb-16 for spacing */}
        <CornerLines />
        <div className="flex justify-between mb-8">
          <Link href={prevProduct ? `/productos/${prevProduct.id}` : "#"}>
            <Button className="bg-blue-main text-white hover:bg-blue-accent" disabled={!prevProduct}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Anterior
            </Button>
          </Link>
          <Link href={nextProduct ? `/productos/${nextProduct.id}` : "#"}>
            <Button className="bg-blue-main text-white hover:bg-blue-accent" disabled={!nextProduct}>
              Siguiente <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <Image
              src={product.imagen || "/placeholder.svg"}
              alt={product.nombre}
              width={400}
              height={400}
              className="w-full h-auto object-cover"
              priority={true} // Set priority for the main product image
            />
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
          {" "}
          {/* Standardized mb-16 */}
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
            <Button className="btn-handmade bg-blue-main text-white hover:bg-blue-accent">Ir a Contacto</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
