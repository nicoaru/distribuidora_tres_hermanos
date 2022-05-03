import React from 'react'
import './iconosStyle.css'

const IconoInfo = ({ textoPrincipal, textoSecundario, imagen }) => {
    return (
        <div className='iconosMainDiv'>
            <div className='imagenes'>
                <img src={imagen} alt="" />
            </div>
            <div className='textos'>
                <h4>{textoPrincipal}</h4>
                <p>{textoSecundario}</p>
            </div>
        </div>
    )
}

export default IconoInfo