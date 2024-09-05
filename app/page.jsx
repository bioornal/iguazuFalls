'use client'
import React from 'react';

import { motion } from 'framer-motion';
import ContactForm from '../components/formContacto.jsx';
import HeroSection from '../components/HeroSection.jsx';
import Cabins from '../components/Cabins.jsx';
import About from '../components/About.jsx';
import Header from '../components/Header.jsx';
import Atracttions from '../components/Atracttions.jsx';
import Footer from '../components/Footer.jsx';



export default function Page() {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <Header />
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
      </main>
      <Footer />
    </div>
  );
}