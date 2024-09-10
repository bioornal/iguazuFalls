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

      const menuItems = [
        { name: 'Sobre Nosotros', href: '#about' },
        { name: 'Lodges', href: '#cabins' },
        { name: 'Atracciones', href: '#attractions' },
        { name: 'Contacto', href: '#contact' }
      ];

      return (
        <header className={`fixed w-full px-6 lg:px-12 h-32 flex items-center justify-between transition-all duration-300 z-50 ${
            isScrolled 
              ? 'bg-white shadow-md' 
              : 'bg-transparent backdrop-blur-[10px] bg-opacity-15'
          } font-sans`}>
            <Link className="flex items-center" href="#">
              <Image
                src="https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/DUPLEX+logo.png"
                alt="Iguazu Falls Cabins Logo"
                width={80}
                height={80}
                className="h-20 w-auto"
              />
              <span className={`ml-4 text-xl font-semibold ${isScrolled ? 'text-green-800' : 'text-white'}`}>
                
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <nav className="hidden lg:flex gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    className={`text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300 ${isScrolled ? 'text-green-800' : 'text-white'}`}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <button
                onClick={openWhatsApp}
                className={`transition-all duration-300 px-6 py-2 rounded-full ${isScrolled
                  ? 'bg-green-800 text-white hover:bg-green-600'
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                  } border border-white font-medium`}
              >
                Reservar Ahora
              </button>
              <div className="relative lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="focus:outline-none transition-colors duration-300 hover:bg-opacity-20 hover:bg-white rounded-full p-2"
                >
                  {mobileMenuOpen ? (
                    <X className={`h-6 w-6 ${isScrolled ? 'text-green-800' : 'text-white'}`} />
                  ) : (
                    <Menu className={`h-6 w-6 ${isScrolled ? 'text-green-800' : 'text-white'}`} />
                  )}
                </button>
                
                {/* Menú móvil */}
                {mobileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <button
                      onClick={() => {
                        openWhatsApp();
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Reservar Ahora
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>
      )
}

export default Header