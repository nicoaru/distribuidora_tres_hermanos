import React from "react"
import { NavLink } from "react-router-dom"
import './portadaProductos.css'




function PortadaProductos () {
    return (
        <div className='portadaProductos-container d-flex justify-content-center'>
            <div className='portadaProductosCard-container'>
                <div className='portadaProductosCard-outerborder'>
                    <div className='portadaProductosCard'>
                        <h3 className='text-light'>Tienda</h3>
                        <p>Recuerda que para comprar debes enviar tu pedido por mensaje a nuestro Whatsapp</p>
                        <NavLink className='btn portadaProductosCard-boton' to='/como_comprar'>COMO COMPRAR
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {PortadaProductos}
