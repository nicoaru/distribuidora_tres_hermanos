import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/home/home";


function Router() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

/*
<Route path="/conocenos" element={<Conocenos />} />
<Route path="/productos" element={<Productos />} />
<Route path="/como_comprar" element={<ComoComprar />} />
<Route path="/contacto" element={<Contacto />} />
<Route path='*' element={<PageNotFound />} />
*/
  
  );
}

export default Router;
