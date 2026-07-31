import { useLanguage } from '../i18n/LanguageContext.jsx'

function LanguageSwitch() {
    const { lang, toggleLang } = useLanguage()
    const isEn = lang === 'en'

    return (
        <button
            className="lang-switch"
            onClick={toggleLang}
            aria-label="Cambiar idioma / Switch language"
            aria-pressed={isEn}
        >
            <span className={`lang-option ${!isEn ? 'active' : ''}`}>ES</span>
            <span className="lang-track">
        <span className={`lang-thumb ${isEn ? 'to-en' : ''}`} />
      </span>
            <span className={`lang-option ${isEn ? 'active' : ''}`}>EN</span>
        </button>
    )
}

export default LanguageSwitch