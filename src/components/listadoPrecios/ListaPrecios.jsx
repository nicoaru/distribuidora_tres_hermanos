import React, { useEffect } from 'react'
import { createPDF } from './helperPrecios'
import './listaPreciosPDF.css'
import { ProductConsumer } from '../../context/ProductProvider'
import imgLoader from '../../img/iconos/Ilustraciones_iconos-05.png'



const ListaPrecios = () => {

    const { productosQueryDB, getProductsText, getImagenes, imagenes, imagenes2 } = ProductConsumer();


    useEffect(() => {
        productosQueryDB.length < 1 && getProductsText();
        imagenes.length < 1 && getImagenes();
    }, [])

    const handlePDF = () => {
        createPDF(productosQueryDB[productosQueryDB.length - 1]?.data, imagenes2)
    }

    return (
        <div className='tabla-precios-full'>
            {!productosQueryDB[productosQueryDB.length - 1]?.data &&
                <div className="spinner-grow" role="status">
                    <img src={imgLoader} alt="" />
                </div>}
            <button onClick={handlePDF} className='btn btn-success m-5'>Descargar PDF</button>
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th className='tabla-descripcion'>Descripcion</th>
                    </tr>
                </thead>

                <tbody>
                    {productosQueryDB[productosQueryDB.length - 1]?.data.map((element, idx) => {
                        if (idx !== 0)
                            return (
                                <tr key={element.__EMPTY_3}>
                                    <td>{element.__EMPTY_3}</td>
                                    <td><img className="img-thumbnail" src={imagenes2[element.__EMPTY_3]} alt="imagen Producto" /></td>
                                    <td>{element.__EMPTY_4}</td>
                                    <td>$ {element.__EMPTY_7} / {element.__EMPTY_6}</td>
                                    <td className='tabla-descripcion'>{element.descripcion}</td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default ListaPrecios