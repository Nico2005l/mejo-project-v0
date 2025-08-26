import Image from "next/image"
import { CornerLines } from "@/components/corner-lines"

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {" "}
          {/* Standardized mb-16 */}
          <h1 className="text-4xl md:text-5xl font-display font-bold text-blue-accent mb-8 tracking-wide">
            Nuestra Historia
          </h1>
          <div className="organic-line-separator h-8 mb-12"></div>
          <p className="text-xl font-body text-brown-chocolate max-w-3xl mx-auto leading-relaxed">
            Una pasión familiar que se ha convertido en tradición artesanal
          </p>
        </div>
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16">
          {" "}
          {/* Standardized mb-16 */}
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-blue-accent mb-8 tracking-wide">El Comienzo de Mejo</h2>
            <p className="text-lg font-body text-brown-chocolate leading-relaxed" style={{ lineHeight: "1.8em" }}>
              En 2014, con una receta familiar y un sueño compartido, nació Mejo Pastelería. Lo que comenzó como una
              pequeña cocina casera se transformó en un espacio donde la tradición y la innovación se encuentran para
              crear experiencias dulces únicas.
            </p>
            <p className="text-lg font-body text-brown-chocolate leading-relaxed" style={{ lineHeight: "1.8em" }}>
              Nuestro nombre "Mejo" refleja nuestra filosofía: la búsqueda constante de la excelencia, el mejoramiento
              continuo y la dedicación a superar las expectativas con cada creación que sale de nuestras manos.
            </p>
            <p className="text-lg font-body text-brown-chocolate leading-relaxed" style={{ lineHeight: "1.8em" }}>
              Cada receta es el resultado de años de perfeccionamiento, combinando técnicas tradicionales con toques
              contemporáneos, siempre manteniendo la calidez y autenticidad que nos caracteriza.
            </p>
          </div>
          <div className="relative">
            <div className="incomplete-border-box p-0">
              <Image
                src="/media/logo.png"
                alt="Logo de Mejo Pastelería sobre azulejos artesanales"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-lg"
                priority={true} // Set priority for this image
              />
              <CornerLines />
            </div>
          </div>
        </div>
        {/* Values Section */}
        <div className="mb-16">
          {" "}
          {/* Standardized mb-16 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-blue-accent mb-6 tracking-wide">
              Nuestros Valores
            </h2>
            <div className="organic-line-separator h-8"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {" "}
            {/* Responsive grid */}
            {[
              {
                title: "Artesanía",
                description:
                  "Cada producto es elaborado a mano con técnicas tradicionales y atención meticulosa al detalle",
              },
              {
                title: "Calidad",
                description: "Seleccionamos cuidadosamente cada ingrediente, priorizando la frescura y la procedencia",
              },
              {
                title: "Pasión",
                description: "Nuestro amor por la repostería se refleja en cada creación que compartimos contigo",
              },
            ].map((value, index) => (
              <div key={index} className="text-center relative">
                <div className="incomplete-border-box mb-6">
                  <CornerLines />
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-blue-accent mb-4 tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-base font-body text-brown-chocolate/80 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mission Section */}
        <div className="text-center">
          <div className="incomplete-border-box max-w-4xl mx-auto relative">
            <CornerLines />
            <h2 className="text-3xl font-display font-bold text-blue-accent mb-8 tracking-wide">Nuestra Misión</h2>
            <p className="text-lg font-body text-brown-chocolate leading-relaxed mb-8" style={{ lineHeight: "1.8em" }}>
              Crear momentos dulces e inolvidables a través de productos artesanales de la más alta calidad. Queremos
              ser parte de tus celebraciones más importantes, aportando no solo sabor, sino también la calidez y
              dedicación que caracterizan a una verdadera pastelería boutique.
            </p>
            <p className="text-base font-body text-brown-chocolate/80 italic">
              "Cada dulce cuenta una historia, cada sabor despierta una emoción"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
