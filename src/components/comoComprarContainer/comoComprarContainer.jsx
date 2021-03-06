import React from "react";
import './comoComprarContainer.css';
import DescargarPrecios from '../descargaPDF/DescargarPrecios';
import { ItemComoComprar1 } from "./itemComoComprar1/itemComoComprar1";
import { ItemComoComprar2 } from './itemComoComprar2/itemComoComprar2';
import iconTelBlanco from '../../img/iconos/iconTelBlanco.png';
import iconRelojBlanco from '../../img/iconos/iconRelojBlanco.png';
import iconTelAmarillo from '../../img/iconos/iconTelAmarillo.png';
import iconCamionAmarillo from '../../img/iconos/iconCamionAmarillo.png';
import iconRelojAmarillo from '../../img/iconos/iconRelojAmarillo.png';
import iconoWhatsappAmarillo from '../../img/iconos/iconoWhatsappAmarillo.png'

function ComoComprarContainer() {
    return (
        <div>
            <div className="comoComprarSeccion1">
                <div className="titleContainer">
                    <h1>Cómo comprar</h1>
                    <p>En Distribuidora Los 3 Hermanos, vendemos nuestros productos por encargo...</p>
                </div>
                <div className="itemsContainer1 container-fluid my-4">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                        <div className="col d-flex justify-content-center mb-3">
                            <ItemComoComprar1 itemIconNumber={1} itemIconImg={iconCamionAmarillo} itemTitle={'Paso1:'} itemSubTitle={'Busca el producto'} itemText={'Despachamos a lo largo de todo Argentina'}/>
                        </div>
                        <div className="col d-flex justify-content-center mb-3">
                            <ItemComoComprar1 itemIconNumber={2} itemIconImg={iconTelAmarillo} itemTitle={'Paso2:'} itemSubTitle={'Revisa la lista de precios'} itemText={'En los productos se encuentra el precio minorista. Si quieres comprar al por mayor, descarga y revisa la lista de precios'}/>
                        </div>
                        <div className="col d-flex justify-content-center mb-3">
                            <ItemComoComprar1 itemIconNumber={3} itemIconImg={iconRelojAmarillo} itemTitle={'Paso3:'} itemSubTitle={'Agrega los productos al carrito'} itemText={'Elegí la cantidad que deseas comprar y toca el botón "Agregar al carrito" en cada producto'}/>
                        </div>
                        <div className="col d-flex justify-content-center mb-3">
                            <ItemComoComprar1 itemIconNumber={4} itemIconImg={iconoWhatsappAmarillo} itemTitle={'Paso4:'} itemSubTitle={'Envianos tu pedido por WhatsApp'} itemText={'Entrá al carrito que se encuentra en el menú superior donde podrás ver el total del pedido y toca el boton "Enviar pedido"'}/>
                        </div>
                    </div>
                </div>
            </div>
            <DescargarPrecios/>
            <div className="comoComprarSeccion2">
                <div className="comoComprarSeccion2Container container-fluid">
                    <div className="itemsContainer2">
                        <div className="items">
                            <ItemComoComprar2 itemIconImg={iconTelBlanco} itemTitle="Zona de despacho" itemText="Enviamos nuestros productos a todo el país"/>
                            <ItemComoComprar2 itemIconImg={iconRelojBlanco} itemTitle="Horario de envio" itemText="Lunes a Viernes de 8:00 a 18:00 hs"/>
                            <ItemComoComprar2 itemIconImg={iconTelBlanco} itemTitle="Tiempo de despacho" itemText="Los tiempos de despacho varían de acuerdo al destino y a la cantidad a despachar. Consulta directamente a nuestro Whatsapp +5493537512189"/>
                        </div>

                        <div className="itemsMap"> 
                            <ItemComoComprar2 itemIconImg={iconTelBlanco} itemTitle="Ubicación" itemText="Nos encontramos ubicados en Bell Ville, Córdoba, Argentina"/>
                            <div className="mapa">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53762.622453018645!2d-62.73895991466419!3d-32.62845840346848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cbfa55e1ac229f%3A0x3136c5acd2671e7f!2sBell%20Ville%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1652034288308!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="mapa"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ComoComprarContainer }