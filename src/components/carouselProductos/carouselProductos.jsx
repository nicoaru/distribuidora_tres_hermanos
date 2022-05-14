import React from "react";
import './carouselProductos.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ItemProducto } from "../itemProducto/itemProducto";
import img from '../../img/iconos/Ilustraciones_iconos-05.png';
import { BotonLink } from "../botonLink/botonLink";

function CarouselProductos({ productosQuery, imagenes2, carouselTitle }) {
 
    let cardsJSX
    // if (productosParaMostrar.length !== 0) {
    //     cardsJSX = productosQuery[productosQuery.length - 1].data.map((obj, index) => {
    //         return <ItemProducto producto={obj} key={index} />})        
    // }

    productosQuery[productosQuery.length - 1]?.data && imagenes2.length > 6 && 
    (cardsJSX = productosQuery[productosQuery.length - 1].data.map((element, id) => {
        return <ItemProducto key={id} producto={element} img2={imagenes2[element.__EMPTY_3]} ></ItemProducto>
    }))
    

    // Propiedades responsive del carousel
    let carouselProdResponsive = { 0: { items: 1, slideBy: 1, margin: 0 }, 768: { items: 2, slideBy: 2, margin: 0 }, 992: { items: 3, slideBy: 3, margin: 50 }, 1200: { items: 3, slideBy: 3, margin: 80 } }

    return (
        <>
            {(productosQuery.length === 0) 
                ? 
                <div className="container-fluid d-flex justify-content-center my-5" style={{height:250}}>
                    <div className="spinner-grow" role="status">
                        <img src={img} alt="" />
                    </div>
                </div> 
                :
                <div className="carouselProductosContainer my-5">
                    <div className="titleContainer">
                        <h1 className="carouselProductosTitle">{carouselTitle}</h1>
                    </div>
                    <div className="container-fluid d-flex justify-content-center mt-5">
                        <div className="col-12 col-sm-8 col-md-10">
                            <OwlCarousel responsive={{ ...carouselProdResponsive }} nav autoplay={false} loop>
                                {cardsJSX}
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <BotonLink texto={'VER MAS PRODUCTOS'} to={'/productos'}/>
                    </div>
                </div>


            }

        </>

)
}

export { CarouselProductos }

