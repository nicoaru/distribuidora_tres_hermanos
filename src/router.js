import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/home/home";
import { Conocenos } from "./pages/conocenos/conocenos";
import { Productos } from "./pages/productos/productos";
import { ComoComprar } from "./pages/comoComprar/comoComprar";
import { Contacto } from "./pages/contacto/contacto";
import { PageNotFound } from "./pages/pageNotFound/pageNotFound";

function Router() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/como_comprar" element={<ComoComprar />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>


  
  );
}

export default Router;
