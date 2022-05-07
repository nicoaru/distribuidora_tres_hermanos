import React from 'react'
import './itemProdPag.css'

const ItemParaPag = ({ producto }) => {

    return (
        <div>
            <div className="tarjeta col-8 col-sm-4">
                <img className="card-img-top" src={producto.imgUrl} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{producto.nombre}</p>
                    <h5 className="card-text-descripcion">{producto.descripcion} </h5>
                    <p className="card-text-precio d5">$ {producto.precio} / kg</p>
                </div>
            </div>
        </div>
    )
}

export default ItemParaPag