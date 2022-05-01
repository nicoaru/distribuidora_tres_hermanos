import React, { useState } from 'react';
import CarrouselMain from '../homeFirstCarousel/CarrouselMain';
import { CarouselProductos } from '../carouselProductos/carouselProductos';
import { CarouselMarcas } from '../carouselMarcas/carouselMarcas';
import pdf from '../../img/test.pdf'



const HomeMainContainer = () => {
    const [pdfShow, setPdfShow] = useState(false)
    const open = () => {
        window.open('http://localhost:3000/precios/30-4')
    }
    return (
        <div>
            <CarrouselMain />
            <CarouselProductos/>
            <CarouselMarcas/>
            
            <button onClick={() => { setPdfShow(true) }} className='btn btn-success m-5'>View PDF</button>
            {pdfShow && <embed src={pdf}
                type="application/pdf"
                height="1000"
                width="800" />}
            <button onClick={open} className='btn btn-success m-5'>Test</button>

        </div>
    )
}

export default HomeMainContainer