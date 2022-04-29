import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './logo.css'

const Logo = ({ location }) => {
    return (
        <div>
            <Link className={location} to='/'>
                <h1 className='d1'>Los 3 Hermanos</h1>
            </Link>
        </div>
    )
}

export default Logo