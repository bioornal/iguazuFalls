'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/Dialog"
import { Leaf, MapPin, Calendar, Phone, Wifi, Coffee, Tv, Menu, X, Users, Maximize2, Star, TreePine, Bird, Building, Zap, Flag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import ContactForm from '../components/formContacto.jsx'
import HeroSection from '../components/HeroSection.jsx'

const cabins = [
  {
    id: 1,
    name: "Cabaña Tropical 1",
    description: "Una acogedora cabaña para dos personas con vista a la selva.",
    capacity: "2 personas",
    size: "30 m²",
    rating: 4.5,
    amenities: ["Wi-Fi", "Aire acondicionado", "Terraza privada", "Cafetera"]
  },
  {
    id: 2,
    name: "Cabaña Familiar",
    description: "Espaciosa cabaña ideal para familias, con área de juegos para niños.",
    capacity: "4-6 personas",
    size: "60 m²",
    rating: 4.8,
    amenities: ["Wi-Fi", "Cocina completa", "Área de juegos", "TV por cable"]
  },
  {
    id: 3,
    name: "Suite Lujo Selvático",
    description: "Nuestra cabaña más lujosa con jacuzzi privado y vistas panorámicas.",
    capacity: "2 personas",
    size: "45 m²",
    rating: 5.0,
    amenities: ["Wi-Fi", "Jacuzzi privado", "Servicio a la habitación", "Minibar"]
  },
  {
    id: 4,
    name: "Cabaña Río",
    description: "Hermosa cabaña con vistas al río y acceso directo a la orilla.",
    capacity: "3 personas",
    size: "40 m²",
    rating: 4.7,
    amenities: ["Wi-Fi", "Terraza con vista al río", "Kayak incluido", "Parrilla"]
  },
  {
    id: 5,
    name: "Cabaña del Bosque",
    description: "Cabaña rústica inmersa en el corazón del bosque para los amantes de la naturaleza.",
    capacity: "2-4 personas",
    size: "50 m²",
    rating: 4.6,
    amenities: ["Estufa a leña", "Observatorio de aves", "Senderos privados", "Ducha al aire libre"]
  },
  {
    id: 6,
    name: "Suite Luna de Miel",
    description: "Romántica suite perfecta para parejas en su luna de miel o aniversario.",
    capacity: "2 personas",
    size: "55 m²",
    rating: 4.9,
    amenities: ["Cama king size", "Bañera de hidromasaje", "Champagne de bienvenida", "Desayuno en la cama"]
  },
  {
    id: 7,
    name: "Cabaña Aventura",
    description: "Diseñada para los amantes de la aventura, con equipo de trekking incluido.",
    capacity: "4 personas",
    size: "45 m²",
    rating: 4.7,
    amenities: ["Equipo de trekking", "Mapas de senderos", "Terraza panorámica", "Ducha de alta presión"]
  },
  {
    id: 8,
    name: "Eco-Cabaña",
    description: "Cabaña ecológica autosustentable, perfecta para los conscientes del medio ambiente.",
    capacity: "2-3 personas",
    size: "35 m²",
    rating: 4.8,
    amenities: ["Paneles solares", "Recolección de agua de lluvia", "Compostaje", "Productos orgánicos"]
  },
  {
    id: 9,
    name: "Cabaña Gran Familia",
    description: "Amplia cabaña para grupos grandes o familias extendidas.",
    capacity: "8-10 personas",
    size: "100 m²",
    rating: 4.6,
    amenities: ["Múltiples dormitorios", "Gran sala de estar", "Cocina completa", "Área de juegos para niños"]
  },
  {
    id: 10,
    name: "Cabaña Otro Nombre",
    description: "Amplia cabaña para grupos grandes o familias extendidas.",
    capacity: "8-10 personas",
    size: "100 m²",
    rating: 4.6,
    amenities: ["Múltiples dormitorios", "Gran sala de estar", "Cocina completa", "Área de juegos para niños"]
  },
  {
    id: 11,
    name: "Cabaña Otro Nombre 2",
    description: "Amplia cabaña para grupos grandes o familias extendidas.",
    capacity: "8-10 personas",
    size: "100 m²",
    rating: 4.6,
    amenities: ["Múltiples dormitorios", "Gran sala de estar", "Cocina completa", "Área de juegos para niños"]
  }
]

const attractions = [
  {
    name: "Cataratas del Iguazú",
    description: "Una de las Siete Maravillas Naturales del Mundo, con 275 saltos de agua.",
    icon: <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "20 minutos"
  },
  {
    name: "La Aripuca",
    description: "Atracción turística que muestra la cultura guaraní y la importancia de la conservación.",
    icon: <TreePine className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "15 minutos"
  },
  {
    name: "Güirá Oga",
    description: "Centro de rescate y rehabilitación de aves, ideal para los amantes de la naturaleza.",
    icon: <Bird className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "25 minutos"
  },
  {
    name: "Parque de las Aves",
    description: "Zoológico de aves con más de 150 especies en su hábitat natural.",
    icon: <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "10 minutos"
  },
  {
    name: "Ciudad del Este",
    description: "Ciudad paraguaya conocida por sus compras, a un corto viaje desde Iguazú.",
    icon: <Building className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "45 minutos"
  },
  {
    name: "Represa de Itaipu",
    description: "Una de las mayores obras de ingeniería del mundo, generando energía limpia.",
    icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "40 minutos"
  },
  {
    name: "Cataratas del lado brasileño",
    description: "Otra perspectiva de las majestuosas cataratas desde el lado brasileño.",
    icon: <Flag className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "30 minutos"
  }
]

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openModal, setOpenModal] = useState(null)
  const [zoomedImage, setZoomedImage] = useState(null)
  const zoomRef = useRef(null)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setZoomedImage(null)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (zoomRef.current && zoomedImage) {
        const { left, top, width, height } = zoomRef.current.getBoundingClientRect()
        const x = (e.clientX - left) / width
        const y = (e.clientY - top) / height
        zoomRef.current.style.transformOrigin = `${x * 100}% ${y * 100}%`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [zoomedImage])

  const handleImageMouseDown = (src) => {
    setZoomedImage(src)
  }

  const handleImageMouseUp = () => {
    setZoomedImage(null)
  }

  const getRandomImages = (id, count) => {
    return Array(count).fill(0).map((_, index) => `https://picsum.photos/400/300?random=${id}_${index}`)
  }


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openWhatsApp = () => {
    const phoneNumber = "5493757210123";
    const message = encodeURIComponent("Hola, me gustaría hacer una reserva en Iguazu Falls.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className={`fixed w-full px-4 lg:px-6 h-24 flex items-center transition-all duration-300 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/logo-Photoroom.png"
            alt="Iguazu Falls Cabins Logo"
            width={50}
            height={50}
            className="h-24 w-auto"
          />
        </Link>
        <nav className="ml-auto hidden sm:flex gap-4 sm:gap-6">
          {[
            { name: 'Sobre Nosotros', href: '#about' },
            { name: 'Cabañas', href: '#cabins' },
            { name: 'Atracciones', href: '#attractions' },
            { name: 'Contacto', href: '#contact' }
          ].map((item) => (
            <Link
              key={item.name}
              className={`text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300 ${isScrolled ? 'text-green-800' : 'text-white'
                }`}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button
          onClick={openWhatsApp}
          className={`ml-4 transition-all duration-300 px-4 py-2 rounded ${isScrolled
            ? 'bg-yellow-500 text-green-900 hover:bg-yellow-400'
            : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
            } border border-white`}
        >
          Reservar Ahora
        </button>
      </header>

      <main className="flex-1">
        <HeroSection />
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-green-100"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">Sobre Nosotros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Leaf className="text-green-600 mt-1 w-6 h-6" />
                  <p className="text-gray-700 text-lg">Iguazu Falls Cabins ofrece una experiencia única en el corazón de la selva misionera.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-green-600 mt-1 w-6 h-6" />
                  <p className="text-gray-700 text-lg">Ubicados estratégicamente cerca de las majestuosas Cataratas del Iguazú.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="text-green-600 mt-1 w-6 h-6" />
                  <p className="text-gray-700 text-lg">Combinamos el confort moderno con la belleza natural que nos rodea.</p>
                </div>
              </div>
              <div className="relative h-64 md:h-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://picsum.photos/800/600"
                  alt="Vista de las cabañas"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <section id="cabins" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">Nuestras Cabañas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cabins.map((cabin) => {
                const cabinImages = getRandomImages(cabin.id, 5)
                return (
                  <div key={cabin.id} className="rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
                    <div className="relative cursor-pointer" onClick={() => setOpenModal(cabin.id)}>
                      <Image
                        src={cabinImages[0]}
                        alt={cabin.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-yellow-500 text-green-900 px-2 py-1 text-xs font-semibold rounded-bl-lg">
                        {cabin.rating} ★
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-green-800">{cabin.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{cabin.description}</p>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                        <span>{cabin.capacity}</span>
                        <span>{cabin.size}</span>
                      </div>
                      <Button
                        className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white"
                        onClick={() => setOpenModal(cabin.id)}
                      >
                        Ver Detalles
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Modal para detalles de la cabaña */}
        {cabins.map((cabin) => (
          <Dialog key={cabin.id} open={openModal === cabin.id} onOpenChange={(isOpen) => setOpenModal(isOpen ? cabin.id : null)}>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{cabin.name}</DialogTitle>
                <DialogDescription>{cabin.description}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 items-center gap-4">
                  <span className="font-semibold">Capacidad:</span>
                  <span>{cabin.capacity}</span>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <span className="font-semibold">Tamaño:</span>
                  <span>{cabin.size}</span>
                </div>
                <div>
                  <span className="font-semibold">Amenidades:</span>
                  <ul className="list-disc list-inside mt-2">
                    {cabin.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center">
                        {amenity === 'Wi-Fi' && <Wifi className="mr-2 h-4 w-4" />}
                        {amenity === 'Cafetera' && <Coffee className="mr-2 h-4 w-4" />}
                        {amenity === 'TV por cable' && <Tv className="mr-2 h-4 w-4" />}
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 relative">
                <h4 className="font-semibold mb-2">Galería de imágenes:</h4>
                <div className="flex overflow-x-auto space-x-2 pb-2">
                  {getRandomImages(cabin.id, 5).map((src, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer"
                      onMouseDown={() => handleImageMouseDown(src)}
                      onMouseUp={handleImageMouseUp}
                      onMouseLeave={handleImageMouseUp}
                    >
                      <Image
                        src={src}
                        alt={`${cabin.name} imagen ${index + 1}`}
                        width={100}
                        height={75}
                        className="object-cover transition-transform duration-200 ease-in-out"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <Button onClick={() => setOpenModal(null)}>Cerrar</Button>
            </DialogContent>
            {zoomedImage && (
              <div className="fixed inset-0 z-[60] overflow-hidden">
                <div
                  className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300"
                  onClick={handleImageMouseUp}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    ref={zoomRef}
                    className="relative w-[80vw] h-[80vh] max-w-3xl max-h-[600px] overflow-hidden rounded-lg"
                    onMouseUp={handleImageMouseUp}
                    onMouseLeave={handleImageMouseUp}
                  >
                    <Image
                      src={zoomedImage}
                      alt="Imagen ampliada"
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-200 ease-in-out transform scale-100 hover:scale-150"
                    />
                    <button
                      className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
                      onClick={handleImageMouseUp}
                    >
                      <X className="h-6 w-6 text-gray-800" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Dialog>
        ))}

        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          id="attractions"
          className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">Atracciones Cercanas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {attractions.map((attraction, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  {attraction.icon}
                  <h3 className="font-bold text-lg sm:text-xl text-green-800 text-center">{attraction.name}</h3>
                  <p className="text-gray-700 text-sm sm:text-base text-center">{attraction.description}</p>
                  <div className="flex items-center mt-2 text-green-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{attraction.distance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          id="contact"
        >
          <ContactForm />
        </motion.section>
      </main>

      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mt-8 pt-8 border-t border-green-700 text-center">
            <p className="text-sm">&copy; 2023 Iguazu Falls Cabins. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}