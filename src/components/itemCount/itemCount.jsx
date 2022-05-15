import React, { useState } from 'react'
import './itemCount.css'

function ItemCount({ initial, onAdd, unidadVenta }) {
    // console.log(`stock => ${stock}`)
    
    const [itemAmount, setItemAmount] = useState(initial)
    
    const restarItem = () => {
        itemAmount > 1 && setItemAmount(itemAmount-0.5)
    } 
    const sumarItem = () => {
        setItemAmount(itemAmount+0.5)
    }

    return (
        <div className='itemCountContainer'>
            <div className='itemCount'>
                <div className='restarItem' onClick={restarItem}>-</div>
                <div className='amount'>{itemAmount} {unidadVenta}</div>
                <div className='sumarItem' onClick={sumarItem}>+</div>
            </div>
            <button className='itemCount-btn' onClick={() => onAdd(itemAmount)}>Agregar al carrito</button>
        </div>
    )

}

export { ItemCount }