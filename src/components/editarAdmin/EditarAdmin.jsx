import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import EditarDatos from '../editarDatos/EditarDatos'
import UploadImg from '../uploadImg/UploadImg'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase';
import './editarDatosStyle.css'


const EditarAdmin = () => {


    const [userOk, setUserOk] = useState(false)
    //console.log(currentUser)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            user?.uid ?? setUserOk(true)
        })
    }, []);

    return (
        <>
            {userOk && <Navigate replace to={'/login'}></Navigate>}
            <div>
                <div className='edit-text'>
                    <h2>Editar Textos</h2>
                    <EditarDatos />
                </div>
                <div className='edit-img'>
                    <h2>Edit Img</h2>
                    <UploadImg />
                </div>
            </div>
        </>

    )
}

export default EditarAdmin