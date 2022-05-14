import React from "react";
import './boton.css'



function Boton({texto, width, onClickFunction}) {

    return(
        <div className='botonComponent' onClick={onClickFunction} style={{width: `${width}`}}>
            {texto}
        </div>
    )
}

export { Boton }