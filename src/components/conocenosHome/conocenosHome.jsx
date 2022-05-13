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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sed arcu varius nisl id etiam egestas. Facilisi vulputate pharetra condimentum mattis pellentesque.</p>
                    <BotonLink texto={'NOSOTROS'} to={'/conocenos'} width={'150px'}/>
                </div>                  
            </div>
        </div>
    )
}

export { ConocenosHome }