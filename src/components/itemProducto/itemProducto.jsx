import React from "react";
import { Link } from "react-router-dom";
import './itemProducto.css'




function ItemProducto({ producto, img2 }) {


    return (
        <div className="itemProducto d-flex justify-content-center">
            <div className="card justify-content-center d-flex flex-column align-content-center">
                <img src={img2} className="card-img-top" alt={`${producto.__EMPTY_5} ${producto.__EMPTY_4}`} />
                <div className="p-0 card-body d-flex flex-column justify-content-center align-content-center">
                    <p className="card-subTitle">{producto.__EMPTY_4}</p>
                    <h5 className="card-title">{producto.__EMPTY_5}</h5>
                    <h6 className="card-price">{`$${producto.__EMPTY_7} / ${producto.__EMPTY_6}`}</h6>
                    <Link className="tarjeta col-8 col-sm-4 mb-0" to={'/detalle-producto'} state={{ from: producto.__EMPTY_3, producto: producto, img2: img2 }}>
                        <a href="" className="card-button">Ver detalles</a>
                    </Link>
                </div>
            </div>
        </div>

    )


}

export { ItemProducto }