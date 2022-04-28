import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { CartWidget } from '../../cartWidget/cartWidget';
import './navBar.css';



function NavBar() {
    return (
        <div className='navBar'>
            <Link className='link' exact to='/'>
                <p>LOGO</p>
            </Link>
            <ul>
                <li>
                    <NavLink activeClassName='link-active' className='link' exact to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='link-active' className='link' to='/conocenos'>Conocenos</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='link-active' className='link' to='/productos'>Productos</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='link-active' className='link' to='/como_comprar'>Cómo comprar</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='link-active' className='link' to='/contacto'>Contacto</NavLink>
                </li>
            </ul>
            {/* <CartWidget/> */}
        </div>


    );
}

export { NavBar }