import React, { useState } from 'react'
import Image from 'next/image'
import { DialogContent } from "@/components/ui/Dialog"
import { Button } from "@/components/ui/Button"
import { Wifi, Snowflake, Home, Bath, Bed, Tv, Utensils, MapPin, ChevronLeft, ChevronRight, X, Users, Maximize2, Star } from "lucide-react"

const Badge = ({ children, className }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
    {children}
  </span>
)

const Separator = () => <hr className="my-8 border-t border-gray-200" />

const amenityIcons = {
  'Wi-Fi': Wifi,
  'Aire acondicionado': Snowflake,
  'Balcón privado': Home,
  'Baño privado': Bath,
  'Dormitorio 1: 1 cama doble grande Queen': Bed,
  'Dormitorio 2: 1 cama cucheta': Bed,
  'TV por cable': Tv,
  'Cocina equipada': Utensils,
}

const defaultImage = "https://via.placeholder.com/400x300?text=No+Image+Available"

export default function CabinModal({ cabin, onClose }) {
  const [zoomedImage, setZoomedImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [fullScreenZoom, setFullScreenZoom] = useState(false)

  if (!cabin) {
    console.error("Cabin object is undefined or null")
    return null
  }

  const images = cabin.images && cabin.images.length > 0 
    ? cabin.images 
    : [{ id: 'default', url: defaultImage }]

  const handleImageClick = (index) => {
    setSelectedImage(index)
  }

  const handleZoom = (e) => {
    e.stopPropagation()
    if (zoomedImage) {
      setFullScreenZoom(true)
    } else {
      setZoomedImage(images[selectedImage])
    }
  }

  const handleCloseZoom = () => {
    if (fullScreenZoom) {
      setFullScreenZoom(false)
    } else {
      setZoomedImage(null)
    }
  }

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }

  return (
    <DialogContent className="sm:max-w-[1000px] max-h-[80vh] overflow-y-auto p-0 font-sans">
      <div className="flex flex-col lg:flex-row">
        {/* Columna izquierda: Galería de imágenes */}
        <div className="lg:w-[63%] p-6">
          <div className="aspect-video relative mb-4 group">
            <Image
              src={images[selectedImage].url}
              alt={`${cabin.name} imagen principal`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg cursor-zoom-in"
              onClick={handleZoom}
            />
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="outline" size="icon" onClick={handlePrevImage} className="bg-white/80 hover:bg-white">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleNextImage} className="bg-white/80 hover:bg-white">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Badge className="absolute top-4 left-4 bg-green-500 text-white">
              {selectedImage + 1}/{images.length}
            </Badge>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <div 
                key={image.id} 
                className={`relative aspect-square cursor-pointer ${index === selectedImage ? 'ring-2 ring-green-500' : ''}`}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.url}
                  alt={`${cabin.name} imagen ${image.id}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha: Información de la cabaña */}
        <div className="lg:w-[37%] p-6 bg-green-50 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-800">{cabin.name}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{cabin.description}</p>
            <Separator />
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3 text-green-600" />
                <span className="font-medium">Capacidad:</span>
                &nbsp;<span>{cabin.capacity}</span>
              </div>
              <div className="flex items-center">
                <Maximize2 className="w-5 h-5 mr-3 text-green-600" />
                <span className="font-medium">Tamaño:</span>
                &nbsp;<span>{cabin.size}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-3 text-yellow-500" />
                <span className="font-medium">Calificación:</span>
                &nbsp;<span>{cabin.rating}</span>
              </div>
            </div>
            <Separator />
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Amenidades</h3>
              <ul className="grid grid-cols-1 gap-y-2">
                {cabin.amenities.map((amenity, index) => {
                  const IconComponent = amenityIcons[amenity] || MapPin;
                  return (
                    <li key={index} className="flex items-center">
                      <IconComponent className="mr-3 h-5 w-5 text-green-600" />
                      <span>{amenity}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={onClose} 
            className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300 py-2 rounded-md font-medium mt-auto"
          >
            Cerrar
          </Button>
        </div>
      </div>

      {(zoomedImage || fullScreenZoom) && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseZoom}
        >
          <div
            className={`relative ${fullScreenZoom ? 'w-full h-full' : 'max-w-5xl max-h-[90vh]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={zoomedImage.url}
              alt="Imagen ampliada"
              layout={fullScreenZoom ? 'fill' : 'responsive'}
              width={fullScreenZoom ? undefined : 1600}
              height={fullScreenZoom ? undefined : 900}
              objectFit="contain"
              className="rounded-lg cursor-zoom-in"
              onClick={handleZoom}
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200"
              onClick={handleCloseZoom}
            >
              <X className="h-8 w-8 text-gray-800" />
            </button>
          </div>
        </div>
      )}
    </DialogContent>
  )
}