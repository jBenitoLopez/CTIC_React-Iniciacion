import './App.css'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

import React, { useState } from 'react'

import Contador from './componentes/Contador.js'
import Button from './componentes/Boton.js'

function App() {

  let [contador, setContador] = useState(0)

  const manejarClic = () => {
    setContador(++contador)
  }

  const reiniciarContador = () => {
    setContador(0)
  }

  
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de Free Code Camp'
        />
        <div className='contenedor-principal'>
          <Contador numero={contador} />

          <Button
            texto='Clic'
            clickHandler={manejarClic}
          />
          <Button
            texto='Reset'
            clickHandler={reiniciarContador}
            esBotonDeClick={false}
          />
        </div>
      </div>
    </div>
  )
}

export default App
