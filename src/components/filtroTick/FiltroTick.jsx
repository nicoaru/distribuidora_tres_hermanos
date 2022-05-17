import React from 'react'
import './filtroTick.css'

const FiltroTick = ({ titulo, fn, datos }) => {
    return (
        <div className='mt-5'>
            <p className='titulo-filtro mb-1'>
                {titulo}
            </p>
            {datos.map((element, idx) => {
                return (
                    <label key={idx} className='opciones-filtro' >
                        <input onClick={(e) => fn(e)} className="ms-1 me-2" name='filter' value={element} type="radio" />
                        {element}
                    </label>
                )
            })}
        </div>
    )
}

export default FiltroTick