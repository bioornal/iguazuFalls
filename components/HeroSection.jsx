import React, { useState, useEffect } from 'react'
import Image from "next/image"



export default function HeroSection({ openWhatsApp }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);



  return (
    <section className="w-full h-[30vh] md:h-[80vh] flex items-center justify-center bg-gray-900 bg-opacity-50 bg-blend-overlay relative overflow-hidden">
      <Image
        src="https://res.cloudinary.com/djtvjkcu6/image/upload/v1737465376/Natalia/pileta3_a4f3w2.jpg"
        alt="Piscina de Iguazú Falls Duplex & Lodge"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className="transition-opacity duration-1000 opacity-100"
      />
      <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 lg:bottom-16 lg:left-16 z-10">
        <Image
            src="/images/garage.png"
          alt="Logo de Iguazú Falls Duplex & Lodge"
          width={240}
          height={240}
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 opacity-85 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

    </section>
  )
}
