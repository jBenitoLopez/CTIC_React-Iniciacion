import React from 'react'
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png'

function Logo() {
  return (
    <div className='freecodecamp-logo-contenedor'>
      <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de Free Code Camp'
      />
    </div>
  )
}


export default Logo