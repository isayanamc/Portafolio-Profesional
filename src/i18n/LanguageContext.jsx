import { createContext, useContext, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('es')

    const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

    const value = {
        lang,
        toggleLang,
        t: translations[lang],
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage debe usarse dentro de LanguageProvider')
    }
    return context
}