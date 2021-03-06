import React, { useState, useRef, useEffect } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthConsumer } from '../../context/AuthProvider';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import logoImg from '../../img/iconos/tablitaLogo.png'
import Logo from '../logo/Logo';
import { CartWidget } from '../cartWidget/cartWidget';
// import { CartWidget } from '../../cartWidget/cartWidget';
import './navBar.css';

function NavBar() {

    let [burger, setBurger] = useState('fa-solid fa-bars');
    let [toggle, setToggle] = useState(true)
    const [editTag, setEditTag] = useState('none')
    const [logOutBtn, setLogOutBtn] = useState('none')
    const { currentUser, logOut } = AuthConsumer()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setEditTag('flex')
                setLogOutBtn('Log Out')

            } else {
                setEditTag('none')
                setLogOutBtn('Log In')
            }
        })
    }, [currentUser]);

    const click = useRef()

    const handleBurger = () => {
        setToggle(!toggle)
        toggle ? setBurger('fa-solid fa-xmark') : setBurger('fa-solid fa-bars')
    }
    const reset = (e) => {
        if (window.innerWidth <= 988) {
            click.current.click()
        }
    }
    //<button className='btn log-out-button m-0' onClick={logOut} style={{ display: logOutBtn }}>Log Out</button>
    return (
        <>


            <div className='navBar'>
                <div>
                    <Logo location='navbar-brand' />
                </div>
                <div className='logoImg'>
                    <img src={logoImg} alt="logim" />
                </div>

                <nav className="navbar navbar-expand-lg navbar-light">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <div className='logoContainer'>
                        <button ref={click} onClick={handleBurger} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <i className={burger}></i>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink onClick={reset} className='link' to='/'>
                                <p className='d5'>HOME</p>
                            </NavLink>
                            <NavLink onClick={reset} className='link' to='/conocenos'>
                                <p className='d5' >CONOCENOS</p>
                            </NavLink>
                            <NavLink onClick={reset} className='link' to='/productos'>
                                <p className='d5' >PRODUCTOS</p>
                            </NavLink>
                            <NavLink onClick={reset} className='link' to='/como_comprar'>
                                <p className='d5' >COMO COMPRAR</p>
                            </NavLink>
                            <NavLink onClick={reset} className='link' to='/contacto'>
                                <p className='d5' >CONTACTO</p>
                            </NavLink>
                            <NavLink onClick={reset} className='link cart-special' to='/cart'>
                                <CartWidget />
                            </NavLink>
                            <NavLink onClick={reset} className='link' style={{ display: editTag }} to='/editar'>
                                <p className='d5' >Editar</p>
                            </NavLink>
                            <NavLink onClick={logOut} className='link' to='/login'>
                                <p className='d5' >{logOutBtn}</p>
                            </NavLink>
                        </div>
                    </div>
                </nav >
            </div >
        </>


    );
}

export { NavBar }