import React, { useState } from 'react';
import CarrouselMain from '../homeFirstCarousel/CarrouselMain';
import { CarouselProductos } from '../carouselProductos/carouselProductos';
import { CarouselMarcas } from '../carouselMarcas/carouselMarcas';
import pdf from '../../img/test.pdf'
import { Navigate } from 'react-router-dom';
import IconoInfo from '../iconoInfo/IconoInfo';
import DescargarPrecios from '../descargaPDF/DescargarPrecios';
import IconosContainer from '../iconoContainer/IconosContainer';



const HomeMainContainer = () => {

    const mainText = '¿Quieres comprar al por mayor?'
    const textoSecundario = 'Encuentra aqui una gran variedad de quesos para tu negocio'
    return (
        <div>
            <CarrouselMain heightImg='80vh' tituloPrim={mainText} texto={textoSecundario} />
            <IconosContainer />
            <CarouselProductos />
            <DescargarPrecios />
            <CarouselMarcas />

        </div>
    )
}


export default HomeMainContainer