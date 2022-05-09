import React, { useEffect, useState } from 'react'
import { storage } from '../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable, listAll } from 'firebase/storage';
import { axios } from 'axios'
import './test.css'


const UploadImg = () => {

    //console.log(storage)
    let [opcionesTest, setOpcinoesTest] = useState()
    let [file, setFile] = useState('');
    let [img, setImg] = useState([])
    const [urlImg, setUrlImg] = useState([])


    useEffect(() => {
        console.log(file)
    }, [file]);

    //remember that the image has to coincide with the prodcut. image name is very important
    // use split to get image name!

    // get the image first.
    const look = () => {
        //const imgPath = '//b/distribuidora-3-hermanos.appspot.com/produtos/azulEmperador.jpeg'
        //const imgPath = 'gs://distribuidora-3-hermanos.appspot.com/produtos/azulEmperador.jpeg'
        const folderPath = 'produtos/'
        //const imgRef = ref(storage, imgPath)
        //console.log(folderRef)
        const getUrl = async () => {
            const folderRef = await listAll(ref(storage, folderPath))
            console.log(folderRef)
            return (folderRef.items)
            //const imgRef = ref(storage, imgPath)
            //try {
            //    const url = await getDownloadURL(imgRef)
            //    return url
            //} catch (error) {
            //    console.log(error)
            //}

        }
        //getUrl().then(res => console.log(res))
        getUrl()
            .then(res => {
                let aux = [];
                res.forEach(element => {
                    aux.push('gs://' + element._location.bucket + '/' + element._location.path_)
                });
                return aux
            }).then(res => {
                let aux = [];
                for (const i of res) {
                    console.log(i)
                    //getImgUrl(i).then(resp => console.log(resp))
                    getImgUrl(i).then(resp => {
                        aux.push(resp)
                        console.log(resp)
                        //console.log(aux)
                        setUrlImg([...aux])
                    })
                    console.log(aux)
                    //setUrlImg([...aux])
                }
            }).catch(err => console.log(err))

        //alt=media&token=4d6b0707-efe3-4690-9f
        const getImgUrl = async (path) => {
            const imgRef = ref(storage, path)
            const url = await getDownloadURL(imgRef)
            return url
        }
    }

    useEffect(() => {
        console.log(urlImg)
    }, [urlImg]);


    // upload the image second
    const upload = () => {

        for (const path of file) {
            const refPath = 'produtos/';
            const metadata = {
                contentType: path.type
            }
            const imgRef = ref(storage, refPath + path.name)
            uploadBytesResumable(imgRef, file, metadata)
                .then((snapshot) => {
                    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
                    console.log('File metadata:', snapshot.metadata);
                }).catch(err => console.log(err))
        }
        console.log('upload ejecutado')
    }

    // delete the image third

    return (
        <div>
            <input type="file" className="form-control m-3 w-75" onChange={e => setFile([...e.target.files])} multiple id="photo" />
            <button onClick={upload} className='btn btn-success m-3'>Upload img</button>
            <button onClick={look} className='btn btn-success m-3'>Look at img</button>
            {!urlImg && <h5>No img yet!</h5>}
            {urlImg && <img src={urlImg[1]} />}

            {urlImg && urlImg.map((imagen, idx) => <img src={imagen} key={idx} />)}



        </div>
    )
}

export default UploadImg