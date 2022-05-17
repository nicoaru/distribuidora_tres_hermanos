import React, { useEffect } from 'react'
import './productList.css'
import { ProductConsumer } from '../../context/ProductProvider'
import ItemParaPag from '../itemProductoPagina/ItemParaPag';
import img from '../../img/iconos/Ilustraciones_iconos-05.png'

const ProductList = ({ productos, imagenes2 }) => {




    return (
        <>
            {(productos.length === 0) && <>
                <div className="spinner-grow" role="status">
                    <img src={img} alt="" />
                </div>
            </>}

            {productos.length !== 0 && imagenes2.length !== 0 && <div className='productos-contenedor'>
                {productos.map((element, id) => {
                    if (element.__EMPTY_5 !== 'categoria')
                        return <ItemParaPag key={id} producto={element} img2={imagenes2[element.__EMPTY_3]} ></ItemParaPag>
                })}
            </div>}
        </>
    )
}

export default ProductList