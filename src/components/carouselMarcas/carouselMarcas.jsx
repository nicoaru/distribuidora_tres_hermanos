import React from "react";
import './carouselMarcas.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import marca1 from "../../img/marcas/marca1.png"
import marca2 from "../../img/marcas/marca2.png"
import marca3 from "../../img/marcas/marca3.png"
import marca4 from "../../img/marcas/marca4.png"
import marca5 from "../../img/marcas/marca5.png"


function CarouselMarcas() {

    let imagenes = [marca1, marca2, marca3, marca4, marca5]

    let cards = imagenes.map((img, index) => {
        return <div className='itemCarouselMarcas' key={index}> <img className={`img-${index}`} src={img} alt="imgCarrusel"/> </div>})

    const carouselMarcasResponsive = {
        allDevices: {
            breakpoint: { max: 3000, min: 0 },
            items: 3,
            slidesToSlide: 3 
        }
        };


    return(
        <div className="carouselMarcasContainer py-5">
            <div className="titleContainer">
                <h1 className="carouselMarcasTitle">Marcas</h1>
            </div>
            <div className="container-fluid d-flex justify-content-center mt-5">
                <div className="col-12 col-sm-10 col-md-10 col-lg-8">
                    <Carousel 
                    responsive={carouselMarcasResponsive}
                    // items={3}
                    // slidesToSlide={3}
                    swipeable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2500}
                    keyBoardControl={true}
                    arrows={false}
                    transitionDuration={300}
                    containerClass="carousel-container"
                    itemClass="test">
                        {cards}
                    </Carousel>
                </div>
            </div>
        </div>

    )
}

export {CarouselMarcas}

