import React from "react";
import './carouselProductos.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ItemProducto } from "../itemProducto/itemProducto";
import img from '../../img/iconos/Ilustraciones_iconos-05.png';
import { BotonLink } from "../botonLink/botonLink";

function CarouselProductos({ productosQuery, imagenes2, carouselTitle }) {
 
    // let cardsJSX


    // productosQuery[productosQuery.length - 1]?.data && imagenes2.length > 6 && 
    // (cardsJSX = productosQuery[productosQuery.length - 1].data.map((element, id) => {
    //     return <ItemProducto key={id} producto={element} img2={imagenes2[element.__EMPTY_3]} ></ItemProducto>
    // }))
    

    // Propiedades responsive del carousel
    // let carouselProdResponsive = { 0: { items: 1, slideBy: 1, margin: 0 }, 768: { items: 2, slideBy: 2, margin: 0 }, 992: { items: 3, slideBy: 3, margin: 50 }, 1200: { items: 3, slideBy: 3, margin: 80 } }
   
    const carouselProdResponsive = {
        desktop: {
          breakpoint: { max: 3000, min: 992 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 991, min: 768 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      };

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
                    {/* {console.log("casrdJSX => ", cardsJSX)} */}
                    <div className="titleContainer">
                        <h1 className="carouselProductosTitle">{carouselTitle}</h1>
                    </div>
                    <div className="container-fluid d-flex justify-content-center mt-5">
                        <div className="col-12 col-sm-8 col-md-10">
                            <Carousel 
                            responsive={carouselProdResponsive}
                            swipeable={true}
                            infinite={true}
                            autoPlay={false}
                            keyBoardControl={true}
                            arrows={true}
                            transitionDuration={300}
                            containerClass="carousel-container">
                                {
                                    productosQuery[productosQuery.length - 1].data.map((element, id) => {
                                        return <ItemProducto key={id} producto={element} img2={imagenes2[element.__EMPTY_3]} ></ItemProducto>
                                    })
                                }
                            </Carousel>
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

