import React, { useState, useEffect } from 'react'
import * as xlsx from 'https://unpkg.com/xlsx/xlsx.mjs';
import { ProductConsumer } from '../../context/ProductProvider';
import './editarDatos.css'
import { db } from "../../components/firebase/firebase";
import { storage } from "../../components/firebase/firebase";
import { collection, doc, getDocs, getDoc, addDoc, deleteDoc, orderBy, query } from "firebase/firestore";
import { getMetadata } from 'firebase/storage';

const EditarDatos = () => {

    const [data, setData] = useState([])
    const [archivoOk, setArchivoOk] = useState(true)
    const { productosQueryDB, getData } = ProductConsumer()
    const [edicionProdcutos, setEdicionProductos] = useState('')
    const [eliminarEdicion, setEliminarEdicion] = useState('')
    const [edicionTextos, setEdicionTextos] = useState('')
    const [edicionDatos, setEdicionDatos] = useState('')
    //console.log(productosQueryDB)

    const readUploadFile = (e) => {
        e.preventDefault();

        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json);
                setData(json)
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    async function addItem() {
        const col = collection(db, 'productos')
        try {
            const arrays = await addDoc(col, { data: data, date: new Date() })
            arrays && setEdicionProductos(`Actualizado correctamente lista de ${new Date}`)
            setEliminarEdicion('')
        } catch (error) {
            console.log(error)
            setEdicionProductos('Error en la actualizacion')
        }
    }

    async function deleteItem() {
        //console.log(productosQueryDB[0].id)
        let arrays = "";
        try {
            console.log(productosQueryDB[productosQueryDB.length - 1].id)
            const dateRef = productosQueryDB[productosQueryDB.length - 1].date
            arrays = await deleteDoc(doc(db, 'productos', productosQueryDB[productosQueryDB.length - 1].id))
            getData()
            setEliminarEdicion(`Eliminado correctamente lista de ${dateRef}`)
        } catch (error) {
            console.log(error)
            arrays && setEliminarEdicion('Error al eliminar ultima lista')
        }
    }
    const handleAdd = () => {
        //testear si este archivo es correcto
        if (archivoOk) {
            //deleteDoc()
            addItem()
        }
    }

    return (
        <div className='main-div-edicion'>
            <div className='edicion-productos'>
                <h5>Edicion de Productos</h5>
                <form className='form-acutalizacion'>
                    <p>Cargar el archivo Excel adecuado: </p>
                    <label htmlFor="upload">
                        <input
                            type="file"
                            name="upload"
                            id="upload"
                            onChange={readUploadFile}
                        />
                    </label>
                </form>

                <button className='btn btn-success' onClick={handleAdd}>Cargar planilla</button>
                {edicionProdcutos && <p>{edicionProdcutos}</p>}
                <button className='btn btn-success' onClick={deleteItem}>Eliminar planilla</button>
                {eliminarEdicion && <p>{eliminarEdicion}</p>}
            </div>
            <div className='edicion-productos'>
                <h5>Edicion de Textos</h5>
                <form className='form-acutalizacion'>
                    <p>Cargar el archivo Excel adecuado: </p>
                    <label htmlFor="upload">
                        <input
                            type="file"
                            name="upload"
                            id="upload"
                            onChange={readUploadFile}
                        />
                    </label>
                </form>

                <button className='btn btn-success' onClick={handleAdd}>Cargar planilla</button>
                {edicionProdcutos && <p>{edicionProdcutos}</p>}
                <button className='btn btn-success' onClick={deleteItem}>Eliminar planilla</button>
                {eliminarEdicion && <p>{eliminarEdicion}</p>}
            </div>
            <div className='edicion-productos'>
                <h5>Edicion de Datos</h5>
                <form className='form-acutalizacion'>
                    <p>Cargar el archivo Excel adecuado: </p>
                    <label htmlFor="upload">
                        <input
                            type="file"
                            name="upload"
                            id="upload"
                            onChange={readUploadFile}
                        />
                    </label>
                </form>

                <button className='btn btn-success' onClick={handleAdd}>Cargar planilla</button>
                {edicionProdcutos && <p>{edicionProdcutos}</p>}
                <button className='btn btn-success' onClick={deleteItem}>Eliminar planilla</button>
                {eliminarEdicion && <p>{eliminarEdicion}</p>}
            </div>
        </div>
    )
}







export default EditarDatos