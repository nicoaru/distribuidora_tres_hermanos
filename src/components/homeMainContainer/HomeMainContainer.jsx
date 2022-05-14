import React, { useState, useEffect } from 'react';
import './homeMainContainer.css'
import CarrouselMain from '../homeFirstCarousel/CarrouselMain';
import { CarouselProductos } from '../carouselProductos/carouselProductos';
import { CarouselMarcas } from '../carouselMarcas/carouselMarcas';
import pdf from '../../img/test.pdf'
import { Navigate } from 'react-router-dom';
import IconoInfo from '../iconoInfo/IconoInfo';
import DescargarPrecios from '../descargaPDF/DescargarPrecios';
import IconosContainer from '../iconoContainer/IconosContainer';
import { ProductConsumer } from '../../context/ProductProvider'
import { ConocenosHome } from '../conocenosHome/conocenosHome';
///
const HomeMainContainer = () => {

    
    const { productosQueryDB, imagenes, getProductsText, getImagenes, imagenes2 } = ProductConsumer();

    useEffect(() => {
        productosQueryDB.length < 1 && getProductsText();
        imagenes.length < 1 && getImagenes();
    }, [])

    return (
        <div className='homeMainContainer'>
            <CarrouselMain />
            <IconosContainer />
            <CarouselProductos carouselTitle={'Favoritos'} productosQuery={productosQueryDB} imagenes2={imagenes2}/>
            <DescargarPrecios />
            <ConocenosHome/>
            <CarouselMarcas />
 

        </div>
    )
}


export default HomeMainContainer