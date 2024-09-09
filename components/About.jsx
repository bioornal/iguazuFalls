import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, MapPin, Star, Home, Users, Car } from "lucide-react"
import Image from "next/image"

export default function About() {
  const features = [
    { icon: Leaf, text: "Experiencia única a minutos de la selva misionera" },
    { icon: MapPin, text: "Ubicación estratégica a solo 20 minutos de las Cataratas del Iguazú" },
    { icon: Star, text: "Modernidad y simplicidad en ambientes relajados" },
    { icon: Home, text: "Alojamientos bien equipados para parejas, familias y grupos" },
    { icon: Users, text: "Atención personalizada y cálida de nuestro equipo local" },
    { icon: Car, text: "Departamentos familiares con garage para tu tranquilidad" }
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-12 text-green-800">
          Iguazu Falls Duplex & Lodge
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-lg text-gray-700 mb-6 text-justify">
              Iguazu Falls Duplex & Lodge es un refugio encantador ubicado a pocos minutos de las imponentes Cataratas del Iguazú. Cada una de nuestros departamentos ha sido diseñado con un toque elegante y moderno, brindando comodidad y confort en la ciudad natural incomparable de Iguazú. Todos cuentan con Wi-Fi gratuito y equipamiento premium para que disfrutes de una estancia placentera.
            </p>
            <p className="text-lg text-gray-700 mb-6 text-justify">
              Además de los acogedoras departamentos, ofrecemos una piscina al aire libre, creando el ambiente perfecto para relajarte.
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