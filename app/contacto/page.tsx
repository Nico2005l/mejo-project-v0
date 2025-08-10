import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, PhoneIcon as Whatsapp, Instagram, Square } from "lucide-react"
import { CornerLines } from "@/components/corner-lines"
import Image from "next/image"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      {/* Connect with Us Section */}
      <section className="bg-cream-warm paper-texture py-16 px-4 text-center mb-16">
        {" "}
        {/* Added mb-16 for spacing */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-blue-accent mb-6 tracking-wide">
            ¡Conectá con nosotros!
          </h1>
          <p className="text-lg font-body text-brown-chocolate max-w-2xl mx-auto leading-relaxed mb-10">
            Seguinos en Instagram para ver nuestras últimas creaciones, hacer pedidos y mantenerte al día con todas
            nuestras novedades.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button className="bg-whatsapp-green text-white hover:bg-whatsapp-green/90 rounded-full px-6 py-3 text-lg font-body font-medium flex items-center gap-2">
              <Whatsapp className="w-5 h-5" />
              WhatsApp
            </Button>
            <Button className="bg-instagram-gradient text-white hover:opacity-90 rounded-full px-6 py-3 text-lg font-body font-medium flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              @mejo.pasteleria
            </Button>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-blue-accent mb-10 tracking-wide">
            Últimos posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/placeholder.svg?height=400&width=400&text=Post+1",
                alt: "Slice of carrot cake",
              },
              {
                src: "/placeholder.svg?height=400&width=400&text=Post+2",
                alt: "Baking ingredients in bowls",
              },
              {
                src: "/placeholder.svg?height=400&width=400&text=Post+3",
                alt: "Meringue pie",
              },
            ].map((post, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
                <Image
                  src={post.src || "/placeholder.svg"}
                  alt={post.alt}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/50 rounded-full p-1.5">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-3 right-3 bg-black/50 rounded-sm p-1">
                  <Square className="w-3 h-3 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Contact Content */}
      <div className="py-8 px-4 sm:py-16 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-blue-accent mb-8 tracking-wide">
              Contacto
            </h1>
            <div className="organic-line-separator h-8 mb-12"></div>
            <p className="text-xl font-body text-brown-chocolate max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para hacer realidad tus momentos más dulces. Contáctanos para pedidos especiales o cualquier
              consulta
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {" "}
            {/* Responsive grid and gap */}
            {/* Contact Form */}
            <div>
              <div className="incomplete-border-box relative">
                <CornerLines />
                <h2 className="text-3xl font-display font-bold text-blue-accent mb-8 text-center tracking-wide">
                  Envíanos un Mensaje
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {" "}
                    {/* Responsive form grid */}
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-body font-medium text-brown-chocolate mb-3">
                        Nombre
                      </label>
                      <Input
                        id="nombre"
                        placeholder="Tu nombre completo"
                        className="w-full border-border-subtle focus:border-blue-main rounded-lg font-body bg-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-body font-medium text-brown-chocolate mb-3"
                      >
                        Teléfono
                      </label>
                      <Input
                        id="telefono"
                        placeholder="Tu número de teléfono"
                        className="w-full border-border-subtle focus:border-blue-main rounded-lg font-body bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-body font-medium text-brown-chocolate mb-3">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full border-border-subtle focus:border-blue-main rounded-lg font-body bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="asunto" className="block text-sm font-body font-medium text-brown-chocolate mb-3">
                      Asunto
                    </label>
                    <Input
                      id="asunto"
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full border-border-subtle focus:border-blue-main rounded-lg font-body bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-body font-medium text-brown-chocolate mb-3">
                      Mensaje
                    </label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos más detalles sobre tu pedido o consulta..."
                      rows={5}
                      className="w-full border-border-subtle focus:border-blue-main rounded-lg font-body resize-none bg-white"
                    />
                  </div>
                  <div className="text-center pt-4">
                    <Button className="btn-handmade">Enviar Mensaje</Button>
                  </div>
                </form>
              </div>
            </div>
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {" "}
              {/* Responsive grid for contact info cards */}
              <div className="incomplete-border-box text-center relative">
                <CornerLines />
                <MapPin className="w-8 h-8 text-blue-main mx-auto mb-6" />
                <h3 className="font-display font-semibold text-blue-accent mb-4 text-xl tracking-wide">
                  Ubicación
                </h3>
                <p className="font-body text-brown-chocolate/80 leading-relaxed">
                  Calle 85 #12-34
                  <br />
                  Zona Rosa, Bogotá
                  <br />
                  Colombia
                </p>
              </div>
              <div className="incomplete-border-box text-center relative">
                <CornerLines />
                <Phone className="w-8 h-8 text-blue-main mx-auto mb-6" />
                <h3 className="font-display font-semibold text-blue-accent mb-4 text-xl tracking-wide">Teléfono</h3>
                <p className="font-body text-brown-chocolate/80 leading-relaxed">
                  +57 (1) 345-6789
                  <br />
                  WhatsApp: +57 310 234 5678
                </p>
              </div>
              <div className="incomplete-border-box text-center relative">
                <CornerLines />
                <Mail className="w-8 h-8 text-blue-main mx-auto mb-6" />
                <h3 className="font-display font-semibold text-blue-accent mb-4 text-xl tracking-wide">Correo</h3>
                <p className="font-body text-brown-chocolate/80 leading-relaxed break-words">
                  hola@mejopasteleria.com
                  <br />
                  pedidos@mejopasteleria.com
                </p>
              </div>
              <div className="incomplete-border-box text-center relative">
                <CornerLines />
                <Clock className="w-8 h-8 text-blue-main mx-auto mb-6" />
                <h3 className="font-display font-semibold text-blue-accent mb-4 text-xl tracking-wide">Horarios</h3>
                <div className="font-body text-brown-chocolate/80 space-y-2 leading-relaxed">
                  <p>Martes - Viernes: 9:00 AM - 7:00 PM</p>
                  <p>Sábados: 10:00 AM - 6:00 PM</p>
                  <p>Domingos: 11:00 AM - 4:00 PM</p>
                  <p className="text-sm italic mt-4">Lunes: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Orders Section */}
          <div className="mt-20">
            <div className="incomplete-border-box max-w-4xl mx-auto text-center relative">
              <CornerLines />
              <h2 className="text-3xl font-display font-bold text-blue-accent mb-8 tracking-wide">
                Pedidos Especiales
              </h2>
              <p
                className="text-lg font-body text-brown-chocolate mb-10 leading-relaxed"
                style={{ lineHeight: "1.8em" }}
              >
                Para tortas personalizadas, eventos especiales o pedidos de gran volumen, te recomendamos contactarnos
                con al menos 72 horas de anticipación. Cada creación especial requiere tiempo y dedicación para alcanzar
                la perfección.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="btn-handmade">WhatsApp: +57 310 234 5678</Button>
                <Button
                  className="btn-handmade"
                  style={{ borderColor: "var(--orange-pastel)", color: "var(--brown-chocolate)" }}
                >
                  Llamar: (1) 345-6789
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
