// Fuente única de verdad para los datos del sitio.
// TODO: confirmar dominio definitivo (se puede sobreescribir con NEXT_PUBLIC_SITE_URL).

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://iguazufallslodge.com'

export const SITE_NAME = 'Iguazú Falls Duplex & Lodge'
export const SITE_WORDMARK = 'Iguazú Falls'
export const SITE_TAGLINE = 'Dúplex y lodges con pileta en Puerto Iguazú'

export const WHATSAPP_NUMBER = '5493757570534'
export const WHATSAPP_MESSAGE =
  'Hola, me gustaría consultar disponibilidad en Iguazú Falls Duplex & Lodge.'
export const waLink = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const PHONE_DISPLAY = '+54 3757 57-0534'
export const PHONE_HREF = 'tel:+543757570534'

export const EMAIL = 'iguazufallslodge@gmail.com'
export const EMAIL_HREF = `mailto:${EMAIL}`

export const ADDRESS = 'Cristo Redentor, N3370 Puerto Iguazú, Misiones, Argentina'
export const ADDRESS_SHORT = 'Cristo Redentor · Puerto Iguazú'
export const OPENING_HOURS = 'Lun a Dom · 7:00 a 22:00'
export const CHECK_IN = '14:00'
export const CHECK_OUT = '10:00'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Iguaz%C3%BA+Falls+Duplex+%26+Lodge'
export const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28782.703551765033!2d-54.57840845382993!3d-25.610300735870762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f69323ad3bd9a3%3A0x57bc77a63804c6b5!2sIguaz%C3%BA%20Falls%20Duplex%20%26%20Lodge!5e0!3m2!1ses-419!2sar!4v1725969782161!5m2!1ses-419!2sar'

// Créditos de las dos fotografías de atracciones que se sirven desde el repo.
// El resto de las fotos de atracciones son hotlinks a sitios de terceros (pendiente D2).
export const IMAGE_CREDITS = [
  {
    label: 'Mariordo',
    work: 'Vista aérea de las Cataratas del Iguazú',
    url: 'https://commons.wikimedia.org/wiki/File:Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg',
  },
  {
    label: 'Cmasi',
    work: 'Centro de Ciudad del Este',
    url: 'https://commons.wikimedia.org/wiki/File:Downtown_Ciudad_del_Este_view_134135.jpg',
  },
]

// Completar cuando estén confirmadas. Los null no se renderizan.
export const SOCIAL = {
  instagram: null,
  facebook: null,
  booking: null,
  tripadvisor: null,
}
