import ContactForm from '@/components/formContacto';
import MapaUbicacion from '@/components/MapaUbicacion';
import HeroSection from '@/components/HeroSection';
import Cabins from '@/components/Cabins';
import About from '@/components/About';
import Header from '@/components/Header';
import Attractions from '@/components/Atracttions';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <HeroSection />
        <About />
        <Cabins />
        <Attractions />
        <section id="contact">
          <ContactForm />
        </section>
        <MapaUbicacion />
      </main>
      <Footer />
    </>
  );
}
