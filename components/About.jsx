import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, MapPin, Star, Home, Users, Coffee } from "lucide-react"
import Image from "next/image"

export default function About() {
  const features = [
    { icon: Leaf, text: "Experiencia única en el corazón de la selva misionera" },
    { icon: MapPin, text: "Ubicación estratégica a solo 20 minutos de las Cataratas del Iguazú" },
    { icon: Star, text: "Confort moderno en armonía con la belleza natural" },
    { icon: Home, text: "Alojamientos espaciosos y bien equipados para familias y grupos" },
    { icon: Users, text: "Atención personalizada y cálida de nuestro equipo local" },
    { icon: Coffee, text: "Desayuno regional incluido con productos locales" }
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-800">
          Sobre Nosotros
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-lg text-gray-700 mb-6">
              Bienvenidos a Iguazu Falls Duplex & Lodge, su refugio de tranquilidad en medio de la exuberante selva misionera. 
              Fundado en 2015 por la familia Rodríguez, nuestro lodge nació del sueño de compartir la belleza natural de Misiones 
              con viajeros de todo el mundo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <item.icon className="text-green-600 w-6 h-6 flex-shrink-0" />
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-80 lg:h-[400px] overflow-hidden rounded-2xl shadow-2xl"
          >
            <Image
              src="https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/pileta/IMG-20240904-WA0042.jpg"
              alt="Vista de las cabañas"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Iguazu Falls Duplex & Lodge</h3>
              <p className="text-sm">Su hogar en el paraíso natural de Misiones</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}