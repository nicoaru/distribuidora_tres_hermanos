import React, { useEffect } from 'react'
import './productList.css'
import { ProductConsumer } from '../../context/ProductProvider'
import ItemParaPag from '../itemProductoPagina/ItemParaPag';
import img from '../../img/iconos/Ilustraciones_iconos-05.png'

const ProductList = () => {
    const { productosQueryDB, imagenes, getProductsText, getImagenes, imagenes2 } = ProductConsumer();

    useEffect(() => {
        productosQueryDB.length < 1 && getProductsText();
        imagenes.length < 1 && getImagenes();
    }, [])

    return (
        <>
            {(productosQueryDB.length === 0) && <>
                <div className="spinner-grow" role="status">
                    <img src={img} alt="" />
                </div>
            </>}

            {productosQueryDB[productosQueryDB.length - 1]?.data && imagenes2.length > 6 && <div className='productos-contenedor'>
                {productosQueryDB[productosQueryDB.length - 1].data.map((element, id) => {
                    return <ItemParaPag key={id} producto={element} img2={imagenes2[element.__EMPTY_3]} ></ItemParaPag>
                })}
            </div>}
        </>
    )
}

export default ProductList