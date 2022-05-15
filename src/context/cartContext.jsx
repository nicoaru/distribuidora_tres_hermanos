import React, { createContext, useState} from 'react'

export const CartContext = createContext()
//hay que exportarlo//


function CartProvider ({ children}) {


    // ESTADO  -->  cart
    const [cart, setCart] = useState([])
    
    let carritoVacio
    cart.length == 0 ? carritoVacio = true : carritoVacio = false

    // FUNCIONES COMPLEMENTARIAS  addItem
    const isInCart = (itemId) => {
        return cart.some(obj => obj.item.__EMPTY_3 === itemId)
    }
    const addAlreadyInCart = (itemId, amountToAdd) => {
        let updatedCart = [...cart]
        updatedCart.forEach(obj => (obj.item.__EMPTY_3 === itemId) && (obj.quantity = obj.quantity + amountToAdd))
        setCart(updatedCart)
        console.log('Ahora el carrito tiene', updatedCart)
    }
    const addNewInCart = (itemToAdd) => {
        let updatedCart = [...cart, itemToAdd]
        setCart(updatedCart)
        console.log('Ahora el carrito tiene', updatedCart)  
    }

    // METODOS
    const addItem = (item, quantity, img2) => {
        isInCart(item.__EMPTY_3) ? 
        addAlreadyInCart(item.__EMPTY_3, quantity) :  
        addNewInCart({item: item, imgUrl:img2, quantity: quantity})
        
        console.log('Is in cart?')
        console.log(isInCart(item.__EMPTY_3))
    }
    const removeItem = (itemId) => {
        const updatedCart = cart.filter( obj => obj.item.__EMPTY_3 !== itemId)
        setCart(updatedCart)
    }
    const clear = () => {
        let updatedCart = []
        setCart(updatedCart)
        console.log('Ahora el carrito tiene', updatedCart)
    }
    const totalCharge = () => {
        if(!carritoVacio) {
            let charges = (cart.map(obj => (obj.item.__EMPTY_7 * obj.quantity)))
            return charges.reduce((acumulado, actual) => acumulado + actual)
    }
    }
    const totalQuantity = () => {
        if(!carritoVacio) {
            let quants = cart.map(obj => obj.quantity)
            return quants.reduce((acumulado, actual) => acumulado + actual)
        }
    }

    return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear, totalCharge, totalQuantity}}>
        {children}
    </CartContext.Provider>
    )
}

export { CartProvider }
