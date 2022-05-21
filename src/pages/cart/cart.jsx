import React, { Fragment, useContext } from 'react'
import { CartItem } from '../../components/cartItem/cartItem'
import { CartContext } from '../../context/cartContext'
import { Boton } from '../../components/boton/boton';
import { BotonLink } from '../../components/botonLink/botonLink'
import './cart.css'

function Cart () {
    const {cart, clear, totalCharge} = useContext(CartContext)
    console.log ('cart => ', cart)
    let carritoVacio
    cart.length === 0 ? carritoVacio = true : carritoVacio =false

    let cartItemsToShow
    !carritoVacio && (cartItemsToShow = cart.map(obj => <><CartItem item={obj.item} imgUrl={obj.imgUrl} quantity={obj.quantity} key={obj.item.id}/> <hr/> </>))
    
    console.log("cart => ", cart)

    function enviarPedido() {
        let cartItemsOrganizados = cart.map(obj => {return {id: obj.item.__EMPTY_3, marca: obj.item.__EMPTY_4, categoria: obj.item.__EMPTY_5, unidadVenta: obj.item.__EMPTY_6, precio: obj.item.__EMPTY_7, imgUrl: obj.imgUrl, quantity: obj.quantity}})
        console.log('cartItemsOrganizados => ', cartItemsOrganizados);
        
        let cartItemsString = cartItemsOrganizados.map(obj => {return `${encodeURIComponent(`- ${obj.quantity} ${obj.unidadVenta} de ${obj.categoria} ${obj.marca} => $${obj.quantity * obj.precio}`)}`})
        console.log("cartItemsString => ", cartItemsString);
        
        let stringUrl = `${encodeURIComponent('Buen dia Distribuidora Tres Hermanos. Te queria hacer el siguiente pedido:')}%0A%0A${cartItemsString.join('%0A')}%0A%0A${encodeURIComponent('*Total:* $')}${totalCharge()}%0A%0A${encodeURIComponent('Muchas gracias!')}`
        console.log('stringParaUrl => ', stringUrl);
        
        let whatsappLink = `https://wa.me/5491148889851?text=${stringUrl}`
        console.log('whatsappLink => ', whatsappLink);
        window.open(whatsappLink);
    }

    return (
            <div className='cartContainer'>
                <h1 className='title'>Carrito</h1>
                <hr/>
                {
                carritoVacio ? 
                <Fragment>
                    <h2 className="textWhenEmpty">No has agregado nada al carrito todavia</h2>
                    <div className='cartButtonsContainer'>
                        <BotonLink texto={'Quiero tentarme con algo!'} to='/productos'></BotonLink>    
                    </div>       
                </Fragment>
                :
                <Fragment>
                    {cartItemsToShow}
                    <h2 className='totalCharge'>Total ${totalCharge()}</h2>
                    <div className='cartButtonsContainer'>
                        <button className='btn' onClick={clear}>Vaciar carrito</button>
                        <Boton classnames={'botoncito'} onClickFunction={enviarPedido} texto={'Enviar pedido por WhatsApp'}/>
                    </div>
              
                </Fragment>
                }
            </div>   
    )
}

export { Cart }