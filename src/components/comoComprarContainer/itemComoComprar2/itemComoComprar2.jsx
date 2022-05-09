import React from "react";
import './itemComoComprar2.css'

function ItemComoComprar2({ itemIconImg, itemTitle, itemText }) {


    return(
    <div className="itemComoComprar2">
        <div className="icono">
            <img src={itemIconImg} alt="icon" />
        </div>
        <div className="texto">
            <h3 className="itemTitle">{itemTitle}</h3>
            <p className="itemText">{itemText}</p>
        </div>
    </div>
    )
}

export { ItemComoComprar2 }