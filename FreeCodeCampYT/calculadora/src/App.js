import './App.css'
import React, { useState } from 'react'
import { evaluate } from 'mathjs'


import Pantalla from './componentes/Pantalla.js'
import Boton from './componentes/Boton.js'
import BotonClear from './componentes/BotonClear'
import Logo from './componentes/Logo'

function App() {
  const [input, setInput] = useState('')

  const agregarInput = valor => {
    setInput(input + valor)
  }

  const clearDisplay = valor => {
    setInput(valor)
  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert('Por favor ingrese valores para realizar los cálculos.')
    }
  }

  return (
    <div className='App'>
      <Logo />
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton clickHandler={agregarInput}>1</Boton>
          <Boton clickHandler={agregarInput}>2</Boton>
          <Boton clickHandler={agregarInput}>3</Boton>
          <Boton clickHandler={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton clickHandler={agregarInput}>4</Boton>
          <Boton clickHandler={agregarInput}>5</Boton>
          <Boton clickHandler={agregarInput}>6</Boton>
          <Boton clickHandler={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton clickHandler={agregarInput}>7</Boton>
          <Boton clickHandler={agregarInput}>8</Boton>
          <Boton clickHandler={agregarInput}>9</Boton>
          <Boton clickHandler={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton clickHandler={calcularResultado}>=</Boton>
          <Boton clickHandler={agregarInput}>0</Boton>
          <Boton clickHandler={agregarInput}>.</Boton>
          <Boton clickHandler={agregarInput}>/</Boton>

        </div>
        <div className='fila'>
          <BotonClear clickHandler={clearDisplay}>Clear</BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
