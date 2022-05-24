import React, {useEffect} from 'react'
import './comoComprar.css'
import { ComoComprarContainer } from '../../components/comoComprarContainer/comoComprarContainer'
function ComoComprar() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='comoComprar'>
            <ComoComprarContainer/>
        </div>
    )
}

export { ComoComprar }