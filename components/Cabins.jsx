import React, { useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Dialog } from "@/components/ui/Dialog"
import Image from 'next/image'
import CabinModal from './CabinModal';
import backgroundImage from '/public/images/grande.svg'

const defaultImage = "/images/no-image.jpg"

const cabins = [
    {
        id: 1,
        name: "Lodge Ambay",
        description: "Departamento acogedor de dos habitaciones",
        capacity: "2 a 4 personas",
        size: "30 m²",
        rating: 4.5,
        amenities: ["Wi-Fi", "Aire acondicionado", "Balcon privado", "Cocina equipada", "Baño privado", "Dormitorio 1: 1 cama doble grande Queen", "Dormitorio 2: 1 cama cucheta", "TV por cable", "Garage (Consultar disponibilidad)"],
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
        name: "Lodge Palo rosa",
        description: "Departamento acogedor de dos habitaciones",
        capacity: "2 a 4 personas",
        size: "30 m²",
        rating: 4.5,
        amenities: ["Wi-Fi", "Aire acondicionado", "Balcon privado", "Cocina equipada", "Baño privado", "Dormitorio 1: 1 cama doble grande Queen", "Dormitorio 2: 1 cama cucheta", "TV por cable", "Garage (Consultar disponibilidad)"],
        images: [
            {
                id: 1,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737469344/Natalia/palo%20rosa/1_mosnkd.jpg"
            },
            {
                id: 2,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737469346/Natalia/palo%20rosa/8_hyuzxd.jpg"
            },
            {
                id: 3,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737469345/Natalia/palo%20rosa/7_b6v9xu.jpg"
            },
            {
                id: 4,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737469345/Natalia/palo%20rosa/5_h0o0pl.jpg"
            },
            {
                id: 5,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737469344/Natalia/palo%20rosa/3_ayxhaw.jpg"
            },
            {
                id: 6,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737469343/Natalia/palo%20rosa/2_p3axsu.jpg"
            },
            {
                id: 7,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737469343/Natalia/palo%20rosa/9_uj0zvd.jpg"
            },

            {
                id: 8,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737469344/Natalia/palo%20rosa/4_iuyiao.jpg"
            },


        ]
    },
    {
        id: 6,
        name: "Lodge Araucaria",
        description: "Departamento moderno de una habitación",
        capacity: "1 a 4 personas",
        size: "25 m²",
        rating: 4.6,
        amenities: ["Wi-Fi", "Aire acondicionado", "Cocina equipada", "Baño privado", "Dormitorio 1: 1 cama doble King", , "Sala comedor: 1 sofá cama", "TV por cable"],
        images: [
            { id: 1, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737470051/Natalia/araucaria/2_soyvu4.jpg" },
            { id: 2, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737470051/Natalia/araucaria/4_zg3ug5.jpg" },
            { id: 3, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737470052/Natalia/araucaria/3_btzs32.jpg" },
            { id: 4, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737470052/Natalia/araucaria/5_ku4roy.jpg" },
            { id: 5, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737470053/Natalia/araucaria/1_fjzf6c.jpg" },
            { id: 6, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737470053/Natalia/araucaria/7_cuzgwb.jpg" },
            { id: 7, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737470054/Natalia/araucaria/6_mcoljj.jpg" },
        ]
    },
    {
        id: 7,
        name: "Lodge Timbó",
        description: "Departamento moderno de una habitación",
        capacity: "1 a 2 personas",
        size: "20 m²",
        rating: 4.6,
        amenities: ["Wi-Fi", "Aire acondicionado", "Cocina equipada", "Baño privado", "Dormitorio 1: 1 cama doble King", "TV por cable"],
        images: [
            { id: 1, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737630800/Natalia/timbo/IMG-20250123-WA0012_b8gtir.jpg" },
            { id: 2, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737630799/Natalia/timbo/IMG-20250123-WA0014_ybhoji.jpg" },
            { id: 3, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737630799/Natalia/timbo/IMG-20250123-WA0011_y8b3cq.jpg" },
            { id: 4, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737630800/Natalia/timbo/IMG-20250123-WA0010_ymknw1.jpg" },
            { id: 5, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737630800/Natalia/timbo/IMG-20250123-WA0013_kgbkej.jpg" },
            { id: 6, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737630800/Natalia/timbo/IMG-20250123-WA0017_sxqbod.jpg" },
            { id: 7, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737630799/Natalia/timbo/Imagen_de_WhatsApp_2025-01-23_a_las_08.10.16_690f0c4b_gf5pkz.jpg" },
            { id: 8, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737630800/Natalia/timbo/IMG-20250123-WA0015_gcr2oi.jpg" },
            { id: 9, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737630800/Natalia/timbo/IMG-20250123-WA0016_oogvrd.jpg" },
        ]
    },
    {
        id: 4,
        name: "Lodge Guatambú ",
        description: "Departamento moderno de una habitación",
        capacity: "1 a 4 personas",
        size: "25 m²",
        rating: 4.6,
        amenities: ["Wi-Fi", "Aire acondicionado", "Cocina equipada", "Baño privado", "Dormitorio 1: 1 cama doble King", , "Sala comedor: 1 sofá cama", "TV por cable"],
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
        id: 3,
        name: "Studio Lapacho",
        description: "Monoambiente",
        capacity: "1 a 4 personas",
        size: "25 m²",
        rating: 4.8,
        amenities: ["Wi-Fi", "Aire acondicionado", "Cocina completa", "Baño privado", "TV por cable", "1 cama doble grande Queen", "1 sofá cama",],
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
        id: 5,
        name: "Studio Guembe",
        description: "Monoambiente",
        capacity: "1 a 4 personas",
        size: "25 m²",
        rating: 4.7,
        amenities: ["Wi-Fi", "Aire acondicionado","Microondas","Frigobar", "Baño privado", "TV por cable", "1 cama doble King", "2 camas individuales",],
        images: [
            { id: 1, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737631330/Natalia/guembe/IMG-20250123-WA0025_quejcq.jpg" },
            { id: 2, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737631330/Natalia/guembe/IMG-20250123-WA0024_kmlsaq.jpg" },
            { id: 3, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737631330/Natalia/guembe/IMG-20250123-WA0023_h71cvi.jpg" },
            { id: 4, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737631330/Natalia/guembe/IMG-20250123-WA0026_oxfloi.jpg" },
            { id: 5, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737631330/Natalia/guembe/IMG-20250123-WA0027_igtdrc.jpg" },
        ]
    },

    {
        id: 8,
        name: "Duplex Laurel",
        description: "Duplex confortable de 2 plantas",
        capacity: "2 a 6 personas",
        size: "50 m²",
        rating: 4.7,
        amenities: ["Wi-Fi", "Aire acondicionado", "Balcon privado", "Cocina equipada", "Baño privado", "Dormitorio 1: 1 cama doble grande Queen", , "Dormitorio 2: 1 cama cucheta y 2 camas individuales con opción a 1 cama matrimonial", "TV por cable"],
        images: [
            { id: 1, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737632671/Natalia/laurel/7_r0umc1.jpg" },
            { id: 2, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737632672/Natalia/laurel/8_uw8mam.jpg" },
            { id: 3, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737632671/Natalia/laurel/6_onkdls.jpg" },
            { id: 4, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737632670/Natalia/laurel/5_yuyivj.jpg" },
            { id: 5, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737632670/Natalia/laurel/3_tf6pc0.jpg" },
            { id: 6, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737632670/Natalia/laurel/4_h44h5s.jpg" },
            { id: 7, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737632669/Natalia/laurel/2_xacaz6.jpg" },
            { id: 8, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737632669/Natalia/laurel/1_daykdx.jpg" },
            { id: 9, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737632675/Natalia/laurel/12_pnjtya.jpg" },
            { id: 10, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737632673/Natalia/laurel/10_rlivqz.jpg" },
            { id: 11, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737632674/Natalia/laurel/11_yvoizu.jpg" },
            { id: 12, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1737632673/Natalia/laurel/9_rptaxz.jpg" },
        ]
    },
    {
        id: 9,
        name: "Duplex Cedro",
        description: "Duplex confortable de 2 plantas",
        capacity: "2 a 6 personas",
        size: "50 m²",
        rating: 4.7,
        amenities: ["Wi-Fi", "Aire acondicionado", "Balcon privado", "Cocina equipada", "Baño privado", "Dormitorio 1: 1 cama doble grande Queen", , "Dormitorio 2: 1 cama cucheta y 2 camas individuales con opción a 1 cama matrimonial", "TV por cable"],
        images: [

        ]
    },
    {
        id: 10,
        name: "Duplex Ombú",
        description: "Duplex confortable de 2 plantas",
        capacity: "2 a 6 personas",
        size: "50 m²",
        rating: 4.7,
        amenities: ["Wi-Fi", "Aire acondicionado", "Balcon privado", "Cocina equipada", "Baño privado", "Dormitorio 1: 1 cama doble grande Queen", , "Dormitorio 2: 1 cama cucheta y 2 camas individuales con opción a 1 cama matrimonial", "TV por cable"],
        images: [

        ]
    },
    {
        id: 11,
        name: "Duplex Pitanga",
        description: "Duplex confortable de 2 plantas",
        capacity: "2 a 6 personas",
        size: "50 m²",
        rating: 4.7,
        amenities: ["Wi-Fi", "Aire acondicionado", "Balcon privado", "Cocina equipada", "Baño privado", "Dormitorio 1: 1 cama doble grande Queen", , "Dormitorio 2: 1 cama cucheta y 2 camas individuales con opción a 1 cama matrimonial", "TV por cable"],
        images: [
        ]
    },
    {
        id: 12,
        name: "Piscina",
        description: "Piscina habilitada todo el año",
        capacity: "",
        size: "",
        rating: 4.7,
        amenities: [""],
        images: [
            { id: 1, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1738079940/Natalia/pileta/1_urdihj.jpg" },
            { id: 2, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1738079939/Natalia/pileta/7_lfdwgo.jpg" },
            { id: 3, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1738079940/Natalia/pileta/8_czj9h6.jpg" },
            { id: 4, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1738079939/Natalia/pileta/4_anb6jt.jpg" },
            { id: 5, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1738079939/Natalia/pileta/5_oaxydy.jpg" },
            { id: 6, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1738079939/Natalia/pileta/3_wgtr3s.jpg" },
            { id: 7, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1738079939/Natalia/pileta/2_fs77ei.jpg" },
            { id: 8, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1738079938/Natalia/pileta/6_i5uh7y.jpg" },
        ]
    },

].map(cabin => ({
    ...cabin,
    amenities: cabin.amenities.includes("Garage (Consultar disponibilidad)") 
        ? cabin.amenities 
        : [...cabin.amenities, "Garage (Consultar disponibilidad)"],
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
        <section
            id="cabins"
            className="w-full py-12 md:py-16 lg:py-20 relative bg-gray-800"
        >
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <h2 className="section-title text-center text-gray-50 bg-green-400 py-2 px-4 rounded-lg md:text-left mb-12">
                    Duplex & Lodges
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {cabins.map((cabin) => (
                        <div key={cabin.id} className="rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl flex flex-col h-full">
                            <div className="relative cursor-pointer" onClick={() => handleOpenModal(cabin.id)}>
                                <Image
                                    src={cabin.images[0]?.url || defaultImage}
                                    alt={cabin.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                {cabin.name !== "Piscina" && (
                                    <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">
                                        {cabin.rating} ★
                                    </div>
                                )}
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="subsection-title">{cabin.name}</h3>
                                <p className="text-sm mt-1 flex-grow">{cabin.description}</p>
                                {cabin.name !== "Piscina" && (
                                    <div className="flex justify-between items-center mt-2 text-sm">
                                        <span>{cabin.capacity}</span>
                                        <span>{cabin.size}</span>
                                    </div>
                                )}
                                <Button
                                    className="w-full mt-4 bg-green-400 hover:bg-green-700 text-white"
                                    onClick={() => handleOpenModal(cabin.id)}
                                >
                                    {cabin.name === "Piscina" ? "Ver Fotos" : "Ver Detalles"}
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
