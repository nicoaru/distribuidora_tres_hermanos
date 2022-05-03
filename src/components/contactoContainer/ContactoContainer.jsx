import React from 'react'
import ContactoSide from './contactanosSide/ContactoSide'
import './contactoContainerStyle.css'
import Formulario from './formularioSide/Formulario'
import cheese from '../../img/tienda/pexels-polina-tankilevitch-4187779.jpg'
const ContactoContainer = () => {
    return (
        <div className='main-contacto'>
            <div className='divAux col-12 col-md-4'>
                <img src={cheese} className="img col-12 col-md-4" alt="cheeseImg" />
                <div className='contentAux'>
                    <ContactoSide />
                </div>
            </div>
            <div className='formulario-side-div'>
                <Formulario />
                <div className='redes'>
                    <p>Seguinos en redes!</p>
                    <div className='redesIconos'>
                        <p><i class="fa-brands fa-facebook fa-3x"></i></p>
                        <p><i class="fa-brands fa-instagram fa-3x"></i></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactoContainer