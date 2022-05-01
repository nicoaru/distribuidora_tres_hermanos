import React from 'react'
import CarrouselMain from '../../components/homeFirstCarousel/CarrouselMain'
import { CarouselMarcas } from '../../components/carouselMarcas/carouselMarcas'
import { CarouselProductos } from '../../components/carouselProductos/carouselProductos'
import './home.css'

function Home() {
    return (
        <div className='home'>
            <CarrouselMain />
            <CarouselMarcas/>
            <CarouselProductos/>
        </div>
    )
}

export { Home }