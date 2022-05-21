import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext'
import './cartWidget.css'


function CartWidget() {
    const { totalQuantity } = useContext(CartContext)
    
    return (
        <div className='cartWidgetContainer'>
            <div className='link'>
                <div className='widgetQuantity'>{totalQuantity()}</div>
            </div>
        </div>
    )
}

export { CartWidget }