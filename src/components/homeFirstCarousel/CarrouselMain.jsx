import React from 'react'
import img1 from '../../img/tienda/pexels-polina-tankilevitch-4187777.jpg'
import img2 from '../../img/tienda/pexels-karolina-grabowska-5202246.jpg'; // with import
import img3 from '../../img/tienda/pexels-engin-akyurt-2531189.jpg'; // with import
import './carrouselHome.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink } from 'react-router-dom';


const CarrouselMain = () => {

    const tituloPrim = '¿Quieres comprar al por mayor?';
    const texto = 'Encuentra aqui una gran variedad de quesos para tu negocio'
    const heightImg = '80vh';

    let cards = [
        <img key={1} style={{ height: heightImg }} src={img1} />,
        <img key={2} style={{ height: heightImg }} src={img2} />,
        <img key={3} style={{ height: heightImg }} src={img3} />,
    ]

    let carouselProdResponsive = {
        0: { items: 1, slideBy: 1, margin: 0 },
        768: { items: 1, slideBy: 2, margin: 0 },
        992: { items: 1, slideBy: 3, margin: 50 },
        1200: { items: 1, slideBy: 3, margin: 80 }
    }


    return (
        <div className='main-carusel-div'>
            <div className="container-fluid d-flex justify-content-center my-5">
                <div className="carouselProductosContainer col-12">
                    <div className='img-carrusel'>
                        <OwlCarousel responsive={{ ...carouselProdResponsive }} nav autoplay={false} loop>
                            {cards}
                        </OwlCarousel>
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


