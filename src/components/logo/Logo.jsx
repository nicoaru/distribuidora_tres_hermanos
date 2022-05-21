import React from 'react'
import { Link } from 'react-router-dom'
import './logo.css'

const Logo = ({ location }) => {
    return (
        <div>
            <Link className={location} to='/'>
                <div className='logoTextContainer'>
                    <h1 className='d1'>Los 3 Hermanos</h1>
                    <h2 className='bajadaLogo mb-0'><span>DISTRIBUIDOR</span>A</h2>
                </div>    
            </Link>
        </div>
    )
}

export default Logo