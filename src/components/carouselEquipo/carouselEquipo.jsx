import React from "react";
import './carouselEquipo.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CardEquipo } from "../cardEquipo/cardEquipo";
import imgJuanPablo from '../../../src/img/tienda/imgJuanPablo.jpg'
import imgMariaLaura from '../../../src/img/tienda/imgMariaLaura.png'
import imgFulana from '../../../src/img/tienda/imgFulana.png'
import imgFulano from '../../../src/img/tienda/imgFulano.png'



function CarouselEquipo() {

    let equipo = [
        {
            nombre: 'Juan Pablo Pastorino',
            cargo: 'Sub Gerente',
            imgUrl: imgJuanPablo
        },
        {
            nombre: 'Maria Laura Pastorino',
            cargo: 'CEO',
            imgUrl: imgMariaLaura
        },
        {
            nombre: 'Fulana',
            cargo: 'Encargada de Ventas',
            imgUrl: imgFulana
        },
        {
            nombre: 'Fulano',
            cargo: 'Encargdo de Logistica',
            imgUrl: imgFulano
        }
    ]

    let cards = equipo.map((obj, index) => {
        console.log(obj)
        return <CardEquipo integranteEquipo={obj} key={index} />
    })

    console.log("Equipo: ", cards)



    return (

        <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="carouselEquipoContainer  col-12">
                <OwlCarousel nav autoplay={false} loop items={1} slideBy={1} margin={0}>
                    {cards}
                </OwlCarousel>
            </div>
        </div>

    )
}

export { CarouselEquipo }

