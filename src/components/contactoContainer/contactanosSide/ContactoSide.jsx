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
                <IconoContacto datoPrincipal="MAIL" datoSecundario="dist@gmail.com" icono={mail} />
                <IconoContacto datoPrincipal="HORARIO" datoSecundario="Atendemos entre 8 - 18" icono={reloj} />
                <IconoContacto datoPrincipal="DIRECCION" datoSecundario="Direccion" icono={dir} />
            </div>
        </div>
    )
}

export default ContactoSide