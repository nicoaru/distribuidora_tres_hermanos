import React from 'react'
import './contacto.css'

function Contacto() {
    return (
        <div classNameName='contacto d-flex flex-column lg-flex-row'>

            <div>
                <h1>Dejanos tu consulta</h1>
                    <form>
                        <div className="form-floating mb-3">
                            <input type="name" className="form-control" id="inputNombre" placeholder="Nombre"/>
                            <label for="floatingInput">Nombre</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="inputEmail" placeholder="email"/>
                            <label for="floatingInput">Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="tel" className="form-control" id="inputTelefono" placeholder="Teléfono"/>
                            <label for="floatingPassword">Teléfono</label>
                        </div>
                        
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Escribe aquí tu mensaje" id="inputTextArea" style={{height: 100}}></textarea>
                            <label for="floatingTextarea2">Escribe aquí tu mensaje</label>
                        </div>
                    </form>
            </div>

            <div>
                <h1>Contactanos</h1>
                
            </div>
        </div>
    )
}

export { Contacto }