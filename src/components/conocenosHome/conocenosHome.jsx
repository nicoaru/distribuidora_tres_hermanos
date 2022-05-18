import React from 'react'
import './conocenosHome.css'
import imgConocenos from '../../img/tienda/imgConocenosStretch.jpg'
import imgCamion from '../../img/tienda/imgCamionStretch.jpg'
import { BotonLink } from '../botonLink/botonLink'


function ConocenosHome() {
    return (
        <div className='conocenosHome container-fluid d-flex justify-content-center'>
            <div className='col-md-11 col-lg-10 d-flex flex-column mt-5 flex-sm-row justify-content-center'>
                <div className='conocenosHomeImagenes'>
                    <img className='imgConocenosHome1' src={imgConocenos}/>
                    <img className='imgConocenosHome2' src={imgCamion}/>

                </div>
                <div className='conocenosHomeTexto d-flex flex-column justify-content-center px-3 ps-md-4 mt-4 mt-md-0'>
                    <h1 className='mt-0 mb-3'><span>Conoce</span>nos</h1>
                    <p>¡Hola! Somos una empresa familiar pequeña, que opera desde Agosto en la ciudad de Bell Ville, Córdoba, Argentina.</p>
                    <p>Nuestro objetivo es llevar directamente a tu casa o a tu negocio, los mejores quesos y lácteos de diferentes marcas seleccionadas, y junto a esto, nos preocupamos de entregarte un servicio rápido, directo y cercano.</p>                    <BotonLink texto={'NOSOTROS'} to={'/conocenos'} width={'150px'}/>
                </div>                  
            </div>
        </div>
    )
}

export { ConocenosHome }