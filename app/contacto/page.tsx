import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, WheatIcon as Whatsapp, Instagram, Heart, MessageCircle } from "lucide-react"
import { CornerLines } from "@/components/corner-lines"
import Image from "next/image"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      {/* Connect with Us Section */}
      <section className="bg-cream-warm paper-texture py-16 px-4 text-center mb-16">
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

          {/* Instagram Feed Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-blue-accent mb-8 tracking-wide">
              Últimas publicaciones
            </h2>
            <div className="organic-line-separator h-8 mb-10"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "/media/carrot.jpg",
                  alt: "Deliciosa Carrot Cake recién horneada",
                  likes: "127",
                  caption:
                    "Nuestra famosa Carrot Cake con su irresistible cobertura cremosa 🥕✨ #CarrotCake #Artesanal",
                  timeAgo: "2h",
                },
                {
                  src: "/media/chesscake.jpg",
                  alt: "Cheesecake con frutos rojos",
                  likes: "89",
                  caption:
                    "Cheesecake con coulis de frutos rojos frescos 🍓 Perfecta para compartir momentos especiales",
                  timeAgo: "1d",
                },
                {
                  src: "/media/cookies.jpg",
                  alt: "Cookies con chips de chocolate",
                  likes: "156",
                  caption: "Cookies crocantes por fuera, suaves por dentro 🍪 El clásico que nunca falla #Cookies",
                  timeAgo: "3d",
                },
              ].map((post, index) => (
                <div key={index} className="instagram-post-card group">
                  <div className="relative overflow-hidden rounded-lg">
                    {/* Instagram Post Image */}
                    <div className="instagram-image-container">
                      <Image
                        src={post.src || "/placeholder.svg"}
                        alt={post.alt}
                        fill
                        className="instagram-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Instagram Overlay on Hover */}
                      <div className="instagram-overlay">
                        <div className="flex items-center justify-center space-x-6 text-white">
                          <div className="flex items-center space-x-2">
                            <Heart className="w-6 h-6 fill-current" />
                            <span className="font-semibold">{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MessageCircle className="w-6 h-6" />
                            <span className="font-semibold">12</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Instagram Post Info */}
                    <div className="instagram-post-info">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full bg-instagram-gradient flex items-center justify-center">
                            <Instagram className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-brown-chocolate">mejo.pasteleria</p>
                            <p className="text-xs text-brown-chocolate/60">{post.timeAgo}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4 text-brown-chocolate/60" />
                          <span className="text-xs text-brown-chocolate/60">{post.likes}</span>
                        </div>
                      </div>

                      <p className="text-sm text-brown-chocolate/80 leading-relaxed line-clamp-2">{post.caption}</p>

                      <button className="mt-3 text-xs text-blue-main hover:text-blue-accent transition-colors font-medium">
                        Ver en Instagram
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-10">
              <Button className="bg-instagram-gradient text-white hover:opacity-90 rounded-full px-8 py-3 text-base font-body font-medium flex items-center gap-2 mx-auto">
                <Instagram className="w-5 h-5" />
                Ver más en Instagram
              </Button>
            </div>
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
                <h3 className="font-display font-semibold text-blue-accent mb-4 text-xl tracking-wide">Ubicación</h3>
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
