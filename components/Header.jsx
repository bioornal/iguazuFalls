import React, { useState, useEffect } from 'react'
import Link from "next/link";
import {  Menu, X } from "lucide-react";
import Image from "next/image";


function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const openWhatsApp = () => {
        const phoneNumber = "5493757210123";
        const message = encodeURIComponent("Hola, me gustaría hacer una reserva en Iguazu Falls.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      };

return (
    <header className={`fixed w-full px-6 lg:px-12 h-24 flex items-center justify-between transition-all duration-300 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
    <Link className="flex items-center" href="#">
      <Image
        src="https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/DUPLEX+logo.png"
        alt="Iguazu Falls Cabins Logo"
        width={80}
        height={80}
        className="h-20 w-auto"
      />
      <span className={`ml-4 text-xl font-semibold ${isScrolled ? 'text-green-800' : 'text-white'
        }`}>
        Iguazu Falls Duplex & Lodge
      </span>
    </Link>
    <div className="flex items-center space-x-6">
      <nav className="hidden lg:flex gap-6">
        {[
          { name: 'Sobre Nosotros', href: '#about' },
          { name: 'Cabañas', href: '#cabins' },
          { name: 'Atracciones', href: '#attractions' },
          { name: 'Contacto', href: '#contact' }
        ].map((item) => (
          <Link
            key={item.name}
            className={`text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300 ${isScrolled ? 'text-green-800' : 'text-white'
              }`}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <button
        onClick={openWhatsApp}
        className={`transition-all duration-300 px-6 py-2 rounded-full ${isScrolled
          ? 'bg-yellow-500 text-green-900 hover:bg-yellow-400'
          : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
          } border border-white`}
      >
        Reservar Ahora
      </button>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-white focus:outline-none"
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
    </div>
  </header>
)


}

export default Header