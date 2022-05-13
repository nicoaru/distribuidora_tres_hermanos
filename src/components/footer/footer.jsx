import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import './footer.css';
import iconoInstagram from '../../img/iconos/iconoInstagram.png'
import iconoFacebook from '../../img/iconos/iconoFacebook.png'

function Footer() {
    return (
        <div className='footer'>
                <div className="main-footer-container d-flex flex-column flex-md-row justify-content-center align-items-center pb-4 pb-md-0">
                    <div className='logo-div mb-4 mb-md-0 me-md-5'>
                        <Logo location='logo-brand' />
                    </div>
                    <div className='iconos-div d-flex justify-content-center align-items-center'>
                        <a className='footer-iconos' target='_blank' href='https://www.facebook.com'>
                            <img className='me-3 me-md-4' src={iconoFacebook}/>
                        </a>
                        <a className='footer-iconos' target='_blank' href='https://www.instagram.com'>
                            <img src={iconoInstagram}/>
                        </a>
                    </div>
                </div>
        </div >

    );
}

export { Footer }