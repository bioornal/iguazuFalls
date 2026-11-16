'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, LocateFixed, MapPin, Minus, Plus } from 'lucide-react';
import { ADDRESS_SHORT, CHECK_IN, CHECK_OUT, SITE_NAME, waLink } from '@/lib/site';
import styles from './Visit.module.css';

const zoomLevels = [1, 1.3, 1.65];
const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=-25.612763%2C-54.5738016';

export default function MapaUbicacion() {
  const [zoomIndex, setZoomIndex] = useState(0);
  const zoom = zoomLevels[zoomIndex];

  function adjustZoom(step) {
    setZoomIndex(level => Math.max(0, Math.min(level + step, zoomLevels.length - 1)));
  }

  return (
    <section id="ubicacion" className={styles.location} aria-labelledby="location-title">
      <div className="wrap section-space">
        <div className={styles.locationHeader}>
          <h2 className="section-title" id="location-title">Cómo llegar</h2>
          <a className="button" href={directionsUrl} target="_blank" rel="noopener noreferrer">
            Trazar ruta en Google Maps <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
        <div className={styles.locationLayout}>
          <div className={styles.locationCopy}>
            <address className={styles.locationAddress}>
              <MapPin aria-hidden="true" size={21} />
              <div><strong>{SITE_NAME}</strong><span>{ADDRESS_SHORT}, Misiones</span></div>
            </address>
            <dl className={styles.arrivalTimes}>
              <div><dt>Check-in</dt><dd><time dateTime={CHECK_IN}>{CHECK_IN}</time></dd></div>
              <div><dt>Check-out</dt><dd><time dateTime={CHECK_OUT}>{CHECK_OUT}</time></dd></div>
            </dl>
            <dl className={styles.arrivalDetails}>
              <div><dt>Garage</dt><dd>Consultá disponibilidad antes de llegar.</dd></div>
            </dl>
            <a className={styles.arrivalHelp} href={waLink('Hola, tengo una consulta sobre mi llegada a Iguazú Falls Duplex & Lodge.')} target="_blank" rel="noopener noreferrer">
              Consultar por la llegada <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
          <figure className={styles.mapFigure}>
            <div className={styles.mapViewport}>
              <Image
                className={styles.map}
                src="/images/mapa-iguazu.svg"
                width={960}
                height={580}
                alt="Mapa de Puerto Iguazú con el alojamiento señalado en Cristo Redentor"
                style={{ transform: `scale(${zoom})` }}
              />
              <div className={styles.mapZoom} role="group" aria-label="Vista del mapa">
                <button type="button" aria-disabled={zoomIndex === zoomLevels.length - 1} aria-label="Acercar mapa" onClick={() => adjustZoom(1)}>
                  <Plus size={20} aria-hidden="true" />
                </button>
                <button type="button" aria-disabled={zoomIndex === 0} aria-label="Alejar mapa" onClick={() => adjustZoom(-1)}>
                  <Minus size={20} aria-hidden="true" />
                </button>
                <button type="button" aria-disabled={zoomIndex === 0} aria-label="Restablecer vista del mapa" onClick={() => setZoomIndex(0)}>
                  <LocateFixed size={19} aria-hidden="true" />
                </button>
              </div>
              <span className="sr-only" role="status">Escala del mapa al {Math.round(zoom * 100)}%</span>
            </div>
            <figcaption className={styles.mapCaption}>
              <span>Puerto Iguazú, Misiones</span>
              <a className={styles.mapCredit} href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© OpenStreetMap</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
