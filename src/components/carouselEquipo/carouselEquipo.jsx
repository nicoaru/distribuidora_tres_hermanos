import React from "react";
import './carouselEquipo.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardEquipo } from "../cardEquipo/cardEquipo";
import imgMariaLaura from '../../../src/img/tienda/imgMariaLaura.png'



function CarouselEquipo() {

    let equipo = [
        {
            nombre: 'Maria Laura Pastorino',
            cargo: 'CEO',
            imgUrl: imgMariaLaura
        }
    ]

    let cards = equipo.map((obj, index) => {
        console.log(obj)
        return <CardEquipo integranteEquipo={obj} key={index} />
    })

    console.log("Equipo: ", cards)

    const carouselEquipoResponsive = {
        allDevices: {
            breakpoint: { max: 3000, min: 0 },
            items: 1,
            slidesToSlide: 1 
        }
    };



    return (

        <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="carouselEquipoContainer  col-12">
            <Carousel 
            responsive={carouselEquipoResponsive}
            // items={3}
            // slidesToSlide={3}
            swipeable={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={2500}
            keyBoardControl={false}
            arrows={false}
            transitionDuration={300}
            containerClass="carousel-container">
                {cards}
            </Carousel>
            </div>
        </div>

    )
}

export { CarouselEquipo }

