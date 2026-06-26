import './index.css'
import './App.css'
import fotoUrl from '/foto.png'

function Hero() {
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
          <p className="slogan">engineered with purpose.</p>
        </div>
      </div>
    </section>
  )
}

function PerfilProfesional() {
  return (
    <section className="card-section">
      <h2 className="section-title">Perfil Profesional</h2>
      <div className="two-col">
        <div className="burbuja">
          <h3>Perfil</h3>
          <p className="section-text">
            Estudiante de Ingeniería de Software con experiencia previa en operaciones
            empresariales y soporte técnico en entornos corporativos de alta exigencia.
            Esa trayectoria me permitió desarrollar una visión orientada tanto al negocio
            como a la solución técnica. Actualmente enfocada en desarrollo web con React,
            Java y C#, con interés en el ecosistema Salesforce.
          </p>
        </div>
        <div className="burbuja">
          <h3>Sobre Mí</h3>
          <p className="section-text">
            Soy costarricense, con una trayectoria que viene del comercio internacional
            y las operaciones corporativas antes de llegar a la ingeniería de software.
            Esa combinación me dio algo que no se aprende solo en el aula: entender cómo
            funciona un negocio por dentro antes de construir tecnología para él. Me motiva
            construir software que resuelva problemas reales.
          </p>
        </div>
      </div>
    </section>
  )
}

function MisionVision() {
  return (
    <section className="card-section">
      <h2 className="section-title">Misión, Visión y Valores</h2>
      <div className="tres-col">
        <div className="burbuja compact">
          <h3>Misión</h3>
          <p className="section-text">
            Aportar valor a organizaciones mediante soluciones de software que combinen
            visión de negocio y competencia técnica.
          </p>
        </div>
        <div className="burbuja compact">
          <h3>Visión</h3>
          <p className="section-text">
            Ser una profesional especializada en el ecosistema Salesforce, conectando
            tecnología con las necesidades reales de las organizaciones.
          </p>
        </div>
        <div className="burbuja compact">
          <h3>Valores</h3>
          <ul className="valores-lista">
            <li><span className="valor-icon">✦</span> Autenticidad</li>
            <li><span className="valor-icon">✦</span> Colaboración</li>
            <li><span className="valor-icon">✦</span> Autorreflexión</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Contacto() {
  return (
    <section className="card-section contacto">
      <h2 className="section-title">Contacto</h2>
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
      <Hero />
      <PerfilProfesional />
      <MisionVision />
      <Contacto />
    </>
  )
}

export default App