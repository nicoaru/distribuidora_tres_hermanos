import React, { useState, useEffect } from 'react'
import * as xlsx from 'https://unpkg.com/xlsx/xlsx.mjs';
import { ProductConsumer } from '../../context/ProductProvider';
import './editarDatos.css'
import { db } from "../../components/firebase/firebase";
import { storage } from "../../components/firebase/firebase";
import { collection, doc, getDocs, getDoc, addDoc, deleteDoc, orderBy, query } from "firebase/firestore";
import { getMetadata } from 'firebase/storage';
import Editor from '../componenteEditor/Editor';

const EditarDatos = () => {

    const { productosQueryDB, edicionDeDatos, edicionTexto } = ProductConsumer()

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