import React from 'react'
import './productList.css'
import { ProductConsumer } from '../../context/ProductProvider'
import ItemParaPag from '../itemProductoPagina/ItemParaPag';

const ProductList = () => {
    const { listaProductos, imagenes } = ProductConsumer();
    return (
        <div className='productos-contenedor'>
            {listaProductos.map((element, id) => {
                return <ItemParaPag key={id} producto={element}></ItemParaPag>
            })}
        </div>
    )
}

export default ProductList