import React from 'react'
import img1 from '../../img/tienda/pexels-polina-tankilevitch-4187777.jpg'
import img2 from '../../img/tienda/pexels-karolina-grabowska-5202246.jpg'; // with import
import img3 from '../../img/tienda/pexels-engin-akyurt-2531189.jpg'; // with import
import './carrouselHome.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom';


const CarrouselMain = () => {

    const tituloPrim = '¿Queres comprar al por mayor?';
    const texto = 'Encontra aqui una gran variedad de quesos para tu negocio'
    const heightImg = '80vh';

    let cards = [
        <img key={1} alt='img1' style={{ height: heightImg }} src={img1} />,
        <img key={2} alt='img2' style={{ height: heightImg }} src={img2} />,
        <img key={3} alt='img3' style={{ height: heightImg }} src={img3} />,
    ]

    // let carouselProdResponsive = {
    //     0: { items: 1, slideBy: 1, margin: 0 },
    //     768: { items: 1, slideBy: 2, margin: 0 },
    //     992: { items: 1, slideBy: 3, margin: 50 },
    //     1200: { items: 1, slideBy: 3, margin: 80 }
    // }

    const carouselMainResponsive = {
        allDevices: {
            breakpoint: { max: 3000, min: 0 },
            items: 1,
            slidesToSlide: 1 
        }
    };



    return (
        <div className='main-carusel-div'>
            <div className="container-fluid d-flex justify-content-center p-0">
                <div className="carouselMainContainer col-12">
                    <div className='img-carrusel'>
                        <Carousel 
                        responsive={carouselMainResponsive}
                        // items={3}
                        // slidesToSlide={3}
                        swipeable={false} 
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2500}
                        keyBoardControl={false}
                        arrows={false}
                        transitionDuration={300}
                        containerClass="carousel-container">
                            {cards}
                        </Carousel>
                        <div className='content-screen'>
                            <div className='outerborder'>
                                <div className='cardHome'>
                                    <h3 className='text-light'>{tituloPrim}</h3>
                                    <p>{texto}</p>
                                    <NavLink className='btn como-comprar' to='/como_comprar'>COMO COMPRAR
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CarrouselMain


