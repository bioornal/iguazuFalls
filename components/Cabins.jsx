import React, { useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Dialog } from "@/components/ui/Dialog"
import Image from 'next/image'
import CabinModal from './CabinModal';

const defaultImage = "https://via.placeholder.com/400x300?text=No+Image+Available"

const cabins = [
    {
        id: 1,
        name: "Lodge Familiar 1",
        description: "Departamento acogedor de dos habitaciones",
        capacity: "2 a 4 personas",
        size: "30 m²",
        rating: 4.5,
        amenities: ["Wi-Fi", "Aire acondicionado", "Balcon privado", "Cocina equipada", "Baño privado", "Dormitorio 1: 1 cama doble grande Queen", , "Dormitorio 2: 1 cama cucheta", "TV por cable"],
        images: [
            {
                id: 1,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/9.jpg"
            },

            {
                id: 2,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/2.jpg"
            },
            {
                id: 3,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/3.jpg"
            },
            {
                id: 4,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/4.jpg"
            },
            {
                id: 5,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/5.jpg"
            },
            {
                id: 6,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/6.jpg"
            },
            {
                id: 7,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/7.jpg"
            },
            {
                id: 8,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/8.jpg"
            },
            {
                id: 9,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/1.jpg"
            },
            {
                id: 10,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/10.jpg"
            },
            {
                id: 11,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/11.jpg"
            },
            {
                id: 12,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/12.jpg"
            },
            {
                id: 13,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/13.jpg"
            },
            {
                id: 14,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/14.jpg"
            },
            {
                id: 15,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/15.jpg"
            },
            {
                id: 16,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/16.jpg"
            },
            {
                id: 17,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/17.jpg"
            },
            {
                id: 18,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/18.jpg"
            },
        ]
    },
    {
        id: 2,
        name: "Lodge Familiar 2",
        description: "Departamento acogedor de dos habitaciones",
        capacity: "2 a 4 personas",
        size: "30 m²",
        rating: 4.5,
        amenities: ["Wi-Fi", "Aire acondicionado", "Balcon privado", "Cocina equipada", "Baño privado", "Dormitorio 1: 1 cama doble grande Queen", , "Dormitorio 2: 1 cama cucheta","TV por cable"],
        images: [
            {
                id: 1,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/9.jpg"
            },

            {
                id: 2,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/2.jpg"
            },
            {
                id: 3,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/3.jpg"
            },
            {
                id: 4,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/4.jpg"
            },
            {
                id: 5,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/5.jpg"
            },
            {
                id: 6,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/6.jpg"
            },
            {
                id: 7,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/7.jpg"
            },
            {
                id: 8,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/8.jpg"
            },
            {
                id: 9,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/1.jpg"
            },
            {
                id: 10,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/10.jpg"
            },
            {
                id: 11,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/11.jpg"
            },
            {
                id: 12,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/12.jpg"
            },
            {
                id: 13,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/13.jpg"
            },
            {
                id: 14,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/14.jpg"
            },
            {
                id: 15,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/15.jpg"
            },
            {
                id: 16,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/16.jpg"
            },
            {
                id: 17,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/17.jpg"
            },
            {
                id: 18,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/18.jpg"
            },
        ]
    },
    {
        id: 3,
        name: "Studio",
        description: "Monoambiente",
        capacity: "1 a 4 personas",
        size: "30 m²",
        rating: 4.8,
        amenities: ["Wi-Fi", "Aire acondicionado", "Cocina completa", "Baño privado", "TV por cable", "Dormitorio 1: 1 cama doble grande Queen", "Dormitorio 1: 1 sofá cama",],
        images: [
            {
                id: 1,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/9/IMG-20240904-WA0022.jpg"
            },
            {
                id: 2,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/9/IMG-20240904-WA0024.jpg"
            },
            {
                id: 3,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/9/IMG-20240904-WA0025.jpg"
            },
            {
                id: 4,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/9/IMG-20240904-WA0026.jpg"
            },
            {
                id: 5,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/9/IMG-20240904-WA0027.jpg"
            },
            {
                id: 6,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/9/IMG-20240904-WA0029.jpg"
            },
            {
                id: 7,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/9/IMG-20240904-WA0030.jpg"
            },
            {
                id: 8,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/9/IMG-20240904-WA0031.jpg"
            },
            {
                id: 9,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/9/IMG-20240904-WA0032.jpg"
            },
            {
                id: 10,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/9/IMG-20240904-WA0033.jpg"
            },
            {
                id: 11,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/9/IMG-20240904-WA0034.jpg"
            }
        ]
    },
    {
        id: 4,
        name: "Lodge",
        description: "Departamento acogedor de una habitación.",
        capacity: "1 a 4 personas",
        size: "30 m²",
        rating: 5.0,
        amenities: ["Wi-Fi", "Aire acondicionado", "Cocina completa", "Baño privado", "TV por cable", "Dormitorio 1: 1 cama doble grande King", "Sala: 1 sofá cama",],
        images: [
            {
                id: 1,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/7/IMG-20240904-WA0037.jpg"
            },
            {
                id: 2,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/7/IMG-20240904-WA0036.jpg"
            },
            {
                id: 3,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/7/IMG-20240904-WA0038.jpg"
            },
            {
                id: 4,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/7/IMG-20240907-WA0001.jpg"
            },
            {
                id: 5,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/7/IMG-20240907-WA0002.jpg"
            },
            {
                id: 6,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/7/IMG-20240907-WA0003.jpg"
            },
            {
                id: 7,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/7/IMG-20240907-WA0004.jpg"
            }
        ]
    },
    {
        id: 5,
        name: "Cabaña Río",
        description: "Hermosa cabaña con vistas al río y acceso directo a la orilla.",
        capacity: "3 personas",
        size: "40 m²",
        rating: 4.7,
        amenities: ["Wi-Fi", "Terraza con vista al río", "Kayak incluido", "Parrilla"]
    },
    {
        id: 6,
        name: "Cabaña del Bosque",
        description: "Cabaña rústica inmersa en el corazón del bosque para los amantes de la naturaleza.",
        capacity: "2-4 personas",
        size: "50 m²",
        rating: 4.6,
        amenities: ["Estufa a leña", "Observatorio de aves", "Senderos privados", "Ducha al aire libre"]
    },
    {
        id: 7,
        name: "Suite Luna de Miel",
        description: "Romántica suite perfecta para parejas en su luna de miel o aniversario.",
        capacity: "2 personas",
        size: "55 m²",
        rating: 4.9,
        amenities: ["Cama king size", "Bañera de hidromasaje", "Champagne de bienvenida", "Desayuno en la cama"]
    },
    {
        id: 8,
        name: "Cabaña Aventura",
        description: "Diseñada para los amantes de la aventura, con equipo de trekking incluido.",
        capacity: "4 personas",
        size: "45 m²",
        rating: 4.7,
        amenities: ["Equipo de trekking", "Mapas de senderos", "Terraza panorámica", "Ducha de alta presión"]
    },
    {
        id: 9,
        name: "Eco-Cabaña",
        description: "Cabaña ecológica autosustentable, perfecta para los conscientes del medio ambiente.",
        capacity: "2-3 personas",
        size: "35 m²",
        rating: 4.8,
        amenities: ["Paneles solares", "Recolección de agua de lluvia", "Compostaje", "Productos orgánicos"]
    },
    {
        id: 10,
        name: "Cabaña Gran Familia",
        description: "Amplia cabaña para grupos grandes o familias extendidas.",
        capacity: "8-10 personas",
        size: "100 m²",
        rating: 4.6,
        amenities: ["Múltiples dormitorios", "Gran sala de estar", "Cocina completa", "Área de juegos para niños"]
    },
    {
        id: 11,
        name: "Cabaña Otro Nombre",
        description: "Amplia cabaña para grupos grandes o familias extendidas.",
        capacity: "8-10 personas",
        size: "100 m²",
        rating: 4.6,
        amenities: ["Múltiples dormitorios", "Gran sala de estar", "Cocina completa", "Área de juegos para niños"]
    },

].map(cabin => ({
    ...cabin,
    images: cabin.images && cabin.images.length > 0
        ? cabin.images
        : [{ id: 'default', url: defaultImage }]
}));


function Cabins() {
    const [openModal, setOpenModal] = useState(null)

    const handleOpenModal = (cabinId) => {
        setOpenModal(cabinId);
    }

    const handleCloseModal = () => {
        setOpenModal(null);
    }

    return (
        <section id="cabins" className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="section-title text-center md:text-left mb-12">
              Duplex & Lodges
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cabins.map((cabin) => (
                <div key={cabin.id} className="rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
                  <div className="relative cursor-pointer" onClick={() => handleOpenModal(cabin.id)}>
                    <Image
                      src={cabin.images[0]?.url || defaultImage}
                      alt={cabin.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-yellow-500 text-green-900 px-2 py-1 text-xs font-semibold rounded-bl-lg">
                      {cabin.rating} ★
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="subsection-title">{cabin.name}</h3>
                    <p className="text-sm mt-1">{cabin.description}</p>
                    <div className="flex justify-between items-center mt-2 text-sm">
                      <span>{cabin.capacity}</span>
                      <span>{cabin.size}</span>
                    </div>
                    <Button
                      className="w-full mt-4 bg-accent hover:bg-accent-dark text-white"
                      onClick={() => handleOpenModal(cabin.id)}
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

            {cabins.map((cabin) => (
                <Dialog key={cabin.id} open={openModal === cabin.id} onOpenChange={handleCloseModal}>
                    <CabinModal cabin={cabin} onClose={handleCloseModal} />
                </Dialog>
            ))}
        </section>
    )
}

export default Cabins