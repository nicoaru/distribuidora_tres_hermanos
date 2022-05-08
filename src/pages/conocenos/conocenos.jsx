import React from 'react'
import './conocenos.css'
import imgConocenos1 from '../../img/tienda/pexels-tiger-lily-4484078.jpg'
import imgConocenosQuesito from '../../img/tienda/pexels-polina-tankilevitch-4187777.jpg'
import imgConocenosCamion from '../../img/tienda/pexels-braeson-holland-8994766.jpg'
import { CarouselEquipo } from '../../components/carouselEquipo/carouselEquipo'
import { CarouselMarcas } from '../../components/carouselMarcas/carouselMarcas'


function Conocenos() {
    return (
        <div className='conocenos container-fluid'>
            <div className='conocenosPrincipal row align-items-center p-0'>
                <div className='conocenosPrincipalImagen col-12 col-md-6 mb-3 mb-md-0 p-0 pe-md-4'>
                    <img src={imgConocenos1} alt='imagen conocenos'/>
                </div>
                <div className='conocenosPrincipalTexto col-12 col-md-6 px-3 ps-md-4'>
                    <h2 className='mb-0'>Distribuidora Los 3 Hermanos</h2>
                    <h1 className='mt-0 mb-3'><span>Conoce</span>nos</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sed arcu varius nisl id etiam egestas. Facilisi vulputate pharetra condimentum mattis pellentesque.</p>
                    <p>Odio volutpat auctor ut fermentum quam massa sagittis. Vel consectetur turpis ac ac. Venenatis ac cras pulvinar habitant aliquam volutpat amet. Ornare sit ipsum volutpat ultrices consequat elementum aliquam. Feugiat orci sem ut vulputate tellus.</p>
                </div>      
            </div>

            <div className='conocenosSecundario row align-items-center'>
                <div className='col-12 col-sm-5 col-lg-6 p-md-0 pe-md-2'>
                    <div className='conocenosSecudarioEquipo mb-2 p-3'>
                        <h1>Nuestro Equipo</h1>
                        <div className='carouselEquipo'> 
                            <CarouselEquipo/>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column p-0 col-12 col-sm-7 col-md-6 col-lg-auto conocenosSecundarioImagenes'>
                    <img src={imgConocenosQuesito} alt='imagen conocenos 2' className="pb-2"/>
                    <img src={imgConocenosCamion} alt='imagen conocenos 3' />
                </div>
                <div className='d-none d-md-block col p-0 ps-2'>
                    <div className='conocenosSecundarioRelleno'> </div>
                </div>
            </div>
            <div>
                <CarouselMarcas/>
            </div>
        </div>
    )
}

export { Conocenos }