import React from 'react'
import { NavLink } from 'react-router-dom'
import AcordionFiltro from '../acordionFiltro/AcordionFiltro'
import DropDownBtn from '../dopDownBtn/DropDownBtn'
import FiltroTick from '../filtroTick/FiltroTick'
import CarrouselMain from '../homeFirstCarousel/CarrouselMain'
import ProductList from '../productList/ProductList'
import imgPortadaProductos from '../../img/tienda/pexels-engin-akyurt-2531189.jpg'
import './productoContainer.css'

const ProductContainer = () => {
    const tituloPrim = 'Tienda'
    const texto = 'Recuerda que para comprar debes enviar tu pedido por mensaje a nuestro Whatsapp'
    const heightImg = '80vh';

    const categorias = ['Categoria 1', 'Categoria 2']
    const marcas = ['Marca 1', 'Marca 2']
    return (
        <div className='outer-div'>
            
            <div className='portadaProductos-container d-flex justify-content-center'>
                <div className='portadaProductosCard-container'>
                    <div className='portadaProductosCard-outerborder'>
                        <div className='portadaProductosCard'>
                            <h3 className='text-light'>{tituloPrim}</h3>
                            <p>{texto}</p>
                            <NavLink className='btn portadaProductosCard-boton' to='/como_comprar'>COMO COMPRAR
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className='productos-container p-4 p-md-5'>

                <div className='acordiones-filtros d-md-none mb-4'>
                    <AcordionFiltro
                        titulo='Categoria'
                        aux={'collapseOne'}
                        opciones={categorias} />
                    <AcordionFiltro
                        titulo='Marca'
                        aux={'collapse2'}
                        opciones={marcas} />
                </div>

                <div className='filtro-casillas d-none d-md-block'>
                    <h3 className='productsContainer-titles d-none d-md-inline-block'>Filtrar por</h3>
                    <FiltroTick titulo='Marcas' datos={marcas} />
                    <FiltroTick titulo='Categorias' datos={categorias} />
                </div>

                <div className='filtros d-flex justify-content-end mb-5 m-md-5'>
                    <DropDownBtn />
                </div>
                
                <div className='outer-productos'>
                    <div className='d-flex justify-content-center justify-content-md-start mb-5'>
                        <h3 className='productsContainer-titles'>Todos los productos</h3>
                    </div>
                    <ProductList></ProductList>
                </div>
            </div>

        </div>
    )
}
export default ProductContainer