import React from 'react'
import IconoInfo from '../iconoInfo/IconoInfo'
import './iconosContainerStyle.css'
import sun from '../../img/hdSun.jpeg'

const IconosContainer = () => {
    const msgPrincipal1 = 'ZONA DE DESPACHO'
    const msgSecundario1 = 'Despachamos en todo el Pais'
    const msgPrincipal2 = 'CONTACTO'
    const msgSecundario2 = 'Escribenos por Whatsapp'
    const msgPrincipal3 = 'HORARIO'
    const msgSecundario3 = 'Atencion: 8hs - 18hs'
    return (
        <div className='iconos-conotainer'>
            <IconoInfo imagen={sun} textoSecundario={msgSecundario1} textoPrincipal={msgPrincipal1} />
            <IconoInfo imagen={sun} textoSecundario={msgSecundario2} textoPrincipal={msgPrincipal2} />
            <IconoInfo imagen={sun} textoSecundario={msgSecundario3} textoPrincipal={msgPrincipal3} />
        </div>
    )
}

export default IconosContainer