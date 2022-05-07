import React from 'react'
import './dropDownFiltro.css'

const DropDownBtn = () => {
    return (
        <div>
            <div className="dropdown">
                <button className="btn filtro" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filtro
                    <i className="fa-solid fa-caret-down"></i>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">Precio menor a mayor</button>
                    <button className="dropdown-item" type="button">Precio mayor a menor</button>
                    <button className="dropdown-item" type="button">Alfabetico</button>
                </div>
            </div>
        </div>
    )
}

export default DropDownBtn