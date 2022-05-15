import React, { useState } from 'react'
import './cartItemCount.css'



function CartItemCount({ initial, onAmountChange }) {
    const [itemAmount, setItemAmount] = useState(initial)
    const restarItem = () => {
        if (itemAmount > 0.5) {
            let newAmount = itemAmount-0.5
            setItemAmount(newAmount)
            onAmountChange(-0.5)
        }
    } 
    const sumarItem = () => {
            let newAmount = itemAmount+0.5
            setItemAmount(newAmount)
            onAmountChange(0.5)
    }

    return (
        <div className='cartItemCount'>
            <div className='restarItem' onClick={restarItem}>-</div>
            <div className='amount'>{itemAmount}</div>
            <div className='sumarItem' onClick={sumarItem}>+</div>
        </div>
    )
}

export { CartItemCount }