import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../context/ProductProvider'
import {ItemCount} from "../itemCount/itemCount"
import './itemProdPag.css'
import { CartContext } from '../../context/cartContext'

///
const ItemParaPag = ({ producto, img2 }) => {

    // ItemCount
    const {cart, addItem} = useContext(CartContext)
    const onAdd = (quantity) => {
        addItem(producto, quantity, img2)
        setShowToast(true)
    }
    const [showToast, setShowToast] = useState(false);
    return (
        <div>
            <div className='d-flex flex-column align items-center justify-content-center'>
                <Link className="tarjeta col-8 col-sm-4 mb-0" to={'/detalle-producto'} state={{ from: producto.__EMPTY_3, producto: producto, img2: img2 }}>
                    <img className="card-img-top" src={img2} alt="Card image cap" />
                    <div className="card-body p-1">
                        <p className="card-text mb-0">{producto.__EMPTY_4}</p>
                        <h5 className="card-text-descripcion">{producto.__EMPTY_5} </h5>
                        <p className="card-text-precio d5 mb-1">$ {producto.__EMPTY_7} / kg</p>
                    </div>
                </Link>
                <div className="tarjeta col-8 col-sm-4 mt-0">
                    <ItemCount onAdd={onAdd} showToast={showToast} setShow={setShowToast} initial={0.5} unidadVenta={producto.__EMPTY_6}></ItemCount>
                </div>
            </div>
        </div>
    )
}

//https://firebasestorage.googleapis.com/v0/b/distribuidora-3-hermanos.appspot.com/o/productos%2F-10-%20Queso%20Fynbo%20-%20Puyehue%20(1).png?alt=media&token=dc028ad7-c54d-4f06-b694-bc1ff256518d

//https://firebasestorage.googleapis.com/v0/b/distribuidora-3-hermanos.appspot.com/o/productos%2F-10-%20Queso%20Fynbo%20-%20Puyehue%20(1).png?alt=media&token=dc028ad7-c54d-4f06-b694-bc1ff256518d

export default ItemParaPag