import '../hojas-de-estilo/Contador.css'
import React from "react"
import PropTypes from 'prop-types'

function Contador({numero}) {
	return (
		<div className='contador'>
			{numero}
		</div>
	)
}


Contador.propTypes = {
	numero: PropTypes.number.isRequired
}

export default Contador