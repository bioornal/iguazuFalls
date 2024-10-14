import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"
import pileta from '/public/images/pileta.png'
import logo from '/public/images/LOGO_FONDO.png'


export default function HeroSection({ openWhatsApp }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);



  return (
    <section className="w-full h-[30vh] md:h-[80vh] flex items-center justify-center bg-gray-900 bg-opacity-50 bg-blend-overlay relative overflow-hidden">
      <Image
        src={pileta}
        alt="Piscina de Iguazú Falls Duplex & Lodge"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className="transition-opacity duration-1000 opacity-100"
      />
      
      <div className="absolute bottom-10 left-10 md:bottom-10 md:right-10 z-10">
        <Image
          src={logo}
          alt="Logo de Iguazú Falls Duplex & Lodge"
          width={240}
          height={240}
          className="opacity-85 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

    </section>
  )
}
