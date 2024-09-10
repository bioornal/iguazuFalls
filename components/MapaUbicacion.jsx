import React from 'react';

export default function MapaUbicacion() {
  return (
    <section className="w-full">
      <div className="aspect-[21/9] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.4409470879892!2d-54.57435111291918!3d-25.612764285015853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f69323ad3bd9a3%3A0x57bc77a63804c6b5!2sIguaz%C3%BA%20Falls%20Duplex%20%26%20Lodge!5e0!3m2!1ses-419!2sar!4v1725277339952!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación de Iguazú Falls Duplex & Lodge"
        ></iframe>
      </div>
    </section>
  );
}