import React, { useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Dialog } from "@/components/ui/Dialog"
import Image from 'next/image'
import CabinModal from './CabinModal';

const defaultImage = "https://via.placeholder.com/400x300?text=No+Image+Available"

const cabins = [
    {
        id: 1,
        name: "Cabaña Tropical 1",
        description: "Una acogedora cabaña para dos personas con vista a la selva.",
        capacity: "2 personas",
        size: "30 m²",
        rating: 4.5,
        amenities: ["Wi-Fi", "Aire acondicionado", "Terraza privada", "Cafetera"],
        images: [
            {
                id: 1,
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/1.jpg"
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
                url: "https://fogon-food-ordering.s3.sa-east-1.amazonaws.com/IguazuFalls/4/9.jpg"
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
        name: "Cabaña Familiar",
        description: "Espaciosa cabaña ideal para familias, con área de juegos para niños.",
        capacity: "4-6 personas",
        size: "60 m²",
        rating: 4.8,
        amenities: ["Wi-Fi", "Cocina completa", "Área de juegos", "TV por cable"]
    },
    {
        id: 3,
        name: "Suite Lujo Selvático",
        description: "Nuestra cabaña más lujosa con jacuzzi privado y vistas panorámicas.",
        capacity: "2 personas",
        size: "45 m²",
        rating: 5.0,
        amenities: ["Wi-Fi", "Jacuzzi privado", "Servicio a la habitación", "Minibar"]
    },
    {
        id: 4,
        name: "Cabaña Río",
        description: "Hermosa cabaña con vistas al río y acceso directo a la orilla.",
        capacity: "3 personas",
        size: "40 m²",
        rating: 4.7,
        amenities: ["Wi-Fi", "Terraza con vista al río", "Kayak incluido", "Parrilla"]
    },
    {
        id: 5,
        name: "Cabaña del Bosque",
        description: "Cabaña rústica inmersa en el corazón del bosque para los amantes de la naturaleza.",
        capacity: "2-4 personas",
        size: "50 m²",
        rating: 4.6,
        amenities: ["Estufa a leña", "Observatorio de aves", "Senderos privados", "Ducha al aire libre"]
    },
    {
        id: 6,
        name: "Suite Luna de Miel",
        description: "Romántica suite perfecta para parejas en su luna de miel o aniversario.",
        capacity: "2 personas",
        size: "55 m²",
        rating: 4.9,
        amenities: ["Cama king size", "Bañera de hidromasaje", "Champagne de bienvenida", "Desayuno en la cama"]
    },
    {
        id: 7,
        name: "Cabaña Aventura",
        description: "Diseñada para los amantes de la aventura, con equipo de trekking incluido.",
        capacity: "4 personas",
        size: "45 m²",
        rating: 4.7,
        amenities: ["Equipo de trekking", "Mapas de senderos", "Terraza panorámica", "Ducha de alta presión"]
    },
    {
        id: 8,
        name: "Eco-Cabaña",
        description: "Cabaña ecológica autosustentable, perfecta para los conscientes del medio ambiente.",
        capacity: "2-3 personas",
        size: "35 m²",
        rating: 4.8,
        amenities: ["Paneles solares", "Recolección de agua de lluvia", "Compostaje", "Productos orgánicos"]
    },
    {
        id: 9,
        name: "Cabaña Gran Familia",
        description: "Amplia cabaña para grupos grandes o familias extendidas.",
        capacity: "8-10 personas",
        size: "100 m²",
        rating: 4.6,
        amenities: ["Múltiples dormitorios", "Gran sala de estar", "Cocina completa", "Área de juegos para niños"]
    },
    {
        id: 10,
        name: "Cabaña Otro Nombre",
        description: "Amplia cabaña para grupos grandes o familias extendidas.",
        capacity: "8-10 personas",
        size: "100 m²",
        rating: 4.6,
        amenities: ["Múltiples dormitorios", "Gran sala de estar", "Cocina completa", "Área de juegos para niños"]
    },
    {
        id: 11,
        name: "Cabaña Otro Nombre 2",
        description: "Amplia cabaña para grupos grandes o familias extendidas.",
        capacity: "8-10 personas",
        size: "100 m²",
        rating: 4.6,
        amenities: ["Múltiples dormitorios", "Gran sala de estar", "Cocina completa", "Área de juegos para niños"]
    }
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
        <section id="cabins" className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">Nuestras Cabañas</h2>
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
                                <h3 className="font-semibold text-lg text-green-800">{cabin.name}</h3>
                                <p className="text-gray-600 text-sm mt-1">{cabin.description}</p>
                                <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                                    <span>{cabin.capacity}</span>
                                    <span>{cabin.size}</span>
                                </div>
                                <Button
                                    className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white"
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