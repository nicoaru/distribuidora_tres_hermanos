import { React, useEffect } from "react";
import { db } from "../firebase/firebase";
import { storage } from "../firebase/firebase";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";


function PruebaDB() {
    
    useEffect (() => {

        (async function () {
            const snapshot = await getDocs(collection(db, "productos"));
            snapshot.forEach((doc) => {
            console.log("Documento traido de la DB: ", doc.id, " => ", doc.data());
            });
        }) ();

    }, [])

};
    


export { PruebaDB }