import React from 'react'
import { Leaf, MapPin, TreePine, Bird, Building, Zap, Flag } from "lucide-react";
import Link from "next/link";
import { motion } from 'framer-motion';

const attractions = [
    {
      name: "Cataratas del Iguazú",
      description: "Una de las Siete Maravillas Naturales del Mundo, con 275 saltos de agua.",
      icon: <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
      distance: "20 minutos",
      url: "https://iguazuargentina.com/es/"
    },
    {
      name: "La Aripuca",
      description: "Atracción turística que muestra la cultura guaraní y la importancia de la conservación.",
      icon: <TreePine className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
      distance: "15 minutos",
      url: "http://www.aripuca.com.ar/"
    },
    {
      name: "Güirá Oga",
      description: "Centro de rescate y rehabilitación de aves, ideal para los amantes de la naturaleza.",
      icon: <Bird className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
      distance: "25 minutos",
      url: "https://guiraoga.com.ar/"
    },
    {
      name: "Parque de las Aves",
      description: "Zoológico de aves con más de 150 especies en su hábitat natural.",
      icon: <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
      distance: "10 minutos",
      url: "https://parquedasaves.com.br/es/"
    },
    {
      name: "Ciudad del Este",
      description: "Ciudad paraguaya conocida por sus compras, a un corto viaje desde Iguazú.",
      icon: <Building className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
      distance: "45 minutos",
      url: "https://visitaparaguay.com.py/ciudad/ciudad-del-este"
    },
    {
      name: "Represa de Itaipu",
      description: "Una de las mayores obras de ingeniería del mundo, generando energía limpia.",
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
      distance: "40 minutos",
      url: "https://turismoitaipu.com.br/es/a-usina-itaipu/"
    },
    {
      name: "Cataratas del lado brasileño",
      description: "Otra perspectiva de las majestuosas cataratas desde el lado brasileño.",
      icon: <Flag className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
      distance: "30 minutos",
      url: "https://cataratasdoiguacu.com.br/"
    }
  ];

function Atracttions() {
  return (
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
          <Link href={attraction.url} key={index} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              {attraction.icon}
              <h3 className="font-bold text-lg sm:text-xl text-green-800 text-center">{attraction.name}</h3>
              <p className="text-gray-700 text-sm sm:text-base text-center">{attraction.description}</p>
              <div className="flex items-center mt-2 text-green-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{attraction.distance}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </motion.section>
  )
}

export default Atracttions