import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/home/home";
import { Conocenos } from "./pages/conocenos/conocenos";
import { Productos } from "./pages/productos/productos";
import { ComoComprar } from "./pages/comoComprar/comoComprar";
import { Contacto } from "./pages/contacto/contacto";
import { PageNotFound } from "./pages/pageNotFound/pageNotFound";
import { Layout } from "./components/layout/layout";
import ListaPrecios from "./components/listadoPrecios/ListaPrecios";
import ProductProvider from "./context/ProductProvider";
import { PruebaDB } from "./components/pruebaDB/pruebaDB";
import UploadImg from "./components/uploadImg/UploadImg";
import LogIn from "./components/logIn/LogIn";
import EditarAdmin from "./components/editarAdmin/EditarAdmin";
import AuthProvider from "./context/AuthProvider";
import DetalleItem from "./components/detalleItem/DetalleItem";
import { Cart } from "./pages/cart/cart";
import { CartProvider } from "./context/cartContext";



function Router() {

  return (

    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <AuthProvider>
          <Routes>

            <Route path="/" element={<Layout />} >
              <Route exact path="/" element={<Home />} />
              <Route path="/conocenos" element={<Conocenos />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/detalle-producto" element={<DetalleItem />} />
              <Route path="/como_comprar" element={<ComoComprar />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/precios" element={<ListaPrecios />} />
              <Route path="/img" element={<UploadImg />} />
              <Route path="/privado" element={<PruebaDB />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/editar" element={<EditarAdmin />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
          </AuthProvider>
        </CartProvider>
      </ProductProvider>

    </BrowserRouter>



  );
}

export default Router;
