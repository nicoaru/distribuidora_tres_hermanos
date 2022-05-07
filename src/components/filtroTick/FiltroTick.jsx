import React from 'react'
import './filtroTick.css'

const FiltroTick = ({ titulo, datos }) => {
    return (
        <div>
            <p className='titulo-filtro'>
                {titulo}
            </p>
            {datos.map((element, idx) => {
                return (
                    <label key={idx} className='opciones-filtro' >
                        <input className="mx-2" type="checkbox" />
                        {element}
                    </label>
                )
            })}
        </div>
    )
}

export default FiltroTick