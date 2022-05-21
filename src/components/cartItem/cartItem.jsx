import React, { useContext } from 'react'
import {CartItemCount} from '../cartItemCount/cartItemCount'
import { CartContext } from '../../context/cartContext'
import deleteImg from '../../img/iconos/deleteItem.png'
import './cartItem.css'

function CartItem({item, imgUrl, quantity}) {
    const { addItem, removeItem } = useContext(CartContext)
    console.log(item, quantity)


    const onAmountChange = (quantity) => {
        addItem(item, quantity)
    }

    return (
        
        <div className='cartItemContainer'>
            <img className='cartItemImage' src={imgUrl} alt="cartImg"/>
            <div d-flex flex-column>
                <h2 className='itemMarca'>{item.__EMPTY_4}</h2>
                <h2 className='itemTitle'>{item.__EMPTY_5}</h2>
            </div>
            <CartItemCount initial={quantity} unidadVenta={item.__EMPTY_6} onAmountChange={onAmountChange} />
            <h2 className='itemPrice'>${item.__EMPTY_7*quantity}</h2>
            <img className='cartItemDeleteImage' src={deleteImg} onClick={() => removeItem(item.__EMPTY_3)} alt='delete button'/>
        </div>
        
    )


}

export { CartItem }