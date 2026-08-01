import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../i18n/LanguageContext'

const SERVICE_ID = 'service_ntr296w'
const TEMPLATE_ID = 'template_3bfvtpr'
const PUBLIC_KEY = 'aHzKHUR-JNS3M8aEO'

function ContactForm() {
    const { t } = useLanguage()
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const validate = () => {
        const newErrors = {}
        if (!form.name.trim()) newErrors.name = t.contacto.form.errorNombre
        if (!form.email.trim()) {
            newErrors.email = t.contacto.form.errorCorreo
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = t.contacto.form.errorCorreoFormato
        }
        if (!form.message.trim()) newErrors.message = t.contacto.form.errorMensaje
        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = validate()
        setErrors(newErrors)
        if (Object.keys(newErrors).length > 0) return

        setStatus('sending')
        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
            .then(() => {
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
            })
            .catch(() => {
                setStatus('error')
            })
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
                <label htmlFor="name">{t.contacto.form.nombre}</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.contacto.form.nombrePlaceholder}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">{t.contacto.form.correo}</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.contacto.form.correoPlaceholder}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="message">{t.contacto.form.mensaje}</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contacto.form.mensajePlaceholder}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? t.contacto.form.enviando : t.contacto.form.enviar}
            </button>

            {status === 'success' && <p className="form-status success">{t.contacto.form.exito}</p>}
            {status === 'error' && <p className="form-status error">{t.contacto.form.error}</p>}
        </form>
    )
}

export default ContactForm