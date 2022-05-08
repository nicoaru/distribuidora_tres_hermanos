import React from "react";
import './cardEquipo.css';




function CardEquipo({ integranteEquipo }) {



    return (
        <div className="cardEquipo d-flex justify-content-center">
            <div className="card justify-content-center d-flex flex-column align-content-center">
                <img src={integranteEquipo.imgUrl} className="card-img-top" alt="imagen integrante equipo" />
                <div className="p-0 card-body d-flex flex-column justify-content-center align-content-center">
                    <h5 className="card-title">{integranteEquipo.nombre}</h5>
                    <p className="card-subTitle">{integranteEquipo.cargo}</p>
                </div>
            </div>
        </div>
    )

}

export { CardEquipo }