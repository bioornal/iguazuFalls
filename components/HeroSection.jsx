import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { waLink } from '@/lib/site';

export default function HeroSection() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title" data-enter>
      <picture className="hero-photo hero__media" data-visual>
        <source
          type="image/webp"
          srcSet="/images/piscina-hero-parrilla-800.webp 800w, /images/piscina-hero-parrilla-1600.webp 1600w, /images/piscina-hero-parrilla-2400.webp 2400w, /images/piscina-hero-parrilla-4k.webp 4096w"
          sizes="100vw"
        />
        <Image
          src="/images/piscina-hero-parrilla.jpg"
          alt="Piscina al aire libre de Iguazú Falls Duplex & Lodge"
          width={1600}
          height={900}
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      <div className="hero-panel">
        <div className="wrap hero-content">
          <h1 id="hero-title">Después de pasear,<br /> volvé a descansar</h1>
          <div className="hero-intro">
            <p className="t-lead">En nuestro complejo podés refrescarte en la pileta y bajar el ritmo al aire libre.</p>
            <a className="button btn btn--primary" href={waLink()} target="_blank" rel="noopener noreferrer">
              Consultar disponibilidad <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
