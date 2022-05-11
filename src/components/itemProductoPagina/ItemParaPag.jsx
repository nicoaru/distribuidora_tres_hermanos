import React, { useEffect } from 'react'
import { ProductConsumer } from '../../context/ProductProvider'
import './itemProdPag.css'

const ItemParaPag = ({ producto, img2 }) => {
    //console.log(img2)
    return (
        <div>
            <div className="tarjeta col-8 col-sm-4">
                <img className="card-img-top" src={img2} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{producto.__EMPTY_4}</p>
                    <h5 className="card-text-descripcion">{producto.__EMPTY_5} </h5>
                    <p className="card-text-precio d5">$ {producto.__EMPTY_7} / kg</p>
                </div>
            </div>
        </div>
    )
}
//https://firebasestorage.googleapis.com/v0/b/distribuidora-3-hermanos.appspot.com/o/productos%2F-10-%20Queso%20Fynbo%20-%20Puyehue%20(1).png?alt=media&token=dc028ad7-c54d-4f06-b694-bc1ff256518d

//https://firebasestorage.googleapis.com/v0/b/distribuidora-3-hermanos.appspot.com/o/productos%2F-10-%20Queso%20Fynbo%20-%20Puyehue%20(1).png?alt=media&token=dc028ad7-c54d-4f06-b694-bc1ff256518d

export default ItemParaPag