import React, {useEffect} from 'react'
import './conocenos.css'
import { ConocenosContainer } from '../../components/conocenosContainer/conocenosContainer'

function Conocenos() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line
    }, [])

    return (        
        <ConocenosContainer/>
    )
}

export { Conocenos }