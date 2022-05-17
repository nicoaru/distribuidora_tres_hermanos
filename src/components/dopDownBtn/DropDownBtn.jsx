import React from 'react'
import './dropDownFiltro.css'

const DropDownBtn = ({ opciones, fnOrdenar }) => {

    return (
        <div>
            <div className="btn-group">
                <button className="btn filtro" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ordenar por
                    <i className="fa-solid fa-caret-down"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" onClick={(e) => fnOrdenar(e)} type="button">{opciones[0]}</button>
                    <button className="dropdown-item" onClick={(e) => fnOrdenar(e)} type="button">{opciones[1]}</button>
                    <button className="dropdown-item" onClick={(e) => fnOrdenar(e)} type="button">{opciones[2]}</button>
                </div>
            </div>
        </div>
    )
}

export default DropDownBtn