import React from 'react'
import { Leaf, MapPin, TreePine, Bird, Building, Zap, Flag } from "lucide-react";
import Link from "next/link";
import { motion } from 'framer-motion';

const attractions = [
  {
    name: "Cataratas del Iguazú",
    description: "Una de las Siete Maravillas Naturales del Mundo, con 275 saltos de agua. Este impresionante espectáculo natural atrae a visitantes de todo el mundo con su belleza incomparable y su poderosa fuerza.",
    icon: <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "20 minutos",
    url: "https://iguazuargentina.com/es/",
    image: "https://www.argentinaenviaje.com/wp-content/uploads/2019/02/cataratas-iguazu.jpg"
  },
  {
    name: "La Aripuca",
    description: "Atracción turística que muestra la cultura guaraní y la importancia de la conservación. Este fascinante lugar ofrece una experiencia educativa única sobre la flora y fauna de la región, así como las tradiciones ancestrales de los pueblos originarios.",
    icon: <TreePine className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "10 minutos",
    url: "http://www.aripuca.com.ar/",
    image: "https://excursioneseniguazu.com.ar/imagenes/aripuca-puerto-iguazu/aripuca-de-iguazu.jpg"
  },
  {
    name: "Güirá Oga",
    description: "Centro de rescate y rehabilitación de aves, ideal para los amantes de la naturaleza. Aquí podrás observar de cerca una gran variedad de especies de aves y aprender sobre los esfuerzos de conservación en la región.",
    icon: <Bird className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "10 minutos",
    url: "https://guiraoga.com.ar/",
    image: "https://sentiargentina.com/wp-content/uploads/2015/04/10422545_909438202441119_4220791886648223746_n.jpg"
  },
  {
    name: "Parque de las Aves",
    description: "Zoológico de aves con más de 150 especies en su hábitat natural. Este parque ofrece una experiencia inmersiva en la selva, donde podrás caminar entre aves exóticas y aprender sobre la biodiversidad de la región.",
    icon: <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "30 minutos",
    url: "https://parquedasaves.com.br/es/",
    image: "https://www.nordic-travel.com.ar/es/wp-content/uploads/2020/06/avesgaleria1.jpg"
  },
  {
    name: "Ciudad del Este",
    description: "Ciudad paraguaya conocida por sus compras, a un corto viaje desde Iguazú. Esta vibrante ciudad ofrece una experiencia cultural única y la oportunidad de adquirir productos a precios competitivos en sus numerosos centros comerciales.",
    icon: <Building className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "30 minutos",
    url: "https://visitaparaguay.com.py/ciudad/ciudad-del-este",
    image: "https://instantesdeviajes.com/wp-content/uploads/2022/06/IMG_20220321_122002034-scaled.jpg"
  },
  {
    name: "Represa de Itaipu",
    description: "Una de las mayores obras de ingeniería del mundo, generando energía limpia. Esta impresionante estructura no solo es una maravilla tecnológica, sino también un ejemplo de cooperación internacional entre Brasil y Paraguay.",
    icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "30 minutos",
    url: "https://turismoitaipu.com.br/es/a-usina-itaipu/",
    image: "https://radioconcierto.com.py/wp-content/uploads/2020/01/itaipu-turismo.jpg"
  },
  {
    name: "Cataratas del lado brasileño",
    description: "Otra perspectiva de las majestuosas cataratas desde el lado brasileño. Este recorrido ofrece vistas panorámicas impresionantes y la oportunidad de experimentar la fuerza de las cataratas desde un ángulo diferente.",
    icon: <Flag className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    distance: "30 minutos",
    url: "https://cataratasdoiguacu.com.br/",
    image: "https://cdn.getyourguide.com/img/tour/df811a919d7749d2f063eefee9719c17fcd13f942500b7f519e75acae3363517.jpeg/98.jpg"
  }
];

function Attractions() {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="attractions"
      className="w-full py-8 sm:py-12 md:py-24 lg:py-20 bg-white"
    >
      <div className="container px-3 sm:px-4 md:px-6 mx-auto">
        <h2 className="section-title text-center md:text-left mb-8 sm:mb-12 text-gray-100 bg-green-400 py-2 px-4 rounded-lg">
          Atracciones cercanas
        </h2>
        <div className="space-y-4 sm:space-y-8">
          {attractions.map((attraction, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-lg overflow-hidden shadow-md`}>
              <div className="md:w-[60%] h-48 sm:h-64 bg-gray-300">
                <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-[40%] p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="subsection-title mb-1 sm:mb-2">{attraction.name}</h3>
                  <p className="mb-2 sm:mb-4 text-sm sm:text-base">{attraction.description}</p>
                  <p className="text-xs sm:text-sm mb-2 sm:mb-4">
                    <span className="font-medium">Distancia:</span> {attraction.distance}
                  </p>
                </div>
                <Link href={attraction.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-green-600">
                  Más Información
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