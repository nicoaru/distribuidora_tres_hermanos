import React, { useState, useEffect } from 'react'
import * as xlsx from 'https://unpkg.com/xlsx/xlsx.mjs';
import { ProductConsumer } from '../../context/ProductProvider';
import './editorStyle.css'
import { db } from "../../components/firebase/firebase";
import { storage } from "../../components/firebase/firebase";
import { collection, doc, getDocs, getDoc, addDoc, deleteDoc, orderBy, query } from "firebase/firestore";




const Editor = ({ titulo, coleccion, id }) => {

    const [data, setData] = useState([])

    const { getData, productosQueryDB, edicionTexto, edicionDeDatos, setproductosQueryDB, setEdicionTexto, setEdicionDeDatos } = ProductConsumer()

    const [edicionLista, setEdicionLista] = useState('')
    const [eliminarEdicion, setEliminarEdicion] = useState('')


    //console.log(productosQueryDB)

    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "json" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json);
                setData(json)
            };
            console.log(data)
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    async function addItem() {
        const col = collection(db, coleccion)
        try {
            const arrays = await addDoc(col, { data: data, date: new Date() })
            arrays && setEdicionLista(`Actualizado correctamente lista de ${new Date}`)
            setEliminarEdicion('')
        } catch (error) {
            console.log(error)
            setEdicionLista('Error en la actualizacion')
        }
    }

    async function deleteItem() {
        //revisar si esta bien eliminar. no podemos eliminar si queda un solo documento.
        let arrays = "";
        try {
            arrays = await deleteDoc(doc(db, coleccion, id))
            switch (coleccion) {
                case 'productos':
                    getData(coleccion).then(res => setproductosQueryDB(res))
                    break;
                case 'textos':
                    getData(coleccion).then(res => setEdicionTexto(res))
                    break;
                case 'datos':
                    getData(coleccion).then(res => setEdicionDeDatos(res))
                    break;
            }
            setEliminarEdicion(`Lista eliminada correctamente`)
        } catch (error) {
            console.log(error)
            setEliminarEdicion('Error al eliminar ultima lista')
        }
    }

    const handleDelete = (coleccion) => {
        getData(coleccion).then((res) => {
            if (res.length < 2) {
                setEliminarEdicion(`No se puede eliminar la ultima lista`)
            } else {
                deleteItem()
            }
        }).catch(err => console.log(err))
    }


    const handleAdd = () => {
        console.log(data[data.length - 1]?.__EMPTY_2)
        console.log(coleccion)
        if (data[data.length - 1]?.__EMPTY_2 === coleccion) {
            //deleteDoc()
            addItem()
        } else {
            setEdicionLista('Se debe subir un archivo')
        }
    }


    return (
        <div className='main-div-archivos'>
            <div className='edicion-productos'>
                <h5>{titulo}</h5>
                <form className='form-acutalizacion'>
                    <p>Cargar el archivo Excel adecuado: </p>
                    <label className='uploadFiles' htmlFor="upload">
                        <input
                            type="file"
                            name="upload"
                            id="upload"
                            onChange={readUploadFile}
                        />
                    </label>
                </form>

                <button className='btn btn-success' onClick={() => handleAdd()}>Actualizar lista</button>

                {edicionLista && <p>{edicionLista}</p>}

                <button className='btn btn-success' onClick={() => handleDelete(coleccion)}>Volver a lista anterior</button>

                {eliminarEdicion && <p>{eliminarEdicion}</p>}
            </div>
        </div>
    )
}
export default Editor
