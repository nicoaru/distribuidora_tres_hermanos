import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import './footer.css';


function Footer() {
    return (
        <div className='footer'>
            <div className="main-footer-container">
                <div className="container">
                    <div className='logo-div'>
                        <Logo location='logo-brand' />
                    </div>
                    <div className='iconos-div'>
                        <Link className='footer-iconos' to='/'>
                            <i className="fab fa-facebook-f fa-lg white-text mr-3 fa-2x">
                            </i>
                        </Link>

                        <Link className='footer-iconos' to='/'>
                            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </Link>
                    </div>
                </div>
            </div>
        </div >

    );
}

export { Footer }