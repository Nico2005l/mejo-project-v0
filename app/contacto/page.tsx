import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram, Heart, MessageCircle } from "lucide-react"
import { CornerLines } from "@/components/corner-lines"
import Image from "next/image"

// WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
)

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      {/* Connect with Us Section */}
      <section className="bg-cream-warm paper-texture py-12 sm:py-16 px-4 sm:px-6 text-center mb-12 sm:mb-16">
        <div className="container-responsive">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-blue-accent mb-4 sm:mb-6 tracking-wide">
            ¡Conectá con nosotros!
          </h1>
          <p className="text-base sm:text-lg font-body text-brown-chocolate max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4">
            Seguinos en Instagram para ver nuestras últimas creaciones, hacer pedidos y mantenerte al día con todas
            nuestras novedades.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
            <Button className="bg-whatsapp-green text-white hover:bg-whatsapp-green/90 rounded-full px-4 sm:px-6 py-3 text-base sm:text-lg font-body font-medium flex items-center justify-center gap-2 min-h-[48px]">
              <WhatsAppIcon className="w-5 h-5" />
              <span className="truncate">WhatsApp</span>
            </Button>
            <Button className="bg-instagram-gradient text-white hover:opacity-90 rounded-full px-4 sm:px-6 py-3 text-base sm:text-lg font-body font-medium flex items-center justify-center gap-2 min-h-[48px]">
              <Instagram className="w-5 h-5" />
              <span className="truncate">@mejo.pasteleria</span>
            </Button>
          </div>

          {/* Instagram Feed Section */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-blue-accent mb-6 sm:mb-8 tracking-wide">
              Últimas publicaciones
            </h2>
            <div className="organic-line-separator h-8 mb-8 sm:mb-10"></div>

            <div className="grid-responsive-3 gap-responsive-sm">
              {[
                {
                  src: "/media/instagram/cheesecake-slice.jpg",
                  alt: "Deliciosa porción de cheesecake con frutos rojos",
                  likes: "142",
                  caption:
                    "Nuestra exquisita cheesecake con coulis de frutos rojos 🍓✨ Cremosa, suave y perfecta para cualquier ocasión especial #Cheesecake #FrutosRojos",
                  timeAgo: "2h",
                },
                {
                  src: "/media/instagram/chocolate-berries.jpg",
                  alt: "Torta de chocolate con crema y frutos rojos congelados",
                  likes: "198",
                  caption:
                    "Torta de chocolate con crema batida y frutos rojos frescos 🫐🍓 Una explosión de sabores que conquista corazones #Chocolate #BerryCake",
                  timeAgo: "1d",
                },
                {
                  src: "/media/instagram/cinnamon-rolls.jpg",
                  alt: "Rolls de canela recién horneados con glaseado",
                  likes: "176",
                  caption:
                    "Rolls de canela recién salidos del horno con nuestro glaseado especial 🌀✨ Perfectos para acompañar tu café de la mañana #CinnamonRolls #Desayuno",
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
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Instagram Overlay on Hover */}
                      <div className="instagram-overlay">
                        <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-white">
                          <div className="flex items-center space-x-2">
                            <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                            <span className="font-semibold text-sm sm:text-base">{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="font-semibold text-sm sm:text-base">12</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Instagram Post Info */}
                    <div className="instagram-post-info">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-2 min-w-0 flex-1">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-instagram-gradient flex items-center justify-center flex-shrink-0">
                            <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-xs sm:text-sm text-brown-chocolate truncate">
                              mejo.pasteleria
                            </p>
                            <p className="text-xs text-brown-chocolate/60">{post.timeAgo}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 flex-shrink-0">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-brown-chocolate/60" />
                          <span className="text-xs text-brown-chocolate/60">{post.likes}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-brown-chocolate/80 leading-relaxed line-clamp-2 mb-2 sm:mb-3">
                        {post.caption}
                      </p>

                      <button className="text-xs text-blue-main hover:text-blue-accent transition-colors font-medium">
                        Ver en Instagram
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 sm:mt-10">
              <Button className="bg-instagram-gradient text-white hover:opacity-90 rounded-full px-6 sm:px-8 py-3 text-sm sm:text-base font-body font-medium flex items-center gap-2 mx-auto min-h-[48px]">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="truncate">Ver más en Instagram</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="container-responsive">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-blue-accent mb-6 sm:mb-8 tracking-wide">
              Contacto
            </h1>
            <div className="organic-line-separator h-8 mb-8 sm:mb-12"></div>
            <p className="text-base sm:text-lg xl:text-xl font-body text-brown-chocolate max-w-3xl mx-auto leading-relaxed px-4">
              Estamos aquí para hacer realidad tus momentos más dulces. Contáctanos para pedidos especiales o cualquier
              consulta
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <div className="incomplete-border-box relative">
                <CornerLines />
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-blue-accent mb-6 sm:mb-8 text-center tracking-wide">
                  Envíanos un Mensaje
                </h2>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-body font-medium text-brown-chocolate mb-2 sm:mb-3"
                      >
                        Nombre
                      </label>
                      <Input
                        id="nombre"
                        placeholder="Tu nombre completo"
                        className="w-full border-border-subtle focus:border-blue-main rounded-lg font-body bg-white text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-body font-medium text-brown-chocolate mb-2 sm:mb-3"
                      >
                        Teléfono
                      </label>
                      <Input
                        id="telefono"
                        placeholder="Tu número de teléfono"
                        className="w-full border-border-subtle focus:border-blue-main rounded-lg font-body bg-white text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-body font-medium text-brown-chocolate mb-2 sm:mb-3"
                    >
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full border-border-subtle focus:border-blue-main rounded-lg font-body bg-white text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="asunto"
                      className="block text-sm font-body font-medium text-brown-chocolate mb-2 sm:mb-3"
                    >
                      Asunto
                    </label>
                    <Input
                      id="asunto"
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full border-border-subtle focus:border-blue-main rounded-lg font-body bg-white text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-body font-medium text-brown-chocolate mb-2 sm:mb-3"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos más detalles sobre tu pedido o consulta..."
                      rows={4}
                      className="w-full border-border-subtle focus:border-blue-main rounded-lg font-body resize-none bg-white text-sm sm:text-base"
                    />
                  </div>
                  <div className="text-center pt-2 sm:pt-4">
                    <Button className="btn-handmade w-full sm:w-auto">Enviar Mensaje</Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
              <div className="incomplete-border-box text-center relative">
                <CornerLines />
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-main mx-auto mb-4 sm:mb-6" />
                <h3 className="font-display font-semibold text-blue-accent mb-3 sm:mb-4 text-lg sm:text-xl tracking-wide">
                  Ubicación
                </h3>
                <p className="font-body text-sm sm:text-base text-brown-chocolate/80 leading-relaxed">
                  Calle 85 #12-34
                  <br />
                  Zona Rosa, Bogotá
                  <br />
                  Colombia
                </p>
              </div>
              <div className="incomplete-border-box text-center relative">
                <CornerLines />
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-main mx-auto mb-4 sm:mb-6" />
                <h3 className="font-display font-semibold text-blue-accent mb-3 sm:mb-4 text-lg sm:text-xl tracking-wide">
                  Teléfono
                </h3>
                <p className="font-body text-sm sm:text-base text-brown-chocolate/80 leading-relaxed">
                  +57 (1) 345-6789
                  <br />
                  WhatsApp: +57 310 234 5678
                </p>
              </div>
              <div className="incomplete-border-box text-center relative">
                <CornerLines />
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-main mx-auto mb-4 sm:mb-6" />
                <h3 className="font-display font-semibold text-blue-accent mb-3 sm:mb-4 text-lg sm:text-xl tracking-wide">
                  Correo
                </h3>
                <p className="font-body text-sm sm:text-base text-brown-chocolate/80 leading-relaxed break-words">
                  hola@mejopasteleria.com
                  <br />
                  pedidos@mejopasteleria.com
                </p>
              </div>
              <div className="incomplete-border-box text-center relative">
                <CornerLines />
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-main mx-auto mb-4 sm:mb-6" />
                <h3 className="font-display font-semibold text-blue-accent mb-3 sm:mb-4 text-lg sm:text-xl tracking-wide">
                  Horarios
                </h3>
                <div className="font-body text-sm sm:text-base text-brown-chocolate/80 space-y-1 sm:space-y-2 leading-relaxed">
                  <p>Martes - Viernes: 9:00 AM - 7:00 PM</p>
                  <p>Sábados: 10:00 AM - 6:00 PM</p>
                  <p>Domingos: 11:00 AM - 4:00 PM</p>
                  <p className="text-xs sm:text-sm italic mt-2 sm:mt-4">Lunes: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Orders Section */}
          <div className="mt-16 sm:mt-20">
            <div className="incomplete-border-box container-responsive-sm text-center relative">
              <CornerLines />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-blue-accent mb-6 sm:mb-8 tracking-wide">
                Pedidos Especiales
              </h2>
              <p
                className="text-base sm:text-lg font-body text-brown-chocolate mb-8 sm:mb-10 leading-relaxed px-4"
                style={{ lineHeight: "1.8em" }}
              >
                Para tortas personalizadas, eventos especiales o pedidos de gran volumen, te recomendamos contactarnos
                con al menos 72 horas de anticipación. Cada creación especial requiere tiempo y dedicación para alcanzar
                la perfección.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <Button className="btn-handmade flex items-center justify-center gap-2">
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp: +57 310 234 5678
                </Button>
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
