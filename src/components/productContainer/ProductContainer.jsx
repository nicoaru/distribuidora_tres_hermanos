import AcordionFiltro from '../acordionFiltro/AcordionFiltro'
import DropDownBtn from '../dopDownBtn/DropDownBtn'
import FiltroTick from '../filtroTick/FiltroTick'
import ProductList from '../productList/ProductList'
import { PortadaProductos } from '../portadaProductos/portadaProductos'
import './productoContainer.css'
import React, { useEffect, useState } from 'react'
import { ProductConsumer } from '../../context/ProductProvider'
import { filterArray, sortArray } from './filtroHelper'

const ProductContainer = () => {

    const { productosQueryDB, imagenes, getProductsText, getImagenes, imagenes2 } = ProductConsumer();

    useEffect(() => {
        productosQueryDB.length < 1 && getProductsText();
        imagenes.length < 1 && getImagenes();
         // eslint-disable-next-line 
    }, [])
    const [categorias, setCategorias] = useState(['Todo'])
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        const auxCat = new Set(['Todo'])
        const auxDisplay = []
        productosQueryDB[productosQueryDB.length - 1]?.data.forEach(element => {
            if (element.__EMPTY_5 !== 'categoria')
                auxCat.add(element.__EMPTY_5)
            auxDisplay.push(element)
        })
        setCategorias([...auxCat])
        setDisplayProducts([...auxDisplay])
    }, [productosQueryDB])

    const handleFilter = (e) => {
        //console.log(e.target.value)
        //console.log(e.currentTarget.innerHTML)
        const copyArray = [...productosQueryDB[productosQueryDB.length - 1]?.data]
        setDisplayProducts([...filterArray(copyArray, e.currentTarget.innerHTML || e.target.value)])
    }

    const handleOrder = (e) => {
        const copyArray = [...productosQueryDB[productosQueryDB.length - 1]?.data]
        //console.log([...sortArray(copyArray, e.currentTarget.innerHTML)])
        setDisplayProducts([...sortArray(copyArray, e.currentTarget.innerHTML)])
        //sortArray(copyArray, e.currentTarget.innerHTML)
        //console.log(copyArray)
    }

    const orden = ['Precio menor a mayor',
        'Precio mayor a menor',
        'Alfabetico']


    return (
        <>
            {(categorias.length === 0 || displayProducts.length === 0) && <h3>Cargando...</h3>}
            <div className='outer-div'>

                {categorias && <>
                    <PortadaProductos />

                    <div className='productos-container p-4 p-md-5'>

                        <div className='acordiones-filtros d-md-none mb-4'>
                            <AcordionFiltro
                                titulo='Categoria'
                                aux={'collapseOne'}
                                opciones={categorias}
                                fn={handleFilter} />
                            {/* <AcordionFiltro
                                titulo='Marca'
                                aux={'collapse2'}
                                opciones={marcas}
                                fn={handleFilter} /> */}
                        </div>

                        <div className='filtro-casillas d-none d-md-block'>
                            <h3 className='productsContainer-titles d-none d-md-inline-block'>Filtrar por</h3>
                            {/* <FiltroTick titulo='Marcas' datos={marcas} /> */}
                            <FiltroTick titulo='Categorias' fn={handleFilter} datos={categorias} />
                        </div>

                        <div className='filtros d-flex justify-content-end mb-5 m-md-5'>
                            <DropDownBtn fnOrdenar={handleOrder} opciones={orden} />
                        </div>

                        <div className='outer-productos'>
                            <div className='d-flex justify-content-center justify-content-md-start mb-5'>
                                <h3 className='productsContainer-titles'>Todos los productos</h3>
                            </div>
                            <ProductList productos={displayProducts} imagenes2={imagenes2}></ProductList>
                        </div>
                    </div>
                </>
                }


            </div>
        </>)
}
export default ProductContainer