import React from "react";
import { Link } from "react-router-dom";
import './botonLink.css'



function BotonLink({texto, width, to}) {

    return(
        <div className='botonComponent' style={{width: `${width}`}}>
            <Link className="linkBoton" to={to}><span>{texto}</span></Link>
        </div>
    )
}

export { BotonLink }