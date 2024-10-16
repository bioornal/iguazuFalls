'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image"

import { motion } from 'framer-motion';
import { DotLoader } from 'react-spinners';
import ContactForm from '@/components/formContacto';
import MapaUbicacion from '@/components/MapaUbicacion';
import HeroSection from '../components/HeroSection.jsx';
import Cabins from '../components/Cabins.jsx';
import About from '../components/About.jsx';
import Header from '../components/Header.jsx';
import Atracttions from '../components/Atracttions.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return (
      <>

        <div className="flex flex-col items-center justify-center h-screen bg-white">
          <div className="mb-8">
            <Image
              src="https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/HeroImages/LOGO_FONDO.png"
              alt="Logo de Iguazú Falls Duplex & Lodge"
              width={240}
              height={240}
              className="w-60 h-60"
            />
          </div>
          <DotLoader color="#111f12" size={100} />
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <About />
        <Cabins />
        <Atracttions />
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          id="contact"
        >
          <ContactForm />
        </motion.section>
        <MapaUbicacion />
      </main>
      <Footer />
    </div>
  );
}
