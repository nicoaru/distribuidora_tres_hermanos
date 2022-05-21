import { React, useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";


function PruebaDB() {
    const [productosQueryDB, setproductosQueryDB] = useState([])
    useEffect (() => {

        (async function () {
            const querySnapshot = await getDocs(collection(db, "productos"));
            querySnapshot.forEach((doc) => {
            console.log("Documento traido de la DB: ", doc.id, " => ", doc.data());
            });
            console.log(querySnapshot);
            const productosTemp = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            console.log("productosTemp => ", productosTemp)
            setproductosQueryDB(productosTemp);
        }) ();

    }, [])

    const itemProductos = productosQueryDB.map((prod, index) => (<div key={index}><h5>{prod.marca}</h5>
                                                        <h3>{prod.nombre}</h3>
                                                        <h5>{prod.precio}</h5>
                                                    </div>))
    console.log("itemProductos => ", itemProductos)
                                                        
        return (
            <div>
                {itemProductos}
            </div>
        )
};
    


export { PruebaDB }