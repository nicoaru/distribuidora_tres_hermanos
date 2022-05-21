import React, {useEffect, useState, useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { PortadaProductos } from '../portadaProductos/portadaProductos'
import DescargarPrecios from '../descargaPDF/DescargarPrecios'
import { CarouselProductos } from '../carouselProductos/carouselProductos'
import { ProductConsumer } from '../../context/ProductProvider'
import './detalleItemStyle.css'
import { ItemCount } from '../itemCount/itemCount' 
import { CartContext } from '../../context/cartContext'




const DetalleItem = () => {

    //Datos producto a mostrar
    const location = useLocation()
    const {  producto, img2 } = location.state

    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line

      }, [])

    //Productos para el carousel 
    const { productosQueryDB, imagenes, getProductsText, getImagenes, imagenes2 } = ProductConsumer();
    useEffect(() => {
        productosQueryDB.length < 1 && getProductsText();
        imagenes.length < 1 && getImagenes();
        // eslint-disable-next-line
    }, [])


    //ItemCount

    const { addItem} = useContext(CartContext)
    const onAdd = (quantity) => {
        addItem(producto, quantity, img2)
        setShowToast(true)
    }
    const [showToast, setShowToast] = useState(false);


    return (
        <div>
            <PortadaProductos/>
            <div className='main-detail-div-container container-lg d-flex justify-content-center mb-4'>
                <div key={producto.__EMPTY_3} className='main-detail-div d-flex flex-column flex-md-row justify-content-md-evenly justify-content-lg-between col-lg-10 my-5'>
                    <div className='detail-img align-self-center'>
                        <img src={img2} alt="producto" />
                    </div>
                    <div className='text-detail d-flex flex-column align-self-start align-self-md-center mt-3 mt-md-0 ps-md-4'>
                        <div className='datos-principales-SKU'>
                            <h4 className='itemDetail-textMarca'>{producto.__EMPTY_4}</h4>
                            <h2 className='itemDetail-textCategoria'>{producto.__EMPTY_5}</h2>
                            <h3 className='itemDetail-textPrecio'>$ {producto.__EMPTY_7} / {producto.__EMPTY_6}</h3>
                        </div>
                        <div className='detalles-SKU'>
                            <p className='itemDetail-textDescripcion'>Descripcion del producto si la huebiera. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam fugit repudiandae sapiente ad, nulla in id veniam assumenda. Nobis, placeat. Corporis dolor facere voluptatibus quam tempora alias eum numquam minus!</p>
                        </div>

                        <ItemCount onAdd={onAdd} showToast={showToast} setShow={setShowToast} initial={0.5} unidadVenta={producto.__EMPTY_6}></ItemCount>
                        

                        {/* {   addedToCart && <BotonLink to={'/cart'} texto={'Terminar mi compra'}/>   } */}


                        {/* <div className='itemDetail-boton align-self-stretch align-self-sm-start mt-5'>
                            <img className='me-3' src={watsappIcon} alt="watsapp icon" />
                            <span>Hace tu pedido</span>
                        </div>       */}

                    </div>
                </div>
            </div>
            <DescargarPrecios/>
            <CarouselProductos carouselTitle={'Productos Relacionados'} productosQuery={productosQueryDB} imagenes2={imagenes2}/>
        </div>
    )
}

export default DetalleItem