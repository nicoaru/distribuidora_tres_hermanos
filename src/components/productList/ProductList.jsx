import React, { useEffect } from 'react'
import './productList.css'
import { ProductConsumer } from '../../context/ProductProvider'
import ItemParaPag from '../itemProductoPagina/ItemParaPag';
import img from '../../img/iconos/Ilustraciones_iconos-05.png'

const ProductList = () => {
    const { getData, productosQueryDB, imagenes } = ProductConsumer();

    useEffect(() => {
        getData()
    }, []);
    useEffect(() => {
        console.log(productosQueryDB)
    }, [productosQueryDB]);

    return (
        <>
            {(productosQueryDB.length === 0) && <>
                <div className="spinner-grow" role="status">
                    <img src={img} alt="" />
                </div>
            </>}

            {productosQueryDB[productosQueryDB.length - 1]?.data && <div className='productos-contenedor'>
                {productosQueryDB[productosQueryDB.length - 1].data.map((element, id) => {
                    return <ItemParaPag key={id} producto={element}></ItemParaPag>
                })}
            </div>}
        </>
    )
}

export default ProductList