import React from "react";
import './itemProducto.css'
import productoEjemplo1 from '../../img/ProoductoEjemplo1.png'




function ItemProducto({producto}) {

    return(
        <div className="card">
            <img src={productoEjemplo1} className="card-img-top" alt="Queso Cremoso La Paulina"/>
            <div className="card-body">
                <p className="card-subTitle">La Paulina</p>
                <h5 className="card-title">Queso Cremoso</h5>
                <h6 className="card-price">$750</h6>
                <a href="#" class="btn btn-primary">Ver detalles</a>
            </div>
        </div>

    )


}

export { ItemProducto }