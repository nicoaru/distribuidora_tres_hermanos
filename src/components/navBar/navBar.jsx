import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../logo/Logo';
// import { CartWidget } from '../../cartWidget/cartWidget';
import './navBar.css';


function NavBar() {

    let [burger, setBurger] = useState('fa-solid fa-bars');
    let [toggle, setToggle] = useState(true)

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

    return (
        <div className='navBar'>
            <Logo location='navbar-brand' />
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
                            <p className='d5' className='d5' >CONOCENOS</p>
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
                    </div>
                </div>
            </nav >
            {/* <ul>
                <li>
                    <Link className='link' exact to='/'>
                        <p>LOGO</p>
                    </Link>
                </li>
                <li>
                    <NavLink className='link' exact to='/'>
                        <d5>HOME</d5></NavLink>
                </li>
                <li>
                    <NavLink className='link' to='/conocenos'><d5>CONOCENOS</d5></NavLink>
                </li>
                <li>
                    <NavLink className='link' to='/productos'><d5>PRODUCTOS</d5></NavLink>
                </li>
                <li>
                    <NavLink className='link' to='/como_comprar'><d5>COMO COMPRAR</d5></NavLink>
                </li>
                <li>
                    <NavLink className='link' to='/contacto'><d5>CONTACTO</d5></NavLink>
                </li>
            </ul> */}
            {/* <CartWidget/> */}
        </div >


    );
}

export { NavBar }