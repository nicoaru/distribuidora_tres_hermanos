import React from 'react'
import './acordionFiltroStyle.css'
const AcordionFiltro = ({ aux, titulo, fn, ...opciones }) => {

    return (
        <div>
            <div className="accordion">
                <div className="accordion-item">
                    <h2
                        className="accordion-header"
                        id="headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target={`#${aux}`}
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            {titulo}
                        </button>
                    </h2>
                    <div
                        id={aux}
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {opciones.opciones.map((element, id) => {
                                return <p onClick={(e) => fn(e)} key={id}>{element}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AcordionFiltro