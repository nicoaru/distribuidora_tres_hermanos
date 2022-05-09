import React from "react";
import './carouselProductos.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ItemProducto } from "../itemProducto/itemProducto";
import img from '../../img/iconos/Ilustraciones_iconos-05.png'


function CarouselProductos({ productosParaMostrar }) {
 
    let cardsJSX
    if (productosParaMostrar.length !== 0) {
        cardsJSX = productosParaMostrar[productosParaMostrar.length - 1].data.map((obj, index) => {
            return <ItemProducto producto={obj} key={index} />})        
    }

    // Propiedades responsive del carousel
    let carouselProdResponsive = { 0: { items: 1, slideBy: 1, margin: 0 }, 768: { items: 2, slideBy: 2, margin: 0 }, 992: { items: 3, slideBy: 3, margin: 50 }, 1200: { items: 3, slideBy: 3, margin: 80 } }

    return (
        <>
            {(productosParaMostrar.length === 0) 
                ? 
                <div className="container-fluid d-flex justify-content-center my-5" style={{height:250}}>
                    <div className="spinner-grow" role="status">
                        <img src={img} alt="" />
                    </div>
                </div> 
                :
                <div className="container-fluid d-flex justify-content-center my-5">
                    <div className="carouselProductosContainer  col-12 col-sm-8 col-md-10">
                        <OwlCarousel responsive={{ ...carouselProdResponsive }} nav autoplay={false} loop>
                            {cardsJSX}
                        </OwlCarousel>
                    </div>
                </div>


            }

        </>

)
}

export { CarouselProductos }

