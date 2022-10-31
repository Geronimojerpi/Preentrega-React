import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './styles/estilos.css';
import NavBar from './components/NavBar';
import Container from './components/Container'
import DetailsContainer from './components/DetailsContainer'
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

function App() {

  return (

    <div className="App">

      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path={"/"} element={<Container />} />
            <Route path={"/categoria/:categoriaId"} element={<Container />} />
            <Route path={"/detalle/:detalleId"} element={<DetailsContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route exact path="/*" element={<NotFound/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;

