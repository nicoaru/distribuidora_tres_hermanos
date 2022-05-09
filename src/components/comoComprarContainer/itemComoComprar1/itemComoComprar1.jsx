import React from "react";
import './itemComoComprar1.css'

function ItemComoComprar1({ itemIconNumber, itemIconImg, itemTitle, itemSubTitle, itemText }) {


    return(
    <div className="itemComoComprar1">
        <div className="icon">
            <h4 className="iconNumber">{itemIconNumber}</h4>
            <img src={itemIconImg} alt="iconImg"/>
        </div>
        <div className="texto">
            <h3 className="itemTitle">{itemTitle}</h3>
            <h3 className="itemSubTitle">{itemSubTitle}</h3>
            <p className="itemText">{itemText}</p>
        </div>
    </div>
    )
}

export { ItemComoComprar1 }