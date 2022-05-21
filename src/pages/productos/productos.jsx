import React, {useEffect} from 'react'
import './productos.css'
import ProductContainer from '../../components/productContainer/ProductContainer'



function Productos() {

    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line

      }, [])

    return (
        <ProductContainer></ProductContainer>
    )
}

export { Productos }