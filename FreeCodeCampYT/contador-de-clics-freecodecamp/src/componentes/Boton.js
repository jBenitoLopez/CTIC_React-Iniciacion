import '../hojas-de-estilo/Boton.css'

import React from "react"
import PropTypes from 'prop-types'

function Boton({ texto, clickHandler, esBotonDeClick = true }) {
  return (
    <button
      className={esBotonDeClick ? 'boton-clic' : 'boton-reiniciar'}
      onClick={clickHandler}
    >
      {texto}
    </button>
  )

}

Boton.propTypes = {
  texto: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  esBotonDeClick: PropTypes.bool
}

export default Boton