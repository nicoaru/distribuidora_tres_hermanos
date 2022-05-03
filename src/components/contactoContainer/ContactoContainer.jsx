import React from 'react'
import ContactoSide from './contactanosSide/ContactoSide'
import './contactoContainerStyle.css'
import Formulario from './formularioSide/Formulario'
const ContactoContainer = () => {
    return (
        <div className='main-contacto'>

            <div className='contacto-side-div'>
                <ContactoSide />
            </div>
            <div className='formulario-side-div'>
                <Formulario />
                <div>
                    <p>Seguinos en redes!</p>
                    <div>
                        <p>Face</p>
                        <p>Insta</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactoContainer