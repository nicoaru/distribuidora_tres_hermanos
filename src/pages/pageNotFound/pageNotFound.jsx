import React from 'react'
import './pageNotFound.css'
import { Layout } from '../../components/layout/layout'

function PageNotFound() {
    return (
        <Layout>
            <div className='pageNotFound'>
                <h1>Pagina No Encontrada</h1>
            </div>
        </Layout>
    )
}

export { PageNotFound }