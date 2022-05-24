import React, {useEffect} from 'react'
import ContactoContainer from '../../components/contactoContainer/ContactoContainer'
import './contacto.css'

function Contacto() {

    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='contacto'>
            <ContactoContainer></ContactoContainer>
        </div>
    )
}

export { Contacto }