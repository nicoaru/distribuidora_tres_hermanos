/*Importo el inicializador que me permite conectarme con Firebase*/
import { initializeApp } from 'firebase/app'
/*Importo los servicios de Firebase que voy a utilizar*/
/*En este caso Firestore, especificamente el modulo getFirestore  */
import { getFirestore } from 'firebase/firestore'
/*En este caso Storage, especificamente el modulo getStorage*/
import { getStorage } from 'firebase/storage'

/*Luego agregar CloudStorage y FirebaseAuthentication*/

/*Creacion del objeto con los datos de configuracion de Firebase*/
const firebaseConfig = {
    apiKey: "AIzaSyBiVkYYllWqp3EXfaktiA7UhHJyBxvjwI8",
    authDomain: "distribuidora-3-hermanos.firebaseapp.com",
    projectId: "distribuidora-3-hermanos",
    //databaseURL: "https://distribuidora-3-hermanos.appspot.com",
    storageBucket: "distribuidora-3-hermanos.appspot.com",
    messagingSenderId: "1019902829199",
    appId: "1:1019902829199:web:21930038d5a33dc99c46fa",
    measurementId: "G-2ZKXD3TEBH"
};
/*Inicializacion de Firebase, me conecto con Firebase*/
const firebaseApp = initializeApp(firebaseConfig);

/*Genero la referencia a la base de datos creada en el servicio Firestore*/
const db = getFirestore(firebaseApp)

/*Genero la referencia al bucket creado en el servicio Storage, para luego crear referencias especificas*/
const storage = getStorage(firebaseApp);

export { db, storage }