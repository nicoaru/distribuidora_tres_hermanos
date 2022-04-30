import React from "react";
import './carouselProductos.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function CarouselMarcas(productosParaMostrar) {

    let productos = [marca1, marca2, marca3, marca4, marca5, marca6]

    let cards = imagenes.map((img, index) => {
        return <div className='item' key={index}> <img src={img}/> </div>})

    let carouselResponsive = {0:{items:3, slideBy:3, margin:30}, 576:{margin:50}, 768:{margin:50}, 992:{margin:80}, 1200:{margin:120}}


    return(
        <div className="container-fluid d-flex justify-content-center my-5">
            <div className="carouselMarcasContainer  col-12 col-sm-10 col-md-8">
                        <OwlCarousel className="" responsive={{...carouselResponsive}} autoplay={true} autoplayTimeout={2000} autoplayHoverPause={true} loop>
                            {cards}
                        </OwlCarousel>
            </div>
        </div>

    )
}

export {CarouselMarcas}

