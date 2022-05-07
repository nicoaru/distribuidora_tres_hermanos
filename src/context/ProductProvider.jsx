import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import azulEmperador from '../img/productos/azulEmperador.jpeg'
import comboElJuan from '../img/productos/combo-eljuan.jpeg'
import cremaLacteosCLP from '../img/productos/crema-lacteosCLP.jpeg'
import cremosoElJuan from '../img/productos/cremoso-eljuan.jpeg'

import { db } from "../../src/components/firebase/firebase";
import { storage } from "../../src/components/firebase/firebase";
import { collection, query, orderBy, doc, getDocs, getDoc, limit } from "firebase/firestore";



const ProductContext = createContext();

export const ProductConsumer = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {

    const imagenes = [azulEmperador, comboElJuan, cremaLacteosCLP, cremosoElJuan]
    const [listadoVariables, setListadoVariables] = useState([])

    const [productosQueryDB, setproductosQueryDB] = useState([])

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const productosTemp = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        //console.log(productosTemp)
        const orderedProducts = productosTemp.sort((a, b) => a.date - b.date)
        //console.log(orderedProducts)
        setproductosQueryDB(orderedProducts);
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <ProductContext.Provider
            value={{
                imagenes,
                setListadoVariables,
                productosQueryDB,
                getData
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider