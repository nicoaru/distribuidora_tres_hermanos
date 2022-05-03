import React from "react";
import './carouselProductos.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ItemProducto } from "../itemProducto/itemProducto";
import objImg1 from '../../img/productos/cremoso-laPaulina.png'
import objImg2 from '../../img/productos/fynbo-puyehue.jpeg'
import objImg3 from '../../img/productos/azulEmperador.jpeg'
import objImg4 from '../../img/productos/cremoso-eljuan.jpeg'
import objImg5 from '../../img/productos/muzzarella-eljuan.jpeg'
import objImg6 from '../../img/productos/porSalut-eljuan.jpeg'



function CarouselProductos() {

    let productosParaMostrar = [
        {
            nombre: 'Queso fresco',
            marca: 'La Paulina',
            precio: 750,
            cantidadVenta: 'kg',
            imgUrl: objImg1
        },
        {
            nombre: 'Queso en barra Fynbo',
            marca: 'Puyehue',
            precio: 850,
            cantidadVenta: 'kg',
            imgUrl: objImg2
        },
        {
            nombre: 'Queso Azul',
            marca: 'Emperador',
            precio: '688',
            cantidadVenta: 'kg',
            imgUrl: objImg3
        },
        {
            nombre: 'Queso Cremoso',
            marca: 'El Juan',
            precio: 685,
            cantidadVenta: 'kg',
            imgUrl: objImg4
        },
        {
            nombre: 'Muzzarella',
            marca: 'El Juan',
            precio: 800,
            cantidadVenta: 'kg',
            imgUrl: objImg5
        },
        {
            nombre: 'Queso Porsalut',
            marca: 'El Juan',
            precio: 710,
            cantidadVenta: 'kg',
            imgUrl: objImg6
        },
    ]

    let cards = productosParaMostrar.map((obj, index) => {
        console.log(obj)
        return <ItemProducto producto={obj} key={index} />
    })

    console.log("Productos: ", cards)

    let carouselProdResponsive = { 0: { items: 1, slideBy: 1, margin: 0 }, 768: { items: 2, slideBy: 2, margin: 0 }, 992: { items: 3, slideBy: 3, margin: 50 }, 1200: { items: 3, slideBy: 3, margin: 80 } }


    return (

        <div className="container-fluid d-flex justify-content-center my-5">
            <div className="carouselProductosContainer  col-12 col-sm-8 col-md-10">
                <OwlCarousel responsive={{ ...carouselProdResponsive }} nav autoplay={false} loop>
                    {cards}
                </OwlCarousel>
            </div>
        </div>

    )
}

export { CarouselProductos }

