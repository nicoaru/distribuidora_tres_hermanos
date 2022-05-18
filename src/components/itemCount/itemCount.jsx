import React, { useState } from 'react'
import { Toast, ToastBody } from 'react-bootstrap'
import './itemCount.css'

function ItemCount({ initial, onAdd, unidadVenta, showToast, setShow }) {
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
            <Toast show={showToast}  onClose={() => setShow(false)} delay={3000} autohide>
                <Toast.Body>El producto se ha agregado al carrito!</Toast.Body>
            </Toast>
        </div>
    )

}

export { ItemCount }