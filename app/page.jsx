'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/Dialog"
import { Leaf, MapPin, Calendar, Phone, Wifi, Coffee, Tv, Menu, X, Users, Maximize2, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

export default function Page() {
  const [openModal, setOpenModal] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [zoomedImage, setZoomedImage] = useState(null)
  const zoomRef = useRef(null)


  // Función para generar URLs de imágenes aleatorias para cada cabaña
  const getRandomImages = (id, count) => {
    return Array(count).fill(0).map((_, index) => `https://picsum.photos/400/300?random=${id}_${index}`)
  }

  const handleImageMouseDown = (src) => {
    setZoomedImage(src)
  }

  const handleImageMouseUp = () => {
    setZoomedImage(null)
  }

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
    document.addEventListener('mouseup', handleImageMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleImageMouseUp)
    }
  }, [zoomedImage])


  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-green-800">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 text-green-400" />
          <span className="ml-2 text-xl sm:text-2xl font-bold text-white">Iguazu Falls Cabins</span>
        </Link>
        <nav className="ml-auto hidden sm:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#about">
            Sobre Nosotros
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#cabins">
            Cabañas
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#attractions">
            Atracciones
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#contact">
            Contacto
          </Link>
        </nav>
        <button className="ml-auto sm:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </header>
      {mobileMenuOpen && (
        <nav className="sm:hidden bg-green-800 text-white p-4">
          <Link className="block py-2" href="#about" onClick={() => setMobileMenuOpen(false)}>
            Sobre Nosotros
          </Link>
          <Link className="block py-2" href="#cabins" onClick={() => setMobileMenuOpen(false)}>
            Cabañas
          </Link>
          <Link className="block py-2" href="#attractions" onClick={() => setMobileMenuOpen(false)}>
            Atracciones
          </Link>
          <Link className="block py-2" href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Contacto
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-[url('https://picsum.photos/1600/900')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white bg-green-800/70 p-4 rounded-lg">
                  Bienvenidos al Paraíso Tropical
                </h1>
                <p className="mx-auto max-w-[700px] text-white text-base sm:text-lg md:text-xl bg-green-800/70 p-4 rounded-lg">
                  Descubre la magia de la selva en nuestras cabañas de lujo, a pasos de las majestuosas Cataratas del Iguazú.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-yellow-500 text-green-900 hover:bg-yellow-400">
                  Reservar Ahora
                </Button>
                <Button variant="outline" className="bg-green-800/70 text-white border-white hover:bg-green-700" onClick={() => setOpenGallery(true)}>
                  Ver Cabañas
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-green-100 flex items-center justify-center min-h-[50vh]">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-4 text-green-800">Sobre Nosotros</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 text-sm sm:text-base md:text-lg text-center">
              Iguazu Falls Cabins ofrece una experiencia única en el corazón de la selva misionera. Nuestras cabañas combinan el confort moderno con la belleza natural que nos rodea.
            </p>
          </div>
        </section>
        <section id="cabins" className="w-full py-12 md:py-24 lg:py-32 bg-green-200">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 text-green-800">Nuestras Cabañas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {cabins.map((cabin) => {
                const cabinImages = getRandomImages(cabin.id, 5)
                return (
                  <div key={cabin.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative cursor-pointer" onClick={() => setOpenModal(cabin.id)}>
                      <Image
                        src={cabinImages[0]}
                        alt={cabin.name}
                        width={200}
                        height={150}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-yellow-500 text-green-900 px-2 py-1 text-xs font-semibold rounded-bl-lg">
                        {cabin.rating} ★
                      </div>
                    </div>
                    <div className="p-2">
                      <h3 className="font-semibold text-sm text-green-800 truncate">{cabin.name}</h3>
                      <div className="flex justify-between items-center mt-1 text-xs text-gray-600">
                        <span>{cabin.capacity}</span>
                        <span>{cabin.size}</span>
                      </div>
                      <Button
                        className="w-full mt-2 text-xs py-1 bg-green-600 hover:bg-green-500 text-white"
                        onClick={() => setOpenModal(cabin.id)}
                      >
                        Ver Detalles
                      </Button>
                    </div>
                    <Dialog open={openModal === cabin.id} onOpenChange={(isOpen) => setOpenModal(isOpen ? cabin.id : null)}>
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
                            {cabinImages.map((src, index) => (
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
                    </Dialog>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <section id="attractions" className="w-full py-12 md:py-24 lg:py-32 bg-green-100 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-4 text-green-800">Atracciones Cercanas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-green-800">Cataratas del Iguazú</h3>
                  <p className="text-gray-700 text-sm sm:text-base">A solo 20 minutos de nuestro complejo.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-green-800">Selva Misionera</h3>
                  <p className="text-gray-700 text-sm sm:text-base">Explora la biodiversidad de la selva tropical.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-800 text-white flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-4">Contáctanos</h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg">
                  ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input className="bg-white text-green-800" placeholder="Tu email" type="email" />
                  <Button type="submit" className="bg-yellow-500 text-green-900 hover:bg-yellow-400">
                    Enviar
                  </Button>
                </form>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-sm sm:text-base">+54 3757 123456</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-green-900 text-white">
        <p className="text-xs sm:text-sm text-gray-300">© 2023 Iguazu Falls Cabins. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link className="text-xs sm:text-sm hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs sm:text-sm hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
      {zoomedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={zoomRef}
            className="relative max-w-3xl max-h-[90vh] transition-transform duration-200 ease-in-out transform scale-150"
          >
            <Image
              src={zoomedImage}
              alt="Imagen ampliada"
              width={800}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}