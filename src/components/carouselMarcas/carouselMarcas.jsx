import React from "react";
import './carouselMarcas.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import marca1 from "../../img/marcas/marca1.png"
import marca2 from "../../img/marcas/marca2.png"
import marca3 from "../../img/marcas/marca3.png"
import marca4 from "../../img/marcas/marca4.png"
import marca5 from "../../img/marcas/marca5.png"


function CarouselMarcas() {

    let imagenes = [marca1, marca2, marca3, marca4, marca5]

    let cards = imagenes.map((img, index) => {
        return <div className='item' key={index}> <img src={img}/> </div>})

    let carouselResponsive = {0:{items:3, slideBy:3, margin:50}, 576:{items:3, slideBy:3, margin:50}, 992:{items:3, slideBy:3, margin:80}, 1200:{items:3, slideBy:3, margin:120}}


    return(
        <div className="carouselMarcasContainer py-5">
            <div className="titleContainer">
                <h1 className="carouselMarcasTitle">Marcas</h1>
            </div>
            <div className="container-fluid d-flex justify-content-center mt-5">
                <div className="col-12 col-sm-10 col-md-8">
                            <OwlCarousel className="" responsive={{...carouselResponsive}} autoplay={true} autoplayTimeout={2000} autoplayHoverPause={true} loop>
                                {cards}
                            </OwlCarousel>
                </div>
            </div>

        </div>


    )
}

export {CarouselMarcas}

