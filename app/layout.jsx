import './globals.css'
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
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
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  )
}