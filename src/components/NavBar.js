import CartWidget from "./CartWidget";
import '../styles/estilos.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand titulo_navbar" to={`/`}>Fuark-Shop</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active subtitulos_navbar" aria-current="page" to={`/`}>INICIO</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active subtitulos_navbar" aria-current="page" to={`/categoria/hombres`}>HOMBRES</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active subtitulos_navbar" aria-current="page" to={`/categoria/mujeres`}>MUJERES</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
               
                <NavLink to={"cart"} style={{textDecoration: "none"}}>
                    <CartWidget />
                </NavLink>
  
            </nav>
        </div>
    )
}




export default NavBar;
