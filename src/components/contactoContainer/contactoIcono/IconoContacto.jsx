import React, { useState } from 'react'
import './iconoContacto.css'

const IconoContacto = ({ datoPrincipal, datoSecundario, icono }) => {
    console.log(icono)
    //const [iconState, setIconState] = useState(icono)
    return (
        <div className='todoIconos'>

            <div className='iconoIconos'>
                <i className={icono}></i>
            </div>
            <div className='textIconos'>
                <h6>{datoPrincipal}</h6>
                <p>{datoSecundario}</p>
            </div>
        </div>
    )
}

export default IconoContacto