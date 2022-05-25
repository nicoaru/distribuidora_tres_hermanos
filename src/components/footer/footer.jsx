import React from 'react';
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
                        <a className='footer-iconos' target='_blank' rel="noreferrer" href='https://www.facebook.com/Distribuidora-los-3-hermanos-Bell-ville-Cordoba-111662890745850'>
                            <img className='me-3 me-md-4' src={iconoFacebook} alt="img3"/>
                        </a>
                        <a className='footer-iconos' target='_blank' rel="noreferrer" href='https://www.instagram.com/quesos_los3hermanos/'>
                            <img src={iconoInstagram} alt="img3"/>
                        </a>
                    </div>
                </div>
        </div >

    );
}

export { Footer }