import Image from 'next/image';

const features = [
  { image: 'selva', title: 'Selva misionera', description: 'Senderos y espacios naturales para recorrer en los alrededores.' },
  { image: 'descanso', title: 'Pileta al aire libre', description: 'Un lugar para descansar, con pileta habilitada todo el año.' },
  { image: 'alojamiento', title: 'Espacios equipados', description: 'Opciones para parejas, familias y grupos, con Wi-Fi y aire acondicionado.' },
  { image: 'atencion', title: 'Atención local', description: 'Podés pedirnos recomendaciones para tus recorridos.' },
  { image: 'cataratas', title: 'Cerca de las Cataratas', description: 'El Parque Nacional Iguazú está a unos 20 minutos.' },
  { image: 'garage', title: 'Garage', description: 'Consultanos por disponibilidad para tu vehículo.' },
];

export default function About() {
  return (
    <section id="about" className="section-space about" aria-labelledby="about-title">
      <div className="wrap about-layout">
        <div className="about-intro">
          <h2 className="section-title" id="about-title">Tu estadía en Iguazú</h2>
          <p>Nuestros departamentos tienen aire acondicionado y baño privado. Si viajás en pareja, en familia o con amigos, podés elegir el espacio que te resulte más cómodo.</p>
        </div>
        <figure className="about-photo" data-moment="picture-develops">
          <Image src="/images/piscina-lodge.webp" alt="Vista del espacio exterior de Iguazú Falls Duplex & Lodge" fill sizes="(min-width: 1150px) 40vw, 90vw" />
        </figure>
        <ul className="about-features" aria-label="Servicios y entorno" aria-describedby="about-image-note">
          {features.map(({ image, title, description }) => (
            <li className="about-feature" key={image}>
              <div className="about-feature-image">
                <Image src={'/images/estadia/' + image + '.webp'} alt="" fill sizes="(min-width: 1150px) 18vw, (min-width: 640px) 32vw, 90vw" />
              </div>
              <div className="about-feature-copy">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="sr-only" id="about-image-note">Las imágenes de los servicios son ilustrativas.</p>
      </div>
    </section>
  );
}
