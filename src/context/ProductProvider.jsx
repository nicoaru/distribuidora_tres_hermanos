import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { getDownloadURL, ref, uploadBytesResumable, listAll, deleteObject } from 'firebase/storage';

// import azulEmperador from '../img/productos/azulEmperador.jpeg'
// import comboElJuan from '../img/productos/combo-eljuan.jpeg'
// import cremaLacteosCLP from '../img/productos/crema-lacteosCLP.jpeg'
// import cremosoElJuan from '../img/productos/cremoso-eljuan.jpeg'

import { db } from "../../src/components/firebase/firebase";
import { storage } from "../../src/components/firebase/firebase";
import { collection, query, orderBy, doc, getDocs, getDoc, limit } from "firebase/firestore";



const ProductContext = createContext();

export const ProductConsumer = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {

    //const imagenes = [azulEmperador, comboElJuan, cremaLacteosCLP, cremosoElJuan]
    const [imagenes, setImagenes] = useState([])
    const [imagenes2, setImagenes2] = useState([])


    const [listadoVariables, setListadoVariables] = useState([])

    const [productosQueryDB, setproductosQueryDB] = useState([])
    const [edicionTexto, setEdicionTexto] = useState([])
    const [edicionDeDatos, setEdicionDeDatos] = useState([])

    const getData = async (productos = 'productos') => {
        const querySnapshot = await getDocs(collection(db, productos));
        const productosTemp = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        const orderedList = productosTemp.sort((a, b) => a.date - b.date)
        // console.log(productos, " => ",orderedList)
        return orderedList;
    }

    // get products. activated when in product page.
    const getProductsText = () => {
        getData().then(res => setproductosQueryDB(res))
    }
    // get images. Save URLs in memo. Asign name, path, url
    const getImagenes = () => {

        const folderPath = 'productos/';

        const getUrl = async () => {
            const folderRef = await listAll(ref(storage, folderPath))
            return (folderRef.items)
        }

        getUrl()
            .then(res => {
                let aux = [];
                res.forEach(element => {
                    aux.push({
                        path: 'gs://' + element._location.bucket + '/' + element._location.path_,
                        id: element._location.path_.split('-')[1]
                    })
                });
                return aux
            }).then(res => {
                let aux = [];
                for (const i of res) {
                    getImgUrl(i.path).then(resp => {
                        i[i.id] = resp
                        imagenes2[i.id] = resp
                        //console.log(i)
                        aux.push(i)
                        //console.log(aux)
                        setImagenes([...aux])
                        //console.log(imagenes2)
                        //console.log(resp)

                    })
                }
            }).catch(err => console.log(err))

        const getImgUrl = async (path) => {
            const imgRef = ref(storage, path)
            const url = await getDownloadURL(imgRef)
            return url
        }
    }
    const getRest = () => {
        getData('textos').then(res => setEdicionTexto(res))
        getData('datos').then(res => setEdicionDeDatos(res))
    }

    useEffect(() => {
        getRest()
    }, [])

    return (
        <ProductContext.Provider
            value={{
                imagenes,
                setListadoVariables,
                productosQueryDB,
                setproductosQueryDB,
                getData,
                edicionTexto,
                setEdicionTexto,
                edicionDeDatos,
                setEdicionDeDatos,
                imagenes,
                setImagenes,
                getProductsText,
                getImagenes,
                getRest,
                imagenes2
            }}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductProvider