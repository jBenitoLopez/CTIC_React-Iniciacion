import '../hojas-de-estilo/BotonClear.css'
import React from 'react';
import PropTypes from 'prop-types'

const BotonClear = (props) => {
  return (
    <button 
    className='boton-clear'
    onClick={() => props.clickHandler('')}
    >
      {props.children}
    </button>
  );
}

// BotonClear.propTypes = {
//   props: PropTypes.object.isRequired
// }


export default BotonClear

