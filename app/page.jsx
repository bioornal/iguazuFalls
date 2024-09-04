'use client'

import { useState, useEffect } from 'react'

import { Leaf, MapPin, Calendar, Phone, Wifi, Coffee, Tv, Menu, X, Users, Maximize2, Star, TreePine, Bird, Building, Zap, Flag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import ContactForm from '../components/formContacto.jsx'
import HeroSection from '../components/HeroSection.jsx'
import Cabins from '../components/Cabins.jsx'


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

<Cabins />

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