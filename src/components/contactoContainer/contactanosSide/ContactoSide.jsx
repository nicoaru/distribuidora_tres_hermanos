import React from 'react'
import IconoContacto from '../contactoIcono/IconoContacto'
import './contactoSideStyle.css'
const ContactoSide = () => {



    return (
        <div className='main-contacto-side'>
            <h3>Contactanos</h3>
            <IconoContacto datoPrincipal="TELEFONO" datoSecundario="+549*******" icono="tel" />
            <IconoContacto datoPrincipal="MAIL" datoSecundario="dist@gmail.com" icono="carta" />
            <IconoContacto datoPrincipal="HORARIO" datoSecundario="Atendemos entre 8 - 18" icono="reloj" />
            <IconoContacto datoPrincipal="DIRECCION" datoSecundario="Direccion" icono="gota" />
        </div>
    )
}

export default ContactoSide