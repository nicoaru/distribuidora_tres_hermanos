import React from 'react'
import CarrouselMain from '../homeFirstCarousel/CarrouselMain'
import ProductList from '../productList/ProductList'
import './productoContainer.css'

const ProductContainer = () => {
    const tituloPrim = 'Tienda'
    const textoSecu = 'Recuerda que para comprar debes enviar tu pedido por mensaje a nuestro Whatsapp'
    return (
        <div className='outer-div'>
            <div className='auxProductoCarrousel'>
                <CarrouselMain heightImg='60vh' tituloPrim={tituloPrim} texto={textoSecu}></CarrouselMain>
            </div>
            <div className='outer-productos'>
                <ProductList></ProductList>
            </div>
        </div>
    )
}
export default ProductContainer