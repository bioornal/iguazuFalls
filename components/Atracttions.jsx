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
  function Attractions() {
    return (
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        id="attractions"
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
      >
        <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-12 text-green-800">
        Atracciones Cercanas
        </h2>
          <div className="space-y-8">
            {attractions.map((attraction, index) => (
              <div key={index} className={`flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 h-64 bg-gray-300">
                  {/* Placeholder for image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Image Placeholder
                  </div>
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-blue-600 mb-2">{attraction.name}</h3>
                    <p className="text-gray-600 mb-4">{attraction.description}</p>
                  </div>
                  <Link href={attraction.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Saber mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    )
  }
  
  export default Attractions