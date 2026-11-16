'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { waLink } from '@/lib/site';

const menuItems = [
  { name: 'El alojamiento', href: '#about' },
  { name: 'Dúplex y lodges', href: '#cabins' },
  { name: 'Atracciones', href: '#attractions' },
  { name: 'Contacto', href: '#contact' },
  { name: 'Cómo llegar', href: '#ubicacion' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const toggleRef = useRef(null);

  useEffect(() => {
    function syncHeader() {
      setAtTop(window.scrollY < 12);
    }

    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });
    return () => window.removeEventListener('scroll', syncHeader);
  }, []);

  function handleKeyDown(event) {
    if (event.key === 'Escape' && mobileMenuOpen) {
      setMobileMenuOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <header className="site-header nav" data-at-top={atTop && !mobileMenuOpen} onKeyDown={handleKeyDown}>
      <div className="wrap site-header-inner">
        <a className="skip-link" href="#contenido">Ir al contenido</a>
        <a className="site-brand nav__logo" href="#inicio" aria-label="Iguazú Falls Duplex & Lodge, inicio" onClick={() => setMobileMenuOpen(false)}>
          <Image src="/images/logo.png" width={80} height={80} alt="" priority />
          <span className="site-brand-name">Iguazú Falls<small>DUPLEX &amp; LODGE</small></span>
        </a>
        <nav id="site-navigation" className="site-navigation" aria-label="Navegación principal" data-open={mobileMenuOpen}>
          {menuItems.map(({ name, href }) => (
            <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}>{name}</a>
          ))}
        </nav>
        <div className="site-header-actions">
          <a className="site-reserve" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp" onClick={() => setMobileMenuOpen(false)}>
            <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.05 2a9.9 9.9 0 0 0-8.58 14.84L2 22l5.29-1.39A9.94 9.94 0 1 0 12.05 2zm0 18.05a8.18 8.18 0 0 1-4.16-1.14l-.3-.18-3.14.82.84-3.04-.2-.32a8.25 8.25 0 1 1 6.96 3.86zm4.52-6.13c-.25-.12-1.47-.73-1.7-.82-.23-.08-.4-.12-.56.13-.17.24-.64.8-.79.96-.14.17-.29.19-.53.06-.25-.12-1.05-.38-2-1.22-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.38-.43.12-.15.16-.25.24-.41.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.23.89 2.41 1.02 2.57.12.17 1.75 2.67 4.23 3.75.6.25 1.06.4 1.42.51.6.2 1.14.17 1.57.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.17-.47-.29z" />
            </svg>
            <span>WhatsApp</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
