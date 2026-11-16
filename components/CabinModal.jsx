'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Close } from '@radix-ui/react-dialog';
import {
    Bath, Bed, Car, Check, ChevronLeft, ChevronRight, Home, Maximize2,
    Snowflake, Star, Tv, Users, Utensils, Wifi, X,
} from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/Dialog';
import styles from './Stay.module.css';

const amenityIcons = {
    'Wi-Fi': Wifi,
    'Aire acondicionado': Snowflake,
    'Balcón privado': Home,
    'Baño privado': Bath,
    'TV por cable': Tv,
    'Cocina equipada': Utensils,
    'Cocina completa': Utensils,
    'Garage (Consultar disponibilidad)': Car,
};

const parking = 'Garage (Consultar disponibilidad)';

export function cabinPhoto(url, width) {
    return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`);
}

export default function CabinModal({ cabin }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const { images } = cabin;
    const currentImage = images[selectedImage];
    const isPool = cabin.id === 12;
    const amenities = new Set([...cabin.amenities.filter(Boolean), parking]);

    function moveImage(step) {
        setSelectedImage((index) => (index + step + images.length) % images.length);
    }

    return (
        <DialogContent className={`!w-[calc(100%-2rem)] !max-w-5xl !p-0 ${styles.modal}`}>
            <div className={styles.modalHeader}>
                <div>
                    <DialogTitle className={styles.modalTitle}>{cabin.name}</DialogTitle>
                    <DialogDescription className={styles.modalDescription}>{cabin.description}</DialogDescription>
                </div>
                <Close className={styles.iconButton} aria-label="Cerrar detalles">
                    <X aria-hidden="true" size={22} />
                </Close>
            </div>

            <div className={isPool ? styles.poolGallery : styles.modalLayout}>
                <div className={styles.gallery}>
                    <div className={styles.galleryFrame}>
                        <Image
                            src={cabinPhoto(currentImage.url, 1200)}
                            alt={`${cabin.name}, foto ${selectedImage + 1}`}
                            fill
                            sizes="(min-width: 930px) 660px, 90vw"
                        />
                        <span className={styles.galleryCounter} aria-live="polite">
                            {selectedImage + 1} / {images.length}
                        </span>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button type="button" className={`${styles.iconButton} ${styles.zoomButton}`} aria-label="Ampliar foto">
                                    <Maximize2 aria-hidden="true" size={19} />
                                </button>
                            </DialogTrigger>
                            <DialogContent className={`!w-[calc(100%-2rem)] !max-w-6xl !p-0 ${styles.zoomModal}`} aria-describedby={undefined}>
                                <DialogTitle className="sr-only">{cabin.name}, foto ampliada</DialogTitle>
                                <Image
                                    src={cabinPhoto(currentImage.url, 1920)}
                                    alt={`${cabin.name}, foto ${selectedImage + 1} ampliada`}
                                    fill
                                    sizes="100vw"
                                />
                                <Close className={`${styles.iconButton} ${styles.zoomButton}`} aria-label="Cerrar foto ampliada">
                                    <X aria-hidden="true" size={24} />
                                </Close>
                            </DialogContent>
                        </Dialog>
                        <div className={styles.galleryNav}>
                            <button type="button" className={styles.iconButton} onClick={() => moveImage(-1)} aria-label="Foto anterior">
                                <ChevronLeft aria-hidden="true" size={24} />
                            </button>
                            <button type="button" className={styles.iconButton} onClick={() => moveImage(1)} aria-label="Foto siguiente">
                                <ChevronRight aria-hidden="true" size={24} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.thumbnails} aria-label="Fotos de la galería">
                        {images.map((image, index) => (
                            <button
                                key={image.id}
                                type="button"
                                className={styles.thumbnail}
                                onClick={() => setSelectedImage(index)}
                                aria-label={`Mostrar foto ${index + 1}`}
                                aria-pressed={selectedImage === index}
                            >
                                <Image src={cabinPhoto(image.url, 160)} alt="" fill sizes="72px" />
                            </button>
                        ))}
                    </div>
                </div>

                {!isPool && (
                    <div className={styles.modalFacts}>
                        <dl>
                            <div>
                                <dt><Users aria-hidden="true" size={17} /> Capacidad</dt>
                                <dd>{cabin.capacity}</dd>
                            </div>
                            <div>
                                <dt><Maximize2 aria-hidden="true" size={16} /> Superficie</dt>
                                <dd>{cabin.size}</dd>
                            </div>
                            <div>
                                <dt><Star aria-hidden="true" size={17} /> Calificación</dt>
                                <dd>{cabin.rating} de 5</dd>
                            </div>
                        </dl>
                        <h3>Comodidades</h3>
                        <ul>
                            {Array.from(amenities, (amenity) => {
                                const Icon = amenityIcons[amenity] ?? (amenity.startsWith('Dormitorio') ? Bed : Check);
                                return <li key={amenity}><Icon aria-hidden="true" size={16} /> {amenity}</li>;
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </DialogContent>
    );
}
