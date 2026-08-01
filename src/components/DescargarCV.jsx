import { useLanguage } from '../i18n/LanguageContext'

function DescargarCV() {
    const { lang, t } = useLanguage()
    const archivo = lang === 'en' ? 'cv-isayana-murillo-en.pdf' : 'cv-isayana-murillo-es.pdf'
    const href = `${import.meta.env.BASE_URL}${archivo}`

    return <a className="cv-btn" href={href} download={archivo}>{t.contacto.descargarCV}</a>
}

export default DescargarCV