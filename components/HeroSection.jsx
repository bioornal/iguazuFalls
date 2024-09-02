import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  'https://w0.peakpx.com/wallpaper/247/678/HD-wallpaper-iguazu-waterfalls-sunset-parana-2022-bing.jpg',
  'https://static.tildacdn.com/tild3931-3736-4430-a161-363738366361/5883_Panorama.jpg'
]

export default function HeroSection({ openWhatsApp }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 bg-blend-overlay relative overflow-hidden">
      {images.map((img, index) => (
        <Image
          key={img}
          src={img}
          alt={`Cataratas del Iguazú ${index + 1}`}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={`transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white drop-shadow-lg">
              Bienvenidos al Paraíso de Iguazú
            </h1>
            <p className="mx-auto max-w-[700px] text-white text-lg sm:text-xl md:text-2xl drop-shadow-lg">
              Vive la magia de la naturaleza en nuestras cabañas de lujo, a pasos de las majestuosas Cataratas del Iguazú.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-yellow-500 text-green-900 hover:bg-yellow-400 text-lg px-6 py-3" onClick={openWhatsApp}>
              Reservar Ahora
            </Button>
            <Link href="#cabins">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-green-900 text-lg px-6 py-3">
                Ver Cabañas
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <button 
        onClick={goToPrevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={goToNextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  )
}