import React from 'react'
import AcordionFiltro from '../acordionFiltro/AcordionFiltro'
import DropDownBtn from '../dopDownBtn/DropDownBtn'
import FiltroTick from '../filtroTick/FiltroTick'
import CarrouselMain from '../homeFirstCarousel/CarrouselMain'
import ProductList from '../productList/ProductList'
import './productoContainer.css'

const ProductContainer = () => {
    const tituloPrim = 'Tienda'
    const textoSecu = 'Recuerda que para comprar debes enviar tu pedido por mensaje a nuestro Whatsapp'

    const categorias = ['Categoria 1', 'Categoria 2']
    const marcas = ['Marca 1', 'Marca 2']
    return (
        <div className='outer-div'>
            <div className='auxProductoCarrousel'>
                <CarrouselMain
                    heightImg='60vh'
                    tituloPrim={tituloPrim}
                    texto={textoSecu}>
                </CarrouselMain>
            </div>

            <div className='productos-container'>
                <div className='acordiones-filtros'>
                    <AcordionFiltro
                        titulo='Categoria'
                        aux={'collapseOne'}
                        opciones={categorias} />

                    <AcordionFiltro
                        titulo='Marca'
                        aux={'collapse2'}
                        opciones={marcas} />
                </div>

                <div className='filtro-casillas'>
                    <FiltroTick titulo='Marcas' datos={marcas} />
                    <FiltroTick titulo='Categorias' datos={categorias} />
                </div>
                <div className='filtros'>
                    <DropDownBtn />
                </div>
                <div className='outer-productos'>
                    <h3>Todos los productos!</h3>
                    <ProductList></ProductList>
                </div>
            </div>

        </div>
    )
}
export default ProductContainer