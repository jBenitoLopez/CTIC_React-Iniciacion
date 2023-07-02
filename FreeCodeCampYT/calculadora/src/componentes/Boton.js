import '../hojas-de-estilo/Boton.css'
import React from 'react'
import PropTypes from 'prop-types'

function Boton(props) {
  return (
    <button
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.clickHandler(props.children)}
    >
      {props.children}
    </button>
  )
}

// Boton.propTypes = {
//   props: PropTypes.object.isRequired
// }

const esOperador = (valor) => {
  return isNaN(valor)
    && (valor !== '.')
    && (valor !== '=')
}

export default Boton