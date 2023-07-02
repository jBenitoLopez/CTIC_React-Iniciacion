import '../hojas-de-estilo/Pantalla.css'
import React from 'react'
import PropTypes from 'prop-types'

const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
)


Pantalla.propTypes = {
  input: PropTypes.string.isRequired
}

export default Pantalla