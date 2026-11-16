import './globals.css'
import '../public/assets/motion/motion.css'
import Script from 'next/script'
import { SITE_URL } from '@/lib/site'

const title = 'Iguazú Falls Duplex & Lodge | Puerto Iguazú'
const description = 'Dúplex, lodges y estudios con pileta al aire libre en Puerto Iguazú, a unos 20 minutos de las Cataratas.'

export const viewport = { themeColor: '#183b2e' }

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  other: { 'page-type': 'place', 'site-kind': 'other', 'page-kind': 'place' },
  openGraph: { title, description, images: ['/images/piscina-hero-parrilla-1600.webp'], locale: 'es_AR', type: 'website' },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/piscina-hero-parrilla-1600.webp'] },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR" data-type="place" className="m-enter m-enter-done" data-radius="sharp" data-buttons="solid" data-motion>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16839244653"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16839244653');
          `}
        </Script>
      </head>
      <body>
        {children}
        <Script src="/assets/moments/moments.js" type="module" strategy="afterInteractive" />
      </body>
    </html>
  )
}
