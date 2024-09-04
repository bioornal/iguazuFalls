import React, { useState } from 'react';
import Image from 'next/image';
import { DialogContent } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { X, Wifi, Coffee, Tv, Users, Maximize2, Star } from "lucide-react";

const defaultImage = "https://via.placeholder.com/400x300?text=No+Image+Available";

const CabinModal = ({ cabin, onClose }) => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!cabin) {
    console.error("Cabin object is undefined or null");
    return null;
  }

  const images = cabin.images && cabin.images.length > 0 
    ? cabin.images 
    : [{ id: 'default', url: defaultImage }];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleZoom = (e) => {
    e.stopPropagation();
    setZoomedImage(images[selectedImage]);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto p-0">
      <div className="flex flex-col md:flex-row">
        {/* Left column: Image gallery */}
        <div className="md:w-2/3 p-4">
          <div className="aspect-video relative mb-4">
            <Image
              src={images[selectedImage].url}
              alt={`${cabin.name} imagen principal`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg cursor-zoom-in"
              onClick={handleZoom}
            />
          </div>
          <div className="grid grid-cols-5 gap-2 max-h-40 overflow-y-auto">
            {images.map((image, index) => (
              <div 
                key={image.id} 
                className={`relative aspect-square cursor-pointer ${index === selectedImage ? 'ring-2 ring-yellow-500' : ''}`}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.url}
                  alt={`${cabin.name} imagen ${image.id}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Cabin information */}
        <div className="md:w-1/3 p-6 bg-green-50">
          <h2 className="text-3xl font-bold mb-4 text-green-800">{cabin.name}</h2>
          <p className="text-gray-600 mb-6">{cabin.description}</p>
          <div className="space-y-4 mb-6">
            <div className="flex items-center">
              <Users className="w-6 h-6 mr-2 text-green-600" />
              <span><strong>Capacidad:</strong> {cabin.capacity}</span>
            </div>
            <div className="flex items-center">
              <Maximize2 className="w-6 h-6 mr-2 text-green-600" />
              <span><strong>Tamaño:</strong> {cabin.size}</span>
            </div>
            <div className="flex items-center">
              <Star className="w-6 h-6 mr-2 text-yellow-500" />
              <span><strong>Calificación:</strong> {cabin.rating}</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Amenidades</h3>
            <ul className="grid grid-cols-2 gap-2">
              {cabin.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center text-sm">
                  {amenity === 'Wi-Fi' && <Wifi className="mr-2 h-4 w-4 text-green-600" />}
                  {amenity === 'Cafetera' && <Coffee className="mr-2 h-4 w-4 text-green-600" />}
                  {amenity === 'TV por cable' && <Tv className="mr-2 h-4 w-4 text-green-600" />}
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          <Button onClick={onClose} className="w-full bg-green-600 hover:bg-green-500 text-white">Cerrar</Button>
        </div>
      </div>

      {zoomedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseZoom}
        >
          <div
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={zoomedImage.url}
              alt="Imagen ampliada"
              width={1200}
              height={800}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
              onClick={handleCloseZoom}
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </div>
      )}
    </DialogContent>
  );
};

export default CabinModal;