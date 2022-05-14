import React from 'react'
import { useLocation } from 'react-router-dom'
import './detalleItemStyle.css'


const DetalleItem = () => {
    const location = useLocation()
    const { from, producto, img2 } = location.state

    return (
        <div>
            <div key={producto.__EMPTY_3} className='main-detail-div'>
                <div className='detail-img'>
                    <img src={img2} alt="producto" />
                </div>
                <div className='text-detail'>
                    <div className='datos-principales-SKU'>
                        <h3>{producto.__EMPTY_4}</h3>
                    </div>
                    <div className='detalles-SKU'>
                        <p>Categoria: {producto.__EMPTY_5}</p>
                        <p> Precio: $ {producto.__EMPTY_7} / {producto.__EMPTY_6}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetalleItem