import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { useState } from "react";
import ItemCount from "./ItemCount"

const Details = ({ detail }) => {

  const [goToCart, setGoToCart] = useState(false)
  const { addProduct } = useCartContext()


  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(detail, quantity)
  }

  return (

    <div className="contenedoritems">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={detail.img} className="card-img-top" alt={detail.title} />
        <div className="card-body">
          <h5 className="card-title titledtl carddetails"><b>{detail.title}</b></h5>
          <p className="card-text carddetails"><b>Precio: ${detail.precio}</b></p>
          {
            goToCart
              ? <div className="cont_cmp"><Link to='/' className="finalizarcmp">Agregar mas productos</Link> <div><b>//////////</b></div> <Link to='/cart' className="finalizarcmp">Finalizar compra</Link></div>
              : <ItemCount initial={3} stock={5} onAdd={onAdd} />

          }
        </div>
      </div>
    </div>
  )
}

export default Details


