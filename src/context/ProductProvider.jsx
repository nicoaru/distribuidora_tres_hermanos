import React, { createContext, useContext, useState, useMemo } from 'react';
import azulEmperador from '../img/productos/azulEmperador.jpeg'
import comboElJuan from '../img/productos/combo-eljuan.jpeg'
import cremaLacteosCLP from '../img/productos/crema-lacteosCLP.jpeg'
import cremosoElJuan from '../img/productos/cremoso-eljuan.jpeg'


const ProductContext = createContext();

export const ProductConsumer = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {

    const imagenes = [azulEmperador, comboElJuan, cremaLacteosCLP, cremosoElJuan]

    const listaProductos = [{
        id: 1,
        nombre: 'Queso 1',
        precio: '95',
        descripcion: 'Queso cremoso',
    },
    {
        id: 2,
        nombre: 'Queso 2',
        precio: '105',
        descripcion: 'Queso duro',
    },
    {
        id: 3,
        nombre: 'Queso 3',
        precio: '200',
        descripcion: 'Queso Roque',
    }, {
        id: 4,
        nombre: 'Queso 4',
        precio: '290',
        descripcion: 'Queso azul',
    }]

    return (
        <ProductContext.Provider
            value={{
                listaProductos,
                imagenes,
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider