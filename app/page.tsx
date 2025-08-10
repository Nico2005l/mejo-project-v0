import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CornerLines } from "@/components/corner-lines"
import { AnimatedHeroLines } from "@/components/animated-hero-lines" // Import the new component

export default function HomePage() {
  return (
    <div className="min-h-screen py-8 px-4 md:py-16 md:px-6">
      {/* Hero Section */}
      <section className="py-8 px-4 md:py-16 md:px-6 mb-16">
        {" "}
        {/* Added mb-16 for spacing */}
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
                {" "}
                {/* Responsive text size */}
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
      {/* Removed Spacer */}
      {/* Featured Products Preview */}
      <section className="py-16 px-6 mb-16">
        {" "}
        {/* Added mb-16 for spacing */}
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
            {" "}
            {/* Responsive grid */}
            {[
              {
                name: "Tortas Artesanales",
                description: "Creaciones únicas para ocasiones especiales",
                image: "/placeholder.svg?height=256&width=400&text=Torta+Artesanal",
              },
              {
                name: "Postres Boutique",
                description: "Pequeñas delicias con grandes sabores",
                image: "/placeholder.svg?height=256&width=400&text=Postre+Boutique",
              },
              {
                name: "Cookies Artesanales",
                description: "Dulces momentos horneados con amor",
                image: "/placeholder.svg?height=256&width=400&text=Cookies+Artesanales",
              },
            ].map((item, index) => (
              <div key={index} className="group relative block">
                {" "}
                {/* Changed to block for full link area */}
                <div className="incomplete-border-box relative text-center h-[520px] flex flex-col justify-between">
                  {" "}
                  {/* Added fixed height and flex properties */}
                  <CornerLines />
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={400} // Explicit width
                      height={256} // Explicit height to match h-64
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={index === 0} // Set priority for the first featured image
                    />
                  </div>
                  <div className="space-y-4 p-6 pt-0 flex-grow">
                    {" "}
                    {/* Added padding for text content */}
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-blue-accent mb-3 tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-base font-body text-brown-chocolate/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
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
