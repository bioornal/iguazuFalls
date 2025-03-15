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
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067069/Natalia/ambay/9_bubpil.jpg"
            },

            {
                id: 2,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067075/Natalia/ambay/16_ac3vqp.jpg"
            },
            {
                id: 3,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067074/Natalia/ambay/15_whwxde.jpg"
            },
            {
                id: 4,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067073/Natalia/ambay/14_iwawiu.jpg"
            },
            {
                id: 5,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067072/Natalia/ambay/12_cxultq.jpg"
            },
            {
                id: 6,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067071/Natalia/ambay/11_o0ndme.jpg"
            },
            {
                id: 7,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067070/Natalia/ambay/10_pfb0hr.jpg"
            },
            {
                id: 8,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067068/Natalia/ambay/7_nw1hp5.jpg"
            },
            {
                id: 9,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067069/Natalia/ambay/8_nzdgw5.jpg"
            },
            {
                id: 10,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067067/Natalia/ambay/6_aai5ta.jpg"
            },
            {
                id: 11,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067066/Natalia/ambay/5_lhlcin.jpg"
            },
            {
                id: 12,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067066/Natalia/ambay/4_immxil.jpg"
            },
            {
                id: 13,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067065/Natalia/ambay/3_utvuxv.jpg"
            },
            {
                id: 14,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067064/Natalia/ambay/1_w5q0ls.jpg"
            },
            {
                id: 15,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067063/Natalia/ambay/18_ef0ffa.jpg"
            },
            {
                id: 16,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067062/Natalia/ambay/17_crc51a.jpg"
            },
            {
                id: 17,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742067064/Natalia/ambay/2_n1imhg.jpg"
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
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066615/Natalia/guatambu/2_nzheuw.jpg"
            },
            {
                id: 2,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066614/Natalia/guatambu/1_lzqusc.jpg"
            },
            {
                id: 3,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066614/Natalia/guatambu/4_od7biw.jpg"
            },
            {
                id: 4,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066613/Natalia/guatambu/3_xmsmlo.jpg"
            },
            {
                id: 5,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066613/Natalia/guatambu/6_fumcvw.jpg"
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
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066847/Natalia/lapacho/IMG-20240904-WA0022_ggsbrp.jpg"
            },
            {
                id: 2,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066849/Natalia/lapacho/IMG-20240904-WA0027_b9ngun.jpg"
            },
            {
                id: 3,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066849/Natalia/lapacho/IMG-20240904-WA0026_y4oy3y.jpg"
            },
            {
                id: 4,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066848/Natalia/lapacho/IMG-20240904-WA0025_n8tv8r.jpg"
            },
            {
                id: 5,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066847/Natalia/lapacho/IMG-20240904-WA0024_spiqoq.jpg"
            },
            {
                id: 6,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066846/Natalia/lapacho/IMG-20240904-WA0034_gr0zhl.jpg"
            },
            {
                id: 7,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066845/Natalia/lapacho/IMG-20240904-WA0033_iiwkhi.jpg"
            },
            {
                id: 8,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066845/Natalia/lapacho/IMG-20240904-WA0032_bdyobg.jpg"
            },
            {
                id: 9,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066843/Natalia/lapacho/IMG-20240904-WA0029_m8n3w6.jpg"
            },
            {
                id: 10,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066844/Natalia/lapacho/IMG-20240904-WA0030_ec9u1f.jpg"
            },
            {
                id: 11,
                url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1742066844/Natalia/lapacho/IMG-20240904-WA0031_amypq0.jpg"
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
            { id: 2, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606847/Natalia/guembe/nueva_rcwlc0.jpg" },
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
            { id: 1, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606290/Natalia/cedro/1_pi8rjs.jpg" },
            { id: 2, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606291/Natalia/cedro/2_zqozmj.jpg" },
            { id: 3, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606291/Natalia/cedro/3_yckufu.jpg" },
            { id: 4, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606291/Natalia/cedro/4_nmns41.jpg" },
            { id: 5, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606291/Natalia/cedro/5_wyeyn6.jpg" },
            { id: 6, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606291/Natalia/cedro/6_pzao4o.jpg" },
            { id: 7, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606290/Natalia/cedro/7_vj11fc.jpg" },
            { id: 8, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606290/Natalia/cedro/8_heblsh.jpg" },
            { id: 9, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606290/Natalia/cedro/9_iexcra.jpg" },
            { id: 10, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606290/Natalia/cedro/10_tawvve.jpg" },
            { id: 11, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606291/Natalia/cedro/11_wpiczh.jpg" },
            { id: 12, url: "https://res.cloudinary.com/djtvjkcu6/image/upload/v1740606290/Natalia/cedro/12_wmesn0.jpg" },
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
