import React, { useEffect, useState } from 'react'
import { storage } from '../firebase/firebase';
import { getDownloadURL, ref, uploadBytes, listAll, deleteObject } from 'firebase/storage';
import { ProductConsumer } from '../../context/ProductProvider'
import { axios } from 'axios'
import './test.css'


const UploadImg = () => {

    //console.log(storage)
    let [opcionesTest, setOpcinoesTest] = useState()
    let [file, setFile] = useState([]);
    let [img, setImg] = useState([])
    let [idDelete, setIdDelete] = useState('')
    const [urlImg, setUrlImg] = useState([])
    const { imagenes, getImagenes } = ProductConsumer()

    //"https://firebasestorage.googleapis.com/v0/b/distribuidora-3-hermanos.appspot.com/o/productos%2F-3-%20Queso%20Port%20Salut%20-%20El%20Juan%20(1).png?alt=media&token=4b366afc-6320-4527-bbc1-1a324412dc68"
    useEffect(() => {
        //console.log(file)
    }, [file]);

    useEffect(() => {
        if (imagenes.length < 1) {
            getImagenes()
        }
    }, []);


    useEffect(() => {
        //console.log(urlImg)
    }, [urlImg]);


    // upload the image second
    const upload = () => {
        if (file.length === 0) {
            alert('se debe seleccionar un archivo')
        } else {
            for (const path of file) {
                const refPath = 'productos/';
                const metadata = {
                    contentType: path.type
                }
                // console.log(file)
                const imgRef = ref(storage, refPath + path.name)
                uploadBytes(imgRef, path)
                    .then((snapshot) => {
                        console.log('Uploaded', snapshot, 'bytes.');
                        console.log('File metadata:', snapshot.metadata);
                    }).catch(err => console.log(err))
            }
            console.log('upload ejecutado')
        }

    }

    // delete the image third

    const deleteImg = async () => {
        const deleteFile = async () => {
            //console.log(idDelete)
            const aux = imagenes.filter(imagen => imagen.id == idDelete)
            // console.log(aux)
            if (aux.length === 0) {
                alert('Ese id de producto no tiene imagen asociada.')
            } else {
                const imgRef = ref(storage, aux[0].path)
                deleteObject(imgRef).then(res => console.log(res))
                getImagenes()
            }
        }
        await deleteFile()
    }
    //"gs://distribuidora-3-hermanos.appspot.com/productos/-10- Queso Fynbo - Puyehue (1).png"
    const auxTexting = 'gs://distribuidora-3-hermanos.appspot.com/produtos/-The name-azulEmperador.jpeg'
    //console.log(auxTexting.split('-')[3])

    return (
        <div>
            <input type="file" className="form-control m-3 w-75" accept="image/png, image/jpeg" onChange={e => setFile([...e.target.files])} multiple id="photo" />
            <button onClick={upload} className='btn btn-success m-3'>Upload img</button>
            <input type="text" name='id' onChange={(e) => setIdDelete(e.target.value)} placeholder='id Producto' value={idDelete} />
            <button onClick={deleteImg} className='btn btn-success m-3'>Delete Img</button>

        </div>)
}

export default UploadImg