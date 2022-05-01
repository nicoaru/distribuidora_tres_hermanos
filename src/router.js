import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/home/home";
import { Conocenos } from "./pages/conocenos/conocenos";
import { Productos } from "./pages/productos/productos";
import { ComoComprar } from "./pages/comoComprar/comoComprar";
import { Contacto } from "./pages/contacto/contacto";
import { PageNotFound } from "./pages/pageNotFound/pageNotFound";
import { Layout } from "./components/layout/layout";
import DocumentPDF from "./components/pdf/DocumentPDF.jsx";

function Router() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route exact path="/" element={<Home />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/como_comprar" element={<ComoComprar />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/precios/*" element={<DocumentPDF />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>



  );
}

export default Router;
