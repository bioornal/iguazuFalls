import React, { useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Phone, MapPin, Mail } from "lucide-react"

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
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contacto y Ubicación</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="w-full lg:w-[48%] space-y-6">
            <h3 className="text-2xl font-semibold">Contáctanos</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Nombre</label>
                <Input 
                  id="name"
                  name="name"
                  className="w-full bg-white text-green-800 border-2 border-green-500 focus:border-yellow-500 transition-colors duration-300"
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
                  className="w-full bg-white text-green-800 border-2 border-green-500 focus:border-yellow-500 transition-colors duration-300"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 rounded-md bg-white text-green-800 border-2 border-green-500 focus:border-yellow-500 transition-colors duration-300 resize-none"
                  placeholder="Tu mensaje"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-yellow-500 text-green-900 hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>
          <div className="w-full lg:w-[48%] space-y-6">
            <h3 className="text-2xl font-semibold">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-yellow-500" />
                <span>+54 3757 123456</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-yellow-500" />
                <span>Iguazú, Misiones, Argentina</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-yellow-500" />
                <span>christianspeziali@hotmail.com</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-4">Nuestra Ubicación</h4>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}