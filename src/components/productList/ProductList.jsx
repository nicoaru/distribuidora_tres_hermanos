import React from 'react'
import './productList.css'
import { ProductConsumer } from '../../context/ProductProvider'
import { ItemProducto } from '../itemProducto/itemProducto';

const ProductList = () => {
    const { listaProductos, imagenes } = ProductConsumer();
    return (
        <div>
            {listaProductos.map((element, id) => {
                return <ItemProducto key={id} producto={element}></ItemProducto>
            })}
        </div>
    )
}

export default ProductList