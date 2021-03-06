import React from 'react'
import './descargaPrecios.css'

const DescargarPrecios = () => {
    const handlePrecios = () => {
        window.open('https://distribuidora-3-hermanos.web.app/precios')
    }
    return (
        <div className='main-descarga-div'>
            <div className='text-div'>
                <h3 >┬┐Necesitas comprar quesos al por mayor?</h3>
            </div>
            <button
                onClick={handlePrecios}
                className='btn btn-light'>
                Lista de Precios
            </button>
        </div>
    )
}

export default DescargarPrecios