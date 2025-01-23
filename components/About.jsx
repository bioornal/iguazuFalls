import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, MapPin, Star, Home, Users, Car } from "lucide-react"
import Image from "next/image"
import pileta from '/public/images/pileta.jpg'

export default function About() {
  const features = [
    { 
      icon: Leaf, 
      text: "Experiencia única a minutos de la selva misionera", 
      image: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/HeroImages/selva.png",
      description: "Sumérgete en la exuberante belleza de la selva misionera. Descubrí el canto de aves exóticas y disfruta de paseos por senderos naturales muy cerca de tu alojamiento."
    },
    { 
      icon: Star, 
      text: "Modernidad y simplicidad en ambientes relajados", 
      image: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/HeroImages/relajado.jpg",
      description: "Nuestros espacios combinan diseño contemporáneo con la calidez de la naturaleza. Relájate en ambientes que fusionan confort moderno y la serenidad del entorno."
    },
    { 
      icon: Home, 
      text: "Alojamientos bien equipados para parejas, familias y grupos", 
      image: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/9/IMG-20240904-WA0022.jpg",
      description: "Desde acogedoras suites para parejas hasta amplios departamentos para familias, ofrecemos opciones para todos. Cada espacio está cuidadosamente equipado para tu máxima comodidad."
    },
    { 
      icon: Users, 
      text: "Atención personalizada y cálida de nuestro equipo local", 
      image: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/HeroImages/atencion.jpg",
      description: "Nuestro equipo de expertos locales está dedicado a hacer tu estancia inolvidable. Confía en nosotros para recomendaciones, asistencia y un servicio que supera expectativas."
    },
    { 
      icon: MapPin, 
      text: "Ubicación estratégica a solo 20 minutos de las Cataratas del Iguazú", 
      image: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/HeroImages/mapa.png",
      description: "Aprovecha nuestra ubicación privilegiada para visitar las majestuosas Cataratas del Iguazú. Estamos a un corto trayecto de una de las maravillas naturales del mundo."
    },
    { 
      icon: Car, 
      text: "Departamentos familiares con garage para tu tranquilidad", 
      image: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/HeroImages/garage.png",
      description: "Viaja con total tranquilidad sabiendo que tu vehículo estará seguro. Nuestros departamentos familiares incluyen garage privado para tu comodidad y seguridad."
    },
  ]

  return (
    <>
      <div className="absolute inset-x-0 top-0 bottom-0 z-0"></div>
      <section className="relative bg-gradient-to-t from-gray-800 via-gray-50 to-transparent z-10 -mt-16 md:-mt-24 lg:-mt-25">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6 lg:mt-40 md:mt-24 mt-32">
              <h2 className="text-[40px] font-semibold text-gray-100 bg-green-400 py-4 px-4 rounded-lg">Sobre nosotros</h2>
              <p className="text-sm sm:text-lg text-black text-justify">
                Iguazu Falls Duplex & Lodge es un refugio encantador ubicado a pocos minutos de las imponentes Cataratas del Iguazú. Cada una de nuestros departamentos ha sido diseñado con un toque elegante y moderno, brindando comodidad y confort en la ciudad natural incomparable de Iguazú. Todos cuentan con Wi-Fi gratuito y equipamiento premium para que disfrutes de una estancia placentera. Además de los acogedoras departamentos, ofrecemos una piscina al aire libre, creando el ambiente perfecto para relajarte.
              </p>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/HeroImages/pileta2-Photoroom.jpg"
                  alt="Paisaje de Iguazú"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((item, index) => (
                <FeatureCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FeatureCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-xl overflow-hidden"
    >
      <div className="relative h-32">
        <Image
          src={item.image}
          alt={item.text}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute top-2 left-2 bg-white rounded-full p-2">
          <item.icon className="text-blue-600 w-4 h-4" />
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-sm mb-1">{item.text}</h3>
        <p className="text-xs text-gray-600 ">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}
