import React, { useState, useEffect } from 'react'
import { auth } from '../firebase/firebase';
import {  signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


import './logInStyle.css'

const LogIn = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState('')
    const [passWord, setPassWord] = useState('')
    const [response, setResponse] = useState('')
    const [tester, setTester] = useState('')


    const handleUser = (e) => {
        setUser(e.target.value)
    }
    const handlePassword = (e) => {
        setPassWord(e.target.value)
    }
    const submitFormLogIn = async (e) => {
        e.preventDefault()
        try {
            // eslint-disable-next-line
            const login = await signInWithEmailAndPassword(
                auth,
                user,
                passWord
            )
            setResponse('Log In correcto')

            navigate('/editar')

        } catch (error) {
            console.log(error)
            setResponse('Log In no es correcto')
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setTester('Loged In')
            }
        })
    }, []);


    return (
        <div className='main-log-in'>
            <div className='log-in-box'>
                <form className='form-inputs' action="submit">
                    <h3 className='d1 text-light'>Log In</h3>
                    <input className='form-control w-75' onChange={handleUser} type="text" name="user" value={user} placeholder='Usuario' />
                    <input className='form-control w-75' onChange={handlePassword} type="password" name="password" value={passWord} placeholder='Contraseña' />
                    <p className='text-light'>{response}</p>
                    <button className='btn submit-button' onClick={submitFormLogIn}>Ingresar</button>
                    <h5 className='text-light'>{tester}</h5>
                </form>
            </div>
        </div>
    )
}

export default LogIn