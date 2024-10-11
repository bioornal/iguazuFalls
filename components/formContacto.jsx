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
    <div className="w-full bg-green-950 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center md:text-left mb-12 text-white">
          Contacto y ubicación
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulario de contacto */}
          <div className="bg-white text-green-800 rounded-xl shadow-xl p-6">
            <h3 className="subsection-title mb-4">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                className="w-full border-2 border-green-500 focus:border-yellow-500"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                className="w-full border-2 border-green-500 focus:border-yellow-500"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                className="w-full p-2 rounded-md border-2 border-green-500 focus:border-yellow-500 resize-none"
                placeholder="Tu mensaje"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <Button
                type="submit"
                className="w-full bg-yellow-500 text-green-900 hover:bg-yellow-400 flex items-center justify-center"
              >
                <Send className="mr-2 h-4 w-4" />
                Enviar
              </Button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="bg-white text-green-800 rounded-xl shadow-xl p-6">
            <h3 className="subsection-title mb-4">Información de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span>+54 3757 570534</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span>Iguazú, Misiones, Argentina</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span>christianspeziali@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-yellow-500" />
                <span>Lun - Dom: 7:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="bg-white text-green-800 rounded-xl shadow-xl p-6">
            <h3 className="subsection-title mb-4">Información Adicional</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-yellow-500" />
                <span>Check-in: 14:00 - Check-out: 10:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-yellow-500" />
                <span>Aceptamos tarjetas principales</span>
              </div>
              <div className="flex items-center space-x-2">
                <HelpCircle className="h-5 w-5 text-yellow-500" />
                <span>Atención permanente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}