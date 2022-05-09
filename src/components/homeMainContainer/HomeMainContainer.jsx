import React, { useState, useEffect } from 'react';
import CarrouselMain from '../homeFirstCarousel/CarrouselMain';
import { CarouselProductos } from '../carouselProductos/carouselProductos';
import { CarouselMarcas } from '../carouselMarcas/carouselMarcas';
import pdf from '../../img/test.pdf'
import { Navigate } from 'react-router-dom';
import IconoInfo from '../iconoInfo/IconoInfo';
import DescargarPrecios from '../descargaPDF/DescargarPrecios';
import IconosContainer from '../iconoContainer/IconosContainer';
import { ProductConsumer } from '../../context/ProductProvider'
import img from '../../img/iconos/Ilustraciones_iconos-05.png'


const HomeMainContainer = () => {

    
    const { productosQueryDB } = ProductConsumer();

    
    
    // useEffect(() => {
    //     let itemsProdTemp = []
    //     if (productosQueryDB.length !== 0) {
    //         let ultimaListaProductos = productosQueryDB[productosQueryDB.length-1]
    //         itemsProdTemp = ultimaListaProductos.data
    //     }
    //     setProductosCarousel(itemsProdTemp)
    //     console.log("itemsProdTemp => ", itemsProdTemp) 
    // }, [productosQueryDB])


    return (
        <div>
            <CarrouselMain />
            <IconosContainer />
            <CarouselProductos productosParaMostrar={productosQueryDB}/>
            <DescargarPrecios />
            <CarouselMarcas />
 

        </div>
    )
}


export default HomeMainContainer