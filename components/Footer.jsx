import Image from 'next/image'
import { SITE_NAME } from '@/lib/site'
import styles from './Visit.module.css'

const links = [
  { label: 'Alojamientos', href: '#cabins' },
  { label: 'Atracciones', href: '#attractions' },
  { label: 'Contacto', href: '#contact' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export default function Footer() {
  return (
    <footer className={'closing ' + styles.footer}>
      <div className="wrap">
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <Image src="/images/logo.png" alt="" width={76} height={76} />
            <span>{SITE_NAME}</span>
          </div>
          <nav aria-label="Navegación del pie de página" className={styles.footerNav}>
            {links.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
          </nav>
        </div>
        <div className={styles.legal}>
          <p>© {new Date().getUTCFullYear()} {SITE_NAME}</p>
          <a className={styles.designerLink} href="https://selva-digital.vercel.app/" target="_blank" rel="noopener noreferrer">Selva Digital Diseños</a>
        </div>
      </div>
    </footer>
  )
}
