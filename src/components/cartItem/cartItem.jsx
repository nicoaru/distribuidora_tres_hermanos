import React, { useContext } from 'react'
import {CartItemCount} from '../cartItemCount/cartItemCount'
import { CartContext } from '../../context/cartContext'
import deleteImg from '../../img/iconos/deleteItem.png'
import './cartItem.css'

function CartItem({item, imgUrl, quantity}) {
    const { cart, addItem, removeItem } = useContext(CartContext)
    console.log(item, quantity)


    const onAmountChange = (quantity) => {
        addItem(item, quantity)
    }

    return (
        
        <div className='cartItemContainer'>
            <img className='cartItemImage' src={imgUrl} />
            <h2 className='itemTitle'>{item.__EMPTY_5}</h2>
            <h2 className='itemMarca'>{item.__EMPTY_4}</h2>
            <CartItemCount initial={quantity} onAmountChange={onAmountChange} />
            <h2 className='itemPrice'>${item.__EMPTY_7*quantity}</h2>
            <img src={deleteImg} height='30px' width='30px' onClick={() => removeItem(item.id)} alt='delete button'/>
        </div>
        
    )


}

export { CartItem }