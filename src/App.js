import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect} from "react";
import './styles/estilos.css';
import NavBar from './components/NavBar';
import Container from './components/Container'
import DetailsContainer from './components/DetailsContainer'

function App() {
  
  return (

    <div className="App">

      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path={"/"} element={<Container/>}/>
            <Route exact path={"/:id"} element={<Container/>}/>
            <Route exact path={"/detail/:id"} element={<DetailsContainer/>}/>

    
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

