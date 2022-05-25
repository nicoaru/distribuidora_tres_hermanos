import React from 'react'
import './conocenosContainer.css'
import imgConocenos1 from '../../img/tienda/pexels-tiger-lily-4484078.jpg'
import imgConocenosQuesito from '../../img/tienda/pexels-polina-tankilevitch-4187777.jpg'
import imgConocenosCamion from '../../img/tienda/pexels-braeson-holland-8994766.jpg'
import { CarouselMarcas } from '../carouselMarcas/carouselMarcas'
import { CardEquipo } from '../cardEquipo/cardEquipo'
import imgMariaLaura from '../../../src/img/tienda/imgMariaLaura.png'


function ConocenosContainer() {

    // let equipo = [
    //     {
    //         nombre: 'Maria Laura Pastorino',
    //         cargo: 'CEO',
    //         imgUrl: imgMariaLaura
    //     }
    // ]

    return (
        <div className='conocenos container-fluid'>
            <div className='conocenosPrincipal row align-items-center p-0'>
                <div className='conocenosPrincipalImagen d-none d-md-block col-12 col-md-6 mb-3 mb-md-0 p-0 pe-md-4'>
                    <div className='d-flex flex-column col-12 conocenosSecundarioImagenes'>
                        <img src={imgConocenosQuesito} alt='imagen conocenos 2' className="pb-2"/>
                        <img src={imgConocenosCamion} alt='imagen conocenos 3' />
                    </div>
                </div>
                <div className='conocenosPrincipalTexto col-12 col-md-6 px-3 ps-md-4 mt-4 mt-md-0'>
                    <h2 className='mb-0'>Distribuidora Los 3 Hermanos</h2>
                    <h1 className='mt-0 mb-3 mb-md-5'><span>Conoce</span>nos</h1>
                    <p>¡Hola! Somos una empresa familiar pequeña, que opera desde Agosto en la ciudad de Bell Ville, Córdoba, Argentina.</p>
                    <p>Nuestro objetivo es llevar directamente a tu casa o a tu negocio, los mejores quesos y lácteos de diferentes marcas seleccionadas, y junto a esto, nos preocupamos de entregarte un servicio rápido, directo y cercano.</p>
                    <p>Si buscas comprar quesos para venta minorista y mayorista ¡este es el lugar que necesitas! Y no te preocupes de tu ubicación, ya que llegamos a todos los rincones del país.</p>
                </div>     
                <div className='conocenosPrincipalImagen d-md-none col-12 col-md-6 mb-3 mb-md-0 p-0 pe-md-4'>
                    <div className='d-flex flex-column col-12 conocenosSecundarioImagenes'>
                        <img src={imgConocenosQuesito} alt='imagen conocenos 2' className="pb-2"/>
                        <img src={imgConocenosCamion} alt='imagen conocenos 3' />
                    </div>
                </div> 
            </div>

            {/* <div className='conocenosSecundario row align-items-center my-5'>
                <div className='col p-md-0 pe-md-2'>
                    <div className='conocenosSecudarioEquipo mb-2 p-3'>
                        <h1>Nuestro Equipo</h1>
                        <div className='equipo mt-5'> 
                            <CardEquipo integranteEquipo={equipo[0]} />
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
            </div> */}
            <div>
                <CarouselMarcas/>
            </div>
        </div>
    )
}

export { ConocenosContainer }