import React from 'react'
import IconoContacto from '../contactoIcono/IconoContacto'
import './contactoSideStyle.css'
const ContactoSide = () => {

    const reloj = "fa-regular fa-clock";
    const tel = "fa-solid fa-phone";
    const dir = "fa-solid fa-location-dot";
    const mail = "fa-regular fa-envelope";

    return (
        <div className='main-contacto-side'>
            <h3 className='mt-3 my-4'>C<span>ontactano</span>s</h3>
            <div className='auxDivContactos'>
                <IconoContacto datoPrincipal="TELEFONO" datoSecundario="+549*******" icono={tel} />
                <IconoContacto datoPrincipal="MAIL" datoSecundario="Los.3.hermanosBV@gmail.com" icono={mail} />
                <IconoContacto datoPrincipal="HORARIO" datoSecundario="Atendemos de 8 a 18 hs" icono={reloj} />
                <IconoContacto datoPrincipal="UBICACION" datoSecundario="Bell Ville, Córdoba, Argentina" icono={dir} />
            </div>
        </div>
    )
}

export default ContactoSide