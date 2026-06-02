import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <article className="app">
      <h2 className='developer'>Backend developer junior</h2>
      <h1 className="nombre ">Hola, soy Juan David Lopez Hernandez</h1>
      <p>Desarrollador backend con experiencia en Node.js, Java con springboot y Express</p>
      <article className="skills">
        <button className='btn' >
        <p>Contactame</p>
      </button>
      <button className='btn2' >
        <p>Mis proyectos</p>
      </button>
      </article>
    </article>
    </div>
  )
}

export default App
