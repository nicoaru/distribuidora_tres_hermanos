import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../../img/iconos/cart-icon.png'
import { CartContext } from '../../context/cartContext'
import './cartWidget.css'


function CartWidget() {
    const { cart, totalQuantity } = useContext(CartContext)
    let carritoVacio
    cart.length == 0 ? carritoVacio = true : carritoVacio = false

    // const widgetQuantity = () => {
    //     if(!carritoVacio) {
    //         let quants = cart.map(obj => obj.quantity)
    //         return quants.reduce((acumulado, actual) => acumulado + actual)
    //     }
    // }


    return (
        <div className='cartWidgetContainer'>
            <Link className='link' to='/cart'>
                <div className='widgetQuantity'>{totalQuantity()}</div>
            </Link>
        </div>
    )
}

export { CartWidget }