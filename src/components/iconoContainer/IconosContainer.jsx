import React from 'react'
import IconoInfo from '../iconoInfo/IconoInfo'
import './iconosContainerStyle.css'
import clock from '../../img/iconos/Ilustraciones_iconos-10.png'
import phone from '../../img/iconos/Ilustraciones_iconos-11.png'
import truck from '../../img/iconos/Ilustraciones_iconos-12.png'

const IconosContainer = () => {
    const msgPrincipal1 = 'ZONA DE DESPACHO'
    const msgSecundario1 = 'Despachamos en todo el Pais'
    const msgPrincipal2 = 'CONTACTO'
    const msgSecundario2 = 'Escribenos por Whatsapp'
    const msgPrincipal3 = 'HORARIO'
    const msgSecundario3 = 'Atencion: 8hs - 18hs'
    return (
        <div className='iconos-conotainer'>
            <IconoInfo imagen={clock} textoSecundario={msgSecundario1} textoPrincipal={msgPrincipal1} />
            <IconoInfo imagen={phone} textoSecundario={msgSecundario2} textoPrincipal={msgPrincipal2} />
            <IconoInfo imagen={truck} textoSecundario={msgSecundario3} textoPrincipal={msgPrincipal3} />
        </div>
    )
}

export default IconosContainer