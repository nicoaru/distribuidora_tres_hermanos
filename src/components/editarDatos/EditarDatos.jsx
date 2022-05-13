import React, { useEffect } from 'react'
import { ProductConsumer } from '../../context/ProductProvider';
import './editarDatos.css'

import Editor from '../componenteEditor/Editor';

const EditarDatos = () => {

    const { productosQueryDB, edicionDeDatos, edicionTexto, getProductsText, getRest } = ProductConsumer()

    useEffect(() => {
        getProductsText();
        getRest();
    }, []);

    return (
        <>
            {productosQueryDB.length === 0 && edicionDeDatos.length === 0 && edicionTexto.length === 0 && <h1>Cargando datos...</h1>}
            {productosQueryDB.length !== 0 && edicionDeDatos.length !== 0 && edicionTexto.length !== 0 &&
                <div className='main-div-edicion'>
                    <Editor titulo='Productos' coleccion='productos' id={productosQueryDB[productosQueryDB.length - 1]?.id} />

                    <Editor titulo='Textos' coleccion='textos' id={edicionTexto[edicionTexto.length - 1]?.id} />

                    <Editor titulo='Datos' coleccion='datos' id={edicionDeDatos[edicionDeDatos.length - 1]?.id} />
                </div>
            }
        </>
    )
}







export default EditarDatos