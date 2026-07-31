import './index.css'
import './App.css'
import fotoUrl from '/foto.png'
import { useLanguage } from './i18n/LanguageContext'
import { useState } from 'react'
import LanguageSwitch from './components/LanguageSwitch'
import ScrollTop from './components/ScrollTop'

function Hero() {
    const { t } = useLanguage()
    return (
        <section className="hero">
            <div className="circle-lila" />
            <div className="circle-rosa" />
            <div className="hero-content">
                <div className="foto-wrapper">
                    <img src={fotoUrl} alt="Isayana Murillo" className="foto-perfil" />
                </div>
                <div className="hero-text">
                    <h1 className="logo">
                        <span className="isa">isa</span>
                        <span className="dot">.</span>
                        <span className="dev">dev</span>
                    </h1>
                    <p className="slogan">{t.slogan}</p>
                </div>
            </div>
        </section>
    )
}

function PerfilProfesional() {
    const { t } = useLanguage()
    return (
        <section className="card-section" id="perfil">
            <h2 className="section-title">{t.perfil.title}</h2>
            <div className="two-col">
                <div className="burbuja">
                    <h3>{t.perfil.perfilLabel}</h3>
                    <p className="section-text">{t.perfil.perfilText}</p>
                </div>
                <div className="burbuja">
                    <h3>{t.perfil.sobremiLabel}</h3>
                    <p className="section-text">{t.perfil.sobremiText}</p>
                </div>
            </div>
        </section>
    )
}

function Habilidades() {
    const { t } = useLanguage()

    return (
        <section className="card-section" id="habilidades">
            <h2 className="section-title">{t.habilidades.title}</h2>

            <h3 className="skills-subtitle">{t.habilidades.tecnicas}</h3>
            <div className="skills-grid">
                {t.habilidades.hard.map((skill, i) => (
                    <div className="skill-pill" key={i}>{skill}</div>
                ))}
            </div>

            <h3 className="skills-subtitle">{t.habilidades.blandas}</h3>
            <div className="skills-grid">
                {t.habilidades.soft.map((skill, i) => (
                    <div className="skill-pill" key={i}>{skill}</div>
                ))}
            </div>
        </section>
    )
}

function MisionVision() {
    const { t } = useLanguage()
    return (
        <section className="card-section" id="mision-vision">
            <h2 className="section-title">{t.mvv.title}</h2>
            <div className="tres-col">
                <div className="burbuja compact">
                    <h3>{t.mvv.misionLabel}</h3>
                    <p className="section-text">{t.mvv.misionText}</p>
                </div>
                <div className="burbuja compact">
                    <h3>{t.mvv.visionLabel}</h3>
                    <p className="section-text">{t.mvv.visionText}</p>
                </div>
                <div className="burbuja compact">
                    <h3>{t.mvv.valoresLabel}</h3>
                    <ul className="valores-lista">
                        {t.mvv.valores.map((valor) => (
                            <li key={valor.nombre}>
                                <span className="valor-nombre"><span className="valor-icon">✦</span> {valor.nombre}</span>
                                <p className="section-text">{valor.texto}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

function Proyectos() {
    const { t } = useLanguage()
    const [index, setIndex] = useState(0)
    const items = t.proyectos.items
    const p = items[index]

    const anterior = () => setIndex((i) => (i - 1 + items.length) % items.length)
    const siguiente = () => setIndex((i) => (i + 1) % items.length)

    return (
        <section className="card-section" id="proyectos">
            <h2 className="section-title">{t.proyectos.title}</h2>

            <div className="proyecto-carousel">
                <button className="proyecto-arrow" onClick={anterior} aria-label={t.proyectos.anterior}>‹</button>

                <div className="proyecto-card" key={index}>
                    {p.imagen ? (
                        <img src={p.imagen} alt={p.titulo} className="proyecto-imagen" />
                    ) : (
                        <div className="proyecto-imagen-placeholder">[imagen]</div>
                    )}
                    <h3>{p.titulo}</h3>
                    <p className="section-text">{p.descripcion}</p>
                    <div className="proyecto-tags">
                        {p.tecnologias.map((tech) => (
                            <span className="proyecto-tag" key={tech}>{tech}</span>
                        ))}
                    </div>
                    <a href={p.link} target="_blank" rel="noreferrer" className="proyecto-link">
                        {t.proyectos.verEnGithub}
                    </a>
                </div>

                <button className="proyecto-arrow" onClick={siguiente} aria-label={t.proyectos.siguiente}>›</button>
            </div>

            <div className="proyecto-dots">
                {items.map((item, i) => (
                    <button
                        key={item.titulo}
                        className={`proyecto-dot ${i === index ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                        aria-label={item.titulo}
                    />
                ))}
            </div>
        </section>
    )
}

function Contacto() {
    const { t } = useLanguage()
    return (
        <section className="card-section contacto" id="contacto">
            <h2 className="section-title">{t.contacto.title}</h2>
            <div className="contacto-links">
                <a href="https://www.linkedin.com/in/isayana-murillo-57a620154" target="_blank" rel="noreferrer" className="contacto-btn">LinkedIn</a>
                <a href="https://github.com/isayanamc/Portafolio-Profesional" target="_blank" rel="noreferrer" className="contacto-btn">GitHub</a>
            </div>
        </section>
    )
}

function App() {
    return (
        <>
            <LanguageSwitch />
            <Hero />
            <PerfilProfesional />
            <Habilidades />
            <MisionVision />
            <Proyectos />
            <Contacto />
            <ScrollTop />
        </>
    )
}

export default App