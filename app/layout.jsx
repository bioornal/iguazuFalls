import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  )
}