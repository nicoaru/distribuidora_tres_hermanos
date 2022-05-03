import React from 'react'
import { createPDF } from './helperPrecios'
import './listaPreciosPDF.css'
import { ProductConsumer } from '../../context/ProductProvider'



const ListaPrecios = () => {

    const { listaProductos, imagenes } = ProductConsumer();

    const handlePDF = () => {

        createPDF(listaProductos, imagenes)
    }

    return (
        <>
            <button onClick={handlePDF} className='btn btn-success m-5'>Descargar PDF</button>
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>

                <tbody>
                    {listaProductos.map((element, idx) => {
                        return (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td><img className="img-thumbnail" src={imagenes[idx]} alt="" /></td>
                                <td>{element.nombre}</td>
                                <td>$ {element.precio}</td>
                                <td>{element.descripcion}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}

export default ListaPrecios