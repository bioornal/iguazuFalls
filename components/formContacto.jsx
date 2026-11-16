'use client'

import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { EMAIL, EMAIL_HREF, OPENING_HOURS, PHONE_DISPLAY, PHONE_HREF, waLink } from '@/lib/site'
import styles from './Visit.module.css'

const channels = [
  { label: 'WhatsApp', detail: 'Consultá fechas y tarifas', href: waLink(), icon: MessageCircle, external: true },
  { label: 'Teléfono', detail: PHONE_DISPLAY, href: PHONE_HREF, icon: Phone },
  { label: 'Correo electrónico', detail: EMAIL, href: EMAIL_HREF, icon: Mail },
]

export default function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Consulta de ${form.get('name').trim()}`)
    const body = encodeURIComponent(`${form.get('message').trim()}\n\nEmail de contacto: ${form.get('email').trim()}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <div className="wrap section-space">
      <div className={styles.contactGrid}>
        <div>
          <h2 className="section-title">Contacto</h2>
          <p className={styles.intro}>¿Tenés fechas en mente? Contanos cuántas personas viajan y te contamos qué opciones hay.</p>
          <ul className={styles.contactChannels} aria-label="Canales de contacto">
            {channels.map(({ label, detail, href, icon: Icon, external }) => (
              <li key={label}>
                <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
                  <Icon aria-hidden="true" size={21} strokeWidth={1.7} />
                  <span><strong>{label}</strong><small>{detail}</small></span>
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </li>
            ))}
          </ul>
          <dl className={styles.contactMeta}>
            <div><dt>Horario de contacto</dt><dd>{OPENING_HOURS}</dd></div>
            <div><dt>Medios de pago</dt><dd>Aceptamos las principales tarjetas</dd></div>
          </dl>
        </div>
        <form action={EMAIL_HREF} onSubmit={handleSubmit} className={styles.form} aria-describedby="contact-email-note">
          <h3 className={styles.formTitle}>Escribinos por correo</h3>
          <div className={styles.formRow}>
            <label>
              Nombre
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Correo electrónico
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <label>
            Mensaje
            <textarea name="message" rows={4} required />
          </label>
          <div className={styles.formActions}>
            <button type="submit" className="button">
              Preparar correo <ArrowUpRight aria-hidden="true" size={17} />
            </button>
            <p id="contact-email-note" className={styles.note}>Se abre un borrador en tu aplicación de correo.</p>
          </div>
        </form>
      </div>
    </div>
  )
}
