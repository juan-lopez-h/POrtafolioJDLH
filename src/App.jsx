import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="App">
    <article className="app">
      <h2 className='developer'>Backend Developer | Java & Spring Boot</h2>
      <h1 className="nombre ">Hola, soy Juan David Lopez Hernandez</h1>
      <p className="description">
        Construyo APIs REST, sistemas empresariales
        y soluciones enfocadas en resolver necesidades
        reales de negocio.
      </p>
      <div className="tech-stack">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>Node.js</span>
        <span>PostgreSQL</span>
        <span>MongoDB</span>
        <span>Docker</span>
        <span>Git</span>
        <span>Linux</span>
        <span>python</span>
      </div>
      <article className="skills">
        <button className='btn' onClick={() => setModalOpen(true)}>
        <p>Contactame</p>
      </button>
      <button className='btn2' onClick={() => window.open('https://github.com/juan-lopez-h?tab=repositories', '_blank')}>
        <p>Mis proyectos</p>
      </button>
      </article>
      {
        modalOpen && (
      <div className="modal-overlay" onClick={() => setModalOpen(false)}>
  <div className="modal" onClick={e => e.stopPropagation()}>
    <button
      className="modal-close"
      onClick={() => setModalOpen(false)}
    >
      x
    </button>

    <h2>Contáctame</h2>
    <p>Puedes encontrarme en:</p>

    <div className="contact-links">
      <a
        href="mailto:juanlopezcastillooo@gmail.com"
        className="contact-btn"
      >
        📧 Correo
      </a>

      <a
        href="https://github.com/juan-lopez-h"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn"
      >
        🐙 GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/juan-david-lopez-hernandez-2264b1261/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn"
      >
        💼 LinkedIn
      </a>
      <a
        href="https://www.instagram.com/juan.da312/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn"
      >
        Instagram
      </a>
    </div>
  </div>
</div>
)}
    </article>
    </div>
  )
}

export default App
