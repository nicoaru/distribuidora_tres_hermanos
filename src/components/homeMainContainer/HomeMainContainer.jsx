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


    return (
        <div>
            {<CarrouselMain />}
            <IconosContainer />
            {<CarouselProductos />}
            <DescargarPrecios />
            {<CarouselMarcas />}

        </div>
    )
}


export default HomeMainContainer