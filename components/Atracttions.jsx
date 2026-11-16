import { ArrowUpRight, Info } from 'lucide-react';
import { IMAGE_CREDITS } from '@/lib/site';
import styles from './Stay.module.css';

const attractions = [
    {
        name: 'Cataratas del Iguazú',
        description: 'Los senderos del Parque Nacional Iguazú recorren la selva y sus 275 saltos de agua.',
        time: '20 min',
        country: 'Argentina',
        url: 'https://iguazuargentina.com/',
        image: '/images/attractions/cataratas-del-iguazu.jpg',
        credit: IMAGE_CREDITS[0],
    },
    {
        name: 'La Aripuca',
        description: 'Una construcción de grandes troncos que invita a conocer la selva misionera y la cultura guaraní.',
        time: '10 min',
        country: 'Argentina',
        url: 'http://www.aripuca.com.ar/',
        image: 'https://res.cloudinary.com/djtvjkcu6/image/upload/f_auto,q_auto,w_900/v1785091581/Natalia/aripuca_r1cuiy.jpg',
    },
    {
        name: 'Güirá Oga',
        description: 'Centro de rescate y rehabilitación de aves y otros animales de la selva misionera.',
        time: '10 min',
        country: 'Argentina',
        url: 'https://guiraoga.com.ar/',
        image: 'https://sentiargentina.com/wp-content/uploads/2015/04/10422545_909438202441119_4220791886648223746_n.jpg',
    },
    {
        name: 'Parque de las Aves',
        description: 'Un recorrido entre aves de la Mata Atlántica, en Foz do Iguaçu.',
        time: '30 min',
        country: 'Brasil',
        url: 'https://parquedasaves.com.br/es/',
        image: 'https://www.nordic-travel.com.ar/es/wp-content/uploads/2020/06/avesgaleria1.jpg',
    },
    {
        name: 'Ciudad del Este',
        description: 'Una ciudad paraguaya sobre el Paraná, conocida por sus comercios y mercados.',
        time: '30 min',
        country: 'Paraguay',
        url: 'https://visitaparaguay.com.py/ciudad/ciudad-del-este',
        image: '/images/attractions/ciudad-del-este.jpg',
        credit: IMAGE_CREDITS[1],
    },
    {
        name: 'Represa de Itaipú',
        description: 'El complejo hidroeléctrico que comparten Paraguay y Brasil sobre el río Paraná.',
        time: '30 min',
        country: 'Paraguay · Brasil',
        url: 'https://turismoitaipu.com.br/es/a-usina-itaipu/',
        image: 'https://radioconcierto.com.py/wp-content/uploads/2020/01/itaipu-turismo.jpg',
    },
    {
        name: 'Cataratas del lado brasileño',
        description: 'El circuito brasileño ofrece una vista panorámica de los saltos y el río Iguazú.',
        time: '30 min',
        country: 'Brasil',
        url: 'https://cataratasdoiguacu.com.br/',
        image: 'https://cdn.getyourguide.com/img/tour/df811a919d7749d2f063eefee9719c17fcd13f942500b7f519e75acae3363517.jpeg/98.jpg',
    },
];

export default function Attractions() {
    return (
        <section id="attractions" className={`section-space ${styles.attractions}`}>
            <div className="wrap">
                <header className={styles.heading}>
                    <h2 className="section-title">Qué visitar en Iguazú</h2>
                    <p>Salidas a la selva y al río, en Argentina, Brasil y Paraguay.</p>
                </header>

                <div className={styles.attractionGrid}>
                    {attractions.map((attraction) => (
                        <article key={attraction.name} className={styles.attraction}>
                            <div className={styles.attractionPhoto}>
                                {/* eslint-disable-next-line @next/next/no-img-element -- these photographs use several existing hosts */}
                                <img
                                    src={attraction.image}
                                    alt={attraction.name}
                                    loading="lazy"
                                    decoding="async"
                                />
                                {attraction.credit && (
                                    <a
                                        className={styles.photoCredit}
                                        href={attraction.credit.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={attraction.credit.work + ', por ' + attraction.credit.label + '. CC BY-SA 4.0. Encuadre adaptado.'}
                                        title={attraction.credit.label + ' · CC BY-SA 4.0 · Encuadre adaptado'}
                                    >
                                        <Info size={19} aria-hidden="true" />
                                    </a>
                                )}
                            </div>
                            <div className={styles.attractionBody}>
                                <p className={styles.travelTime}>{attraction.country} <span aria-hidden="true">·</span> A unos {attraction.time}</p>
                                <h3>{attraction.name}</h3>
                                <p className={styles.attractionCopy}>{attraction.description}</p>
                                <a className={styles.attractionLink} href={attraction.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar el sitio oficial de ${attraction.name}`}>
                                    Visitar el sitio
                                    <ArrowUpRight aria-hidden="true" size={17} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
