import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { CartWidget } from '../../cartWidget/cartWidget';
import './navBar.css';


function NavBar() {
    //<i class="fa-solid fa-bars"></i>
    //<i class="fa-solid fa-xmark"></i>
    //({ isActive }) => isActive ? hamburgerIconClose : hamburgerIcon
    const [burger, setBurger] = useState('fa-solid fa-bars');
    const [toggle, setToggle] = useState(true)

    const handleBurger = () => {
        setToggle(!toggle)
        toggle ? setBurger('fa-solid fa-xmark') : setBurger('fa-solid fa-bars')

    }

    return (
        <div className='navBar'>
            <nav className="navbar navbar-expand-lg navbar-light">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <div className='logoContainer'>
                    <Link className='navbar-brand' exact to='/'>
                        <d1>Los 3 Hermanos</d1>
                    </Link>

                    <button onClick={handleBurger} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i className={burger}></i>
                    </button>
                </div>



                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className='link' exact to='/'>
                            <d5>HOME</d5>
                        </NavLink>
                        <NavLink className='link' to='/conocenos'>
                            <d5>CONOCENOS</d5>
                        </NavLink>
                        <NavLink className='link' to='/productos'>
                            <d5>PRODUCTOS</d5>
                        </NavLink>
                        <NavLink className='link' to='/como_comprar'>
                            <d5>COMO COMPRAR</d5>
                        </NavLink>
                        <NavLink className='link' to='/contacto'>
                            <d5>CONTACTO</d5>
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