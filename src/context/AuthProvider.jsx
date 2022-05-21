import React, { createContext, useContext, useState } from 'react';
import { auth } from '../components/firebase/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'




const AuthContext = createContext();

export const AuthConsumer = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState('')

    const logOut = async (e) => {
        e.preventDefault()
        try {
            await signOut(auth)
            navigate('/login')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{ currentUser, setCurrentUser, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
