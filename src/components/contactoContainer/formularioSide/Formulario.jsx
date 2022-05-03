import React from 'react'
import './formulario.css'

const Formulario = () => {
    return (
        <div className='main-formulario'>
            <h3>Dejanos tu Consulta</h3>
            <p>Completa este formulario y te responderemos a la brevedad</p>
            <form className='form-contacto p-3' action="">
                <input className="form-control mt-3" type="text" placeholder='Nombre' />
                <input className="form-control mt-3" type="email" placeholder='E-mail' />
                <input className="form-control mt-3" type="number" placeholder='Telefono' />
                <textarea type="text" className="form-control mt-3" placeholder="Escriba su mensaje aqui..." rows="2" cols="25"></textarea>
                <button className='btn mt-3'>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario