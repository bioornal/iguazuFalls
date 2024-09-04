import React, { useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Phone, MapPin, Mail, Send, Clock, Calendar, CreditCard, HelpCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailtoLink = `mailto:christianspeziali@hotmail.com?subject=Nuevo mensaje de ${name}&body=${message}%0D%0A%0D%0AEmail de contacto: ${email}`
    window.location.href = mailtoLink
  }

  return (
    <div className="w-full bg-gradient-to-br from-green-800 to-green-900 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Contacto y Ubicación</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <div className="bg-white text-green-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">Nombre</label>
                      <Input 
                        id="name"
                        name="name"
                        className="w-full border-2 border-green-500 focus:border-yellow-500 transition-colors duration-300"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">Email</label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        className="w-full border-2 border-green-500 focus:border-yellow-500 transition-colors duration-300"
                        placeholder="Tu email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full p-2 rounded-md border-2 border-green-500 focus:border-yellow-500 transition-colors duration-300 resize-none"
                      placeholder="Tu mensaje"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-500 text-green-900 hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
            <div className="bg-white text-green-800 rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Información Adicional</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-500 p-2 rounded-full">
                    <Calendar className="h-6 w-6 text-green-900" />
                  </div>
                  <span>Check-in: 14:00 - Check-out: 11:00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-500 p-2 rounded-full">
                    <CreditCard className="h-6 w-6 text-green-900" />
                  </div>
                  <span>Aceptamos todas las tarjetas principales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-500 p-2 rounded-full">
                    <HelpCircle className="h-6 w-6 text-green-900" />
                  </div>
                  <span>Servicio de conserjería 24/7</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 lg:h-full lg:flex lg:flex-col lg:justify-between">
            <div className="bg-white text-green-800 rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-500 p-2 rounded-full">
                    <Phone className="h-6 w-6 text-green-900" />
                  </div>
                  <span>+54 3757 123456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-500 p-2 rounded-full">
                    <MapPin className="h-6 w-6 text-green-900" />
                  </div>
                  <span>Iguazú, Misiones, Argentina</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-500 p-2 rounded-full">
                    <Mail className="h-6 w-6 text-green-900" />
                  </div>
                  <span>christianspeziali@hotmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-500 p-2 rounded-full">
                    <Clock className="h-6 w-6 text-green-900" />
                  </div>
                  <span>Lun - Dom: 9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
            <div className="bg-white text-green-800 rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Nuestra Ubicación</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.4409470879892!2d-54.57435111291918!3d-25.612764285015853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f69323ad3bd9a3%3A0x57bc77a63804c6b5!2sIguaz%C3%BA%20Falls%20Duplex%20%26%20Lodge!5e0!3m2!1ses-419!2sar!4v1725277339952!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación de Iguazú Falls Duplex & Lodge"
                ></iframe>
              </div>
              <p className="text-sm">Estamos ubicados a solo 20 minutos de las majestuosas Cataratas del Iguazú, en un entorno natural privilegiado.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}