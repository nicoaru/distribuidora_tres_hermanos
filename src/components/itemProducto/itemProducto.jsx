import React from "react";
import './itemProducto.css'




function ItemProducto({ producto }) {
    // let producto = {
    //     nombre: 'Muzzarella',
    //     marca: 'Puyehue',
    //     precio: 710,
    //     cantidadVenta: 'el kg',
    //     imgUrl:productoEjemplo1}

    return (
        <div className="item d-flex justify-content-center">
            <div className="card justify-content-center d-flex flex-column align-content-center">
                <img src={producto.imgUrl} className="card-img-top" alt={`${producto.nombre} ${producto.marca}`} />
                <div className="p-0 card-body d-flex flex-column justify-content-center align-content-center">
                    <p className="card-subTitle">{producto.marca}</p>
                    <h5 className="card-title">{producto.nombre}</h5>
                    <h6 className="card-price">{`$${producto.precio} ${producto.cantidadVenta}`}</h6>
                    <a href="" className="card-button">Ver detalles</a>
                </div>
            </div>
        </div>

    )


}

export { ItemProducto }