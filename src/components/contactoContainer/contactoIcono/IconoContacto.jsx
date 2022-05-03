import React from 'react'

const IconoContacto = ({ datoPrincipal, datoSecundario, icono }) => {
    return (
        <div>
            <img src={icono} alt="" />
            <div>
                <h6>{datoPrincipal}</h6>
                <p>{datoSecundario}</p>
            </div>
        </div>
    )
}

export default IconoContacto